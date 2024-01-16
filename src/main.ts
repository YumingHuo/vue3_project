import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//配置elementplus的语言
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

//获取应用实例对象
const app = createApp(App);

//安装elementplus插件
app.use(ElementPlus, {
  locale: zhCn,
});

//将应用挂载到挂载点上
app.mount("#app");
