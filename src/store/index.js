import { createStore } from 'vuex'
import {service} from '../network/request'
export default createStore({
  state: {
    status: 'logout',
    token: localStorage.getItem('authorization') || '',
    user: {username:'',password:''}
  },
  mutations: {
    auth_request(state) {
      console.log('auth_request');
      state.status = 'loading';
    },
    auth_success(state, payload) {
      state.status = 'success';
      state.token = payload.token;
      state.user = payload.user;
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
        commit('auth_request');
        // 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
        const params = new URLSearchParams();
        params.append('username',user.username);
        params.append('password',user.password);
        service({
          url:'/auth/login',
          method:'post',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data:params
        }).then(resp => {
          console.log('resp>>>',resp);
          const token = resp.headers.authorization
          const user = resp.data.data
          debugger;
          localStorage.setItem('authorization', token)
          // 更新token
          commit('auth_success', {token, user})
          resolve(resp)
        }).catch(err => {
            commit('auth_error')
            localStorage.removeItem('authorization')
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
