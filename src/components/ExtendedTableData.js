import React from 'react';

import {
  Box,
  Button,
  Typography,
  Collapse,
  Link
} from '@mui/material';
import PropTypes from 'prop-types';

import StockWidget from './StockWidget';
import FundamentalData from './FundamentalData';
import { StockPages, Links, News } from './smallComponents';

import externalLinks from '../data/externalLinks';

import tableTwitterStyles from '../styles/tableTwitterStyles';
import detailsChevronStyle from '../styles/detailsChevronStyle';
import theme from '../styles/theme';


const ExtendedTableData = ({ open, row }) => {
  const { pages = [], links = [], news = [] } = externalLinks;

  return (
    <React.Fragment>
      <Collapse sx={tableTwitterStyles.collapse} in={open} timeout={150} unmountOnExit>
        <Box sx={tableTwitterStyles.financialDataWrapper}>
          <Box sx={tableTwitterStyles.stockWidgetWrapper}>
            <StockWidget widgetPropsAny={{ 'symbol': `ASX:${row?.ticker}` }}/>
          </Box>
          <Box sx={tableTwitterStyles.fundamentalDataWrapper}>
            <FundamentalData widgetPropsAny={{ 'symbol': `ASX:${row?.ticker}` }}/>
          </Box>
        </Box>
        <Box>
          <Box sx={{ mb: 3.75 }}>
            <Typography sx={{ m: 0 }} variant="h5" gutterBottom>
              We have compiled a list of website you may be interested in using for your research.
            </Typography>
            <Typography sx={{ m: 0 }} variant="h5" gutterBottom>
              The Stock Pages will have summaries of the company and additional information compiled by the
              respective website.
            </Typography>
            <Typography sx={{ m: 0 }} variant="h5" gutterBottom>
              There are some external links to the website and ASX pages, news organisations and charting
            </Typography>
          </Box>
          <Box sx={tableTwitterStyles.linksWrapper}>
            <Box sx={{ [theme.breakpoints.up('sm')]: { mr: 2 }}}>
              <Typography variant="h5" sx={tableTwitterStyles.title}>stock page:</Typography>
              <StockPages pages={pages} row={row} />
            </Box>
            <Box>
              <Typography variant="h5" sx={tableTwitterStyles.title}>links:</Typography>
              <Box sx={{ [theme.breakpoints.up('md')]: { mb: 3, pr: 1.5 }}}>
                <Links links={links} row={row} />
              </Box>
              <Typography variant="h5" sx={tableTwitterStyles.title}>news:</Typography>
              <Box sx={{ [theme.breakpoints.up('md')]: { mb: 3, pr: 1.5 }}}>
                <News news={news} row={row} />
              </Box>
              <Typography variant="h5" sx={tableTwitterStyles.title}>charting:</Typography>
              <Box sx={tableTwitterStyles.linksBox}>
                <Typography variant="h5">Trading View</Typography>
                <Link href={`https://www.tradingview.com/symbols/ASX-${row?.ticker}`}
                      target="_blank" rel="noreferrer" underline="none">
                  <Button sx={detailsChevronStyle}>
                    <img src="images/btn-arrow.svg" alt="details"/>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

ExtendedTableData.propTypes = {
  open: PropTypes.bool.isRequired,
  row: PropTypes.object.isRequired,
};

export default ExtendedTableData;