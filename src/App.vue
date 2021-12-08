<template>
  <div id="app">
    <h1>中移铁通Excel数据处理并整合导出系统</h1>
    <div style="padding-bottom: 20px;">
      请注意：如果文件为csv格式，请先使用office Excel或WPS等第三方工具先另存为xlsx格式再进行导入
    </div>
    <el-divider></el-divider>
    <pppoe-excel></pppoe-excel>
    <el-divider></el-divider>
    第二业务
    <el-divider></el-divider>
  </div>
</template>

<script>
import pppoeExcel from './components/pppoeExcel/pppoeExcel.vue'
export default {
  components: { pppoeExcel },
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  overflow-x: hidden;
}
</style>
