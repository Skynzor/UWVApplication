var branchfilter;

function filter1()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
    //document.getElementById("hiddenVal").value = branchfilter;
    //document.getElementById("myForm").submit();
      branchfilter = "Zorg";
      jsonToArray(result);
  });
};

function filter2()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      branchfilter = "ICT";
    jsonToArray(result);
  });
};

function filter3()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      branchfilter = "Horeca";
    jsonToArray(result);
  });
};

function filter4()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      branchfilter = "Agrarische";
    jsonToArray(result);
  });
};

function filter5()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
      branchfilter = "Ambacht";
    jsonToArray(result);
  });
};

function filter6()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Beveiliging";
    jsonToArray(result);
  });
};
function filter7()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Techniek";
    jsonToArray(result);
  });
};
function filter8()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Bouw";
    jsonToArray(result);
  });
};
function filter9()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Transport";
    jsonToArray(result);
  });
};
function filter10()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Contactcenters";
    jsonToArray(result);
  });
};
function filter11()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Detailhandel";
    jsonToArray(result);
  });
};
function filter12()
{
  $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
     branchfilter = "Overige / Uniforme beroepen";
    jsonToArray(result);
  });
};
function filterFull()
{
    $.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
  {
    jsonToFullArray(result);
  });
};

function jsonToFullArray(result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  appendAllVacancies(array);
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
  appendArrayToApp4(array);
};

// Voor iedere vacancyTitle in de Javascript array: maak een nieuw div element aan.
function appendArrayToApp4(array)
{
  $("#allVacancies").empty();
  $("#footerLine").empty();
    
    showDialogScreen();
      $("#footerLine").append("<div id='footer'></div>");

  $("#footer").append("<div id='email'><input id='inputEmail' class='input' onclick='removeValue(this.id);' type='email' value='Jouw emailadres'></input></div>");
  $("#footer").append("<div id='phone'><input id='inputPhone' class='input' onclick='removeValue(this.id);' type='tel' value='Jouw telefoonnummer'></input></div>");
  $("#footer").append("<div id='reactButton'><img onclick='checkCorrectInput();' src='img/react.png' alt='react'/></div>");
    $("#footerLine").hide();
    $("#chosenVacancy").hide();
    
    $("#filterbox").show();
    $("#internal-popup").hide();

  for(i = 0; i < array.length; i++)
  {
      if(branchfilter === "Zorg" && array[i + 1] === "Zorg")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#ca5695");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }
       else if(branchfilter === "Zorg" && array[i + 1] === "zorg")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#ca5695");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }
      else if(branchfilter === "ICT" && array[i + 1] === "ICT")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#20d3a7");
        $("#vacancy" + i).prepend("<img class='icon' src='img/ict.png' alt='icon'/>");
      }
      else if(branchfilter === "Horeca" && array[i + 1] === "Horeca")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
         $("#vacancy" + i).css("background-color", "#1b365d");
        $("#vacancy" + i).prepend("<img class='icon' src='img/horeca.png' alt='icon'/>");
      }
      else if(branchfilter === "Agrarische" && array[i + 1] === "Agrarische Sector")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#c7d320");
        $("#vacancy" + i).prepend("<img class='icon' src='img/agrarisch.png' alt='icon' />");
      }
      else if(branchfilter === "Ambacht" && array[i + 1] === "Ambacht")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#1b5d24");
        $("#vacancy" + i).prepend("<img class='icon' src='img/ambacht.png' alt='icon'/>");
      }
      else if(branchfilter === "Beveiliging" && array[i + 1] === "Beveiliging")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#3ab0be");
        $("#vacancy" + i).prepend("<img class='icon' src='img/beveiliging.png' alt='icon'/>");
      }
      else if(branchfilter === "Techniek" && array[i + 1] === "Industrie & Techniek")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#0c8ece");
        $("#vacancy" + i).prepend("<img class='icon' src='img/techniek.png' alt='icon'/>");
      }
      else if(branchfilter === "Bouw" && array[i + 1] === "Bouw")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#eb660a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/bouw.png' alt='icon'/>");
      }
      else if(branchfilter === "Transport" && array[i + 1] === "Transport en logistiek")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#e3251a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/transport en logistiek.png' alt='icon'/>");
      }
      else if(branchfilter === "Detailhandel" && array[i + 1] === "Detailhandel")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#ffda05");
        $("#vacancy" + i).prepend("<img class='icon' src='img/detailhandel.png' alt='icon'/>");
      }
      else if(branchfilter === "Contactcenters" && array[i + 1] === "Contactcenters")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#4c2577");
        $("#vacancy" + i).prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
      }
		 else if(branchfilter === "Overige / Uniforme beroepen" && array[i + 1] === "Overige / Uniforme beroepen")
      {
          $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");
        $("#vacancy" + i).css("background-color", "#000000");
        $("#vacancy" + i).prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }
      $("#vacancy" + i).click(function()
      {
        xMousePoint = event.clientX;
        yMousePoint = event.clientY;
        vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).text();
        readAll(vacancy);
      });
  }
};

