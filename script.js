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
}, { threshold: 0.12, rootMargin: '0px 0px -40px' })

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

const platformCapabilities = {
  meta: {
    advantage: {
      scene: '已验证商品进入规模扩量，需要减少结构摩擦',
      decision: '不问平均 ROAS，先看新客贡献利润能否抵住预算上移',
      action: '用价值信号、市场分层与素材母题给算法更大自由度',
      guardrail: '边际 CAC 连续穿透目标，且高价值新客占比同步下降',
    },
    app: {
      scene: 'App 已跑通安装，但付费、订阅或留存质量不稳定',
      decision: '低 CPI 是否正在吸入大量不激活、不付费的低价值用户',
      action: '重建 Install → Trial → Pay → Renewal 事件阶梯，按国家和付费质量回传价值',
      guardrail: '安装成本下降，但付费率、续费率或预测 LTV 持续变差',
    },
    catalog: {
      scene: 'SKU 多、库存变化快，需要让商品与需求自动匹配',
      decision: 'Feed 准确度、库存和单品毛利，是否足以支撑自动扩量',
      action: '按 Hero SKU、利润带与用户阶段拆商品集，联动动态素材和排除规则',
      guardrail: '预算集中到低毛利 SKU，或再营销订单掩盖新客效率',
    },
    capi: {
      scene: '浏览器信号损失、事件重复，导致平台与业务后台偏差扩大',
      decision: '优化事件是否能去重、校验，并稳定对应真实订单价值',
      action: '统一 event_id、金额、币种与客户信息，建立 Pixel + CAPI 双路校验',
      guardrail: '重复事件推高表面 ROAS，或平台收入长期无法与后台对账',
    },
  },
  google: {
    search: {
      scene: '需求已经存在，但高价值意图被泛词和无效查询稀释',
      decision: '搜索词的商业强度和后续收入质量，比表面 CPA 更重要',
      action: '按意图、地域、价值与落地页重排关键词结构和预算',
      guardrail: '无效查询比例上升，或高价值转化回传已经失真',
    },
    pmax: {
      scene: '电商或多库存业务需要跨版位捕获已验证需求',
      decision: '增长来自真正的增量，还是品牌词和再营销对结果的重复记账',
      action: '校准 Feed、素材组与价值出价，隔离品牌需求并设置新客价值',
      guardrail: '品牌流量占比抬高、低毛利商品放量，导致表面 ROAS 虚高',
    },
    app: {
      scene: 'App 需要从安装量转向激活、订阅、购买或长期收入',
      decision: '当前转化事件能否提供足够密度，同时代表真实商业价值',
      action: '打通 Firebase/MMP 深层事件，按市场与价值阶段迁移优化目标',
      guardrail: 'CPI 改善但付费用户、留存或回收周期持续恶化',
    },
    youtube: {
      scene: '新品或新市场需要教育用户，并扩大高质量需求入口',
      decision: '视频是否提升品牌搜索和高意图访问，而不只是累积观看',
      action: '按受众假设编排 Hook、证据和行动序列，联动搜索承接需求',
      guardrail: '观看指标漂亮，但合格访问、品牌搜索和增量转化没有变化',
    },
  },
  tiktok: {
    smart: {
      scene: '产品已找到可复制的原生素材母题，需要自动化扩展',
      decision: '广告组结构不是主角，素材新鲜度和高价值信号密度才是',
      action: '将验证过的 Hook、证据和场景做变体，让系统自动扩展',
      guardrail: '扩量依赖单一爆款，或深层事件密度低于学习需求',
    },
    spark: {
      scene: '达人或品牌原生内容已有真实互动，需要转化成可放大的信任',
      decision: '内容的互动是否来自目标用户，并能继续推动深层行为',
      action: '按人设、场景和证据选择授权内容，保留原生评论与社交证明',
      guardrail: '高互动没有进入站后转化，或达人受众与产品购买者错位',
    },
    app: {
      scene: 'App 需要快速验证国家、受众场景和付费事件组合',
      decision: '便宜安装能否形成激活、付费和留存，而不是一次性流量',
      action: '用事件阶梯分阶段训练系统，并按国家 Cohort 比较真实收入质量',
      guardrail: '安装规模增长，但次留、付费率或预测收入同步下降',
    },
    events: {
      scene: '浏览器信号缺失，导致归因波动和深层事件学习不足',
      decision: '客户端与服务端事件能否去重，并对应同一笔真实业务行为',
      action: '统一 event_id、用户参数与价值字段，持续对账 Pixel 和 Events API',
      guardrail: '事件数量异常膨胀，或平台转化长期高于业务后台',
    },
  },
}

