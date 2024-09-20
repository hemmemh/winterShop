import { createStore } from 'vuex';
import { userModule } from './user/userModule';
import { basketModule } from './basket/basketModule';
import { productModule } from './product/productModule';
import { productItemModule } from './productItem/productItemModule';
import { navBarModule } from './navBar/navBarModule';
import { adminModule } from './admin/adminModule';

export default createStore({
  modules: {
    user: userModule,
    basket: basketModule,
    product: productModule,
    productItem: productItemModule,
    navbar: navBarModule,
    admin: adminModule,
  },
});
