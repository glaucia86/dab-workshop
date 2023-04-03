# Criando o arquivo de configuração para o DAB (Data API builder)

Nessa sessão aprenderemos a configurar o arquivo de configuração do DAB (Data API builder) para que possamos gerar as nossas APIs.

O Data API builder faz uso do mecanismo do Azure Databases que precisa de um arquivo de configuração. Através desse arquivo definiremos qual banco de dados o DAB se conectará e quais entidades serão expostas pela API, juntamente com suas propriedades.

Para isso, usaremos o DAB CLI para inicializarmos o arquivo de configuração. Para isso, execute o comando abaixo (no seu terminal):

> Trocando as informações da sua connection string e dentro da pasta do projeto `demo-01` (ou conforme você definiu)

```bash
dab init --database-type "mssql" --connection-string "Server=localhost;Database=<database-name>;User ID=<user>;Password=<password>;TrustServerCertificate=true" --host-mode "Development"
``` 

Depois de executar o comando acima, criará um arquivo chamado `dab.config.json` na raiz do seu projeto. Esse arquivo é o arquivo de configuração do DAB.

> **Observação:** O arquivo de configuração do DAB é um arquivo JSON. Você pode editá-lo manualmente, mas é recomendado que você use o DAB CLI para gerar o arquivo de configuração.

Por mais que apareça a seguinte mensagem no terminal, não se preocupe, o arquivo de configuração foi criado com sucesso.

![image-17](./../../workshop-images/image-17.jpg)

<details><summary><b>Exemplo de arquivo gerado: dab.config.json</b></summary>
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

Você pode ver que o arquivo de configuração do DAB é um arquivo JSON. Ele possui algumas propriedades que definem o tipo de banco de dados que será usado, nesse caso em `data-source` é justamente onde você vai definir qual será essa base, que pode ser: MySQL, PostgreSQL, SQL Server ou outra base de dados de sua escolha. 

