var qlsp = new ServiceProducts();

const getEle = (id) => document.getElementById(id);

// show Category
// function getCategory(){
//     qlsp.getAllCategory()
//     .then(function(res){
//         renderCategoryName(res.data.content);
//     })
//     .catch(function(err){
//         console.log(err.message);
//     })
// }
// getCategory()

// const renderCategoryName = (list) => {
//     let content = "";
//     list.forEach((item) => {
//         content += `
//         <li>
//         <button class="filter-btn">${item.category}</button>
//       </li>
//         `
//     });
//     getEle("renderCategoryName").innerHTML = `<li>
//     <button class="filter-btn  active">All</button>
//   </li>` + content;
// }

// show product
function showAllProduct(){
    qlsp.getAllProduct()
    .then(function(res){
        renderAllProduct(res.data);
        // console.log(res.data);
    })
    .catch(function(err){
        console.log(err.message);
    })
}
showAllProduct()
const renderAllProduct = (list) => {
    let content = "";
    list.forEach((item) => {
      // console.log(item.image);
        content += `
        <li class="product-item">
              <a href="detail.html?id=${item._id}">
              <div class="product-card" tabindex="0">

                <figure class="card-banner">
                  <img src='${item.img}' width="312" height="350" loading="lazy"
                    alt="${item.name}" class="image-contain">

                  

                  <ul class="card-action-list">

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-2">
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-3">
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-3">Quick View</div>
                    </li>

                    <li class="card-action-item">
                      <button class="card-action-btn" aria-labelledby="card-label-4">
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div class="card-action-tooltip" id="card-label-4">Compare</div>
                    </li>

                  </ul>
                </figure>

                <div class="card-content">

                

                  <h3 class="h3 card-title">
                    <a href="#">${item.name}</a>
                  </h3>

                  <data class="card-price" value="${item.price}">$${item.price}</data>

                </div>

              </div>
              </a>
            </li>
        `
    });
    getEle("showAllProduct").innerHTML = content;
}
 