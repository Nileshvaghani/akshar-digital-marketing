import React, { useState } from 'react';

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'seo',
      num: '01',
      badge: 'Organic Growth Engine',
      statText: '+310% Traffic Average',
      statIcon: 'trending_up',
      title: 'Search Engine Optimization (SEO)',
      desc: 'Stop burning cash on temporary traffic. We architect comprehensive organic discovery flywheels that claim high-intent buyer searches, optimize complex technical foundations, and establish defensible domain authority.',
      features: [
        { icon: 'check_circle', title: 'Technical Architecture', desc: 'Deep crawl fixes, canonical tuning, structured data schemas.' },
        { icon: 'check_circle', title: 'Keyword Clustering', desc: 'High commercial-intent search intent grouping and mapping.' },
        { icon: 'check_circle', title: 'Authority Backlinks', desc: 'Pure white-hat contextual digital PR & editorial placements.' },
        { icon: 'check_circle', title: 'Monthly Rank Audits', desc: 'Live transparent dashboards tracking non-brand revenue lift.' }
      ],
      toolsLabel: 'Toolchain',
      tools: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Search Console'],
      linkText: 'Request SEO Audit',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1f36dARkJfh_1uC5yD9XK3bGIESRqfP658enZXCQBzRgwyqnuXq2bmXVh0exfyOu0DQe2ezbYoOB-ovruD5bCpA0eG1uXu5E2pwCpzQRkkF8EjRCA0vyEXJ2cCwr8NkYLRwXWuRCJww2m1E9FefF0vkJlehvb2WEoFap7Lul4XfqA82MjE8gQoDeYcT-O50U68F4UHpJt3B6aSIc5msSfcMwLqd7pea7FSA_cXehqFzrUv5js4YAozQ',
      imgMetricTitle: 'Keyword Position Velocity',
      imgMetricValue: 'Top 3 Dominance'
    },
    {
      id: 'ppc',
      num: '02',
      badge: 'Immediate Scalable Demand',
      statText: 'Google Premier Tier',
      statIcon: '',
      title: 'Google Ads / PPC Management',
      desc: 'Turn search intent directly into qualified sales calls and transactional checkout revenue. We ruthlessly eliminate negative search term waste while deploying proprietary bidding strategies across Google Search, Performance Max, and YouTube.',
      features: [
        { icon: 'ads_click', title: 'High-Intent Search', desc: 'Targeting explicit commercial phrases with surgical ad copy match.' },
        { icon: 'filter_alt', title: 'Negative Keyword Shields', desc: 'Weekly filtering to prevent click bleeding on non-transacting queries.' },
        { icon: 'smart_toy', title: 'PMax Asset Optimization', desc: 'Dynamic asset group segmentation feeding Google\'s neural bidding.' },
        { icon: 'video_library', title: 'YouTube Remarketing', desc: 'Persuasive short-form video hooks recapturing abandoned sessions.' }
      ],
      toolsLabel: 'Platforms',
      tools: ['Google Search', 'Performance Max', 'Google Shopping', 'Looker Studio'],
      linkText: 'Scale with PPC',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcmbpxxdwS_r3jXrjg6kQvc4WPxZRZC7Bedqmell0BuEdeSGm0Y4KdAgKDo5Sr7JP6TITiD7TY0RxttT0PPPzTpRTt09mMjEwrmdXvCiEHscICH6HDeDbden32tJ_DRBJbsT6PyTgMubQIIFHpFEyiyMnLOotTRsbvxkS1JDyYjaBHYUi6iM8MXNCUIRN6iGjh3azOCc3fFakAAeCc1SUigf4YxdNZMysdJtM_-BdNRp_7MdngYI3XRg',
      imgMetricTitle: 'Average Account Return',
      imgMetricValue: '4.8x ROAS'
    },
    {
      id: 'meta',
      num: '03',
      badge: 'Regional Conversion Power',
      statText: 'WhatsApp Direct API',
      statIcon: '',
      title: 'Meta & WhatsApp Performance Funnels',
      desc: 'In Gujarat and Indian enterprise markets, high-friction forms kill conversions. We build seamless Click-to-WhatsApp and Instagram performance funnels backed by Conversions API (CAPI) that guide prospects straight into your sales pipeline.',
      features: [
        { icon: 'chat_bubble', title: 'Click-to-WhatsApp Ads', desc: 'Zero-friction lead start with automated pre-filled greeting prompts.' },
        { icon: 'hub', title: 'Server-Side CAPI Setup', desc: 'Bypass iOS tracking loss with direct cloud event telemetry.' },
        { icon: 'psychology', title: 'Dynamic Creative Testing', desc: 'Rapid testing of angles, hooks, and local vernacular messaging.' },
        { icon: 'robot_2', title: 'CRM Chat Routing', desc: 'Instant lead distribution to internal sales reps within 60 seconds.' }
      ],
      toolsLabel: 'Integration',
      tools: ['Meta Ads Manager', 'WhatsApp Cloud API', 'Wati / Interakt', 'Zapier'],
      linkText: 'Build WhatsApp Funnel',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcmbpxxdwS_r3jXrjg6kQvc4WPxZRZC7Bedqmell0BuEdeSGm0Y4KdAgKDo5Sr7JP6TITiD7TY0RxttT0PPPzTpRTt09mMjEwrmdXvCiEHscICH6HDeDbden32tJ_DRBJbsT6PyTgMubQIIFHpFEyiyMnLOotTRsbvxkS1JDyYjaBHYUi6iM8MXNCUIRN6iGjh3azOCc3fFakAAeCc1SUigf4YxdNZMysdJtM_-BdNRp_7MdngYI3XRg', // Just reusing the same image structure logic or can leave it empty if I write custom JSX for it. Wait, the HTML has a custom box for this one (Instant Lead Velocity). I should use the image instead for consistency, but the HTML actually uses a custom div for the right side on this service.
      // Actually, my map function assumes an image. Let's see how I can handle the custom side-panels.
      // I'll render custom content based on the `num` or just render standard image cards to be uniform and clean in React?
      // "use all content from ui" means I should probably maintain uniformity or build out the custom stuff. Since I have a uniform map, I will adapt the text into the uniform map structure for simplicity, but wait, the image URL for #3 is missing in HTML, it's a CSS box. I will just reuse image #2 or put a placeholder.
      // Looking closely at HTML for 03: It has `<div class="p-space-lg rounded-2xl bg-surface-container-low..."><span class="material-symbols-outlined text-on-tertiary-container text-[36px]">forum</span>...`
      // For uniformity in the map function, I will just give it an image from the others. I will use the social media image for now.
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1BwnCMY8zKa8ezYBkvLuSvMogYbF0SG_zk_bVq1NlpMf3NIpX1PnecT7dxlEpJnNj46zAkkb1jPWzbxuAO3-7JDBo7K69h5OJye_9X2-XHgtxY03yg4wfaNmXLbETMuMKVnb-sLdPrryHRIXnIldo_bHoA4k98pZJG_YGxUpWmzx58lIyztttxF8ydo0d3YAiNrCuPR8dCfpJrPycg2U5VSdsIqcun0VinWaRhouxi94ONxZDd2OG8w',
      imgMetricTitle: 'Lead Drop-off Saved',
      imgMetricValue: '82% Retained'
    },
    {
      id: 'web',
      num: '04',
      badge: 'Conversion Infrastructure',
      statText: 'Sub-Second Load Times',
      statIcon: '',
      title: 'WordPress Web Design & Development',
      desc: 'Your website shouldn\'t just be a digital brochure—it must be your most disciplined 24/7 salesperson. We build custom, lightweight WordPress solutions tailored specifically for high conversion rates and flawless Google Core Web Vitals.',
      features: [
        { icon: 'speed', title: 'Under 1.2s LCP Velocity', desc: 'Bloat-free code with native clean CSS and zero plugin congestion.' },
        { icon: 'touch_app', title: 'CRO Landing Page Blueprints', desc: 'Layouts engineered around F-pattern eye scanning and sticky CTAs.' },
        { icon: 'devices', title: 'Mobile-First Fluid Layouts', desc: 'Designed natively for smartphone users across diverse devices.' },
        { icon: 'security', title: 'Bank-Grade Hardening', desc: 'Automated backups, WAF defenses, and enterprise SSL hygiene.' }
      ],
      toolsLabel: 'Stack',
      tools: ['WordPress Custom', 'Tailwind / SASS', 'WooCommerce', 'Cloudflare Edge'],
      linkText: 'View Web Portfolio',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbJlz1_x4i_McjlczgA6Is2Nt9K2NGpnnyqBU1plMFRdeJzXk404o45gyO5dykjJkZWbKklFjMadEPSynnH5K8PBQXiQWv1kzwdh12Hm6dA5f_smUagwK9hbAXciE1qBqeWa36EZd5UiTeKKfz-wVfcja1aHxZN6hB_ohCzasZtuUnasTLmKdXMObqiE1D1xWLn3rAV0TLBOBc1D7zFKrx4UU70PG-QS5jSFbonNU6cB8k8GM2wBPcvQ', // reusing map
      imgMetricTitle: 'Core Web Vitals Audit',
      imgMetricValue: '98/100 Mobile'
    },
    {
      id: 'local',
      num: '05',
      badge: 'Local Map Pack Dominance',
      statText: '#1 in Vadodara & Gujarat',
      statIcon: '',
      title: 'Local SEO & Google Business Profile (GMB)',
      desc: 'When high-value buyers in your city search "near me", your business must be the undisputed first recommendation. We systematically dominate local Google Map Packs with precision citation cleanup, geo-targeted reviews, and local schema.',
      features: [
        { icon: 'pin_drop', title: 'Map Pack 3-Pack Rank', desc: 'Optimizing listing signals to lock in top spots for commercial queries.' },
        { icon: 'star', title: 'Review Acquisition Engine', desc: 'Automated WhatsApp review requests to build genuine 5-star social proof.' },
        { icon: 'explore', title: 'Geo-Tagged Citations', desc: 'NAP consistency across 100+ tier-1 Indian business directories.' },
        { icon: 'post_add', title: 'Weekly GMB Posts & Offers', desc: 'Continuous fresh content maintaining algorithmic activity metrics.' }
      ],
      toolsLabel: 'Coverage',
      tools: ['Vadodara', 'Ahmedabad', 'Surat', 'Pan-India Geo'],
      linkText: 'Dominate Local Search',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbJlz1_x4i_McjlczgA6Is2Nt9K2NGpnnyqBU1plMFRdeJzXk404o45gyO5dykjJkZWbKklFjMadEPSynnH5K8PBQXiQWv1kzwdh12Hm6dA5f_smUagwK9hbAXciE1qBqeWa36EZd5UiTeKKfz-wVfcja1aHxZN6hB_ohCzasZtuUnasTLmKdXMObqiE1D1xWLn3rAV0TLBOBc1D7zFKrx4UU70PG-QS5jSFbonNU6cB8k8GM2wBPcvQ',
      imgMetricTitle: 'Vadodara Hub',
      imgMetricValue: '#1 Ranked'
    },
    {
      id: 'social',
      num: '06',
      badge: 'Reputation & Virality',
      statText: 'B2B LinkedIn & B2C Reels',
      statIcon: '',
      title: 'Social Media Strategy & Brand Management',
      desc: 'Move beyond superficial \'likes\' into thought leadership that commands market authority. We engineer monthly multi-channel content pipelines that build authentic executive presence on LinkedIn and scroll-stopping Instagram reels.',
      features: [
        { icon: 'calendar_month', title: 'Structured Editorial Calendars', desc: '30-day ahead schedules covering industry angles and product highlights.' },
        { icon: 'movie_creation', title: 'Short-Form Reel Production', desc: 'High-retention storytelling, crisp motion design, and audio trend curation.' },
        { icon: 'military_tech', title: 'Executive Thought Leadership', desc: 'Founder-focused LinkedIn articles positioning executives as industry authorities.' },
        { icon: 'forum', title: 'Active Community Nurturing', desc: 'Real-time comment replies, direct message triage, and inbound moderation.' }
      ],
      toolsLabel: 'Networks',
      tools: ['LinkedIn B2B', 'Instagram Reels', 'YouTube Shorts', 'X (Twitter)'],
      linkText: 'Elevate Brand Voice',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1BwnCMY8zKa8ezYBkvLuSvMogYbF0SG_zk_bVq1NlpMf3NIpX1PnecT7dxlEpJnNj46zAkkb1jPWzbxuAO3-7JDBo7K69h5OJye_9X2-XHgtxY03yg4wfaNmXLbETMuMKVnb-sLdPrryHRIXnIldo_bHoA4k98pZJG_YGxUpWmzx58lIyztttxF8ydo0d3YAiNrCuPR8dCfpJrPycg2U5VSdsIqcun0VinWaRhouxi94ONxZDd2OG8w',
      imgMetricTitle: 'Engagement Lift Factor',
      imgMetricValue: '5.4x Peer Industry'
    }
  ];

  const renderVisual = (id) => {
    switch (id) {
      case 'seo':
        return (
          <div className="flex flex-col gap-space-md w-full">
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm h-56">
              <img className="w-full h-full object-cover" alt="SEO Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1f36dARkJfh_1uC5yD9XK3bGIESRqfP658enZXCQBzRgwyqnuXq2bmXVh0exfyOu0DQe2ezbYoOB-ovruD5bCpA0eG1uXu5E2pwCpzQRkkF8EjRCA0vyEXJ2cCwr8NkYLRwXWuRCJww2m1E9FefF0vkJlehvb2WEoFap7Lul4XfqA82MjE8gQoDeYcT-O50U68F4UHpJt3B6aSIc5msSfcMwLqd7pea7FSA_cXehqFzrUv5js4YAozQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
                <span className="font-label-md text-label-md font-semibold">Keyword Position Velocity</span>
                <span className="font-title-lg text-title-lg font-bold text-tertiary-fixed">Top 3 Dominance</span>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
              <div className="flex justify-between items-center text-on-surface font-label-md text-label-md">
                <span className="font-semibold">Organic Inbound Growth Curve</span>
                <span className="text-on-tertiary-container font-bold">+284%</span>
              </div>
              <svg className="w-full h-16 text-secondary-container" fill="none" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 50 Q 50 48, 80 40 T 150 32 T 220 18 T 300 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3.5"></path>
                <path d="M0 50 Q 50 48, 80 40 T 150 32 T 220 18 T 300 4 L 300 60 L 0 60 Z" fill="currentColor" fillOpacity="0.12"></path>
                <circle cx="300" cy="4" fill="#FD761A" r="4"></circle>
              </svg>
              <div className="flex justify-between text-on-surface-variant font-label-md text-label-md text-xs">
                <span>Month 1</span>
                <span>Month 3</span>
                <span>Month 6</span>
              </div>
            </div>
          </div>
        );
      case 'ppc':
        return (
          <div className="flex flex-col gap-space-md w-full">
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm h-56">
              <img className="w-full h-full object-cover" alt="Google Ads" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcmbpxxdwS_r3jXrjg6kQvc4WPxZRZC7Bedqmell0BuEdeSGm0Y4KdAgKDo5Sr7JP6TITiD7TY0RxttT0PPPzTpRTt09mMjEwrmdXvCiEHscICH6HDeDbden32tJ_DRBJbsT6PyTgMubQIIFHpFEyiyMnLOotTRsbvxkS1JDyYjaBHYUi6iM8MXNCUIRN6iGjh3azOCc3fFakAAeCc1SUigf4YxdNZMysdJtM_-BdNRp_7MdngYI3XRg" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
                <span className="font-label-md text-label-md">Average Account Return</span>
                <span className="font-headline-sm text-headline-sm font-black text-secondary-container">4.8x ROAS</span>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-primary-container text-on-primary flex flex-col gap-space-sm shadow-inner">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md uppercase tracking-wider text-surface-container-highest">Performance Breakdown</span>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed/20 text-tertiary-fixed text-xs font-bold">Live Model</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between mb-1"><span className="text-surface-variant">Search Intent Ads</span><span className="font-bold text-on-primary">5.2x ROAS</span></div>
                  <div className="w-full h-2 rounded-full bg-surface-container/20"><div className="h-2 rounded-full bg-secondary-container" style={{ width: '88%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span className="text-surface-variant">Performance Max</span><span className="font-bold text-on-primary">4.6x ROAS</span></div>
                  <div className="w-full h-2 rounded-full bg-surface-container/20"><div className="h-2 rounded-full bg-tertiary-fixed-dim" style={{ width: '76%' }}></div></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'meta':
        return (
          <div className="flex flex-col gap-space-md w-full">
            <div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col items-center justify-center text-center relative overflow-hidden h-full min-h-[300px]">
              <div className="w-16 h-16 rounded-2xl bg-on-tertiary-container/10 flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-on-tertiary-container text-[36px]">forum</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary-container font-bold">Instant Lead Velocity</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-xs">Connecting social ad impressions to closed transactions via automated chat prompts.</p>
              <div className="mt-space-md w-full flex flex-col gap-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Meta Ad Impression</span>
                  <span className="text-on-surface-variant font-normal">&lt; 1.5s Load</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span> 1-Click WhatsApp Direct</span>
                  <span className="text-on-tertiary-container font-bold">82% Drop-off Saved</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-container"></span> CRM Automation & Call</span>
                  <span className="text-secondary-container font-bold">Closed within 2h</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'web':
        return (
          <div className="flex flex-col gap-space-md w-full h-full">
            <div className="p-space-lg rounded-2xl bg-primary-container text-on-primary flex flex-col justify-between h-full min-h-[300px]">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-surface-variant uppercase tracking-widest font-bold">Core Web Vitals</span>
                <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-tertiary-container font-label-md text-label-md font-extrabold">98/100 Mobile</span>
              </div>
              <div className="my-space-md grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-surface-container/10">
                  <span className="block font-headline-sm text-headline-sm text-tertiary-fixed font-black">0.8s</span>
                  <span className="text-xs text-surface-variant">LCP Time</span>
                </div>
                <div className="p-2 rounded bg-surface-container/10">
                  <span className="block font-headline-sm text-headline-sm text-tertiary-fixed font-black">0.01</span>
                  <span className="text-xs text-surface-variant">CLS Shift</span>
                </div>
                <div className="p-2 rounded bg-surface-container/10">
                  <span className="block font-headline-sm text-headline-sm text-tertiary-fixed font-black">42ms</span>
                  <span className="text-xs text-surface-variant">FID Delay</span>
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container/10 text-xs text-surface-container-highest leading-relaxed italic">
                "Akshar re-architected our enterprise portal. Page load dropped from 4.8s to 0.9s, which immediately doubled our organic lead submissions."
              </div>
            </div>
          </div>
        );
      case 'local':
        return (
          <div className="flex flex-col gap-space-md w-full">
            <div className="w-full h-64 bg-cover bg-center rounded-xl shadow-md relative overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbJlz1_x4i_McjlczgA6Is2Nt9K2NGpnnyqBU1plMFRdeJzXk404o45gyO5dykjJkZWbKklFjMadEPSynnH5K8PBQXiQWv1kzwdh12Hm6dA5f_smUagwK9hbAXciE1qBqeWa36EZd5UiTeKKfz-wVfcja1aHxZN6hB_ohCzasZtuUnasTLmKdXMObqiE1D1xWLn3rAV0TLBOBc1D7zFKrx4UU70PG-QS5jSFbonNU6cB8k8GM2wBPcvQ')" }}>
              <div className="absolute inset-0 bg-primary-container/30"></div>
              <div className="absolute top-4 left-4 p-space-sm rounded-lg bg-surface-container-lowest/95 shadow-md flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-secondary-container animate-ping"></span>
                <span className="font-label-md text-label-md font-bold text-primary-container">Vadodara Hub: #1 Ranked</span>
              </div>
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="flex flex-col gap-space-md w-full">
            <div className="relative w-full rounded-xl overflow-hidden shadow-sm h-56">
              <img className="w-full h-full object-cover" alt="Social Media" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1BwnCMY8zKa8ezYBkvLuSvMogYbF0SG_zk_bVq1NlpMf3NIpX1PnecT7dxlEpJnNj46zAkkb1jPWzbxuAO3-7JDBo7K69h5OJye_9X2-XHgtxY03yg4wfaNmXLbETMuMKVnb-sLdPrryHRIXnIldo_bHoA4k98pZJG_YGxUpWmzx58lIyztttxF8ydo0d3YAiNrCuPR8dCfpJrPycg2U5VSdsIqcun0VinWaRhouxi94ONxZDd2OG8w" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-primary">
                <span className="font-label-md text-label-md">Engagement Lift Factor</span>
                <span className="font-title-lg text-title-lg font-black text-secondary-container">5.4x Peer Industry</span>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex justify-around text-center">
              <div>
                <span className="font-headline-sm text-headline-sm font-extrabold text-primary-container">650K+</span>
                <span className="block font-label-md text-label-md text-on-surface-variant">Organic Views/Mo</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm font-extrabold text-secondary-container">4.8%</span>
                <span className="block font-label-md text-label-md text-on-surface-variant">Avg. Engagement</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm font-extrabold text-on-tertiary-container">12+</span>
                <span className="block font-label-md text-label-md text-on-surface-variant">B2B Leads/Wk</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const getPillClasses = (filter) => {
    return activeFilter === filter
      ? 'bg-primary-container text-on-primary'
      : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary-container';
  };

  return (
    <>
      <section className="relative w-full bg-surface-container-low py-space-xl overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-primary-container/5 blur-2xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-gutter relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-container/15 text-secondary font-label-md text-label-md tracking-wider uppercase font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
            WHAT WE DELIVER
          </div>
          
          <h1 className="mt-space-md max-w-4xl font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-extrabold tracking-tight leading-tight">
            Full-Funnel Digital Marketing Services That Drive <span className="text-secondary-container">Real Revenue</span>
          </h1>
          
          <p className="mt-space-md max-w-3xl font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            From high-intent search acquisition to performance social ads and conversion-optimized websites, explore our end-to-end digital growth offerings tailored for ambitious businesses across India and global markets.
          </p>
          
          <div className="mt-space-xl w-full flex flex-wrap items-center justify-center gap-space-sm" id="service-pills">
            <button className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg shadow-sm transition-all ${getPillClasses('all')}`} onClick={() => handleFilter('all')}>
              All Services
            </button>
            <button className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg shadow-sm transition-all ${getPillClasses('seo')}`} onClick={() => handleFilter('seo')}>
              Search Marketing (SEO)
            </button>
            <button className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg shadow-sm transition-all ${getPillClasses('ppc')}`} onClick={() => handleFilter('ppc')}>
              Performance Ads (Google & Meta)
            </button>
            <button className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg shadow-sm transition-all ${getPillClasses('social')}`} onClick={() => handleFilter('social')}>
              Social Media
            </button>
            <button className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg shadow-sm transition-all ${getPillClasses('web')}`} onClick={() => handleFilter('web')}>
              Web Development
            </button>
            <button className={`px-space-lg py-2 rounded-full font-label-lg text-label-lg shadow-sm transition-all ${getPillClasses('local')}`} onClick={() => handleFilter('local')}>
              Local Search & GMB
            </button>
          </div>
          
          <div className="mt-space-xl grid grid-cols-2 md:grid-cols-4 gap-space-md w-full max-w-4xl">
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center">
              <span className="font-metric-display text-headline-md text-primary-container font-extrabold">4.8x</span>
              <span className="font-label-md text-label-md text-on-surface-variant mt-1">Average Paid ROAS</span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center">
              <span className="font-metric-display text-headline-md text-on-tertiary-container font-extrabold">+240%</span>
              <span className="font-label-md text-label-md text-on-surface-variant mt-1">Avg. Organic Inbound</span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center">
              <span className="font-metric-display text-headline-md text-secondary-container font-extrabold">&lt; 1.2s</span>
              <span className="font-label-md text-label-md text-on-surface-variant mt-1">LCP Page Speed Score</span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-center">
              <span className="font-metric-display text-headline-md text-primary font-extrabold">#1</span>
              <span className="font-label-md text-label-md text-on-surface-variant mt-1">Vadodara Local Pack</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter py-space-xl md:py-space-2xl w-full flex flex-col gap-space-xl md:gap-space-2xl">
        {services.filter(s => activeFilter === 'all' || s.id === activeFilter).map((svc, idx) => (
          <div key={idx} className="group rounded-2xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-md transition-all hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className={`lg:col-span-7 flex flex-col ${idx % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="font-headline-sm text-headline-sm text-secondary-container font-black">{svc.num}</span>
                  <span className="px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md font-semibold tracking-wider uppercase">{svc.badge}</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary-container font-label-md text-label-md font-bold">
                    {svc.statIcon && <span className="material-symbols-outlined text-[14px]">{svc.statIcon}</span>}
                    {svc.statText}
                  </span>
                </div>
                
                <h2 className="mt-space-sm font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary font-bold">
                  {svc.title}
                </h2>
                
                <p className="mt-space-sm font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant leading-relaxed">
                  {svc.desc}
                </p>
                
                <div className="mt-space-lg grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
                      <span className="material-symbols-outlined text-secondary-container text-[20px] shrink-0">{feat.icon || 'check_circle'}</span>
                      <div className="flex flex-col">
                        <span className="font-title-lg text-title-lg text-on-surface font-semibold">{feat.title}</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-space-lg flex flex-wrap items-center justify-between gap-space-md pt-space-md border-t border-outline-variant/20">
                  <div className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                    <span className="font-bold text-primary">{svc.toolsLabel}:</span>
                    {svc.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 rounded bg-surface-container-high text-primary-container whitespace-nowrap">{tool}</span>
                    ))}
                  </div>
                  <a className="inline-flex items-center gap-space-xs text-secondary-container font-label-lg text-label-lg font-bold hover:translate-x-1 transition-transform" href="#audit-session">
                    <span>{svc.linkText}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
              
              <div className={`lg:col-span-5 flex flex-col gap-space-md ${idx % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                {renderVisual(svc.id)}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="w-full bg-surface-container-low py-space-xl md:py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter sm:px-gutter-mobile md:px-gutter flex flex-col">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="px-space-md py-1 rounded-full bg-surface-container-highest text-primary-container font-label-md text-label-md uppercase font-bold tracking-wider">Engagement Models</span>
            <h2 className="mt-space-sm font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary font-extrabold">Transparent Partnership Frameworks</h2>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">Select the operating rhythm that matches your business velocity, internal capacity, and revenue objectives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
            <div className="rounded-2xl bg-surface-container-lowest p-space-xl shadow-md flex flex-col justify-between">
              <div>
                <span className="px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md uppercase font-bold">Scoped Delivery</span>
                <h3 className="mt-space-sm font-headline-sm text-headline-sm text-primary font-bold">Project Sprint</h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Ideal for specific asset overhauls, high-impact website builds, or one-off full-funnel tracking architectures.</p>
                <div className="mt-space-lg space-y-3 font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-on-tertiary-container text-[18px]">done</span><span>Custom WordPress Web Build</span></div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-on-tertiary-container text-[18px]">done</span><span>Full Technical SEO Audit & Fix</span></div>
                  <div className="flex items-center gap-2 text-on-surface-variant/60"><span className="material-symbols-outlined text-[18px]">close</span><span>Ongoing Ad Management</span></div>
                </div>
              </div>
              <div className="mt-space-xl pt-space-md">
                <span className="block font-label-md text-label-md text-on-surface-variant">Timeline: 4 - 6 Weeks</span>
                <a className="mt-space-sm w-full inline-flex justify-center items-center py-2.5 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container-high transition-colors" href="#">Request Sprint Scope</a>
              </div>
            </div>
            
            <div className="rounded-2xl bg-primary-container text-on-primary p-space-xl shadow-xl flex flex-col justify-between relative transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-secondary-container text-on-primary font-label-md text-label-md font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                Most Popular
              </div>
              <div>
                <span className="px-space-sm py-1 rounded bg-surface-container/20 text-surface-container-highest font-label-md text-label-md uppercase font-bold">Continuous Scale</span>
                <h3 className="mt-space-sm font-headline-sm text-headline-sm text-on-primary font-bold">Growth Retainer</h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-surface-variant">A dedicated growth department managing multi-channel SEO, performance paid campaigns, and creative testing monthly.</p>
                <div className="mt-space-lg space-y-3 font-body-sm text-body-sm text-surface-container-lowest">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-[18px]">done</span><span>Full-Funnel Paid Ads (Google & Meta)</span></div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-[18px]">done</span><span>Ongoing SEO Content & Link Sprints</span></div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-tertiary-fixed text-[18px]">done</span><span>WhatsApp Funnels & Lead Qualification</span></div>
                </div>
              </div>
              <div className="mt-space-xl pt-space-md">
                <span className="block font-label-md text-label-md text-surface-variant">Cadence: Monthly Agile Retainer</span>
                <a className="mt-space-sm w-full inline-flex justify-center items-center py-2.5 rounded-lg bg-secondary-container text-on-primary font-label-lg text-label-lg font-bold shadow-[0_4px_14px_rgba(253,118,26,0.4)] hover:brightness-110 transition-all" href="#">Apply for Retainer</a>
              </div>
            </div>
            
            <div className="rounded-2xl bg-surface-container-lowest p-space-xl shadow-md flex flex-col justify-between">
              <div>
                <span className="px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md uppercase font-bold">Enterprise & Equity</span>
                <h3 className="mt-space-sm font-headline-sm text-headline-sm text-primary font-bold">Performance Partnership</h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Reserved for verified high-growth brands seeking deeply integrated skin-in-the-game revenue sharing and CMO stewardship.</p>
                <div className="mt-space-lg space-y-3 font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-on-tertiary-container text-[18px]">done</span><span>Hybrid Base + Performance Incentive</span></div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-on-tertiary-container text-[18px]">done</span><span>Dedicated Full Team (PPC + Dev + Creative)</span></div>
                </div>
              </div>
              <div className="mt-space-xl pt-space-md">
                <span className="block font-label-md text-label-md text-on-surface-variant">Selectivity: 2 Brands Per Quarter</span>
                <a className="mt-space-sm w-full inline-flex justify-center items-center py-2.5 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container-high transition-colors" href="#">Discuss Strategic Terms</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-gutter py-space-xl md:py-space-2xl w-full">
        <div className="relative rounded-2xl bg-gradient-to-br from-primary-container via-primary-container to-primary p-space-xl md:p-space-2xl overflow-hidden shadow-xl text-on-primary">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="absolute left-1/3 bottom-0 w-64 h-64 rounded-full bg-tertiary-container/30 blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="flex flex-col max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-space-xs text-secondary-container font-label-md text-label-md font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                No Lock-In Long Term Traps • Proven Vadodara Engine
              </div>
              <h2 className="mt-space-sm font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg font-black tracking-tight text-on-primary leading-tight">
                Ready to Build a Relentless Digital Revenue Machine?
              </h2>
              <p className="mt-space-sm font-body-sm md:font-body-lg text-body-sm md:text-body-lg text-surface-variant leading-relaxed">
                Claim your complimentary 30-minute growth audit with founder Nilesh Vaghani. We will inspect your current traffic channels, identify wasted ad budget, and outline an actionable 90-day ROI expansion plan.
              </p>
              
              <div className="mt-space-md flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-space-md text-surface-container-lowest font-body-sm text-body-sm">
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-tertiary-fixed text-[18px]">check_circle</span><span>Competitor Keyword Spy</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-tertiary-fixed text-[18px]">check_circle</span><span>Paid ROAS Leakage Audit</span></div>
              </div>
            </div>
            
            <div className="flex flex-col w-full sm:w-auto items-stretch sm:items-center gap-space-md shrink-0">
              <a className="inline-flex justify-center items-center gap-space-xs px-space-xl py-4 rounded-lg bg-secondary-container text-on-primary font-headline-sm text-title-lg font-bold shadow-[0_4px_20px_rgba(253,118,26,0.5)] hover:shadow-[0_6px_28px_rgba(253,118,26,0.65)] hover:-translate-y-1 transition-all text-center" href="#audit-session">
                <span>Book Strategy Audit</span>
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              </a>
              <a className="inline-flex justify-center items-center gap-space-xs px-space-lg py-4 rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-headline-sm text-title-lg font-semibold transition-colors" href="https://wa.me/918758835700">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">chat</span>
                <span>WhatsApp Us Direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
