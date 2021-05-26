import request from '@/utils/request'

// 查询字典类型列表
export function listDictType(query) {
  return request({
    url: '/system/dict/types',
    params: query
  })
}

// 查询字典类型详细
export function listDictDataByCode(id) {
  return request(`/system/dict/type/${id}`);
}

// 添加或者编辑字典类型
export function addOrUpdateDictType(data) {
  return request({
    url: '/system/dict/type',
    method: 'post',
    data: data
  })
}

// 删除字典类型
export function deleteDictType(codes) {
  return request.delete(`/system/dict/type?codes=${codes}`);
}

// 获取字典选择框列表
export function optionSelect() {
  return request('/system/dict/type')
}

// 字典类型状态编辑
export function changeDictTypeStatus(id, status) {
  const data = {
    id,
    status
  }
  return request({
    url: '/system/dict/type/status',
    method: 'post',
    data: data
  })
}