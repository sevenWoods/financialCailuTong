/** 
 *todo: H5管理
 *@author: 七木
 */
export default {
  path: "/h5",
  redirect: "/h5/h5Set",
  meta: {
    icon: "ep:set-up",
    title: "H5管理",
    rank: 11
  },
  children: [
    {
      path: "/h5/h5Set",
      name: "h5Set",
      component: () => import("@/views/h5/h5Set.vue"),
      meta: {
        title: "前端配置",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};