const getComputedData = (data = {}) => {
  const asx_codes = data['top-asx-discussed'].slice()
    .sort((a, b) => b?.count - a?.count)
    .slice(0, 5).map(item => item['asx_code']);

  const counts = data['top-asx-discussed'].slice()
    .sort((a, b) => b?.count - a?.count)
    .slice(0, 5).map(item => item['count']);

  const companies = Object.entries(data['company_info'])
    .filter(entry => asx_codes.includes(entry[0]))
    .map((item, idx) => {
      return {
        icon: item[1]['logo_url'],
        ticker: item[0],
        company_name: item[1]['Company_name'],
        industry: item[1]['industry'],
        count: counts[idx],
        website: item[1]['website'],
      };
    });

  const doughnutWeights = companies.reduce((res, company) => {
    company?.industry in res
      ?
      res[company?.industry] = res[company?.industry] + company?.count
      :
      res[company?.industry] = company?.count;

    return res;
  }, {});

  const topLikeIds = data['top-twitter-like'].map(item => item.id);
  const topRetweetIds = data['top-twitter-retweet'].map(item => item.id);
  const topCommentsIds = data['top-twitter-comments'].map(item => item.id);

  const topLikeTweets = Object.entries(data['tweetInfo'])
    .filter(entry => topLikeIds.includes(entry[0])).map(item => item[1])
    .sort((a, b) => b['metrics']['like_count'] - a['metrics']['like_count']);

  const topRetweetTweets = Object.entries(data['tweetInfo'])
    .filter(entry => topRetweetIds.includes(entry[0])).map(item => item[1])
    .sort((a, b) => b['metrics']['retweet_count'] - a['metrics']['retweet_count']);

  const topCommentTweets = Object.entries(data['tweetInfo'])
    .filter(entry => topCommentsIds.includes(entry[0])).map(item => item[1])
    .sort((a, b) => b['metrics']['reply_count'] - a['metrics']['reply_count']);

  const twitterHandles = Object.entries(data['DataInfo']['handles'])
    .map(entry => ({ handle: entry[0], count: entry[1] / 1000 }));

  const tweet_num = data['DataInfo']['tweet_num'];

  return {
    asx_codes,
    companies,
    doughnutWeights,
    topLikeTweets,
    topRetweetTweets,
    topCommentTweets,
    twitterHandles,
    tweet_num,
  };
};

export default getComputedData;
