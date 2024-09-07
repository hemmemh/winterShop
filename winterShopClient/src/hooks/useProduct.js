import { createProduct } from "@/http/productApi"

export default async function setProduct(nameProduct,info,price,typeId,brandId,colors,sizes,productFiles){
    const formData = new FormData()
    formData.append('name',nameProduct)
    formData.append('description',info)
    formData.append('price',price)
    formData.append('typeId',typeId)
    formData.append('brandId',brandId)
    formData.append('colors',JSON.stringify(colors))
    formData.append('sizes',JSON.stringify(sizes))
    productFiles.forEach(e=>formData.append('image',e))
    await createProduct(formData)

}