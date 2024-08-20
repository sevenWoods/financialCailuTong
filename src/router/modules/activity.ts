/** 
 *todo: 活动管理
 *@author: 七木
 */
export default {
  path: "/activity",
  redirect: "/activity/list",
  meta: {
    icon: "ep:present",
    title: "活动管理",
    rank: 22
  },
  children: [
    {
      path: "/activity/list",
      name: "activity",
      component: () => import("@/views/activity/list.vue"),
      meta: {
        title: "活动列表",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    },
    {
      path: "/activity/register ",
      name: "register ",
      component: () => import("@/views/activity/register.vue"),
      meta: {
        title: "活动注册",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    },
    {
      path: "/activity/submission",
      name: "submission ",
      component: () => import("@/views/activity/submission.vue"),
      meta: {
        title: "活动进件",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};