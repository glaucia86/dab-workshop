# Usando o Data API builder com Azure SQL Database

Nessa sessão, aprenderemos como usar o Data API builder para conectar a nossa API com o banco de dados Azure SQL Database.

Agora que já fizemos toda a configuração do nosso banco de dados usando o DAB CLI na sessão anterior, agora estamos prontos para usar a nossa API. Para isso, execute o seguinte comando:

```bash
dab start --no-https-redirect
```

> **Observação:** O comando `dab start --no-https-redirect` iniciará o servidor do DAB e expor a nossa API. Para parar o servidor, basta pressionar `Ctrl + C`.

Se ao executar o comando e aparecer a mensagem conforme a imagem abaixo, significa que o servidor foi iniciado com sucesso. Note que a porta indicada é a `5000`.

![image-18](./../../workshop-images/image-18.jpg)

## Executando os Endpoints 

Agora é o momento que devemos testar a nossa API. Para isso, vamos usar o **[Postman](https://www.postman.com/)**. Mas, fica à vontade de usar qualquer outra ferramenta que você preferir.

Como a nossa entidade é `employee`, a rota será: `/api/employee`

Os verbos HTTP que possui suporte são:

- `GET`: para obter dados
- `POST`: para criar dados
- `PUT`: para atualizar dados
- `PATCH`: para atualizar dados parcialmente
- `DELETE`: para deletar dados

Vamos testar agora todas as rotas!

## Rota: POST

Para criar um novo empregado, abre o Postman e crie uma nova requisição:

- Tipo: `POST`: `http://localhost:5000/api/employee`

No Postman escolha a opção `Body -> raw` e inclua o seguinte JSON:

```json
{
    "name": "John Doe",
    "job_role": "Developer",
    "salary": 9000,
    "employee_registration": 997733
}
```

Veja a imagem abaixo:

![image-19](./../../workshop-images/image-19.jpg)

E para ter certeza de que gravou na base de dados, abre o Azure Data Studio e execute o seguinte comando:

```sql
SELECT * FROM employees
```

Veja a imagem abaixo:

![image-20](./../../workshop-images/image-20.jpg)

Já possuo alguns dados na minha base de dados, mas você pode ver que foi criado um novo empregado.

## Rota: GET

Para obter todos os empregados, abre o Postman e crie uma nova requisição:

- Tipo: `GET`: `http://localhost:5000/api/employee`

Retornará todos os empregados cadastrados.

![image-21](./../../workshop-images/image-21.jpg)

## Rota: GET by ID

Para obter um empregado específico, abre o Postman e crie uma nova requisição:

- Tipo: `GET`: `localhost:5000/api/employee/employee_id/2`

Retornará o empregado com o ID 2.

![image-22](./../../workshop-images/image-22.jpg)

Observe que a rota é composta por 3 partes:

- `/api/employee`: é a rota base
- `/employee_id`: é a primary key da coluna
- `/2`: é o valor da primary key

## Rota: PUT

Para atualizar um empregado, abre o Postman e crie uma nova requisição:

- Tipo: `PUT`: `http://localhost:5000/api/employee/employee_id/3`

No Postman escolha a opção `Body -> raw` e inclua o seguinte JSON:

```json
{
    "name": "John Smith",
    "job_role": "Program Manager",
    "salary": 8000.00,
    "employee_registration": 448811
}
```

![image-23](./../../workshop-images/image-23.jpg)

## Rota: DELETE

Para deletar um empregado, abre o Postman e crie uma nova requisição:

- Tipo: `DELETE`: `http://localhost:5000/api/employee/employee_id/3`

E para ter certeza de que deletou na base de dados, abre o Azure Data Studio e execute o seguinte comando:

```sql
SELECT * FROM employees
```

![image-24](./../../workshop-images/image-24.jpg)

Se deletou com sucesso, o registro não será mais exibido.

Se todas essas rotas foram executadas com sucesso, parabéns! Agora temos que integrar a nossa API com o nosso Frontend. Para isso, vamos para a próxima sessão.

**[⬅️ Voltar: Sessão 05](./05-session.md) | **[Próximo: Sessão 07 ➡️](./07-session.md)****