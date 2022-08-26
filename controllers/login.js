var qlsp = new ServiceProducts()

const getEle = (id) => document.getElementById(id)
//b2: sign up
const getSignUp = (event) => {
    event.preventDefault()
    let name = getEle('txtName').value
    let email = getEle('txtEmail').value
    let password = getEle('txtPass').value
    let age = parseInt(getEle('txtAge').value) 
    let userType = "user"
    var user = new Users(name, email, password, age, userType)
    qlsp.signUp(user)
    .then(function (res) {
        localStorage.setItem("LOGIN", JSON.stringify(res.data)); 
        window.location.assign('../view/index.html')
        
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
    let listCart = []
    qlsp.signIn(userName,passWord)
        .then(function (res) {
            localStorage.setItem("LOGIN", JSON.stringify(res.data));
            localStorage.setItem("LISTCART", JSON.stringify(listCart));
            let data=JSON.parse(localStorage.getItem("LOGIN"))
            console.log(data);
            if(data==="admin"){
                window.location.assign("../admin")
            }else{
                window.location.assign("../view/index.html");
            }
            
        })
        .catch(function (err) {
            alert("Email hoặc Password không chính xác");
        });
};

