---
title: 移动端适配
autoGroup-1: 移动端
---

## 快速导航

<TOC />

## 移动端-以一个固定尺寸(750px)为标准-将 px 转化为 rem

::: details 点击即可查看代码

```js
(function(win, lib) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var devicePixelRatio = win.devicePixelRatio;
  var dpr = 1;
  var scale = 1;

  // 设置vierPort
  function setViewport() {
    dpr = 1;
    win.devicePixelRatioValue = dpr;
    scale = 1 / dpr;
    var metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute(
      'content',
      'initial-scale=' +
        scale +
        ', maximum-scale=' +
        scale +
        ', minimum-scale=' +
        scale +
        ', user-scalable=no'
    );
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }

  setViewport();
  var newBase = 100; // 把页面划分为100等分

  // 设置Rem
  function setRem() {
    var visualView = Math.min(
      docEl.getBoundingClientRect().width,
      lib.maxWidth
    );
    newBase = (100 * visualView) / lib.desinWidth;
    docEl.style.fontSize = newBase + 'px';
  }

  var tid;
  lib.desinWidth = 640;
  lib.baseFont = 18;
  lib.maxWidth = 540;
  lib.init = function() {
    win.addEventListener(
      'resize',
      function() {
        clearTimeout(tid);
        tid = setTimeout(setRem, 300);
      },
      false
    );
    win.addEventListener(
      'pageshow',
      function(e) {
        if (e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(setRem, 300);
        }
      },
      false
    );
    if (doc.readyState === 'complete') {
      doc.body.style.fontSize = lib.baseFont * dpr + 'px';
    } else {
      doc.addEventListener(
        'DOMContentLoaded',
        function(e) {
          doc.body.style.fontSize = lib.baseFont * dpr + 'px';
        },
        false
      );
    }
    setRem();
    docEl.setAttribute('data-dpr', dpr);
  };
})(window, window['adaptive'] || (window['adaptive'] = {}));
window['adaptive'].desinWidth = 750;
window['adaptive'].baseFont = 12;
window['adaptive'].maxWidth = 540;
window['adaptive'].init();
```

:::

以上代码以设计稿 750px 的为标准,如果是非 750px,在实际页面中,将它转化为 750,然后再做转化

```
100px  = 1rem;
750px = 7.5rem;
```

将这段`js`代码命名为一个`mobile-adaption.js`引入到页面中,就可以愉快的使用了,将`px`转化为`rem`,实现自适应布局

在不同的设备当中保持一致

## 移动端-将 px 转化为 rem-同时解决 1px 像素问题

::: details 点击即可查看

