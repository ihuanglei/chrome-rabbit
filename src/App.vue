<template>
  <el-container direction="vertical">
    <el-header>
      <Header />
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1','2', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-notebook-2"></i>工具
            </template>
            <el-menu-item index="1-1" @click="nav('json')">JSON视图</el-menu-item>
            <el-menu-item index="1-2" @click="nav('url')">URL编解码</el-menu-item>
            <el-menu-item index="1-3" @click="nav('base64')">Base64编解码</el-menu-item>
            <el-menu-item index="1-4" @click="nav('md5')">MD5编码</el-menu-item>
            <el-menu-item index="1-5" @click="nav('date')">时间戳转换</el-menu-item>
            <el-menu-item index="1-6" @click="nav('money')">金额大写转换</el-menu-item>
            <el-menu-item index="1-7" @click="nav('id')">身份证号生成器</el-menu-item>
            <el-menu-item index="1-8" @click="nav('password')">密码生成器</el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>Code
            </template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-submenu>-->
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
        <el-footer>
          <Footer />
        </el-footer>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    nav(url) {
      this.$router.push(url).catch(err => {})
    }
  },
  components: {
    Header: () => import('@/components/header/view'),
    Footer: () => import('@/components/footer/view')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  color: #5e6d82;
}

html,
body,
#app,
.el-container,
.el-menu {
  height: 100%;
}

.el-header {
  padding: 0;
  border-bottom: 1px solid #e7e7e7;
}

.el-col,
.el-textarea {
  height: 600px;
}

.el-textarea .el-textarea__inner {
  height: 100%;
}

.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent;
}

.center {
  text-align: center;
}

.title {
  margin-bottom: 48px;
  font-size: 24px;
  color: #1f2f3d;
}

.mtop {
  margin-top: 24px;
}

.mmtop {
  margin-top: 12px;
}
</style>
