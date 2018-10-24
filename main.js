/*function ready() {
    alert( 'DOM готов' );
   
  }
document.addEventListener("DOMContentLoaded", ready);
var elements = document.getElementsByClassName('numbers-table');
function clickfunct() {
   console.log('it work');
  }
elements.addEventListener("onclick", clickfunct);*/

document.addEventListener("DOMContentLoaded", ready);
    function ready(){
        let windList = document.querySelectorAll(".window");
        let tabList = document.querySelectorAll(".number-cell");
        let tab = document.querySelector(".numbers-table");
        tab.addEventListener('click', function(e) {
            console.log('addEventListener onClick Work!!');
            let i = [...tabList].indexOf(e.target);
            console.log('tab.indexOf = '+i);
            windList.forEach(windList => {
                this.classList.remove(".window-active");
                console.log('remove Work!!');
            });
            windList[i].classList.remove(".window");
            windList[i].classList.add(".window-active");
           

    })
}