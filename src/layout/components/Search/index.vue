<script setup lang="ts">
defineOptions({
  name: "Search"
})
import { useRenderIcon } from "@/components/ReIcon/src/hooks"
// import { apiListAdmin } from "@/api/apiAdministrator"
import { ref } from "vue"
const props = defineProps([
  "searchFormDtata",
  "refreshList",
  "formSelect1",
  "formSelect2",
  "formSelect3"
])
const loading = ref(false)
const searchForm = ref<any>({})
const data = { isFalse: true }
const emits = defineEmits(["clearSort"])
const resetSearch = () => {
  searchForm.value = {}
  emits("clearSort", data)
  props.refreshList()
}
// const remoteMethod = (query: number) => {
//   if (query) {
//     loading.value = true
//     debounce(ListAdmin(query), 500)
//   } else {
//     formSelect3.value = []
//   }
// }
// const formSelect3 = ref([])
// const ListAdmin = async id => {
//   const { code, data } = await apiListAdmin({ search: id })
//   loading.value = false
//   if (code !== 200) return
//   formSelect3.value = data
// }

const disabledDate = time => {
  return time < searchForm.value.start
}

const disabledDateStart = time => {
  if (searchForm.value.end) {
    return time > searchForm.value.end
  }
}
const handleStart = () => {
  if (searchForm.value.start) {
    let date = new Date(searchForm.value.start)
    searchForm.value.start =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " 00:00:00"
  }
}

const handleEnd = () => {
  if (searchForm.value.end) {
    let date = new Date(searchForm.value.end)
    searchForm.value.end =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " 23:59:59"
  }
}
// todo: 定义防抖函数：
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
defineExpose({
  searchForm,
  handleEnd,
  handleStart
})
</script>

<template>
  <el-form
    :model="searchForm"
    class="flex flex-wrap justify-start gap-x-6"
    label-position="right"
  >
    <el-form-item :label="item.label" v-for="item in searchFormDtata">
      <el-select
        v-if="item.type === 'select1'"
        v-model="searchForm[item.prop]"
        :placeholder="`请输入${item.label}`"
        style="width: 180px"
      >
        <el-option
          v-for="item in formSelect1"
          :key="item.label"
          :value="item.value"
          :label="item.label"
        />
      </el-select>

      <el-select
        v-else-if="item.type === 'select2'"
        v-model="searchForm[item.prop]"
        :placeholder="`请输入${item.label}`"
        style="width: 180px"
      >
        <el-option
          v-for="item in formSelect2"
          :key="item.label"
          :value="item.value"
          :label="item.label"
        />
      </el-select>

      <!-- <el-select
        v-else-if="item.type === 'select3'"
        v-model="searchForm[item.prop]"
        placeholder="请输入u+id号或姓名或手机号"
        style="width: 260px"
        filterable
        remote
        reserve-keyword
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in formSelect3"
          :key="item.label"
          :value="item.value"
          :label="item.name"
        />
      </el-select> -->

      <el-input
        v-else-if="item.type === 'text'"
        v-model="searchForm[item.prop]"
        :placeholder="`请输入${item.label}`"
        style="width: 180px"
        required="true"
      />
      <el-date-picker
        v-else-if="item.type === 'timeStart'"
        style="width: 140px"
        v-model="searchForm[item.prop]"
        type="date"
        placeholder="选择日期"
        :disabled-date="disabledDateStart"
      />
      <el-date-picker
        v-else="item.type === 'timeEnd'"
        style="width: 140px"
        v-model="searchForm[item.prop]"
        type="date"
        placeholder="选择日期"
        :disabled-date="disabledDate"
      />
    </el-form-item>
    <el-button
      type="primary"
      @click="refreshList"
      :icon="useRenderIcon('ep:search')"
    >
      查询
    </el-button>
  </el-form>
  <div class="mb-2 flex justify-end">
    <slot name="btn"></slot>
    <el-button-group>
      <el-tooltip content="重置" placement="top">
        <el-button
          type="info"
          :icon="useRenderIcon('ep:refresh-left')"
          @click="resetSearch"
        />
      </el-tooltip>
      <el-tooltip content="刷新" placement="top">
        <el-button
          type="primary"
          @click="refreshList"
          :icon="useRenderIcon('ep:refresh')"
        />
      </el-tooltip>
    </el-button-group>
  </div>
</template>
<style lang="scss" scoped></style>
