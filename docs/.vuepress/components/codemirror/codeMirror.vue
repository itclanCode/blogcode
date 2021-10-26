<template>
  <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="脚本内容">
            <div class="in-coder-panel">
              <div>
                 <el-select class="code-mode-select" v-model="mode" @change="changeMode">
                   <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                   </el-option>
                 </el-select>
              </div>
              <div>
                  <textarea class="code-textarea"  ref="textarea" name="code"></textarea>
              </div>
              
            </div>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
// 引入全局实例
import CodeMirror from 'codemirror'
// 核心样式
import 'codemirror/lib/codemirror.css'
// 引入主题后还需要在 options 中指定主题才会生效
// import 'codemirror/theme/idea.css'
// import 'codemirror/theme/midnight.css'
// import 'codemirror/theme/material-darker.css'
import 'codemirror/theme/seti.css'
// import 'codemirror/theme/tomorrow-night-eighties.css'
// import 'codemirror/theme/monokai.css'  // vscode主题配色
// 需要引入具体的语法高亮库才会有对应的语法高亮效果
// codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css'
import 'codemirror/mode/clike/clike'   // Java代码高亮必须引入
import 'codemirror/mode/go/go'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/http/http'
import 'codemirror/mode/php/php'
import 'codemirror/mode/python/python'
import 'codemirror/mode/http/http'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/yaml/yaml.js'
import 'codemirror/mode/yaml-frontmatter/yaml-frontmatter.js'

//代码补全提示
import 'codemirror/addon/hint/anyword-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/html-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/xml-hint.js';
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/search/searchcursor.js'
// 代码折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'

// 全屏模式
import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/addon/display/fullscreen.js';

// 括号匹配
import 'codemirror/addon/edit/matchbrackets.js'
// 引入快捷键
import 'codemirror/keymap/sublime.js'
import 'codemirror/keymap/emacs.js'
import 'codemirror/keymap/vim.js'
//设置滚动条,默认为"null"为不显示的滚动条，可以使用提供的其他滚动条：“simple”,"overlay"选择内侧与外侧的滚动条,使用需引入以下工具
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'
// styleActiveLine: 设置光标所在行高亮true/false，需引入工具包
import 'codemirror/addon/selection/active-line'

//代码版本差异比较
import 'codemirror/addon/merge/merge.js'
import 'codemirror/addon/merge/merge.css'
import DiffMatchPatch from 'diff-match-patch'

window.diff_match_patch = DiffMatchPatch
window.DIFF_DELETE = -1
window.DIFF_INSERT = 1
window.DIFF_EQUAL = 0

export default {
    name: 'codeMirror',
    props: {
      // 外部传入的内容，用于实现双向绑定
      value: String,
      // 外部传入的语法类型
      language: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        mode: 'javascript', // 默认的语法类型
        coder: null, // 编辑器实例
        options: {
          tabSize: 4,        // 缩进格式
          lineNumbers: true, // 显示行号
          line: true,
          matchBrackets: true,  // 括号匹配
          indentUnit: 2, // 缩进单位，默认2
          autoCloseBrackets: true,     // 自动输入括弧  addon/edit/
          autoCloseTags: true, // 自动关闭标签
          cursorHeight: 1, // 光标高度
          smartIndent: true,        //自动缩进，设置是否根据上下文自动缩进（和上一行相同的缩进量）。默认为true。
				  styleActiveLine: true, 	  // 当前行背景高亮
          scrollbarStyle: "simple",     // 简易滚动条 addon/scroll
          continueComments: "Enter",    // 注释代码 快捷键 Ctrl-Q
          lineWrapping:true, //代码折叠
          foldGutter: true,              // 允许在行号位置折叠
          theme: 'seti',         // 编辑器主题
          extraKeys: {"Ctrl": "autocomplete",'Ctrl-Q': cm => {
            cm.foldCode(cm.getCursor())
          }}, // //输入s然后ctrl就可以弹出选择项 ctrl唤起智能提示
          gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          keyMap:"sublime", // 快捷键
          styleActiveLine: true // 激活当前行样式
         //全屏模式
        //  fullScreen:true,  
        },
        modes: [{
          value: 'css',
          label: 'CSS'
        }, {
          value: 'javascript',
          label: 'Javascript'
        }, {
          value: 'html',
          label: 'XML/HTML'
        }]
      }
      
    },

    methods: {
      _initialize() {
        // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
        this.coder = CodeMirror.fromTextArea(this.$refs.textarea, this.options)
        // 编辑器赋值
        this.coder.setValue(this.value);
        // 支持双向绑定
        this.coder.on('change', (coder) => {
          this.code = coder.getValue()

          if (this.$emit) {
            this.$emit('input', this.code)
          }
        })

        // 尝试从父容器获取语法类型
        if (this.language) {
          // 获取具体的语法类型对象
          let modeObj = this._getLanguage(this.language)

          // 判断父容器传入的语法是否被支持
          if (modeObj) {
            this.mode = modeObj.label
          }
        }

        this.coder.setOption("extraKeys", {
          // F11切换全屏
          "F11": function(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          // Esc退出全屏
          "Esc": function(cm) {
            if(cm.getOption('fullScreen')) {
              cm.setOption("fullScreen", false);
            }
          }
        })
      },

      // 获取当前语法类型
      _getLanguage(language) {
        // 在支持的语法类型列表中寻找传入的语法类型
        return this.modes.find((mode) => {
          // 所有的值都忽略大小写，方便比较
          let currentLanguage = language.toLowerCase()
          let currentLabel = mode.label.toLowerCase()
          let currentValue = mode.value.toLowerCase()

          // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
          return currentLabel === currentLanguage || currentValue === currentLanguage
        })
      },

       // 更改模式
      changeMode(val) {
        // 修改编辑器的语法配置
        this.coder.setOption('mode', `text/${val}`)
        // 获取修改后的语法
        let label = this._getLanguage(val).label.toLowerCase()
        // 允许父容器通过以下函数监听当前的语法值
        this.$emit('language-change', label)
      },
    },

    mounted() {
      this._initialize();
    }
  }
</script>

<style lang="scss" scoped>
 .in-coder-panel {
    
    .CodeMirror {
      
    }
    
    .code-mode-select{
      max-width: 130px;
      margin-bottom: 15px;
    }
      
 }
    

   
</style>