var qlsp = new ServiceProducts();

const getEle = (id) => document.getElementById(id);

function getLocalCart() {
  let data = JSON.parse(localStorage.getItem("LISTCART"));
  // console.log(data);
  renderCart(data);
}
getLocalCart();

function renderCart(data) {
  let content = "";
  data.forEach((item, index) => {
    return (content += `
        <article class="product">
            <header>
              <a class="remove">
                <img  id="img" src="${item.img}" alt="">
    
                <h3 onclick="removeProductCart(${index})">Remove product</h3>
              </a>
            </header>
    
            <div class="content">
    
              <h1 id="name">${item.name}</h1>
    
              
    
              <div title="You have selected this product to be shipped in the color yellow." style="top: 0" class="color yellow"></div>
              <div style="top: 43px" class="type small">${item.size}</div>
            </div>
    
            <footer class="content">
              <span class="qt-minus">-</span>
              <span class="qt">${item.quantity}</span>
              <span class="qt-plus">+</span>
    
              
    
              <h2 class="price">
              ${item.price}
              </h2>
            </footer>
          </article>
        `);
  });
  getEle("cart").innerHTML = content;
}

function createCart() {
  let products = JSON.parse(localStorage.getItem("LISTCART"));
  let token = JSON.parse(localStorage.getItem("LOGIN")).token;
  qlsp
    .addProductCart(token, products)
    .then(function (res) {
      alert(res.data.messager);
      localStorage.removeItem("LISTCART");
      let listCart = [];
      localStorage.setItem("LISTCART", JSON.stringify(listCart));
      window.location.assign("/view/index.html");
    })
    .catch(function (err) {
      console.log(err);
    });
}

function removeProductCart(index) {
  let listLocal = JSON.parse(localStorage.getItem("LISTCART"));

  listLocal.splice(index, 1);
  console.log(listLocal);
  setLocalStorage(listLocal);
  alert("Remove success");
  window.location.reload();
}

function setLocalStorage(listLocal) {
  localStorage.setItem("LISTCART", JSON.stringify(listLocal));
}

function noCart() {
  let listLocal = JSON.parse(localStorage.getItem("LISTCART"));
  // console.log(listLocal);
  let content = `<p>Your cart is empty</p>`;
  if (listLocal.length === 0) {
    getEle("cart").innerHTML = content;
  }
}
noCart();
