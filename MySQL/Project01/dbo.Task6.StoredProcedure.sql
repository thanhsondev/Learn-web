USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task6]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Task6]
AS
BEGIN
Alter table Courses add Ingredients  VARCHAR(255);
END
GO
