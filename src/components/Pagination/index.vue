<script setup lang="ts">
// 分页组件

defineOptions({
  name: "Pagination"
});
import { ref } from "vue";
const props = defineProps({
  limit: {
    default: 10
  }
});
const total = ref(0);
const pageParams = ref({ page: 1, limit: props.limit });
defineExpose({
  pageParams,
  total
});
</script>

<template>
  <el-pagination
    class="flex justify-end mt-4"
    v-model:current-page="pageParams.page"
    v-model:page-size="pageParams.limit"
    :page-sizes="[limit, 15, 20, 50]"
    :background="true"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="$emit('refreshPage')"
    @current-change="$emit('refreshPage')"
  />
</template>

<style lang="scss" scoped></style>
