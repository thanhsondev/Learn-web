USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task3]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Task3]
AS
BEGIN
    SELECT BookingDate, Count(BookingDate) AS 'Count(BookingDate)'
	FROM Bookings
	Group By BookingDate;
END
GO
