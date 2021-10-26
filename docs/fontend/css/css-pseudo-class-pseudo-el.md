---
title: 伪类与伪元素
autoGroup-1: css基础
---

## 伪类与伪元素

## 快速导航

<TOC />

## 前言

对于做前端的小伙伴来说,都用过 css 的伪类与伪元素,但是很多时候,容易将他们混淆,一段时间没有接触,便会抛掷脑后,容易混淆

即使自己用过伪类,伪元素,但是未必就真清楚的

## 为什么要引入伪类与伪元素

在 css 中引入伪类和伪元素,是为了格式化文档树以外的信息,它并不是直接存在于 DOM 树当中的,它们是用来修饰不在文档树中的部分

## 伪类

用于在已有 DOM 元素处于某个状态时,为该元素添加额外的样式,这个状态是根据用户行为而动态变化的

比如:当用户鼠标悬停在指定元素时,可以通过`:hover`来描述这个元素的状态,当用户访问一个元素过后时,可以用`visited`,当时一个活跃状态时,可以用`:active`,当`input`表单聚焦表单时,可以用`:focus`

它和普通的 css 类相似,可以为已有的元素添加样式,但是它只有处于 `dom` 树无法描述的状态下才能为元素添加样式,所以将它称为伪类

**形式上**:伪类用单冒号

::: details 点击即可查看常见伪类

```css
:link 向未被访问的链接添加样式
:visited 向已被访问的链接添加样式。
:hover 当鼠标悬浮在元素上方时，向元素添加样式
:active 向被激活的元素添加样式
:focus 向拥有键盘输入焦点的元素添加样式
:not() 排除某个元素之外
:first-child 选择元素的第一个子元素
:last-child  选择元素的最后一个子元素
:nth-child
:nth-last-child 从后面计数
:only-child 只满足一个子元素
:target 当URL带有锚名称，指向文档内某个具体的元素时，:target匹配该元素。
:checked 被选中的input元素
:empty 匹配没有子元素的元素
:valid 匹配条件验证正确的表单元素
```

:::

## 伪元素

用于创建一些不在文档树中的元素,并为其添加样式。

换言之,‘伪元素’，就是本身不存在的页面元素，HTML 代码里并没有这样的元素，但在页面显示时，你却能看到这些本来不存在的元素发挥着作用

比如说，我们可以通过`:before`,`:after` 来在一个元素前或后增加一些文本,并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中

**形式上**:伪元素前面是两个冒号，`E::first-line 伪元素`。会创造出不存在的新元素

在`css3`中 已经明确规定了伪类用单冒号，伪元素双冒号的规则,虽然都用单冒号,也不会报错,两者能实现一致,主要在于区分两者
::: details 点击即可查看伪元素

```css
::before/:before 在被选元素前插入内容
::after/:after 在被选元素后插入内容，其用法和特性与`:before`相似。
::first-letter/:first-letter 匹配元素中文本的首字母。被修饰的首字母不在文档树中
::first-line/:first-line 匹配元素中第一行的文本。这个伪元素只能用在块元素中，不能用在内联元素中。
::selection 匹配用户被用户选中或者处于高亮状态的部分。在火狐浏览器使用时需要添加`-moz`前缀。该伪元素只支持双冒号的形式。
::placeholder 匹配占位符的文本，只有元素设置了`placeholder`属性时，该伪元素才能生效,具体实例可见 [表单输入框聚焦效果](./example-input-focus-animate)

```

:::

- 对于伪元素 `:before` 和 `:after`而言，属性 `content`是必须设置的，这个属性的值可以为字符串，也可以有其它形式，比如指向一张图片的 URL:

```css
content: url('img/icon.png'
```

- 配合伪类使用

伪元素 `:before` 还可以配合伪类使用，这里举经常与 `:before` 配合使用的伪类 `:hover` 为例

具体实例可见[css 实现鼠标经过元素下划线由左向右或由中间向两侧展开](./example-hover-underline-sides)

```css
.before:hover:before{content:'在before之前插入内容'; color:red;}
<div class="before"> me</div>
```

- 配合取值函数 `attr()` 使用

```css
a::before{content: attr(title)}
<a href="https://coder.itclan.cn/" title="itclanCoder"></a>

效果
<a href="https://coder.itclan.cn/" title="itclanCoder">itclanCoder</a>
```

## 伪类与伪元素的具体区别

在上面主要是罗列了一些硬知识点,仍然是比较难以理解的,下面用具体的代码示例来学习下的

下面是一个简单的 `html` 列表片段

```html
<ul>
  <li>我是第一个li</li>
  <li>我是第二个li</li>
</ul>
```

如果想要给第一项添加样式，可以在为第一个`<li>`内联上添加一个类，并在该类中定义对应样式,如下所示

```css
<ul>
  <li class="first-li">我是第一个li</li>
  <li>我是第二个li</li>
</ul>
```

那么对应的 css

```css
.first-li {
  color: #abcdef;
}
```

有时候,如果不想添加类的方法,我们可以通过给设置第一个`<li>` 的`:first-child`伪类来为其添加样式

```html
<ul>
  <li>我是第一个li</li>
  <li>我是第二个li</li>
</ul>
```

对应的 CSS

```css
li:first-child {
  color: #abcdef;
}
```

上面两种方法,想要改变一个元素样式,一种方式是直接在元素身上添加`class`,另一个就是通过添加伪类选择器的方式进行实现

比如下面这段`html`代码

```html
<p>Hello World, itclanCoder</p>
```

如果想要给该段落的第一个字母添加样式,可以在第一个字母中包裹一个`<span>` 元素，并设置该 `span`元素的样式

```html
<p><span class="first-word">H</span>ello World, itclanCoder</p>
```

对应的 css 代码

```css
.first-word {
  font-size: 30px;
}
```

如果不创建一个`<span>` 元素，我们可以通过设置`<p>`的`:first-letter伪元素`来为其添加样式。这个时候，看起来好像是创建了一个虚拟的`<span>`元素并添加了样式，但实际上文档树中并不存在这个`<span>` 元素

```html
<p>Hello World, itclanCoder</p>
```

对应的 CSS

```css
p:first-letter {
  font-size: 30px;
}
```

通过上面的代码,可知,伪类往往表示一些元素的动态状态,常见的比如,鼠标经过元素`hover`,`active`,`visited`,`link`等

而伪元素可以理解为代表了某个元素的子元素,这个子元素虽然在逻辑上存在,但是却不存在于文档树中,它是通过 css 方式添加进去实现的

换而言之,伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档数外的元素。因此，**伪类与伪元素的区别在于：有没有创建一个文档树之外的元素**,没有创建那么就是伪类,有创建那么就是伪元素
