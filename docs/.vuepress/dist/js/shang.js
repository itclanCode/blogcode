(function() {
  // 默认配置.
  function getDefaultConfig() {
    return {
      baseUrl: 'https://www.zhi12.cn',
      colorboxUrl:
        'https://cdn.bootcss.com/jquery.colorbox/1.6.4/jquery.colorbox-min.js',
      cssUrl: 'https://www.zhi12.cn/sites/all/libraries/shang/shang.min.css',
      imageHeight: 50,
      imageUrl: 'https://www.zhi12.cn/sites/all/libraries/shang/shang.png',
      imageWidth: 50,
      jQueryUrl: 'https://cdn.bootcss.com/jquery/1.11.2/jquery.min.js',
      noHtml: false,
      showAskAuthorLink: false,
      text: '',
    };
  }

  // 默认配置.
  var config = getDefaultConfig();
  // console.log('默认配置...');
  // console.log(config);

  // 打赏函数赋值.
  // 前置此函数避免页面调用时提示函数不存在.
  window._shang = function(config) {
    // 合并
    function objectMerge(target, source) {
      for (var obj in source) {
        target[obj] = source[obj];
      }
      return target;
    }

    function plain_text(str) {
      var el = document.createElement('span');
      el.appendChild(document.createTextNode(str));
      return el.innerHTML;
    }

    defaultConfig = getDefaultConfig();

    // 合并用户配置与默认配置, IE不支持 Object.assign.
    // config = config ? Object.assign(defaultConfig, config) : defaultConfig;
    config = config ? objectMerge(defaultConfig, config) : defaultConfig;

    // 参数校验.
    var regUrl = /^http(s)?:\/\/[0-9a-zA-Z-_~!';:@&=,/#\.\*\(\)\+\$\?\[\]]+$/;
    if (!regUrl.test(config.baseUrl)) {
      console.error('配置项 baseUrl 不是有效URL');
      return;
    }
    if (!regUrl.test(config.colorboxUrl)) {
      console.error('配置项 colorboxUrl 不是有效URL');
      return;
    }
    if (!regUrl.test(config.cssUrl)) {
      console.error('配置项 cssUrl 不是有效URL');
      return;
    }
    if (typeof config.imageHeight != 'number') {
      console.error('配置项 imageHeight 不是有效数字');
      return;
    }
    if (!regUrl.test(config.imageUrl)) {
      console.error('配置项 imageUrl 不是有效URL');
      return;
    }
    if (typeof config.imageWidth != 'number') {
      console.error('配置项 imageWidth 不是有效数字');
      return;
    }
    if (typeof config.noHtml != 'boolean') {
      console.error('配置项 noHtml 不是布尔值');
      return;
    }
    if (!regUrl.test(config.jQueryUrl)) {
      console.error('配置项 jQueryUrl 不是有效URL');
      return;
    }
    if (!config.uid) {
      alert('打赏插件配置错误：请设置uid参数');
      return;
    }

    config.shangUrl =
      config.baseUrl + '/paycenter/reward/widget?entity=user&id=' + config.uid;
    config.askUrl = config.baseUrl + '/ask/' + config.uid + '/widget';

    // Debug: 配置信息.
    // console.log('打赏配置...');
    // console.log(config);

    $(document).ready(function() {
      // 检查打赏元素容器并根据配置插入打赏元素.
      var container = $('#zhi12-shang-container');
      if (container.length > 0 && !config.noHtml) {
        var defaultHtml = '';
        defaultHtml += '<div id="zhi12-shang">';

        if (config.showAskAuthorLink) {
          defaultHtml +=
            '  <div class="ask-author">看完了？还不过瘾？点此<a href="' +
            config.askUrl +
            '" class="zhi12-popup" data-box-width="680p">付费提问</a></div>';
        }

        // config.text 不为空则显示一行文本
        if (config.text.replace(/(^s*)|(s*$)/g, '').length !== 0) {
          defaultHtml +=
            '  <div class="shang-message">' +
            plain_text(config.text) +
            '</div>';
        }
        defaultHtml +=
          '  <div><a class="zhi12-popup zhi12-widget" rel="nofollow" href="{{url}}" target="_blank"><img class="shang-icon" src="' +
          config.imageUrl +
          '" alt="打赏" width="' +
          config.imageWidth +
          '" height="' +
          config.imageHeight +
          '" /></a></div>';
        defaultHtml += '</div>';
        var html = defaultHtml;
        html = html.replace('{{url}}', config.shangUrl);
        container.append(html);

        initLinks();
      }
    });
  };

  // 检查及加载 jQuery 库.
  if (typeof $ !== 'function') {
    // 检查是否存在 jQuery 函数，避免重新引入 jQuery 产生冲突
    if (typeof jQuery === 'function') {
      // console.log('jQuery 已加载（$ 未赋值）: ' + jQuery.fn.jquery);
      $ = jQuery;
      if (typeof $ === 'function') {
        // console.log('jQuery 已加载（$ 已赋值）: ' + $.fn.jquery);
      }
      init($, window);
    } else {
      // console.log('jQuery 不存在，准备加载...');
      // console.log('加载 jQuery: ' + config.jQueryUrl);
      var jq = document.createElement('script');
      jq.src = config.jQueryUrl;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(jq, s);

      jq.onload = function() {
        $ = jQuery;
        init($, window);
      };
    }
  } else {
    // console.log('jQuery 已加载（$ 已赋值）：' + $.fn.jquery);
    init($, window);
  }

  function init($, window) {
    // 避免重复加载.
    if (window._zhi12Loaded) {
      // console.log('略过重复加载');
      return;
    } else {
      window._zhi12Loaded = true;
    }

    // Load.
    (function main() {
      // 检查并加载 Colorbox.
      if (typeof $.colorbox !== 'function') {
        // console.log('$.colorbox 不存在，准备加载...');
        $.getScript(config.colorboxUrl, function() {
          // console.log('加载 colorbox: ' + config.colorboxUrl);
        });
      } else {
        // console.log('$.colorbox 存在');
      }

      // 加载 CSS 文件.
      $('<link>')
        .attr({ rel: 'stylesheet', type: 'text/css', href: config.cssUrl })
        .appendTo('head');

      $(document).ready(function() {
        initLinks();
      });
    })();
  }

  // 为链接绑定弹窗效果（基于class类）.
  function initLinks() {
    // 获得窗口大小
    var width = $(window).width();
    //var height = $(window).height();

    // Refresh width and height's value when window resize.
    $(window).resize(function() {
      width = $(window).width();
      //height = $(window).height();
    });

    // Turn link to widget.
    $('.zhi12-widget').each(function() {
      var href = $(this).attr('href');
      href = href.replace('paycenter/reward?', 'paycenter/reward/widget?');
      $(this).attr('href', href);
    });

    // 为 zhi12-popup 链接添加标识类
    // 移除 target 属性
    $('.zhi12-popup').each(function() {
      if (!$(this).hasClass('zhi12-popup-processed')) {
        $(this).addClass('zhi12-popup-processed');

        if (isWeixin()) {
          $(this).removeAttr('target');
        }
      }
    });

    // 使用 Colorbox 打开 zhi12-popup 链接.
    // 避免重复绑定.
    $('.zhi12-popup')
      .unbind('click')
      .bind('click', function(e) {
        if (isWeixin()) {
          console.log('不在微信浏览器中使用弹窗' + new Date().getTime());
          return true;
        }

        var clientWidth = document.body.clientWidth;
        if (clientWidth <= 728) {
          console.log('窗口宽度 <= 728 时不使用弹层');
          return true;
        }

        var box_inner_width = $(this).attr('data-box-width') || 320;
        var box_inner_height = $(this).attr('data-box-height') || 580;
        var box_width = Number(box_inner_width) + 30;
        var box_height = Number(box_inner_height) + 30;

        $(this).colorbox({
          iframe: true,
          innerWidth: box_inner_width + 'px',
          innerHeight: box_inner_height + 'px',
          scrolling: true,
          //fixed: true,
          opacity: 0.85,
          className: 'zhi12-cbox',
          onComplete: function() {
            $('.zhi12-cbox .cboxIframe')
              .css('width', box_inner_width + 'px')
              .css('height', box_inner_height + 'px')
              .css('margin', '0 auto');

            //colorboxResizeListener();
          },
        });
      });
  }

  // 检测是否是微信浏览器.
  function isWeixin() {
    var ua = window.navigator.userAgent.toLowerCase();

    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  }
})();
