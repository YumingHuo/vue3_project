import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"; // 确保已正确导入
import path from "path";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 确保这里有逗号
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        //default
        mockPath: "mock",
        localEnabled: command === "serve",
      }),
    ],
    // 配置别名
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    //scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
