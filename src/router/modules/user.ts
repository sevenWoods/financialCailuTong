/** 
 *todo: 用户（来自h5注册）
 *@param: 
 *@author: 七木
 *@date: 2024/08/01
 */
export default {
  path: "/user",
  redirect: "/user/index",
  meta: {
    icon: "ep:user",
    title: "用户管理",
    rank: 4
  },
  children: [
    {
      path: "/user/index",
      name: "user",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "用户列表",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};