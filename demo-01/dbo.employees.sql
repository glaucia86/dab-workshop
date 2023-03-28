CREATE TABLE [dbo].[employees] (
    [employee_id] INT NULL IDENTITY(1, 1) PRIMARY KEY,
    [name] NVARCHAR(100) NULL,
    [job_role] NVARCHAR(100) NULL,
    [salary] DECIMAL(12, 2) NULL,
    [employee_registration] INT NULL CONSTRAINT [Employee_employee_registration_key] UNIQUE NONCLUSTERED
);