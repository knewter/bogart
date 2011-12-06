var bogart = require('../../lib/bogart')

var app = bogart.app(function(show) {
  var viewEngine = bogart.viewEngine("haml");
  
  show('/', function(req) {
    return viewEngine.respond('index.haml', { layout: false });
  });
});

bogart.start(app)
