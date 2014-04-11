/*! cornerstone - v0.0.1 - 2014-04-11 | (c) 2014 Chris Hafey | https://github.com/chafey/cornerstone */
!function(){"use strict";function a(){var a=0,b=/MSIE (\d+\.\d+);/.test(navigator.userAgent),c=!!navigator.userAgent.match(/Trident\/7.0/),d=navigator.userAgent.indexOf("rv:11.0");return b&&(a=new Number(RegExp.$1)),-1!=navigator.appVersion.indexOf("MSIE 10")&&(a=10),c&&-1!=d&&(a=11),a}var b=a();11>=b&&!function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}a.prototype=window.Event.prototype,window.CustomEvent=a}()}();var cornerstone=function(a){"use strict";function b(a){g.width=a.width,g.height=a.height,e=g.getContext("2d"),e.fillStyle="white",e.fillRect(0,0,g.width,g.height),f=e.getImageData(0,0,a.width,a.height)}function c(b,c){return void 0!==b.lut&&b.lut.windowCenter===c.windowCenter&&b.lut.windowWidth===c.windowWidth?b.lut:(b.lut=a.generateLut(b,c.windowWidth,c.windowCenter,c.invert),b.lut.windowWidth=c.windowWidth,b.lut.windowCenter=c.windowCenter,b.lut)}function d(d,h){var i=d.canvas.getContext("2d");i.setTransform(1,0,0,1,0,0),i.fillStyle="black",i.fillRect(0,0,d.canvas.width,d.canvas.height),(g.width!==h.width||g.height!=h.height)&&b(h),i.save(),a.setToPixelCoordinateSystem(d,i);var j=c(h,d.viewport);a.storedPixelDataToCanvasImageData(h,j,f.data),e.putImageData(f,0,0),d.viewport.pixelReplication===!0&&(i.webkitImageSmoothingEnabled=!1),i.drawImage(g,0,0,h.columns,h.rows,0,0,h.columns,h.rows),i.restore();var k=new CustomEvent("CornerstoneImageRendered",{detail:{canvasContext:i,viewport:d.viewport,image:d.image,element:d.element,enabledElement:d},bubbles:!1,cancelable:!1});d.element.dispatchEvent(k)}void 0===a&&(a={});var e,f,g=document.createElement("canvas");return a.drawImage=d,a}(cornerstone),cornerstone=function(a){"use strict";function b(b,c,d){var e=document.createElement("canvas"),f=window.devicePixelRatio>1;f?(e.width=b.clientWidth*window.devicePixelRatio,e.height=b.clientHeight*window.devicePixelRatio,e.style.width=b.clientWidth+"px",e.style.height=b.clientHeight+"px"):(e.width=b.clientWidth,e.height=b.clientHeight,e.style.width=b.clientWidth+"px",e.style.height=b.clientHeight+"px"),b.appendChild(e);var g={element:b,canvas:e,imageId:"",imageIdHistory:[],data:{}};a.addEnabledElement(g),a.showImage(b,c,d)}return void 0===a&&(a={}),a.enable=b,a}(cornerstone),cornerstone=function(){"use strict";function a(a,b){var c=a.getAttribute(b);return void 0===c?void 0:c}function b(){for(var b=document.querySelectorAll("[data-cornerstoneEnabled]"),c=0;c<b.length;c++){var d=b[c],e=d.getAttribute("data-cornerstoneImageId"),f={scale:a(d,"data-cornerstoneViewportScale"),centerX:a(d,"data-cornerstoneViewportCenterX"),centerY:a(d,"data-cornerstoneViewportCenterY"),windowWidth:a(d,"data-cornerstoneViewportWindowWidth"),windowCenter:a(d,"data-cornerstoneViewportWindowCenter")};cornerstone.enable(d,e,f)}}void 0===cornerstone&&(cornerstone={});var c=window.onload;return window.onload=function(){"function"==typeof c&&c(),b()},cornerstone.enableAllElements=b,cornerstone}(cornerstone),cornerstone=function(a){"use strict";function b(b,c){var d=a.getEnabledElement(b);return d.data.hasOwnProperty(c)===!1&&(d.data[c]={}),d.data[c]}function c(b,c){var d=a.getEnabledElement(b);delete d.data[c]}return void 0===a&&(a={}),a.getElementData=b,a.removeElementData=c,a}(cornerstone),cornerstone=function(a){"use strict";function b(a){for(var b=0;b<e.length;b++)if(e[b].element==a)return e[b];return void 0}function c(a){e.push(a)}function d(a){for(var b=0;b<e.length;b++)if(e[b].element===a)return e[b].element.removeChild(e[b].canvas),void e.splice(b,1)}void 0===a&&(a={});var e=[];return a.getEnabledElement=b,a.addEnabledElement=c,a.removeEnabledElement=d,a}(cornerstone),cornerstone=function(a){"use strict";function b(b){var c=a.getEnabledElement(b),d=a.getDefaultViewport(c.canvas,c.image);c.viewport.scale=d.scale,c.viewport.centerX=d.centerX,c.viewport.centerY=d.centerY,a.updateImage(b)}return void 0===a&&(a={}),a.fitToWindow=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(a,b,c,d){var e,f,g,h,i=[],j=a.maxPixelValue,k=a.slope,l=a.intercept,m=b,n=c;if(d===!0)for(h=a.minPixelValue;j>=h;h++)e=h*k+l,f=255*((e-n)/m+.5),g=Math.min(Math.max(f,0),255),i[h]=Math.round(255-g);else for(h=a.minPixelValue;j>=h;h++)e=h*k+l,f=255*((e-n)/m+.5),g=Math.min(Math.max(f,0),255),i[h]=Math.round(g);return i}return void 0===a&&(a={}),a.generateLut=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(a,b){var c={scale:1,centerX:0,centerY:0,windowWidth:b.windowWidth,windowCenter:b.windowCenter,invert:b.invert},d=a.height/b.rows,e=a.width/b.columns;return c.scale=d>e?e:d,c}return void 0===a&&(a={}),a.getDefaultViewport=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(b,c,d,e,f){c=Math.round(c),d=Math.round(d);for(var g=a.getEnabledElement(b),h=[],i=0,j=0;f>j;j++)for(var k=0;e>k;k++){var l=(j+d)*g.image.columns+(k+c);h[i++]=g.image.storedPixelData[l]}return h}return void 0===a&&(a={}),a.getStoredPixels=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(a){var b,c=a.indexOf(":"),d=a.substring(0,c),e=g[d];return void 0===e||null===e?void 0!==f?b=f(a):void 0:b=e(a)}function c(a){if(void 0===h[a]){var c=b(a);return h[a]=c,c}return h[a]}function d(a,b){g[a]=b}function e(a){var b=f;return f=a,b}void 0===a&&(a={});var f,g={},h={};return a.loadImage=c,a.registerImageLoader=d,a.registerUnknownImageLoader=e,a}(cornerstone),cornerstone=function(a){"use strict";function b(b,c,d){var e=a.getEnabledElement(b);if(void 0===e.image)return{x:0,y:0};var f=b.getBoundingClientRect(),g=c-f.left-window.scrollX,h=d-f.top-window.scrollY,i=g-f.width/2,j=h-f.height/2,k=e.viewport,l=i/k.scale,m=j/k.scale,n=l-k.centerX,o=m-k.centerY;return n+=e.image.columns/2,o+=e.image.rows/2,{x:n,y:o}}return void 0===a&&(a={}),a.pageToPixel=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(a,b,c){b.setTransform(1,0,0,1,0,0),b.translate(a.canvas.width/2,a.canvas.height/2),b.scale(a.viewport.scale,a.viewport.scale),b.translate(a.viewport.centerX,a.viewport.centerY);var d=.1;b.scale(d,d),b.translate(-a.image.columns/2/d,-a.image.rows/2/d);var e=c/a.viewport.scale/d,f=c/a.viewport.scale/d;return{fontSize:e,lineHeight:f,fontScale:d}}return void 0===a&&(a={}),a.setToFontCoordinateSystem=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(a,b){b.setTransform(1,0,0,1,0,0),b.translate(a.canvas.width/2,a.canvas.height/2),b.scale(a.viewport.scale,a.viewport.scale),b.translate(a.viewport.centerX,a.viewport.centerY),b.translate(-a.image.columns/2,-a.image.rows/2)}return void 0===a&&(a={}),a.setToPixelCoordinateSystem=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(b,c,d){var e=a.getEnabledElement(b);e.imageIdHistory.unshift(c);var f=a.loadImage(c);f.done(function(f){for(var g=0;g<e.imageIdHistory.length;g++)if(e.imageIdHistory[g]===f.imageId){e.imageId=c;var h=e.imageIdHistory.length-g;if(console.log("removing "+h+" stale entries from imageIdHistory, "+(e.imageIdHistory.length-h)+" remaining"),e.imageIdHistory.splice(g,h),e.image=f,void 0===e.viewport&&(e.viewport=a.getDefaultViewport(e.canvas,f)),d)for(var i in d)null!==d[i]&&(e.viewport[i]=d[i]);a.updateImage(b);var j=new CustomEvent("CornerstoneViewportUpdated",{detail:{viewport:e.viewport,element:b,image:e.image},bubbles:!1,cancelable:!1});return b.dispatchEvent(j),j=new CustomEvent("CornerstoneNewImage",{detail:{viewport:e.viewport,element:b,image:e.image},bubbles:!1,cancelable:!1}),void b.dispatchEvent(j)}})}return void 0===a&&(a={}),a.showImage=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(a,b,c){for(var d=3,e=0,f=a.width*a.height,g=a.storedPixelData,h=b,i=c;f>e;)i[d]=h[g[e++]],d+=4}return void 0===a&&(a={}),a.storedPixelDataToCanvasImageData=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(b){var c=a.getEnabledElement(b),d=c.image;void 0!==d&&a.drawImage(c,d)}return void 0===a&&(a={}),a.updateImage=b,a}(cornerstone),cornerstone=function(a){"use strict";function b(b,c){var d=a.getEnabledElement(b);c.windowWidth<1&&(c.windowWidth=1),c.scale<1e-4&&(c.scale=.25),d.viewport=c,a.updateImage(b);var e=new CustomEvent("CornerstoneViewportUpdated",{detail:{viewport:c,element:b,image:d.image},bubbles:!1,cancelable:!1});b.dispatchEvent(e)}function c(b){return a.getEnabledElement(b).viewport}return void 0===a&&(a={}),a.getViewport=c,a.setViewport=b,a}(cornerstone);