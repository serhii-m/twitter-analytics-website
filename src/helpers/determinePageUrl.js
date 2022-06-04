const determinePageUrl = (page = {}, row = {}) => {
  let pageName = page?.name;
  let url = null;

  switch (pageName) {
    case 'Yahoo Finance':
      url = page?.url + `${row?.ticker}.AX`;
      break;
    case 'Google Finance':
      url = page?.url + `${row?.ticker}:ASX`;
      break;
    case 'Bloomberg':
      url = page?.url + `${row?.ticker}:AU`;
      break;
    default:
      url = page?.url + `${row?.ticker}`;
      break;
  }

  return url;
};

export default determinePageUrl;