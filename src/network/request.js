import axios from 'axios'


export function service(config) {
  //1.创建axios实例
    const instance = axios.create({
      baseURL: '/api/',
      timeout:10000,
    })
    //2.拦截器
  instance.interceptors.request.use(config=>{
    console.log('请求拦截');
    console.log(config);
    const token = sessionStorage.authorization;
    if(token!==undefined&&token!==''){
      config.headers['Authorization'] = token;
    }
    return config;
    },err=>{
      console.log(err);
    console.log('请求拦截异常');
    return err;
  })
  instance.interceptors.response.use(
      response=>{
    const headers = response.headers;
    if(headers != null && headers['content-type'] === 'multipart/form-data;charset=UTF-8') {
      return response.data
    }
    if (headers != null && headers['content-type'] === 'application/json;charset=UTF-8') {
        if (response.data.code === 401 || response.data.code === 402) {
          sessionStorage.clear();
          setTimeout(() => window.location.href = '#/login',2000)
        }
        // Vue.prototype.$Message.error(response.data.appData.tipMsg || response.data.appData.errMsg);
        // return Promise.reject(response)
    }
    return Promise.resolve(response)
    },error => {
    console.log(error);
    console.log('失败了');
    //跳转到登录页
    let code = error.response.status;
    if(code===401){
      window.location.href = "/login";
    }
    });
    //3.发送网络请求
    return instance(config);
}