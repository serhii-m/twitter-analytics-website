import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { getFundamentalDataScript } from '../helpers/getScripts';

const FundamentalData = (props) => {
  const { widgetProps, widgetPropsAny } = props;

  const ref = React.createRef();

  useEffect(() => {
    let refValue = null;

    if (ref.current) {
      const script = getFundamentalDataScript(widgetProps, widgetPropsAny);

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

FundamentalData.propTypes = {
  widgetProps: PropTypes.shape({
    symbol: PropTypes.string,
    colorTheme: PropTypes.string,
    isTransparent: PropTypes.boolean,
    largeChartUrl: PropTypes.string,
    displayMode: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    locale: PropTypes.string,
  }),
  widgetPropsAny: PropTypes.any,
};

export default FundamentalData;
