var mesh = require('./')(1, 1, 5, 50, 50)

require('glo-demo-primitive')(mesh, {
  repeat: [8, 4],
  angle: -Math.PI / 2.5
}).start()
