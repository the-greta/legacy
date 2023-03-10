export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

// ID가 없는 경우
export const existsGaID = GA_ID !== "";

// PV 측정
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (path) => {
  window.gtag("config", GA_ID, {
    // debug_mode: true,
    page_path: path,
  });
};

// GA 이벤트 발화
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value = "" }) => {
  if (!existsGaID) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
