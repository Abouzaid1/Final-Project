let dataArr2 = []
let dataObj2 = 0
let cartNumber = document.getElementById("cartNumber")
if (localStorage.getItem("data") != null) {
  for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {
    if (JSON.parse(localStorage.getItem("data"))[i].username == localStorage.getItem("user")) {
        dataObj2 = JSON.parse(localStorage.getItem("data"))[i]
        dataArr2.push(dataObj2)
        console.log(dataArr2);
        cartNumber.innerHTML = dataArr2.length
    }
  }
}
