System.register(["./index-legacy.0044f6f7.js","./use-message-legacy.81eb178b.js","./DataTable-legacy.60e87085.js","./Icon-legacy.082d5283.js","./Empty-legacy.a103449e.js","./use-locale-legacy.ff5b5494.js"],(function(e,t){"use strict";var l,a,n,s,o,i,y,c,r,u,d,p,k,h,m;return{setters:[e=>{l=e.f,a=e.bv,n=e.r,s=e.bF,o=e.k,i=e.o,y=e.m,c=e.x,r=e.by,u=e.aC,d=e.aX,p=e._},e=>{k=e.u},e=>{h=e.f,m=e.j},()=>{},()=>{},()=>{}],execute:function(){e("default",l({__name:"Test",setup(e){const t=a([]);t[0]={filename:"巴啦啦小魔仙秘术宝典.pdf",hash:"121212",updateTime:"2022-02-02 00:00:00",type:"JPEG",size:"14839483"};const l=[{label:"复制",key:"duplicate"},{label:"拷贝",key:"copy"},{label:"剪切",key:"cut"},{label:()=>o("span",{style:{color:"red"}},"删除"),key:"delete"}],f=k(),b=n(!1),g=a({x:0,y:0}),x=s([{type:"selection",disabled:(e,t)=>"Edward King 3"===e.hash},{title:"文件名",key:"filename"},{title:"修改日期",key:"updateTime"},{title:"类型",key:"type"},{title:"大小",key:"size",render:e=>(e.size/8/Math.pow(2,20)).toFixed(2)+"MB"},{title:"操作",key:"operation",render:e=>o(d,{quaternary:!0,type:"error",size:"tiny",onClick:()=>{deleteFile(e)}},(()=>"删除"))}]),w=()=>{b.value=!1},v=()=>{b.value=!1},j=e=>({onContextmenu:t=>{f.info(JSON.stringify(e,null,2)),t.preventDefault(),b.value=!1,p().then((()=>{b.value=!0,g.x=t.clientX,g.y=t.clientY}))}});return(e,a)=>{const n=h,s=m;return i(),y(u,null,[c(n,{"row-key":e=>e.hash,"row-props":j,"max-height":400,columns:r(x),data:t,"onUpdate:checkedRowKeys":e.handleCheck},null,8,["row-key","columns","data","onUpdate:checkedRowKeys"]),c(s,{placement:"bottom-start",trigger:"manual",x:g.x,y:g.y,options:l,show:b.value,"on-clickoutside":v,onSelect:w},null,8,["x","y","show"])],64)}}}))}}}));
