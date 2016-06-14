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

    if ((email.indexOf("@") != -1) || phone.length == 10)
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
	$("#chosenVacancyAll").hide();

	
    $("body").append("<div id='popUpScreen'></div>");

    if (input == "Correct")
    {
        $("#popUpScreen").append("<div id='popUpText' class='text' >Bedankt voor je reactie. Je hoort van ons binnen 3 werkdagen!</div>");
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
  $("#headerText").text("Beschikbare \n Vacatures:");
  $("#backbutton").hide();
  $("#chosenVacancy").hide();
  $("#chosenVacancyAll").hide();
  $("#allVacancies").show();
  $("#footerLine").hide();
  $("#infobutton").show();
  $("#filterbox").show();
  
};

function refreshedAlert()
{
    $("#header").hide();
    $("#chosenVacancy").hide();
	$("#chosenVacancyAll").hide();
    $("body").append("<div id='popUpScreen'></div>");

    $("#allVacancies").empty();
    read();
   
    $("#popUpScreen").append("<div id='popUpText' class='text'>De pagina is vernieuwd!.</div>");
	 $("#popUpScreen").append("<div id='popUpButton'><img onclick='hidePopUpScreen();' src='img/ok.png' alt='ok'/></div>");
}
;

// Toon de gegevens van de geselecteerde vacature.
function switchToChosenVacancy()
{
  $("#headerText").text("Gekozen \n Vacature:");
  $("#allVacancies").hide();
  $("#backbutton").show();
  $("#chosenVacancy").show();
  $("#chosenVacancyAll").show();
  $("#footerLine").show();
  $("#infobutton").hide();
  $("#filterbox").hide();
};

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function selectBranch()
{
    var array = [];
    for(i = 0; i < array.length; i++)
  {
    if(i % 2 === 0)
    {
      $("#allVacancies").append("<div id='vacancy"+ i +"' class='vacancy text'>"+ array[i] + "</div>");

      if(array[i + 1] === "1")
      {
        $("#vacancy" + i).css("background-color", "#c7d320");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-06.png' alt='icon'/>");
      }
      else if(array[i + 1] === "2")
      {
        $("#vacancy" + i).css("background-color", "#1b365d");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-01.png' alt='icon'/>");
      }
      else if(array[i + 1] == "3")
      {
        $("#vacancy" + i).css("background-color", "#eb660a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-02.png' alt='icon'/>");
      }
      else if(array[i + 1] == "4")
      {
        $("#vacancy" + i).css("background-color", "#e3251a");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-03.png' alt='icon'/>");
      }
      else if(array[i + 1] == "5")
      {
        $("#vacancy" + i).css("background-color", "#0c8ece");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-04.png' alt='icon'/>");
      }
      else if(array[i + 1] == "6")
      {
        $("#vacancy" + i).css("background-color", "#ffda05");
        $("#vacancy" + i).prepend("<img class='icon' src='img/Icons-05.png' alt='icon'/>");
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