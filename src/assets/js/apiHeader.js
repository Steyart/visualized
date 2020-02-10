/*
    #### 此处设置请求头信息，格式如下
    {
        "键名":"键值"
        "键名":"键值"
    }
*/
class ApiUrl{
    api(){
        return {
            "app":"wap-b2b-1d9s2",
            "sk":"68be8096035613693b8c9991118ec2e3",
        }
    };
    apiUrl(){
        return{
            "apiUrl":"/mobile"
        }
    }
}
let apiUrl = new ApiUrl();
export default apiUrl;