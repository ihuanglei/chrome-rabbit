<template>
  <div>
    <div class="title">Base64编解码</div>
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
import { Base64 } from 'js-base64'
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
        this.cdata = Base64.encode(this.data)
      } else if (t === 2) {
        this.cdata = Base64.decode(this.data)
      }
    }
  },
  computed: {}
}
</script>
