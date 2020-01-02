<template>
  <div>
    <div class="title">URL编解码</div>
    <div class="charset">
      字符集
      <el-radio v-model="charset" label="utf-8">UTF-8</el-radio>
      <el-radio v-model="charset" label="gbk">GBK</el-radio>
    </div>
    <el-row>
      <el-col :span="11">
        <el-input type="textarea" :rows="20" placeholder="请输入处理的内容" v-model="data"></el-input>
      </el-col>
      <el-col :span="2" class="center mtop">
        <div>
          <el-button @click="onSubmitClick(1)">编码</el-button>
        </div>
        <div class="mmtop">
          <el-button @click="onSubmitClick(2)">解码</el-button>
        </div>
      </el-col>
      <el-col :span="11">
        <el-input type="textarea" :rows="20" placeholder="等待输入..." v-model="cdata" readonly></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import urlencode from 'urlencode'
export default {
  data() {
    return {
      data: '',
      cdata: '',
      charset: 'utf-8'
    }
  },
  methods: {
    onSubmitClick(t) {
      if (t === 1) {
        this.cdata = urlencode(this.data, this.charset)
      } else if (t === 2) {
        this.cdata = urlencode.decode(this.data, this.charset)
      }
    }
  },
  computed: {}
}
</script>

<style scoped>
.charset {
  font-size: 14px;
  margin-bottom: 20px;
}

.charset .el-radio {
  margin: 0 12px;
}
</style>
