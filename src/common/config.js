// 服务器配置
import serverUrl from '../api/http/server-config.js';
// 默认开发环境
let develop = false;
// 配置文件
let config = {
    componentPrefix: 'component-',
    classPrefix: 'fd-',
    //  是否是调试模式，true 为json数据，false 为服务器数据
    isDebug: develop,
    // 是否显示日志
    showLog: false,
    // ajax查询方式   GET
    methodGet: 'GET',
    // ajax查询方式  POST
    methodPost: 'POST',
    // ajax查询方式  PUT
    methodPut: 'PUT',
    // ajax查询方式  DELETEsocketio
    methodDelete: 'DELETE',
    // ajax查询方式  PATCH
    methodPatch: 'PATCH',
    //  url链接,也就是数据的地址
    url: serverUrl
};
//  注册全局变量，fdConfig
window.fdConfig = config;
