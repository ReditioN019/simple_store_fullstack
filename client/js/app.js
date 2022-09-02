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


searchProduct.addEventListener('keyup', e => {
    fetch('http://localhost:4000/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({payload: e.target.value})
    }).then(res => res.json()).then(data => {
        let payload = data.payload;
        renderProducts(payload);
    });
})

const loadProducts = async() => await (await fetch('http://localhost:4000/products')).json();
const loadCategories = async() => await (await fetch('http://localhost:4000/category')).json();
const loadProductsByCategory = async(id) => await (await fetch(`http://localhost:4000/category/${id}`)).json(); 
   

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


const displayCategories = (categories) => categories.map((item) => (
     `
    <li>
        <a id="category" class="dropdown-item category"onClick="productsByCategory(${item.id})">${item.name}</a>   
    </li>     
    `
));

const productsByCategory = async(id) => {
    const productsByCategory = await loadProductsByCategory(id);
    renderProducts(productsByCategory);
}

const allProducts = async() => {
    const allProducts = await loadProducts();
    renderProducts(allProducts);
}

//!===========================================================
//!==================MOSTRAR EN PANTALLA======================
//!===========================================================

const renderProducts = (products) => {
    const itemString = createProductsItems(products);
    productsList.innerHTML = itemString;
}

const renderCategories = (categories) => {
    const item = displayCategories(categories);
    item.unshift(`
        <li>
            <a id="category" class="dropdown-item category" onClick="allProducts(0)">Todos</a>   
        </li>  
    `);
    categoryList.innerHTML = item.join('');
}

const renderLoadSpinner = () => (
    productsList.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `
)