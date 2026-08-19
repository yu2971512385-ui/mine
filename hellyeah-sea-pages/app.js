const audiences = {
  founders: {
    label: 'Owner-led business',
    shortLabel: 'Owners',
    href: './index.html',
    image: './assets/founders.jpg',
    imagePosition: 'center 46%',
    credit: 'Photo by Brooke Cagle on Unsplash',
    accent: '#ff5b3f',
    accentDark: '#9f2f1d',
    soft: '#fff0ec',
    heroKicker: 'For owner-led businesses across Southeast Asia',
    title: 'Hellyeah for owner-led businesses',
    hero: 'Tell us what you sell. Start your first campaign today.',
    intro: 'Paste your website, choose the result you want and set a daily limit. Hellyeah prepares the audience, ads and channel in one guided flow, ready for you to review and launch.',
    offerLine: 'Your first launch-ready campaign is included in the free pilot.',
    outcomeTitle: 'From your website to a campaign ready to launch.',
    outcomeCopy: 'Add your website, goal and customer offer. Hellyeah assembles the first campaign immediately, then shows you the audience, message and budget before anything goes live.',
    painLabel: 'Easy start, owner control',
    pains: [
      ['Start with your business', 'Use your website, offer and goal instead of learning campaign settings first.'],
      ['Get the campaign assembled', 'See the proposed audience, message, channel and daily cap together.'],
      ['Approve and start', 'Edit anything you need, connect one account and launch only when you are ready.'],
    ],
    plan: {
      name: 'Weekend booking campaign',
      objective: 'Qualified enquiries',
      audience: 'Local high-intent prospects',
      channel: 'Meta Sales',
      budget: '$35/day cap',
      status: 'Ready for owner review',
    },
    metaCopy: 'Want to start advertising without learning Ads Manager first? Add your website and goal. Hellyeah prepares the audience, ads and budget for you to review and launch.',
    metaHeadline: 'Start your first campaign free for 14 days.',
    googleHeadlines: ['Start Your First Ad Campaign', 'Free 14-Day Pilot', 'You Approve the Budget'],
    googleDescription: 'Add your website and goal. Get a Meta or Google campaign ready to review and launch. $0 today. No card.',
    funnelTitle: 'Your quickest path from website to live campaign',
    funnelCopy: 'Start with the information you already know about your business. Hellyeah turns it into a campaign, then asks for your approval at the decisions that matter.',
    funnel: [
      ['See the exact offer', 'ad_click', 'Free pilot, no card and clear limits'],
      ['Start your pilot', 'signup', 'A few details about you and your business'],
      ['Add what you sell', 'business_added', 'Website, customer offer and goal'],
      ['Choose one channel', 'ad_account_connected', 'Meta or Google, based on your demand'],
      ['Review your campaign', 'campaign_draft_created', 'Audience, ads and daily budget together'],
      ['Approve and launch', 'campaign_live', 'Your first campaign starts only when you say so'],
    ],
    businessLabel: 'Business name',
    websiteLabel: 'Business website',
    goalLabel: 'What outcome pays the bills?',
    goalOptions: ['Qualified leads', 'Online sales', 'Store visits', 'Bookings or reservations'],
    nextLabel: 'Start my first campaign',
    successTitle: 'Your first campaign is ready.',
  },
  ecommerce: {
    label: 'Ecommerce operator',
    shortLabel: 'Ecommerce',
    href: './ecommerce.html',
    image: './assets/ecommerce.jpg',
    imagePosition: 'center 42%',
    credit: 'Photo by Kampus Production on Pexels',
    accent: '#4a67ff',
    accentDark: '#2639a7',
    soft: '#edf0ff',
    heroKicker: 'For Shopify and WooCommerce operators across SEA',
    title: 'Hellyeah for ecommerce operators',
    hero: 'Pick a product. Start a sales campaign today.',
    intro: 'Connect your store, choose the product and set the sales goal. Hellyeah prepares the audience, offer, ads and budget for Meta or Google in one guided flow.',
    offerLine: 'Your first product campaign is included in the free pilot.',
    outcomeTitle: 'Turn one product page into a campaign ready to sell.',
    outcomeCopy: 'Start with the SKU, offer and margin you already know. Hellyeah assembles the campaign around one conversion goal, then you review the creative and spend before launch.',
    painLabel: 'Fast commerce launch',
    pains: [
      ['Choose one product', 'Start with a clear SKU, bundle or category instead of spreading the first budget thin.'],
      ['Get sales ads assembled', 'Hellyeah turns the product, offer and goal into channel-ready ad variations.'],
      ['Review margin and spend', 'Keep the customer offer and daily cap visible before you start selling.'],
    ],
    plan: {
      name: 'Hero product acquisition',
      objective: 'New-customer purchase',
      audience: 'Category shoppers in SEA',
      channel: 'Meta Sales + catalog',
      budget: '$60/day cap',
      status: 'Ready for operator review',
    },
    metaCopy: 'Choose the product you want to sell next. Hellyeah turns its page, offer and revenue goal into a Meta or Google campaign you can review and start.',
    metaHeadline: 'Start one product campaign free for 14 days.',
    googleHeadlines: ['Launch Your Next Product', 'Free 14-Day Store Pilot', 'Review Budget Before Launch'],
    googleDescription: 'Turn one product page into a sales campaign. Connect one account, review the ads and approve the launch.',
    funnelTitle: 'Your quickest path from product page to first sale',
    funnelCopy: 'The store and hero product provide the starting point. Hellyeah assembles a focused acquisition campaign, and you keep control of offer, margin and budget.',
    funnel: [
      ['See the product offer', 'ad_click', 'One product campaign, free pilot'],
      ['Start your pilot', 'signup', 'Operator, country and current spend'],
      ['Choose what to sell', 'business_added', 'Store URL, product and offer'],
      ['Choose one channel', 'ad_account_connected', 'Meta discovery or Google intent'],
      ['Review the sales campaign', 'campaign_draft_created', 'Product, audience, ads and cap'],
      ['Approve and start selling', 'campaign_live', 'Your first commerce campaign goes live'],
    ],
    businessLabel: 'Store name',
    websiteLabel: 'Store URL',
    goalLabel: 'What should the first campaign sell?',
    goalOptions: ['Hero product', 'New collection', 'Starter bundle', 'Seasonal offer'],
    nextLabel: 'Start my product campaign',
    successTitle: 'Your product campaign is ready.',
  },
  marketers: {
    label: 'In-house marketer',
    shortLabel: 'In-house',
    href: './marketers.html',
    image: './assets/marketers.jpg',
    imagePosition: 'center 48%',
    credit: 'Photo by Amy Hirschi on Unsplash',
    accent: '#008b6f',
    accentDark: '#005a48',
    soft: '#e7f6f2',
    heroKicker: 'For lean in-house growth teams across SEA',
    title: 'Hellyeah for in-house marketers',
    hero: 'Paste the brief. Get a campaign ready to approve today.',
    intro: 'Choose the goal, add the offer and connect one Meta or Google account. Hellyeah handles the repetitive setup and first-draft ads while your team keeps budget and launch authority.',
    offerLine: 'Your first team campaign is included in the free pilot.',
    outcomeTitle: 'Move from approved brief to launch without the setup week.',
    outcomeCopy: 'Hellyeah turns the brief into audience, message, channel and budget choices in one workspace. Stakeholders review the actual campaign instead of waiting on a separate strategy handoff.',
    painLabel: 'Faster team launch',
    pains: [
      ['Brief becomes a campaign', 'Translate the goal and constraints directly into audience, message, channel and measurement.'],
      ['Review the real setup', 'Give stakeholders one editable campaign instead of another deck or ad manager screenshot.'],
      ['Approve and launch', 'Account connection speeds up setup without giving away final launch authority.'],
    ],
    plan: {
      name: 'SEA qualified demand test',
      objective: 'Campaign activation',
      audience: 'High-intent business users',
      channel: 'Google Search',
      budget: '$100/day cap',
      status: 'Waiting for team approval',
    },
    metaCopy: 'Have an approved brief but no time for campaign setup? Hellyeah turns it into a reviewable audience, ads and budget. Your team checks the work and starts the campaign.',
    metaHeadline: 'Go from brief to campaign free for 14 days.',
    googleHeadlines: ['Turn Briefs Into Campaigns', 'Free 14-Day Team Pilot', 'Keep Final Approval'],
    googleDescription: 'Skip repetitive campaign setup. Review the audience, ads and cap, then approve the launch.',
    funnelTitle: 'Your quickest path from brief to approved launch',
    funnelCopy: 'The team begins with an existing brief and finishes with a campaign ready for accountable approval. Hellyeah accelerates setup without removing governance.',
    funnel: [
      ['See the workflow offer', 'ad_click', 'Faster setup with retained control'],
      ['Start the team pilot', 'signup', 'Marketer, company and country'],
      ['Add the approved brief', 'business_added', 'Objective, offer and constraints'],
      ['Connect the channel', 'ad_account_connected', 'One scoped Meta or Google account'],
      ['Review the actual campaign', 'campaign_draft_created', 'Audience, ads, rationale and cap'],
      ['Authorize the launch', 'campaign_live', 'The first approved campaign goes live'],
    ],
    businessLabel: 'Company name',
    websiteLabel: 'Company website',
    goalLabel: 'Which workflow needs to move faster?',
    goalOptions: ['New campaign launch', 'Cross-channel test', 'Lead generation', 'Market expansion'],
    nextLabel: 'Start my team campaign',
    successTitle: 'Your team campaign is ready.',
  },
  agencies: {
    label: 'Small agency',
    shortLabel: 'Agencies',
    href: './agencies.html',
    image: './assets/agencies.jpg',
    imagePosition: 'center 44%',
    credit: 'Photo by Annie Spratt on Unsplash',
    accent: '#d37b21',
    accentDark: '#8b4d10',
    soft: '#fff2e5',
    heroKicker: 'For small agencies and independent media buyers across SEA',
    title: 'Hellyeah for small agencies',
    hero: 'Add the client brief. Get the campaign ready to launch.',
    intro: 'Turn the goal, offer and budget into audience and ads in one client-safe workspace. Your team reviews first, your client approves second, then the campaign can start.',
    offerLine: 'Your first client campaign is included in the free pilot.',
    outcomeTitle: 'Start the next client campaign without rebuilding every step.',
    outcomeCopy: 'Hellyeah handles the repetitive setup and first-draft ads while assumptions, edits, budgets and approvals stay visible to the agency and client.',
    painLabel: 'Faster client launch',
    pains: [
      ['Brief becomes campaign', 'Convert the client goal, offer and budget into a coherent setup without rebuilding the structure.'],
      ['Client reviews the real work', 'Show audience, ads, budget and launch status in one readable workspace.'],
      ['Two approvals, one launch', 'Keep agency edits and client approval together before the campaign starts.'],
    ],
    plan: {
      name: 'Client acquisition sprint',
      objective: 'Qualified lead',
      audience: 'Validated buyer segments',
      channel: 'Meta prospecting',
      budget: '$150/day client cap',
      status: 'Ready for client approval',
    },
    metaCopy: 'A signed brief should lead to a campaign, not another setup queue. Hellyeah prepares the audience, ads and budget for your team and client to approve.',
    metaHeadline: 'Start the next client campaign free for 14 days.',
    googleHeadlines: ['Launch Client Campaigns Faster', 'Free 14-Day Client Pilot', 'Client Approval Built In'],
    googleDescription: 'Turn one client brief into a Meta or Google campaign. Review together, then approve the first launch.',
    funnelTitle: 'Your quickest path from client brief to approved launch',
    funnelCopy: 'The agency starts with a signed brief and ends with a client-approved campaign. One workspace carries the goal, ads, budget and approval through the whole path.',
    funnel: [
      ['See the capacity offer', 'ad_click', 'Faster launch with client control'],
      ['Start the agency pilot', 'signup', 'Agency, market and current spend'],
      ['Add one client brief', 'business_added', 'Client, offer, objective and cap'],
      ['Connect the client channel', 'ad_account_connected', 'One scoped ad account'],
      ['Review together', 'campaign_draft_created', 'Agency edits, client sees the same setup'],
      ['Approve and launch', 'campaign_live', 'The first client campaign goes live'],
    ],
    businessLabel: 'Agency name',
    websiteLabel: 'Agency website',
    goalLabel: 'Which client workflow should the pilot prove?',
    goalOptions: ['New client launch', 'Campaign refresh', 'Lead generation', 'Cross-channel plan'],
    nextLabel: 'Start my client campaign',
    successTitle: 'Your client campaign is ready.',
  },
}

