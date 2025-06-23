# Node CEP API

Este projeto é uma API simples em Node.js que permite buscar informações de endereço a partir de um CEP utilizando a API Via CEP.

## Estrutura do Projeto

```
node-cep-api
├── src
│   ├── index.js          # Ponto de entrada da aplicação
│   ├── routes
│   │   └── cep.js        # Rota para buscar endereço pelo CEP
│   └── services
│       └── viaCepService.js # Serviço para interagir com a API Via CEP
├── package.json           # Configuração do npm
└── README.md              # Documentação do projeto
```

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Uso

Para iniciar a aplicação, utilize o comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

### GET /cep/:cep

Este endpoint recebe um CEP como parâmetro e retorna as informações de endereço correspondentes em formato JSON.

#### Exemplo de Requisição

```
GET http://localhost:3000/cep/01001-000
```

#### Exemplo de Resposta

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7087"
}
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas pull requests.