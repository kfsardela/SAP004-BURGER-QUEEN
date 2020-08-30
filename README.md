# Friends Burger

## Índice

* [1. Definição de Produto](#1-definição-de-produto)
* [2. Usuário](#2-usuário)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Protótipo](#4-protótipo)
* [5. Testes de usabilidade](#5-testes-de-usabilidade)
* [6. Interface](#6-interface)
* [7. Instalação do projeto](#7-Instalação-do-projeto)
* [8. Considerações técnicas](#8-considerações-técnicas)
* [9. Implementações Futuras](#9-Implementações-Futuras)
* [Autoras](#Autoras)

## 1. Definição do produto
Friends Burger é uma plataforma desenvolvida para uma pequena hamburgueria que está crescendo e necessita de uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

 [Clique aqui](https://burger-queen-sap004.web.app/) para acessar o Friends Burger.

## 2. Usuário

O Projeto foi pensado e desenvolvido para funcionários de um restaurante, como o funcionário que anota os pedidos dos clientes, e o funcionário que prepara os pedios. 

## 3. Funcionalidades
Para esse projeto, nos foi passado as Historias de Usuário abaixo, todas foram implementadas.
* História de usuário 1: Usuário deve ter seu perfil (login/senha) para acessar o sistema.
Critérios de aceitação: Criar login e senha;
Registar tipo de usuário (cozinha / salão), login e senha;
Entrar na tela correta para cada usuário.

* História de usuário 2: Garçom/Garçonete deve poder anotar o seu pedido. Critérios de aceitação: Anotar o nome e mesa;
Adicionar produtos aos pedidos; 
Excluir produtos; 
Ver resumo e o total da compra; 
Enviar o pedido para a cozinha (guardar em algum banco de dados).

* História de usuário 3: Chefe de cozinha deve ver os pedidos. Critérios de aceitação:
Ver os pedidos à medida em que são feitos;
Marcar os pedidos que foram preparados e estão prontos para serem servidos;
Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

* História de usuário 4: Garçom/Garçonete deve ver os pedidos prontos para servir. Critérios de aceitação: 
Ver a lista de pedidos prontos para servir;
Marque os pedidos que foram entregues.


## 4. Protótipo 
  * Pagina de Login:

  <img src="./public/images/figma_login.png" alt="" width="500px">

  * Pagina de Cadastro:

  <img src="./public/images/figma_register.png" alt="" width="500px">

  * Pagina do salão:

  <img src="./public/images/figma_saloon.png" alt="" width="500px">

  * Pagina da cozinha:

  <img src="./public/images/figma_kitchen.png" alt="" width="500px">


## 5. Testes de usabilidade
Durante o desenvolvimento do projeto, fizemos os testes de usabilidades com usuários, que nos retornaram feedbacks muito importantes para a melhoria do projeto, várias sugestões foram implementadas, possibilitando uma melhor experiência para o usuário.

## 6. Interface
A interface foi desenvolvida com design responsivo, simples e intuitivo. Inicialmente criamos nosso protótipo com o tema neon, depois pensamos em utilizar como tema a série de TV "Friends". Com essas duas ideias em mente, resolvemos unir os dois temas e assim surgiu a interface "Friends Burger", [Clique aqui](https://burger-queen-sap004.web.app/) e veja o resultado final.


## 7. Instalação do projeto

Caso deseje baixar o projeto para sua máquina, é possível fazer um fork desse repositório, e em segida clonar em sua máquina executando o seguinte comando no seu terminal:

```sh
git clone (link-do-repositório)
```

Caso não possua o Node.js instalado, basta clicar nesse link [aqui](https://nodejs.org/pt-br/download/) e fazer o download, pois, para executar ele em seu computador, será necessário realizar a instalação da pasta node modules, com o uso do NPM (nativo do Node.js).

Assim que a instalação tiver sido concluída, basta digitar em seu terminal:

```sh
npm install
```
Se ainda não possui uma conta no Firebase, você deve criar uma e um projeto novo onde ficará seu banco de dados.

Para instalar o Firebase, utilize o comando:

```sh
npm install -g firebase-tools
```

Para conectar sua máquina local a sua conta no Firebase é necessário fazer o login, digitando o seguinte comando em seu terminal:

```sh
firebase login
```
Inicialize seu projeto utilizando o comando:

  ```sh
  firebase init
  ```

Para abrir um servidor a fim de executar o projeto em seu navegador, é só digitar:
  
  ```sh
  firebase serve
  ```

Para realizar um deploy, utilize o seguinte comando:

```sh
firebase deploy
```


## 8. Considerações técnicas

Ferramentas utilizadas no projeto:

* HTML, CSS, JavaScript, React.js, React Hooks,React Router, Node.js, Npm, Firebase, Material UI, Figma, Git e GitHub.

## 9. Implementações futuras

- Histórico de pedidos.
- Implementação de Testes.
- Refatoração do código.
- Novos testes de usabilidade para futuras melhorias.

## Autoras

[Karine Sardela](https://github.com/kfsardela) e [Aline Rozetti ](https://github.com/alinerozetti).

Projeto desenvolvido para fins de aprendizado no Bootcamp da [Laboratória Brasil](https://www.laboratoria.la/br). 



