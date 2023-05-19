USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task7]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Task7]
AS
BEGIN
select Customers.FullName 
from Customers 
where Customers.CustomerID = 
  (select Bookings.CustomerID 
   from Bookings 
   where Customers.CustomerID = Bookings.CustomerID 
   and Bookings.BookingDate = '2021-11-11');

END
GO
