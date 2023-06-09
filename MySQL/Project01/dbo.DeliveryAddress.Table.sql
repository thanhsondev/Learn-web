USE [Little_Lemon]
GO
/****** Object:  Table [dbo].[DeliveryAddress]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeliveryAddress](
	[ID] [int] NOT NULL,
	[Address] [varchar](255) NOT NULL,
	[Type] [varchar](255) NOT NULL,
	[CustomerID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DeliveryAddress] ADD  DEFAULT ('Private') FOR [Type]
GO
ALTER TABLE [dbo].[DeliveryAddress]  WITH CHECK ADD FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customers] ([CustomerID])
GO
