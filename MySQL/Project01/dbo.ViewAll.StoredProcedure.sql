USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[ViewAll]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ViewAll]
AS
BEGIN
	SELECT * FROM Customers;
	SELECT * FROM Bookings;
	SELECT * FROM Courses;
END
GO
