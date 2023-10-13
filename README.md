# APIGateway_full_06
Trabalho de API Gateway focado no desenvolvimdneto de uma API na linguagem Node


# Programas para Uso
-Postman: Testar as rotas desenvolvidas\n
-Docker: Executar a imagem para rodar a aplicação

# Rotas
POST /api/v1/os
GET /api/v1/os/:numero
GET /api/v1/os/
POST /api/v1/os/:numero/equipamento
GET /api/v1/os/:numero/equipamento/:indice
GET /api/v1/os/:numero/equipamento/
GET /api/v1/os/equipamento/:descricao

Documento Postman: https://documenter.getpostman.com/view/15197024/2s9YR56F33

# Diretório:
bdJSON > db.JSON: Arquivo usado como banco de dados de extensão JSON.
routes> api.js: Arquivo principal com os enredeços de rotas desenvolvidos
index.js: Arquivo de inicialização do servidor executado no DockerFile


