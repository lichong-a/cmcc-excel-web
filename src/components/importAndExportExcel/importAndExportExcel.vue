<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <el-divider>公用数据</el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">分光器的配置查询结果.xlsx</div>
        <el-upload :class="{'active':upLoadStatus.four}"
                   :before-upload="beforeAvatarUpload"
                   action="/api/read/pppoe/4"
                   :on-success="pppoeUploadSuccessd"
                   :on-remove="pppoeUploadRemove4"
                   :on-exceed="onExceed"
                   accept=".xls, .xlsx"
                   :limit="1">
          <el-button size="small"
                     type="primary">{{upLoadStatus.four ? '已上传' : '点击上传'}}</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">分光器端口的配置查询结果.xlsx</div>
        <el-upload :class="{'active':upLoadStatus.five}"
                   :before-upload="beforeAvatarUpload"
                   action="/api/read/pppoe/5"
                   :on-success="pppoeUploadSuccessd"
                   :on-remove="pppoeUploadRemove5"
                   :on-exceed="onExceed"
                   accept=".xls, .xlsx"
                   :limit="1">
          <el-button size="small"
                     type="primary">{{upLoadStatus.five ? '已上传' : '点击上传'}}</el-button>
        </el-upload>
      </el-col>
    </el-row>
    <el-divider>业务一：PPPOE</el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">PPPOE+和综资差异明细.xlsx</div>
        <el-upload :class="{'active':upLoadStatus.one}"
                   :before-upload="beforeAvatarUpload"
                   action="/api/read/pppoe/1"
                   :on-success="pppoeUploadSuccessd"
                   :on-remove="pppoeUploadRemove1"
                   :on-exceed="onExceed"
                   accept=".xls, .xlsx"
                   :limit="1">
          <el-button size="small"
                     type="primary">{{upLoadStatus.one ? '已上传' : '点击上传'}}</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">OLT的配置查询结果.xlsx</div>
        <el-upload :class="{'active':upLoadStatus.two}"
                   :before-upload="beforeAvatarUpload"
                   action="/api/read/pppoe/2"
                   :on-success="pppoeUploadSuccessd"
                   :on-remove="pppoeUploadRemove2"
                   :on-exceed="onExceed"
                   accept=".xls, .xlsx"
                   :limit="1">
          <el-button size="small"
                     type="primary">{{upLoadStatus.two ? '已上传' : '点击上传'}}</el-button>
        </el-upload>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">端口ONU的配置查询结果.xlsx</div>
        <el-upload :class="{'active':upLoadStatus.three}"
                   :before-upload="beforeAvatarUpload"
                   action="/api/read/pppoe/3"
                   :on-success="pppoeUploadSuccessd"
                   :on-remove="pppoeUploadRemove3"
                   :on-exceed="onExceed"
                   accept=".xls, .xlsx"
                   :limit="1">
          <el-button size="small"
                     type="primary">{{upLoadStatus.three ? '已上传' : '点击上传'}}</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12"
              v-if="showDownload">
        <div class="grid-content bg-purple">请点击导出</div>
        <el-button size="small"
                   type="info"
                   @click="exportExcel">导出结果</el-button>
      </el-col>
    </el-row>
    <el-divider>业务二：分光器端口重复</el-divider>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">分光器端口重复明细.xlsx</div>
        <el-upload :class="{'active':upLoadStatus.six}"
                   :before-upload="beforeAvatarUpload"
                   action="/api/read/fgqPortRepeat/1"
                   :on-success="fgqPortRepeatUploadSuccessd"
                   :on-remove="fgqPortRepeatUploadRemove"
                   :on-exceed="onExceed"
                   accept=".xls, .xlsx"
                   :limit="1">
          <el-button size="small"
                     type="primary">{{upLoadStatus.six ? '已上传' : '点击上传'}}</el-button>
        </el-upload>
      </el-col>
      <el-col :span="12"
              v-if="showDownload2">
        <div class="grid-content bg-purple">请点击导出</div>
        <el-button size="small"
                   type="info"
                   @click="exportExcel2">导出结果</el-button>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
