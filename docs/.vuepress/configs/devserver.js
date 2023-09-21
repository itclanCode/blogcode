 const devServer = {    
    proxy: {   
         // 周公解梦  
         '/api': {       
             target: 'https://v.juhe.cn',       
             changeOrigin: true,        
             pathRewrite: {          
                '^/api': ''       
             }      
          }, 
          // 天气查询
          '/path': {
             target: 'https://v0.yiketianqi.com',
             changeOrigin: true,
             pathRewrite: {
                '^/path': ''
             }
          },
          // 生辰助手
          '/shenchenInterface': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/shenchenInterface': ''
            }
         },
         // 星座运势代理
         '/web': {
            target: 'https://web.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/web': ''
            }
         },

         // 星座查询,代理
         '/starfindapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/starfindapi': ''
            }
         },

         // 星座配对,代理
         '/starpeiduiapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/starpeiduiapi': ''
            }
         },

          // 生肖查询,代理
          '/shengxiaofindapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/shengxiaofindapi': ''
            }
         },

          // 生肖配对,代理
          '/shengxiaopeiduiapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/shengxiaopeiduiapi': ''
            },
           },

            // 姓氏起源
            '/xingshioriginapi': {
               target: 'https://apis.juhe.cn',
               changeOrigin: true,
               pathRewrite: {
                  '^/xingshioriginapi': ''
               },
           },

           // 获取城市/省份/区域id
           '/pidciddidapi': {
            target: 'https://v.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/pidciddidapi': ''
            },

           },
         // 邮编查询
         '/postmenfindapi': {
            target: 'https://v.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/postmenfindapi': ''
            },
         },
         // 公积金贷款
         '/gongjijincalapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/gongjijincalapi': ''
            },
         },
         // 老黄历
         '/laohuangliapi': {
            target: 'https://v.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/laohuangliapi': ''
            },
         },
         // 成语大全
         '/chengyudaquanapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/chengyudaquanapi': ''
            },
         },
         // 历史上的今天
         '/historytodayapi': {
            target: 'https://v.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/historytodayapi': ''
            },
         },

         '/pyqwenanapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/pyqwenanapi': ''
            },
         },

         '/mingrenmingyanapi': {
            target: 'https://apis.juhe.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/mingrenmingyanapi': ''
            },
         },
         // 大米心灵毒鸡汤
         '/damidujitangapi': {
            target: 'https://api.qqsuu.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/damidujitangapi': ''
            },
         },

         // 大米翻译
         '/damitranslateapi': {
            target: 'https://api.qqsuu.cn',
            changeOrigin: true,
            pathRewrite: {
               '^/damitranslateapi': ''
            },
         },
    }  
  }

  module.exports = devServer;