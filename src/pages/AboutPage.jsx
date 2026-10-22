import React from 'react';
import founderImg from '../assets/founder.jpg';

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow & Hero Intro */}
      <section className="relative w-full overflow-hidden bg-surface py-space-2xl">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-surface-container-highest/60 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10">
          <div className="max-w-3xl flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-primary-container font-label-md text-label-md uppercase tracking-wider w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              ABOUT AKSHAR DIGITAL MARKETING
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary font-extrabold tracking-tight">
              Built on Integrity, Data, and Relentless Focus on <span className="text-secondary-container">Client ROI</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Founded in Vadodara, Gujarat, we bridge the gap between abstract marketing hype and tangible, bankable business growth. We discard empty impressions to engineer high-velocity inbound pipelines.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <div className="flex items-center gap-space-xs text-on-surface font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Vadodara HQ & Global Reach
              </div>
              <span className="text-outline-variant">•</span>
              <div className="flex items-center gap-space-xs text-on-surface font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Direct Founder Oversight
              </div>
              <span className="text-outline-variant">•</span>
              <div className="flex items-center gap-space-xs text-on-surface font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Strict ROAS Accountability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="w-full bg-surface-container-lowest py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
            {/* Founder Visual Column with Accent Layering */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl bg-surface-container pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high aspect-[4/5] max-h-[520px]">
                <img alt="Nilesh Vaghani, Founder of Akshar Digital Marketing" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out" src={founderImg} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-container via-primary-container/70 to-transparent p-space-lg pb-16 text-on-primary">
                  <div className="font-headline-sm text-headline-sm font-bold leading-snug">Nilesh Vaghani</div>
                  <div className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">Founder & Chief Growth Strategist</div>
                </div>
              </div>
              {/* Credential Floating Pill */}
              <div className="absolute -bottom-5 left-6 bg-surface-container-lowest text-on-surface rounded-xl p-space-md shadow-lg flex items-center gap-space-sm z-20">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary-container">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                </div>
                <div>
                  <div className="font-title-lg text-title-lg font-bold text-primary-container">8+ Years</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Growth & Performance Leadership</div>
                </div>
              </div>
            </div>

            {/* Founder Story Column */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md text-secondary-container font-semibold uppercase tracking-widest">Leadership Narrative</span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  Engineering Predictable Revenue, Not Pointless Clicks.
                </h2>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-low text-primary-container shadow-sm flex flex-col gap-space-sm relative">
                <span className="material-symbols-outlined text-secondary-container text-3xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-body-lg text-body-lg font-medium italic leading-relaxed text-on-surface">
                  “Your digital growth isn’t just our job—it’s our personal strategy and commitment. When your balance sheet scales with measurable returns, our mission succeeds.”
                </p>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">— Nilesh Vaghani</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                With over 150+ intensive campaigns deployed across Indian e-commerce, export manufacturing, multi-specialty healthcare, and tier-1 retail brands, Nilesh established Akshar Digital Marketing out of frustration with agency vanity metrics.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Traditional agencies flaunt impressions and cost-per-click while client balance sheets stay stagnant. At Akshar, we realigned the marketing compass: combining disciplined search intent, algorithmic ad architecture on Google and Meta, and localized behavioral data to capture real purchase intent.
              </p>
              {/* Badges / Certifications Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-xs">
                <div className="p-space-sm rounded-lg bg-surface flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-secondary-container">workspace_premium</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Google Certified</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-secondary-container">verified_user</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Meta Growth Expert</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface flex items-center gap-space-xs shadow-sm">
                  <span className="material-symbols-outlined text-on-tertiary-container">query_stats</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Attribution Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Proof Strip */}
      <section className="w-full bg-primary-container text-on-primary py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div>
              <span className="font-label-md text-label-md text-secondary-container uppercase tracking-widest font-bold">Track Record</span>
              <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold mt-1">Our Agency By The Numbers</h2>
            </div>
            <p className="font-body-sm text-body-sm text-surface-container-highest max-w-md">
              Verifiable commercial outcomes engineered across hyper-competitive sectors throughout Gujarat and Pan-India markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {/* Metric 1 */}
            <div className="p-space-lg rounded-2xl bg-surface-container/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-secondary-container text-3xl">campaign</span>
                <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">+100% Verified</span>
              </div>
              <div className="my-space-md">
                <div className="font-metric-display text-metric-display text-on-primary font-extrabold group-hover:text-secondary-fixed-dim transition-colors">150+</div>
                <div className="font-title-lg text-title-lg font-semibold text-surface-container-highest mt-1">Successful Campaigns</div>
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 leading-normal">Covering lead-gen, e-commerce direct sales, and local GMB dominance.</p>
            </div>
            {/* Metric 2 */}
            <div className="p-space-lg rounded-2xl bg-surface-container/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-secondary-container text-3xl">currency_rupee</span>
                <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">Audited</span>
              </div>
              <div className="my-space-md">
                <div className="font-metric-display text-metric-display text-on-primary font-extrabold group-hover:text-secondary-fixed-dim transition-colors">₹38.4 Cr+</div>
                <div className="font-title-lg text-title-lg font-semibold text-surface-container-highest mt-1">Client Revenue Generated</div>
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 leading-normal">Directly attributable revenue captured through targeted paid acquisition.</p>
            </div>
            {/* Metric 3 */}
            <div className="p-space-lg rounded-2xl bg-surface-container/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-secondary-container text-3xl">trending_up</span>
                <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">Performance</span>
              </div>
              <div className="my-space-md">
                <div className="font-metric-display text-metric-display text-on-primary font-extrabold group-hover:text-secondary-fixed-dim transition-colors">4.2x</div>
                <div className="font-title-lg text-title-lg font-semibold text-surface-container-highest mt-1">Average Portfolio ROAS</div>
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 leading-normal">Sustainable return on ad spend across omnichannel funnel experiments.</p>
            </div>
            {/* Metric 4 */}
            <div className="p-space-lg rounded-2xl bg-surface-container/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-secondary-container text-3xl">handshake</span>
                <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">Annual</span>
              </div>
              <div className="my-space-md">
                <div className="font-metric-display text-metric-display text-on-primary font-extrabold group-hover:text-secondary-fixed-dim transition-colors">98%</div>
                <div className="font-title-lg text-title-lg font-semibold text-surface-container-highest mt-1">Client Retention Rate</div>
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high/80 leading-normal">Long-term strategic retainers nurtured through honest accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Operating Values */}
      <section className="w-full bg-surface py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-space-2xl flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-secondary-container uppercase tracking-widest font-semibold">Our Principles</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">The Standards We Refuse to Compromise</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">We built Akshar on values that eliminate typical agency friction and guarantee relentless client trust.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {/* Value Card 1 */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-low group-hover:bg-secondary-container group-hover:text-on-primary text-secondary-container flex items-center justify-center transition-colors mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">visibility</span>
                </div>
                <div className="font-label-md text-label-md text-secondary-container font-bold mb-1">01 / INTEGRITY</div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-sm">Radical Transparency</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  No hidden markups, opaque spreadsheets, or black-box billing. You get live, unvarnished Looker Studio dashboards tracking every Rupee spent.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs text-on-tertiary-container font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> Live Client Portal
              </div>
            </div>
            {/* Value Card 2 */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-low group-hover:bg-secondary-container group-hover:text-on-primary text-secondary-container flex items-center justify-center transition-colors mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">analytics</span>
                </div>
                <div className="font-label-md text-label-md text-secondary-container font-bold mb-1">02 / RIGOR</div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-sm">Data Over Guesswork</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We never launch on gut feeling. Every ad creative, landing page layout, and bid schedule is validated against user telemetry and conversion patterns.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs text-on-tertiary-container font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> Statistically Sound Testing
              </div>
            </div>
            {/* Value Card 3 */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-low group-hover:bg-secondary-container group-hover:text-on-primary text-secondary-container flex items-center justify-center transition-colors mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">supervisor_account</span>
                </div>
                <div className="font-label-md text-label-md text-secondary-container font-bold mb-1">03 / ACCESS</div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-sm">Direct Senior Attention</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You won't be passed down to junior account executives. Nilesh and seasoned growth architects directly oversee your roadmap and weekly sprint calls.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs text-on-tertiary-container font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> Direct Slack / WhatsApp Line
              </div>
            </div>
            {/* Value Card 4 */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-low group-hover:bg-secondary-container group-hover:text-on-primary text-secondary-container flex items-center justify-center transition-colors mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">bolt</span>
                </div>
                <div className="font-label-md text-label-md text-secondary-container font-bold mb-1">04 / SPEED</div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-sm">Agile Execution</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Markets shift in days, not quarters. We roll out weekly optimization sprints, continuous creative refreshes, and rapid negative keyword scrubbing.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs text-on-tertiary-container font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> Weekly Sprint Deliverables
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Roots & Headquarters Showcase */}
      <section className="w-full bg-surface-container-low py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-highest text-primary-container font-label-md text-label-md uppercase font-semibold w-fit">
                <span className="material-symbols-outlined text-secondary-container text-base">pin_drop</span>
                VADODARA, GUJARAT HEADQUARTERS
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold leading-tight">
                Rooted in Industrial Grit, Scaling Across National Borders.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Vadodara is Gujarat’s cultural powerhouse and a booming industrial capital. Our home base provides us with a distinct analytical edge: an intimate knowledge of high-ticket B2B manufacturing, engineering exports, and rapidly expanding regional consumer retail markets.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We pair this grounded, real-economy commercial mindset with world-class digital performance marketing frameworks. Whether you are a local engineering firm in GIDC looking to secure global RFQs or a pan-India D2C brand, our roots keep our strategies rooted in profitability.
              </p>
              {/* Key Local Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-container mt-0.5">factory</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg font-bold text-primary">B2B & Industrial Focus</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Tailored sales-cycles for complex machinery, chemicals, and industrial suppliers.</p>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-container mt-0.5">store</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg font-bold text-primary">Regional Retail Dominance</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Hyperlocal GMB map dominance and high-converting vernacular ad campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Headquarters Interactive Map Mockup & Visual */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="w-full h-80 rounded-2xl shadow-lg bg-surface-container-highest flex flex-col justify-end p-space-lg relative overflow-hidden" data-location="Vadodara, Gujarat, India" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbJlz1_x4i_McjlczgA6Is2Nt9K2NGpnnyqBU1plMFRdeJzXk404o45gyO5dykjJkZWbKklFjMadEPSynnH5K8PBQXiQWv1kzwdh12Hm6dA5f_smUagwK9hbAXciE1qBqeWa36EZd5UiTeKKfz-wVfcja1aHxZN6hB_ohCzasZtuUnasTLmKdXMObqiE1D1xWLn3rAV0TLBOBc1D7zFKrx4UU70PG-QS5jSFbonNU6cB8k8GM2wBPcvQ')" }}>
                {/* Overlay Info Badge */}
                <div className="relative z-10 p-space-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">location_city</span>
                    </div>
                    <div>
                      <div className="font-title-lg text-title-lg font-bold text-primary">Vadodara Innovation Hub</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Gujarat, Western India</div>
                    </div>
                  </div>
                  <a className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-secondary-container transition-colors shrink-0" href="https://maps.google.com/?q=Vadodara+Gujarat" rel="noopener noreferrer" target="_blank">
                    Directions
                  </a>
                </div>
              </div>
              {/* Secondary Image Grid: Local Team Culture */}
              <div className="grid grid-cols-2 gap-space-md">
                <div className="h-44 rounded-xl overflow-hidden shadow-sm relative group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern collaborative digital marketing agency office in Vadodara Gujarat, growth strategists brainstorming performance charts on a glass board under bright soft studio lighting with warm wood desks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGwhW3Uu40qF07bmY3hYWVay1-y04zIoxHtsoidNZDANe7Wp1GE4kPeCWKBd4tNqNitYTHyk2yM6m2ptsMibxFhTmCOjXu3Aqwk88JF0hSzrgWq-OkbzXNB-85Dujk5TESEBQ_o0eVv-Sp-VC4jp-C7G4Y-cwY-4xPkF-dGk_GJEYhPd5lyjHuiBeN-HDfhJJmXpz9dgsFxNyZb4iZAnoaKLmG8Ym9NWwK5cSFW9nguwGUxHXEIOXotA" />
                  <div className="absolute inset-0 bg-primary-container/20"></div>
                  <div className="absolute bottom-2 left-3 text-on-primary font-label-md text-label-md font-bold drop-shadow">Strategy & Analytics Lab</div>
                </div>
                <div className="h-44 rounded-xl overflow-hidden shadow-sm relative group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Digital marketing team reviewing conversion rates on laptops in an upscale modern workspace in Gujarat India with indoor green plants and minimal architectural details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiUHXw3rR2Fi3j89SFHW-NNKjG_YOPekj5eJ-6cvWu7-PPTNiz7jKVNlFJynIAizO180zKGEekCKzWKMbbjd1kqyYDx4gat169LCY4cbNbFpNpxsDbZOzUzyez9oWpl25ZjZ0vAeCyCKbQUeTupHHmwpU6sq5-NhIjDG6djFuC-y8FG7tdNMN8RLEAbNqMHW9czY-zAqHgDI7pBB6glTq2PqXLWN3YOPB-W8ux9orHtQEP0tO_9Xkiqg" />
                  <div className="absolute inset-0 bg-primary-container/20"></div>
                  <div className="absolute bottom-2 left-3 text-on-primary font-label-md text-label-md font-bold drop-shadow">Weekly Sprint Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capabilities & Growth Process */}
      <section className="w-full bg-surface-container-lowest py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
            <div>
              <span className="font-label-md text-label-md text-secondary-container uppercase tracking-widest font-bold">Execution Engine</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">Our Integrated Growth Pods</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              Specialized units operating synchronously to audit, build, run, and scale multi-channel acquisition funnels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Pod 1 */}
            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-secondary-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">insights</span>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-primary-container/60">POD 01</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Paid Acquisition & Search</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  High-intent Google Search, Shopping, Meta remarketing, and programmatic display engineered to lower customer acquisition costs.
                </p>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Search Query & Bid Modifiers</li>
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Dynamic Remarketing Engines</li>
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Meta Advantage+ Optimization</li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-sm text-on-surface-variant font-label-md text-label-md">Average CPA Reduction: <strong className="text-on-tertiary-container">-34%</strong></div>
            </div>
            {/* Pod 2 */}
            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-secondary-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">conversion_path</span>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-primary-container/60">POD 02</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Conversion Rate Architecture</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Traffic is futile if it bounces. We build lightning-fast, psychologically calibrated WordPress and Shopify conversion landers.
                </p>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Heatmap & Scroll Telemetry</li>
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Frictionless Lead Capture Forms</li>
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Sub-second Page Load Latency</li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-sm text-on-surface-variant font-label-md text-label-md">Avg. Conversion Lift: <strong className="text-on-tertiary-container">+48%</strong></div>
            </div>
            {/* Pod 3 */}
            <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-secondary-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">radar</span>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-primary-container/60">POD 03</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Organic & Local Dominance</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Sustainable compounding traffic through technical on-page SEO, high-authority backlink development, and Google Maps Local Pack rank-1 conquest.
                </p>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Google Business Profile Optimization</li>
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>High-Intent Commercial Keyword Clusters</li>
                  <li className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>Automated Review Ingestion Flows</li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-sm text-on-surface-variant font-label-md text-label-md">Top 3 Map Pack Visibility: <strong className="text-on-tertiary-container">92% Clients</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Direct Consultation CTA Banner */}
      <section className="w-full bg-surface py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="rounded-3xl bg-primary-container text-on-primary p-space-xl lg:p-space-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
            <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-surface-container/10 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container/10 text-secondary-fixed-dim font-label-md text-label-md uppercase font-semibold w-fit">
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                  DIRECT FOUNDER ENGAGEMENT
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold tracking-tight">
                  Ready to discuss realistic revenue targets with Nilesh?
                </h2>
                <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl leading-relaxed">
                  Skip the sales pitch. Schedule a 30-minute diagnostic session with founder Nilesh Vaghani to inspect your current ad accounts, discover hidden budget waste, and blueprint your 90-day scale trajectory.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <div className="flex items-center gap-space-xs text-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-tertiary-fixed text-lg">check</span> No obligation
                  </div>
                  <div className="flex items-center gap-space-xs text-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-tertiary-fixed text-lg">check</span> Complete audit included
                  </div>
                  <div className="flex items-center gap-space-xs text-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-tertiary-fixed text-lg">check</span> Direct WhatsApp / Google Meet
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md justify-center">
                <a className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-xl bg-secondary-container text-on-primary font-title-lg text-title-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all text-center" href="/#contact-us">
                  <span>Schedule Strategy Call</span>
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </a>
                <a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-xl bg-surface-container-lowest text-primary-container font-label-lg text-label-lg font-bold hover:bg-surface-container transition-all text-center" href="https://wa.me/918758835700" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[22px]">chat</span>
                  <span>Direct WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
