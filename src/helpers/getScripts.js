export const getWidgetScript = (widgetProps, widgetPropsAny) => {
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/'
    + 'embed-widget-mini-symbol-overview.js';
  script.async = true;
  script.type = 'text/javascript';
  script.innerHTML = JSON.stringify({
    'width': '100%',
    'height': '100%',
    'locale': 'en',
    'dateRange': '1M',
    'colorTheme': 'dark',
    'trendLineColor': 'rgba(41, 98, 255, 1)',
    'underLineColor': 'rgba(152, 152, 152, 0.3)',
    'underLineBottomColor': 'rgba(41, 98, 255, 0)',
    'isTransparent': false,
    'autosize': true,
    'largeChartUrl': '',
    ...widgetProps,
    ...widgetPropsAny,
  });

  return script;
};

export const getFundamentalDataScript = (widgetProps, widgetPropsAny) => {
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/'
    + 'embed-widget-financials.js';
  script.async = true;
  script.type = 'text/javascript';
  script.innerHTML = JSON.stringify({
    'colorTheme': 'dark',
    'isTransparent': false,
    'largeChartUrl': '',
    'displayMode': 'regular',
    'width': '100%',
    'height': '100%',
    'locale': 'en',
    'autosize': true,
    ...widgetProps,
    ...widgetPropsAny,
  });

  return script;
};
