<div class="searchbar">
    <form action="index.php" method="post"> 

        <input type="text" name="searchterm" placeholder="Zoekterm...">
        Sorteer op:
        <select name="sort">
          <option value="Aflopend">Nieuw naar Oud</option>
          <option value="Oplopend">Oud naar Nieuw</option>
          <option value="Actief">Actief</option>
          <option value="Inactief">Inactief</option>
        </select>
        <input type="submit" value="Zoek" /> 
    </form>
</div>
<div class="addvacancybar">
    <h2><a href="add.php">+ Nieuwe vacature aanmaken</a></h2>
</div>
<?php 



	if ($_POST['searchterm'] != '')
	{
		$query = "SELECT vacancy.vacancyID, vacancy.vacancyTitle,  company.companyName, vacancy.vacancyDescription, company.companyLocation,vacancy.vacancyDate,
		vacancy.vacancyExpireDate, vacancy.vacancyStatus , vacancy.categoryID 
		FROM vacancy
		INNER JOIN company ON vacancy.companyID = company.companyID
		WHERE vacancy.vacancyDescription LIKE '%".$_POST['searchterm']."%'
		OR company.companyName LIKE '%".$_POST['searchterm']."%'
		OR company.companyLocation LIKE '%".$_POST['searchterm']."%'
		OR vacancy.vacancyTitle LIKE '%".$_POST['searchterm']."%'
		";
	}
	
    elseif ($_POST['sort'] == 'Oplopend'){
		
		$query = " 
			SELECT vacancy.vacancyID, vacancy.vacancyTitle,  company.companyName, company.companyLocation,vacancy.vacancyDate,
			vacancy.vacancyExpireDate, vacancy.vacancyStatus, vacancy.categoryID 
			FROM `vacancy`, company 
			WHERE vacancy.companyID = company.companyID
			ORDER BY vacancy.vacancyDate ASC
		"; 
	}
	elseif ($_POST['sort'] == 'Aflopend'){
		$query = " 
			SELECT vacancy.vacancyID, vacancy.vacancyTitle,  company.companyName, company.companyLocation,vacancy.vacancyDate,
			vacancy.vacancyExpireDate, vacancy.vacancyStatus, vacancy.categoryID  
			FROM `vacancy`, company 
			WHERE vacancy.companyID = company.companyID
			ORDER BY vacancy.vacancyDate DESC
		"; 
	}
	elseif ($_POST['sort'] == 'Actief'){
		$query = " 
			SELECT vacancy.vacancyID, vacancy.vacancyTitle,  company.companyName, company.companyLocation,vacancy.vacancyDate,
			vacancy.vacancyExpireDate, vacancy.vacancyStatus , vacancy.categoryID 
			FROM `vacancy`, company 
			WHERE vacancy.companyID = company.companyID AND vacancyStatus = 0
		"; 

	}
	elseif ($_POST['sort'] == 'Inactief'){
		$query = " 
			SELECT vacancy.vacancyID, vacancy.vacancyTitle,  company.companyName, company.companyLocation,vacancy.vacancyDate,
			vacancy.vacancyExpireDate, vacancy.vacancyStatus , vacancy.categoryID 
			FROM `vacancy`, company 
			WHERE vacancy.companyID = company.companyID AND vacancyStatus = 1
		"; 
	}
	else {
		$query = " 
			SELECT vacancy.vacancyID, vacancy.vacancyTitle,  company.companyName, company.companyLocation,vacancy.vacancyDate,
			vacancy.vacancyExpireDate, vacancy.vacancyStatus , vacancy.categoryID 
			FROM `vacancy`, company 
			WHERE vacancy.companyID = company.companyID
		"; 

	}

	
	
	
	
     
    try 
    { 
        // These two statements run the query against your database table. 
        $stmt = $db->prepare($query); 
        $stmt->execute(); 
    } 
    catch(PDOException $ex) 
    { 
        // Note: On a production website, you should not output $ex->getMessage(). 
        // It may provide an attacker with helpful information about your code.  
        die("Failed to run query: " . $ex->getMessage()); 
    } 
         
    // Finally, we can retrieve all of the found rows into an array using fetchAll 
    $rows = $stmt->fetchAll(); 
?> 
    <table class="vacancytable">
    <?php foreach($rows as $row): ?> 
   
        <tr>
            <td>
				<img src='images/Icons-0<?php echo $row['categoryID']; ?>.png' height='75px' width='auto'/>
            </td>
			<td>
                <strong><?php echo $row['vacancyTitle']; ?><br/></strong>
                <?php echo $row['companyName']; ?>

            </td>
            <td>
                <p>Locatie:</p>
                <?php echo $row['companyLocation']; ?>
            </td>
            <td>
                <p>Aanmaak datum:</p>
                <?php echo $row['vacancyDate']; ?>
            </td>
            <td>
                <p>Verloop datum:</p>
                <?php echo $row['vacancyExpireDate']; ?>
            </td>
            <td>
                <p>Status:</p>            
                <?php 
                if ($row['vacancyStatus'] == 0 ){
                    echo 'Actief';
                }
                else {
                    echo 'Inactief';
                }
                ?>
            </td>
            <td>
                <form action="edit.php" method="post"><button name="edit" value="<?php echo $row['vacancyID'];  ?>" id="">Bekijk of bewerk</button></form>           
            </td>
            <td>
                <form action="delete.php" method="post"><button name="delete" value="<?php echo $row['vacancyID'];  ?>" id="">Verwijder</button></form>           
            </td>
        </tr>

    <?php endforeach; ?>
    </table>

