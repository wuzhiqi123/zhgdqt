import axios from "axios"
import { Message,Loading } from 'element-ui';

let loading;
function startloading(){
    loading = Loading.service({
    lock:true,
    text:"拼命加载中",
    background:'rgba(0.0.0.0.7)'
    })

}

function endloading(){
    loading.close()

}

//请求拦截

axios.interceptors.request.use(config =>{
    startloading();
    return config;
}),error =>{
return Promise.reject(error)
}

//响应拦截
axios.interceptors.response.use(response =>{
    endloading()
    return response;
}),error=>{
    endloading()
    Message.error(error , response.data)
    return Promise.reject(error)
}
export default  axios;