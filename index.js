
var photos=["w1.jpg","w2.jpg","w3.jpg","w4.jpg"];
var imgTag=document.getElementById("watch-1-img");
var count=0;
function next(){
 count++;
 if(count>=photos.length){
     count=0;
     imgTag.src=photos[count];
  }else{
    imgTag.src=photos[count];
  }
}
function prev(){
 count--;
 if(count<0){
     count=photos.length-1;
     imgTag.src=photos[count];
 }
 else{
     imgTag.src=photos[count];
 }

}

// Java script codes for the product
 var x=document.querySelector("#pr-img");
function blue(){
 x.src=("shop/1.jpg");
}
function white(){
  x.src=("shop/24.jpg");
}
function red(){
  x.src=("shop/25.jpg");
}
function ash(){
  x.src=("shop/26.jpg");
}