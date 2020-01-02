<template>
  <div>
    <div class="title">金额大写转换</div>
    <el-row>
      <el-col :span="12">
        <div class="field">
          <label>数字金额</label>
          <el-input prefix-icon="el-icon-money" placeholder="请输入金额" v-model="inputNum" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="field">
          <label>中文金额</label>
          <el-input prefix-icon="el-icon-money" placeholder="等待输入..." v-model="cn" readonly />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import nzh from 'nzh/dist/nzh.cn.min'

export default {
  data() {
    return {
      inputNum: '',
      nums: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
      units: ['亿', '万', '仟', '佰', '拾', '元', '角', '分', '圆']
    }
  },
  computed: {
    cn() {
      return nzh.toMoney(this.inputNum)
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row .field > div {
  display: inline-block;
  margin-left: 20px;
  width: 600px;
}

.el-row label {
  font-size: 14px;
}

.el-col {
  height: auto;
}
</style>
