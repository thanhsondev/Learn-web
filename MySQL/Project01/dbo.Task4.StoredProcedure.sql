USE [Little_Lemon]
GO
/****** Object:  StoredProcedure [dbo].[Task4]    Script Date: 3/12/2023 2:20:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Task4]
AS
BEGIN
   MERGE INTO Courses AS target
USING (SELECT 'Kabasa' AS CourseName, 20.00 AS Cost) AS source
ON target.CourseName = source.CourseName
WHEN MATCHED THEN UPDATE SET target.Cost = source.Cost
WHEN NOT MATCHED THEN INSERT (CourseName, Cost) VALUES (source.CourseName, source.Cost);

END
GO
