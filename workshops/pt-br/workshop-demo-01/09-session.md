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

Bom, agora que já temos o projeto no GitHub, agora é o momento que vamos integrar a aplicação com o Azure Static Web Apps. Para isso, usaremos a extensão do Azure Static Web Apps no Visual Studio Code. Você pode instalar a extensão clicando **[AQUI](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps&WT.mc_id=javascript-75515-gllemos)**.

![image-30](./../../workshop-images/image-30.jpg)

Clique no ícone do Azure que estará no canto inferior esquerdo do Visual Studio Code. Clique em `Sign in to Azure...` e faça o login com a conta que você criou anteriormente.

![image-31](./../../workshop-images/image-31.jpg)

Após fazer o login, clique com o botão direito do mouse em `Create Static Web App` e selecione o repositório que você criou anteriormente.

![image-32](./../../workshop-images/image-32.jpg)




## Conectando a base de dados no Azure Static Web Apps

Para que possamos conectar a base de dados no Azure Static Web Apps, precisamos seguir alguns passos.

1. Abre o site do `Portal do Azure` e faça o login com a conta que você criou anteriormente.
2. 