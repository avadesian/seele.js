var seeleWebProvider  = require('../lib/seele');


var client =new seeleWebProvider();

client.send("getBlock", "", 1, false, function(err, info) {
  if (err) {
    return console.log(err);
  }

  console.log(info);
});

client.getBlock("0x00000152a1442086846da01f129772d833e045b29877eb486cd4533cb07a87e1", 0, true, function(err, info) {
  if (err) {
    return console.log(err);
  }

  console.log(info);
});