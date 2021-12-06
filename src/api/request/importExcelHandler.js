import axios from "axios";

const importExcelHandler = {
    // 请求 导入Excel
    requestAddConfig(data) {
        let _method = window.fdConfig.methodPost;
        let _data = data;
        let _url = window.fdConfig.url.exportAndImport('importPppoeExcel');
        // 返回一个 axios
        return axios({
            method: _method,
            url: _url,
            // URL参数
            // 必须是一个纯对象或者 URL参数对象
            data: _data,
            // 默认值是json
            responseType: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },
};
export default importExcelHandler;
