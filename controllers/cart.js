var qlsp = new ServiceProducts()

let token = JSON.parse(localStorage.getItem("LOGIN")).token

const getEle = (id) => document.getElementById(id);

getLocal()

function getCart(){
   
    qlsp.cart(token)
    .then(function(res){
        
        let list = res.data
        renderOrders(list);
    })
    .catch(function(err){
        console.log(err);
    })
}
getCart()
// i.createdAt: "2022-08-02T02:11:44.200Z"
// i.description: "paypal"
// i.isPayed: true
// i.products: (2) [{…}, {…}]
// i.status: 1
// i.updatedAt: "2022-08-02T02:11:44.200Z"
// i.userOrder: "62e72d9e6dbee60017a729b0"
// i._id: "62e887e072f8b800178fab5b"

function renderOrders(list){
    let content = "";
    

    
    list.forEach((item,i)=>{
        let isPayed = ""
        let description=""
        let create = item.createdAt.substr(0, 10)+"<br>"+item.createdAt.substr(11, 8)
        let update = item.updatedAt.substr(0, 10)+"<br>"+item.updatedAt.substr(11, 8)
        let status = ""
        let products = "";
        item.products.forEach((product)=>{
            // console.log(product);
            products+=`
                <div >
                <div>
                <img width="80px" height="80px" src="${product.img}">
                </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-secondary">name: ${product.name}</li>
                        <li class="list-group-item bg-secondary">price: ${product.price}, size: ${product.size}</li>
                        <li class="list-group-item bg-secondary">quantity: ${product.quantity}, color: ${product.color}</li>
                        <li class="list-group-item bg-secondary">id: ${product._id}</li>
                    </ul>
                     
                </div> 
                
            `
        })
        
        if(item.isPayed==true){
            isPayed = "Paid"
        }else{
            isPayed = "Unpaid"
        }
        if(item.description){
            description = "Paypal"
        }else{
            description = "No payment"
        }
        if(item.status==1){
            status = '<i class="fa fa-thumbs-up success"></i>'
        }else{
            status = '<i class="fa fa-thumbs-down"></i>'
        }

        
    //    console.log(item);
        content += `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${item._id}</td>
            <td>${item.userOrder}</td>
            <td style="display:flex">`+products+`</td>
            <td>${description}</td>
            <td><a href="#" onclick=updateCart('${item._id}','${item.status}') id="txtStatus">${status}</a></td>
            <td>${create}</td>
            <td>${update}</td>
            <td>
            <button onclick=deleteCartID('${item._id}') type="button" class="btn btn-danger">
            <i class="fa fa-times"></i>
        </button>
            </td>
        </tr>
        
        `;
        
    });
    getEle("tblOrder").innerHTML = content
}



const deleteCartID = (id) => {
    // console.log(id);
    qlsp.deleteCart(token,id)
    .then(function(res){
        alert(res.data);
        window.location.reload()
    })
    .catch(function(err){
        console.log(err);
    })
}

const updateCart=(id,status)=>{
    
    // console.log(tokenAdmin);
    if(status=='0'){
        status = '1'
    }else if(status=='1'){
        status = '0'
    }
    qlsp.updateCartByAdmin(token,id,status)
    .then(function(res){
        alert(res.data.messager)
        window.location.reload()
    })
    .catch(function(err){
        console.log(err);
    })
}

// const createCart =() =>{
//     let quantity = getEle('quantity').value
//     let name = getEle('name').value
//     let price = getEle('price').value
//     let size = getEle('size').value
//     let img = getEle('img').value
//     let color = getEle('color').value
//     let product = new productCart(quantity,name,price,size,img,color)
    
   

// }
// createCart()


// setLocal
function setLocal(){
    var arrString = JSON.stringify(qlsp.list)
    localStorage.setItem('CART', arrString)
}
function getLocal(){
    if(localStorage.getItem('CART')){
        var data = localStorage.getItem('CART')
        qlsp.list = JSON.parse(data)
    }
}



