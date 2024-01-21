//引入项目中全部的全局组件
import svg_icon from "./svg_icon/index.vue";
import Pagination from "./Pagination/index.vue";
//全局对象
const allGlobalComponents: any = { svg_icon, Pagination };

//对外暴露插件对象
export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((key) => {
      //注册为全局组件
      app.component(key, allGlobalComponents[key]);
    });
  },
};
