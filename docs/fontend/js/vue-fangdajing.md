---
title: Vue中实现放大镜效果
---

## Vue中实现放大镜效果

## 快速导航

<TOC />

## 示例效果

<business-magnifier  />

## 圆形放大镜源码

::: details 圆形放大镜
```html
<template>
    <div>
        <div class="magnifier-container">
            <el-row>
                <el-col :span="24">
                        <el-card shadow="hover">
                            <div slot="header"><span>圆形放大镜</span></div>
                            <Magnifie
                                url="https://picsum.photos/1920/500?random=1"
                                type="circle">
                            </Magnifie>
                        </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import magnifie from "./magnifie.vue";
    Vue.component('Magnifie', magnifie);
    export default {
        name:'magnifier',
    }
</script>

<style lang="scss" scoped>

</style>
```
:::

::: details 方形放大镜
```html
<template>
    <div>
        <div class="magnifier-container">
            <el-row>
                <el-col :span="24">
                    <el-card shadow="hover">
                    <div slot="header"><span>方形放大镜</span></div>
                    <Magnifie
                        url="https://ae01.alicdn.com/kf/U8aa481ed3c244d728159a7d2e0806926e.jpg"
                        type="square"
                    ></Magnifie>
                    </el-card>
                </el-col>
            </el-row>  
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import magnifie from "./magnifie.vue";
    Vue.component('Magnifie', magnifie);
    export default {
        name:'magnifier',
    }
</script>

<style lang="scss" scoped>

</style>
```
:::

## 插件方式使用

安装`zx-magnifie`

```js
cnpm i -S zx-magnifie
```
当前组件中注入`zx-magnifie`
```js
import Vue from 'vue'
import zxMagnifie from 'zx-magnifie'
Vue.component('Magnifie', zxMagnifie);
```
在模板中使用
```html
<template>
    <div>
        <div class="magnifier-container">
            <el-row>
                <el-col :span="24">
                    <el-card shadow="hover">
                    <div slot="header"><span>方形放大镜</span></div>
                    <Magnifie
                        url="https://ae01.alicdn.com/kf/U8aa481ed3c244d728159a7d2e0806926e.jpg"
                        type="square"
                    ></Magnifie>
                    </el-card>
                </el-col>
            </el-row>  
        </div>
    </div>
</template>
```

## 放大镜核心代码实现

