# Deployment da Aplicação no Azure Static Web Apps

Nesta sessão, iremos realizar o deploy da aplicação no Azure Static Web Apps. Nesse momento você precisará ter uma conta no Azure. 

> Caso você não tenha, você pode criar uma conta gratuita clicando: **[AQUI](https://azure.microsoft.com/free/?WT.mc_id=javascript-75515-gllemos)**. E se você é estudante ou professor, você pode criar uma conta com $100 de crédito e sem cartão de crédito clicando: **[AQUI](https://azure.microsoft.com/free/students/?WT.mc_id=javascript-75515-gllemos)**.

## Criando arquivo de configuração do Azure Static Web Apps

Para evitar problemas em relação a configuração do Azure Static Web Apps, vamos criar um arquivo de configuração para o mesmo. Para isso, vamos criar um arquivo chamado `staticwebapp.config.json` dentro da pasta `client`. O conteúdo do arquivo deve ser o seguinte:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/css/*", "/js/*", "/api/*", "/favicon.ico"]
  }
}
```

O que esse arquivo fará? Ele irá configurar o Azure Static Web Apps para que ele sempre redirecione para a página `index.html` quando uma página não for encontrada. Além disso, ele irá excluir alguns arquivos que não precisam ser enviados para o Azure Static Web Apps.

## Criando o Repositório no GitHub

Para que possamos realizar o deploy da aplicação no Azure Static Web Apps, precisamos criar um repositório da aplicação no GitHub. 

> Caso você não saiba como criar um repositório no GitHub, você pode seguir o tutorial: **[Creating a new repository](https://docs.github.com/en/github/getting-started-with-github/create-a-repo)**.


## Integrando a aplicação com o Azure Static Web Apps

Bom, agora que já temos o projeto no GitHub, agora é o momento que vamos integrar a aplicação com o Azure Static Web Apps. Para isso, abre o Portal do Azure e faça o login com a conta que você criou anteriormente.

Depois, vá até search bar e digite `Static Web Apps`. Clique no serviço que aparecerá.

![image-30](./../../workshop-images/image-30.jpg)

Depois de clicar no serviço, clique em `Create`. Abrirá uma nova janela. Nessa janela, você precisará preencher alguns campos:

- **Subscription**: Selecione a assinatura que você criou anteriormente.
- **Resource Group**: Crie um novo grupo de recursos.
- **Static Web App name**: Digite um nome para o seu aplicativo.
- **Hosting Plan**: Selecione `Free`.
- **Location**: Selecione a região que você deseja.
- **Deployment details**: Selecione `GitHub`.
- **GitHub Account**: Selecione a conta do GitHub que você criou anteriormente ou a conta que você possui.
- **Organization**: Selecione a organização onde se encontra o repositório.
- **Repository**: Selecione o repositório que você criou anteriormente.
- **Branch**: Selecione a branch que você deseja. No meu caso é a `main`.
- **Build Preset**: Selecione `Vue.js`.
- **App location**: Digite `client`.
- **Api location**: Deixe em branco.
- **Output location**: Digite `dist`.

Veja nas imagens abaixo como ficou a configuração:

![image-31](./../../workshop-images/image-31.jpg)

![image-32](./../../workshop-images/image-32.jpg)

Clique em `Review + create` e depois em `Create`. Aguarde alguns minutos até que o Azure Static Web Apps seja criado.

E logo em seguida clique em `Go to resource`.

Ao clicar em `Go to resource`, você será redirecionado para a página do Azure Static Web Apps. Nessa página, você verá algumas informações sobre o seu aplicativo. Veja na imagem abaixo:

![image-33](./../../workshop-images/image-33.jpg)

## Conectando a base de dados no Azure Static Web Apps

Agora que já temos o serviço criado, precisamos conectar a base de dados da aplicação. Para isso, na mesma página do Azure Static Web Apps, clique em `Database Connection (preview)`.

![image-34](./../../workshop-images/image-34.jpg)

Abrirá uma janela. Nessa janela, clique em `Link existing database`.

Novamente, abrirá uma janela. Nessa janela, você precisará preencher alguns campos:

- **Database type**: Selecione `SQL Database`.
- **Subscription**: Selecione a assinatura que você criou anteriormente.
- **Resource Group**: Selecione o grupo de recursos que você criou anteriormente.
- **Resource name**: Selecione o nome do banco de dados que você criou anteriormente.
- **Database name**: Selecione o nome do banco de dados que você criou anteriormente.
- **Username**: Digite o nome do usuário que você criou anteriormente.
- **Password**: Digite a senha que você criou anteriormente.

Se tiver dúvidas, veja na imagem abaixo como ficou a configuração:

![image-35](./../../workshop-images/image-35.jpg)

Antes clicar em `Link`, precisaremos averiguar se o banco de dados está permitindo acessar o Azure Static Web Apps. Para isso, vamos abrir o portal do Azure (sem fechar a outra aba) e vamos até o server do banco de dados que criamos anteriormente.

Vá até `Security` e depois `Networking`. Abrirá uma nova janela. Nessa janela, vá até o final em `Exceptions` e clique em `Allow Azure Services and resources to access this server` e depois em `Save`.

![image-36](./../../workshop-images/image-36.jpg)

Feito isso, agora podemos clicar em: `I acknowledge the steps needed to enable this static web app to connect to my database` e depois em `Link`. 

![image-37](./../../workshop-images/image-37.jpg)


