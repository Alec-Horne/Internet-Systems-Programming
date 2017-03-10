<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>  

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Programming Assignment 5 </title>
    </head>
    <body>
		<h1>My Social List</h1><br>
		<table style="border: thin solid black;">
		<%
			Connection con;
			DatabaseMetaData md;
			String qs;
			Statement stmt;
			ResultSet rs;
            
			String id = request.getParameter("id");
            String name = request.getParameter("name");
			String phone = request.getParameter("phone");
			String address = request.getParameter("address");
			String city = request.getParameter("city");
			String state = request.getParameter("state");
			String postal = request.getParameter("postal");
			String dob = request.getParameter("dob");
			String twitter = request.getParameter("twitter");
			String facebook = request.getParameter("facebook");
			
			String action = request.getParameter("action");
			String statement = request.getParameter("statement");
			
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			try {
				con = DriverManager.getConnection("jdbc:mysql://db1.cs.uakron.edu:3306/ISP_ajh158","ajh158","aiHo8jeh");
				stmt = con.createStatement();
				
				if(action.equals("display"))
					qs = "";
				else if (action.equals("insert")) {
					if(!id.equals(""))
						qs = "insert into ajh158 (ID, Name, Phone_Number, Address, City, State, Postal_Code, " +
							"DOB, Facebook_Link, Twitter_Link) values(" + id + ", '" + name + "', '" + phone + "', '" + address + 
							"', '" + city + "', '" + state + "', '" + postal + "', '" + dob + "', '" + facebook + "', '" + twitter + "')"; 
					else
						qs = "insert into ajh158 (Name, Phone_Number, Address, City, State, Postal_Code, " +
							"DOB, Facebook_Link, Twitter_Link) values('" + name + "', '" + phone + "', '" + address + 
							"', '" + city + "', '" + state + "', '" + postal + "', '" + dob + "', '" + facebook + "', '" + twitter + "')"; 
				}
				else if (action.equals("update")){
					if(!id.equals(""))
						qs = "update ajh158 set Name = '" + name + "', Phone_Number = '" + phone + "', Address = '" + address +
							"', City = '" + city + "', State = '" + state + "', Postal_Code = '" + postal + "', DOB = '" + dob + 
							"', Facebook_Link = '" + facebook + "', Twitter_Link = '" + twitter + "' where ID = " + id;
					else
						qs = "update ajh158 set Name = '" + name + "', Phone_Number = '" + phone + "', Address = '" + address +
							"', City = '" + city + "', State = '" + state + "', Postal_Code = '" + postal + "', DOB = '" + dob + 
							"', Facebook_Link = '" + facebook + "', Twitter_Link = '" + twitter + "' where Name = '" + name + "'";
				}
				else if (action.equals("delete")) {
					if(!id.equals(""))
						qs = "delete from ajh158 where ID = " + id;
					else
						qs = "delete from ajh158 where Name = '" + name + "'";			
				}
				else if (action.equals("user"))
					qs = statement;
				else
					qs = "";
				
				if (!qs.equals(""))
					stmt.executeUpdate(qs);
				
				qs = "select * from ajh158";
				rs = stmt.executeQuery(qs);
				ResultSetMetaData rsmd = rs.getMetaData();
				int columnCount = rsmd.getColumnCount();
				out.print("<tr>");
				for (int i = 1; i <= columnCount; i++ ) {
					String cname = rsmd.getColumnName(i);
					out.print("<th style='border: thin solid black;'>" + cname + "</th>");
				}
				out.print("</tr>");
				while(rs.next()) {
					out.print("<tr>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("ID") + "</td>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("Name") + "</td>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("Phone_Number") + "</td>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("Address") + "</td>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("City") + "</td>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("State") + "</td>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("Postal_Code") + "</td>");
					out.print("<td style='border: thin solid black;'>" + rs.getString("DOB") + "</td>");
					out.print("<td style='border: thin solid black;'><a href='http://" + rs.getString("Facebook_Link") + "'>Facebook Link</a></td>");
					out.print("<td style='border: thin solid black;'><a href='http://" + rs.getString("Twitter_Link") + "'>Twitter Link</a></td>");
					out.print("</tr>");
				}
		%>
		</table>
		<br>
		<form action="pa5.jsp">
			<input type="submit" class="button" value="Go Back Home" />
		</form>
		<%
				rs.close();
				stmt.close();
				con.close();
			}
			catch(Exception e) {
				e.printStackTrace();
			}
		%>
    </body>
</html>