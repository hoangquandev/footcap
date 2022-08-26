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

// thêm Sản Phẩm
/* function addProduct() {
    let name = getEle("inputName").value;
    let gender = getEle("inputGender").value;
    let typeProduct = getEle("inputTypeProduct").value;
    let description = getEle("inputDesc").value;
    let message = getEle("inputMessage").value;
    let color = parseInt(getEle("inputColor").value);
    let price = parseInt(getEle("inputPrice").value);
    let img = getEle("inputImage").value;
    let sizes = [{
        "size": "string"
      }];
    let imgDetails = [
        {
          "color": "string",
          "imgs": [
            {
              "img": "string"
            }
          ]
        }
      ];
      let userCreated = "string";
      let status = 0;
  
    // var isValid = validation.kiemTraRong(tenSP,"TenSPErr","(*) ko dc rỗng")
    // if(isValid == false){
    //   isValid = validation.kiemTraRong(tenSP,"TenSPErr","(*) ko dc rỗng")
    // }
    // else{
      var product = new Products(name,
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
      qlsp.addProducts(getLocalStorage(),product)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    // }
   console.log(qlsp.getListProductAPI());
  // return
    
    
  } */

// them sp
function addProduct() {
  let name = getEle("inputName").value;
  let gender = getEle("inputGender").value;
  let typeProduct = getEle("inputTypeProduct").value;
  let description = getEle("inputDesc").value;
  let message = getEle("inputMessage").value;
  let color = parseInt(getEle("inputColor").value);
  let price = parseInt(getEle("inputPrice").value);
  let img = getEle("inputImage").value;
  let sizes = [{
    "size": "XL"
  }];
  let imgDetails = [
    {
      "color": "red",
      "imgs": [
        {
          "img": "string"
        }
      ]
    }
  ];
  let userCreated = "200922";
  let status = 0;
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
    console.log(token);
  qlsp.addProducts(`${token}`,product)
    .then(function (res) {
      // console.log(token);
      alert("Add successful")
      console.log(res);
    })
    .catch(function (err) {
      alert("Add fail " + err)
      console.log(err);
    });
  // }
  // console.log(qlsp.getListProductAPI());
  // return


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
  let product = new Products(_id, name, gender, typeProduct, description, message, color, price, img, sizes, imgDetails, userCreated, status)
  let token1 = JSON.parse(localStorage.getItem("LOGIN")).token
  console.log(token1);
  qlsp.updateProduct(token1, product, _id)
    .then(function (rs) {
      alert("updatesuccess")
      document.getElementsByClassName("close")[0].click()
    })
    .catch(function (err) {
      console.log(err);
    })
}
