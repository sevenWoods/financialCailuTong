<script setup lang="ts">
defineOptions({
  name: "h5Set"
});
import draggable from "vuedraggable/src/vuedraggable";

import theme1 from "@/assets/images/lvse.png";
import theme2 from "@/assets/images/hongse.png";
import theme3 from "@/assets/images/heise.png";
import { Search } from "@element-plus/icons-vue";
import kefu from "@/assets/images/kefu.png";
import at2 from "@/assets/images/bgcBanner.jpg";

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
// 首页配置
const position = ref(true);
const search = ref(true);
const customer = ref(true);
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
      <el-tab-pane label="首页配置">
        <div class="Homepage flex">
          <div class="left mr-12">
            <div class="top flex pt-2 pl-3">
              <div class="poz mr-1">
                <span v-show="position">北京市</span>
              </div>
              <div class="serach">
                <el-input
                  v-show="search"
                  style="height: 25px; width: 248px"
                  class="ml-2"
                  placeholder="搜索你感兴趣的产品"
                  disabled
                  :prefix-icon="Search"
                />
              </div>
              <div class="kf" v-show="customer">
                <img :src="kefu" alt="" />
              </div>
            </div>
            <div class="banner">
              <img :src="at2" alt="" />
            </div>
          </div>

          <div class="right">
            <!-- 复选框区域 -->
            <div class="checkBox">
              <el-checkbox v-model="position" label="位置" size="large" />
              <el-checkbox v-model="search" label="搜索" size="large" />
              <el-checkbox v-model="customer" label="客服" size="large" />
            </div>
          </div>
        </div>
      </el-tab-pane>
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
.Homepage {
  position: relative;
  .banner {
    width: 375px;

    img {
      width: 100%; /* 或者设置为你想要的固定宽度 */
      height: 170px;
      object-fit: cover; /* 保持短边完整显示，长边剪裁 */
      display: block; /* 防止图片下方出现空白 */
    }
  }
  .left {
    width: 375px;
    height: 670px;
    background-color: #409eff;
    .poz {
      color: #fff;
      width: 48px;
    }

    .top {
      align-items: center;
      position: absolute;
      .kf {
        width: 25px;
        margin-left: 36px;
        img {
          display: block;
        }
      }
      .serach {
        width: 235px;
      }
      ::v-deep(.el-input__inner) {
        line-height: 32px;
      }
      ::v-deep(.el-input__prefix-inner > :last-child) {
        margin-right: 2px !important;
      }
    }
  }
}
</style>
