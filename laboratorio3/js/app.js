(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    let password = document.getElementById("contrasenya");
    let email=document.getElementById("email");
    var patternEmail =/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
   
    const campos= document.getElementById("campos");

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      
      form.addEventListener('submit', event => {

        if (!form.checkValidity()) {
          if(!checkPattern() && password.value!==""){
            campos.children[3].getElementsByClassName("invalid-feedback")[0].innerHTML = "Contraseña no valida";
          }

          if(email.value=="") campos.children[2].getElementsByClassName("invalid-feedback")[0].innerHTML = "Campo requerido";
          console.log(patternEmail.test(email.value));
          
          if(!patternEmail.test(email.value) && email.value!=""){
            campos.children[2].getElementsByClassName("invalid-feedback")[0].innerHTML = "no un formato válido";
          }
          

          event.preventDefault()
          event.stopPropagation()
        }

  
        form.classList.add('was-validated')
      }, false)
    })
  })()


function checkPattern(){
        var elem = document.getElementById("contrasenya");

        var pattern = elem.getAttribute("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$");
        var re = new RegExp(pattern);
        if (re.test(elem.value)) {
            return true;
        } else {
            return false;
        }
    }