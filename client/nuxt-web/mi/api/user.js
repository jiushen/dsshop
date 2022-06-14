import request from '@/plugins/request'
import Qs from 'qs'
export function detail() {
  return request({
    url: 'user',
    method: 'GET'
  })
}
export function edit(data) {
  data = Qs.parse(data)
  return request({
    url: 'user',
    method: 'POST',
    data
  })
}
export function cancel(data) {
  data = Qs.parse(data)
  return request({
    url: 'cancel',
    method: 'POST',
    data
  })
}
export function openapi(query) {
  return request({
    url: 'getUserInfo',
    method: 'GET',
    params: query
  })
}
export function orderList(query) {
  return request({
    url: 'getOrderList',
    method: 'GET',
    params: query
  })
}
