import request from '@/utils/request'

// 查询数据源列表
export function listDsPage(query) {
  return request({
    url: '/dp/dss',
    params: query
  })
}

// 数据源详情
export function getDs(id) {
  return request(`/dp/ds/${id}`);
}

// 添加/编辑数据源
export function addOrUpdateDs(data) {
  return request({
    url: '/dp/ds',
    method: 'post',
    data: data
  })
}

// 删除数据源
export function deleteDs(ids) {
  return request.delete(`/dp/ds?ids=${ids}`);
}

// 数据源状态编辑
export function changeDsStatus(id, status) {
  const data = {
    id,
    status
  }
  return request({
    url: '/dp/ds/status',
    method: 'post',
    data: data
  })
}