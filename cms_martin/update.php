<?php

require("common.php"); 
     
    if(empty($_SESSION['user'])) 
    { 
        header("Location: login.php"); 
         
        die("Redirecting to login.php"); 
    } 

if($idVacancy = $_POST['submit']){
	

$sql15 = "SELECT companyID FROM company WHERE companyName =  '".$_POST['bedrijf']."' AND companyLocation = '".$_POST['plaats']."'";
$stmt15 = $db->prepare($sql15);                                  
$stmt15->execute(); 
$count = $stmt15->rowCount();



if ($count < 1)
{
	$sql3 = "INSERT INTO company (companyName,companyLocation) VALUES ('".$_POST['bedrijf']."','".$_POST['plaats']."')";
	$stmt3 = $db->prepare($sql3);                              
	$stmt3->execute(); 	

}

	$sql2 = "SELECT companyID FROM company WHERE companyName =  '".$_POST['bedrijf']."' AND companyLocation = '".$_POST['plaats']."'";
	$sql7 = "SELECT categoryID FROM category WHERE categoryTitle = '".$_POST['category']."'";

	$stmt2 = $db->prepare($sql2);                                  
	$stmt7 = $db->prepare($sql7);                                  

	$stmt2->execute(); 
	$stmt7->execute(); 	

	$rows2 = $stmt2->fetchAll();  
	$rows7 = $stmt7->fetchAll();  

	foreach($rows2 as $companyID);
	foreach($rows7 as $categoryID);
	
	if ($_POST['actief'] == 'Actief' ){
                    $intActive = 0;
                }
                else {
                    $intActive = 1;
                }
	
	$sql = "UPDATE vacancy SET vacancyTitle = :vacancyTitle, 
	vacancyHours = :vacancyHours, 
	vacancyDescription = :vacancyDescription, 
	vacancyDate = :vacancyDate, 
	vacancyStatus = :vacancyStatus, 
	vacancyExpireDate = :vacancyExpireDate, 
	vacancyRequirements = :vacancyRequirements,
	companyID = :companyID,
	categoryID = :categoryID
	WHERE vacancyID =". $idVacancy;


	$stmt = $db->prepare($sql);                                  
	$stmt->bindParam(':vacancyTitle', $_POST['beroep'], PDO::PARAM_STR);      
	$stmt->bindParam(':vacancyHours', $_POST['uren'], PDO::PARAM_STR);      
	$stmt->bindParam(':vacancyDescription', $_POST['omschrijving'], PDO::PARAM_STR);      
	$stmt->bindParam(':vacancyRequirements', $_POST['eisen'], PDO::PARAM_STR);   
	$stmt->bindParam(':vacancyDate', $_POST['startdatum'], PDO::PARAM_STR);      
	$stmt->bindParam(':vacancyStatus', $intActive, PDO::PARAM_STR);      
	$stmt->bindParam(':vacancyExpireDate', $_POST['einddatum'], PDO::PARAM_STR);      
	$stmt->bindParam(':companyID', $companyID['companyID'], PDO::PARAM_STR);
	$stmt->bindParam(':categoryID', $categoryID['categoryID'], PDO::PARAM_STR);      
	$stmt->execute(); 

header("Location:index.php"); 
}
else
{
header("Location:index.php"); 
}

?>