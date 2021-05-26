import type { MenuModule } from '/@/router/types';
const menu:MenuModule={
  orderNo:60,
  menu:{
    path:'/tree',
    name:'Tree',
    children:[
      {
        path:'basic',
        name:'基础示例',
      },
      {
        path:'editTree',
        name:'右键示例',
      },
      {
        path:'actionTree',
        name:'函数操作示例',
      },
    ],
  },

};
export default menu;
