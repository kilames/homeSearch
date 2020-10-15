import request from '@/utils/request'

export const getBanner = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}
