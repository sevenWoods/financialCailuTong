// const { VITE_HIDE_HOME } = import.meta.env;
// const Layout = () => import("@/layout/index.vue");
export default {
  path: "/agreement",
  redirect: "/agreement/index",
  meta: {
    icon: "ep:document",
    title: "协议管理",
    rank: 10
  },
  children: [
    {
      path: "/agreement/index",
      name: "agreementIndex",
      component: () => import("@/views/agreement/index.vue"),
      meta: {
        title: "协议列表",
        // 通过设置showParent为true显示父级
        showParent: true
      }
    }
  ]
};
