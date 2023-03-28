CREATE TABLE [dbo].[employees] (
    [employee_id] INT NOT NULL IDENTITY(1, 1) PRIMARY KEY,
    [name] NVARCHAR(100) NOT NULL,
    [job_role] NVARCHAR(100) NOT NULL,
    [salary] DECIMAL(12, 2) NOT NULL,
    [employee_registration] INT NOT NULL CONSTRAINT [Employee_employee_registration_key] UNIQUE NONCLUSTERED
);