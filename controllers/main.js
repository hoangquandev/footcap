var qlsp = new ServiceProducts();

const getEle = (id) => document.getElementById(id);

function showQty() {
    let listLocal = JSON.parse(localStorage.getItem("LISTCART"));
    let quantity = 0;
    if (listLocal) {
      for (let i = 0; i < listLocal.length; i++) {
        quantity += listLocal[i].quantity;
      }
      console.log(quantity);
      getEle("qtyProduct").innerHTML = quantity;
    } else {
      getEle("qtyProduct").innerHTML = 0;
    }
  }
  showQty();