::: details magnifie.vue组件
```html        
<template>
	<div class="pic-img">
		<div class="img-container" @mousemove="!moveEvent && mouseMove($event)" @mouseleave="!leaveEvent && mouseLeave($event)">
			<img ref="img" :src="!lazyload ? url : imgLoadedFlag && url" style="width:100%" @load="!lazyload && imgLoaded($event)" />
			<div
				v-if="!hideZoom && imgLoadedFlag && !hideSelector"
				:class="['img-selector', { circle: type === 'circle' }]"
				:style="[imgSelectorStyle, imgSelectorSize, imgSelectorPosition, !outShow && imgBg, !outShow && imgBgSize, !outShow && imgBgPosition]"
			>
				<slot></slot>
			</div>
			<div
				v-if="outShow"
				v-show="!hideOutShow"
				:class="['img-out-show', { 'base-line': baseline }]"
				:style="[imgOutShowSize, imgOutShowPosition, imgBg, imgBgSize, imgBgPosition]"
			>
				<div v-if="pointer" class="img-selector-point"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    name: 'magnifie',
	props: {
		url: {
			type: String,
			default: ''
		},
		highUrl: {
			type: String,
			default: ''
		},
		width: {
			type: Number,
			default: 168
		},
		type: {
			type: String,
			default: 'circle',
			validator: function(value) {
				return ['circle', 'square'].indexOf(value) !== -1;
			}
		},
		selectorStyle: {
			type: Object,
			default() {
				return {};
			}
		},
		outShowStyle: {},
		scale: {
			type: Number,
			default: 3
		},
		lazyload: {
			type: Boolean,
			default: false
		},
		moveEvent: {
			type: [Object, MouseEvent],
			default: null
		},
		leaveEvent: {
			type: [Object, MouseEvent],
			default: null
		},
		hideZoom: {
			type: Boolean,
			default: false
		},
		outShow: {
			type: Boolean,
			default: false
		},
		pointer: {
			type: Boolean,
			default: false
		},
		baseline: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			selector: {
				width: this.width,
				top: 0,
				left: 0,
				bgTop: 0,
				bgLeft: 0,
				rightBound: 0,
				bottomBound: 0,
				absoluteLeft: 0,
				absoluteTop: 0
			},
			imgInfo: {},
			$img: null,
			screenWidth: document.body.clientWidth,
			outShowInitTop: 0,
			outShowTop: 0,
			hideOutShow: true,
			imgLoadedFlag: false,
			highImgLoadedFlag: false,
			hideSelector: true,
			timer: null
		};
	},
	computed: {
		addWidth() {
			return !this.outShow ? (this.width / 2) * (1 - this.scale) : 0;
		},
		imgSelectorPosition() {
			const { top, left } = this.selector;
			return {
				top: `${top}px`,
				left: `${left}px`
			};
		},
		imgSelectorSize() {
			const width = this.selector.width;
			return {
				width: `${width}px`,
				height: `${width}px`
			};
		},
		imgSelectorStyle() {
			return this.selectorStyle;
		},
		imgOutShowSize() {
			const {
				scale,
				selector: { width }
			} = this;
			return {
				width: `${width * scale}px`,
				height: `${width * scale}px`
			};
		},
		imgOutShowPosition() {
			return {
				top: `${this.outShowTop}px`,
				right: `${-8}px`
			};
		},
		imgBg() {
			return {
				backgroundImage: `url(${this.highUrl || this.url})`
			};
		},
		imgBgSize() {
			const {
				scale,
				imgInfo: { height, width }
			} = this;
			return {
				backgroundSize: `${width * scale}px ${height * scale}px`
			};
		},
		imgBgPosition() {
			const { bgLeft, bgTop } = this.selector;
			return {
				backgroundPosition: `${bgLeft}px ${bgTop}px`
			};
		}
	},
	watch: {
		moveEvent(e) {
			this.mouseMove(e);
		},
		leaveEvent(e) {
			this.mouseLeave(e);
		},
		url() {
			this.handlerUrlChange();
		},
		width(n) {
			this.initSelectorProperty(n);
		},
		screenWidth(val) {
			if (!this.timer) {
				this.screenWidth = val;
				this.timer = setTimeout(() => {
					this.imgLoaded();
					clearTimeout(this.timer);
					this.timer = null;
				}, 400);
			}
		}
	},
	created() {
		this.url && this.lazyload && this.handlerUrlChange();
	},
	mounted() {
		this.$img = this.$refs['img'];
	},
	methods: {
		handlerUrlChange() {
			this.imgLoadedFlag = false;
			this.lazyload && this.loadImg(this.url).then(this.imgLoaded, err => console.error(err));
		},
		loadImg(url) {
			return new Promise((resolve, reject) => {
				const img = document.createElement('img');
				img.addEventListener('load', resolve);
				img.addEventListener('error', reject);
				img.src = url;
			});
		},
		imgLoaded() {
			const imgInfo = this.$img.getBoundingClientRect();
			if (JSON.stringify(this.imgInfo) != JSON.stringify(imgInfo)) {
				this.imgInfo = imgInfo;
				this.initSelectorProperty(this.width);
				this.resetOutShowInitPosition();
			}
			if (!this.imgLoadedFlag) {
				this.imgLoadedFlag = true;
				this.$emit('created', imgInfo);
			}
		},
		mouseMove(e) {
			if (!this.hideZoom && this.imgLoadedFlag) {
				this.imgLoaded();
				const { pageX, pageY, clientY } = e;
				const { scale, selector, outShow, addWidth, outShowAutoScroll } = this;
				let { outShowInitTop } = this;
				const scrollTop = pageY - clientY;
				const { absoluteLeft, absoluteTop, rightBound, bottomBound } = selector;
				const x = pageX - absoluteLeft; // 选择器的x坐标 相对于图片
				const y = pageY - absoluteTop; // 选择器的y坐标
				if (outShow) {
					if (!outShowInitTop) {
						outShowInitTop = this.outShowInitTop = scrollTop + this.imgInfo.top;
					}
					this.hideOutShow && (this.hideOutShow = false);
					this.outShowTop = scrollTop > outShowInitTop ? scrollTop - outShowInitTop : 0;
				}
				this.hideSelector && (this.hideSelector = false);
				selector.top = y > 0 ? (y < bottomBound ? y : bottomBound) : 0;
				selector.left = x > 0 ? (x < rightBound ? x : rightBound) : 0;
				selector.bgLeft = addWidth - x * scale; // 选择器图片的坐标位置
				selector.bgTop = addWidth - y * scale;
			}
		},
		initSelectorProperty(selectorWidth) {
			const selectorHalfWidth = selectorWidth / 2;
			const selector = this.selector;
			const { width, height, left, top } = this.imgInfo;
			const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			const scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
			selector.width = selectorWidth;
			selector.rightBound = width - selectorWidth;
			selector.bottomBound = height - selectorWidth;
			selector.absoluteLeft = left + selectorHalfWidth + scrollLeft;
			selector.absoluteTop = top + selectorHalfWidth + scrollTop;
		},
		mouseLeave() {
			this.hideSelector = true;
			if (this.outShow) {
				this.hideOutShow = true;
			}
		},
		reset() {
			Object.assign(this.selector, {
				top: 0,
				left: 0,
				bgLeft: 0,
				bgTop: 0
			});
			this.resetOutShowInitPosition();
		},
		resetOutShowInitPosition() {
			this.outShowInitTop = 0;
		}
	}
};
</script>

<style scoped>
.img-container {
	position: relative;
}

.img-selector {
	position: absolute;
	cursor: crosshair;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background-repeat: no-repeat;
	background-color: rgba(0, 0, 0, 0.6);
}

.img-selector.circle {
	border-radius: 50%;
}

.img-out-show {
	position: absolute;
	background-repeat: no-repeat;
	transform: translate(100%, 0);
	border: 1px solid rgba(0, 0, 0, 0.1);
}

.img-selector-point {
	position: absolute;
	width: 4px;
	height: 4px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: black;
}

.img-out-show.base-line::after {
	position: absolute;
	box-sizing: border-box;
	content: '';
	width: 1px;
	border: 1px dashed rgba(0, 0, 0, 0.36);
	top: 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}

.img-out-show.base-line::before {
	position: absolute;
	box-sizing: border-box;
	content: '';
	height: 1px;
	border: 1px dashed rgba(0, 0, 0, 0.36);
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}
</style>

```
:::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />

<footer-FeedBack />



