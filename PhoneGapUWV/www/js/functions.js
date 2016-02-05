// Wanneer een inputveld wordt geselecteerd: verwijder de inhoud.
function removeValue(id)
{
  $("#" + id).val("");
};

// Controleer of er een correct emailadres of telefoonnummer is ingevoerd.
function checkCorrectInput()
{
  var email = $("#inputEmail").val();
  var phone = $("#inputPhone").val();

  if((email.indexOf("@") != - 1) && phone.length == 10)
  {
    showPopUpScreen("Correct");
  }
  else
  {
    showPopUpScreen("Wrong");
  }
};

// Toon het popupscherm met een positieve of negatieve boodschap. En verstuur een email.
function showPopUpScreen(input)
{
  $("#header").hide();
  $("#chosenVacancy").hide();
  $("body").append("<div id='popUpScreen'></div>");

  if(input == "Correct")
  {
    $("#popUpScreen").append("<div id='popUpText' class='text'>Bedankt voor je reactie. Je hoort snel van ons!</div>");
    sendGmail();
  }
  else if(input == "Wrong")
  {
    $("#popUpScreen").append("<div id='popUpText' class='text'>Oeps! Je email of nummer is verkeerd.</div>");
  }
  $("#popUpScreen").append("<div id='popUpButton'><img onclick='hidePopUpScreen();' src='img/ok.png' alt='ok'/></div>");
};

// Verberg het popupscherm.
function hidePopUpScreen()
{
  $("#header").show();
  $("#popUpScreen").remove();

  switchToAllVacancies();
};

// Toon het overzicht met alle beschikbare vacatures.
function switchToAllVacancies()
{
  $("#headerText").text("Beschikbare Vacatures:");
  $("#backbutton").hide();
  $("#chosenVacancy").hide();
  $("#allVacancies").show();
};

// Toon de gegevens van de geselecteerde vacature.
function switchToChosenVacancy()
{
  $("#headerText").text("Gekozen Vacature:");
  $("#allVacancies").hide();
  $("#backbutton").show();
  $("#chosenVacancy").show();
};
