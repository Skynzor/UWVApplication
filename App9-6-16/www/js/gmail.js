/*vacancy = getTitle()
function readAll(vacancy)
{
  $.getJSON("http://uwvwajongstenden.nl/App/readAll.php", function(result)
  {
    allJsonToArray(vacancy, result);
  });
};
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
function getDetailsFromArray(vacancy, array)
{
  var description;
  var requirements;
  var minhours;
  var maxhours;
  var branch;
  var locations;

  for(i = 0; i < array.length; i++)
  {
    if(vacancy == array[i])
    {
      description = array[i + 2];
      requirements = array[i + 3];
	  minhours = array[i + 6];
      maxhours = array[i + 4];
      branch = array[i + 1];
	  locations = array[i + 5];
    }
  }
  appendToDetailsPage(vacancy, description, requirements, maxhours, minhours, branch, locations);
};*/

// Ontvang alle database gegevens van readAll.php als JSON object.
function getVacancyNumber(vacancytitle)
	{
		var vacancyid;
		$.getJSON("http://uwvwajongstenden.nl/App/read.php", function(result)
		{
			var array = [];
			for(key in result)
				{
					if(result.hasOwnProperty(key))
					{
						array.push(result[key]);
						//alert(result[key]);
					}
				}
			alert(JSON.stringify(array));
				/*
			for(i = 0; i < array.length; i++)
			{
				vacancyid += array[i] + " : ";
				if(vacancytitle == array[i])
				{
					vacancyid = array.toString();
				}
			}*/
		})
		
		//getNumber(array);
	}
function getNumber()
{
	
	
}
		


// Verstuur een email naar het adres, opgegeven in sendmail.php
function hash(input)
{
	//variabelen
	var tehashen = input;
	var hash = "Hash mislukt";
	var lijst = ["p","q","t","a","z","b","y","m","e","w","s","l","j","d","c","r","h","f","k","o","g","i","v","x","n","u"];
	var random = 0;
	
	//als er geen string is om te hashen
	if (tehashen.length === 0) 
	{
		return hash;
	}
	
	//maak er een lege string van
	hash = "";
	//loop over de string, elke letter heeft een waarde
	for (var i = 0; i < tehashen.length; i++) 
	{
		//random getal om een random letter uit lijst te krijgen
		//random = Math.floor((Math.random() * lijst.length) + 1);
		random = Math.floor((Math.random() * lijst.length));
		//voeg toe aan de string
		hash += (tehashen.charCodeAt(i)*3076);
		hash += lijst[random];
	}
	return hash;
}



//function sendGmail()
//{
//  var email = $("#inputEmail").val();
//  var tel = $("#inputPhone").val();
//  var vacancy = $("#vacancy").text();

//  $.ajax({
//			url: "http://uwvproject.serverict.nl/Gmail/sendmail.php",
//			type: "POST",
//			dataType: "json",
//			data: {type:"yes", mail:email, phone:tel, nummer:vacancy},
//			ContentType: "application/json",
//			success: function (response) {
//					//alert(JSON.stringify(response));
//			},
//				error: function (err) {
//					//alert(JSON.stringify(err));
//			}
//		});
//};

// Verstuur een email naar het adres, opgegeven in sendmail.php
function sendGmail()
{
  
  var email = $("#inputEmail").val();
  email = hash(email);
  var tel = $("#inputPhone").val();
  tel = hash(tel);
  var vacancytitle = $("#vacancy").text();
  var vacancytitle = getTitle();
  
  //var id = getVacancyNumber(vacancytitle);
  var id = getVacancyNumber(getTitle());
  
  if (id == null)
  { alert('undefined');}
	else {
  
  $.ajax({
	url: "http://uwvproject.serverict.nl/oud/Gmail/sendmail3.php",
	type: "POST",
	dataType: "json",
	data: {type:"yes", mail:email, phone:tel, nummer:id, titel:vacancytitle},
	ContentType: "application/json",
	success: function (response) {
		alert(JSON.stringify(response));
	},
	error: function (err) {
		alert(JSON.stringify(err));
	}
  });
}
};

/*

Werkte wel!

// Verstuur een email naar het adres, opgegeven in sendmail.php
function sendGmail()
{
  var email = $("#inputEmail").val();
  var tel = $("#inputPhone").val();
  var vacancy = $("#vacancy").text();

  $.ajax({
			url: "http://uwvproject.serverict.nl/Gmail/sendmail3.php",
			type: "POST",
			dataType: "json",
			data: {type:"yes", mail:email, phone:tel, nummer:vacancy},
			ContentType: "application/json",
			success: function (response) {
					//alert(JSON.stringify(response));
			},
				error: function (err) {
					//alert(JSON.stringify(err));
			}
		});
};

*/
  




  

