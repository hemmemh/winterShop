import { createStore } from "vuex";
import { userModule } from "./userModule";
import { basketModule } from "./basketModule";
import { productModule } from "./productModule";
import { productItemModule } from "./productItemModule";
import { navBarModule } from "./navBarModule";
import { adminModule } from "./adminModule";


export default createStore({
   modules:{
    user:userModule,
    basket:basketModule,
    product:productModule,
    productItem:productItemModule,
    navbar:navBarModule,
    admin:adminModule,
   }
})