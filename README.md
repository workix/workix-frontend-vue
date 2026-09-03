# workix-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Dados estáticos (mock)

Este site não depende de um backend. Todas as chamadas que antes iam para a API
Workix (`http://localhost:8080/workix/services/v1/...`) e para a API de CEP da
pagar.me são respondidas por `src/mock/mockHttp.js`, com dados fictícios
definidos em `src/mock/mockData.js`. A autenticação via Firebase continua real
(configurada pelas variáveis `VUE_APP_FIREBASE_*`); sem credenciais válidas,
login e cadastro exibem um erro do Firebase, mas o restante do site funciona
normalmente.

## Publicação no GitHub Pages

O deploy é feito automaticamente pelo workflow
`.github/workflows/deploy.yml` a cada push na branch `feature/github-pages`
(também pode ser disparado manualmente pela aba Actions). Ele builda o
projeto e publica `dist/` via GitHub Pages.

Pontos importantes para esse tipo de hospedagem estática, sem servidor:
- `vue.config.js` define `publicPath` como `/workix-frontend-vue/` em
  produção, pois o GitHub Pages serve repositórios de projeto em um
  subdiretório com o nome do repositório.
- As rotas usam `createWebHashHistory` (URLs com `/#/...`), já que o GitHub
  Pages não reescreve rotas desconhecidas para `index.html`.
- Para habilitar o Pages no repositório: Settings → Pages → Source →
  "GitHub Actions".
