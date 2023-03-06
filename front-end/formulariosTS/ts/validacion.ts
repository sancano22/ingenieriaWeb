let formulario:any=document.getElementById("formulario");

formulario.addEventListener("submit",function(event:any){
    let elem:any=document.getElementsByTagName("li");
    let span1:any=document.getElementsByTagName("span");
    
    for(let j = 0; j <span1.length; j++) {
        span1[j].parentNode.removeChild(span1[j]);
    }
    
    for(let i = 0; i < formulario.length; i++) {
        let span:any=document.createElement("span");
        let campo=formulario[i];

        if(campo.type=="text" || campo.type=="email"){
             if(campo.value==""){
                 span.textContent="Datos requeridos";
                 span.classList.add("no-valido");   
                 elem[i].appendChild(span);
             }else{
                span.textContent="Datos bien";
                span.classList.add("valido");   
                elem[i].appendChild(span); 
             }
        }
    }

    //validar radio button
    let radio:any=document.getElementsByName("terminos");
    for(let i=0;i<radio.length;i++){
         if(radio[i].checked==true){
             console.log("este valor es "+radio[i].value);
         }
    }

     event.preventDefault();

})