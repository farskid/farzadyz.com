const Twit = require("twit");

const t = new Twit({
  consumer_key: "HYJMhozFaUddpXOMaBfiByE6n",
  consumer_secret: "au2icU5buAOdjlpfwwkU9J7av8MmDUJmx2TaCpGtxS3oVA9GoI",
  access_token: "304289713-na4JcsrrkkrtXfrumGjgG04VAvTClvgUirmXqqao",
  access_token_secret: "i6eSS7SuDqiRSV0kEYIzEz0G4gGcljJi3O3lvSvJ9yqbg"
});

exports.handler = async function(event, context, callback) {
  const tweets = await t.get("search/tweets", {
    q: `react%20OR%20javascript%20OR%20typescript%20OR%20software%20from%3Afarzad_yz&src=typd`,
    count: 100,
    results_per_page: 100,
    result_type: "popular"
  });
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(tweets)
  });
};
