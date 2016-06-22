
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 06/19/2016 21:20:06
-- Generated from EDMX file: C:\Users\Papeitor\Documents\Visual Studio 2013\Projects\Automata\04 - AutomataEntitiesLayer\AutomataEntitiesModel.edmx
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

IF OBJECT_ID(N'[dbo].[FK_Users_Projects]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Projects] DROP CONSTRAINT [FK_Users_Projects];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Projects]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Projects];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Projects'
CREATE TABLE [dbo].[Projects] (
    [PK_Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Url] varchar(max)  NOT NULL,
    [Active] bit  NOT NULL,
    [FK_Users_Projects_Projects_PK_Id] int  NOT NULL
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

-- Creating primary key on [PK_Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [PK_Projects]
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

-- Creating foreign key on [FK_Users_Projects_Projects_PK_Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [FK_Users_Projects]
    FOREIGN KEY ([FK_Users_Projects_Projects_PK_Id])
    REFERENCES [dbo].[Users]
        ([PK_Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Users_Projects'
CREATE INDEX [IX_FK_Users_Projects]
ON [dbo].[Projects]
    ([FK_Users_Projects_Projects_PK_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------