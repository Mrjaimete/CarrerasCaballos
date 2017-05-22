 var resultado = {"caballos":[
                
                {"nombre":"Spirit","tiempoLlegada":20},
                {"nombre":"Estrella","tiempoLlegada":"30"},
                {"nombre":"Brisa","tiempoLlegada":"35"},
                {"nombre":"Hidalgo","tiempoLlegada":"55"}
                
            ]};



//var comcarrera = moment('9:00:00','HH:mm:ss');
//var fincarrera = moment('9:02:52','HH:mm:ss');
//console.log( moment.duration(comcarrera - fincarrera).humanize() + ' duracion de la carrera' );


function crearListado(){
            var arrayCaballos = resultado.caballos;
            
            var myDiv = document.getElementById("myDiv");

            var txtDiv = "<table><tr><th>Nombre</th><th>Tiempo de la Llegada</th></tr>";

            
                for (i = 0;i < arrayCaballos.length; i++){

                        var caballo = arrayCaballos[i];
                    
                        var tiempoCarrera = moment('02:00','mm:ss');
                        var randomSeconds = Math.floor((Math.random() * 10) + 1);
                        var tiempoCarrera2 = tiempoCarrera.add(randomSeconds, 's');
                        console.log(tiempoCarrera2.format('mm:ss'));

                        txtDiv += "<tr>";
                        txtDiv += "<td>" + caballo.nombre +  "</td><td>"+ tiempoCarrera2.format('mm:ss') +"</td>";
                        txtDiv += "</tr>";

                }
            

            txtDiv += "</table>";
    
            myDiv.innerHTML = txtDiv;
            }
            
            
                                