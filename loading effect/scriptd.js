let btn =document.getElementById("downloadBtn");
let count = 0;
let load;
btn.addEventListener("click",()=>{
    load = setInterval(()=>{
        count++;
        btn.innerHTML = `Downloading....⏳ ${count}%`;
        if(count === 100){
            clearInterval(load);
            btn.innerHTML =`Downloaded ✔️ ${count}%`
            btn.classList.toggle("active");
            btn.style.cursor = "not-allowed";
        }
    },40);
});