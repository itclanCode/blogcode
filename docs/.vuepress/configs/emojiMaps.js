/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-06-05 17:12:25
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-06-05 18:28:50
 * @Description:表情包
 *
 * 表情包地址:https://www.jsdelivr.com/package/gh/GamerNoTitle/ValineCDN?path=bilibilitv
 */

const emojiMaps = {
  tv_doge:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_doge].png",
  tv_亲亲:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_亲亲].png",
  tv_偷笑:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_偷笑].png",
  tv_再见:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_再见].png",
  tv_冷漠:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_冷漠].png",
  tv_发怒:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_发怒].png",
  tv_发财:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_发财].png",
  tv_可爱:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_可爱].png",
  tv_吐血:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_吐血].png",
  tv_呆:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_呆].png",
  tv_呕吐:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_呕吐].png",
  tv_困:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_困].png",
  tv_坏笑:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_坏笑].png",
  tv_大佬:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_大佬].png",
  tv_大哭:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_大哭].png",
  tv_委屈:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_委屈].png",
  tv_害羞:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_害羞].png",
  tv_尴尬:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_尴尬].png",
  tv_微笑:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_微笑].png",
  tv_思考:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_思考].png",
  tv_惊吓:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_惊吓].png",
  tv_打脸:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_打脸].png",
  tv_抓狂:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_抓狂].png",
  tv_斜眼笑:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_斜眼笑].png",
  tv_无奈:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_无奈].png",
  tv_晕:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_晕].png",
  tv_流汗:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_流汗].png",
  tv_流鼻血:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_流鼻血].png",
  tv_点赞:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_点赞].png",
  tv_生气:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_生气].png",
  tv_生病:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_生病].png",
  tv_疑问:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_疑问].png",
  tv_白眼:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_白眼].png",
  tv_皱眉:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_皱眉].png",
  tv_目瞪口呆:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_目瞪口呆].png",
  tv_睡着:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_睡着].png",
  tv_笑哭:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_笑哭].png",
  tv_腼腆:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_腼腆].png",
  tv_色:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_色].png",
  tv_调侃:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_调侃].png",
  tv_调皮:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_调皮].png",
  tv_鄙视:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_鄙视].png",
  tv_闭嘴:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_闭嘴].png",
  tv_难过:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_难过].png",
  tv_馋:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_馋].png",
  tv_难过:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_难过].png",
  tv_鬼脸:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_鬼脸].png",
  tv_黑人问号:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_黑人问号].png",
  tv_鼓掌:
    "https://cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@1.0/bilibilitv/[tv_鼓掌].png"
  // ... 更多表情
};

module.exports = emojiMaps;
