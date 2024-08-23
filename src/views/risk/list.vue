<script setup lang="ts">
// 风险检测
defineOptions({
  name: "riskList"
});
import { onMounted, ref } from "vue";
import Search from "@/components/Search/index.vue";
import { riskTableList } from "@/utils/commonData";
import { ElMessage, ElMessageBox } from "element-plus";

const searchRef = ref(null);
const searchFormDtata = ref([
  { label: "支付方式", prop: "type", type: "select1" },
  { label: "用户UID", prop: "id", type: "text" }
]);
const formSelect1 = [
  { label: "全部", value: "" },
  { label: "金额", value: "money" },
  { label: "积分", value: "credit" },
  { label: "次数", value: "count" }
];
const riskData = ref([...riskTableList]);

const openLoading = ref(null);
// 删除
const delRisk = () => {
  ElMessageBox.confirm("您确定要删除吗?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(async () => {
    // 事件
    ElMessage.success("删除数据成功！");
    loading();
  });
};

const array2 = [
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" }
];

const map = new Map(array2.map(obj => [obj.id, obj]));
console.log("🚀 ~ map:", map);

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
      :formSelect1="formSelect1"
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
      :data="riskData"
      max-height="550"
      style="width: 100%"
      :header-cell-style="{
        color: '#606266',
        'text-align': 'center',
        backgroundColor: '#f5f7fa',
        fontSize: '15px'
      }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column prop="id" label="ID" width="200" />
      <el-table-column prop="uid" label="用户UID" />
      <el-table-column prop="id_card_name" label="姓名" />
      <el-table-column prop="mobile" label="手机号" />
      <el-table-column prop="id_card" label="身份证" />
      <el-table-column prop="pay_type_name" label="支付方式" />
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column prop="update_time" label="修改时间" />
      <el-table-column fixed="right" label="操作" width="200">
        <el-button-group size="small">
          <el-button type="primary">详情</el-button>
          <el-button type="success">报告</el-button>
          <el-button type="danger" @click="delRisk">删除</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="scss" scoped></style>
