let products1 = [];
let total = 0;

function addProduct(product, price) {
    console.log("Esto se agrega al carro");
    // products1.push(product);
    // total += price
    // document.getElementById("checkout").innerHTML = `Pagar ${total}`
}

function pay() {
    window.alert(products1.join(", \n"));
}



const fetchCategories = async () => {
    const resp = await fetch('http://localhost:4000/category');
    const categories = await resp.json();
    return categories
}
fetchCategories().then(categories => {
    displayCategories(categories);
});



const allProducts = async( id ) => {

    const url = ''

    const resp = await fetch('http://localhost:4000/products');
    const products = await resp.json();
    return products;
}
allProducts().then(products => {
    displayProducts(products)
});




const btns = document.querySelector('.btns-container')
const products = document.querySelector('.products-container')
const categories = document.querySelector('.list-category')



const displayProducts = (allProduct) => {
    let displayProduct = allProduct.map((item) => {

        const {name, price, url_image} = item;

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
    })
    displayProduct = displayProduct.join('')
    products.innerHTML = displayProduct
}

//! Aqui se almacenan todos los productos de la categoria seleccionada
let selectedCategory = [];

const categorySelected = async(idCategory) => {
    const resp = await fetch(`http://localhost:4000/category/${idCategory}`);
    const categories = await resp.json();
    return categories
}


const displayCategories = (allCategories) => {
    let displayCategories = allCategories.map((item) => {
        return `
            <li><a class="dropdown-item"onClick="categorySelected(${item.id})">${item.name}</a></li>     `
    })
    displayCategories = displayCategories.join('');
    categories.innerHTML = displayCategories;
}