import { getAllBrands } from '@/http/brandsApi';
import { getAllproduct } from '@/http/productApi';
import { getOneType } from '@/http/typesApi';
import { ref } from 'vue';
export const productModule = {
    state:()=>({
       type:{},
       products:{},
       product:{},
       nav:false,
       sort:'date',
       navMenuRef:  ref(null),
       price: [0,100],
       minPriceEnd:0,
       maxPriceEnd:100,
       minPrice:0,
       maxPrice:100,
       colors:[],
       colorsActive:[],
       page:1,
       limit:2,
       brands:[],
       brand:false,
       sizes:[],
       sizesActive:[],
       productsLoad:false,
       updateLoading:false,
       searchEnd:'',
       search:'',
       timer:null
    }),
 
    mutations:{
        setType(state,type){
            state.type = type
        },
        setProducts(state,products){
            state.products = products
        },
        setProduct(state,product){
            state.product = product
        },
        setNav(state,nav){
            state.nav = nav
        },
        setSort(state,sort){
            state.sort = sort
        },
        setPrice(state,price){
            state.price = price
        },
        setPriceOne(state,price){
            state.price[0] = price
        },
        setPriceTwo(state,price){
            state.price[1] = price
        },
        setMinPriceEnd(state, minPriceEnd){
            state.minPriceEnd =  minPriceEnd
        },
        setMaxPriceEnd(state, maxPriceEnd){
            state.maxPriceEnd=  maxPriceEnd
        },
        setMinPrice(state, minPrice){
            state.minPrice =  minPrice
        },
        setMaxPrice(state, maxPrice){
            state.maxPrice =  maxPrice
        },
        setColors(state, colors){
            state.colors =  colors
        },
        setColorsActive(state, colorsActive){
            state.colorsActive =  colorsActive
        },
        setPage(state, page){
            state.updateLoading = true
            state.page =  page
        },
        setBrands(state, brands){
            state.brands=  brands
        },
        setBrand(state, brand){
            state.brand=  brand
        },
        setSizes(state, sizes){
            state.sizes= sizes
        },
        setSizesActive(state, sizesActive){
            state.sizesActive=  sizesActive
        },
        setProductsLoad(state, productsLoad){
            state.productsLoad=  productsLoad
        },
        setSearchEnd(state, searchEnd){
            state.searchEnd=  searchEnd
        },
        setTimer(state, timer){
            state.timer=  timer
        },
        setNavMenuRef(state, navMenuRef){
            state.navMenuRef=  navMenuRef
        },
        setSearch(state, search){
            state.search=  search
        },
        setUpdateLoading(state, updateLoading){
            state.updateLoading =  updateLoading
        },
        
    },
    actions:{
       async getProducts({commit},type){
            try {
                const data = await getAllproduct(type)
                commit('setProducts',data)

                let min = data.responceAll[0].price
                let max = data.responceAll[0].price
                let colors = {}
                let sizes = []
    
                data.responceAll.forEach(el=>{
                   min =Math.min(min,el.price)
                   max =Math.max(max,el.price)
                   sizes = ([...sizes, ...JSON.parse(el.sizes)])
                   colors = {...colors, ...JSON.parse(el.colors)}
                })
            
                if(min === max)  max = min + 1

                const colorsSet = new Set(Object.values(colors))

                commit('setSizes',Array.from(new Set(sizes)) )
                commit('setColors',Object.entries(colors).filter(el=> colorsSet.has(el[1])))
                commit('setPriceOne',min)
                commit('setPriceTwo',max)
                commit('setMinPriceEnd',min)
                commit('setMaxPriceEnd',max)
                commit('setMinPrice',min)
                commit('setMaxPrice',max)
                commit('setProductsLoad',true)
               

            } catch (error) {
                console.log(error);
            }


     
       },

       async getTypeAndBrands({commit},type){
            try {
                    const data = await getOneType({id:type})
                    commit('setType',data)
                    const brands = await getAllBrands(data._id)
                    commit('setBrands',brands)
            } catch (error) {
                console.log(error);
            }
     
       },

       async getProductsByType({state,commit},typeId){
        try { 
            commit('setUpdateLoading',false)
            const type = await getOneType({id:typeId})
            commit('setType',type)
            const data = await  getAllproduct(typeId,1,this.limit,'',null,null,null,null,null,null,state.sort)
            commit('setSizesActive',[])
            commit('setColorsActive',[])
            commit('setBrand',false)
            commit('setProducts',data)
            commit('setPage',1)

            let min = data.responceAll[0].price
            let max = data.responceAll[0].price
            let colors = {}
            let sizes =[]

            data.responceAll.forEach(el=>{
            min =Math.min(min,el.price)
            max =Math.max(max,el.price)
            sizes = [...sizes, ...JSON.parse(el.sizes)]
            colors = {...colors, ...JSON.parse(el.colors)}
            })

            const colorsSet = new Set(Object.values(colors))

            if(min == max){
                max = min+1
            }



          
            commit('setSizes',Array.from(new Set(sizes)) )
            commit('setColors',Object.entries(colors).filter(el=> colorsSet.has(el[1])))
            commit('setPriceOne',min)
            commit('setPriceTwo',max)
            commit('setMinPriceEnd',min)
            commit('setMaxPriceEnd',max)
            commit('setMinPrice',min)
            commit('setMaxPrice',max)
            commit('setProductsLoad',true)



        } catch (error) {
            console.log(error);
        }

  
       },

       async getBrands({commit},typeId=null){
        try {
            const brands = await getAllBrands(typeId)
            commit('setBrands',brands)
        } catch (error) {
            console.log(error);
        }
       },
       

       async getProductsByParams({commit},payload){
        console.log(commit);
        try {
            commit('setUpdateLoading',false)
    
            const products = await  getAllproduct(...payload)
          
            commit('setProducts',products)
        } catch (error) {
            console.log(error);
        } 
       },

       async updateSearch({state,commit},e){
            clearTimeout(state.timer)
            this.timer = setTimeout(() => {
                commit('setSearchEnd',e)
            }, 500);
       }




    },
  
    namespaced:true
}