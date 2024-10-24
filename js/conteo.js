 // Fecha de destino para el conteo (Ajusta la fecha aquí)
 var countdownDate = new Date("Oct 25, 2024 00:00:00").getTime();

 // Actualiza el conteo cada segundo
 var countdownFunction = setInterval(function() {
   var now = new Date().getTime();
   var timeLeft = countdownDate - now;

   // Cálculos de días, horas, minutos y segundos
   var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
   var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   // Mostrar el conteo en el div con id "countdown"
   document.getElementById("countdown").innerHTML =
     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

   // Si el tiempo ha terminado
   if (timeLeft < 0) {
     clearInterval(countdownFunction);
     document.getElementById("countdown").style.display = "none"; // Oculta el conteo
     document.getElementById("contTex").style.display = "block"; // Muestra el mensaje
   }
 }, 1000);