import { $host } from "."

export const getAllTypes= async()=>{
    const {data} = await $host.post('type/getAll')
    return data
}

export const createType= async(info)=>{
    const {data} = await $host.post('type',info)
    return data
}

export const getOneType= async(info)=>{
    const {data} = await $host.post('type/getOne',info)
    return data
}

