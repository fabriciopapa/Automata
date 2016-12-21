
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/20/2016 12:36:37
-- Generated from EDMX file: C:\Users\HP\Documents\Automata\03 - Automata.Business\Automata.Entities\AutomataEntitiesModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Automata];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Parameters_ParameterTypes]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Parameters] DROP CONSTRAINT [FK_Parameters_ParameterTypes];
GO
IF OBJECT_ID(N'[dbo].[FK_Parameters_Procedures]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Parameters] DROP CONSTRAINT [FK_Parameters_Procedures];
GO
IF OBJECT_ID(N'[dbo].[FK_Procedures_Assemblies]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Procedures] DROP CONSTRAINT [FK_Procedures_Assemblies];
GO
IF OBJECT_ID(N'[dbo].[FK_ProceduresXTest_Procedures]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TestProcedures] DROP CONSTRAINT [FK_ProceduresXTest_Procedures];
GO
IF OBJECT_ID(N'[dbo].[FK_ProceduresXTest_Tests]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TestProcedures] DROP CONSTRAINT [FK_ProceduresXTest_Tests];
GO
IF OBJECT_ID(N'[dbo].[FK_TestParameters_TestProcedure]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TestParameters] DROP CONSTRAINT [FK_TestParameters_TestProcedure];
GO
IF OBJECT_ID(N'[dbo].[FK_Tests_Project]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Tests] DROP CONSTRAINT [FK_Tests_Project];
GO
IF OBJECT_ID(N'[dbo].[FK_Users_Assemblies]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Assemblies] DROP CONSTRAINT [FK_Users_Assemblies];
GO
IF OBJECT_ID(N'[dbo].[FK_Users_Projects]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Projects] DROP CONSTRAINT [FK_Users_Projects];
GO
IF OBJECT_ID(N'[dbo].[FK_ValuesXTestProcedure_Parameters]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[TestParameters] DROP CONSTRAINT [FK_ValuesXTestProcedure_Parameters];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Assemblies]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Assemblies];
GO
IF OBJECT_ID(N'[dbo].[Parameters]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Parameters];
GO
IF OBJECT_ID(N'[dbo].[ParameterTypes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ParameterTypes];
GO
IF OBJECT_ID(N'[dbo].[Procedures]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Procedures];
GO
IF OBJECT_ID(N'[dbo].[Projects]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Projects];
GO
IF OBJECT_ID(N'[dbo].[TestParameters]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TestParameters];
GO
IF OBJECT_ID(N'[dbo].[TestProcedures]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TestProcedures];
GO
IF OBJECT_ID(N'[dbo].[Tests]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Tests];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Assemblies'
CREATE TABLE [dbo].[Assemblies] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Code] varbinary(max)  NOT NULL,
    [Public] bit  NOT NULL,
    [Active] bit  NOT NULL,
    [User_PK_Id] int  NOT NULL
);
GO

-- Creating table 'Parameters'
CREATE TABLE [dbo].[Parameters] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Position] int  NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Active] bit  NOT NULL,
    [ParameterType_PK_Type] varchar(50)  NOT NULL,
    [Procedure_PK_Id] int  NOT NULL
);
GO

-- Creating table 'ParameterTypes'
CREATE TABLE [dbo].[ParameterTypes] (
    [PK_Type] varchar(50)  NOT NULL
);
GO

-- Creating table 'Procedures'
CREATE TABLE [dbo].[Procedures] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(100)  NOT NULL,
    [Description] varchar(400)  NOT NULL,
    [Active] bit  NOT NULL,
    [Assembly_PK_Id] int  NOT NULL
);
GO

-- Creating table 'Projects'
CREATE TABLE [dbo].[Projects] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Url] varchar(max)  NOT NULL,
    [Active] bit  NOT NULL,
    [User_PK_Id] int  NOT NULL
);
GO

-- Creating table 'TestParameters'
CREATE TABLE [dbo].[TestParameters] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Value] varchar(200)  NOT NULL,
    [Active] bit  NOT NULL,
    [Parameter_PK_Id] int  NOT NULL,
    [TestProcedure_PK_Id] int  NOT NULL
);
GO

-- Creating table 'TestProcedures'
CREATE TABLE [dbo].[TestProcedures] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Order] int  NOT NULL,
    [Active] bit  NOT NULL,
    [Procedure_PK_Id] int  NOT NULL,
    [Test_PK_Id] int  NOT NULL
);
GO

-- Creating table 'Tests'
CREATE TABLE [dbo].[Tests] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(200)  NOT NULL,
    [Description] varchar(max)  NOT NULL,
    [Active] bit  NOT NULL,
    [Project_PK_Id] int  NOT NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [UserName] varchar(50)  NOT NULL,
    [Password] varchar(max)  NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [SecretAnswer] varchar(50)  NOT NULL,
    [Active] bit  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [PK_Id] in table 'Assemblies'
ALTER TABLE [dbo].[Assemblies]
ADD CONSTRAINT [PK_Assemblies]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- Creating primary key on [PK_Id] in table 'Parameters'
ALTER TABLE [dbo].[Parameters]
ADD CONSTRAINT [PK_Parameters]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- Creating primary key on [PK_Type] in table 'ParameterTypes'
ALTER TABLE [dbo].[ParameterTypes]
ADD CONSTRAINT [PK_ParameterTypes]
    PRIMARY KEY CLUSTERED ([PK_Type] ASC);
GO

-- Creating primary key on [PK_Id] in table 'Procedures'
ALTER TABLE [dbo].[Procedures]
ADD CONSTRAINT [PK_Procedures]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- Creating primary key on [PK_Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [PK_Projects]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- Creating primary key on [PK_Id] in table 'TestParameters'
ALTER TABLE [dbo].[TestParameters]
ADD CONSTRAINT [PK_TestParameters]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- Creating primary key on [PK_Id] in table 'TestProcedures'
ALTER TABLE [dbo].[TestProcedures]
ADD CONSTRAINT [PK_TestProcedures]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- Creating primary key on [PK_Id] in table 'Tests'
ALTER TABLE [dbo].[Tests]
ADD CONSTRAINT [PK_Tests]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- Creating primary key on [PK_Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([PK_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Assembly_PK_Id] in table 'Procedures'
ALTER TABLE [dbo].[Procedures]
ADD CONSTRAINT [FK_Procedures_Assemblies]
    FOREIGN KEY ([Assembly_PK_Id])
    REFERENCES [dbo].[Assemblies]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Procedures_Assemblies'
CREATE INDEX [IX_FK_Procedures_Assemblies]
ON [dbo].[Procedures]
    ([Assembly_PK_Id]);
GO

-- Creating foreign key on [User_PK_Id] in table 'Assemblies'
ALTER TABLE [dbo].[Assemblies]
ADD CONSTRAINT [FK_Users_Assemblies]
    FOREIGN KEY ([User_PK_Id])
    REFERENCES [dbo].[Users]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Users_Assemblies'
CREATE INDEX [IX_FK_Users_Assemblies]
ON [dbo].[Assemblies]
    ([User_PK_Id]);
GO

-- Creating foreign key on [ParameterType_PK_Type] in table 'Parameters'
ALTER TABLE [dbo].[Parameters]
ADD CONSTRAINT [FK_Parameters_ParameterTypes]
    FOREIGN KEY ([ParameterType_PK_Type])
    REFERENCES [dbo].[ParameterTypes]
        ([PK_Type])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Parameters_ParameterTypes'
CREATE INDEX [IX_FK_Parameters_ParameterTypes]
ON [dbo].[Parameters]
    ([ParameterType_PK_Type]);
GO

-- Creating foreign key on [Procedure_PK_Id] in table 'Parameters'
ALTER TABLE [dbo].[Parameters]
ADD CONSTRAINT [FK_Parameters_Procedures]
    FOREIGN KEY ([Procedure_PK_Id])
    REFERENCES [dbo].[Procedures]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Parameters_Procedures'
CREATE INDEX [IX_FK_Parameters_Procedures]
ON [dbo].[Parameters]
    ([Procedure_PK_Id]);
GO

-- Creating foreign key on [Parameter_PK_Id] in table 'TestParameters'
ALTER TABLE [dbo].[TestParameters]
ADD CONSTRAINT [FK_ValuesXTestProcedure_Parameters]
    FOREIGN KEY ([Parameter_PK_Id])
    REFERENCES [dbo].[Parameters]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ValuesXTestProcedure_Parameters'
CREATE INDEX [IX_FK_ValuesXTestProcedure_Parameters]
ON [dbo].[TestParameters]
    ([Parameter_PK_Id]);
GO

-- Creating foreign key on [Procedure_PK_Id] in table 'TestProcedures'
ALTER TABLE [dbo].[TestProcedures]
ADD CONSTRAINT [FK_ProceduresXTest_Procedures]
    FOREIGN KEY ([Procedure_PK_Id])
    REFERENCES [dbo].[Procedures]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProceduresXTest_Procedures'
CREATE INDEX [IX_FK_ProceduresXTest_Procedures]
ON [dbo].[TestProcedures]
    ([Procedure_PK_Id]);
GO

-- Creating foreign key on [Project_PK_Id] in table 'Tests'
ALTER TABLE [dbo].[Tests]
ADD CONSTRAINT [FK_Tests_Project]
    FOREIGN KEY ([Project_PK_Id])
    REFERENCES [dbo].[Projects]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Tests_Project'
CREATE INDEX [IX_FK_Tests_Project]
ON [dbo].[Tests]
    ([Project_PK_Id]);
GO

-- Creating foreign key on [User_PK_Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [FK_Users_Projects]
    FOREIGN KEY ([User_PK_Id])
    REFERENCES [dbo].[Users]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Users_Projects'
CREATE INDEX [IX_FK_Users_Projects]
ON [dbo].[Projects]
    ([User_PK_Id]);
GO

-- Creating foreign key on [TestProcedure_PK_Id] in table 'TestParameters'
ALTER TABLE [dbo].[TestParameters]
ADD CONSTRAINT [FK_TestParameters_TestProcedure]
    FOREIGN KEY ([TestProcedure_PK_Id])
    REFERENCES [dbo].[TestProcedures]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TestParameters_TestProcedure'
CREATE INDEX [IX_FK_TestParameters_TestProcedure]
ON [dbo].[TestParameters]
    ([TestProcedure_PK_Id]);
GO

-- Creating foreign key on [Test_PK_Id] in table 'TestProcedures'
ALTER TABLE [dbo].[TestProcedures]
ADD CONSTRAINT [FK_ProceduresXTest_Tests]
    FOREIGN KEY ([Test_PK_Id])
    REFERENCES [dbo].[Tests]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProceduresXTest_Tests'
CREATE INDEX [IX_FK_ProceduresXTest_Tests]
ON [dbo].[TestProcedures]
    ([Test_PK_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------