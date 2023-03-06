import jquery = require("jquery");
const $: JQueryStatic = jquery;

(function () {
let forms = document.querySelectorAll('.needs-validation');
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation()
        }else{
          console.log("abrio");
          event.preventDefault();
          let myModal:any = document.getElementById('myModal');
          $("#myModal").show();
          
  
        }
       
      form.classList.add('was-validated')}, false)

      
    })
    
  })()