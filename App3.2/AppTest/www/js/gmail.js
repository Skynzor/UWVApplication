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
  var vacancyid;
  var vacancytitle = $("#vacancy").text();
  
  
  $.ajax({
			url: "http://uwvwajongstenden.nl/Gmail/sendmail.php",
			type: "POST",
			dataType: "json",
			data: {type:"yes", mail:email, phone:tel, nummer:vacancyid, titel:vacancytitle},
			ContentType: "application/json",
			success: function (response) {
					//alert(JSON.stringify(response));
			},
				error: function (err) {
					//alert(JSON.stringify(err));
			}
		});
};
  // Ontvang alle database gegevens van readAll.php als JSON object.

  function getVacancyNumber(vacancytitle)
{
  $.getJSON("http://uwvwajongstenden.nl/App/readAll.php", function(result)
  {
  var array = [];
  for(key in result)
  {
    if(result.hasOwnProperty(key))
    {
      array.push(result[key]);
    }
  }
  for(i = 0; i < array.length; i++)
  {
    if(vacancy == array[i])
    {
      vacancyid = array[i + 0];
    }
  }
})
};


  

