let dirServicePath = window.serverConfig.dirServicePath;
// 服务数据
const serverUrl = {
    // ********************************************
    //                   导入和导出
    // ********************************************
    exportAndImport: (category, ...args) => {
        // id
        const id = args[0];
        return {
            // PPPOE导入【POST】
            importPppoeExcel: `${dirServicePath}/api/read/pppoe/${id}`,
        }[category];
    }
};
export default serverUrl;
