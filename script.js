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
  app: {
    label: '订阅 App',
    signal: 'Trial、Subscribe、Renewal',
    cohort: '国家、版本和订阅周期',
    metrics: {
      cac: '预测 90D LTV / CAC',
      creative: '付费用户 CAC / 素材母题',
      data: 'MMP 收入与后台收入偏差',
      scale: '深层事件密度 / 市场容量',
    },
  },
  ecom: {
    label: 'DTC 电商',
    signal: '订单毛利、新客身份、退款与复购价值',
    cohort: '商品、市场和新老客',
    metrics: {
      cac: '新客贡献利润 / CAC',
      creative: '新客收入 / 素材母题',
      data: '净收入与平台收入偏差',
      scale: '边际 MER / 可售库存',
    },
  },
  saas: {
    label: 'AI / SaaS',
    signal: 'MQL、SQL、激活、Pipeline 与成交',
    cohort: '意图、行业和销售阶段',
    metrics: {
      cac: 'Pipeline Value / CAC',
      creative: '合格 Pipeline / 信息角度',
      data: 'CRM 成交与平台转化偏差',
      scale: 'SQL 密度 / 可服务市场',
    },
  },
}

const bottleneckDiagnosis = {
  cac: {
    label: '获客成本',
    titles: {
      app: 'CPI 下降不等于增长。先确认买来的用户会不会付费和续费。',
      ecom: '订单 ROAS 还能看，但新客贡献利润正在被折扣、退款和物流吃掉。',
      saas: '表单成本不是 CAC。销售不接、不能成交的线索，本质上没有价值。',
    },
    details: {
      app: '如果系统仍以安装或浅层试用学习，它会持续购买最容易转化、却最不可能长期付费的人。',
      ecom: '如果平台只看订单金额，它会偏向复购客、低毛利 SKU 和折扣订单，让表面回报掩盖真实亏损。',
      saas: '如果优化目标停在 Lead，算法会放大便宜表单，而不是更接近 SQL、Pipeline 和成交的需求。',
    },
    experiments: {
      app: '隔离安装优化与付费价值优化，对比国家 Cohort 的付费率和续费率',
      ecom: '按新客、SKU 毛利与退款率重算广告组贡献利润',
      saas: '把 Lead、MQL、SQL 与成交拆开回传，重排意图词和受众',
    },
  },
  creative: {
    label: '素材衰退',
    titles: {
      app: '不是视频拍少了，而是用户为什么安装、为什么付费还没有被拆清楚。',
      ecom: '爆款衰退不可怕。可怕的是团队只复制画面，没有复制购买理由。',
      saas: 'SaaS 素材失效，通常不是设计问题，而是价值承诺没有对准决策角色。',
    },
    details: {
      app: '把功能展示、使用场景、即时收益和订阅证据混在一条素材里，团队就无法知道哪一个变量真正推动高价值用户。',
      ecom: '同一商品需要拆开痛点、使用场景、差异化证据、价格锚点和社会证明，才能持续生成下一代素材。',
      saas: '使用者、部门负责人和采购者关心的风险不同。单一卖点无法同时推动点击、激活和进入销售流程。',
    },
    experiments: {
      app: '建立场景 × 核心收益 × 付费证据矩阵，并按订阅质量判定素材',
      ecom: '建立人群 × 痛点 × 承诺 × 证据矩阵，保留胜出母题而非单条视频',
      saas: '按使用者、负责人、采购者分别测试价值承诺与可信证据',
    },
  },
  data: {
    label: '归因失真',
    titles: {
      app: 'SKAN、MMP 与订阅后台给出三个答案时，任何自动扩量都没有可靠地基。',
      ecom: '平台收入不等于净收入。重复事件、退款和新老客混算会直接误导预算。',
      saas: '广告平台看见了表单，CRM 看见了成交；两者没连上，智能出价就会学错。',
    },
    details: {
      app: '安装、试用、订阅和续费需要明确事件所有者、去重方式与收入口径，并按可观测窗口解释差异。',
      ecom: 'Pixel、CAPI、支付系统和订单后台需要使用一致的 event_id、币种与净收入定义。',
      saas: '线索创建、销售接受、Pipeline 和 Closed Won 必须拥有稳定 ID，才能把离线价值送回渠道。',
    },
    experiments: {
      app: '抽样核对设备事件、MMP 收入和订阅后台，并记录各窗口偏差',
      ecom: '逐单核对 Pixel/CAPI 去重、退款和新客标记，建立净收入对账',
      saas: '用 Lead ID 串联广告点击、CRM 阶段和成交金额，验证离线回传',
    },
  },
  scale: {
    label: '预算花不出',
    titles: {
      app: '预算花不出，不一定是受众小；也可能是高价值事件太少，系统不敢交付。',
      ecom: '电商扩量受限往往同时来自库存、素材覆盖、出价边界和市场容量。',
      saas: '高客单 SaaS 不能靠放宽受众硬扩量，必须先增加合格信号和需求入口。',
    },
    details: {
      app: '深层事件密度、国家容量、素材覆盖和出价约束共同决定系统能否越过学习期。',
      ecom: 'Hero SKU 可售天数、Feed 完整度、新客价值与创意覆盖任何一项不足，都会限制新增预算。',
      saas: '搜索需求、可触达决策角色、销售承接和回传速度共同形成交付上限。',
    },
    experiments: {
      app: '按信号密度、国家容量、素材覆盖和出价约束的顺序解除限速',
      ecom: '按 SKU 库存、市场、素材覆盖和边际 MER 建立扩量候选池',
      saas: '扩展高意图主题与决策角色，同时守住 SQL 和 Pipeline 质量',
    },
  },
}

