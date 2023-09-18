let cartTBody = document.getElementById("cartTBody")
let goToProduct = 0
let remove = 0
let dataObj = 0
let dataArr = []
if (localStorage.getItem("wishlist") != null) {
  
    for (let i = 0; i < JSON.parse(localStorage.getItem("wishlist")).length; i++) {
      
      if ( JSON.parse(localStorage.getItem("wishlist"))[i].username == localStorage.getItem("user")) {
        dataObj =JSON.parse(localStorage.getItem("wishlist"))[i]
        dataArr.push(dataObj)
        console.log(dataArr);
        cartTBody.innerHTML =``
        renderItems(dataArr)
      }
      
    }
  }else{
     cartTBody.innerHTML = `<tr>
      <th scope="row " > 
      <img src="No Img"
      alt="" width="100px" class="rounded">
      </th>
      <td class="py-5">No Name</td>
      <td class="py-5 fw-bolder">00.00 L.E</td>
      <td class="py-5 fw-bolder"><button class="py-1 px-3  border-1 border-white rounded bg-transparent"> Add to cart </button></td>
      </tr>`
      
    
  }
  
  
  
  function renderItems(dataArr) {
    for (let i = 0; i < dataArr.length; i++) {
      
      cartTBody.innerHTML += `<tr id="yourTableRowId">
      <th scope="row " > 
      <img src="${dataArr[i].product_img}"
      alt="" width="100px" class="rounded">
      </th>
      <td class="py-5">${dataArr[i].product_name}</td>
      <td class="py-5 fw-bolder">${dataArr[i].product_price} L.E</td>
      <td class="py-5 fw-bolder"><a href="product.html?prodId=${dataArr[i].id}&"  ><button class="py-2 px-5 border-1 rounded bg-transparent"> Go to product </button></a></td>
      <td class="py-5 fw-bolder"><button id="remove"  class="py-2 px-5 border-1 rounded bg-transparent"> Remove from wishlist </button></td>
      </tr>`
      

      // goToProduct = document.getElementById("goToProduct")

      // goToProduct.addEventListener("click",()=>{
      //   goToProduct.href = ""
      // })
      
    }
  }
  const trElement = document.querySelectorAll('#yourTableRowId');
  remove = document.querySelectorAll("#remove")
 for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click",()=>{

    trElement[i].parentNode.removeChild(trElement[i]);  
  })
  
 }
  document.title = `Shopia | Hope you can buy it`

  if(localStorage.getItem("role")==null || localStorage.getItem("role") =="null"){
    cartTBody.innerHTML = ""
  }