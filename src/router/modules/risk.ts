/** 
 *todo: 风险检测管理
 *@author: 七木
 */
export default {
  path: "/risk",
  redirect: "/risk/list",
  meta: {
    icon: "ep:odometer",
    title: "风险管理",
    rank: 21
  },
  children: [
    {
      path:"/risk/list",
      name: "riskList",
      component: () => import("@/views/risk/list.vue"),
      meta: {
        title: "风险检测",
        // 通过设置showParent为true显示父级
        // showParent: true
      }
    }
  ]
};