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
import pto from "@/assets/images/pto.jpg";

import at2 from "@/assets/images/bgcBanner.jpg";
import remove from "@iconify-icons/ep/remove-filled";
import Plus from "@iconify-icons/ep/circle-plus-filled";
import { h5SetStyleIcon, h5SetStyleAllIcon } from "@/utils/commonData";
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
// 项目功能布局
interface arr {
  flag?: boolean;
  imgurl: string;
  key: string;
  text: string;
  url: string;
}
type IconState = arr[];
const gridColumnsStyle = ref(null);
const styleInfoList = ref(h5SetStyleIcon);
const allIcon = ref<IconState>(h5SetStyleAllIcon);
const iconForm = ref({
  row: null,
  column: null
});
const ifNotice = ref(3);
const choiceNtc = num => {
  ifNotice.value = num;
};
// 处理数据
const processData = () => {
  const commonObjects = styleInfoList.value.filter(obj1 =>
    allIcon.value.some(obj2 => obj1.key === obj2.key)
  );
  const commonKeys = commonObjects.map(item => item.key);
  allIcon.value.forEach(item => {
    if (commonKeys.includes(item.key)) {
      item.flag = false;
    } else {
      item.flag = true;
    }
  });
};
onMounted(() => {
  processData();
});
</script>

<template>
  <el-card>
    <el-tabs type="border-card">
      <el-tab-pane class="theme" label="主题风格配置">
        <div class="comTitle">风格设置</div>
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
        <!-- <div class="comTitle">首页预览</div> -->
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
            <!-- 功能拖拽配置 -->
            <div class="huadong">
              <!-- class="inlineBlock" -->
              <el-card shadow="never" style="overflow-x: auto">
                <draggable
                  v-model="styleInfoList"
                  class="grid-container"
                  item-key="grid"
                  animation="300"
                  chosenClass="chosen"
                  forceFallback="true"
                  :style="gridColumnsStyle"
                >
                  <template #item="{ element }">
                    <div
                      class="positionRe"
                      :class="'item' + ' ' + 'item-' + element.num"
                    >
                      <img :src="element.imgurl" />
                      <span>{{ element.text }}</span>
                      <IconifyIconOffline
                        class="iconPB"
                        style="font-size: 16px; color: #cacaca"
                        :icon="remove"
                      />
                    </div>
                  </template>
                </draggable>
              </el-card>
            </div>
            <!-- 大通告区域 -->
            <div class="h5notice">
              <div class="box flex" v-if="ifNotice == 1">
                <div class="color comBox">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/sp_check_x2.png"
                  />
                </div>
                <div class="color comBox">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/company_check_x2.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="box3 flex" v-if="ifNotice == 3">
                <div class="color comBox">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/sp_check_x3.png"
                  />
                </div>
                <div class="color comBox">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/risk_check_x3.png"
                    alt=""
                  />
                </div>
                <div class="color comBox">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/company_check_x3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="pto mt-2">
              <img :src="pto" alt="" />
            </div>
          </div>

          <div class="right">
            <!-- 复选框区域 -->
            <h3>顶部设置</h3>
            <div class="checkBox mb-6">
              <el-checkbox v-model="position" label="位置" size="large" />
              <el-checkbox v-model="search" label="搜索" size="large" />
              <el-checkbox v-model="customer" label="客服" size="large" />
            </div>
            <h3>功能项目设置</h3>
            <el-form :model="iconForm" ref="ruleFormRef" inline class="form">
              <el-form-item label="行 * 列" prop="row" style="margin-right: 0">
                <el-input v-model.number="iconForm.row" style="width: 40px" />
              </el-form-item>
              *
              <el-form-item label="" prop="column">
                <el-input
                  v-model.number="iconForm.column"
                  style="width: 40px"
                />
              </el-form-item>
              <el-form-item label="">
                <el-button type="primary" size="small">确认</el-button>
                <!-- <el-tooltip
                  class="box-item"
                  effect="dark"
                  content="行数：为1到3整数
                  列数：为1到6整数"
                  placement="top-start"
                >
                  <IconifyIconOffline
                    :icon="Pluss"
                    style="font-size: 26px"
                    color="#a6a6a6"
                    class="ml-10"
                  />
                </el-tooltip> -->
              </el-form-item>
            </el-form>
            <div class="totalSet">
              <div
                class="item positionRe totalSetItem"
                v-for="item in allIcon"
                :key="item.key"
              >
                <!-- v-show="!keys.includes(item.key)" -->
                <img :src="item.imgurl" />
                <span>{{ item.text }}</span>
                <IconifyIconOffline
                  v-if="item.flag"
                  class="iconPB"
                  style="font-size: 16px; color: #1677fa"
                  :icon="Plus"
                />
              </div>
            </div>
            <h3 class="mt-8">大通告设置</h3>
            <div class="notice flex">
              <div
                class="box flex mr-10"
                @click="choiceNtc(1)"
                :class="{ active: ifNotice == 1 }"
              >
                <div class="comBox color">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/sp_check_x2.png"
                  />
                </div>
                <div class="comBox color">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/company_check_x2.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="box3 flex"
                @click="choiceNtc(3)"
                :class="{ active: ifNotice == 3 }"
              >
                <div class="comBox3 color">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/sp_check_x3.png"
                  />
                </div>
                <div class="comBox3 color">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/risk_check_x3.png"
                    alt=""
                  />
                </div>
                <div class="comBox3 color">
                  <img
                    src="http://saas.toyin365.com/theme/BLUE-XFX/homeUse/company_check_x3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="底部导航栏配置">
        <img src="@/assets/images/tabbar.png" alt="" />
      </el-tab-pane>
      <el-tab-pane label="个人中心配置">
        <img src="@/assets/images/user.png" alt="" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<style lang="scss" scoped>
