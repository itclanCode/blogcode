/**
 * 获取geoJson数据  通过高德获取    递归获取区县geoJson
 * @param  {string} adcode  行政区code
 * @param  {string} childAdcode 区县级行政区code
 * @return {Array}
 */

import remoteLoad from "./remoteLoad.js";
const  {AMapCDN, AMapUiCDN} =  require("./cdn.js");

export function getGeoJson(adcode, childAdcode = "") {
    return new Promise((resolve, reject) => {
      if (window.AMap && window.AMapUI) {
        insideFun(adcode, childAdcode);
      } else {
        remoteLoad(AMapCDN).then(() => {
          if (window.AMap) {
            remoteLoad(AMapUiCDN).then(() => {
              if (window.AMapUI) {
                insideFun(adcode, childAdcode);
              } else {
                console.error("AMapUI获取失败");
              }
            });
          } else {
            console.error("AMap获取失败");
          }
        });
      }
      function insideFun(adcode, childAdcode) {
        // eslint-disable-next-line
        AMapUI.loadUI(["geo/DistrictExplorer"], DistrictExplorer => {
          var districtExplorer = new DistrictExplorer();
          districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
            if (error) {
              console.error(error);
              reject(error);
              return;
            }
            let Json = areaNode.getSubFeatures();
            if (Json.length === 0) {
              let parent = areaNode._data.geoData.parent.properties.acroutes;
              insideFun(parent[parent.length - 1], adcode);
              return;
            }
  
            if (childAdcode) {
              Json = Json.filter(item => {
                return item.properties.adcode == childAdcode;
              });
            }
            let mapJson = {
              features: Json
            };
            resolve(mapJson);
          });
        });
      }
    });
  }