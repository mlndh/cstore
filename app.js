
    function myFunction() {
        var input, filter, i, txtValue, finns;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        
        dinaDivvar = document.getElementsByClassName("search");
        
        for (i = 0; i < dinaDivvar.length; i++) {
        finns = false;
     
      
        txtValue = dinaDivvar[i].textContent || dinaDivvar[i].innerText;
            
           if (txtValue.toUpperCase().indexOf(filter) > -1) { 
            finns = true;
            }
        
            if (finns) {
                dinaDivvar[i].classList.remove("ej");
            } else {
                dinaDivvar[i].classList.add("ej");
            }
        }
    }

var x = 0; 
 function addItem() {
     document.querySelector("#basket").innerHTML = x+=1;
 }

function showProduct(prod) {
    prod.classList.toggle("visible");
}