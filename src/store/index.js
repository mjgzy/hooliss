import { createStore } from 'vuex'
import {service} from '../network/request'
export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    //登录方法
    Login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
        service({
          'url':'',
          'method':'post',
          'data':{user:user}
        }).then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          // 每次请求接口时，需要在headers添加对应的Token验证
          service.defaults.headers.common['Authorization'] = token
          // 更新token
          commit('auth_success', token, user)
          resolve(resp)
        }).catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    //登出方法
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        service({
          url:''
        }).then(response => {
            // removeIsLogin()
            localStorage.removeItem('loginUsername');
            // 移除之前在axios头部设置的token,现在将无法执行需要token的事务
            delete service.defaults.headers.common['Authorization'];
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
