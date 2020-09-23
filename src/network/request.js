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
    return config;
    },err=>{
      console.log(err);
    console.log('请求拦截异常');
    return err;
  })
  instance.interceptors.response.use(a=>{
      console.log('成功了');
      return a;
    },error => {
    console.log(error);
    console.log('失败了');
    });
    //3.发送网络请求
    return instance(config);
}