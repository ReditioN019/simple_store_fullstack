const searchProduct = document.querySelector('#buscar-producto');
const productsList = document.querySelector('#products');
const categoryList = document.querySelector("#category-list");
const searchMessage = document.querySelector('#search-message');


window.addEventListener('DOMContentLoaded', async() => {

    renderLoadSpinner();

    //!Carga las categorias
    const categoriesData = await loadCategories();
    renderCategories(categoriesData);//!Muestro las categorias en el boton

    //!Carga inicial de los productos
    const productsData = await loadProducts();
    renderProducts(productsData);
});