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
  <h1> My Social List </h1>
  <hr style="width: 300%; margin-left: -150%">
  <br><br>
  <form style="font-family: Nord; font-size: 20px;" action="manual.jsp">
	Instruction manual: 
    <input type="submit" class="button" value="Help Page" />
  </form>
  <br>
  
  <form action="display.jsp" method="post">
    <table border="1" style="width: 100%;">
	  <tr>
	    <th> ID (Optional) </th>
        <th> Name </th>
        <th> Phone Number </th>
        <th> Address </th>
        <th> City </th>
        <th> State(Abv. ex. OH) </th>
        <th> Postal Code </th>
        <th> DOB </th>
        <th> Facebook Link </th>
        <th> Twitter Link </th>
      </tr>
	  <tr>
        <td><input type = "text" name = "id" size = "2" value = "" /></td>
        <td><input type = "text" name = "name"  size = "15"  value = "" /></td>
        <td><input type = "text" name = "phone" size = "15" value = "" /></td>
        <td><input type = "text" name = "address" value = "" /></td>
        <td><input type = "text" name = "city"  size = "12"  value = "" /></td>
        <td><input type = "text" name = "state" size = "8" value = "" /></td>
        <td><input type = "text" name = "postal" size = "6" value = "" /></td>
        <td><input type = "text" name = "dob" size = "6" value = "" /></td>
        <td><input type = "text" name = "facebook" value = "" /></td>
        <td><input type = "text" name = "twitter" value = "" /></td>
	  </tr>			
	</table>
	
	<div>
	  <h3> Action </h3>
	  <input type = "radio"  id = "display" name = "action"  value = "display" checked = "checked" />
	  <label for = "display"> Display all records </label><br>
      <input type = "radio"  id = "insert"  name = "action"  value = "insert" />
	  <label for = "insert"> Add a new record </label><br>
      <input type = "radio"  id = "update"  name = "action"  value = "update" />
	  <label for = "update"> Update an existing record </label><br>
      <input type = "radio"  id = "delete"  name = "action"  value = "delete" />
	  <label for = "delete"> Delete an existing record </label><br>
      <input type = "radio"  id = "user"  name = "action"  value = "user" />
      <label for = "user"> Enter your own SQL statement below </label><br>
      <input type = "text"  name = "statement" size = "40" value = "select * from ajh158" id = "in" /><br>
      <input type = "reset"  class = "button"  value = "Reset Form">
      <input type = "submit"  class = "button"  value = "Execute SQL">
	</div>
  </form>
  
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