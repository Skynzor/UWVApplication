// Wanneer een inputveld wordt geselecteerd: verwijder de inhoud.
function removeValue(id)
{
    $("#" + id).val("");
}
;

// Controleer of er een correct emailadres of telefoonnummer is ingevoerd.
function checkCorrectInput()
{
    var email = $("#inputEmail").val();
    var phone = $("#inputPhone").val();

    if ((email.indexOf("@") != -1) | phone.length == 10)
    {
        showPopUpScreen("Correct");
    }
    else
    {
        showPopUpScreen("Wrong");
    }
}
;

function showDialogScreen()
{
    $("#internal-popup").show();
    switchToAllVacancies();
}
;

function hideDialogScreen()
{
    $("#internal-popup").hide();
    $("#header").show();
 
    switchToAllVacancies();
}
;

// Toon het popupscherm met een positieve of negatieve boodschap. En verstuur een email.
function showPopUpScreen(input)
{
    $("#header").hide();
    $("#chosenVacancy").hide();
    $("body").append("<div id='popUpScreen'></div>");

    if (input == "Correct")
    {
        $("#popUpScreen").append("<div id='popUpText' class='text'>Bedankt voor je reactie. Je hoort van ons binnen 3 werkdagen!</div>");
        sendGmail();
    }
    else if (input == "Wrong")
    {
        $("#popUpScreen").append("<div id='popUpText' class='text'>Oeps! Je email of nummer is verkeerd.</div>");
    }
    $("#popUpScreen").append("<div id='popUpButton'><img onclick='hidePopUpScreen();' src='img/ok.png' alt='ok'/></div>");
}
;

// Verberg het popupscherm.
function hidePopUpScreen()
{
    $("#header").show();
    $("#popUpScreen").remove();

    switchToAllVacancies();
}
;

// Toon het overzicht met alle beschikbare vacatures.
function switchToAllVacancies()
{
    $("#chosenVacancy").hide();
    $("#main2").hide();
    $("#headerText").text("Beschikbare Vacatures:");
    $("#backbutton").hide();
    $("#main").show();
    $("#allVacancies").show();
    $("#footer").hide();
    $("#infobutton").show();
}
;

// Toon de gegevens van de geselecteerde vacature.
function switchToChosenVacancy()
{
    $("#headerText").text("Gekozen Vacature:");
    $("#allVacancies").hide();
    $("#main").hide();
    $("#backbutton").show();
    $("#chosenVacancy").show();
    $("#main2").show();
    $("#footer").show();
    $("#infobutton").hide();
}
;
