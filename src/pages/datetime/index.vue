<template>
  <div>
    <div class="title">时间戳转换</div>
    <div class="field">
      <label class="w1">时间</label>
      <el-date-picker v-model="datetime" type="datetime" placeholder="请选择时间" value-format="timestamp" />
      <el-button disabled>转换 ></el-button>
      <div>
        <el-input prefix-icon="el-icon-time" v-model="datetime1" placeholder="等待选择..." readonly />
      </div>
      <el-select class="ct" v-model="ct">
        <el-option label="秒(s)" :value="1"></el-option>
        <el-option label="毫秒(ms)" :value="2"></el-option>
      </el-select>
    </div>
    <div class="field">
      <label>时间戳</label>
      <div>
        <el-input prefix-icon="el-icon-time" v-model="timestamp" placeholder="请输入时间戳" clearable />
      </div>
      <el-select class="ct" v-model="ct1">
        <el-option label="秒(s)" :value="1"></el-option>
        <el-option label="毫秒(ms)" :value="2"></el-option>
      </el-select>
      <el-button disabled>转换 ></el-button>
      <el-date-picker v-model="timestamp1" type="datetime" placeholder="等待输入..." value-format="timestamp" readonly />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ct: 1,
      ct1: 1,
      datetime: '',
      timestamp: ''
    }
  },
  computed: {
    datetime1() {
      if (!this.datetime || this.datetime === '') {
        return ''
      } else {
        if (this.ct === 1) {
          return this.datetime / 1000
        } else if (this.ct === 2) {
          return this.datetime
        }
      }
    },
    timestamp1() {
      if (this.ct1 === 1) {
        return this.timestamp * 1000
      } else {
        return this.timestamp
      }
    }
  }
}
</script>
<style scoped>
.el-input {
  width: 250px;
}
.field {
  margin-bottom: 20px;
}
.field > div {
  display: inline-block;
}

.field label {
  font-size: 14px;
}

.field > label {
  width: 4em;
}

.field label.w1 {
  letter-spacing: 1em;
  margin-right: -1em;
}

.field > label + div {
  margin-left: 10px;
}

.field .el-button {
  margin: 0 10px;
  color: #606266;
  cursor: pointer;
  background-color: #f2f2f2;
}
.ct {
  width: 120px;
  margin-left: 10px;
}
</style>
