USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task10]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Task10]
AS
BEGIN

SELECT CONCAT('ID: ', BookingID,', Date: ', BookingDate,', Number of guests: ', NumberOfGuests) AS "Booking Details" FROM Bookings;

END
GO
