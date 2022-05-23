# Project Setup

In order to spin up the project, in the root create .env with these below config variables, with your own values for firebase config.

# express server config

PORT=8080\
HOST_URL=http://localhost:8080\

# firebase database config

API_KEY=""\
AUTH_DOMAIN=""\
PROJECT_ID=""\
STORAGE_BUCKET=""\
MESSAGING_SENDER_ID=""\
APP_ID=""\

After that run this command

```bash
npm install && npm start
```

# Routes

POST - localhost:8080/api/student\
GET  - localhost:8080/api/student\
GET  - localhost:8080/api/student/:id\
PATCH - localhost:8080/api/student/:id\
DELETE - localhost:8080/api/student/:id\
