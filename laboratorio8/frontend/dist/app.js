$(document).ready(function() {
   /*$("#formulario").on("submit",function(){
      console.log("aqui");
   });*/
    $( "#formulario" ).validate( {
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
                recontrasenya:{
                    required: true,
                    pwrecheck: true
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
                pwcheck: "la contraseña debe contener letras minúsculas, mayúsculas y números",
                minlength: "debe contener 8 caracteres"
            }, 
            recontrasenya:{
                required: "la confirmación de la contraseña es requerida",
                pwrecheck: "la confirmación de la contraseña y la contraseña no son  iguales"
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

         },
         submitHandler: function(form) {
            
             EnviarDatos();
         }
     });
     $.validator.addMethod("pwcheck",
                        function(value, element) {
                            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
     });
     $.validator.addMethod("pwrecheck",
                        function(value, element) {
                            if ($("#recontrasenya").val()==$("#contrasenya").val() && (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test($("#contrasenya").val()))) return true;
                            else return false;
     });


});

function EnviarDatos(){
   nombre=$("#nombre").val();
   apellidos=$("#apellidos").val();
   email=$("#email").val();
   password=$("#contrasenya").val();
   region=$("#region").val();
   comuna=$("#comuna").val();
   url="http://localhost:3000";
        $.ajax({
            data: JSON.stringify({"nombre":nombre,"apellidos":apellidos,"email":email,"recontrasenya":password,"region":region,"comuna":comuna}),
            contentType: "application/json",
            type: "PUT",
            dataType: "json",
            url: url+"/registro",
        })
        .done(function( data, textStatus, jqXHR ) {
            if ( console && console.log ) {   
                console.log(JSON.stringify(data)); 
            }
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "La solicitud a fallado: " +  textStatus);
            }
        });
}