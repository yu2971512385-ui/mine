(() => {
  const config = window.AUTH_CONFIG || {}
  const isConfigured = Boolean(
    config.supabaseUrl?.startsWith('https://')
    && config.supabasePublishableKey
    && window.supabase?.createClient,
  )
  const client = isConfigured
    ? window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
    : null

  let currentUser = null
  let activeMode = 'login'

  const modal = document.createElement('div')
  modal.className = 'auth-modal'
  modal.hidden = true
  modal.innerHTML = `
    <div class="auth-modal__backdrop" data-auth-close></div>
    <section class="auth-dialog" role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <header class="auth-dialog__header">
        <div><p>ACCOUNT ACCESS</p><h2 id="auth-title">登录后联系 UA</h2></div>
        <button class="auth-dialog__close" type="button" aria-label="关闭登录窗口" data-auth-close>×</button>
      </header>
      <div class="auth-unconfigured" id="auth-unconfigured" hidden>
        <strong>联系功能待启用</strong>
        <p>管理员尚未连接身份服务。公开资料仍可浏览，但邮箱不会显示。</p>
      </div>
      <div class="auth-session" id="auth-session" hidden>
        <span>当前账号</span>
        <strong id="auth-user-email"></strong>
        <p>你现在可以在 UA Team 页面查看已录入的优化师邮箱。</p>
        <button type="button" id="auth-signout">退出账号</button>
      </div>
      <div id="auth-entry">
        <div class="auth-tabs" role="tablist" aria-label="账号操作">
          <button class="is-active" type="button" role="tab" aria-selected="true" data-auth-mode="login">登录</button>
          <button type="button" role="tab" aria-selected="false" data-auth-mode="register">注册账号</button>
        </div>
        <form class="auth-form" id="auth-form">
          <label>邮箱<input id="auth-email" type="email" autocomplete="email" required placeholder="name@company.com" /></label>
          <label>密码<input id="auth-password" type="password" autocomplete="current-password" minlength="8" required placeholder="至少 8 位" /></label>
          <button class="auth-form__submit" type="submit" id="auth-submit">登录并查看联系方式</button>
        </form>
        <p class="auth-form__status" id="auth-status" role="status"></p>
        <p class="auth-dialog__note">注册即表示你同意仅将联系方式用于真实业务沟通，不进行批量抓取或骚扰。</p>
      </div>
    </section>
  `
  document.body.append(modal)

  const entry = modal.querySelector('#auth-entry')
  const unavailable = modal.querySelector('#auth-unconfigured')
  const sessionPanel = modal.querySelector('#auth-session')
  const form = modal.querySelector('#auth-form')
  const emailInput = modal.querySelector('#auth-email')
  const passwordInput = modal.querySelector('#auth-password')
  const submit = modal.querySelector('#auth-submit')
  const status = modal.querySelector('#auth-status')
  const modeButtons = [...modal.querySelectorAll('[data-auth-mode]')]

  const setStatus = (message, type = '') => {
    status.textContent = message
    status.dataset.type = type
  }

  const setMode = (mode) => {
    activeMode = mode
    modeButtons.forEach((button) => {
      const active = button.dataset.authMode === mode
      button.classList.toggle('is-active', active)
      button.setAttribute('aria-selected', String(active))
    })
    passwordInput.autocomplete = mode === 'login' ? 'current-password' : 'new-password'
    submit.textContent = mode === 'login' ? '登录并查看联系方式' : '创建账号'
    setStatus('')
  }

  const renderAuthState = () => {
    document.querySelectorAll('[data-auth-account]').forEach((button) => {
      button.textContent = currentUser ? '我的账号' : '账号登录'
      button.dataset.authenticated = String(Boolean(currentUser))
    })
    unavailable.hidden = isConfigured
    sessionPanel.hidden = !isConfigured || !currentUser
    entry.hidden = !isConfigured || Boolean(currentUser)
    modal.querySelector('#auth-user-email').textContent = currentUser?.email || ''
  }

  const open = (mode = 'login') => {
    setMode(mode)
    renderAuthState()
    modal.hidden = false
    document.body.classList.add('auth-modal-open')
    window.setTimeout(() => {
      const target = currentUser || !isConfigured ? modal.querySelector('.auth-dialog__close') : emailInput
      target.focus()
    }, 20)
  }

  const close = () => {
    modal.hidden = true
    document.body.classList.remove('auth-modal-open')
    setStatus('')
  }

  const broadcast = () => {
    renderAuthState()
    window.dispatchEvent(new CustomEvent('site-auth-change', {
      detail: { configured: isConfigured, user: currentUser },
    }))
  }

  const readableError = (error) => {
    if (!error) return '请求失败，请稍后再试。'
    if (/invalid login credentials/i.test(error.message)) return '邮箱或密码不正确。'
    if (/already registered/i.test(error.message)) return '这个邮箱已经注册，请直接登录。'
    if (/password/i.test(error.message)) return '密码至少需要 8 位。'
    return error.message || '请求失败，请稍后再试。'
  }

  document.querySelectorAll('[data-auth-open]').forEach((button) => {
    button.addEventListener('click', () => open())
  })
  modal.querySelectorAll('[data-auth-close]').forEach((button) => button.addEventListener('click', close))
  modeButtons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.authMode)))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close()
  })

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (!client) return

    submit.disabled = true
    submit.textContent = activeMode === 'login' ? '正在登录…' : '正在创建…'
    setStatus('')

    const credentials = { email: emailInput.value.trim(), password: passwordInput.value }
    const result = activeMode === 'login'
      ? await client.auth.signInWithPassword(credentials)
      : await client.auth.signUp({
        ...credentials,
        options: { emailRedirectTo: `${location.origin}${location.pathname}` },
      })

    submit.disabled = false
    submit.textContent = activeMode === 'login' ? '登录并查看联系方式' : '创建账号'
    if (result.error) {
      setStatus(readableError(result.error), 'error')
      return
    }

    if (activeMode === 'register' && !result.data.session) {
      setStatus('账号已创建。请先打开验证邮件完成确认，再回来登录。', 'success')
      return
    }

    currentUser = result.data.user
    setStatus('登录成功。', 'success')
    broadcast()
  })

  modal.querySelector('#auth-signout').addEventListener('click', async () => {
    if (!client) return
    await client.auth.signOut()
    currentUser = null
    broadcast()
    setMode('login')
  })

  window.siteAuth = {
    isConfigured,
    get user() { return currentUser },
    open,
    close,
    async getUaContact(optimizerId) {
      if (!client || !currentUser) return { data: null, error: new Error('AUTH_REQUIRED') }
      return client
        .from('ua_contacts')
        .select('optimizer_id,email')
        .eq('optimizer_id', optimizerId)
        .eq('is_active', true)
        .maybeSingle()
    },
  }

  renderAuthState()
  if (client) {
    client.auth.getSession().then(({ data }) => {
      currentUser = data.session?.user || null
      broadcast()
    })
    client.auth.onAuthStateChange((_event, session) => {
      currentUser = session?.user || null
      broadcast()
    })
  } else {
    broadcast()
  }
})()
