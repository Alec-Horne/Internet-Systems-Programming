USE ISP_ajh158;
CREATE TABLE ajh158
(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
    Name NVARCHAR(50) NULL,
    Phone_Number NCHAR(24) NULL,
    Address NCHAR(60) NULL,
    City NCHAR(24) NULL,
    State NCHAR(2) NULL,
    Postal_Code NCHAR(5) NULL,
    DOB NCHAR(10) NULL,
    Facebook_Link NVARCHAR(50) NULL,
    Twitter_Link NVARCHAR(50) NULL,
    PRIMARY KEY (ID)
);

INSERT INTO ajh158 (Name, Phone_Number, Address, City, State, Postal_Code, DOB, Facebook_Link, Twitter_Link) 
VALUES ('Alec Horne', '330-555-5555', '1234 Rocky Road', 'Streetsboro', 'OH', '44241', '03/30/1990', 
'www.facebook.com/alec.horne.56', 'www.twitter.com');
INSERT INTO ajh158 (Name, Phone_Number, Address, City, State, Postal_Code, DOB, Facebook_Link, Twitter_Link)
VALUES ('Bernie Sanders', '123-456-7890', '552 Blah Lane', 'Buffalo', 'NY', '45623', '01/09/1950', 
'www.facebook.com/senatorsanders/?fref=nf', 'www.twitter.com/berniesanders?lang=en');
INSERT INTO ajh158 (Name, Phone_Number, Address, City, State, Postal_Code, DOB, Facebook_Link, Twitter_Link)
VALUES ('Scooby Doo', '555-555-5555', '1234 Mystery Van Rd', 'Akron', 'OH', '44313', '05/10/1987', 
'www.facebook.com/scoobydoo', 'www.twitter.com/hashtag/scoobydoo?lang=en');