import { renderOrdersummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch} from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';


async function loadPage() {
try {
  await loadProductsFetch();

  await Promise.all([
    loadProductsFetch(),
    loadCartFetch()
  ]);

} catch(error) {
  console.log('unexpected error. please try again later');
}

  renderOrdersummary();
  renderPaymentSummary();

}
loadPage();


/*
Promise.all([
 loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrdersummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrdersummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrdersummary();
    renderPaymentSummary();
  });
});
*/
