
function ServiceProducts() {
  //b2: sign up
  this.signUp = function (user) {
    return axios({
      method: "POST",
      url: "https://nike0403.herokuapp.com/users/create",
      data: user,
    });
  };
  //b1: log in
  this.signIn = function (userName, passWord) {
    return axios({
      method: "POST",
      url: "https://nike0403.herokuapp.com/users/login",
      data: {
        email: userName,
        password: passWord,
      },
    });
  };

  // ========= USER ==========
  this.getUser = function (token) {
    return axios.get("https://nike0403.herokuapp.com/users", {
      headers: {
        Authorization: `${token}`,
      },
    });
  };

  this.getUserProfile = function (token, id) {
    return axios.get(`https://nike0403.herokuapp.com/users/${id}`, {
      headers: {
        Authorization: `${token}`,
        id: `${id}`,
      },
    });
  };
  this.upDateUser = function (token, data, id) {
    return axios({
      method: "PUT",
      url: `https://nike0403.herokuapp.com/users/updateAdmin/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });
  };

  // ========= CART ==========

  this.cart = function (token) {
    return axios({
      method: "GET",
      url: "https://nike0403.herokuapp.com/cart",
      headers: {
        Authorization: token,
      },
    });
  };
  this.addProductCart = function (token, products) {
    return axios({
      method: "POST",
      url: "https://nike0403.herokuapp.com/cart/create",
      headers: {
        Authorization: token,
      },
      data: { products },
    });
  };
  this.deleteCart = function (token, id) {
    return axios({
      method: "DELETE",
      url: "https://nike0403.herokuapp.com/cart/delete",
      headers: {
        'Authorization': `bearer ${token}`,
        
      },
      id: {
        "_id": id
      }
    });
  };
  this.updateCartByAdmin = function (token, id, satus) {
    return axios({
      method: "PUT",
      url: `https://nike0403.herokuapp.com/cart/updateStatus/${id}`,
      headers: {
        Authorization: token,
      },
      data: {
        status: satus,
      },
    });
  };

  // ========= PRODUCT ==========
  this.getAllProduct = function () {
    return axios({
      method: "GET",
      url: "https://nike0403.herokuapp.com/product",
    });
  };

  this.addProducts = function (token, product) {
    return axios({
      method: "POST",
      url: "https://nike0403.herokuapp.com/product/create",
      headers: {
        Authorization: `${token}`,
      },
      data: product,
    });
  };

  this.getProductbyID = function (id) {
    return axios({
      method: "GET",
      url: `https://nike0403.herokuapp.com/product/${id}`,
    });
  };

  this.deleteProduct = function (token, id) {
    return axios({
      method: "DELETE",
      url: "https://nike0403.herokuapp.com/product/delete",
      headers: {
        Authorization: token,
        id: {
          _id: id,
        },
      },
    });
  };

  this.updateProduct = function (token, products, id) {
    return axios({
      method: "PUT",
      url: "https://nike0403.herokuapp.com/product/update",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: products,
    });
  };
}
