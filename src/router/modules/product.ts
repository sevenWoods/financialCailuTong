/** 
 *todo: 产品管理
 *@param: 
 *@author: 七木
 *@date: 2024/08/06
 */
export default {
  path: "/product",
  redirect: "/product/productOrder",
  meta: {
    icon: "ep:present",
    title: "产品管理",
    rank: 10
  },
  children: [
    {
      path: "/product/productOrder",
      name: "productOrder",
      component: () => import("@/views/product/productOrder.vue"),
      meta: {
        title: "订单列表",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};