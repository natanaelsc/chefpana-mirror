# Backend do Projeto ChefePana


# Analise de Requisitos
Legenda
- RF = Requititos funcionais
- RNF = Requititos não funcionais
- RN = Regra de negocio

# Cadastro de Usuário
**RF**
- Deve ser possível cadastrar um novo usuário

**RN**
- Não deve ser possível cadastrar um novo usuário com email já existente.
- Não deve ser possível alterar o email do usuário já cadastrado.

# Acesso ao sistema
**RF**
- Deve ser possível acessar o sistema apenas por usuários cadastrados.

**RN**
- O Acesso ao sistema do usuário deverá ser feito pro email e senha.
- Não deve ser possível acessar o sistema com email e/ou senha incorreto.


# Requititos Não Funcionais do Projeto
- A aplicação deverá utilizar banco de dados PostgreSQL.
- O backend da aplicação deverá ser desenvolvido em NodeJs.
- A Biblioteca do Express deverá ser utilizada.
- Deverá ser usado o Typescrips apenas em ambiente de desenvovimento para informação de tipagem de todas as variáveis do projeto.
- Deverá ser usado o ORM Prima IO e seu conjuto de kit ferramentas de danco de dados PostgreSQL para auxiliar no desenvolvimento do projeto.
- Deverá ser usado BCRYPT para criptografar as senhas armazenadas no banco de dados
- Deverá ser usado JWT para realizar autenticação do usuário na aplicação.
- Deverá ser utilizado principios SOLID e Clean Code.
