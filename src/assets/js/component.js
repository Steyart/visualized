import axios from 'axios';
import router from '../../router'
import apiUrl from './apiHeader.js';
import {MessageBox} from 'element-ui'

var instance = axios.create();
instance.defaults.timeout = 10000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const headerUrl = apiUrl.__proto__.apiUrl();
const headerApi = apiUrl.__proto__.api();


class Pubilc{
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(headerUrl.apiUrl + url,params,{headers:headerApi}).then(res => {
                if(res.data.code === 10) {
                    MessageBox('提示', '登录失效,请重新登录');
                    MessageBox.alert('登录失效,请重新登录', '提示').then(action => {   
                        /* router.push("/login"); */
                    }).catch(() => {
                        console.log(111);
                    });;
                }
                resolve(res.data);
            }).catch(error => {
                reject(error);
            })
        })
    };
    post(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(headerUrl.apiUrl + url,params,{headers:headerApi}).then(res => {
                if(res.data.code === 10) {
                    MessageBox('提示', '登录失效,请重新登录');
                    MessageBox.alert('登录失效,请重新登录', '提示').then(action => {   
                        /* router.push("/login"); */
                    }).catch(() => {
                        console.log(111);
                    });;
                }
                resolve(res.data);
            }).catch(error => {
                reject(error);
            })
        })
    };
    copy(obj){
        let objcopy = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === "object") {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    //判断ojb子元素是否为对象，如果是，递归复制
                    if (obj[key] && typeof obj[key] === "object") {
                        objcopy[key] = pubilc.copy(obj[key]);
                    } else {
                        //如果不是，简单复制
                        objcopy[key] = obj[key];
                    }
                }
            }
        }
        return objcopy;
    };

    swapArray(arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
    };
}
let pubilc = new Pubilc();

export default pubilc;
