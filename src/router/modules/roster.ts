/** 
 *todo: 名单管理
 *@author: 七木
 */
export default {
  path: "/roster",
  redirect: "/roster/white",
  meta: {
    icon: "ep:postcard",
    title: "名单管理",
    rank: 23
  },
  children: [
    {
      path: "/roster/white",
      name: "whiteList",
      component: () => import("@/views/roster/white.vue"),
      meta: {
        title: "白名单",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    },
    {
      path: "/roster/black ",
      name: "blackList  ",
      component: () => import("@/views/roster/black.vue"),
      meta: {
        title: "黑名单",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    },
    
  ]
};