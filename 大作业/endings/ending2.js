
const indexBtn = document.getElementById("indexBtn");
const indexSrc = "../index.html"
indexBtn.addEventListener("click", function(){
   window.location.href = indexSrc; 
});

window.localStorage.setItem("ending2", "true");
