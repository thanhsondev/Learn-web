USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task2]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Task2]
AS
BEGIN
    SELECT Customers.FullName, Bookings.BookingID 
	FROM Customers
	INNER JOIN Bookings ON Customers.CustomerID = Bookings.CustomerID
	WHERE Bookings.BookingDate = '2021-11-11';
END
GO
