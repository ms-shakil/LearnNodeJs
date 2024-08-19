const os = require("os")
console.log(os.userInfo())
console.log(os.homedir())
console.log(os.hostname())

const path = require("path")
const pathName =path.extname("osAndpath.js")
console.log(pathName)