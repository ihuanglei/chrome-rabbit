<template>
  <div>
    <div class="title">MD5编码</div>
    <el-row>
      <el-col :span="11">
        <el-input type="textarea" :rows="20" placeholder="请输入处理的内容" v-model="data"></el-input>
      </el-col>
      <el-col :span="2" class="hit">
        <p>&lt;自动转换&gt;</p>
      </el-col>
      <el-col :span="11">
        <el-input type="textarea" :rows="20" placeholder="等待输入..." v-model="cdata" readonly></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import md5 from 'blueimp-md5'
export default {
  data() {
    return {
      data: '',
      charset: 'utf-8'
    }
  },
  computed: {
    cdata() {
      if (this.data === '') return ''
      return md5(this.data)
    }
  }
}
</script>

<style scoped>
.hit {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a4acb0;
  font-size: 12px;
}
</style>
