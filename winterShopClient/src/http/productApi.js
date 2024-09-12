import { $host } from "."

export const getAllproduct = async(typeId=null,page=null,limit=null,search=null,checkedBrands=null,sizes=null,sortNumber=null,minPrice=null,maxPrice=null,colors=null,sort=JSON.stringify("date"),informations=null,typeInformation=null)=>{
   console.log(typeId,'qqqqqqqq');
    const {data} = await $host.get('product/getAll',{params:{
        typeId,page,limit,search,checkedBrands,sortNumber,minPrice,maxPrice,sort,informations,typeInformation,sizes,colors
        
    }})
    return data
}


export const getOneproduct = async(id)=>{
    const {data} = await $host.post('product/getOne',id)
    return data
}

export const createProduct = async(id)=>{
    const {data} = await $host.post('product',id)
    return data
}



export const addOrderItem = async(info)=>{
    const {data} = await $host.post('orderItem',info)
    return data
}

export const addRaiting= async(info)=>{
    const {data} = await $host.post('rating',info)
    return data
}


export const change= async(info)=>{
    const {data} = await $host.post('product/change',info)
    return data
}

export const getByPurchase= async()=>{
    const {data} = await $host.post('product/getByPurchase')
    return data
}

