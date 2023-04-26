import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    // 配置路径别名
    alias:{
      "@":resolve(__dirname,'src'),
    },
    // 导入时想要省略的扩展名列表
    extensions: ['.vue', '.ts'],
  }
})
