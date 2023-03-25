# Instalação e Configuração do DAB

Nessa sessão, vamos instalar e configurar o ambiente de desenvolvimento.

## Instalação do .NET 6.0 SDK

Antes de mais nada, vamos instalar e configurar o ambiente de desenvolvimento.
Para fazer uso do DAB, precisamos instalar o **[.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0?WT.mc_id=javascript-75515-gllemos)**.

Após a instalação, confira se o .NET 6.0 SDK está instalado corretamente, executando o seguinte comando no terminal:

```bash
dotnet --list-sdks
```

## Instalando o DAB CLI

Para facilitar no momento de desenvolver, faremos uso do DAB CLI. Para instalar o DAB CLI, execute o seguinte comando no terminal:

```bash
dotnet tool install --global Microsoft.DataApiBuilder --version <numero_versao>
```

> para verificar a versão mais atualizada, vocês podem conferir diretamente no repositório da ferramenta **[AQUI](https://github.com/Azure/data-api-builder/tags)**

Se você tiver uma versão anterior do DAB CLI instalada, você pode atualizar para a versão mais recente executando o seguinte comando:

```bash
dotnet tool update --global Microsoft.DataApiBuilder --version <version_number>
```

Depois digite o comando para saber se está devidadmente instalado o pacote

```bash
dab --version
```

Se aparecer a versão do DAB CLI, está tudo certo.

Procure instalar também as demais ferramentas descritas no _pré-requisitos_ para que possamos dar continuidade no workshop.

Vamos agora prosseguir!

**[⬅️ Voltar: Intro](./01-intro.md)**
| **[Próximo: Sessão 03 ➡️](./03-session.md)**

