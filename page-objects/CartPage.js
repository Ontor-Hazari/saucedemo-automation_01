class CartPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
        this.cartLink = '.shopping_cart_link';
        this.productName = '.inventory_item_name';
        this.productPrice = '.inventory_item_price';
        this.cartBadge = '.shopping_cart_badge';
    }

    async addItemToCart() {
        await this.page.click(this.addToCartButton);
    }

    async openCart() {
        await this.page.click(this.cartLink);
    }

    async getCartBadgeCount() {
        return await this.page.textContent(this.cartBadge);
    }

    async getProductDetails() {
        return {
            name: await this.page.textContent(this.productName),
            price: await this.page.textContent(this.productPrice),
        };
    }
}

module.exports = CartPage;
