const brandService = require("../services/brandService")
const productService = require("../services/productService")
const typeService = require("../services/typeService")
const userService = require("../services/userService")

class initServices {
  async initDatabase(){
   await brandService.createMany()
   await typeService.createMany()
   await userService.createMany()
   await productService.createMany()

   }
}
module.exports = new initServices();