Se você deseja obter mais informações sobre o arquivo de configuração do DAB, acesse a **[documentação oficial](https://github.com/Azure/data-api-builder/blob/main/docs/configuration-file.md)**

Nesse arquivo, dependendo da quantidade de tabelas que você tem, você pode definir relacionamentos de 1 para 1, 1 para N e N para N. O céu é o limite aqui.

## Configurando as variáveis de ambiente da connection string 

Se vocês observarem no arquivo `dab.config.json`, a nossa connection string está exposta. E, isso é um problema que precisamos resolver. Para isso, peço que você abre o arquivo `dab.config.json` e substitua a connection string pelo seguinte:

<details><summary><b>dab.config.json</b></summary>
<br/>

```json
"connection-string": "@env('DATABASE_CONNECTION_STRING')"
```

</details>
<br/>

Talvez você esteja se perguntando: "Mas, como eu vou definir essa variável de ambiente?" Bom existem três formas de fazer isso. 

### Caso 1: Usando o Prompt de Comando

Se você estiver usando o Prompt de Comando, você pode definir a variável de ambiente da seguinte forma:

```bash
export DATABASE_CONNECTION_STRING='<SUA-CONNECTION-STRING>'
```

### Caso 2: Usando o PowerShell

Se você estiver usando o PowerShell, você pode definir a variável de ambiente da seguinte forma:

```powershell
$env:DATABASE_CONNECTION_STRING='<SUA-CONNECTION-STRING>'
```

Mas, pode acontecer de você não conseguir definir a variável de ambiente na sua máquina dessas formas. Vamos para o terceiro caso.

### Caso 3: Definindo variável de ambiente no computador

#### Usuários Windows

Se você for usuário de Windows, você pode definir a variável de ambiente da seguinte forma:

1. Clique com o botão direito do mouse no botão Iniciar e selecione **Painel de Controle**.
2. Selecione **Sistema e Segurança** e, em seguida, **Sistema**.
3. Clique em **Configurações avançadas do sistema**.
4. Clique em **Variáveis de Ambiente**.
5. Inclua a connection string em **Variáveis dos Sistema**.
6. Clique em **Novo**. Em **Nome da variável**, digite `DATABASE_CONNECTION_STRING`. Em **Valor da variável**, digite a connection string do seu banco de dados.
7. Clique em **OK** para salvar as alterações.

#### Usuários Linux

Se você for usuário de Linux, você pode definir a variável de ambiente da seguinte forma:

1. Abra o arquivo `~/.bashrc` no seu editor de texto favorito.
2.  Adicione a seguinte linha ao final do arquivo: `export DATABASE_CONNECTION_STRING='<SUA-CONNECTION-STRING>'`
3.  Salve o arquivo e feche-o.

#### Usuários Mac

Se você for usuário de Mac, você pode definir a variável de ambiente da seguinte forma:

1. Abra o arquivo `~/.bash_profile` no seu editor de texto favorito.
2. Adicione a seguinte linha ao final do arquivo: `export DATABASE_CONNECTION_STRING='<SUA-CONNECTION-STRING>'`
3. Salve o arquivo e feche-o.

> **Observação:** toda vez que você for criar uma nova connection string para diferentes bancos de dados, você precisará definir uma nova variável de ambiente. Cuida para não confundir as variáveis de ambiente.

Perfeito! Agora que já definimos a connection string, vamos para o próximo passo.

## Adicionando Entidades ao arquivo de configuração

Agora que já criamos esse arquivo, podemos definir quais entidades serão expostas pela API. Para isso, vamos usar o DAB CLI para gerar o arquivo de configuração. Para isso, execute o comando abaixo (no seu terminal):

```bash
dab add employee --source dbo.employees --permissions "anonymous:*"
```

> Se preferir, você também pode adicionar as entidades manualmente no arquivo de configuração. Para isso, basta adicionar a entidade no arquivo `dab.config.json` e definir as propriedades que você deseja expor.

No momento em que executamos o comando acima, o DAB CLI irá adicionar a entidade `Employee` no arquivo de configuração, conforme o exemplo abaixo:

<details><summary><b>Exemplo de arquivo gerado: dab.config.json</b></summary>
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

> Observação: os nomes das entidades são case-sensitive. Por exemplo, se você definir a entidade como `Employee`, o DAB irá gerar a entidade como `Employee`. Se você definir a entidade como `employee`, o DAB irá gerar a entidade como `employee`. Porém, existem um guia de boas práticas que recomendamos que você siga. Para saber mais, acesse a **[documentação oficial](https://github.com/Azure/data-api-builder/blob/main/docs/best-practices.md)**

Na parte de `permissions` é onde a gente define quem (em termos de roles) quem pode acessar a entidade relacionada e quais ações pretendidas. E, as ações nesse caso aqui são as operações CRUD: create, read, update e delete. Porém, na parte de `role`, como fins de demonstração, estaremos definindo como `anonymous` para que qualquer pessoa, sem necessidade de ser autenticado, execute as operações CRUD relacionadas a nossa entidade `Employee`.

> Nunca use o `anonymous` em produção. Sempre defina as roles de acordo com a necessidade do seu projeto.

## Configurando o CORS

O CORS é um mecanismo que permite que um site acesse recursos de um servidor em um domínio diferente do seu. Por exemplo, se você tem um site em `https://www.contoso.com` e deseja acessar um recurso em `https://www.fabrikam.com`, o CORS irá permitir que você faça isso.

Já com o intuito de facilitar, pois estaremos integrando o DAB com o nosso frontend, vamos configurar o CORS para que ele permita que qualquer site acesse a nossa API.

Se vocês observarem, no arquivo `dab.config.json`, existe uma propriedade chamada `cors`. Basta adicionar o valor `*` para que o CORS permita que qualquer site acesse a nossa API.

<details><summary><b>dab.config.json</b></summary>
<br/>

```json
(...)
"host": {
      "mode": "development",
      "cors": {
        "origins": ["*"],
        "allow-credentials": false
      },
      "authentication": {
        "provider": "StaticWebApps"
      }
    }
  
(...)
```

</details>
<br/>

Pronto! Vamos agora começar de fato a usar a nossa API através do DAB CLI. Mas, veremos isso na próxima sessão.

**[⬅️ Voltar: Sessão 04](./04-session.md) | **[Próximo: Sessão 06 ➡️](./06-session.md)****







