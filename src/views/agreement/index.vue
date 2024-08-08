<template>
  <el-card>
    <div class="flex justify-between items-center mb-2">
      <div class="w-50">
        <el-alert
          title="仅演示，操作后不生效"
          type="info"
          center
          :closable="false"
          show-icon
        />
      </div>
      <el-button-group>
        <el-button type="primary" @click="addAgree">添加</el-button>
        <!-- <el-tooltip content="重置" placement="top">
          <el-button
            type="info"
            @click="resetSearch"
            :icon="useRenderIcon('ep:refresh-left')"
          />
        </el-tooltip> -->
      </el-button-group>
    </div>
    <el-table
      v-loading.lock="openLoading"
      element-loading-text="加载中..."
      element-loading-background="rgba(0, 0, 0, 0.7)"
      :data="tableData"
      ref="tableRef"
      max-height="600"
      style="width: 100%"
      :header-cell-style="{
        color: '#606266',
        'text-align': 'center',
        backgroundColor: '#f5f7fa',
        fontSize: '15px'
      }"
      :cell-style="{ textAlign: 'center' }"
      row-key="id"
    >
      <el-table-column fixed type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="{ row }">
          <el-button-group size="small">
            <el-button type="primary" @click="detailAgree(row)">查看</el-button>
            <el-button type="warning" @click="editAgree(row)">修改</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="mt-4 flex justify-end"
      v-model:current-page="pagination.page"
      v-model:page-size="pagination.limit"
      :page-sizes="[10, 20, 50, 100]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="getApiData"
    />
    <updateAgree ref="updateAgreeRef" :getApiData="getApiData" />
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import updateAgree from "./updateAgree.vue";
import { agreeList } from "@/utils/commonData";

// import checkAgreements from "@/views/agreements/checkAgreements.vue";
// import AgreementsUpdate from "@/views/agreements/update.vue";
// import { apiEnterprise } from "@/api/enterprise";
// import { apiAgreementList } from "@/api/apiAgreement";
// import { hasAuth } from "@/router/utils";
const openLoading = ref(false);
// 分页信息
const pagination = ref({ page: 1, limit: 10 });
// 分页总数
const total = ref(3);
// 表格数据
const tableData = ref([]);
// 请求接口获取数据
const getApiData = () => {
  openLoading.value = true;
  setTimeout(() => {
    openLoading.value = false;
    tableData.value = agreeList;
  }, 300);
};

const updateAgreeRef = ref(null);
// 详情
const detailAgree = row => {
  console.log("🚀 ~ detailAgree ~ row:", row);
  updateAgreeRef.value.title = "协议详情";
  updateAgreeRef.value.dialog = true;
  updateAgreeRef.value.info = { ...row };
};
// 修改
const editAgree = row => {
  updateAgreeRef.value.title = "修改协议";
  updateAgreeRef.value.dialog = true;
  updateAgreeRef.value.info = { ...row };
};
const addAgree = () => {
  updateAgreeRef.value.title = "添加协议";
  updateAgreeRef.value.dialog = true;
};
// 挂载数据
onMounted(() => {
  getApiData();
});
</script>

<style scoped>
::v-deep .el-form-item__label {
  font-weight: 700;
  font-size: 15px;
}
</style>
