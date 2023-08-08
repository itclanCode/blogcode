---
title: 卡券生成器
autoGroup-4: 业务型实例
---

## 卡券生成器

## 快速导航

<TOC />

## 卡券样式1

<business-kaquanCircle />

::: details 卡卷样式1示例代码
```html
<style scoped lang="scss">
  .key-value {
    .key {
      width: 80px;
    }
    .key-value--item:not(:last-of-type) {
      border-right: 2px solid #ccc;
      padding-right: 10px;
      margin-right: 10px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }


</style>

<template>
  <div>
    <div class="warpper">
      <div class="hollow-one-circle"></div>
    </div>

    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>
      <el-input-number v-model="width" size="mini"
        :min="100"
        :max="500" label="宽度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">长度：</span>
      <el-input-number v-model="height" size="mini"
        :min="50"
        :max="500" label="长度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">半径：</span>
      <el-input-number v-model="radio" size="mini" :min="1"
        :max="20" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">距离：</span>
      <el-input-number v-model="distance" size="mini"
        :min="50"
        :max="300" label="分割位置"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">阴影：</span>
      <el-switch
        v-model="shadow"
        active-color="#00adb5">
      </el-switch>
    </div>
    <div class="language-css extra-class">
       <pre class="language-css"><code
         ref="css"></code></pre>
    </div>
  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: 'kaquanCircle',
    data() {
      return {
        positions: ['top', 'bottom', 'left', 'right'],
        position: 'left',
        width: 100,
        height: 100,
        radio: 10,
        color: '#00adb5',
        shadow: false,
        distance: 40,
      }
    },
    computed: {
      style() {
        let circlePosition = ''
        switch (this.position) {
          case 'top':
            circlePosition = `${this.distance}px 0`
            break;
          case 'bottom':
            circlePosition = `${this.distance}px ${this.height}px`
            break;
          case 'left':
            circlePosition = `0 ${this.distance}px`
            break;
          case 'right':
            circlePosition = `${this.width}px ${this.distance}px`
            break;
        }
        return `.hollow-one-circle{
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at ${circlePosition}, transparent ${this.radio}px, ${this.color} 0) top left/${this.width}px 100% no-repeat;
  ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}`
      }
    },
    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    },
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      },
      setStyleToBody() {
        let style = document.querySelector('#hollow-ine-circle-style')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-ine-circle-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }

</script>
```
:::

## 卡券样式2

<business-kaquanTwoCircles />

