const getEle = (id) => document.getElementById(id);
var qlsp = new ServiceProducts();

function getLocalStorage() {
  var data = JSON.parse(localStorage.getItem('LOGIN'))

  return key = data.token

}
var token = JSON.parse(localStorage.getItem('LOGIN')).token

function getAllProductAPI() {
  qlsp.getAllProduct()
    .then(function (res) {
      // console.log(res.data[2].sizes[2]);
      renderList(res.data)
    })
    .catch(function (err) {
      console.log(err);
    })
}
getAllProductAPI()

const renderList = (data) => {
  let content = ""
  for (let i = 0; i < data.length; i++) {
    content += `
    <tr>
        <th scope="row">${i + 1}</th>
        <td>${data[i].name}</td>
        <td>${data[i].typeProduct}</td>
        <td><img width="150px" height="120px" src="${data[i].img}"></td>
        <td>${data[i].price}</td>
        <td>${data[i].description}</td>
        <td>

          <button class="btn btn-info" onclick="editProduct('${data[i]._id}')" data-toggle="modal" 
          data-target=".bd-example-modal-xl"><i class="fa fa-edit"></i></button>
          
          
        </td>
        <td><button class="btn btn-danger" onclick="deleteProducts('${token}', ${data[i].id})">
        <i class="fa fa-times"></i>
    </button></td>
        
    </tr>`
  }
  getEle('tblProduct').innerHTML = content
}



// them sp
function addProduct() {
  let name = getEle("inputName").value;
  let gender = getEle("inputGender").value;
  let typeProduct = getEle("inputTypeProduct").value;
  let description = getEle("inputDesc").value;
  let message = getEle("inputMessage").value;
  let color = parseInt(getEle('inputColor').value);
  let color1 = getEle('inputColor').value;
  let price = parseInt(getEle("inputPrice").value);
  let checkPrice = getEle("inputPrice").value
  let img = getEle("inputImage").value;
  let sizes = [{
    "size": "XL"
  }];
  let imgDetails = [
    {
      "color": "red",
      "imgs": [
        {
          "img": "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
        }
      ]
    }


  ];
  let userCreated = JSON.parse(localStorage.getItem('LOGIN')).user._id;
  let status = 0;

  // let isValid = false
  if (name == "") {
    getEle("checkName").innerHTML = "(*) Name không được rỗng"
    getEle("checkName").style.color = "red"
  }
  if (gender == "") {
    getEle("checkGender").innerHTML = "(*) Gender không được rỗng"
    getEle("checkGender").style.color = "red"
  }
  if (typeProduct == "") {
    getEle("checktype").innerHTML = "(*) typeProduct không được rỗng"
    getEle("checktype").style.color = "red"
  } if (description == "") {
    getEle("checkDes").innerHTML = "(*) description không được rỗng"
    getEle("checkDes").style.color = "red"
  }
  if (message == "") {
    getEle("checkMess").innerHTML = "(*) message không được rỗng"
    getEle("checkMess").style.color = "red"
  } if (color1 == "") {
    getEle("checkColor").innerHTML = "(*) color không được rỗng"
    getEle("checkColor").style.color = "red"
  } if (checkPrice == "") {
    getEle("checkPrice").innerHTML = "(*) price không được rỗng"
    getEle("checkPrice").style.color = "red"
  } if (img == "") {
    getEle("checkImg").innerHTML = "(*) img không được rỗng"
    getEle("checkImg").style.color = "red"
  }

  let product = new Products(name,
    gender,
    typeProduct,
    description,
    message,
    color,
    price,
    img,
    sizes,
    imgDetails,
    userCreated,
    status);




  qlsp.addProducts(token, product)
    .then(function (res) {
      // console.log(token);
      alert("Add successful")
      window.location.reload()

    })
    .catch(function (err) {
      // kiemTraRong(name,"checkVali","(*)Name không được rỗng")
      console.log(err);
    });
}
// addProduct()

//   xoa sản phẩm
function deleteProducts(token, id) {
  // console.log(token);
  qlsp.deleteProduct(token, id)
    .then(function (res) {
      alert(res.data)
    })
    .catch(function (err) {
      console.log(err);
    })
}
//sua sp
function editProduct(id) {
  qlsp.getProductbyID(id)
    .then(function (rs) {
      getEle("inputName").value = rs.data.name
      getEle("inputMessage").value = rs.data.message
      getEle("inputDesc").value = rs.data.description
      getEle("inputImage").value = rs.data.img
      getEle("inputColor").value = rs.data.color
      getEle("inputTypeProduct").value = rs.data.typeProduct
      getEle("inputPrice").value = rs.data.price
      getEle("inputGender").value = rs.data._id
    })
    .catch(function (err) {
      console.log(err);
    })
}

function updateProducts() {
  let name = getEle("inputName").value
  let message = getEle("inputMessage").value
  let description = getEle("inputDesc").value
  let img = getEle("inputImage").value
  let color = parseInt(getEle("inputColor").value)
  let typeProduct = getEle("inputTypeProduct").value
  let price = parseInt(getEle("inputPrice").value)
  let _id = getEle("inputGender").value
  let sizes = [
    {
      "size": "XL"
    }
  ]
  let imgDetails = []
  let status = 0
  let gender = "shoes"
  let userCreated = "24/8/2022"
  let product = new ProductUpdate(_id, name, gender, typeProduct, description, message, color, price, img, sizes, imgDetails, userCreated, status)
  let token1 = JSON.parse(localStorage.getItem("LOGIN")).token
  // console.log(token1);
  qlsp.updateProduct(token1, product, _id)
    .then(function (rs) {
      alert("updatesuccess")
      document.getElementsByClassName("close")[0].click()
    })
    .catch(function (err) {
      console.log(err);
    })
}
getEle('txtSearch').addEventListener('keyup', function () {
  let keyWord = getEle('txtSearch').value
  // console.log(keyWord);
  var arrSearch = []
  qlsp.getAllProduct()
    .then(function (res) {
      // console.log(res.data);
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1) {
          arrSearch.push(res.data[i])
        }
      }
      renderList(arrSearch);

    })
    .catch(function (err) {
      console.log(err);
    })
})
