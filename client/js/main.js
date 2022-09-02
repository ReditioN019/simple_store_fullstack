const searchProduct = document.querySelector('#buscar-producto');
const productsList = document.querySelector('#products');
const categoryList = document.querySelector("#category-list");
const searchMessage = document.querySelector('#search-message');


let arrayProducts = [];
//Carga Inicial
window.addEventListener('DOMContentLoaded', async() => {

    renderLoadSpinner();

    //!Carga las categorias
    const categoriesData = await loadCategories();
    renderCategories(categoriesData);//!Muestro las categorias en el boton

    //!Carga inicial de los productos
    const productsData = await loadProducts();
    arrayProducts = productsData
    renderProducts(arrayProducts);
});


const sortProducts = (value) => {

    if(value === 'low_to_high'){
        const products = arrayProducts.sort((a,b) => {
            if(a.price > b.price){
                return 1
            }
            return -1
        })

        renderProducts(products)
    }
    if(value === 'high_to_low'){
        const products = arrayProducts.sort((a,b) => {
            if(a.price < b.price){
                return 1
            }
            return -1
        })

        renderProducts(products)
    }

    if(value === 'nameAZ'){
        const products = arrayProducts.sort((a,b) => {
            if(a.name > b.name){
                return 1
            }
            return -1
        })

        renderProducts(products)
    }
    if(value === 'nameZA'){
        const products = arrayProducts.sort((a,b) => {
            if(a.name < b.name){
                return 1
            }
            return -1
        })

        renderProducts(products)
    }

    if(value === 'discount'){
        const products = arrayProducts.sort((a,b) => {
            if(a.discount < b.discount){
                return 1
            }
            return -1
        })

        renderProducts(products)
    }

}
