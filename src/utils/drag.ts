import Sortable from "sortablejs"
import { ref } from "vue"

// 初始化 sortablejs
let sortableInstance: Sortable | null = null

export const upTableData = ref({})
export const initSort = (
  tableData = null,
  tableRef = null,
  sendQuest = null
) => {
  if (tableRef.value && tableRef.value.$el) {
    // 获取表格的 tbody 元素（这是 sortablejs 需要操作的元素）
    const tbody = tableRef.value.$el.querySelector(
      ".el-table__body-wrapper tbody"
    ) as HTMLElement

    if (tbody) {
      // 初始化 sortablejs 实例
      sortableInstance = Sortable.create(tbody, {
        onEnd: function ({ newIndex, oldIndex }) {
          // 当拖拽结束时，更新你的数据顺序
          const movedItem = tableData.value.splice(oldIndex, 1)[0]
          tableData.value.splice(newIndex, 0, movedItem)

          // 更新排序
          if (tableData.value.length > newIndex + 1) {
            tableData.value[newIndex].sort =
              tableData.value[newIndex + 1].sort - 1
          } else {
            tableData.value[newIndex].sort =
              tableData.value[newIndex - 1].sort + 1
          }
          // 更改后的数据
          upTableData.value = { ...tableData.value[newIndex] }

          // 发送接口数据
          sendQuest()
        }
      })
    }
  }
}
