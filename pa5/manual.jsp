<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Programming Assignment 5</title>
  <link rel="stylesheet" href="style.css">
  <style>
	@font-face {
      font-family: Infinity;
      src: url(Infinity.ttf);
	}
	@font-face {
      font-family: Nord;
      src: url(Nord.ttf);
	}
	@font-face {
      font-family: MacNord;
      src: url(MacNord.ttf);
	}
  </style>
</head>

<body onload="CheckFonts()">
  <h1> Programming Assignment 5 </h1>
  <h1> Instruction Manual </h1>
  <hr style="width: 300%; margin-left: -150%">
  <div style="width: 75%;">
  <h3 style="font-family: Infinity; font-size: 42px;"> Directions and Information: </h3>
  <p style="font-family: Nord; font-size: 20px;">
    The social list has features to display all records in the database, add a new record,
	update a record, delete a record, or execute your own custom SQL query.  
	<br><br>
	When adding, updating, or deleting a record you can choose to select the desired record 
	by the ID or the name.  The ID takes precedence over the name if both are filled out. 
	<br><br>
	Use the textboxes in the table to fill in the data for the record you would like to add or update.
	The ID is auto-incremented so it can be chosen to be filled out or the table will do it automatically
	if left blank.
	<br><br>
	After selecting an option and pressing the "execute SQL" button, you will be taken to a JSP page that
	display each record in table format.
  </p>
  <form action="pa5.jsp">
    <input type="submit" class="button" value="Go Back Home" />
  </form>
  </div>
  <script type="text/javascript">
    function CheckFonts() {
	    if (navigator.appVersion.indexOf("Mac") != -1) {
		  document.getElementById("myForm").style.fontFamily = "MacNord";
		  document.getElementById("leftdiv").style.fontFamily = "MacNord";
		  document.getElementById("factorialdiv").style.fontFamily = "MacNord"
	    }
    }
  </script>
  
</body>
</html>