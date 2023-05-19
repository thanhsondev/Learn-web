USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[GetBookingsData]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetBookingsData] 
    @InputDate DATE
AS
BEGIN
    SELECT * 
    FROM Bookings 
    WHERE BookingDate = @InputDate;
END
GO
