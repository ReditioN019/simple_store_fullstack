const searchProduct = document.querySelector('#buscar-producto');
const productsList = document.querySelector('#products');
const categoryList = document.querySelector("#category-list");

let products = [];

window.addEventListener('DOMContentLoaded', async() => {

    productsList.innerHTML = '<h1>Loading...</h1>'

    //!Obtengo las categorias
    const categoriesData = await loadCategories();
    renderCategories(categoriesData);//!Muestro las categorias en el boton



    //!Cargo los productos
    const data = await loadProducts();
    //!Los productos (data) los asigno al array de productos que se mostraran en pantalla
    products = data;
    renderProducts(products);
})

searchProduct.addEventListener('keyup', e => {
    const productsFiltered = products.filter(product => (
        product.name.toLowerCase().includes(searchProduct.value.toLowerCase()))
    )
    renderProducts(productsFiltered);
})

async function loadProducts(){
    const resp = await fetch('http://localhost:4000/products');
    return await resp.json();
}

const createProductsItems = products => products.map(product => {
    const { name, price, url_image } = product;

    return `   
            <div class="col-12 col-md-6 col-lg-3  mt-2 product">
                <div class="card shadow">
                <div class="card-header">
                    <img src="${url_image}" width="100%" height="200" alt="" class=" image mt-5 mb-5">
                </div>
                <div class="card-body">
                    <h6 class="card-title m-0 mb-2 text-success">${name}</h6>

                    <div class="d-flex justify-content-between align align-items-center">
                    <h3 class="mt-2 price">$${price}</h3>
                    <button 
                        class="btn btn-primary" 
                        onclick="addProduct()"
                    >
                        <i class="fa-solid fa-cart-shopping cart"></i>
                    </button>  
                    </div>
                </div>
                </div>
            </div>
    `;
}).join('');

function renderProducts(products){
    const itemString = createProductsItems(products);
    productsList.innerHTML = itemString
}


//!-----------------------------------------------------
//!-----------------CATEGORIAS--------------------------
//!-----------------------------------------------------

async function loadCategories(){
    const resp = await fetch('http://localhost:4000/category');
    return await resp.json();
    
}


const displayCategories = (categories) => categories.map((item) => {
    return `
        <li>
            <a id="category" class="dropdown-item category"onClick="allProducts(${item.id})">${item.name}</a>   
        </li>     
    `
}).join('');


async function allProducts(id){
    const resp = await fetch(`http://localhost:4000/category/${id}`);
    const data =  await resp.json();
    products = data;
    renderProducts(products);
}

function renderCategories(categories){
    const itemString = displayCategories(categories);
    categoryList.innerHTML = itemString;
}
