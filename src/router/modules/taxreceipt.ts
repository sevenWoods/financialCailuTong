/** 
 *todo: 税票管理
 *@author: 七木
 */
export default {
  path: "/taxreceipt",
  redirect: "/taxreceipt/list",
  meta: {
    icon: "ep:collection-tag",
    title: "税票管理",
    rank: 21
  },
  children: [
    {
      path:"/taxreceipt/list",
      name: "taxreceiptList",
      component: () => import("@/views/taxreceipt/list.vue"),
      meta: {
        title: "税票列表",
        // 通过设置showParent为true显示父级
        // showParent: true
      }
    }
  ]
};