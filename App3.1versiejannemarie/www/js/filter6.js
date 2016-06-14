function filter6()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
    jsonToArray7(result);
  });
};

// Vertaal het JSON object, ontvangen in read, naar een Javascript array.
function jsonToArray7(result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  appendArrayToApp7(array);
};

// Voor iedere vacancyTitle in de Javascript array: maak een nieuw div element aan.
function appendArrayToApp7(array)
{
  $("#allVacancies").empty();
    showDialogScreen();
      $("#footerLine").append("<div id='footer'></div>");

  $("#footer").append("<div id='email'><input id='inputEmail' class='input' onclick='removeValue(this.id);' type='email' value='Jouw emailadres'></input></div>");
  $("#footer").append("<div id='phone'><input id='inputPhone' class='input' onclick='removeValue(this.id);' type='tel' value='Jouw telefoonnummer'></input></div>");
  $("#footer").append("<div id='reactButton'><img onclick='checkCorrectInput();' src='img/react.png' alt='react'/></div>");
    $("#footerLine").hide();
    $("#chosenVacancy").hide();
    
    $("#filterbox").show();
  for(i = 0; i < array.length; i++)
  {
    if(array[i + 1] == "6")
    {
      $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");

        $("#vacancy" + i).css("background-color", "#ffda05");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-05.png' alt='icon'/>");
      

      $("#vacancy" + i).click(function()
      {
        xMousePoint = event.clientX;
        yMousePoint = event.clientY;
        vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).text();
        readAll(vacancy);
      });
    }
  }
};
