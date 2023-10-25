$(document).ready(function(){

      cargarPacientes();
      grafico1();
      grafico2();
})

$("#pacientes").on('change',function(){
   
        grafico1_1($(this).find(":selected").val());
        grafico1_2($(this).find(":selected").val());

        $("h1").html(`Paciente:${$(this).find(":selected").text()}`);
        
});   


function cargarPacientes(){
    url="http://127.0.0.1:5000/pacientes";
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
        $("pacientes").append("<option></option>");
        data["results"].forEach(element=>{
            console.log(element[1]);
            $("#pacientes").append(`<option value="${element[0]}">${element[1]}</option>`);
        })
     })
}
   

function grafico1(){
    var datos=[];
    i=1;

    url="http://127.0.0.1:5000/galvanico";
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'GSR');
        
             
        data.addRows(
           datos
        );
    
        console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Galvanica',
            subtitle: 'Monitoreo'
          },
          width: 900,
          height: 500
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico1'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}

function grafico2(){
    var datos=[];
    i=1;

    url="http://127.0.0.1:5000/pulsimetro";
    $.ajax({
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'HRV');
        
             
        data.addRows(
           datos
        );
    
        console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Pulsimétro',
            subtitle: 'Monitoreo'
          },
          width: 900,
          height: 500,
          series: {
            0: { color: '#e2431e' },
          }
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico2'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}


function grafico1_1(idPaciente){
    var datos=[];
    i=1;

    url="http://127.0.0.1:5000/galvanico";
    $.ajax({
        contentType: "application/json",
        type: "POST",
        data:JSON.stringify({"idpaciente":idPaciente}),
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'GSR');
        
             
        data.addRows(
           datos
        );
    
        console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Galvanica',
            subtitle: 'Monitoreo'
          },
          width: 900,
          height: 500
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico1'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}

function grafico1_2(idPaciente){
    var datos=[];
    i=1;

    url="http://127.0.0.1:5000/pulsimetro";
    $.ajax({
        contentType: "application/json",
        type: "POST",
        data:JSON.stringify({"idpaciente":idPaciente}),
        dataType: "json",
        url: url,
    })
    .done(function( data, textStatus, jqXHR ) {
       data["results"].forEach(element => {
           datos.push([i,element[3]]);
           i++;
       });

       //grafico 1
       google.charts.load('current', {'packages':['line']});
       google.charts.setOnLoadCallback(drawChart);
       function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Muestra');
        data.addColumn('number', 'HRV');
        
             
        data.addRows(
           datos
        );
    
        console.log(datos);
        var options = {
          chart: {
            title: 'Respuesta fisiológica Pulsimétro',
            subtitle: 'Monitoreo',
          },
          width: 900,
          height: 500,
          series: {
            0: { color: '#e2431e' },
          }
        };
    
        var chart = new google.charts.Line(document.getElementById('grafico2'));
    
        chart.draw(data, google.charts.Line.convertOptions(options));
      }
} 
    ).fail(function( jqXHR, textStatus, errorThrown ) {
    if ( console && console.log ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    }
});

}


