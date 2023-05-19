USE [Little_Lemon]
GO
/****** Object:  Table [dbo].[Bookings]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bookings](
	[BookingID] [int] NULL,
	[BookingDate] [date] NULL,
	[TableNumber] [int] NULL,
	[NumberOfGuests] [int] NULL,
	[CustomerID] [int] NULL
) ON [PRIMARY]
GO
