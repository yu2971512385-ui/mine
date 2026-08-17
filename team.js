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

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav))

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

const supportsServiceWorker = location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname)

if ('serviceWorker' in navigator && supportsServiceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {})
  })
}