.comTitle {
  font-size: 19px;
  font-weight: bold;
  padding-bottom: 30px;
}
.theme {
  // padding-top: 20px;
  .main {
    grid-template-columns: repeat(3, 1fr);
    padding-left: 20px;
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
    // border: 1px solid #eee;

    background-color: #eee;
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
    .h5notice {
      margin-top: 8px;
      padding: 10px 5px;
      border-radius: 5px;
      width: 100%;
      background-color: #fff;
      .box {
        justify-content: space-between;
        .comBox {
          width: 175px;
          height: auto;
          border-radius: 8px;
          img {
            display: block;
          }
        }
      }
      .box3 {
        justify-content: space-between;

        .comBox {
          width: 110px;
          height: auto;
          border-radius: 8px;
          img {
            display: block;
          }
        }
      }
    }
  }
  // 华东区域
  .huadong {
    margin: 0 auto;
  }
  .grid-container {
    display: grid;
    gap: 30px 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  .item {
    display: flex;
    flex-direction: column;
    height: 50px;
    margin: auto;
    cursor: move;
    font-size: 14px;
    // width: 60px;
    // text-align: center;
  }
  .item img {
    height: 40px;
    width: 40px;
    margin: 0 auto 4px;
  }
  .positionRe {
    position: relative;
  }
  .iconPB {
    position: absolute;
    right: -7px;
    top: -11px;
    cursor: pointer;
  }
  .right {
    ::v-deep(.el-checkbox.el-checkbox--large) {
      height: 37px;
    }
    ::v-deep(.el-form-item) {
      margin-bottom: 15px;
      margin-top: 10px;
    }
    .totalSet {
      padding: 20px;
      display: grid;
      width: 350px;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px 20px;
      border: 1px solid #e4e7ed;
      // width: 360px;

      .item {
        cursor: auto;
      }
    }
    .notice {
      margin-top: 15px;
      align-items: center;
      .box {
        padding: 10px;
        width: 210px;
        height: 53px;
        background-color: #eee;
        justify-content: space-between;
        .comBox {
          width: 90px;
          height: 33px;
          border-radius: 5px;
          img {
            display: block;
          }
        }
      }
      .box3 {
        padding: 10px;
        width: 210px;
        // height: 53px;
        background-color: #eee;
        justify-content: space-between;
      }
      .comBox3 {
        width: 60px;
        height: 68px;
        border-radius: 5px;
        img {
          display: block;
        }
      }
    }
  }
}
.color {
  background-color: #76b999;
}
// h3 {
//   text-align: center;
// }
</style>
