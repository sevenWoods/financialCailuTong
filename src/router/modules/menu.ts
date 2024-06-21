export default {
  path: "/menu",
  redirect: "/menu/administrator/index",
  meta: {
    icon: "ep:basketball",
    title: "菜单管理",
    rank: 20
  },
  children: [
    {
      path: "/menu/administrator/index",
      name: "administrator",
      component: () => import("@/views/administrator/index.vue"),
      meta: {
        title: "管理员",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};
