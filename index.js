var Twit = require('twit')
var T = new Twit({
    consumer_key:         '	delOh7er1LShJvaSMuMKRsg2d',
    consumer_secret:      'JAfcbs4Kkjryz6l3vVVS9WcXYcgt30lJ980PGjY9K2TyzpZ0Aq    ',
    access_token:         '	878518917462802433-W4uBu8Okuohmu1aT15hrIjIiUUydEQd',
    access_token_secret:  '2uv464WuwnR2jfsQjXkpPoiLqfQ9F9EVimuQY01yqGfAr    ',
})
var users = ["1850705408", "4573405572", "720135190916366336","751102643909591040","2842306788"];
var stream = T.stream('statuses/filter', {follow: users});
stream.on('tweet', function (tweet) {
    if (users.indexOf(tweet.user.id_str) > -1) {
        console.log(tweet.user.name + ": " + tweet.text);
        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
        })
    }
})