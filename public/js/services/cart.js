(function () {

  angular
    .module('ecommerceApp')
    .service('cart', cart);

  cart.$inject = ['$http'];
  function cart ($http) {

    var id ='';

  	var makeCart = function (userId) {
      console.log("userId ", userId)
      var user = {user: userId}
      var obj = JSON.stringify(user);
      return $http({
        method: 'POST',
        url: '/api/cart',
        data: obj
      }).then(function(response) {
        cart.id = response.data._id;
        return response.data;
      }, function(error) {
        console.log(error)
        return 'message: "Unable to push data"';
      }); 
    };

    var getCart = function(userId){
      var concatURL = '/api/cart/' + userId;
      return $http({
        method: 'GET',
        url: concatURL
      }).then(function(response) {
          console.log("get", response.data);
          return response.data;
      }, function(error) {
        console.log('message: "Unable to pull data"')
        return false;
      }); 
    };


  var addItem = function (cartID, productId) {
      var concatURL = '/api/cart/' + cartId;
      var prod = {productId: productId}
      var obj = JSON.stringify(prod);
      return $http({
        method: 'PUT',
        url: concatURL,
        data: obj
      }).then(function(response) {
          console.log(response);
          return response;
      }, function(error) {
        
        return 'message: "Unable to push data"';
      }); 
    };

  var removeItem = function (cartID, productId) {
      var concatURL = '/api/cart/' + cartId + '/' + productId ;
      $http({
        method: 'PUT',
        url: concatURL,
      }).then(function(response) {
          return response;
      }, function(error) {
        
        return 'message: "Unable to push data"';
      }); 
    };

  return {
      makeCart: makeCart,
      getCart: getCart,
      addItem: addItem,
      removeItem: removeItem,
      id: id
    };
  }

})();