/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ── Logo-matched palette ──────────────────────────────────────────
           Primary  : Deep Navy   #0D1B2E / #0B2345
           Accent   : Bright Blue #1E90FF  (logo "A" highlight)
           Success  : Teal-green  #10B981  (kept for positive metrics)
        ───────────────────────────────────────────────────────────────── */

        /* Accent / CTA — replaces old orange, now vivid logo-blue */
        "secondary-container":          "#1E90FF",   /* bright blue – buttons, badges, links  */
        "on-secondary-container":       "#003A80",   /* deep blue on light blue bg             */
        "secondary":                    "#1565C0",   /* mid blue                               */
        "on-secondary":                 "#ffffff",
        "secondary-fixed":              "#DBEAFE",   /* pale blue tint                         */
        "secondary-fixed-dim":          "#93C5FD",   /* soft blue dim                          */
        "on-secondary-fixed":           "#0C3B6E",
        "on-secondary-fixed-variant":   "#1B4F8A",

        /* Primary — deep navy (logo body) */
        "primary":                      "#0D1B2E",
        "primary-container":            "#0B2345",   /* dark navy panels / footer              */
        "on-primary":                   "#ffffff",
        "on-primary-container":         "#90B4E8",   /* muted blue on dark navy                */
        "primary-fixed":                "#D6E4FF",
        "primary-fixed-dim":            "#90B4E8",
        "on-primary-fixed":             "#011938",
        "on-primary-fixed-variant":     "#1B3A66",
        "surface-tint":                 "#1E90FF",

        /* Surfaces — crisp white / very light blue-grey */
        "background":                   "#F4F7FF",
        "surface":                      "#F4F7FF",
        "surface-bright":               "#FFFFFF",
        "surface-container-lowest":     "#FFFFFF",
        "surface-container-low":        "#EBF2FF",
        "surface-container":            "#DDE9FF",
        "surface-container-high":       "#CCD9F5",
        "surface-container-highest":    "#BAC9E8",
        "surface-dim":                  "#C5D3EA",
        "surface-variant":              "#D0DCF4",
        "on-surface":                   "#0B1C30",
        "on-surface-variant":           "#44546A",
        "outline":                      "#6B7A99",
        "outline-variant":              "#BBC7DE",

        /* Inverse */
        "inverse-surface":              "#1A2B45",
        "inverse-on-surface":           "#E8F0FF",
        "inverse-primary":              "#90B4E8",

        /* Tertiary — teal-green (kept for positive/success indicators) */
        "tertiary":                     "#0D3326",
        "tertiary-container":           "#0D3326",
        "on-tertiary":                  "#ffffff",
        "on-tertiary-container":        "#059669",   /* emerald green for check marks          */
        "tertiary-fixed":               "#6EE7B7",
        "tertiary-fixed-dim":           "#34D399",
        "on-tertiary-fixed":            "#00230F",
        "on-tertiary-fixed-variant":    "#065F46",

        /* Error */
        "error":                        "#BA1A1A",
        "on-error":                     "#ffffff",
        "error-container":              "#FFDAD6",
        "on-error-container":           "#93000A",

        /* Misc */
        "on-background":                "#0B1C30",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "1.5rem",
        "space-lg": "1.5rem",
        "margin": "4rem",
        "space-xs": "0.25rem",
        "gutter-mobile": "1rem",
        "margin-mobile": "1.25rem",
        "space-2xl": "4rem",
        "space-md": "1rem",
        "margin-tablet": "2rem",
        "space-sm": "0.5rem",
        "space-xl": "2.5rem"
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "title-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "metric-display": ["Plus Jakarta Sans", "sans-serif"],
        "headline-xl-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { "lineHeight": "24px", "letterSpacing": "0em", "fontWeight": "400" }],
        "headline-md": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-sm": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
        "title-lg": ["18px", { "lineHeight": "26px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "letterSpacing": "-0.01em", "fontWeight": "400" }],
        "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.025em", "fontWeight": "700" }],
        "label-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
        "headline-xl": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "800" }],
        "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "metric-display": ["48px", { "lineHeight": "52px", "letterSpacing": "-0.03em", "fontWeight": "800" }],
        "headline-xl-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "body-sm": ["14px", { "lineHeight": "20px", "letterSpacing": "0em", "fontWeight": "400" }]
      }
    }
  },
  plugins: [],
}
