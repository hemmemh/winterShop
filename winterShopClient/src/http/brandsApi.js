import { $host } from "."

export const getAllBrands= async(typeId=null)=>{
    console.log(typeId,'tyyu');
    const {data} = await $host.get('brand/getAll',{
        params:{
            typeId
        }
    })
    return data
}


export const createBrand= async(info)=>{
    const {data} = await $host.post('brand',info)
    return data
}