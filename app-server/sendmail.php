<?php
	header('Access-Control-Allow-Origin: *'); //should work in Cross Domain ajax calling request

	//error_reporting(0); //geen errors worden weergegeven

		//if (isset($_POST['versturen'])) // als er op de knop is gedrukt dan
		if (isset($_POST['type']))
		{
			if($_POST['type'] == "yes") {
				// variabelen aanmaken voor php-verwerking

				//test of de waarden wel kloppen
				//if($_POST['mail'] == "@gmail.com") {
				//	if($_POST['phone'] == "0611223344") {



				$email = $_POST['mail'];
				$tel = $_POST['phone'];
				$nummer = $_POST['nummer'];

				$bericht = '';

				if (!empty ($email) && // als deze velden niet leeg zijn dan verstuur mail plus bericht naar bezoeker dat gegevens verstuurd zijn
				!empty ($tel)){
					/**
					 * This example shows settings to use when sending via Google's Gmail servers.
					 */

					//SMTP needs accurate times, and the PHP time zone MUST be set
					//This should be done in your php.ini, but this is how to do it if you don't have access to that
					date_default_timezone_set('Etc/UTC');

					require 'PHPMailer/PHPMailerAutoload.php';

					//Create a new PHPMailer instance
					$mail = new PHPMailer;

					//Tell PHPMailer to use SMTP
					$mail->isSMTP();

					//Enable SMTP debugging
					// 0 = off (for production use)
					// 1 = client messages
					// 2 = client and server messages
					$mail->SMTPDebug = 2;

					//Ask for HTML-friendly debug output
					$mail->Debugoutput = 'html';

					//Set the hostname of the mail server
					$mail->Host = 'smtp.gmail.com';
					// use
					// $mail->Host = gethostbyname('smtp.gmail.com');
					// if your network does not support SMTP over IPv6

					//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
					$mail->Port = 587;

					//Set the encryption system to use - ssl (deprecated) or tls
					$mail->SMTPSecure = 'tls';

					//Whether to use SMTP authentication
					$mail->SMTPAuth = true;

					//Username to use for SMTP authentication - use full email address for gmail
					$mail->Username = "uwvprojectstenden@gmail.com";

					//Password to use for SMTP authentication
					$mail->Password = "uwv123456";

					//Set who the message is to be sent from
					$mail->setFrom('uwvprojectstenden@gmail.com', 'Wajong vacature app');

					//Set an alternative reply-to address
					$mail->addReplyTo('uwvprojectstenden@gmail.com', 'Wajong vacature app');

					//Set who the message is to be sent to
					$mail->addAddress('uwvprojectstenden@gmail.com', 'UWV');

					//Set the subject line
					$mail->Subject = 'Reactie op een Wajong vacature via app';

					//Read an HTML message body from an external file, convert referenced images to embedded,
					//convert HTML into a basic plain-text alternative body
					//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));

					//Replace the plain text body with one created manually
					$mail->Body = "Er is op een Wajong vacature gereageerd.\n\n";
					$mail->Body .= "Vacaturebeschrijving: " . $nummer . ".\n";
					$mail->Body .= "Het opgegeven e-mailadres is: " . $email . ".\n";
					$mail->Body .= "Het opgegeven telefoonnummer is: " . $tel . ".";

					//Replace the plain text body with one created manually
					//$mail->AltBody = 'This is a plain-text message body';

					//Attach an image file
					//$mail->addAttachment('images/phpmailer_mini.png');

					//send the message, check for errors
					if (!$mail->send()) {
						echo "Mailer Error: " . $mail->ErrorInfo;
					} else {
						echo "Message sent!";
					}
				}
				else
				{
					echo "e-mail of telefoonnummer is leeg";
				}
			//}}
			}
		} else
		{
			echo "er is niet op submit gedrukt";
		}
?>
