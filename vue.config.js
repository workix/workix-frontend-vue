const { defineConfig } = require('@vue/cli-service')

// Publicado em https://<usuario>.github.io/workix-frontend-vue/ (GitHub Pages
// serve repositórios de projeto em um subdiretório com o nome do repositório).
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/workix-frontend-vue/' : '/'
})
