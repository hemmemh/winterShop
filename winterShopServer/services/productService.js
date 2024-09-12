
const Product  = require("../models/Product")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const Brand = require("../models/Brand")
const Type = require("../models/Type")
const { productsData, ratingData } = require("../data/exapleData")
const brandService = require("./brandService")
const { getRandomElement } = require("../helpers/helpers")
const typeService = require("./typeService")
const ratingService = require("./ratingService")
const userService = require("./userService")
class productServices{


    async createProduct(name,description,price,colors,sizes,typeId,brandId,image){
        try {
            const date = Date.now()
            const brand =await Brand.findOne({_id:brandId})
            const type =await  Type.findOne({_id:typeId})
            let imagesPath=[]
              image.forEach(e=>{
                const image = uuid.v4() + '.jpg'
                imagesPath.push(image)
                const filePath = path.resolve(__dirname,'..','static',`${name}`)
                if (!fs.existsSync(filePath)) {
                  fs.mkdirSync(filePath,{recursive:true})
                } 
                e.mv(path.resolve(filePath,image)) 
              })
            const response = new Product({name,description,price,type:typeId,brand:brandId,images:JSON.stringify(imagesPath),date,sizes,colors})
            await response.save()
            console.log(brand,type,'ui');
            brand.products.push(response._id)
            brand.save()
            type.products.push(response._id)
            type.save()
            return response
        } catch (e) {
            console.log(e);
        }
    }

      async getOne(id){
        try {
        const response =await Product.findById(id).populate(['type','brand','ratings',]);
        return response
        } catch (error) {
            console.log(error);
        }
        
    }
    async change(id,purchase){
        try {
      
        const response =await Product.findById(id)
        response.purchaseNumber = response.purchaseNumber  + Number(purchase)
        await response.save()
        return response
        } catch (error) {
            console.log(error);
        }
        
    }
    async getAll(query){
        try {
            let {page,limit,typeId,brandId,search,minPrice,maxPrice,sort,sortNumber,checkedBrands,sizes,colors} = query
         
            page = page || 1
            limit = limit || 6
            search = search || ''
            checkedBrands = checkedBrands || 'false'
            console.log('serr', search);
            search = search.length !== 0 ? JSON.parse(search) : search
            const searchReg = new RegExp('.*' +search+ '.*') 
            console.log('sort', sort);
            
            sort = JSON.parse(sort)
            sortNumber = sortNumber || 1 
            minPrice =Number(minPrice)  || 0 
            maxPrice =Number(maxPrice)  || 1000000000
            console.log(minPrice,maxPrice);
            typeId = typeId || ''
            brandId = brandId || ''
            sizes = sizes || '[]'
            sizes =JSON.parse(sizes)
            colors = colors || '[]'
            colors = JSON.parse(colors)
            const skip = limit * page - limit 
            let responce
            let count
            console.log(sort,'gggy');

            if (!typeId && !brandId) {
             
                responce =await Product.find({name: { $regex: searchReg, $options: "i" }, price:{$gt: minPrice-1, $lt: maxPrice+1}}).sort({[sort]:sortNumber}).populate(['type','brand','ratings']);
            }
            if (typeId && !brandId) {
            console.log('dwdwdwd23');
                responce =await Product.find({name: { $regex: searchReg, $options: "i" },type:typeId, price:{$gt: minPrice-1, $lt: maxPrice+1}}).sort({[sort]:sortNumber}).populate(['type','brand','ratings']);
            }
            if (!typeId && brandId) {
              
                responce =await Product.find({name: { $regex: searchReg, $options: "i" },brand:brandId, price:{$gt: minPrice-1, $lt: maxPrice+1}}).sort({[sort]:sortNumber}).populate(['type','brand','ratings']);
            }
            if (typeId && brandId) {
         
                responce =await Product.find({name: { $regex: searchReg, $options: "i" },brand:brandId, type:typeId, price:{$gt: minPrice-1, $lt: maxPrice+1}}).sort({[sort]:sortNumber}).populate(['type','brand','ratings']);
            }
           
           

            if (sort =='rating') {
                console.log('^^^^^^');
                
                responce.sort((a,b)=>b.ratings.reduce((sum,val)=>val.rate+sum,0) - a.ratings.reduce((sum,val)=>val.rate+sum,0))
            }

          
      
             if (checkedBrands !== 'false') {
                console.log('++++');
                responce = [...responce.filter(e=>e.brand._id.toString() == checkedBrands)]
             }
             console.log(sizes,'4r');
             if(sizes.length !==0){
                responce = [...responce.filter(e=>JSON.parse(e.sizes).find(el=>sizes.includes(el)))]
             }

          
             if(colors.length !== 0){
                const colorsTwo = colors.map(e=>e[1])
                  console.log(responce,'');
                responce = [...responce.filter(e=> Object.values( JSON.parse(e.colors)).find(el=>colorsTwo.includes(el)) )]
            }
           

            count = responce.length
            const responceAll = responce
            responce = responceAll.slice(skip,limit * page)
            return ({
                responce,
                responceAll,
                count
            })
        } catch (e) {
            console.log(e);
        }
      }

      async getByPurchase(){
        try {
            let response =await Product.find({}).sort({purchaseNumber:-1}).populate(['type','brand','ratings','information']).limit(5)
         
        return response
        } catch (error) {
            console.log(error);
        }
        
    }

    async createMany(){
        try {
            const products = productsData
            const brands = await brandService.getAllWithoutType()
            const users = await userService.getAll()
            const rates = ratingData
            for (const product of products){
                const {colors, description,images,name,price,sizes,type} = product
                const date = Date.now()
                const brand = getRandomElement(brands)
                const typeCreate = await typeService.getOneByName(type)
                const response = new Product({name,description,price,type:typeCreate.id,brand:brand.id,images:JSON.stringify(images),date,sizes:JSON.stringify(sizes),colors:JSON.stringify(colors)})
                await response.save()
                brand.products.push(response._id)
                await brand.save()
                typeCreate.products.push(response._id)
                await typeCreate.save()

                for (const user of users){
                    const rateData = getRandomElement(rates)
                     await ratingService.createRating(user.id,rateData.rate,response.id,user.name,user.sername,rateData.text)
    
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

}
module.exports =new productServices()

