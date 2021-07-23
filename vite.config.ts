// path 模块需要用到 @type/node 模块
import { join, resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const resolvePath = (dir:string) => join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      babelPlugins:[],
    })
  ],
  server: {
    port: 8088,
  },
  resolve:{
    alias:{
      '@':resolvePath('src'),
    },
  },
  // css:{
  //   preprocessorOptions:{
  //     scss:{
  //       additionalData: '@import "./src/assets/scss/style.scss";'
  //     }
  //   }
  // },
  build:{
    // lib: {
    //   entry:resolve(__dirname, 'src/main.ts'),
    //   name: 'cusTome',
    //   formats:["es","umd"],
    //   fileName: 'index'
    // },
    // rollupOptions: {
    //   input:resolve(__dirname, 'src/main.ts'),
    //   external:['Vue','Element-ui'],
    //   output: [
    //       {
    //         entryFileNames: 'lib/[name]/index.js',
    //         format:'umd',
    //         globals:{
    //           vue:'Vue'
    //         }
    //       }
    //   ]
    // }
  }
})
