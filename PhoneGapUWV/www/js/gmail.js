// Verstuur een email naar het adres, opgegeven in sendmail.php
function sendGmail()
{
  var email = $("#inputEmail").val();
  var tel = $("#inputPhone").val();
  var vacancy = $("#vacancy").text();

  $.ajax({
			url: "http://uwvproject.serverict.nl/Gmail/sendmail.php",
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
