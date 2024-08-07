<script setup lang="ts">
defineOptions({
  name: "productOrder"
});
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

import Pagination from "@/components/Pagination/index.vue";
import Search from "@/components/Search/index.vue";

// 表格数据
const searchRef = ref(null);
const openLoading = ref(false);
const orderList = ref([
  {
    id: 6409,
    title: "邮惠万家-商贷",
    self_status_name: "放款成功",
    uid: 11,
    credit_money: 250000,
    draw_money: 250000,
    draw_usable_money: 0,
    draw_used_money: 250000,
    company_name: "浙江甬徽保安服务有限公司",
    id_card: "342101198002207418",
    id_card_name: "白春红",
    mobile: "18094577772",
    commission_money: 100,
    update_time: "2024-07-31",
    status_name: "提款",
    invitation: "王羲之"
  },
  {
    id: 5624,
    title: "富民银行-富税贷",
    self_status_name: "申请中",
    order_id: "01J0QXM36403G3WGTAFVASPTDG",
    uid: 1,
    credit_money: 300000,
    draw_money: 300000,
    draw_used_money: 300000,
    company_name: "河南楚震商贸有限公司",
    id_card: "41022319870407252x",
    id_card_name: "王会平",
    mobile: "15638916385",
    commission_money: 1800,
    commission_superior_money: 108,
    update_time: "2024-06-19",
    pre_status: "授信",
    status_name: "提款",
    invitation: "李白"
  }
]);

const searchFormDtata = [
  { label: "标题", prop: "title", type: "text" },
  { label: "公司名称", prop: "company_name", type: "text" }
];
// 格式化金额的函数
const formatAmount = (value: number) => {
  if (value < 10000) {
    return value.toFixed(2); // 小于1万，直接返回金额
  } else {
    return (value / 10000).toFixed(2) + "万"; // 大于等于1万，转换为万为单位
  }
};
// 加载中
const loading = () => {
  openLoading.value = true;
  setTimeout(() => {
    openLoading.value = false;
  }, 400);
};
</script>

<template>
  <el-card>
    <Search
      ref="searchRef"
      :searchFormDtata="searchFormDtata"
      :refresh-list="loading"
    >
      <template #hint>
        <div class="w-60">
          <el-alert
            title="仅演示，操作后不生效"
            type="info"
            center
            :closable="false"
            show-icon
          />
        </div>
      </template>
    </Search>
    <el-table
      v-loading.lock="openLoading"
      element-loading-text="加载中..."
      :data="orderList"
      max-height="550"
      :header-cell-style="{
        color: '#606266',
        'text-align': 'center',
        backgroundColor: '#f5f7fa',
        fontSize: '15px'
      }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="title" label="标题">
        <template #default="{ row }">
          <div class="styleDiv">
            <u>{{ row.title }}</u>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="id_card_name" label="客户信息">
        <template #default="{ row }">
          {{ row.id_card_name }} ({{ row.mobile }})
        </template>
      </el-table-column>
      <el-table-column
        prop="company_name"
        show-overflow-tooltip
        label="公司名称"
      />
      <el-table-column label="订单状态" prop="self_status_name" />
      <el-table-column prop="credit_money" label="授信金额">
        <template #default="{ row }">
          {{ formatAmount(row.credit_money) }}
        </template>
      </el-table-column>
      <el-table-column prop="draw_used_money" label="提款金额">
        <template #default="{ row }">
          {{ formatAmount(row.draw_used_money) }}
        </template>
      </el-table-column>
      <el-table-column prop="user" label="邀请人">
        <template #default="{ row }">
          <div class="styleDiv">
            <u> {{ row.invitation }}({{ row.uid }}) </u>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="commission_money" label="返佣金额">
        <template #default="{ row }">
          {{ formatAmount(row.commission_money) }}
        </template>
      </el-table-column>
      <el-table-column prop="update_time" label="更新时间" />
      <el-table-column fixed="right" label="操作">
        <template #default="{ row }">
          <el-button-group size="small">
            <el-button type="primary">查看</el-button>
            <el-button type="info">通知</el-button>
            <el-button type="success">奖励</el-button>
            <el-button type="danger">操作</el-button>
            <el-button type="warning">回滚</el-button>
            <el-button color="#626aef">备注</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped>
.styleDiv {
  color: #00a1ea;
  cursor: pointer;
}
.ellipsis {
  white-space: nowrap;
  /* 超出盒子宽度的文本用省略号显示 */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
