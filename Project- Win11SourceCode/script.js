let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click", ()=>{
    console.log("click");
    if(startmenu.style.bottom = "50px"){
    }
});

taskbar.addEventListener("mouseover",()=>{
    console.log("mouseovericon");
    if(startmenu.style.bottom = "-646px"){
    }
})

