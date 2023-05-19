USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task5]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Task5]
AS
BEGIN
CREATE TABLE DeliveryAddress (
ID INT Primary key, 
Address varchar(255) not null, 
Type varchar(255) NOT NULL DEFAULT 'Private', 
CustomerID INT Not null, 
FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID));

END
GO
