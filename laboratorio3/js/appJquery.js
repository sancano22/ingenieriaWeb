$(document).ready(function() {
    $( ".needs-validation" ).validate( {
        errorClass: "is-invalid",
        validClass: "is-valid",
        rules: {
                nombre:{
                    required: true,
                },
                apellidos:{
                    required: true,
                },
                email: {
                    required: true,
                },
                contrasenya:{
                    required: true,
                    pwcheck: true,
                    minlength: 8
                },
                comuna:{
                    required:true
                },
                region:{
                    required: true
                }       
         },
         messages:{
            nombre: {
                required: "el nombre es requerido"
            },
            apellidos:{
                required: "apellidos es requerido"
            },
            email:{
                required: "el correo es requerido",
                email: "el formato no es el correcto"
            },
            contrasenya:{
                required: "la contraseña es requerida",
                pwcheck: "la contraseña no tiene un formato válido",
                minlength: "debe contener 8 caracteres"
            }, 
            region:{
                required:"la región es requerida"
            },
            comuna:{
                required: "la comuna es requerida"
            },
            terminos:{
                required: "es requerido aceptar términos y condiciones"
            }

         }
     });
     $.validator.addMethod("pwcheck",
                        function(value, element) {
                            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
     });
});