/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare namespace todoList {
//   export interface todoItem {
//        message: string;
//        checked: boolean;
//   } 
// }
