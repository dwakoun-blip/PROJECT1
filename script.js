const slides = document.querySelectorAll('.boxy');
let currentIndex=0;
function showSlide(index){
    slides.forEach(slide=>slide.classList.remove("active"));
    slides[index].classList.add("active");

}
function nextslide(){
    currentIndex=(currentIndex+1)%slides.length;
    showSlide(currentIndex);

}
function prevslide(){
    currentIndex=(currentIndex-1 + slides.length)%slides.length;
    showSlide(currentIndex);

}
// login

const user = localStorage.getItem("username");
if (user) {
       document.getElementById("displayUser").innerText="welcome, " + user + "i";
       const loginbtn = document.getElementById("loginbtn");
 if (loginbtn){
    loginbtn.style.display = "none";
 }
    const logout = document.getElementById("logout");
if (logout)logout.style.display="inline-block";

logout.addEventListener("click",()=>{
localStorage.removeItem("username");
location.reload();

});
 }

   
  
    
    


