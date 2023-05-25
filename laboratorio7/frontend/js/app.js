$(document).ready(function() {


    $( ".needs-validation" ).validate( {
        errorClass: "is-invalid",
        validClass: "is-valid",
        rules: {
                email:{
                    required: true,
                    email:true
                },
                password:{
                    required: true,
                    //validar:true
                }
         },
         messages:{
            email:{
                required: "el correo es requerido",
                email: "el formato no es el correcto"
            },
            password:{
                required: "password es requerido",
                //validar:" debe incluir caracteres mayúsculas, números, minúsculas y caracteres especiales"
            }
         
         },
         submitHandler: function(form) {
            $.ajax({
                //data: {"parametro1" : "valor1", "parametro2" : "valor2"},
               data:JSON.stringify({"email":$("#email").val(),"clave":$("#password").val()}),
               type: "POST",
               dataType: "json",
               contentType: "application/json; charset=utf-8",
               url: "http://127.0.0.1:3000",
             })
             .done(function( data, textStatus, jqXHR ) {
                   if(data.resultado[0]!=null){
                       $("#formulario").css("display","none");
                       $("#mensaje").html("Bienvenido "+data.resultado[0].Usuario);
                   }
                   else 
                      $("#mensaje").html("El usuario o password no son correctos");
             })
             .fail(function(jqXHR, textStatus, errorThrown ) {
                   if ( console && console.log ) {
                       console.log( "La solicitud a fallado: " +  textStatus);
                   }
             });

        }
  
     });
     $.validator.addMethod("validar",
                        function(value, element) {
                            return /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);

                        });

     

  

  });
  