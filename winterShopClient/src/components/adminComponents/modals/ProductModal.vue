<template>
        <div  class="Admin__modal modal-admin">
            <div class="modal-admin__name">Добавить продукт</div>
            <MyInputVue v-model="nameProduct" inputClass="admin" placeholder="*имя продукта" :placeholderOn="true"/>
            <MyNumberVue max="100000" v-model="price" numberClass="admin" placeholder="*цена"/> 
             <MyTextAreaVue v-model="info"  textAreaClass="admin" placeholder="характеристики"/>

             <div class="modal-admin__spoilers">
                <MySpoilerVue spoilerClass="navMenu _admin"  v-model="type" >
                            <template #header>
                                <div class="controls-catalog__sortButton _header _icon-arrow">Тип</div>
                            </template>

                                <div  v-for="TypeItem in types"  @click="typeId= TypeItem._id"  class="controls-catalog__sortButton _dev">{{TypeItem .name}}</div>
                           
                </MySpoilerVue>

                <MySpoilerVue spoilerClass="navMenu _admin"  v-model="brand" >
                            <template #header>
                                <div class="controls-catalog__sortButton _header _icon-arrow">Бренд</div>
                            </template>
                                <div v-for="brandItem in brands" @click="brandId= brandItem._id"  class="controls-catalog__sortButton _dev">{{brandItem.name}}</div>
                   
                </MySpoilerVue>
                <MySpoilerVue spoilerClass="navMenu _admin">
                            <template #header>
                                <div class="controls-catalog__sortButton _header _icon-arrow">Размер</div>
                            </template>
                                <div @click="!sizes.includes('S') && sizes.push('S')" class="controls-catalog__sortButton _dev">S</div>
                                <div @click="!sizes.includes('M') && sizes.push('M')" class="controls-catalog__sortButton _dev">M</div>
                                <div @click="!sizes.includes('L') && sizes.push('L')" class="controls-catalog__sortButton _dev">L</div>
                                <div @click="!sizes.includes('XL') && sizes.push('XL')" class="controls-catalog__sortButton _dev">XL</div>
                                <div @click="!sizes.includes('XXL') && sizes.push('XXL')" class="controls-catalog__sortButton _dev">XXL</div>
                </MySpoilerVue>
             </div>
             <div v-if="sizes.length !== 0" class="modal-admin__colors">
                <div v-for="size in sizes" class="modal-admin__colorsItem">
                    <span>{{size}}</span>
                    <div @click="[...sizes.splice(sizes.indexOf(size),1)]"   class="loginModal__close"></div>
                </div>
                
            </div>
             <MyInputVue v-model="nameColor" inputClass="admin" placeholder="*имя Цвета" :placeholderOn="true"/>
             <MyInputVue v-model="color" inputClass="admin" placeholder="*цвет" :placeholderOn="true"/>
             <div class="modal-admin__color">
                <MyButtonVue @click="colorActive = !colorActive" className="login">Выбрать цвет</MyButtonVue>
                <div class="modal-admin__colorPicker" :class="{'active':colorActive}">
                    <v-color-picker @update:modelValue="colorActive = false" v-model="color"></v-color-picker>
                </div>
                
                
             </div>
             <MyButtonVue @click="colors[nameColor] = color" className="login">добавить цвет</MyButtonVue>
             <div v-if="Object.keys(colors).length !== 0" class="modal-admin__colors">
                <div v-for="color in Object.keys(colors)" class="modal-admin__colorsItem">
                    <span>{{color}}</span>
                    <span>{{colors[color]}}</span>
                    <div @click="delete colors[color]"   class="loginModal__close"></div>
                </div>
                
            </div>
             
             <MyFileVue @fileClick="productFile" >
                <MyButtonVue className="login">Добавить изображения</MyButtonVue>
             </MyFileVue>
             <div v-if="productImages.length !== 0" class="modal-admin__images">
                <div  v-for="item in productImages" :key="item" class="modal-admin__imageCover">
                    <div  class="modal-admin__image">
                    <img :src="item" alt="">
                </div>
             </div>
             
             
             
     
            </div>
            <MyButtonVue @click="setProduct" className="login">Добавить</MyButtonVue>
        </div>