:::details 卡券样式示例代码
```html
<style scoped lang="scss">
  .key-value {
    .key {
      width: 80px;
    }
    .key-value--item:not(:last-of-type) {
      border-right: 2px solid #ccc;
      padding-right: 10px;
      margin-right: 10px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .hollow-circle-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @mixin hollow-circle-vertical($color,$r,$height,$top) {
    height: $height;
    position: relative;
    background: radial-gradient(circle at right bottom, transparent $r, $color 0) top right / 51% $top no-repeat,
    radial-gradient(circle at left bottom, transparent $r, $color 0) top left / 51% $top no-repeat,
    radial-gradient(circle at right top, transparent $r, $color 0) bottom right / 51% ($height - $top) no-repeat,
    radial-gradient(circle at left top, transparent $r, $color 0) bottom left / 51% ($height - $top) no-repeat;
    &::after {
      content: '';
      width: 100%;
      border: 1px dashed #fff;
      position: absolute;
      left: 0;
      top: $top;
    }
  }

  @mixin hollow-circle-horizontal($width,$height,$color,$r,$left) {
    width: $width;
    height: $height;
    position: relative;
    background: radial-gradient($r*2 circle at $left 0, transparent $r, $color $r) top left / $width 51% no-repeat, radial-gradient($r*2 circle at $left $height/2, transparent $r, $color $r) bottom left / $width 51% no-repeat;
    &::after {
      content: '';
      height: 100%;
      border: 1px dashed #fff;
      position: absolute;
      left: $left;
      top: 0;
    }
  }

  .hollow-circle-horizontal {
    @include hollow-circle-horizontal(300px, 100px, #00adb5, 10px, 60px)
  }

  .hollow-circle-vertical {
    width: 100px;
    @include hollow-circle-vertical(#00adb5, 10px, 200px, 50px)
  }
</style>

<template>
  <div>
    <div class="warpper">
      <div class="hollow-two-circles"></div>
    </div>

    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>
      <el-input-number v-model="width" size="mini"
        :min="100"
        :max="500" label="宽度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">长度：</span>
      <el-input-number v-model="height" size="mini"
        :min="50"
        :max="500" label="长度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">距离：</span>
      <el-input-number v-model="distance" size="mini"
        :min="40"
        :max="200" label="距离"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">半径：</span>
      <el-input-number v-model="radio" size="mini" :min="1"
        :max="20" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">虚线：</span>
      <el-switch
        v-model="dashed"
        active-color="#00adb5">
      </el-switch>
      <span style="width:100px"></span>
      <span class="key">阴影：</span>
      <el-switch
        v-model="shadow"
        active-color="#00adb5">
      </el-switch>
    </div>

    <div class="language-css extra-class">
         <pre class="language-css"><code
           ref="css"></code></pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'kaquanTwoCircles',
    data() {
      return {
        width: 300,
        height: 100,
        radio: 10,
        dashed: true,
        position: 'horizontal',
        distance: 60,
        positions: ['horizontal', 'vertical'],
        color1: '#00adb5',
        color2: '#eeeeee',
        shadow: true
      }
    },
    computed: {
      style() {
        switch (this.position) {
          case 'horizontal':
            return `.hollow-two-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right /${this.width - this.distance}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width - this.distance}px 51% no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-two-circles::after {
  content: '';
  height: ${this.height - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}` : ''}
`
          case 'vertical':
            return `.hollow-two-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) top right / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height - this.distance}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height - this.distance}px no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-two-circles::after {
  content: '';
  width: ${this.width - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.distance}px;
  margin: auto;
}` : ''}
`
        }
      }
    },
    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    },
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      },
      setStyleToBody() {
        let style = document.querySelector('#hollow-two-circles-style')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-two-circles-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>


```
:::

## 卡券样式3

<business-kaquanManyCircles />

::: details 卡卷样式3代码
```html
<style scoped lang="scss">
  .key-value {
    .key {
      width: 80px;
    }
    .key-value--item:not(:last-of-type) {
      border-right: 2px solid #ccc;
      padding-right: 10px;
      margin-right: 10px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  @mixin hollow-circles-horizontal($width,$height,$r,$color) {
    width: $width;
    height: $height;
    position: relative;
    background: $color;
    margin-bottom: $r *2;

    &::after {
      content: '';
      position: absolute;
      height: $r;
      left: 0;
      right: 0;
      bottom: -1 * $r;
      background-image: linear-gradient(to right, $color $r, transparent $r, transparent), radial-gradient($r*2 circle at $r*2 $r, transparent $r, $color $r);
      background-size: 3*$r $r;
    }
  }

  .hollow-circle-horizontal {
    @include hollow-circles-horizontal(300px, 100px, 5px, #00adb5)
  }

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
</style>

<template>
  <div class="hollow-circle-container">
    <div class="warpper">
      <div class="hollow-circles"></div>
    </div>

    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>
      <el-input-number v-model="width" size="mini"
        :min="100"
        :max="500" label="宽度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">长度：</span>
      <el-input-number v-model="height" size="mini"
        :min="50"
        :max="500" label="长度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">半径：</span>
      <el-input-number v-model="radio" size="mini" :min="1"
        :max="10" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">阴影：</span>
      <el-switch
        v-model="shadow"
        active-color="#00adb5">
      </el-switch>
    </div>

    <div class="language-css extra-class">
       <pre class="language-css"><code
         ref="css"></code></pre>
    </div>


  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: 'kaquanManyCircles',
    data() {
      return {
        positions: ['top', 'bottom', 'left', 'right'],
        position: 'bottom',
        width: 300,
        height: 100,
        radio: 5,
        color: '#00adb5',
        shadow: false
      }
    },
    computed: {
      style() {
        let afterStlye = ''
        let circlePosition = ''
        const to = this.position === 'top' || this.position === 'bottom' ? 'to right' : 'to bottom'
        const backgroundSize = this.position === 'top' || this.position === 'bottom' ? `${this.radio * 3}px ${this.radio}px;` : `${this.radio}px ${this.radio * 3}px;`
        switch (this.position) {
          case 'top':
            afterStlye = `height: ${this.radio}px;
  width:100%;
  left: 0;
  top: ${this.radio * -1}px;`
            circlePosition = `${this.radio * 2}px 0px`
            break
          case 'bottom':
            afterStlye = `height: ${this.radio}px;
  width:100%;
  left: 0;
  bottom: ${this.radio * -1}px;`
            circlePosition = `${this.radio * 2}px ${this.radio}px`
            break
          case 'left':
            afterStlye = `height: 100%;
  width:${this.radio}px;
  top: 0;
  left: ${this.radio * -1}px;`
            circlePosition = `0px ${this.radio * 2}px`
            break
          case 'right':
            afterStlye = `height: 100%;
  width:${this.radio}px;
  top: 0;
  right: ${this.radio * -1}px;`
            circlePosition = `${this.radio}px ${this.radio * 2}px`
            break
        }


        return `.hollow-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: ${this.color};
  margin-${this.position}: ${this.radio * 2}px;
  ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}
