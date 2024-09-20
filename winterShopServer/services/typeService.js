const Type = require('../models/Type');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const { typesData } = require('../data/exapleData');
class typeServices {
  async createType(name, image) {
    try {
      const imagePath = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static', `brands`);
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      image.mv(path.resolve(filePath, imagePath));
      const response = new Type({ name, image: imagePath });
      await response.save();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async getAll() {
    try {
      const response = await Type.find({});
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async getOne(idType) {
    try {
      const response = await Type.findById(idType);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneByName(name) {
    try {
      const response = await Type.findOne({ name });
      return response;
    } catch (error) {
      console.log(error);
      throw ApiError.internal('');
    }
  }

  async createMany() {
    try {
      const types = typesData;
      for (const type of types) {
        const response = new Type({ name: type.name, image: type.image });
        await response.save();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new typeServices();