import exportExcelHandler from 'api/request/exportExcelHandler.js'
export default {
  name: 'importAndExportExcel',
  mixins: [exportExcelHandler],
  data() {
    return {
      upLoadStatus: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
      },
      fullscreenLoading: false,
    }
  },
  computed: {
    showDownload: function () {
      return (
        this.upLoadStatus.one === true &&
        this.upLoadStatus.two === true &&
        this.upLoadStatus.three === true &&
        this.upLoadStatus.four === true &&
        this.upLoadStatus.five === true
      )
    },
    showDownload2: function () {
      return (
        this.upLoadStatus.four === true &&
        this.upLoadStatus.five === true &&
        this.upLoadStatus.six === true
      )
    },
  },
  methods: {
    beforeAvatarUpload(file) {
      const isExcel =
        file.type === 'application/vnd.ms-excel' ||
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      if (!isExcel) {
        this.$message.error('上传头像图片只能是 xls 或 xlsx 格式!')
      }
      return isExcel
    },
    pppoeUploadSuccessd(res) {
      if (res.code === 200) {
        switch (res.message) {
          case '1':
            this.upLoadStatus.one = true
            break
          case '2':
            this.upLoadStatus.two = true
            break
          case '3':
            this.upLoadStatus.three = true
            break
          case '4':
            this.upLoadStatus.four = true
            break
          case '5':
            this.upLoadStatus.five = true
            break
        }
      }
    },
    fgqPortRepeatUploadSuccessd(res) {
      if (res.code === 200) {
        this.upLoadStatus.six = true
      }
    },
    exportExcel() {
      const _data = {}
      this.fullscreenLoading = true
      exportExcelHandler.requestExportPppoeExcel(_data).then((res) => {
        if (res.headers['content-disposition']) {
          const fileName = window.decodeURI(
            res.headers['content-disposition'].split('=')[1]
          )
          const fName = fileName !== 'undefined' ? fileName : '结果.xlsx' //名称（带文件后缀类型）'aaa.txt';
          const blob = new Blob([res.data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
          })
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fName)
          } else {
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = fName
            link.click()
            window.URL.revokeObjectURL(link.href)
          }
        } else {
          this.$message.error('服务器错误！')
        }
        this.fullscreenLoading = false
      })
    },
    exportExcel2() {
      const _data = {}
      this.fullscreenLoading = true
      exportExcelHandler.requestExportFgqPortRepeatExcel(_data).then((res) => {
        if (res.headers['content-disposition']) {
          const fileName = window.decodeURI(
            res.headers['content-disposition'].split('=')[1]
          )
          const fName = fileName !== 'undefined' ? fileName : '结果.xlsx' //名称（带文件后缀类型）'aaa.txt';
          const blob = new Blob([res.data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
          })
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fName)
          } else {
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = fName
            link.click()
            window.URL.revokeObjectURL(link.href)
          }
        } else {
          this.$message.error('服务器错误！')
        }
        this.fullscreenLoading = false
      })
    },
    pppoeUploadRemove1(file, fileList) {
      if (fileList.length === 0) {
        this.upLoadStatus.one = false
      }
    },
    pppoeUploadRemove2(file, fileList) {
      if (fileList.length === 0) {
        this.upLoadStatus.two = false
      }
    },
    pppoeUploadRemove3(file, fileList) {
      if (fileList.length === 0) {
        this.upLoadStatus.three = false
      }
    },
    pppoeUploadRemove4(file, fileList) {
      if (fileList.length === 0) {
        this.upLoadStatus.four = false
      }
    },
    pppoeUploadRemove5(file, fileList) {
      if (fileList.length === 0) {
        this.upLoadStatus.five = false
      }
    },
    fgqPortRepeatUploadRemove(file, fileList) {
      if (fileList.length === 0) {
        this.upLoadStatus.six = false
      }
    },
    onExceed() {
      this.$message.error('文件数量超限！请先删除后再重新上传')
    }
  },
}
</script>

<style>
</style>
