// Log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
    page_path: url
  })
}

// Log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
