
const getEle = (id) => document.getElementById(id);

function getUserViews() {

    let dataUser = JSON.parse(localStorage.getItem('LOGIN')).user
    rederList1(dataUser)

}
getUserViews()


function rederList1(data) {

    //console.log(data);

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


    getEle("idUsers").innerHTML = content

}
