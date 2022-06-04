import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';

import determinePageUrl from '../helpers/determinePageUrl';

import tableTwitterStyles from '../styles/tableTwitterStyles';
import detailsChevronStyle from '../styles/detailsChevronStyle';

export const StockPages = ({ pages = [], row = {} }) => {
  return pages.map((page) => (
    <Box key={page?.name}
         sx={tableTwitterStyles.pagesBox}>
      <Typography variant="h5">{page?.name}</Typography>
      <Link href={determinePageUrl(page, row)}
            target="_blank" rel="noreferrer" underline="none">
        <Button sx={detailsChevronStyle}>
          <img src="images/btn-arrow.svg" alt="details"/>
        </Button>
      </Link>
    </Box>
  ));
};

export const Links = ({ links = [], row = {} }) => {
  return links.map((link) => (
    <Box key={link?.name}
         sx={tableTwitterStyles.linksBox}>
      <Typography variant="h5">{link.name}</Typography>
      <Link href={link?.name === 'Company Website' ? row?.website : link?.url + `${row?.ticker}`}
            target="_blank" rel="noreferrer" underline="none">
        <Button sx={detailsChevronStyle}>
          <img src="images/btn-arrow.svg" alt="details"/>
        </Button>
      </Link>
    </Box>
  ));
};

export const News = ({ news = [], row = {} }) => {
  return news.map((newsItem) => (
    <Box key={newsItem?.name}
         sx={tableTwitterStyles.linksBox}>
      <Typography variant="h5">{newsItem?.name}</Typography>
      <Link href={newsItem?.url + `${row?.ticker}`}
            target="_blank" rel="noreferrer" underline="none">
        <Button sx={detailsChevronStyle}>
          <img src="images/btn-arrow.svg" alt="details"/>
        </Button>
      </Link>
    </Box>
  ));
};