</template>
<script setup>
import { getAllBrands } from '../../../http/brandsApi'
import { getAllTypes } from '../../../http/typesApi'
import MyButtonVue from '../../UI/MyButton.vue'
import MyFileVue from '../../UI/MyFile.vue'
import MyInputVue from '../../UI/MyInput.vue'
import MyNumberVue from '../../UI/MyNumber.vue'
import MySpoilerVue from '../../UI/MySpoiler.vue'
import MyTextAreaVue from '../../UI/MyTextArea.vue'
import useProduct from '@/hooks/useProduct.js'
import { computed, onMounted, ref } from 'vue'
import store from '@/store'

            const nameProduct = ref('')
            const price = ref(null)
            const info = ref('')
            const colors = ref({})
            const nameColor = ref('')
            const color = ref('')
            const colorActive = ref(false)
            const types = ref([])
            const brands = ref([])
            const productFiles = ref([])
            const productImages = ref([])
            const typeId = ref('')
            const brandId = ref('')
            const sizes = ref([])
            const imageFiles = ref(null)

    const setProduct = ()=>{
        useProduct(nameProduct.value,info.value,price.value,typeId.value,brandId.value,colors.value,sizes.value,productFiles.value).then(()=>{
                nameProduct.value = ''
                info.value = ''
                price.value = null
                typeId.value = ''
                brandId.value = ''
                colors.value = []
                sizes.value = []
                productFiles.value = []
                imageFiles.value = []
                store.commit('admin/setModal',false)
        }).catch(e=>{
            console.log(e);
        })
        }

        
        const productFile = (e)=> {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(e[0])
            fileReader.onloadend = ()=>{
            productImages.value = [...productImages.value, fileReader.result]
            productFiles.value = [...productFiles.value, e[0]]
            }
        
        }

  onMounted(()=>{
    getAllTypes().then(data=>{
            types.value = data
        })
        getAllBrands().then(data=>{
            brands.value = data
        })
  })




</script>
<style lang="scss">
    
    .modal-admin {
padding: em(30) em(20);
display: flex;
flex-direction: column;
gap: em(40);
.MyFile{
    margin-bottom: em(30);
}
&__images{
    display: flex;
    flex-wrap: wrap;
    gap: em(10);
    max-width: em(350);
}
&__spoilers{
    display: flex;
    flex-wrap: wrap;
    gap:em(20);
    @media (max-width:$mobile){
         flex-direction: column;
    }
}
&__image{
    width: em(200);
    height: em(200);
    position: relative;
    img{
        z-index: 1;
        object-fit: contain;
        position: absolute;width: 100%;height: 100%;top: 0;left: 0;
    }
}
&__color{
    position: relative;
}
&__colorPicker{
    z-index: 4;
    position: absolute;bottom: 120%;left: 0;
    opacity: 0;
    transition: all 0.3s ease 0s;
    pointer-events: none;
    &.active{
        opacity: 1;
        transition: all 0.3s ease 0s;
        pointer-events: inherit;
    }
}
&__name {
}
&__imageCover{
    display: flex;
    justify-content: center;
 
}

.loginModal__close {
    @media (any-hover: hover){
        &:hover{
                    
    &::before,&::after{
        transition: all 0.3s ease 0s;
        background: $hoverColor;
    }
        }
    }
    cursor: pointer;
    position: absolute;top: 20px;right:20px;
    background: $mainColor;
    width: 30px;
        height: 30px;
        
    &::before,&::after{
        transition: all 0.3s ease 0s;
        content:'';
        display: block;
        width: 25px;
        height: 2px;
        background: #fff;
        position: absolute;top: 50%;left: 50%;
    }
    &::before{
        transform: translate(-50%,-50%) rotate(45deg) ;
        
    }
    &::after{
        transform:  translate(-50%,-50%) rotate(-45deg) ;
        
    }
}

&__colors {
            display: flex;
            flex-direction: column;
            gap:em(10)
		}

		&__colorsItem {
            padding: em(5) em(10);
            border-bottom: 1px solid #000;
            display: flex;
            position: relative;
            align-items: center;
            :first-child{
                flex:  1 1 auto;
            }
            
		}


   .loginModal__close {
       position: relative;
       top: inherit;
       right: inherit;
       margin-left: em(30);
   }
}


</style>