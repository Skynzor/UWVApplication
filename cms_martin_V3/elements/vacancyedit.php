<?php 
    
    $idVacancy = $_POST['edit'];

	
	$query = " 
         SELECT *
         FROM uwv_wajong
         WHERE Vacaturenummer = ".$idVacancy."; 
     "; 
	
    // $query = " 
        // SELECT vacancy.vacancyID, vacancy.categoryID, category.categoryTitle, vacancy.vacancyTitle,  company.companyName, company.companyLocation,vacancy.vacancyDate,
        // vacancy.vacancyExpireDate, vacancy.vacancyStatus,  vacancy.vacancyHours,  vacancy.vacancyDescription,  vacancy.vacancyRequirements
        // FROM vacancy, company, category
        // WHERE vacancy.companyID = company.companyID 
		// AND vacancy.categoryID = category.categoryID
        // AND vacancy.vacancyID = ".$idVacancy."; 
    // "; 

	$query2 = 
	"
	SELECT companyName FROM company;
	";
	
	$query3 = 
	"
	SELECT * FROM category;
	";

    try 
    { 
        // These two statements run the query against your database table. 
        $stmt = $db->prepare($query); 
        $stmt->execute(); 
		
		$stmt2 = $db->prepare($query2); 
        $stmt2->execute(); 
		
		$stmt3 = $db->prepare($query3); 
        $stmt3->execute(); 
    } 
    catch(PDOException $ex) 
    { 
        // Note: On a production website, you should not output $ex->getMessage(). 
        // It may provide an attacker with helpful information about your code.  
        die("Failed to run query: " . $ex->getMessage()); 
    } 
         
    // Finally, we can retrieve all of the found rows into an array using fetchAll 
    $rows = $stmt->fetchAll(); 
    $rows2 = $stmt2->fetchAll(); 
    $rows3 = $stmt3->fetchAll(); 
	
	
	
	
	
    foreach($rows as $rowx => $row){ 
	
    ?>

<form action="update.php"  method="post">
<div class="searchbar">
        <button name="submit" value="<?php echo $idVacancy; ?>" id="">Opslaan</button>
        <button name="" value="" id="">Annuleer</button>
               



</div>
<div class="space"></div>
<div class="editblock">
    <div class="edititem">
    <p>Beroep:</p>
    <input name="beroep" value= "<?php echo $row['vacancyTitle']; ?>" placeholder="...">
    </div>
    <div class="edititem">
    <p>Plaats:</p>
    <input name="plaats" value="<?php echo $row['companyLocation']; ?>" placeholder="...">
    </div>
	
	<div class="edititem">
    <p>Categorie:</p>
	<select name="category">
        <?php

					   echo "<option>". $row['categoryTitle'] ."</option>";
					   foreach($rows3 as $rowz)
						{
							echo "<option>".$rowz['categoryTitle']."</option>";
						}
       ?>
    </select>
    </div>
	
    <div class="edititem">
    <p>Start datum:</p>
    <input type="date" name='startdatum' value="<?php echo $row['vacancyDate']; ?>">
    </div>
</div>

<div class="editblock">
    <div class="edititem">
    <p>Bedrijf:</p>
	<input name="bedrijf" type='text' value="<?php echo $row['companyName']; ?>" list='listid'>
		<datalist id='listid'>
		<?php
		foreach($rows2 as $rowz)
							{
								echo "<option>".$rowz['companyName']."</option>";
							}
		?>
		</datalist>
    </div>
    
	<div class="edititem">
    <p>Uren:</p>
    <input name="uren" value="<?php echo $row['vacancyHours']; ?>" placeholder="...">
    </div>
    
	<div class="edititem">
	<p>Status:</p>
	<select name="actief">
		<?php
			echo "<option>";
			if ($row['vacancyStatus'] == 0 ){
                    echo 'Actief';
                }
                else {
                    echo 'Inactief';
                }
			echo "</option>";
		
			echo "<option>";
			if ($row['vacancyStatus'] == 1 ){
                    echo 'Actief';
                }
                else {
                    echo 'Inactief';
                }
			echo "</option>";
		
		?>
    </select>
	</div>
	
    <div class="edititem">
    <p>Eind datum:</p>
    <input type="date" name='einddatum' value="<?php echo $row['vacancyExpireDate']; ?>">
    </div>
</div>

<div class="editblock">
    <div class="edititem">
    <p>Omschrijving:</p>
    <textarea name="omschrijving" value="" placeholder="..."><?php echo $row['vacancyDescription']; ?></textarea>
    </div>
</div>

<div class="editblock">
    <div class="edititem">
    <p>Eisen:</p>
    <textarea name="eisen" value="" placeholder="..."><?php echo $row['vacancyRequirements']; ?></textarea>
    </div>
</div>
</form>

<?php };?>

