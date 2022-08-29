var qlsp = new ServiceProducts()

const getEle = (id) => document.getElementById(id)
//b2: sign up
const getSignUp = (event) => {
    event.preventDefault()
    let name = getEle('txtName').value
    let email = getEle('txtEmail').value
    let password = getEle('txtPass').value
    let age = parseInt(getEle('txtAge').value) 
    let age1 = getEle('txtAge').value
    let userType = "user"
    if (name == "") {
        getEle("checkName1").innerHTML = "(*) name không được rỗng"
        getEle("checkName1").style.color = "red"
      }if (email == "") {
        getEle("checkEmail1").innerHTML = "(*) Email không được rỗng"
        getEle("checkEmail1").style.color = "red"
      }if (password == "") {
        getEle("checkPass1").innerHTML = "(*) Password không được rỗng"
        getEle("checkPass1").style.color = "red"
      }if (age1 == "") {
        getEle("checkAge1").innerHTML = "(*) Age không được rỗng"
        getEle("checkAge1").style.color = "red"
      }
    var user = new Users(name, email, password, age, userType)
    qlsp.signUp(user)
    .then(function (res) {
        localStorage.setItem("LOGIN", JSON.stringify(res.data)); 
        window.location.assign('./index.html')
        
    })
    .catch(function (err) {
        console.log(err);
    })
}

//b1: login
const login = () => {
    event.preventDefault();
    let userName = getEle("txtEmail1").value;
    
    let passWord = getEle("txtPass1").value;
    if (userName == "") {
        getEle("checkEmail").innerHTML = "(*) Name không được rỗng"
        getEle("checkEmail").style.color = "red"
      }
      if (passWord == "") {
        getEle("checkPass").innerHTML = "(*) PassWord không được rỗng"
        getEle("checkPass").style.color = "red"
      }else{
        let listCart = []
    qlsp.signIn(userName,passWord)
        .then(function (res) {
            localStorage.setItem("LOGIN", JSON.stringify(res.data));
            localStorage.setItem("LISTCART", JSON.stringify(listCart));
            let data=JSON.parse(localStorage.getItem("LOGIN")).user.userType;
            // console.log(data);
            if(data==="admin"){
                window.location.assign("../admin/index.html")
            }else{
                window.location.assign("./index.html");
            }
            
        })
        .catch(function (err) {
            alert("Email hoặc Password không chính xác");
        });
      }
    
};

