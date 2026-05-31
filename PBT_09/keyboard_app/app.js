const images = [

"https://picsum.photos/id/10/800/400",
"https://picsum.photos/id/20/800/400",
"https://picsum.photos/id/30/800/400",
"https://picsum.photos/id/40/800/400",
"https://picsum.photos/id/50/800/400",
"https://picsum.photos/id/60/800/400",
"https://picsum.photos/id/70/800/400",
"https://picsum.photos/id/80/800/400",
"https://picsum.photos/id/90/800/400"

];

const mainImage =
document.querySelector("#mainImage");

const thumbs =
document.querySelector("#thumbs");

let current = 0;

images.forEach((img,index)=>{

const image=document.createElement("img");

image.src=img;

image.addEventListener("click",()=>{

current=index;
showImage();

});

thumbs.appendChild(image);

});

function showImage(){

mainImage.src=images[current];

}

showImage();
document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

current++;

if(current>=images.length){
current=0;
}

showImage();

}

if(e.key==="ArrowLeft"){

current--;

if(current<0){
current=images.length-1;
}

showImage();

}

if(e.key>="1" && e.key<="9"){

const index=Number(e.key)-1;

if(images[index]){

current=index;
showImage();

}

}

});
const modal =
document.querySelector("#modal");

const modalImage =
document.querySelector("#modalImage");

mainImage.addEventListener("click",()=>{

modalImage.src=images[current];

modal.classList.remove("hidden");

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.classList.add("hidden");

}

});