.hollow-circles::after {
  content: '';
  position: absolute;
  ${afterStlye}
  background-image: linear-gradient(${to}, ${this.color} ${this.radio}px, transparent ${this.radio}px, transparent),
  radial-gradient(${this.radio * 2}px circle at ${circlePosition}, transparent ${this.radio}px, ${this.color} ${this.radio }px);
  background-size: ${backgroundSize}
}`
      }
    },
    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    },
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      },
      setStyleToBody() {
        let style = document.querySelector('#hollow-circles-style')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-circles-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>

```
:::

## 卡券样式混合一
<business-kaquanComposeTree />

::: details 卡券样式混合一代码
```html
<style scoped lang="scss">
  .key-value {
    .key {
      width: 100px;
    }
    .key-value--item:not(:last-of-type) {
      border-right: 2px solid #ccc;
      padding-right: 10px;
      margin-right: 10px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

</style>

<template>
  <div>
    <div class="warpper">
      <div class="hollow-compose-three-circles"></div>
    </div>
    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">组合位置：</span>
      <el-radio v-if="position==='horizontal'"
        v-model="composePositionH"
        v-for="(value ,index) in composePositionsHorizontal"
        :key="index"
        :label="value"></el-radio>
      <el-radio v-if="position==='vertical'"
        v-model="composePositionV"
        v-for="(value ,index) in composePositionsVertical"
        :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>
      <el-input-number v-model="width" size="mini"
        :min="100"
        :max="500" label="宽度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">长度：</span>
      <el-input-number v-model="height" size="mini"
        :min="50"
        :max="500" label="长度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">距离：</span>
      <el-input-number v-model="distance" size="mini"
        :min="40"
        :max="200" label="距离"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">半径：</span>
      <el-input-number v-model="radio" size="mini" :min="1"
        :max="20" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">虚线：</span>
      <el-switch
        v-model="dashed"
        active-color="#00adb5">
      </el-switch>
      <span style="width:100px"></span>
      <span class="key">阴影：</span>
      <el-switch
        v-model="shadow"
        active-color="#00adb5">
      </el-switch>
    </div>

    <div class="language-css extra-class">
        <pre class="language-css"><code
          ref="css"></code></pre>
    </div>

  </div>
</template>

<script>
  import Prism from "prismjs";

  export default {
    name: 'kaquanComposeTree',
    data() {
      return {
        width: 300,
        height: 100,
        radio: 10,
        dashed: true,
        position: 'horizontal',
        distance: 60,
        positions: ['horizontal', 'vertical'],
        color1: '#00adb5',
        color2: '#eeeeee',
        shadow: true,
        composePositionH: 'right',
        composePositionV: 'bottom',
        composePositionsHorizontal: ['left', 'right'],
        composePositionsVertical: ['top', 'bottom']
      }
    },
    computed: {
      style() {
        let background = '';
        switch (this.position) {
          case 'horizontal':
            switch (this.composePositionH) {
              case 'right':
                background = `background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) ${this.distance}px 0/${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) ${this.distance}px ${this.height / 2}px /${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at ${this.radio}px ${this.height / 2}px, transparent ${this.radio}px, ${this.color2} 0) ${this.width - this.radio}px 0/${this.radio}px ${this.height}px no-repeat;`;
                break;
              case 'left':
                background = `background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) ${this.radio}px 0 / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.radio}px ${this.height / 2}px /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right/${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width - this.distance - this.radio}px 51% no-repeat,
    radial-gradient(circle at 0 ${this.height / 2}px, transparent ${this.radio}px, ${this.color1} 0) top left/${this.radio}px ${this.height}px no-repeat;`;
                break;
            }


            return `.hollow-compose-three-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  ${background}
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-three-circles::after {
  content: '';
  height: ${this.height - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.composePositionH === 'left' ? this.distance + this.radio : this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}` : ''}
`
          case 'vertical':
            switch (this.composePositionV) {
              case 'top':
                background = `background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.width / 2}px ${this.radio}px / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) 0 ${this.radio}px / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at ${this.width / 2}px 0, transparent ${this.radio}px, ${this.color1} 0) top left/${this.width}px ${this.radio}px no-repeat;`
                break
              case 'bottom':
                background = `background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.width/2 - 2}px 0 / ${this.width/2 + 2}px ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.width/2}px ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) ${this.width/2 - 2}px ${this.distance}px / ${this.width/2 + 2}px ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) 0 ${this.distance}px / ${this.width/2}px ${this.height - this.distance - this.radio}px no-repeat,
    radial-gradient(circle at ${this.width / 2}px ${this.radio}px, transparent ${this.radio}px, ${this.color2} 0) bottom left/${this.width}px ${this.radio}px no-repeat;`
                break

            }
            return `.hollow-compose-three-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  ${background}
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-three-circles::after {
  content: '';
  width: ${this.width - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.composePositionV === 'top' ? this.distance + this.radio : this.distance}px;
  margin: auto;
}` : ''}
`
        }
      }
    },
    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    },
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      },
      setStyleToBody() {
        let style = document.querySelector('#hollow-compose1')
        style.innerHTML = this.style
      }
    },
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-compose1')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>

```
:::

