document.addEventListener("DOMContentLoaded", ready);

function ready(){
    let windList = [...document.querySelectorAll(".window")];
    let tabList = [...document.querySelectorAll(".number-cell")];

    let tab = document.querySelector(".numbers-table");

    tab.addEventListener('click', function(e) {
        
        let i = tabList.indexOf(e.target);
       
        for (let j = 0; j < [...windList].length; j++) {               
            windList[j].classList.remove("window-active");
            windList[j].classList.add("window-hide");                
        }          

        windList[i].classList.remove("window-hide");
        windList[i].classList.add("window-active");           

    })
}