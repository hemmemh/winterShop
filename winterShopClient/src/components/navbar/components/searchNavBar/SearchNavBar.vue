<template lang="">
        <div v-if="this.$route.path === '/catalog'" :class="search ? `Navbar__search search-navbar active ` : `Navbar__search search-navbar`">
            <MyInputVue placeholder="поиск" :inputClass="search ? `search active _icon-search-winter` : `search  _icon-search-winter`"  :modelValue="searchInput" @update:modelValue="onSearch"/>
        </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import MyInputVue from '../../../UI/MyInput.vue'

export default {
    components:{
        MyInputVue
    },
    data(){
        return{
            searchInput:'',
        }
    },


 
        methods:{
            ...mapMutations({
          setSearch:'product/setSearch'
        }),

        onSearch(e){
            this.searchInput = e
            this.setSearch(e)
        },

        },

        computed:{
        ...mapState({
            search:state=>state.navbar.search,
        })
    },
}
</script>
<style lang="scss">
    

    .search-navbar {
    position: absolute;
   top: 160px;
@media (max-width:$mobile){
    top: 60px;
}
    width: 90%;
    left: 50%;
    transform: translate(-50%,0);
    pointer-events: none;
    &.active{
        pointer-events: visible;
    }
   
}
</style>