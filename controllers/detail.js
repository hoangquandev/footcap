qlsp = new ServiceProducts();

const getIDFromURL = () => window.location.search.substr(1).split("=")[1];
// console.log(getIDFromURL());

const getEle = (id) => document.getElementById(id);

var listLocal = JSON.parse(localStorage.getItem("LISTCART"));

// console.log(listLocal);

// let listCartLocal = JSON.parse(localStorage.getItem('LISTCART'))

const getDetailProduct = () => {
  qlsp
    .getProductbyID(getIDFromURL())
    .then(function (res) {
      getEle("txtname").innerHTML = res.data.name;
      getEle("message").innerHTML = res.data.message;
      getEle("price").innerHTML = `Price: $${res.data.price}`;
      getEle("desc").innerHTML = res.data.description;
      getEle("image").innerHTML = `<img src = "${res.data.img}" >`;
      let size = "";
      for (let i = 0; i < res.data.sizes.length; i++) {
        size += `<option value="${res.data.sizes[i].size}">${res.data.sizes[i].size}</option>`;
      }
      getEle("size").innerHTML = size;
    })
    .catch(function (err) {
      console.log(err);
    });
};
getDetailProduct();

// var listCart = []

function addToCart() {
  qlsp
    .getProductbyID(getIDFromURL())
    .then(function (res) {
      //  console.log(res);
      let name = res.data.name;
      let price = res.data.price;
      let img = res.data.img;
      let size = getEle("size").value;
      let quantity = parseInt(getEle("quantity").value);
      let color = "red";

      var productCart = new ProductCart(
        quantity,
        name,
        price,
        size,
        img,
        color
      );
      // console.log(productCart);
      // return productCart
      if (productCart) {
        listLocal.push(productCart);

        setLocalStorage();
        // window.location.reload()
        showQty(listLocal);

        alert(`Added ${quantity} to cart`);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
function buyNow() {
  qlsp
    .getProductbyID(getIDFromURL())
    .then(function (res) {
      //  console.log(res);
      let name = res.data.name;
      let price = res.data.price;
      let img = res.data.img;
      let size = getEle("size").value;
      let quantity = parseInt(getEle("quantity").value);
      let color = "red";

      var productCart = new ProductCart(
        quantity,
        name,
        price,
        size,
        img,
        color
      );
      // console.log(productCart);
      // return productCart
      if (productCart) {
        listLocal.push(productCart);

        setLocalStorage();
        // window.location.reload()
        showQty(listLocal);

        window.location.assign("/view/cart.html");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function showQty(arr) {
  let quantity = 0;
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      quantity += arr[i].quantity;
    }
    getEle("qtyProduct").innerHTML = quantity;
  } else {
    getEle("qtyProduct").innerHTML = 0;
  }
}
showQty(listLocal);

function setLocalStorage() {
  localStorage.setItem("LISTCART", JSON.stringify(listLocal));
}
