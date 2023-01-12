function btn1() 
{
    for (var i = 0; i < btn1.length; i++) {
        btn1[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
    }
  }

function btn2(){}
function btn3(){} 
function btn4(){} 
function btn5(){}






