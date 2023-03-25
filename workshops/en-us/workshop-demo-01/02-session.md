# Installation and configuration of DAB 

In this session, we will install and configure the development environment.

## Installation of the .NET 6.0 SDK 

First of all, let's install and configure the development environment. To use DAB, we need to install the **[.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0?WT.mc_id=javascript-75515-gllemos)**.

After the installation, check if the .NET 6.0 SDK is correctly installed by running the following command in the terminal:

```bash
dotnet --list-sdks 
```

## Install the DAB CLI 

To make development easier, we will use the DAB CLI. To install the DAB CLI, run the following command in the terminal:

```bash
dotnet tool install --global Microsoft.DataApiBuilder --version <version_number> 
```

To check the most updated version, you can directly check the tool repository **[HERE](https://github.com/Azure/data-api-builder/tags)**.

If you have an older version of DAB CLI installed, you can update to the latest version by running the following command:

```bash
dotnet tool update --global Microsoft.DataApiBuilder --version <version_number> 
```

Then type the following command to check if the package is properly installed:

```bash
dab --version  
```

If the version of DAB CLI shows up, everything is working fine.

Please also install the other tools described in the prerequisites so that we can proceed with the workshop.

Let's move on now!

**[⬅️ Back: Intro](./01-intro.md)**
| **[Nesst: Session 03 ➡️](./03-session.md)**