let generate_btn=document.querySelector(".generate_btn");
generate_btn.addEventListener("click",fetchPics);
function fetchPics(){
    let catsImgDiv=document.querySelector(".catimageDiv")
     catsImgDiv.innerHTML=''

    fetch(' https://api.thecatapi.com/v1/images/search?limit=10')
.then(response=>response.json())
.then((data)=>{
    let catImgurl=data[0].url
    let catImgEl=document.createElement("img")
    catImgEl.setAttribute("src",`${catImgurl}`)
     catImgEl.classList.add("showcase")
     let catsImgDiv=document.querySelector(".catimageDiv")
     catsImgDiv.appendChild(catImgEl)

})



.catch(err=>console.log(err))

}










/*async function getapi(){
    let response=await fetch(' https://api.thecatapi.com/v1/images/search?limit=10');

    let data=await response.json();
    console.log(data[0].id);
        
   
}
getapi();*/