## 卡券样式混合二

<business-kaquanComposeMany />

::: details 卡券样式混合二代码
```html
<style scoped lang="scss">
  .key-value {
    .key {
      width: 100px;
    }
    .key-value--item:not(:last-of-type) {
      border-right: 2px solid #ccc;
      padding-right: 10px;
      margin-right: 10px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
  }

  .warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
</style>

<template>
  <div>
    <div class="warpper">
      <div class="hollow-compose-many-circles"></div>
    </div>

    <div class="key-value">
      <span class="key">位置：</span>
      <el-radio v-model="position"
        v-for="(value ,index) in positions" :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">组合半径：</span>
      <el-input-number v-model="composeRadio" size="mini"
        :min="1"
        :max="10" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">组合位置：</span>
      <el-radio v-if="position==='horizontal'"
        v-model="composePositionH"
        v-for="(value ,index) in composePositionsHorizontal"
        :key="index"
        :label="value"></el-radio>
      <el-radio v-if="position==='vertical'"
        v-model="composePositionV"
        v-for="(value ,index) in composePositionsVertical"
        :key="index"
        :label="value"></el-radio>
    </div>
    <div class="key-value">
      <span class="key">宽度：</span>
      <el-input-number v-model="width" size="mini"
        :min="100"
        :max="500" label="宽度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">长度：</span>
      <el-input-number v-model="height" size="mini"
        :min="50"
        :max="500" label="长度"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">距离：</span>
      <el-input-number v-model="distance" size="mini"
        :min="40"
        :max="200" label="距离"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">半径：</span>
      <el-input-number v-model="radio" size="mini" :min="1"
        :max="20" label="半径"></el-input-number>
    </div>
    <div class="key-value">
      <span class="key">虚线：</span>
      <el-switch
        v-model="dashed"
        active-color="#00adb5">
      </el-switch>
      <span style="width:100px"></span>
      <span class="key">阴影：</span>
      <el-switch
        v-model="shadow"
        active-color="#00adb5">
      </el-switch>
    </div>
    <div class="language-css extra-class">
         <pre class="language-css"><code
           ref="css"></code></pre>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'kaquanComposeMany',
    data() {
      return {
        width: 300,
        height: 100,
        radio: 10,
        dashed: true,
        position: 'horizontal',
        distance: 60,
        positions: ['horizontal', 'vertical'],
        color1: '#00adb5',
        color2: '#eeeeee',
        shadow: true,
        composeRadio: 5,
        composePositionH: 'right',
        composePositionV: 'bottom',
        composePositionsHorizontal: ['left', 'right'],
        composePositionsVertical: ['top', 'bottom']
      }
    },
    computed: {
      style() {
        let afterStlye = ''
        let circlePosition = ''
        let afterComputedStyle = ''
        let afterColor = this.composePositionH === 'left' ? this.color1 : this.color2
        let to = ''
        const backgroundSize = this.position === 'vertical' && (this.composePositionV === 'top' || this.composePositionV === 'bottom') ? `${this.composeRadio * 3}px ${this.composeRadio}px;` : `${this.composeRadio}px ${this.composeRadio * 3}px;`
        if (this.position === 'vertical') {
          switch (this.composePositionV) {
            case 'top':
              to = 'to right'
              afterColor = this.color1
              afterStlye = `height: ${this.composeRadio}px;
  width:100%;
  left: 0;
  top: ${this.composeRadio * -1}px;`
              circlePosition = `${this.composeRadio * 2}px 0px`
              break
            case 'bottom':
              to = 'to right'
              afterColor = this.color2
              afterStlye = `height: ${this.composeRadio}px;
  width:100%;
  left: 0;
  bottom: ${this.composeRadio * -1}px;`
              circlePosition = `${this.composeRadio * 2}px ${this.composeRadio}px`
              break
          }
        }
        if (this.position === 'horizontal') {
          switch (this.composePositionH) {
            case 'left':
              to = 'to bottom'
              afterColor = this.color1
              afterStlye = `height: 100%;
  width:${this.composeRadio}px;
  top: 0;
  left: ${this.composeRadio * -1}px;`
              circlePosition = `0px ${this.composeRadio * 2}px`
              break
            case 'right':
              to = 'to bottom'
              afterColor = this.color2
              afterStlye = `height: 100%;
  width:${this.composeRadio}px;
  top: 0;
  right: ${this.composeRadio * -1}px;`
              circlePosition = `${this.composeRadio}px ${this.composeRadio * 2}px`
              break
          }
        }

        afterComputedStyle = `.hollow-compose-many-circles::after {
  content: '';
  position: absolute;
  ${afterStlye}
  background-image: linear-gradient(${to}, ${afterColor} ${this.composeRadio}px, transparent ${this.composeRadio}px, transparent),
  radial-gradient(${this.composeRadio * 2}px circle at ${circlePosition}, transparent ${this.composeRadio}px, ${afterColor} ${this.composeRadio }px);
  background-size: ${backgroundSize}
  }`


        // --------------------  ----------------------

        // -------------------- END -  ----------------------
        switch (this.position) {
          case 'horizontal':
            return `.hollow-compose-many-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right /${this.width - this.distance}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width - this.distance}px 51% no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-many-circles::before {
  content: '';
  height: ${this.height - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}` : ''}

${afterComputedStyle}
`
          case 'vertical':
            return `.hollow-compose-many-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) top right / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height - this.distance}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height - this.distance}px no-repeat;
   ${this.shadow ? 'filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));' : ''}
}

${this.dashed ? `.hollow-compose-many-circles::before {
  content: '';
  width: ${this.width - this.radio * 2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.distance}px;
  margin: auto;
}` : ''}

${afterComputedStyle}
`
        }
      },
    },

    watch: {
      style() {
        this.setStyle()
        this.setStyleToBody()
      }
    }
    ,
    methods: {
      setStyle() {
        this.$refs['css'].innerHTML = Prism.highlight(this.style, Prism.languages.css)
      }
      ,
      setStyleToBody() {
        let style = document.querySelector('#hollow-compose-many-circles-style')
        style.innerHTML = this.style
      }
    }
    ,
    mounted() {
      const style = document.createElement('style')
      style.setAttribute('id', 'hollow-compose-many-circles-style')
      document.head.appendChild(style)

      setTimeout(() => {
        this.setStyle()
        this.setStyleToBody()
      })
    }
  }
</script>
```

:::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />