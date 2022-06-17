var CartData = [
  {
    desc: "Apple - 10.2-Inch iPad (Latest Model) with Wi-Fi - 64GB - Space Gray",
    id: 2,
    price: 329.99,
    img : "https://pisces.bbystatic.com/image2//BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=200;maxWidth=200"

  }
  
]

CartData.forEach(function(el){
     var tr = document.createElement("tr");

     var td1 = document.createElement("td");
     td1.setAttribute("class","td1Data");

     var div1 = document.createElement("div");
     var image = document.createElement("img");
     image.setAttribute("class","cartimage")
     image.setAttribute("src",el.img);
     div1.append(image)
     
     var div2 = document.createElement("div");
     
     var ul1 = document.createElement("ul");
     var li1 = document.createElement("li");
     li1.innerText = el.desc;
     var li2 = document.createElement("li");
     li2.innerText = "Read Detail";
     
     ul1.append(li1,li2);
     div2.append(ul1);
     td1.append(div1,div2);

     var td2 = document.createElement("td");
     td2.setAttribute("class",td2);
     td2.textContent = "$ "+el.price;//5
     td2.style.color = "gray";

     var td3 = document.createElement("td");
     var div3 = document.createElement("div");
     div3.setAttribute("class","wrapper");

     var minus = document.createElement("span");
     var minusImg = document.createElement("img"); 
     minusImg.setAttribute("class","minusImage")
     minusImg.setAttribute("src","https://assets.sg.content-cdn.io/css/Zone03/storeui/martjack/images/qtyminus-btn.png"); 
     minus.append(minusImg); 
     minus.setAttribute("class","minus");
    //  minus.innerText="-";

     var num = document.createElement("span");
     num.setAttribute("class","num");
     num.innerText= 1; //5

     var add = document.createElement("span");
     var addImg = document.createElement("img"); 
     addImg.setAttribute("class","minusImage")
     addImg.setAttribute("src","https://assets.sg.content-cdn.io/css/Zone03/storeui/martjack/images/qtyplus-btn.png"); 
     add.append(addImg);  
     add.setAttribute("class","add");
    //  add.innerText="+";

     let a = 1;
     CartData.forEach(function(el){
      el["cartItemQuantity"] = a;
      localStorage.setItem("CartData",JSON.stringify(CartData));
    
    })
     add.addEventListener("click",function(){
         a++;
         num.innerText = a;
         td4.innerText = a*el.price;
        
         updateSubTotal(); // Initial call

         function updateSubTotal() {
           var table = document.getElementById("table-cart");
           let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
             return total + parseFloat(row.cells[3].innerHTML);
           }, 0);
           document.getElementById("cartTotalPrice").innerHTML = "$ " + subTotal.toFixed(2);

           document.querySelector("#totalCartAmount").innerText = "$ "+subTotal.toFixed(2);

           document.querySelector("#storepickup").innerText = "$ "+subTotal*(FREE).toFixed(2);

           document.querySelector("#estimatedSaleTax").innerText = "$ "+subTotal*(0.8).toFixed(2);
         } 
         var cartTotalAmount = document.querySelector("#totalCartAmount").innerText
        //  console.log(cartTotalAmount);
         
         CartData.forEach(function(el){
           el["cartTotalamountAdd"] = cartTotalAmount;
           el["cartItemQuantity"] = a;
           localStorage.setItem("CartData",JSON.stringify(CartData));
         
         })
         
     })
     minus.addEventListener("click",function(){
         a--;
         if(a>0){
          num.innerText = a;
          td4.innerText = a*el.price;
         }

         updateSubTotal(); // Initial call

         function updateSubTotal() {
           var table = document.getElementById("table-cart");
           let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
             return total + parseFloat(row.cells[3].innerHTML);
           }, 0);
           document.getElementById("cartTotalPrice").innerHTML = "$ " + subTotal.toFixed(2);

           document.querySelector("#totalCartAmount").innerText = "$ "+subTotal.toFixed(2);

           document.querySelector("#storepickup").innerText = "$ "+subTotal*(FREE).toFixed(2);

           document.querySelector("#estimatedSaleTax").innerText = "$ "+subTotal*(0.8).toFixed(2);
         }

         var cartTotalAmount = document.querySelector("#totalCartAmount").innerText
        // console.log(cartTotalAmount);

        CartData.forEach(function(el){
        el["cartTotalamountAdd"] = cartTotalAmount;
        localStorage.setItem("CartData",JSON.stringify(CartData));

})
     })
     
     div3.append(minus,num,add);
     td3.append(div3);
    

     var td4 = document.createElement("td");
     td4.innerText = el.price;
     td4.style.color="gray"

     var td5 = document.createElement("td");
     var removeImage = document.createElement("img");
     removeImage.style.cursor="pointer";
     removeImage.setAttribute("src","https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/img_griddelete.gif")
     removeImage.addEventListener("click",function(){
       deleteTrData(el);
       tr.innerHTML = "";
     })
     td5.append(removeImage);

     tr.append(td1,td2,td3,td4,td5);
     document.querySelector("#table-data").append(tr);

     

 })

 function deleteTrData(el){
  CartData = CartData.filter(function(element){
   return element.id != el.id;
  })
  localStorage.setItem("CartData",JSON.stringify(CartData));
}



var table = document.getElementById("table-cart"),
sumVal = 0;
for (var i = 1; i < table.rows.length; i++) {
  sumVal = sumVal + parseFloat(table.rows[i].cells[3].innerHTML);
  
}  

var cartTotalPrice = document.querySelector("#cartTotalPrice");
cartTotalPrice.innerText = "$ "+sumVal.toFixed(2);

document.querySelector("#totalCartAmount").innerText = "$ "+sumVal.toFixed(2);

document.querySelector("#storepickup").innerText = "$ "+sumVal*(FREE).toFixed(2);

document.querySelector("#estimatedSaleTax").innerText = "$ "+sumVal*(0.8).toFixed(2);

//   var cartVoucherInput = document.querySelector("cartVoucherInput").value;
// console.log(cartVoucherInput);

var cartApply = document.querySelector("#cart1ReddemApply");
cartApply.style.cursor="pointer";
cartApply.addEventListener("click",function(){
var cartVoucherInput = document.querySelector("#cartVoucherInput").value;
if(cartVoucherInput == "Nitesh"){
  document.querySelector("#totalCartAmount").innerText = "$ "+(sumVal-600).toFixed(2);
}
else{
  alert("Yehhh Buddy Coupon Code is Wrong")
}
})

var cartTotalAmount = document.querySelector("#totalCartAmount").innerText
// console.log(cartTotalAmount);

CartData.forEach(function(el){
el["cartTotalamountAdd"] = cartTotalAmount;
localStorage.setItem("CartData",JSON.stringify(CartData));

})
