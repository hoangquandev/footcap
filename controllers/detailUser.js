//Lấy id từ url
const getID = () => window.location.search.substr(1).split("=")[1]
//console.log(getID());
const getEle = (id) => document.getElementById(id);
var qlsp = new ServiceProducts()
function getUserProfile() {
    var datatoken = JSON.parse(localStorage.getItem('LOGIN')).token
    //Lấy id của admin
    var dataid = JSON.parse(localStorage.getItem('LOGIN')).user._id
    // console.log(dataid);
    qlsp.getUserProfile(datatoken, getID())
        .then(function (res) {
            rederList(res.data)
        })
        .catch(function (err) {
            console.log(err);
        })
}
getUserProfile()

const rederList = (data) => {

    content = `
     <div style="padding:0px 50px ;height:400px;width:20%;display:flex ;justify-content: center; align-items: center;">
     <img src="../admin/img/user.jpg" alt="Card image cap"width="500">
     </div>
        <div style="padding:0px 50px;height:400px;width:30%;display:flex ;justify-content: center; align-items: center;">
          <div width=200px>
          <h2 class="card-title">Name: ${data.name}</h2>
          <p class="card-title">Id: ${data._id}</p>
          <p class="card-title">Email: ${data.email}</p>
          <p class="card-title">Age: ${data.age}</p>
          <button type="button" class="btn btn-primary"  data-toggle="modal" data-target=".bd-example-modal-xl">Update</button>
          </div>
        </div>
     `


    getEle("idUser").innerHTML = content
    getEle("name").value = data.name
    getEle("email").value = data.email
    getEle("age").value = data.age
}



const upDate = () => {
    let name = getEle("name").value
    let password = getEle("password").value
    let email = getEle("email").value
    let age = parseInt(getEle("age").value)

    let data = {
        "name": name,
        "email": email,
        "password": password,
        "age": age
    }
    return data
    


}

const update = (id) => {
    var token12 = JSON.parse(localStorage.getItem('LOGIN')).token
    let tok = ''
    qlsp.getUser(token12)

        .then(function (res) {
        //    console.log(res.data);
            res.data.forEach(item => {
                if (item._id == id) {
                    return tok = item.token

                }
            });
            // console.log(tok);

        })
        .catch(function (err) {
            console.log(err);
        })
    qlsp.upDateUser(tok, upDate())
        .then(function (res) {
            console.log(res.id);
        })
        .catch(function (err) {
            console.log(err);
        })
}





