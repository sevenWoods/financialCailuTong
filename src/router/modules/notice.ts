/** 
 *todo: 通知列表
 *@param: 
 *@author: 七木
 */
export default {
  path: "/notice",
  redirect: "/notice/list",
  meta: {
    icon: "ep:bell",
    title: "通知管理",
    rank: 24
  },
  children: [
    {
      path: "/notice/list",
      name: "noticeList",
      component: () => import("@/views/notice/list.vue"),
      meta: {
        title: "通知列表",
        // 通过设置showParent为true显示父级
        // showParent: true
      }
    }
  ]
};