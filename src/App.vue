<template>
  <div id="app">
<!--    <h1>中移铁通Excel数据处理并整合导出系统</h1>-->
    <div style="padding-bottom: 20px;">
      请注意：如果文件为csv格式，请先使用office Excel或WPS等第三方工具先另存为xlsx格式再进行导入
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">第一步，导入PPPOE+和综资差异明细.xlsx</div>
        <el-upload
          class="upload-demo"
          :before-upload="beforeAvatarUpload"
          action="/api/read/pppoe/1"
          :limit="1">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">第二步，导入OLT的配置查询结果.xlsx</div>
        <el-upload
          class="upload-demo"
          :before-upload="beforeAvatarUpload"
          action="/api/read/pppoe/2"
          :limit="1">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">第三步，导入端口ONU的配置查询结果.xlsx</div>
        <el-upload
          class="upload-demo"
          :before-upload="beforeAvatarUpload"
          action="/api/read/pppoe/3"
          :limit="1">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">第四步，导入分光器的配置查询结果.xlsx</div>
        <el-upload
          class="upload-demo"
          :before-upload="beforeAvatarUpload"
          action="/api/read/pppoe/4"
          :limit="1">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">第五步，导入分光器端口的配置查询结果.xlsx</div>
        <el-upload
          class="upload-demo"
          :before-upload="beforeAvatarUpload"
          action="/api/read/pppoe/5"
          :limit="1">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    beforeAvatarUpload(file) {
      const isExcel = file.type === 'application/vnd.ms-excel' || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      if (!isExcel) {
        this.$message.error('上传头像图片只能是 xls 或 xlsx 格式!');
      }
      return isExcel;
    }
  }
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
</style>
