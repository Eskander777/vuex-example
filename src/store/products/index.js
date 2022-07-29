import { productItems } from './items';
import products from './getters';

const productsState = {
  state() {
    return {
      products: productItems,
    };
  },
  getters: products,
};

export default productsState;
