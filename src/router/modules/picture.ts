/** 
 *todo: 图片管理
 *@param: 
 *@author: 七木
 *@date: 2024/08/01
 */
export default {
  path: "/picture",
  redirect: "/picture/banner",
  meta: {
    icon: "ep:picture",
    title: "图片管理",
    rank: 11
  },
  children: [
    {
      path: "/picture/banner",
      name: "banner",
      component: () => import("@/views/picture/banner.vue"),
      meta: {
        title: "首页轮播",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    },
    {
      path: "/picture/article",
      name: "article",
      component: () => import("@/views/article/list.vue"),
      meta: {
        title: "文章列表",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};