function appendAllVacancies(array)
{
   $("#allVacancies").empty();
  $("#footerLine").empty();
    
    showDialogScreen();
      $("#footerLine").append("<div id='footer'></div>");

  $("#footer").append("<div id='email'><input id='inputEmail' class='input' onclick='removeValue(this.id);' type='email' value='Jouw emailadres'></input></div>");
  $("#footer").append("<div id='phone'><input id='inputPhone' class='input' onclick='removeValue(this.id);' type='tel' value='Jouw telefoonnummer'></input></div>");
  $("#footer").append("<div id='reactButton'><img onclick='checkCorrectInput();' src='img/react.png' alt='react'/></div>");
    $("#footerLine").hide();
    $("#chosenVacancy").hide();
    
    $("#filterbox").show();
    $("#internal-popup").hide();
  for(i = 0; i < array.length; i++)
  {
    if(i % 2 == 0)
    {
      $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");

      if(array[i + 1] == "Zorg")
      {
        $("#vacancy" + i).css("background-color", "#ca5695");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }
      else if(array[i + 1] == "zorg")
      {
        $("#vacancy" + i).css("background-color", "#ca5695");
        $("#vacancy" + i).prepend("<img class='icon' src='img/zorg.png' alt='icon'/>");
      }
      else if(array[i + 1] == "ICT")
      {
        $("#vacancy" + i).css("background-color", "#20d3a7");
        $("#vacancy" + i).prepend("<img class='icon' src='img/ict.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Horeca")
      {
        $("#vacancy" + i).css("background-color", "#1b365d");
        $("#vacancy" + i).prepend("<img class='icon' src='img/horeca.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Agrarische Sector")
      {
        $("#vacancy" + i).css("background-color", "#c7d320");
        $("#vacancy" + i).prepend("<img class='icon' src='img/agrarisch.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Ambacht")
      {
        $("#vacancy" + i).css("background-color", "#1b5d24");
        $("#vacancy" + i).prepend("<img class='icon' src='img/ambacht.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Beveiliging")
      {
        $("#vacancy" + i).css("background-color", "#3ab0be");
        $("#vacancy" + i).prepend("<img class='icon' src='img/beveiliging.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Industrie & Techniek")
      {
        $("#vacancy" + i).css("background-color", "#0c8ece");
        $("#vacancy" + i).prepend("<img class='icon' src='img/techniek.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Bouw")
      {
        $("#vacancy" + i).css("background-color", "#eb660a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/bouw.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Transport en logistiek")
      {
        $("#vacancy" + i).css("background-color", "#e3251a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/transport en logistiek.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Contactcenters")
      {
        $("#vacancy" + i).css("background-color", "#4c2577");
        $("#vacancy" + i).prepend("<img class='icon' src='img/contactcenters.png' alt='icon'/>");
      }
      else if(array[i + 1] == "Detailhandel")
      {
        $("#vacancy" + i).css("background-color", "#ffda05");
        $("#vacancy" + i).prepend("<img class='icon' src='img/detailhandel.png' alt='icon'/>");
      }
	    else if(array[i + 1] == "Overige / Uniforme beroepen")
      {
        $("#vacancy" + i).css("background-color", "#000000");
        $("#vacancy" + i).prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }
	  
	  //Overige / Uniforme beroepen
       else if(array[i + 1] !== "Zorg" ||  array[i + 1] !== "zorg" || array[i + 1] !== "ICT" || array[i + 1] !== "Horeca" || array[i + 1] !== "Agrarische Sector" || array[i + 1] !== "Ambacht" || array[i + 1] !== "Beveiliging" || array[i + 1] !== "Industrie & Techniek" || array[i + 1] !== "Bouw" || array[i + 1] !== "Transport en logistiek" || array[i + 1] !== "Contactcenters" || array[i + 1] !== "Detailhandel" || array[i + 1] !== "Overige / Uniforme beroepen")
      {
        $("#vacancy" + i).css("background-color", "#000000");
        $("#vacancy" + i).prepend("<img class='icon' src='img/overig.png' alt='icon'/>");
      }

      $("#vacancy" + i).click(function()
      {
        xMousePoint = event.clientX;
        yMousePoint = event.clientY;
        vacancy = $(document.elementFromPoint(xMousePoint, yMousePoint)).text();
        readAll(vacancy);
      });
    }
  }
}