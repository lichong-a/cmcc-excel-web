import axios from "axios";

const exportExcelHandler = {
  // 请求 导出pppoeExcel
  requestExportPppoeExcel(data) {
    let _method = window.fdConfig.methodPost;
    let _data = data;
    let _url = window.fdConfig.url.exportAndImport('exportPppoeExcel');
    // 返回一个 axios
    return axios({
        method: _method,
        url: _url,
        data:_data,
        responseType: 'arraybuffer'
    });
  }
};
export default exportExcelHandler;
