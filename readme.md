# Lumina Fest Weather API

API em **Node.js + Express + TypeScript** para retornar a previsão do tempo durante o festival **Lumina Fest** (Aurora).
A API fornece dados simplificados de clima para os dias e horários do evento, pronta para integração com front-end ou chatbots.

---

## Tecnologias

* Node.js
* Express
* TypeScript
* Axios (para consumir a API de clima)
* Vercel (para deploy serverless)

---

## Setup

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/lumina-fest-api.git
cd lumina-fest-api
```

2. Instale as dependências:

```bash
npm install
```

3. Compile o TypeScript:

```bash
npm run build
```

4. Rode localmente:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000/api/weather`.

---

## Endpoints

### GET `/api/weather`

Retorna a previsão do tempo filtrada para os dias e horários do festival.

**Query parameters:**

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| start     | string | Data inicial no formato `YYYY-MM-DD` |
| end       | string | Data final no formato `YYYY-MM-DD`   |

**Exemplo:**

```http
GET /api/weather?start=2025-09-17&end=2025-09-19
```

**Retorno:**

```json
[
  {
    "day": "day1",
    "weather": [
      {
        "hour": "17:00",
        "temperature": 23.4,
        "humidity": 45,
        "rain": 0,
        "wind_speed": 5.6
      },
      {
        "hour": "18:00",
        "temperature": 22.8,
        "humidity": 50,
        "rain": 0,
        "wind_speed": 5.0
      }
    ]
  },
  {
    "day": "day2",
    "weather": [
      ...
    ]
  }
]
```

> A API retorna somente os horários **17:00–22:00**, que são os do festival.

---

## Deploy no Vercel

1. Instale o CLI do Vercel:

```bash
npm i -g vercel
```

2. Faça login:

```bash
vercel login
```

3. No diretório do projeto, rode:

```bash
vercel
```

A rota `/api/weather` estará disponível na URL fornecida pelo Vercel.

---

## Observações

* A latitude e longitude são fixas para a cidade do festival (Aurora).
* O retorno já vem filtrado e simplificado para facilitar o consumo pelo front-end ou chatbot.
* Qualquer dúvida sobre o uso da API ou novas features, abra uma issue no repositório.