```js
(function(window, document) {
  'use strict';

  //给hotcss开辟个命名空间，别问我为什么，我要给你准备你会用到的方法，免得用到的时候还要自己写。
  var hotcss = {};

  (function() {
    //根据devicePixelRatio自定计算scale
    //可以有效解决移动端1px这个难题
    var viewportEl = document.querySelector('meta[name="viewport"]'),
      hotcssEl = document.querySelector('meta[name="hotcss"]'),
      dpr = window.devicePixelRatio || 1,
      maxWidth = 540,
      designWidth = 750,
      rootSize = 100;

    hotcss.rootSize = rootSize;
    //允许通过自定义name为hotcss的meta头，通过initial-dpr来强制定义页面缩放
    if (hotcssEl) {
      var hotcssCon = hotcssEl.getAttribute('content');
      if (hotcssCon) {
        var initialDprMatch = hotcssCon.match(/initial\-dpr=([\d\.]+)/);
        if (initialDprMatch) {
          dpr = parseFloat(initialDprMatch[1]);
        }
        var maxWidthMatch = hotcssCon.match(/max\-width=([\d\.]+)/);
        if (maxWidthMatch) {
          maxWidth = parseFloat(maxWidthMatch[1]);
        }
        var designWidthMatch = hotcssCon.match(/design\-width=([\d\.]+)/);
        if (designWidthMatch) {
          designWidth = parseFloat(designWidthMatch[1]);
        }
      }
    }

    document.documentElement.setAttribute('data-dpr', dpr);
    hotcss.dpr = dpr;

    document.documentElement.setAttribute('max-width', maxWidth);
    hotcss.maxWidth = maxWidth;

    // 缩放比
    var scale = 1 / dpr,
      content =
        'width=device-width, initial-scale=' +
        scale +
        ', minimum-scale=' +
        scale +
        ', maximum-scale=' +
        scale +
        ', user-scalable=no';

    if (viewportEl) {
      viewportEl.setAttribute('content', content);
    } else {
      viewportEl = document.createElement('meta');
      viewportEl.setAttribute('name', 'viewport');
      viewportEl.setAttribute('content', content);
      document.head.appendChild(viewportEl);
    }

    // px 转化为rem的方法
    hotcss.px2rem = function(px, designWidth) {
      //预判你将会在JS中用到尺寸，特提供一个方法助你在JS中将px转为rem
      if (!designWidth) {
        //如果你在JS中大量用到此方法，建议直接定义 hotcss.designWidth 来定义设计图尺寸,在第一个就是
        //否则可以在第二个参数告诉我你的设计图是多大。
        designWidth = parseInt(hotcss.designWidth, 10);
      }

      return (
        (parseInt(px, 10) * hotcss.designWidth) / designWidth / hotcss.rootSize
      );
    };

    hotcss.rem2px = function(rem, designWidth) {
      //新增一个rem2px的方法。用法和px2rem一致。
      if (!designWidth) {
        designWidth = parseInt(hotcss.designWidth, 10);
      }
      //rem可能为小数，这里不再做处理了
      return (rem * hotcss.rootSize * designWidth) / hotcss.designWidth;
    };

    hotcss.mresize = function() {
      //对，这个就是核心方法了，给HTML设置font-size。
      var innerWidth =
        document.documentElement.getBoundingClientRect().width ||
        window.innerWidth;

      if (hotcss.maxWidth && innerWidth / hotcss.dpr > hotcss.maxWidth) {
        innerWidth = hotcss.maxWidth * hotcss.dpr;
      }

      if (!innerWidth) {
        return false;
      }

      document.documentElement.style.fontSize =
        (innerWidth * hotcss.rootSize) / hotcss.designWidth + 'px';
    };

    // 设备的宽度
    Object.defineProperty(hotcss, 'designWidth', {
      get: function() {
        // console.log('get：designWidth-->' + designWidth);
        return designWidth;
      },
      set: function(value) {
        designWidth = value;
        hotcss.mresize();
        // console.log('set：designWidth-->' + designWidth);
      },
    });

    // 根节点尺寸
    Object.defineProperty(hotcss, 'rootSize', {
      get: function() {
        // console.log(this);
        // console.log('get：rootSize-->' + rootSize);
        return rootSize;
      },
      set: function(value) {
        rootSize = value;
        hotcss.mresize();
        // console.log('set：rootSize-->' + rootSize);
      },
    });

    Object.defineProperty(hotcss, 'maxWidth', {
      get: function() {
        // console.log(this);
        // console.log('get: maxWidth-->' + maxWidth);
        return maxWidth;
      },
      set: function(value) {
        maxWidth = value;
        document.documentElement.setAttribute('max-width', maxWidth);
        hotcss.mresize();
        // console.log('set: maxWidth-->' + maxWidth);
      },
    });
  })();

  hotcss.mresize();
  //直接调用一次
  // 当页面尺寸发生变化时
  window.addEventListener(
    'resize',
    function() {
      clearTimeout(hotcss.tid);
      hotcss.tid = setTimeout(hotcss.mresize, 33);
    },
    false
  );
  //绑定resize的时候调用

  window.addEventListener('load', hotcss.mresize, false);
  //防止不明原因的bug。load之后再调用一次。

  setTimeout(function() {
    hotcss.mresize();
    //防止某些机型怪异现象，异步再调用一次
  }, 500);

  window.hotcss = hotcss;
  //命名空间暴露给你，控制权交给你，想怎么调怎么调。
})(window, document);

// 设计图的宽度  默认 750
hotcss.designWidth = 750;
// 设计图  rootSize px = 1rem; 默认值 100
hotcss.rootSize = 100;
// 最大设备宽度 默认值  480px;
hotcss.maxWidth = 480;

// 注意：使用了这个东西之后，不能再写px了。  但是1px边框就是正儿八经的1px边框
```

:::

在需要使用自适应页面,名为为`mobild-adapt.js`,这个名字是任意的,在所需页面引入这段`js`,或在根`html`标签中引入这段`js`,仍然可以愉快的写自适应布局页面代码了

## 方式3-使用rem适配

```js
/*
     * @desc:移动端适配js
     *	
     */
    (function(win) {
        var docEl = win.document.documentElement;
        var timer = '';

        function changeRem() {
            var width = docEl.getBoundingClientRect().width;
            if (width > 720) //最大宽度，若果兼容到ipad的话把这个去掉就行
            {
                width = 720;
            }
            var fontS = width / 16; //把设备宽度16等分 等同于用vw来做720/16=45,1rem=45px,750/20=37.5
            docEl.style.fontSize = fontS + "px";
        }
        //页面尺寸发生改变的时候就再执行changeRem
        win.addEventListener("resize", function() {
            clearTimeout(timer);
            timer = setTimeout(changeRem, 30);
        }, false);
        //页面加载的时候，若果是调用缓存的话就再执行changeRem
        win.addEventListener("pageshow", function(e) {
            if (e.persisted) //缓存
            {
                clearTimeout(timer);
                timer = setTimeout(changeRem, 30);
            }
        }, false);
        changeRem();
    })(window)
```
::: tip 提示
注意使用这种方式时-需要配置好基数-可以使用css-rem这个插件,在submlimText中进行安装,在编写样式时,可以自动将css像素转化为rem
:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

