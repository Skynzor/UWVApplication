
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





// Verstuur een email naar het adres, opgegeven in sendmail.php
function sendGmail()
{
  var email = $("#inputEmail").val();
  email = hash(email);
  var tel = $("#inputPhone").val();
  tel = hash(tel);
  var vacancytitle = $("#vacancy").text();
  var vacancyid = $("#hiddenid").text();
  
  //alert(vacancyid);
  
  $.ajax({
			url: "http://uwvproject.serverict.nl/oud/Gmail/sendmail3.php",
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




  

