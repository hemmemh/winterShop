import { ref } from "vue"

export default function fileClick(file){
    const image = ref(null)
    const fileData = ref(null)
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file[0])
     fileReader.onloadend =  ()=>{
       image.value = fileReader.result
    }
     fileData.value = file[0];
return {
    image:image.value,
    fileData:fileData.value
}
}