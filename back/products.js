//#region MAIN

class Product {
    constructor(){
        this.products = [
           {id: 0, name: "Tomates", quantity: 50, img: "../front/assets/img/products/tomate.jpg", price: 0.40},
           {id: 1, name: "Oranges", quantity: 50, img: "../front/assets/img/products/orange.jpg", price: 0.60},
           {id: 2, name: "Pommes", quantity: 50, img: "../front/assets/img/products/pomme.jpg", price: 0.70},
           {id: 3, name: "Volvic", quantity: 50, img: "../front/assets/img/products/eau.jpg", price: 1.00},
           {id: 4, name: "Lactel", quantity: 50, img: "../front/assets/img/products/lait.jpg", price: 1.20},
           {id: 5, name: "Coca-Cola", quantity: 50, img: "../front/assets/img/products/coca.jpg", price: 1.50},
           {id: 6, name: "Golden Grahams", quantity: 50, img: "../front/assets/img/products/cereale.jpg", price: 2.50},
           {id: 7, name: "Lay's", quantity: 50, img: "../front/assets/img/products/chips.jpg", price: 1.30},
           {id: 8, name: "Kinder Délice", quantity: 50, img: "../front/assets/img/products/kinder.jpg", price: 3.50}
        ];
    }

    get getProduct(){
        return this.products;
    }

    saveProduct(product){
        const id = this.products.length + 1;
        this.products.push({id: id, ...product});
    }

    updateProduct(){}

    deleteProduct(param){
        let a;

        this.products.forEach(function(prod,index){

            if(prod.id === param){
                a = index;
            }
        })

        this.products.splice(a,1);
    }
}

module.exports = new Product();

//#endregion MAIN