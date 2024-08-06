<script setup lang="ts">
defineOptions({
  /**
   *todo: 用户列表
   */
  name: "user"
});
import { onMounted, ref } from "vue";
import Search from "@/components/Search/index.vue";

import at1 from "@/assets/images/at1.jpg";
import at2 from "@/assets/images/at2.jpg";
import updateUser from "./updateUser.vue";
import { ElMessage, ElMessageBox } from "element-plus";
const openLoading = ref(false);
const userList = ref([
  {
    id: 111,
    group: "普通用户",
    nickname: "琨哥",
    mobile: "158****8888",
    phone: "15812348888",
    avatar: at1,
    money: 0,
    wechat_name: "年年有余",
    is_auth: "否",
    id_card_name: "未记录",
    id_card: "未记录",
    is_vip: "否",
    vip_time: null,
    kh_count: 0,
    jj_count: 0,
    sub_count: 0,
    withdraw_sign_time: null,
    usable_risk_count: 0,
    create_time: "2024-01-28",
    update_time: "2024-01-28",
    staff_remark: null,
    allocate_time: "2024-04-16",
    remark: "",
    extra: null,
    invite_name: "赵云 (888)",
    invite_id: 888,
    invite: "赵云",
    score: 0,
    invite_mobile: "17833389711",
    staff_name: "曹操",
    group_name: "普通用户"
  },
  {
    id: 222,
    group: "普通用户",
    nickname: "张明",
    score: 200,
    mobile: "158****7777",
    phone: "15812347777",
    avatar: at2,
    money: 666,
    wechat_name: "花开富贵",
    is_auth: "是",
    id_card_name: "张明",
    id_card: "3427221988******71",
    is_vip: "是",
    vip_time: null,
    kh_count: 3,
    jj_count: 6,
    sub_count: 12,
    withdraw_sign_time: null,
    usable_risk_count: 0,
    create_time: "2024-01-28",
    update_time: "2024-01-28",
    staff_remark: null,
    allocate_time: "2024-04-16",
    remark: "",
    extra: null,
    invite_name: "黄忠 (777)",
    invite_id: 777,
    invite: "黄忠",
    invite_mobile: "17828789797",
    staff_name: "曹操",
    group_name: "普通用户"
  }
]);
// 搜索条件
const searchFormDtata = [
  { label: "角色", prop: "role_id", type: "select1" },
  { label: "分配员工", prop: "ribute", type: "select2" },
  { label: "Vip", prop: "vip", type: "select3" },
  { label: "昵称", prop: "name", type: "text" }
];
const formSelect1 = [
  { label: "全部", value: "all" },
  { label: "管理员", value: "admin" },
  { label: "员工", value: "staff" },
  { label: "大B", value: "quality" }
];
const formSelect2 = [
  { label: "全部", value: "all" },
  { label: "曹操", value: "admin" },
  { label: "司马懿", value: "staff" },
  { label: "李白", value: "quality" }
];
const formSelect3 = [
  { label: "全部", value: "all" },
  { label: "是", value: "admin" },
  { label: "否", value: "staff" }
];

// 删除
const delUser = row => {
  ElMessageBox.confirm("您确定要删除吗?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(async () => {
    // 事件
    ElMessage.success("删除成功！");
    loading();
  });
};
// 查看
const dialog = ref(false);
const userInfoData = ref({});
const detUser = row => {
  dialog.value = true;
  userInfoData.value = row;
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
      :formSelect1="formSelect1"
      :formSelect2="formSelect2"
      :formSelect3="formSelect3"
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
      :data="userList"
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
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="group" label="角色" />
      <el-table-column prop="avatar" label="头像">
        <template #default="{ row }">
          <el-image :src="row.avatar" class="TableimgPic" />
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" />
      <el-table-column prop="invite_name" label="邀请人信息" />
      <el-table-column prop="staff_name" label="分配员工" />
      <el-table-column prop="is_auth" label="实名认证">
        <template #default="{ row }">
          <el-tag v-if="row.is_auth == '否'" type="danger">{{
            row.is_auth
          }}</el-tag>
          <el-tag v-else type="success">{{ row.is_auth }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="is_vip" label="VIP">
        <template #default="{ row }">
          <el-tag v-if="row.is_vip == '否'" type="danger">{{
            row.is_vip
          }}</el-tag>
          <el-tag v-else type="success">{{ row.is_vip }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="money" label="余额(元)" />
      <el-table-column prop="mobile" label="手机号" />
      <el-table-column show-overflow-tooltip prop="id_card" label="身份证号" />

      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column prop="update_time" label="更新时间" />

      <!-- <el-table-column prop="image" label="图片">
        <template #default="{ row }">
          <el-image :src="row.image" class="TableimgPic" />
        </template>
      </el-table-column> -->
      <el-table-column fixed="right" width="230" label="操作">
        <template #default="{ row }">
          <el-button type="primary" @click="detUser(row)">查看</el-button>
          <el-button type="warning" @click="editUser(row)">修改</el-button>
          <el-button type="danger" @click="delUser(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog destroy-on-close v-model="dialog" title="基本信息" width="50%">
      <updateUser :userInfoData="userInfoData" />
    </el-dialog>
  </el-card>
</template>

<style lang="scss" scoped>
::v-deep(.el-button + .el-button) {
  margin-left: 2px;
}
.TableimgPic {
  width: 90px;
  display: block;
  border-radius: 5px;
  margin: 0 auto;
}
</style>