document.querySelectorAll('.metric__explorer').forEach((explorer, explorerIndex) => {
  const platform = explorer.dataset.platform
  const buttons = [...explorer.querySelectorAll('[role="tab"]')]
  const detail = explorer.querySelector('.capability-detail')

  buttons.forEach((button, buttonIndex) => {
    const tabId = `capability-tab-${explorerIndex}-${buttonIndex}`
    button.id = tabId

    button.addEventListener('click', () => {
      const content = platformCapabilities[platform]?.[button.dataset.capability]
      if (!content) return

      buttons.forEach((item) => {
        item.classList.toggle('is-active', item === button)
        item.setAttribute('aria-selected', String(item === button))
      })

      detail.setAttribute('aria-labelledby', tabId)
      detail.classList.add('is-updating')
      window.setTimeout(() => {
        Object.entries(content).forEach(([field, value]) => {
          detail.querySelector(`[data-capability-field="${field}"]`).textContent = value
        })
        detail.classList.remove('is-updating')
      }, 90)
    })

    button.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
      event.preventDefault()
      let targetIndex = buttonIndex
      if (event.key === 'ArrowLeft') targetIndex = (buttonIndex - 1 + buttons.length) % buttons.length
      if (event.key === 'ArrowRight') targetIndex = (buttonIndex + 1) % buttons.length
      if (event.key === 'Home') targetIndex = 0
      if (event.key === 'End') targetIndex = buttons.length - 1
      buttons[targetIndex].focus()
      buttons[targetIndex].click()
    })
  })
})

const state = { model: 'app', stage: 'scale', bottleneck: 'cac' }
const modelNames = { app: 'APP', ecom: 'ECOM', saas: 'SAAS' }
const stageNames = { zero: 'ZERO', scale: 'SCALE', recovery: 'RECOVERY' }
const bottleneckNames = { cac: 'CAC', creative: 'CREATIVE', data: 'DATA', scale: 'DELIVERY' }

const modelContext = {
  app: { metric: '预测 90D LTV / CAC', signal: 'Trial、Subscribe、Renewal', cohort: '国家和订阅周期' },
  ecom: { metric: '新客贡献利润 / CAC', signal: '订单毛利、新客与复购价值', cohort: '商品、市场和新老客' },
  saas: { metric: 'Pipeline Value / CAC', signal: 'MQL、SQL、激活与成交', cohort: '意图、行业和销售阶段' },
}

const bottleneckDiagnosis = {
  cac: { title: '问题大概率不在流量价格，而在优化信号仍停留在浅层事件。', detail: '当账户用低门槛事件驱动预算扩量，算法会放大“便宜但低价值”的用户。先把真实商业价值送回系统，再讨论放量。', action: '冻结低价值扩量，按商业质量重排预算' },
  creative: { title: '素材衰退不是产量问题，而是用户洞察没有形成可重复的变量。', detail: '持续换画面无法延长增长周期。需要把人群、痛点、承诺、证据、钩子和形式拆开，才能知道爆款为何成立。', action: '保留有效母题，停止无假设的素材消耗' },
  data: { title: '归因失真时继续优化，只是在用更快速度放大错误。', detail: '浏览器、服务端、分析工具与业务后台承担不同角色。先统一结算、归因和优化口径，再恢复自动化决策。', action: '暂停激进迁移，先完成事件去重与价值校准' },
  scale: { title: '预算花不出通常不是受众太窄，而是系统没有足够可信的转化自由度。', detail: '出价约束、信号密度、素材覆盖和市场容量共同限制交付。放宽定向只是最后一步，不是第一反应。', action: '按信号、素材、市场、出价顺序解除限速' },
}

const stageModifier = {
  zero: '当前处于冷启动阶段，优先建立最小可验证闭环，避免过早追求规模。',
  scale: '当前处于规模阶段，所有动作必须通过边际效率和回收周期审查。',
  recovery: '当前处于修复阶段，先停止结构性亏损，再逐步恢复学习与预算。',
}

const renderDiagnosis = () => {
  const model = modelContext[state.model]
  const diagnosis = bottleneckDiagnosis[state.bottleneck]
  document.getElementById('diagnosis-code').textContent = `${modelNames[state.model]}-${stageNames[state.stage]}-${bottleneckNames[state.bottleneck]}`
  document.getElementById('diagnosis-title').textContent = diagnosis.title
  document.getElementById('diagnosis-detail').textContent = `${diagnosis.detail}${stageModifier[state.stage]}`
  document.getElementById('control-metric').textContent = model.metric
  document.getElementById('budget-action').textContent = diagnosis.action
  const sequences = [
    `校准 ${model.signal} 的价值、去重和回传`,
    `按${model.cohort}建立真实质量 Cohort`,
    state.bottleneck === 'creative' ? '建立母题、变量和衰退监测的素材实验矩阵' : '隔离浅层信号与高价值优化结构',
    state.stage === 'zero' ? '完成最小闭环后再逐阶增加预算' : state.stage === 'recovery' ? '达到修复门槛后分阶段恢复预算' : '确认边际效率后迁移并放大预算',
  ]
  document.getElementById('decision-sequence').innerHTML = sequences.map((item, index) => `<li><span>0${index + 1}</span>${item}</li>`).join('')
}

document.querySelectorAll('[data-control]').forEach((group) => {
  group.querySelectorAll('button').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.classList.contains('is-active')))
    button.addEventListener('click', () => {
      group.querySelectorAll('button').forEach((item) => {
        item.classList.remove('is-active')
        item.setAttribute('aria-pressed', 'false')
      })
      button.classList.add('is-active')
      button.setAttribute('aria-pressed', 'true')
      state[group.dataset.control] = button.dataset.value
      renderDiagnosis()
    })
  })
})

const supportsServiceWorker = location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname)

if ('serviceWorker' in navigator && supportsServiceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {})
  })
}
