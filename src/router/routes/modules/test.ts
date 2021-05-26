import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
// import component from '/@/locales/lang/en/component';

const test:AppRouteModule={
  path:'/test',
  name:'TestDemo',
  component:LAYOUT,
  redirect:'/table/basic',
  meta:{
    icon:'ant-design:table-outlined',
    title:'Table',
  },
  children:[
    {
      path:"basic",
    name:'TableBasicDemo',
    component:()=>import('/@/views/demo/table/Basic.vue'),
    meta:{
      title:'基础表格',
    },
    }
  ],
};
export default test;
