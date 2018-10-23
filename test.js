const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: 'AB1LSBSUOTZZP055FUDKI2SLZ5JCC5ELVPBUCVXVFYVMMBXS',
    client_secret: 'LJ15YFAW1M3LY54PAZPIOWPWZOXC0CNESR4KJ1RMAVSJPU0F',
    ll: '40.7243,-74.0018',
    query: 'monumen nasional',
    v: '20180323',
    limit: 10
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});