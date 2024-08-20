/** 
 *todo: 投诉建议
 *@param: 
 *@author: 七木
 *@date: 2024/08/01
 */
export default {
  path: "/feedback",
  redirect: "/feedback/index",
  meta: {
    icon: "ep:chat-dot-round",
    title: "投诉管理",
    rank: 10
  },
  children: [
    {
      path: "/feedback/index",
      name: "feedback",
      component: () => import("@/views/feedback/index.vue"),
      meta: {
        title: "反馈信息",
        // 通过设置showParent为true显示父级
        // showParent: true
      }
    }
  ]
};