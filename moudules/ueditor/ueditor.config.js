(function(){function d(d,e){var a=d||self.document.URL||self.location.href,b;(b=e)||(b=document.getElementsByTagName("script"),b=b[b.length-1].src);var c=b;/^(\/|\\\\)/.test(b)?c=/^.+?\w(\/|\\\\)/.exec(a)[0]+b.replace(/^(\/|\\\\)/,""):/^[a-z]+:/i.test(b)||(a=a.split("#")[0].split("?")[0].replace(/[^\\\/]+$/,""),c=a+""+b);a=c;b=/^[a-z]+:\/\//.exec(a)[0];var c=null,f=[],a=a.replace(b,"").split("?")[0].split("#")[0],a=a.replace(/\\/g,"/").split(/\//);for(a[a.length-1]="";a.length;)".."===(c=a.shift())?
f.pop():"."!==c&&f.push(c);return b+f.join("/")}var e=window.UEDITOR_HOME_URL||d();window.UEDITOR_CONFIG={UEDITOR_HOME_URL:e,serverUrl:e+"php/controller.php",toolbars:["source undo redo bold italic underline fontborder forecolor justifyleft justifycenter justifyright justifyjustify fontfamily fontsize".split(" ")],lang:"en"};window.UE={getUEBasePath:d}})();