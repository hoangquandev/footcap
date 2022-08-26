
const getEle = (id) => document.getElementById(id);
var qlsp=new ServiceProducts()


function getLocalStore() {
    var data = JSON.parse(localStorage.getItem('LOGIN'))
    return key = data.token
      }
      getLocalStore()
function getAllUserAPI(){
    let data = JSON.parse(localStorage.getItem('LOGIN'))
    let key = data.token
  qlsp.getUser(getLocalStore())
    .then(function(res){
      rederList(res.data)
    })
    .catch(function(err){
        console.log(err);
    })
}
getAllUserAPI()

const rederList = (data) => {
 let contentAdmin = ""
 let contentUser=""
 for(let i =0;i<data.length;i++){
    if(data[i].userType=="admin")
    {
        contentAdmin += `
    <tr>
        <th scope="row">${i+1}</th>
        <td>${data[i].age}</td>
        <td>${data[i]._id}</td>
        <td>${data[i].email}</td>
        <td>
        <a href="detailUser.html?id=${data[i]._id}">
        ${data[i].name}
        </a>
        
        </td>
        
        
    </tr>`
   
    }
    else{
        contentUser += `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${data[i].age}</td>
            <td>${data[i]._id}</td>
            <td>${data[i].email}</td>
            <td>
            <a href="detailUser.html?id=${data[i]._id}">
            ${data[i].name}
            </a>
            </td>
           
            
            
        </tr>`
    }
    
    
 }

 
 getEle('tblAdmin').innerHTML = contentAdmin
 getEle("tblUser").innerHTML=contentUser

 
}



