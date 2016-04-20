<?php

require("common.php"); 
     
    // if(empty($_SESSION['user'])) 
    // { 
        // header("Location: login.php"); 
         
        // die("Redirecting to login.php"); 
    // } 

$idVacancy = $_POST['delete'];
	
$query = "DELETE FROM vacancy WHERE vacancyID = '".$_POST['delete']."'";
$stmt = $db->prepare($query);                                  
$stmt->execute(); 


header("Location:index.php"); 

?>