// Ontvang vacancyTitle en categoryID, van read.php als JSON object.
function read()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read2.php", function(result)
  {
    jsonToArray(result);
  });
};

// Vertaal het JSON object, ontvangen in read, naar een Javascript array.
function jsonToArray(result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  appendArrayToApp(array);
};

// Voor iedere vacancyTitle in de Javascript array: maak een nieuw div element aan.
function appendArrayToApp(array)
{
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
    if(i % 2 == 0)
    {
      $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i][0] + " ballon"+ "</div>");

      if(array[i][1] == "agrarische sector")
      {
        $("#vacancy" + i).css("background-color", "#c7d320");
        $("#vacancy" + i).prepend("<img class='icon' src='img/agrarisch.png' alt='icon'/>");
		$("#vacancy" + i).append("<div class='hiddenid'>"+ array[i][2] +"</div>");
      }
      else if(array[i][1] == "horeca")
      {
        $("#vacancy" + i).css("background-color", "#1b365d");
        $("#vacancy" + i).prepend("<img class='icon' src='img/horeca.png' alt='icon'/>");
		$("#vacancy" + i).append("<div class='hiddenid'>"+ array[i][2] +"</div>");
      }
      else if(array[i][1] == "bouw")
      {
        $("#vacancy" + i).css("background-color", "#eb660a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/bouw.png' alt='icon'/>");
		$("#vacancy" + i).append("<div class='hiddenid'>"+ array[i][2] +"</div>");
      }
      else if(array[i][1] == "transport en logistiek")
      {
        $("#vacancy" + i).css("background-color", "#e3251a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/transport en logistiek.png' alt='icon'/>");
		$("#vacancy" + i).append("<div class='hiddenid'>"+ array[i][2] +"</div>");
      }
      else if(array[i][1] == "industrie & techniek")
      {
        $("#vacancy" + i).css("background-color", "#0c8ece");
        $("#vacancy" + i).prepend("<img class='icon' src='img/techniek.png' alt='icon'/>");
		$("#vacancy" + i).append("<div class='hiddenid'>"+ array[i][2] +"</div>");
      }
      else if(array[i][1] == "detailhandel")
      {
        $("#vacancy" + i).css("background-color", "#ffda05");
        $("#vacancy" + i).prepend("<img class='icon' src='img/detailhandel.png' alt='icon'/>");
		$("#vacancy" + i).append("<div class='hiddenid'>"+ array[i][2] +"</div>");
      }

      $("#vacancy" + i).click(function()
      {
        xMousePoint = event.clientX;
        yMousePoint = event.clientY;
        //vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).text();
		vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).$(".hiddenid").text();
		//alert('read: ' + $(".hiddenid").text());
        readAll(vacancy);
      });
    }
  }
};
