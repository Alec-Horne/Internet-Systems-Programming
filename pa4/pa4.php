<!-- pa4.php
     A PHP script to demonstrate database programming.
-->
<html>
<head>
    <title> PA4 Database Programming with PHP </title>
    <style type = "text/css">
    td, th, table {border: thin solid black;}
    </style>
</head>
<body>

<?php

    // get user input data
    $id = $_POST["id"];
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $postal = $_POST["postal"];
    $dob = $_POST["dob"];
    $facebook = $_POST["facebook"];
    $twitter = $_POST["twitter"];
	
    // get user action
    $action = $_POST["action"];

	// Connect to MySQL
	$db = mysql_connect("db1.cs.uakron.edu:3306", "ajh158", "aiHo8jeh");
	if (!$db) {
		print "Error - Could not connect to MySQL";
		exit;
	}

	// Select the database
	$er = mysql_select_db("ISP_ajh158");
	if (!$er) {
		print "Error - Could not select the database";
		exit;
	}

	// set query based on action user selected
	if($action == "display")
		$query = "";
	else if ($action == "insert") {
		if($id != "")
			$query = "insert into ajh158 (ID, Name, Phone_Number, Address, City, State, Postal_Code,
				DOB, Facebook_Link, Twitter_Link) values($id, '$name', '$phone', '$address', '$city', '$state', 
				'$postal', '$dob', '$facebook', '$twitter')";
		else
			$query = "insert into ajh158 (Name, Phone_Number, Address, City, State, Postal_Code,
				DOB, Facebook_Link, Twitter_Link) values('$name', '$phone', '$address', '$city', '$state', 
				'$postal', '$dob', '$facebook', '$twitter')";
	}
	else if ($action == "update"){
		if ($id != "")
			$query = "update ajh158 set Name = '$name', Phone_Number = '$phone', Address = '$address',
				City = '$city', State = '$state', Postal_Code = '$postal', DOB = '$dob', Facebook_Link = '$facebook',
				Twitter_Link = '$twitter' where ID = $id";
		else
			$query = "update ajh158 set ID = $id, Phone_Number = '$phone', Address = '$address',
				City = '$city', State = '$state', Postal_Code = '$postal', DOB = '$dob', Facebook_Link = '$facebook',
				Twitter_Link = '$twitter' where Name = '$name'";
	}
	else if ($action == "delete"){
		if ($id != "")
			$query = "delete from ajh158 where ID = $id";
		else
			$query = "delete from ajh158 where Name = '$name'";			
	}
	else if ($action == "user")
		$query = $statement;

	if($query != ""){
		trim($query);
		$query_html = htmlspecialchars($query);
		print "<b> The query is: </b> " . $query_html . "<br />";
    
		$result = mysql_query($query);
		if (!$result) {
			print "Error - the query could not be executed";
			$error = mysql_error();
			print "<p>" . $error . "</p>";
		}
	}

    
	// Final Display of All Entries
	$query = "SELECT * FROM ajh158";
	$result = mysql_query($query);
	if (!$result) {
		print "Error - the query could not be executed";
		$error = mysql_error();
		print "<p>" . $error . "</p>";
		exit;
	}

	// Get the number of rows in the result, as well as the first row
	//  and the number of fields in the rows
	$num_rows = mysql_num_rows($result);
	//print "Number of rows = $num_rows <br />";

	print "<table><caption> <h2> Friends ($num_rows) </h2> </caption>";
	print "<tr align = 'center'>";

	$row = mysql_fetch_array($result);
	$num_fields = mysql_num_fields($result);

	// Produce the column labels
	$keys = array_keys($row);
	for ($index = 0; $index < $num_fields; $index++) 
		print "<th>" . $keys[2 * $index + 1] . "</th>";
	print "</tr>";
    
	// Output the values of the fields in the rows
	for ($row_num = 0; $row_num < $num_rows; $row_num++) {
		print "<tr align = 'center'>";
		$values = array_values($row);
		for ($index = 0; $index < $num_fields; $index++){
			$value = htmlspecialchars($values[2 * $index + 1]);
			print "<th>" . $value . "</th> ";
		}
		print "</tr>";
		$row = mysql_fetch_array($result);
	}
	print "</table>";
?>
</body>
</html>
