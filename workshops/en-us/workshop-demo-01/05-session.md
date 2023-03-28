# Creating the configuration file for DAB (Data API Builder)

In this section, we will learn how to configure the configuration file of DAB (Data API Builder) so that we can generate our APIs.

The Data API Builder uses the Azure Databases engine, which requires a configuration file. We will specify which database DAB will connect to and which entities, along with their properties, the API will expose through this file.

To do this, we will use the DAB CLI to initialize the configuration file. To do this, run the command below (in your terminal:

> Changing the information in your connection string and the `demo-01` project folder (or as you have set it up)

```bash
dab init --database-type "mssql" --connection-string "Server=localhost;Database=<database-name>;User ID=<user>;Password=<password>;TrustServerCertificate=true" --host-mode "Development"
```

After running the above command, a file named `dab.config.json` will be created in the root of your project. This file is the DAB configuration file.

> **Note:** The DAB configuration file is a JSON file. You can edit it manually, but it is recommended that you use the DAB CLI to generate the configuration file.

Even though the following message shows up in the terminal, you don't need to worry. The configuration file was created successfully.

![image-17](./../../workshop-images/image-17.jpg)

<details><summary><b>Example of a generated file: dab.config.json</b></summary>
<br/>

```json
{
  "$schema": "https://github.com/Azure/data-api-builder/releases/download/v{dab-version}/dab.draft.schema.json",
  "data-source": {
    "database-type": "mssql",
    "options": {
      "set-session-context": false
    },
    "connection-string": "Server=localhost;Database=<database-name>;User ID=<user>;Password=<password>;TrustServerCertificate=true"
  },
  "runtime": {
    "rest": {
      "enabled": true,
      "path": "/api"
    },
    "graphql": {
      "allow-introspection": true,
      "enabled": true,
      "path": "/graphql"
    },
    "host": {
      "mode": "development",
      "cors": {
        "origins": [],
        "allow-credentials": false
      },
      "authentication": {
        "provider": "StaticWebApps"
      }
    }
  },
  "entities": {}
}
```

</details>
<br/>

You can see that the DAB configuration file is a JSON file. It has some properties that define the type of database that will be used. In this case, in the `data-source` property, you will define which database will be used, which can be: MySQL, PostgreSQL, SQL Server, or another database of your choice.

If you want to get more information about the DAB configuration file, access the **[official documentation](https://github.com/Azure/data-api-builder/blob/main/docs/configuration-file.md)**.

In this file, depending on the number of tables you have, you can define relationships of 1 to 1, 1 to N, and N to N. The sky's the limit here.

## Using DAB_ENVIRONMET 

(include some important information about it here)

## Adding Entities to the Configuration File

Now that we've made this file, we can use it to decide which entities the API will show. To do this, we will use the DAB CLI to generate the configuration file. To do this, run the command below (in your terminal:

```bash
dab add employee --source dbo.employees --permissions "anonymous:*"
```

> If you prefer, you can also add the entities manually to the configuration file. To do this, just add the entity to the dab.config.json file and define the properties you want to expose.

At the moment we run the above command, the DAB CLI will add the `Employee` entity to the configuration file, as shown in the example below:

<details><summary><b>Example of a generated file: dab.config.json</b></summary>
<br/>

```json
"entities": {
    "Employee": {
      "source": "dbo.employees",
      "permissions": [
        {
          "role": "anonymous",
          "actions": [
            "*"
          ]
        }
      ]
    }
```
</details>
<br/>

> **Note:** Entity names are case-sensitive. For example, if you define the entity as `Employee`, DAB will generate the entity as `Employee`. If you define the entity as an employee, DAB will generate the entity as an employee. However, there is a guide to best practices that we recommend you follow. To learn more, access the **[official documentation](https://github.com/Azure/data-api-builder/blob/main/docs/best-practices.md)**.

In the `permissions` part, we define who (in terms of roles) can access the related entity and what actions are intended. And the actions in this case are the CRUD operations: create, read, update, and delete. But in the `role` part, we will set it to `anonymous` for demonstration purposes so that anyone can do the CRUD operations for our `Employee` entity without needing to be authenticated.

> Never use anonymous in production. Always define the roles according to the needs of your project.

Now, let's actually start using our API through the DAB CLI. But we will see that in the next section.

**[⬅️ Back: Session 04](./04-session.md) | **[Next: Session 06 ➡️](./06-session.md)****
