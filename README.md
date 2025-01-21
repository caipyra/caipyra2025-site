# Caipyra 2025

## Descrição

Projeto para o site oficial do **Caipyra 2025**. Utiliza:

- React
- React-Bootstrap
- Vite
- SCSS

## Índice

- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Clonar o Repositório](#como-clonar-o-repositório)
- [Instalação](#instalação)
- [Rodando o Projeto em Desenvolvimento](#rodando-o-projeto-em-desenvolvimento)
- [Construindo o Projeto para Produção](#construindo-o-projeto-para-produção)
- [Pré-visualizando a Build de Produção](#pré-visualizando-a-build-de-produção)
- [Servindo os Arquivos Estáticos (Opcional)](#servindo-os-arquivos-estáticos-opcional)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Contribuição](#contribuição)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem junto com o Node.js)

## Clonar o Repositório

```bash
git clone https://github.com/caipyra/caipyra2025-site
```

## Instalação

```bash
cd caipyra2025-site
npm install
```

Este comando instalará todas as bibliotecas e pacotes necessários para rodar o projeto.

## Rodando o Projeto em Desenvolvimento

Para iniciar o servidor de desenvolvimento e visualizar o projeto localmente, execute:

```bash
npm run dev
```

Este comando iniciará o Vite e disponibilizará o site em [http://localhost:5173](http://localhost:5173) (a porta pode variar; verifique o terminal para o endereço exato).

## Construindo o Projeto para Produção

Para gerar uma versão otimizada para produção, execute:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist`.

## Pré-visualizando a Build de Produção

Após construir o projeto, você pode pré-visualizar a versão de produção localmente utilizando:

```bash
npm run preview
```

Este comando iniciará um servidor local para visualizar a build em [http://localhost:4173](http://localhost:4173) (a porta pode variar; verifique o terminal para o endereço exato).

## Servindo os Arquivos Estáticos (Opcional)

Caso deseje servir os arquivos estáticos da pasta `dist` utilizando um servidor estático, você pode usar a ferramenta `serve`. Primeiro, instale-a globalmente:

```bash
npm install -g serve
```

Em seguida, navegue até a pasta `dist` e inicie o servidor:

```bash
cd dist
serve .
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000) por padrão.

## Estrutura do Projeto

- `public/`: Arquivos estáticos que serão servidos diretamente, como imagens, favicons, etc.
  - `img/`: Contém imagens e favicons utilizados no projeto.
- `src/`: Código-fonte do aplicativo React.
  - `components/`: Componentes React reutilizáveis.
  - `styles/`: Arquivos SCSS para estilização.
  - `App.jsx`: Componente principal do aplicativo.
  - `main.jsx`: Ponto de entrada do aplicativo React.
- `index.html`: Template HTML do projeto.

## Personalização

### Variáveis SCSS

As variáveis de estilo estão definidas em `src/styles/variables.scss`. Você pode ajustar as cores, fontes e outros estilos personalizando este arquivo.

### Componentes

Cada "bloco" da página está em um arquivo diferente no diretório `src/components`

## Contribuição

Contribuições são bem-vindas!
