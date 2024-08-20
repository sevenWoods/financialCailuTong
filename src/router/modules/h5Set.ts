/** 
 *todo: H5管理
 *@author: 七木
 */
export default {
  path: "/h5",
  redirect: "/h5/h5Set",
  meta: {
    icon: "ep:cellphone",
    title: "H5配置",
    rank: 2
  },
  children: [
    {
      path: "/h5/h5Set",
      name: "h5Set",
      component: () => import("@/views/h5/h5Set.vue"),
      meta: {
        title: "页面适配",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};