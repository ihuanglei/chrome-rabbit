<template>
  <div>
    <div class="title">密码生成器</div>
    <el-row>
      <el-col :span="7">
        <div class="field">
          <label class="w1">条件</label>
          <div>
            <el-checkbox v-model="hasNumber">0-9</el-checkbox>
            <el-checkbox v-model="hasLowerCase">a-z</el-checkbox>
            <el-checkbox v-model="hasUpperCase">A-Z</el-checkbox>
            <el-checkbox v-model="hasSymbol">~!@#$%^()_+{}?;.,</el-checkbox>
          </div>
        </div>
        <div class="field">
          <label>密码长度</label>
          <div>
            <el-select v-model="len" placeholder="请选择密码长度">
              <el-option label="6" value="6" />
              <el-option label="8" value="8" />
              <el-option label="10" value="10" />
              <el-option label="12" value="12" />
              <el-option label="16" value="16" />
              <el-option label="20" value="20" />
              <el-option label="24" value="24" />
              <el-option label="32" value="32" />
              <el-option label="48" value="48" />
            </el-select>
          </div>
        </div>
        <el-button class="btn" @click="onSubmitClick">生成随机密码</el-button>
      </el-col>
      <el-col :span="17">
        <el-input type="textarea" :rows="20" v-model="password" readonly></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasNumber: true,
      hasUpperCase: true,
      hasLowerCase: true,
      hasSymbol: false,
      len: 8,
      password: ''
    }
  },
  methods: {
    onSubmitClick() {
      let randomLower = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      }
      let randomUpper = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      }
      let randomNumber = () => {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
      }
      let randomSymbol = () => {
        const symbols = '~!@#$%^()_+{}?;.,'
        return symbols[Math.floor(Math.random() * symbols.length)]
      }
      let am = []
      if (this.hasNumber) {
        am.push(randomNumber)
      }
      if (this.hasUpperCase) {
        am.push(randomUpper)
      }
      if (this.hasLowerCase) {
        am.push(randomLower)
      }
      if (this.hasSymbol) {
        am.push(randomSymbol)
      }
      if (am.length === 0) {
        this.$message.error('select method')
        return
      }

      let j = 0
      this.password = ''
      while (j++ < 5) {
        am.sort(() => (Math.random() > 0.5 ? -1 : 1))
        let password = ''
        let i = 0
        while (i++ < this.len) {
          password += am[i % am.length]()
        }
        this.password = this.password + password + '\n'
      }
    },
    onSelectBlur(e) {
      this.len = e.target.value
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
.el-checkbox {
  margin-right: 10px;
}
</style>