const stageContext = {
  zero: {
    label: '从 0 到 1',
    heading: '从 0 到 1：',
    detail: '当前不是追求规模，而是用最少预算确认产品、信号、市场和素材能否形成闭环。',
    budget: '只保留验证预算；达到信号密度和质量门槛后逐阶增加',
    step: '建立一个市场、一类核心用户和一个深层转化的最小验证结构',
    exit: '连续两个观察窗口达到质量门槛后，再开放下一档预算',
  },
  scale: {
    label: '规模扩量',
    heading: '规模扩量：',
    detail: '当前重点是辨认下一美元的边际回报，不能用历史平均值替新增预算背书。',
    budget: '将新增预算移向边际质量稳定的市场、素材和用户 Cohort',
    step: '把存量结果拆成基准盘与增量盘，单独观察新增预算的边际效率',
    exit: '边际效率和回收周期守住目标后，再迁移并放大预算',
  },
  recovery: {
    label: '效率修复',
    heading: '效率修复：',
    detail: '当前先停止结构性亏损，保护仍然有效的信号，再逐步恢复学习。',
    budget: '冻结亏损扩量；预算只留给可解释、可对账的有效单元',
    step: '按损失规模排序账户、市场和素材，先关闭无法解释的预算泄漏',
    exit: '核心指标回到修复线并稳定两个周期后，再小步恢复预算',
  },
}

const renderDiagnosis = () => {
  const model = modelContext[state.model]
  const stage = stageContext[state.stage]
  const diagnosis = bottleneckDiagnosis[state.bottleneck]
  document.getElementById('diagnosis-code').textContent = `${modelNames[state.model]}-${stageNames[state.stage]}-${bottleneckNames[state.bottleneck]}`
  document.getElementById('diagnosis-selection').textContent = `${model.label} / ${stage.label} / ${diagnosis.label}`
  document.getElementById('diagnosis-title').textContent = `${stage.heading}${diagnosis.titles[state.model]}`
  document.getElementById('diagnosis-detail').textContent = `${diagnosis.details[state.model]} ${stage.detail}`
  document.getElementById('control-metric').textContent = model.metrics[state.bottleneck]
  document.getElementById('budget-action').textContent = stage.budget
  const sequences = [
    `校准${model.signal}的价值、去重和回传`,
    `${stage.step}，并按${model.cohort}建立质量 Cohort`,
    diagnosis.experiments[state.model],
    stage.exit,
  ]
  document.getElementById('decision-sequence').innerHTML = sequences.map((item, index) => `<li><span>0${index + 1}</span>${item}</li>`).join('')

  const output = document.querySelector('.os-output')
  output.classList.remove('is-refreshed')
  requestAnimationFrame(() => output.classList.add('is-refreshed'))
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

renderDiagnosis()

const supportsServiceWorker = location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname)

if ('serviceWorker' in navigator && supportsServiceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {})
  })
}