const audienceKey = document.body.dataset.audience
const audience = audiences[audienceKey] || audiences.founders
const app = document.querySelector('#app')

const navItems = Object.entries(audiences).map(([key, item]) => `
  <a href="${item.href}" class="audience-nav__item ${key === audienceKey ? 'is-active' : ''}" ${key === audienceKey ? 'aria-current="page"' : ''}>${item.shortLabel}</a>
`).join('')

const planRows = Object.entries(audience.plan).filter(([key]) => key !== 'name' && key !== 'status').map(([key, value]) => `
  <div class="plan-row"><span>${key}</span><strong>${value}</strong></div>
`).join('')

const painRows = audience.pains.map(([title, copy], index) => `
  <article class="control-row reveal">
    <span>0${index + 1}</span>
    <h3>${title}</h3>
    <p>${copy}</p>
  </article>
`).join('')

const funnelSteps = audience.funnel.map(([title, event, detail], index) => `
  <li class="funnel-step reveal" data-event="${event}">
    <span class="funnel-step__number">${String(index + 1).padStart(2, '0')}</span>
    <div><h3>${title}</h3><p>${detail}</p></div>
  </li>
`).join('')

const goalOptions = audience.goalOptions.map((option) => `<option value="${option}">${option}</option>`).join('')

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Hellyeah home">
      <span class="brand__mark" aria-hidden="true">H!</span>
      <span class="brand__name">Hellyeah</span>
    </a>
    <nav class="audience-nav" aria-label="Audience landing pages">${navItems}</nav>
    <button class="header-cta" type="button" data-open-pilot>Start free pilot</button>
  </header>

  <main id="top">
    <section class="hero" style="--hero-position: ${audience.imagePosition}">
      <img class="hero__image" src="${audience.image}" alt="${audience.label} working on a campaign" fetchpriority="high" decoding="async" />
      <div class="hero__shade" aria-hidden="true"></div>
      <div class="shell hero__inner">
        <p class="kicker">${audience.heroKicker}</p>
        <h1>${audience.title}</h1>
        <p class="hero__promise">${audience.hero}</p>
        <p class="hero__copy">${audience.intro}</p>
        <div class="hero__actions">
          <button class="primary-button" type="button" data-open-pilot>Start free 14-day pilot <span aria-hidden="true">&gt;</span></button>
          <a class="text-button" href="#how-it-works">See how it works</a>
        </div>
        <p class="hero__note">$0 today. No card. Built for teams spending under US$50K/month.</p>
      </div>
    </section>

    <section class="offer-strip" aria-label="Pilot offer">
      <div class="shell offer-strip__inner">
        <strong>14-day pilot / $0 today</strong>
        <span>1. Add your site</span>
        <span>2. Choose goal + offer</span>
        <span>3. Review ads + budget</span>
        <span>4. Approve the launch</span>
      </div>
    </section>

    <section class="outcome section" id="how-it-works">
      <div class="shell outcome__layout">
        <div class="section-copy reveal">
          <p class="kicker kicker--dark">${audience.offerLine}</p>
          <h2>${audience.outcomeTitle}</h2>
          <p>${audience.outcomeCopy}</p>
          <button class="secondary-button" type="button" data-open-pilot>Start my first campaign <span aria-hidden="true">&gt;</span></button>
        </div>
        <div class="product-preview reveal" aria-label="Launch-ready campaign preview">
          <div class="product-preview__top">
            <div><span class="product-preview__logo">H!</span><strong>First campaign</strong></div>
            <span class="status-dot">Auto-built</span>
          </div>
          <div class="product-preview__title">
            <span>01 / FIRST CAMPAIGN</span>
            <h3>${audience.plan.name}</h3>
          </div>
          <div class="plan-table">${planRows}</div>
          <div class="approval-bar">
            <div><span>Launch status</span><strong>${audience.plan.status}</strong></div>
            <button type="button" aria-label="Approval control preview" disabled>Approve &amp; launch</button>
          </div>
        </div>
      </div>
    </section>

    <section class="controls section">
      <div class="shell">
        <div class="section-heading reveal">
          <p class="kicker kicker--dark">${audience.painLabel}</p>
          <h2>AI handles the setup.<br />You choose the goal, budget and launch.</h2>
        </div>
        <div class="control-list">${painRows}</div>
      </div>
    </section>

    <section class="ads section" id="ad-mockups">
      <div class="shell ads__layout">
        <div class="section-copy section-copy--light reveal">
          <p class="kicker">Message-matched ad samples</p>
          <h2>The offer is visible before the click.</h2>
          <p>See the ads your audience would receive before you connect an account. The pilot terms and the outcome stay consistent from first click to launch.</p>
          <div class="ad-tabs" role="tablist" aria-label="Ad sample format">
            <button class="is-active" type="button" role="tab" aria-selected="true" data-ad-tab="meta">Meta feed</button>
            <button type="button" role="tab" aria-selected="false" data-ad-tab="google">Google Search</button>
          </div>
        </div>

        <div class="ad-stage reveal">
          <article class="meta-ad" data-ad-panel="meta" aria-label="Meta advertisement sample">
            <div class="meta-ad__header">
              <span class="meta-ad__avatar">H!</span>
              <div><strong>Hellyeah</strong><span>Sponsored</span></div>
              <span class="meta-ad__more" aria-hidden="true">...</span>
            </div>
            <p class="meta-ad__copy">${audience.metaCopy}</p>
            <div class="meta-ad__creative" style="background-image: url('${audience.image}')">
              <div class="meta-ad__offer"><span>SEA LAUNCH OFFER</span><strong>14 DAYS<br />FREE</strong><small>$0 TODAY / NO CARD</small></div>
            </div>
            <div class="meta-ad__link">
              <div><span>HELLYEAH.AI</span><strong>${audience.metaHeadline}</strong><small>One campaign. One account. You approve the launch.</small></div>
              <button type="button" data-open-pilot>Start free pilot</button>
            </div>
            <div class="meta-ad__social" aria-hidden="true"><span>Like</span><span>Comment</span><span>Share</span></div>
          </article>

          <article class="google-ad" data-ad-panel="google" aria-label="Google Search advertisement sample" hidden>
            <p class="google-ad__sponsored"><strong>Sponsored</strong> <span>hellyeah.ai / sea-pilot</span></p>
            <h3>${audience.googleHeadlines.join(' | ')}</h3>
            <p>${audience.googleDescription}</p>
            <div class="google-ad__sitelinks">
              <a href="#offer-terms" tabindex="-1"><strong>See pilot terms</strong><span>14 days, one campaign, no card</span></a>
              <a href="#how-it-works" tabindex="-1"><strong>Start a campaign</strong><span>Add your site, goal and customer offer</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="funnel section" id="funnel">
      <div class="shell funnel__layout">
        <div class="section-copy reveal">
          <p class="kicker kicker--dark">Your path to launch</p>
          <h2>${audience.funnelTitle}</h2>
          <p>${audience.funnelCopy}</p>
        </div>
        <ol class="funnel-list">${funnelSteps}</ol>
      </div>
    </section>

    <section class="faq section">
      <div class="shell faq__layout">
        <div class="section-heading reveal">
          <p class="kicker kicker--dark">Before you start</p>
          <h2>Clear terms.<br />No surprise launch.</h2>
        </div>
        <div class="faq-list reveal">
          <details open><summary>What exactly is free?</summary><p>The 14-day pilot includes one workspace, one launch-ready campaign and one connected Meta or Google Ads account. Media spend is not included.</p></details>
          <details><summary>Can Hellyeah launch without me?</summary><p>No. Connecting an account is separate from approval. The first campaign stays in draft until the named owner approves the audience, message and budget.</p></details>
          <details><summary>Who is the pilot for?</summary><p>New teams in Malaysia, the Philippines, Singapore or Thailand with monthly ad spend below US$50K. Teams above that level are routed to a guided evaluation.</p></details>
          <details><summary>Which channel can I use?</summary><p>Choose one Meta or Google Ads account for the pilot. The plan recommends a starting channel based on your goal, but you approve the final choice.</p></details>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <div class="shell final-cta__inner reveal">
        <p class="kicker">Malaysia / Philippines / Singapore / Thailand</p>
        <h2>Add your goal.<br />Review the campaign. Start marketing.</h2>
        <button class="primary-button" type="button" data-open-pilot>Start free 14-day pilot <span aria-hidden="true">&gt;</span></button>
        <p>$0 today. No card. Media spend not included.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="offer-terms">
    <div class="shell site-footer__inner">
      <div><strong>Hellyeah</strong><span>AI-assisted campaign launch for SEA teams.</span></div>
      <p><strong>Offer terms:</strong> New qualified teams spending under US$50K/month. One business, one connected Meta or Google account, one launch-ready campaign, 14 days. Media spend is excluded. Launch requires explicit approval.</p>
      <p>${audience.credit}. Prototype offer and interface for campaign review.</p>
    </div>
  </footer>

  <dialog class="pilot-dialog" aria-labelledby="pilot-title">
    <form class="pilot-form" novalidate>
      <div class="pilot-dialog__header">
        <div><span>FREE 14-DAY PILOT</span><h2 id="pilot-title">${audience.nextLabel}</h2></div>
        <button class="icon-button" type="button" data-close-pilot aria-label="Close pilot form">x</button>
      </div>
      <ol class="pilot-progress" aria-label="Pilot progress">
        <li class="is-active" data-progress="1"><span>1</span><small>Signup</small></li>
        <li data-progress="2"><span>2</span><small>Campaign</small></li>
        <li data-progress="3"><span>3</span><small>Connect</small></li>
        <li data-progress="4"><span>4</span><small>Review</small></li>
      </ol>

      <section class="pilot-step is-active" data-step="1">
        <p class="pilot-step__eyebrow">Step 1 / Qualification</p>
        <h3>Create your free pilot</h3>
        <p>No card. The pilot is designed for teams spending under US$50K per month.</p>
        <div class="form-grid">
          <label>Full name<input name="name" autocomplete="name" required /></label>
          <label>Work email<input name="email" type="email" autocomplete="email" required /></label>
          <label>Country<select name="country" required><option value="">Select country</option><option>Malaysia</option><option>Philippines</option><option>Singapore</option><option>Thailand</option></select></label>
          <label>Monthly ad spend<select name="spend" required><option value="">Select range</option><option value="under5">Under US$5K</option><option value="5to20">US$5K-US$20K</option><option value="20to50">US$20K-US$50K</option><option value="over50">Above US$50K</option></select></label>
        </div>
        <p class="qualification-note" data-qualification-note hidden>Above US$50K? You can continue, and we will route this to a guided evaluation instead of the self-serve pilot.</p>
      </section>

      <section class="pilot-step" data-step="2" hidden>
        <p class="pilot-step__eyebrow">Step 2 / Your campaign</p>
        <h3>Tell us what you want to promote</h3>
        <p>Add the site, goal and customer offer. Hellyeah uses them to assemble your first campaign.</p>
        <div class="form-grid">
          <label>${audience.businessLabel}<input name="business" autocomplete="organization" required /></label>
          <label>${audience.websiteLabel}<input name="website" type="url" inputmode="url" placeholder="https://" required /></label>
          <label class="form-grid__wide">${audience.goalLabel}<select name="goal" required><option value="">Select one</option>${goalOptions}</select></label>
          <label class="form-grid__wide">What is the customer offer?<textarea name="offer" rows="3" placeholder="What the customer gets, price or incentive, and any limits" required></textarea></label>
        </div>
      </section>

      <section class="pilot-step" data-step="3" hidden>
        <p class="pilot-step__eyebrow">Step 3 / Ad account</p>
        <h3>Choose one channel for the pilot</h3>
        <p>This prototype simulates account selection and never asks for credentials. Production uses the platform's scoped connection flow.</p>
        <input name="platform" type="hidden" required />
        <div class="connect-options">
          <button type="button" data-connect="Meta Ads"><span class="platform-mark platform-mark--meta">M</span><span><strong>Meta Ads</strong><small>Facebook and Instagram campaigns</small></span><b>Connect</b></button>
          <button type="button" data-connect="Google Ads"><span class="platform-mark platform-mark--google">G</span><span><strong>Google Ads</strong><small>Search campaigns for active demand</small></span><b>Connect</b></button>
        </div>
        <p class="connection-status" aria-live="polite">No account selected.</p>
      </section>

      <section class="pilot-step" data-step="4" hidden>
        <p class="pilot-step__eyebrow">Step 4 / Review gate</p>
        <h3>Your campaign is ready to review</h3>
        <p>Check the goal, offer, channel and daily cap. Nothing launches without the explicit approval below.</p>
        <div class="review-summary">
          <div><span>Business</span><strong data-review="business"></strong></div>
          <div><span>Country</span><strong data-review="country"></strong></div>
          <div><span>Goal</span><strong data-review="goal"></strong></div>
          <div><span>Channel</span><strong data-review="platform"></strong></div>
          <div><span>Customer offer</span><strong data-review="offer"></strong></div>
          <label>Daily media budget cap<input name="dailyBudget" type="number" min="5" max="5000" value="50" required /><small>Paid to the ad platform; not included in the free pilot.</small></label>
        </div>
        <label class="approval-check"><input name="approval" type="checkbox" required /><span>I have reviewed this draft. Launch only after my explicit approval.</span></label>
      </section>

      <section class="pilot-success" hidden>
        <span class="success-mark" aria-hidden="true">OK</span>
        <h3>${audience.successTitle}</h3>
        <p data-success-copy>This interactive prototype completed the launch flow. In production, secure Meta or Google authorization would submit the campaign after your approval.</p>
        <div class="success-events"><span>Business added</span><span>Channel selected</span><span>Budget approved</span></div>
      </section>

      <div class="pilot-actions">
        <button class="back-button" type="button" data-back hidden>Back</button>
        <button class="primary-button" type="button" data-next>Continue <span aria-hidden="true">&gt;</span></button>
      </div>
    </form>
  </dialog>
