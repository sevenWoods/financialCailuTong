<script setup lang="ts">
defineOptions({
  name: "h5Set"
});
import theme1 from "@/assets/images/lvse.png";
import theme2 from "@/assets/images/hongse.png";
import theme3 from "@/assets/images/heise.png";

import { onMounted, ref } from "vue";
const themeList = ref([
  { img: theme1, text: "默认风格" },
  { img: theme2, text: "红色风格" },
  { img: theme3, text: "黑色风格" }
]);
// 添加点击状态
const actNum = ref(theme1);
const addActive = num => {
  actNum.value = num;
};
</script>

<template>
  <el-card>
    <el-tabs type="border-card">
      <el-tab-pane class="theme" label="主题风格配置">
        <div style="font-size: 19px; font-weight: bold">风格设置</div>
        <div class="main grid">
          <div
            class="box"
            v-for="item in themeList"
            :key="item.text"
            @click="addActive(item.img)"
          >
            <div class="img mb-4" :class="{ active: item.img == actNum }">
              <img :src="item.img" alt="" />
            </div>
            <div class="text">{{ item.text }}</div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="首页配置">Role</el-tab-pane>
      <el-tab-pane label="底部导航栏配置">Config</el-tab-pane>
      <el-tab-pane label="个人中心配置">Task</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<style lang="scss" scoped>
.theme {
  // padding-top: 20px;
  .main {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 20px;
    padding-top: 35px;
    width: 750px;
  }
  .box {
    width: 198px;
    .img {
      // background-color: skyblue;
      width: 100%;
      height: 528px;
      border: 1px solid #eee;
    }
    .text {
      text-align: center;
    }
  }
}
.active {
  border: 1px solid #409eff;
  box-shadow: 0 0 17px #409eff;
}
</style>
