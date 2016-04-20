<?php

	$query = 
	"
	SELECT * FROM category;
	";
	
	$query2 = 
	"
	SELECT companyName FROM company;
	";

    try 
    { 
        // These two statements run the query against your database table. 
        $stmt = $db->prepare($query); 
        $stmt2 = $db->prepare($query2); 
        
		$stmt->execute(); 
        $stmt2->execute(); 
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
	
    

?>



<form action="insert.php"  method="post">
<div class="searchbar">
        <button name="submit" value="addNew" id="">Opslaan</button>
        <button name="" value="" id="">Annuleer</button>
               



</div>
<div class="space"></div>
<div class="editblock">
    <div class="edititem">
    <p>Beroep:</p>
    <input name="beroep" value= "" placeholder="...">
    </div>
    <div class="edititem">
    <p>Plaats:</p>
    <input name="plaats" value="" placeholder="...">
    </div>
	
	<div class="edititem">
    <p>Categorie:</p>
	<select name="category" value="1">
		<?php 
			foreach($rows as $row){
				echo "<option>". $row['categoryTitle'] ."</option>";
			}
		?>
    </select>
    </div>
	
    <div class="edititem">
    <p>Start datum:</p>
    <input type="date" name='startdatum' value="">
    </div>
</div>

<div class="editblock">
    <div class="edititem">
    <p>Bedrijf:</p>
	<input name="bedrijf" type='text' value="" list='listid'>
		<datalist id='listid'>
		<?php
		foreach($rows2 as $row2)
							{
								echo "<option>".$row2['companyName']."</option>";
							}
		?>
		</datalist>
    </div>
    
	<div class="edititem">
    <p>Uren:</p>
    <input name="uren" value="" placeholder="...">
    </div>
    
	<div class="edititem">
	<p>Status:</p>
	<select name="actief">
		<?php
			echo "<option>Actief</option>";
			echo "<option>Inactief</option>";
		
		?>
    </select>
	</div>
	
    <div class="edititem">
    <p>Eind datum:</p>
    <input type="date" name='einddatum' value="einddatum">
    </div>
</div>

<div class="editblock">
    <div class="edititem">
    <p>Omschrijving:</p>
    <textarea name="omschrijving" value="omschrijving" placeholder="..."></textarea>
    </div>
</div>

<div class="editblock">
    <div class="edititem">
    <p>Eisen:</p>
    <textarea name="eisen" value="eisen" placeholder="..."></textarea>
    </div>
</div>
</form>

	<?php
	

	
	?>