`

document.documentElement.style.setProperty('--accent', audience.accent)
document.documentElement.style.setProperty('--accent-dark', audience.accentDark)
document.documentElement.style.setProperty('--accent-soft', audience.soft)

const eventStoreKey = 'hellyeah-sea-prototype-events'
const fallbackEvents = []
const emitEvent = (eventName, detail = {}) => {
  const entry = { event: eventName, audience: audienceKey, detail, timestamp: new Date().toISOString() }
  try {
    const storedEvents = JSON.parse(localStorage.getItem(eventStoreKey) || '[]')
    const current = Array.isArray(storedEvents) ? storedEvents : []
    localStorage.setItem(eventStoreKey, JSON.stringify([...current.slice(-99), entry]))
  } catch (error) {
    fallbackEvents.push(entry)
    window.hellyeahPrototypeEvents = fallbackEvents.slice(-100)
  }
  window.dispatchEvent(new CustomEvent('hellyeah:event', { detail: entry }))
}

emitEvent('landing_view', { path: window.location.pathname })

document.querySelectorAll('[data-ad-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-ad-tab]').forEach((item) => {
      const selected = item === tab
      item.classList.toggle('is-active', selected)
      item.setAttribute('aria-selected', String(selected))
    })
    document.querySelectorAll('[data-ad-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.adPanel !== tab.dataset.adTab
    })
  })
})

const revealItems = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' })

  revealItems.forEach((item) => revealObserver.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}

const dialog = document.querySelector('.pilot-dialog')
const form = document.querySelector('.pilot-form')
const nextButton = document.querySelector('[data-next]')
const backButton = document.querySelector('[data-back]')
const qualificationNote = document.querySelector('[data-qualification-note]')
const spendSelect = form.elements.spend
let currentStep = 1

const openPilotDialog = () => {
  document.body.classList.add('dialog-open')
  if (typeof dialog.showModal === 'function') {
    dialog.showModal()
  } else {
    document.body.classList.add('dialog-fallback-open')
    dialog.setAttribute('open', '')
    dialog.classList.add('is-fallback-open')
  }
}

const closePilotDialog = () => {
  if (typeof dialog.close === 'function' && dialog.open) {
    dialog.close()
  } else {
    dialog.removeAttribute('open')
    dialog.classList.remove('is-fallback-open')
    dialog.dispatchEvent(new Event('close'))
  }
}

const showStep = (step) => {
  currentStep = step
  document.querySelectorAll('.pilot-step').forEach((panel) => {
    const active = Number(panel.dataset.step) === step
    panel.classList.toggle('is-active', active)
    panel.hidden = !active
  })
  document.querySelectorAll('[data-progress]').forEach((item) => {
    const itemStep = Number(item.dataset.progress)
    item.classList.toggle('is-active', itemStep === step)
    item.classList.toggle('is-complete', itemStep < step)
  })
  backButton.hidden = step === 1
  nextButton.innerHTML = step === 4 ? 'Approve &amp; launch <span aria-hidden="true">&gt;</span>' : 'Continue <span aria-hidden="true">&gt;</span>'
}

const validateStep = (step) => {
  if (step === 3 && !form.elements.platform.value) {
    document.querySelector('.connection-status').textContent = 'Select one ad platform to continue.'
    return false
  }
  const panel = document.querySelector(`[data-step="${step}"]`)
  const fields = [...panel.querySelectorAll('[required]:not([type="hidden"])')]
  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity()
      return false
    }
  }
  return true
}

const fillReview = () => {
  const data = new FormData(form)
  document.querySelectorAll('[data-review]').forEach((item) => {
    item.textContent = data.get(item.dataset.review) || '-'
  })
}

document.querySelectorAll('[data-open-pilot]').forEach((button) => {
  button.addEventListener('click', () => {
    const adPanel = button.closest('[data-ad-panel]')
    const sourceSection = button.closest('section')
    if (adPanel) emitEvent('ad_click', { format: adPanel.dataset.adPanel })
    emitEvent('signup_started', { source: sourceSection ? sourceSection.className : 'header' })
    openPilotDialog()
    window.setTimeout(() => form.elements.name.focus(), 50)
  })
})

document.querySelector('[data-close-pilot]').addEventListener('click', closePilotDialog)
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closePilotDialog()
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && dialog.hasAttribute('open')) closePilotDialog()
})

spendSelect.addEventListener('change', () => {
  qualificationNote.hidden = spendSelect.value !== 'over50'
})

document.querySelectorAll('[data-connect]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-connect]').forEach((item) => {
      item.classList.remove('is-connected')
      item.querySelector('b').textContent = 'Connect'
    })
    button.classList.add('is-connected')
    button.querySelector('b').textContent = 'Selected'
    form.elements.platform.value = button.dataset.connect
    document.querySelector('.connection-status').textContent = `${button.dataset.connect} selected for the prototype pilot.`
  })
})

nextButton.addEventListener('click', () => {
  if (nextButton.dataset.complete === 'true') {
    closePilotDialog()
    return
  }

  if (!validateStep(currentStep)) return

  if (currentStep === 1) {
    emitEvent('signup', { country: form.elements.country.value, spend: form.elements.spend.value })
    showStep(2)
  } else if (currentStep === 2) {
    emitEvent('business_added', { goal: form.elements.goal.value })
    showStep(3)
  } else if (currentStep === 3) {
    emitEvent('ad_account_connected', { platform: form.elements.platform.value, simulated: true })
    fillReview()
    emitEvent('campaign_draft_created', { platform: form.elements.platform.value })
    showStep(4)
  } else if (currentStep === 4) {
    const enterprisePath = form.elements.spend.value === 'over50'
    emitEvent(enterprisePath ? 'guided_evaluation_requested' : 'campaign_live', {
      platform: form.elements.platform.value,
      dailyBudget: form.elements.dailyBudget.value,
      simulated: true,
    })
    document.querySelectorAll('.pilot-step, .pilot-progress').forEach((item) => { item.hidden = true })
    document.querySelector('.pilot-success').hidden = false
    document.querySelector('.pilot-success').classList.add('is-active')
    document.querySelector('[data-success-copy]').innerHTML = enterprisePath
      ? 'Your spend level is above the self-serve pilot limit, so the next step is a guided evaluation before account connection or launch.'
      : 'This interactive prototype completed the launch flow. In production, secure Meta or Google authorization would submit the campaign after your approval.'
    backButton.hidden = true
    nextButton.textContent = 'Close'
    nextButton.dataset.complete = 'true'
  }
})

backButton.addEventListener('click', () => {
  if (currentStep > 1) showStep(currentStep - 1)
})

dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open')
  document.body.classList.remove('dialog-fallback-open')
  dialog.classList.remove('is-fallback-open')
  if (nextButton.dataset.complete !== 'true') return
  form.reset()
  delete nextButton.dataset.complete
  nextButton.innerHTML = 'Continue <span aria-hidden="true">&gt;</span>'
  document.querySelector('.pilot-success').hidden = true
  document.querySelector('.pilot-success').classList.remove('is-active')
  document.querySelector('.pilot-progress').hidden = false
  document.querySelectorAll('[data-connect]').forEach((item) => {
    item.classList.remove('is-connected')
    item.querySelector('b').textContent = 'Connect'
  })
  document.querySelector('.connection-status').textContent = 'No account selected.'
  qualificationNote.hidden = true
  showStep(1)
})
