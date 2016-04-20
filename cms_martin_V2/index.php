<?php

require("common.php"); 
     
	 
    /* if(empty($_SESSION['user'])) 
    { 
        header("Location: login.php"); 
         
        die("Redirecting to login.php"); 
    }  */
	
	//Wordpress check for user logged in
	/* function is_user_logged_in() {
    $user = wp_get_current_user();
 
    return $user->exists();
} */

include 'elements/header.php';
include 'elements/vacature.php';

?>
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>UWV Wajong Vacatures</title>
  <meta name="description" content="UWV Wajong Vacatures">
  <meta name="author" content="Stenden Hogeschool">

  <link rel="stylesheet" href="css/style.css">
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
</head>

<body>



</body>
</html>