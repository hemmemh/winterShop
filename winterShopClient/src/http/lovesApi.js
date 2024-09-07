import {$host } from "."


export const getLoves =  async(info)=>{
    const {data} = await $host.post('loves/getOne',info)
    return data
}

export const addProductInLoves =  async(info)=>{
    const {data} = await $host.post('loves/add',info)
    return data
}


export const removeProductFromLoves =  async(info)=>{
    const {data} = await $host.post('loves/remove',info)
    return data
}