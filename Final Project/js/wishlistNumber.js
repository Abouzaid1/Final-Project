let dataObjWish = 0
let dataArrWish = []
let wishlistNumber = document.getElementById("wishlistNumber")
if (localStorage.getItem("wishlist") != null) {
  
    for (let i = 0; i < JSON.parse(localStorage.getItem("wishlist")).length; i++) {
      
      if ( JSON.parse(localStorage.getItem("wishlist"))[i].username == localStorage.getItem("user")) {
        dataObjWish =JSON.parse(localStorage.getItem("wishlist"))[i]
        dataArrWish.push(dataObjWish)
        wishlistNumber.innerHTML = dataArrWish.length
      }
      
    }
  }