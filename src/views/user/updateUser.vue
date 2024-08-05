<script setup lang="ts">
defineOptions({
  /**
   * todo: 用户详情
   *@author: 七木
   *@date: 2024/08/05
   */
  name: "updateUser"
});
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane class="theme" label="用户详情">用户详情 </el-tab-pane>
    <el-tab-pane label="订单">订单</el-tab-pane>
    <el-tab-pane label="现金券">现金券</el-tab-pane>
    <el-tab-pane label="风险监测">风险监测</el-tab-pane>
    <el-tab-pane label="税票">税票</el-tab-pane>
    <el-tab-pane label="账单">账单</el-tab-pane>
    <el-tab-pane label="银行卡">银行卡</el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped></style>
