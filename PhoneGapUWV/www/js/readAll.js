// Ontvang alle database gegevens van readAll.php als JSON object.
function readAll(vacancy)
{
  $.getJSON("http://uwvproject.serverict.nl/App/readAll.php", function(result)
  {
    allJsonToArray(vacancy, result);
  });
};

// Vertaal het JSON object, ontvangen in readAll, naar een Javascript array.
function allJsonToArray(vacancy, result)
{
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  getDetailsFromArray(vacancy, array);
}

// Filter de array op gegevens van de specifieke vacature.
function getDetailsFromArray(vacancy, array)
{
  var description;
  var requirements;
  var hours;
  var categoryID;

  for(i = 0; i < array.length; i++)
  {
    if(vacancy == array[i])
    {
      description = array[i + 1];
      requirements = array[i + 2];
      hours = array[i + 3];
      categoryID = array[i + 4];
    }
  }
  appendToDetailsPage(vacancy, description, requirements, hours, categoryID);
};

// Voeg de specifieke gegevens toe aan het div element "chosenVacancy".
function appendToDetailsPage(vacancy, description, requirements, hours, categoryID)
{
  var chosenBranch;

  $("#chosenVacancy").empty();
  $("#chosenVacancy").append("<div id='vacancy' class='vacancy text'>"+ vacancy + "</div>");

  if(categoryID == "1")
  {
    $("#vacancy").css("background-color", "#c7d320");
    $("#vacancy").prepend("<img class='icon' src='img/Icons-06.png' alt='icon'/>");
    chosenBranch = "Tuinbouw";
  }
  else if(categoryID == "2")
  {
    $("#vacancy").css("background-color", "#1b365d");
    $("#vacancy").prepend("<img class='icon' src='img/Icons-01.png' alt='icon'/>");
    chosenBranch = "Horeca";
  }
  else if(categoryID == "3")
  {
    $("#vacancy").css("background-color", "#eb660a");
    $("#vacancy").prepend("<img class='icon' src='img/Icons-02.png' alt='icon'/>");
    chosenBranch = "Productie";
  }
  else if(categoryID == "4")
  {
    $("#vacancy").css("background-color", "#e3251a");
    $("#vacancy").prepend("<img class='icon' src='img/Icons-03.png' alt='icon'/>");
    chosenBranch = "Logistiek";
  }
  else if(categoryID == "5")
  {
    $("#vacancy").css("background-color", "#0c8ece");
    $("#vacancy").prepend("<img class='icon' src='img/Icons-04.png' alt='icon'/>");
    chosenBranch = "Techniek";
  }
  else if(categoryID == "6")
  {
    $("#vacancy").css("background-color", "#ffda05");
    $("#vacancy").prepend("<img class='icon' src='img/Icons-05.png' alt='icon'/>");
    chosenBranch = "Overige branches";
  }

  $("#chosenVacancy").append("<div class='text'><h4><u>Branch:</u></h4><p id='infoText'>" + chosenBranch + "</p></div>");
  $("#chosenVacancy").append("<div class='text'><h4><u>Aantal Uren Per Week:</u></h4><p id='infoText'>" + hours + "</p id='infoText'></div>");
  $("#chosenVacancy").append("<div class='text'><h4><u>Omschrijving Werkzaamheden:</u></h4><p id='infoText'>" + description + "</p></div>");
  $("#chosenVacancy").append("<div class='text'><h4><u>Eisen:</u></h4><p id='infoText'>" + requirements + "</p></div>");

  $("#chosenVacancy").append("<div id='footer'></div>");

  $("#footer").append("<div id='email'><input id='inputEmail' class='input' onclick='removeValue(this.id);' type='email' value='Jouw emailadres'></input></div>");
  $("#footer").append("<div id='phone'><input id='inputPhone' class='input' onclick='removeValue(this.id);' type='tel' value='Jouw telefoonnummer'></input></div>");
  $("#footer").append("<div id='reactButton'><img onclick='checkCorrectInput();' src='img/react.png' alt='react'/></div>");

  switchToChosenVacancy();
};
