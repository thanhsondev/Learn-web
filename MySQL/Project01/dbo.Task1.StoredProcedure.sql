USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task1]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--SELECT * FROM Customers;
--SELECT * FROM Bookings;
--SELECT * FROM Courses;

--SELECT * FROM Bookings WHERE BookingDate BETWEEN '2021-11-11'AND '2021-11-13';

--SELECT Customers.FullName, Bookings.BookingID 
--from Customers
--INNER JOIN Bookings ON Customers.CustomerID = Bookings.CustomerID
--WHERE Bookings.BookingDate = '2021-11-11';

CREATE PROCEDURE [dbo].[Task1]
AS
BEGIN
    SELECT * FROM Bookings WHERE BookingDate BETWEEN '2021-11-11' AND '2021-11-13'
END
GO
