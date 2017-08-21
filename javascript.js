  var imagePad = "../images/dames/look-1/";
  var canSwap = document.images? true : false; // vraag de browser of hij plaatjes kent
    function swapImage( welkPlaatje, welkeUrl){ // functie voor het swappen van plaatjes  
      var plaatje = document.getElementById( welkPlaatje );
      if( canSwap ){ //  als de browser plaatjes kent
          plaatje.src = imagePad + welkeUrl;   // dan mag hij het plaatje swappen
      }
    }//einde functie swapImage
    
    var plaatjesArray = [     // functie voor het preloaden van plaatjes, boodschappenlijstje = lijst met in te laden afbeeldingen
      "hmprod-b-w.jpg",
      "hmprod-zonneklep.jpg",
      "hmprod-oorbellen.jpg",
      "hmprod-bril.jpg",
      "hmprod-sjaal.jpg",
      "hmprod-slippers.jpg"];
   
    var ingeladenPlaatjes = new Array();  // winkelmandje, elk plaatje wat ingeladen is komt in deze array
   
    function preloadImages(){
      if( canSwap ){
        for( var i = 0; i < plaatjesArray.length; i++ ){  // loop door de plaatjesArray heen en voeg plaatjes toe aan de ingeladenPlaatjes
          ingeladenPlaatjes[i] = new Image();  // zet in de ingeladenPlaatjes array een (virtueel) plaatje
          ingeladenPlaatjes[i].src = imagePad + plaatjesArray[i];  // en geef die de src die je uit de plaatjesArray haalt
        }//alert("ingeladen")
      }//einde if canSwap
    } // einde van de functie preloadImages

    function veranderContent( imageId ){ 

      var kleren = zomerkleding[imageId]; // verwijzing naar de juiste kleding in de array zomerkleding
      
      document.getElementById("naam").innerHTML = kleren.titel;      
      document.getElementById("kleur").innerHTML = kleren.kleur;
      document.getElementById("omschrijving").innerHTML = kleren.omschrijving;
      document.getElementById("prijs").innerHTML = kleren.prijs.toFixed(2); 
      // stel de img tag samen mbv script, waarbij src en alt waardes zijn die uit de array worden gehaald
     var cover = '<img src="' + imagePad + kleren.image + '" alt="' + kleren.titel + '" />';
      document.getElementById("zomerkleding").innerHTML = cover;


    } // einde veranderContent
    
    function vergrootPlaatje(welkPlaatje, groter){
      
      var plaatje = document.getElementById(welkPlaatje);
      
      if( canSwap ){
        if(groter){ //  als de browser plaatjes kent
          plaatje.width = plaatje.width * 1.03; 
          plaatje.height = plaatje.height * 1.03;
        } else {
          //alert(t_width);
          plaatje.width = t_width; 
          plaatje.height = t_height; 
        }
      }
    }
    
    window.onload = function(){
      preloadImages();
      veranderContent(0);
      
    }