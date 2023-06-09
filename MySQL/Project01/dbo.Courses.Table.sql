USE [Little_Lemon]
GO
/****** Object:  Table [dbo].[Courses]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Courses](
	[CourseName] [varchar](255) NOT NULL,
	[Cost] [decimal](4, 2) NULL,
	[Ingredients] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[CourseName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
