const determineTimeInterval = (string = '') => {
  let timeInterval = '';

  switch (string) {
    case 'weekly':
      timeInterval = 'week';
      break;
    case 'monthly':
      timeInterval = 'month';
      break;
    default:
      timeInterval = 'day';
      break;
  }

  return timeInterval;
};

export default determineTimeInterval;