const toggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.nav')
const backTop = document.querySelector('.back-top')

const closeNav = () => {
  nav.classList.remove('open')
  document.body.classList.remove('nav-open')
  toggle.setAttribute('aria-expanded', 'false')
  toggle.setAttribute('aria-label', '打开导航')
}

toggle.addEventListener('click', () => {
  const open = !nav.classList.contains('open')
  nav.classList.toggle('open', open)
  document.body.classList.toggle('nav-open', open)
  toggle.setAttribute('aria-expanded', String(open))
  toggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航')
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeNav()
    toggle.focus()
  }
})

nav.querySelectorAll('a, button').forEach((item) => item.addEventListener('click', closeNav))

window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 900)
}, { passive: true })

document.getElementById('year').textContent = new Date().getFullYear()

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    observer.unobserve(entry.target)
  })
}, { threshold: 0.1, rootMargin: '0px 0px -30px' })

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

const profiles = window.UA_TEAM_PROFILES || []
const profileList = document.getElementById('profile-list')
const detail = document.getElementById('profile-detail')
let activeProfile = null
let contactRequestId = 0

const renderProfileContact = async () => {
  if (!activeProfile) return

  const requestId = ++contactRequestId
  const auth = window.siteAuth
  const button = document.getElementById('profile-contact-login')
  const emailLink = document.getElementById('profile-contact-email')
  const copy = document.getElementById('profile-contact-copy')
  const title = document.getElementById('profile-contact-title')

  title.textContent = `联系 ${activeProfile.name}`
  emailLink.hidden = true
  emailLink.removeAttribute('href')
  button.hidden = false
  button.disabled = false
  button.removeAttribute('data-state')

  if (!auth?.isConfigured) {
    copy.textContent = '身份服务尚未连接，邮箱保持隐藏。'
    button.textContent = '联系功能待启用'
    button.dataset.state = 'setup'
    return
  }

  if (!auth.user) {
    copy.textContent = '公开资料可浏览；登录后才能查看对应邮箱。'
    button.textContent = '登录后查看邮箱'
    return
  }

  copy.textContent = '正在验证账号权限并读取联系方式。'
  button.textContent = '正在读取…'
  button.disabled = true
  const { data, error } = await auth.getUaContact(activeProfile.id)
  if (requestId !== contactRequestId) return

  if (error) {
    copy.textContent = '联系方式读取失败，请重新登录后再试。'
    button.textContent = '查看我的账号'
    button.disabled = false
    return
  }

  if (!data?.email) {
    copy.textContent = '这位优化师暂未录入公开联系邮箱。'
    button.textContent = '查看其他优化师'
    button.disabled = true
    return
  }

  copy.textContent = '账号权限已验证，可直接发起邮件。'
  button.hidden = true
  emailLink.hidden = false
  emailLink.href = `mailto:${data.email}?subject=${encodeURIComponent(`海外投放合作咨询 / ${activeProfile.role}`)}`
  emailLink.textContent = data.email
}

const setList = (id, values) => {
  const list = document.getElementById(id)
  list.replaceChildren(...values.map((value, index) => {
    const item = document.createElement('li')
    const number = document.createElement('span')
    number.textContent = String(index + 1).padStart(2, '0')
    const copy = document.createElement('strong')
    copy.textContent = value
    item.append(number, copy)
    return item
  }))
}

const setText = (id, value) => {
  document.getElementById(id).textContent = value
}

const renderProfile = (profile, activeButton) => {
  if (!profile) return
  activeProfile = profile

  profileList.querySelectorAll('[role="tab"]').forEach((button) => {
    const active = button === activeButton
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-selected', String(active))
    button.tabIndex = active ? 0 : -1
  })

  detail.classList.add('is-changing')
  window.setTimeout(() => {
    setText('profile-code', profile.code)
    setText('profile-name', profile.name)
    setText('profile-role', profile.role)
    setText('profile-status', profile.status)
    setText('profile-summary', profile.summary)
    setText('profile-channels', profile.channels.join(' · '))
    setText('profile-products', profile.products.join(' · '))
    setText('profile-markets', profile.markets.join(' · '))
    setText('profile-experience', profile.experience)
    setText('profile-view', `“${profile.operatingView}”`)
    setList('profile-strengths', profile.strengths)
    setList('profile-fit', profile.fit)
    setList('profile-first-week', profile.firstWeek)

    const photo = document.getElementById('profile-photo')
    photo.replaceChildren()
    if (profile.photo) {
      const image = document.createElement('img')
      image.src = profile.photo
      image.alt = `${profile.name}的照片`
      photo.append(image)
    } else {
      const code = document.createElement('strong')
      code.textContent = profile.code.replace('UA-', '')
      const label = document.createElement('span')
      label.textContent = 'PHOTO / 待上传'
      photo.append(code, label)
    }

    detail.setAttribute('aria-labelledby', activeButton.id)
    detail.classList.remove('is-changing')
    renderProfileContact()
  }, 100)
}

profiles.forEach((profile, index) => {
  const button = document.createElement('button')
  button.type = 'button'
  button.id = `profile-tab-${profile.id}`
  button.dataset.profile = profile.id
  button.setAttribute('role', 'tab')
  button.setAttribute('aria-selected', String(index === 0))
  button.tabIndex = index === 0 ? 0 : -1
  button.classList.toggle('is-active', index === 0)

  const code = document.createElement('span')
  code.textContent = profile.code
  const identity = document.createElement('span')
  const name = document.createElement('strong')
  name.textContent = profile.name
  const role = document.createElement('small')
  role.textContent = profile.role
  identity.append(name, role)
  const arrow = document.createElement('b')
  arrow.setAttribute('aria-hidden', 'true')
  arrow.textContent = '›'
  button.append(code, identity, arrow)

  button.addEventListener('click', () => renderProfile(profile, button))
  button.addEventListener('keydown', (event) => {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let nextIndex = index
    if (['ArrowUp', 'ArrowLeft'].includes(event.key)) nextIndex = (index - 1 + profiles.length) % profiles.length
    if (['ArrowDown', 'ArrowRight'].includes(event.key)) nextIndex = (index + 1) % profiles.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = profiles.length - 1
    const nextButton = profileList.children[nextIndex]
    nextButton.focus()
    nextButton.click()
  })

  profileList.append(button)
})

document.getElementById('profile-count').textContent = String(profiles.length).padStart(2, '0')
renderProfile(profiles[0], profileList.querySelector('button'))
window.addEventListener('site-auth-change', renderProfileContact)

const supportsServiceWorker = location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname)

if ('serviceWorker' in navigator && supportsServiceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {})
  })
}
