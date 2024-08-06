<script setup lang="ts">
defineOptions({
  /**
   * todo: 用户详情
   *@author: 七木
   *@date: 2024/08/05
   */
  name: "updateUser"
});
import at1 from "@/assets/images/at1.jpg";
const props = defineProps({
  userInfoData: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane class="detUser" label="用户详情">
      <h3 class="ml-2">用户信息</h3>
      <div class="userInfo flex">
        <div class="avt">
          <img :src="userInfoData.avatar" alt="" />
        </div>
        <div class="info">
          <div class="box flex">
            <div class="label">用户昵称：</div>
            <div class="value">{{ userInfoData.nickname }}</div>
          </div>
          <div class="box flex">
            <div class="label">微信昵称：</div>
            <div class="value">{{ userInfoData.wechat_name }}</div>
          </div>
          <div class="box flex">
            <div class="label">用户姓名：</div>
            <div class="value">{{ userInfoData.id_card_name }}</div>
          </div>
          <div class="box flex">
            <div class="label">组别：</div>
            <div class="value">{{ userInfoData.group_name }}</div>
          </div>
          <div class="box flex">
            <div class="label">联系方式：</div>
            <div class="value">{{ userInfoData.phone }}</div>
          </div>
          <div class="box flex">
            <div class="label">身份证号：</div>
            <div class="value">{{ userInfoData.id_card }}</div>
          </div>
          <div class="box flex">
            <div class="label">用户ID：</div>
            <div class="value">{{ userInfoData.id }}</div>
          </div>
          <div class="box flex">
            <div class="label">实名认证：</div>
            <div class="value">{{ userInfoData.is_auth }}</div>
          </div>
          <div class="box flex">
            <div class="label">创建时间：</div>
            <div class="value">{{ userInfoData.create_time }}</div>
          </div>
        </div>
      </div>
      <h3 class="mt-4 ml-2">用户余额</h3>
      <div class="userInfo flex">
        <div class="avt"></div>
        <div class="info">
          <div class="box flex">
            <div class="label">总余额：</div>
            <div class="value">{{ userInfoData.money }}</div>
          </div>
          <div class="box flex">
            <div class="label">积分：</div>
            <div class="value">{{ userInfoData.score }}</div>
          </div>
          <div class="box flex">
            <div class="label">风险检测次数：</div>
            <div class="value">{{ userInfoData.usable_risk_count }}</div>
          </div>
        </div>
      </div>
      <h3 class="mt-4 ml-2">用户业绩</h3>
      <div class="userInfo flex">
        <div class="avt"></div>
        <div class="info">
          <div class="box flex">
            <div class="label">进件量：</div>
            <div class="value">{{ userInfoData.jj_count }}</div>
          </div>
          <div class="box flex">
            <div class="label">客户人数：</div>
            <div class="value">{{ userInfoData.kh_count }}</div>
          </div>
          <div class="box flex">
            <div class="label">下级代理：</div>
            <div class="value">{{ userInfoData.sub_count }}</div>
          </div>
        </div>
      </div>
      <h3 class="mt-4 ml-2">邀请人信息</h3>
      <div class="userInfo flex">
        <div class="avt"></div>
        <div class="info">
          <div class="box flex">
            <div class="label">邀请人ID：</div>
            <div class="value">{{ userInfoData.invite_id }}</div>
          </div>
          <div class="box flex">
            <div class="label">邀请人名称：</div>
            <div class="value">{{ userInfoData.invite }}</div>
          </div>
          <div class="box flex">
            <div class="label">邀请人手机号：</div>
            <div class="value">{{ userInfoData.invite_mobile }}</div>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="订单">订单</el-tab-pane>
    <el-tab-pane label="现金券">现金券</el-tab-pane>
    <el-tab-pane label="风险监测">风险监测</el-tab-pane>
    <el-tab-pane label="税票">税票</el-tab-pane>
    <el-tab-pane label="账单">账单</el-tab-pane>
    <el-tab-pane label="银行卡">银行卡</el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.detUser {
  h3 {
    color: #292828;
  }
  .userInfo {
    padding: 10px 25px 0;
    width: 100%;
    .avt {
      width: 60px;
      img {
        border-radius: 50%;
      }
    }
    .info {
      // margin-left: 20px;
      display: grid;
      width: 100%;
      gap: 10px 80px;
      grid-template-columns: repeat(3, 1fr);
      color: #000;
      font-size: 15px;
      .label {
        width: 120px;
        text-align: right;
      }
    }
  }
}
</style>
