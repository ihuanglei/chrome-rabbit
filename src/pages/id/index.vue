<template>
  <div>
    <div class="title">身份证号生成器</div>
    <el-row>
      <el-col :span="6">
        <div class="field">
          <label>出生地址</label>
          <div>
            <el-cascader size="large" :options="options" @change="onAreaChange" placeholder="请选择出生地址" />
          </div>
        </div>
        <div class="field">
          <label>出生日期</label>
          <div>
            <el-date-picker type="date" v-model="birthdate" value-format="yyyyMMdd" placeholder="请选择出生日期" />
          </div>
        </div>
        <div class="field">
          <label class="w1">性别</label>
          <div>
            <el-radio v-model="sex" label="1">男</el-radio>
            <el-radio v-model="sex" label="2">女</el-radio>
          </div>
        </div>
        <div class="field">
          <label>生成数量</label>
          <div>
            <el-radio v-model="numb" :label="5" />
            <el-radio v-model="numb" :label="10" />
            <el-radio v-model="numb" :label="20" />
            <el-radio v-model="numb" :label="50" />
          </div>
        </div>
        <el-button class="btn" @click="onSubmitClick">生成身份证号</el-button>
      </el-col>
      <el-col :span="18">
        <el-input type="textarea" :rows="20" v-model="ids" readonly></el-input>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { regionData } from 'element-china-area-data'

export default {
  data() {
    return {
      options: regionData,
      area: '',
      birthdate: '',
      sex: '1',
      numb: 5,
      idCards: []
    }
  },
  methods: {
    onAreaChange(value) {
      this.area = value[2]
    },
    onSubmitClick() {
      this.buildIDCards()
    },
    buildIDCards() {
      if (this.area === '') {
        this.$message.error('请选择出生地址')
        return
      }

      if (this.birthdate == '') {
        this.$message.error('请选择出生日期')
        return
      }

      // 随机数
      let random = () => {
        return Math.floor(Math.random() * 10).toString()
      }
      // 校验位
      let lastNum = val => {
        let exps = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 加权因子
        let valids = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2] // 校验码
        let sum = 0
        for (let j = 0; j < 17; j++) {
          sum += parseInt(val[j], 10) * exps[j]
        }
        return val + valids[sum % 11]
      }
      let i = this.numb
      this.idCards.length = 0
      while (i > 0) {
        let n = lastNum(
          this.area + this.birthdate + random() + random() + this.sex
        )
        if (this.idCards.indexOf(n) === -1) {
          this.idCards.push(n)
          i--
        }
      }
    }
  },
  computed: {
    ids() {
      return this.idCards.join('\n')
    }
  }
}
</script>

<style scoped>
.el-row .field {
  margin-bottom: 20px;
}

.el-row .field > div {
  display: inline-block;
  margin-left: 20px;
}

.el-row label {
  font-size: 14px;
}

.el-row > label {
  width: 4em;
}
.el-row label.w1 {
  letter-spacing: 2em;
  margin-right: -2em;
}

.el-cascader,
.el-date-editor {
  width: 250px;
}
.el-radio {
  margin-right: 10px;
}
</style>
