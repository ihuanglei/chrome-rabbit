<template>
  <div>
    <div class="title">JSON视图</div>
    <el-row>
      <el-col :span="11">
        <div id="codeEditor" style="width: 100%; height: 600px;"></div>
      </el-col>
      <el-col :span="2" class="hit">
        <p>&lt; 自动转换 &gt;</p>
      </el-col>
      <el-col :span="11">
        <div id="previewEditor" style="width: 100%; height: 600px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'

export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {
    let codeEditor = new JSONEditor(document.getElementById('codeEditor'), {
      mode: 'code',
      onChangeText: function(value) {
        try {
          previewEditor.updateText(value)
        } catch (e) {}
      }
    })

    let previewEditor = new JSONEditor(
      document.getElementById('previewEditor'),
      {
        mode: 'tree',
        onChangeText: function(value) {
          try {
            codeEditor.updateText(value)
          } catch (e) {}
        }
      }
    )
  }
}
</script>

<style>
.jsoneditor-menu {
  background-color: #ccc;
  border: 1px solid #ccc;
}

.jsoneditor {
  border: 1px solid #dcdcdc;
}
.jsoneditor-modal .pico-modal-header {
  background-color: #ccc;
}
.hit {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a4acb0;
  font-size: 12px;
}
</style>
