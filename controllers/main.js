var qlsp = new ServiceProducts();

const getEle = (id) => document.getElementById(id);

function getCategory(){
    qlsp.getAllCategory()
    .then(function(res){
        renderCategory(res.data.content);
    })
    .catch(function(err){
        console.log(err.message);
    })
}
getCategory() 

 const renderCategory = (list) => {
    let content = "";
    list.forEach((item) => {
        content += `
            <li>
              <div class="collection-card" style="background-image: url('../assets/images/collection-1.jpg')">
                <h3 class="h4 card-title">${item.category}</h3>

                <a href="#" class="btn btn-secondary">
                  <span>Explore All</span>

                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </li>
        `
    });
    getEle("renderCategory").innerHTML =  content;
} 

function getLocalStorage(){
  var data = JSON.parse(localStorage.getItem('LOGIN'))
  console.log(data);
  return key = data.token
  
}


// getUsers
function getUsersByToken(){
  qlsp.getUsers(getLocalStorage())
  .then(function(res){
    console.log(res.data);
  })
  .catch(function(err){
    console.log(err.response.data.message);
  })
}
getUsersByToken()

// // get User by Id
// function getUserId(){
//   qlsp.getUserByID(getLocalStorage(),JSON.parse(localStorage.getItem('LOGIN')).user._id)
//   .then(function(res){
//     console.log(res.data);
//   })
//   .catch(function(err){
//     console.log(err.response.data.message);
//   })
// }
// getUserId()