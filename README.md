# APIGateway_full_06
Trabalho de API Gateway focado no desenvolvimdneto de uma API na linguagem Node


# Programas para Uso
-Postman: Testar as rotas desenvolvidas<br/>
-Docker: Executar a imagem para rodar a aplicação<br/>

# Rotas
POST /api/v1/os<br/>
GET /api/v1/os/:numero<br/>
GET /api/v1/os/<br/>
POST /api/v1/os/:numero/equipamento<br/>
GET /api/v1/os/:numero/equipamento/:indice<br/>
GET /api/v1/os/:numero/equipamento/<br/>
GET /api/v1/os/equipamento/:descricao<br/>

Documento Postman: https://documenter.getpostman.com/view/15197024/2s9YR56F33<br/>

# Diretório:
bdJSON > db.JSON: Arquivo usado como banco de dados de extensão JSON.<br/>
routes> api.js: Arquivo principal com os enredeços de rotas desenvolvidos<br/>
index.js: Arquivo de inicialização do servidor executado no DockerFile<br/>


