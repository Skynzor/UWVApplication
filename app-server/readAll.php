<?php
  header("Access-Control-Allow-Origin: *");
  $servername = "localhost";
  $username = "uwvproject";
  $password = "Pruj_1680";
  $dbname = "uwvproject_uwvprojectwajong";

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  $sql = "SELECT * FROM vacancy";
  $result = mysqli_query($conn, $sql);
  $arr = array();

  if (mysqli_num_rows($result) > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
          array_push($arr, $row["vacancyTitle"] );
          array_push($arr, $row["vacancyDescription"] );
          array_push($arr, $row["vacancyRequirements"] );
          array_push($arr, $row["vacancyHours"] );
          array_push($arr, $row["categoryID"] );
      }
  } else {
      echo ("0 results");
  }
  echo json_encode($arr);
  mysqli_close($conn);
?>
