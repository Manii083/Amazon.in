import { renderOrdersummary } from "../../scripts/Checkout/orderSummary.js";
import { loadFromStorage} from "../../data/cart.js";
/*
describe('test suite: renderOrderSummary', () => {
    it('displays the cart ', () => {
        document.querySelector('.js-test-container').innerHTML=`
        <div class="js-order-summary"></div>
        `;

        spyOn(localStorage,'getItem').and.callFake(() => {
            return JSON.stringify({
                productId : '54e0eccd-8f36-462b-b68a-8182611d9add',
                quantity : 2,
                deliveryOptionId : '1'
            },{
                productId : '3ebe75dc-64d2-4137-8860-1f5a963e534b',
                quantity : 1,
                deliveryOptionId : '2'
            });
        });
        loadFromStorage();

        renderOrdersummary();

       expect(document.querySelector('.js-cart-item-container').length).toEqual(2);
    });
});
*/