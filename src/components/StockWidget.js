import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { getWidgetScript } from '../helpers/getScripts';

const StockWidget = (props) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref = React.createRef();

  useEffect(() => {
    let refValue = null;

    if (ref.current) {
      const script = getWidgetScript(widgetProps, widgetPropsAny);

      ref.current.appendChild(script);
      refValue = ref.current;
    }

    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    }
  }, [ref, widgetProps, widgetPropsAny]);

  return <div ref={ref} style={{ height: '100%' }} />;
}

StockWidget.propTypes = {
  widgetProps: PropTypes.shape({
    symbol: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    locale: PropTypes.string,
    dateRange: PropTypes.string,
    colorTheme: PropTypes.string,
    trendLineColor: PropTypes.string,
    underLineColor: PropTypes.string,
    underLineBottomColor: PropTypes.string,
    isTransparent: PropTypes.boolean,
    autosize: PropTypes.boolean,
    largeChartUrl: PropTypes.string,
  }),
  widgetPropsAny: PropTypes.any,
};

export default StockWidget;