(this.webpackJsonpcsv_merge=this.webpackJsonpcsv_merge||[]).push([[0],{42:function(e,a,t){},45:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),s=t.n(i),o=(t(42),t(26)),l=t(15),c=t(25),d=t.n(c),h=t(30),u=t(31),f=t(32),p=t(9),g=t(37),v=t(36),b=(t.p,t(44),t(56)),j=t(55),m=t(58),O=t(54),y=t(57),x=(t(45),t(21)),w=t.n(x),F=(t(46),t(6)),S=t.n(F),C=t(14),D=t.n(C),M=t(5),k="\u63a5\u7a2e\u5834\u6240",L="YYYY-MM-DD",E="\u304a\u96fb\u8a71\u756a\u53f7",V="\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7",I="\u63a5\u7a2e\u56de\u6570\uff0e",N="\u63a5\u7a2e\u65e5\uff0e",R="\u30e1\u30fc\u30ab\u30fc\uff0e",Y=[],T=function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).mergeCsv=Object(h.a)(d.a.mark((function e(){var a,t,r,i,s,o,l,c,h,u,f,p,g,v;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.state.data1,t=n.state.data1Error,r=n.state.data2,i=n.state.nameChanged,s=n.getCategoryFieldName(a,i),o=s===i[0]?i[1]:i[0],l=[],r.forEach((function(e,n){if(a.has(n)){var r=a.get(n);"\u672a\u5bfe\u5fdc"===r["\u72b6\u614b"]&&(S.a.isEmpty(r["\u59d3"])&&(r["\u59d3"]="\u30fb"),S.a.isEmpty(r["\u540d"])&&(r["\u540d"]="\u30fb"),S.a.isEmpty(r[E])&&(r[E]="0"),S.a.isEmpty(r[s])&&(r[s]="category#024511_0|20210517|1"),S.a.isEmpty(r[o])&&(r[o]="\uff08\u30b7\u30b9\u30c6\u30e0\u7ba1\u7406\u7528\uff09\u5b8c\u4e86"),S.a.isEmpty(r["\u4e88\u7d04\u6642\u9593"])&&(r["\u4e88\u7d04\u6642\u9593"]="2021-05-17 08:00")),r["\u63a5\u7a2e\u30ef\u30af\u30c1\u30f3\u306e\u30e1\u30fc\u30ab\u30fc"]=e["\u30e1\u30fc\u30ab\u30fc\uff0e"];var i=D()(new Date(e["\u63a5\u7a2e\u65e5\uff0e"])).format(L);r["\u63a5\u7a2e\u5b9f\u65bd\u65e5"]=i,r["\u72b6\u614b"]="\u5b8c\u4e86",r["\u66f4\u65b0\u65e5"]=D()(new Date).format("YYYY-MM-DD hh:mm:ss"),l.push(r)}if(t.has(n)){var c=t.get(n),d=D()(new Date(e["\u63a5\u7a2e\u65e5\uff0e"])).format(L);c["\u63a5\u7a2e\u5b9f\u65bd\u65e5"]!=d&&Y.push(e)}})),console.log("data error after merge: "),console.log(Y),console.log("finish Merge: "),console.log(l),console.log("begin parse: "),c=w.a.unparse(l,{}),console.log(c),(h=n.state.nameChanged).length>0&&((u=c.indexOf("\n"))&&(f=c.substring(0,u),p=f.split(","),g=[],p.forEach((function(e){if(e.includes(k)){var a=S.a.findIndex(h,(function(a){return e.includes(a)}));a>=0&&(e=S.a.replace(e,h[a],"\u63a5\u7a2e\u5834\u6240"))}g.push(e)}))),v=S.a.join(g,","),c=c.replace(f,v)),n.input1Ref.current.value="",n.input2Ref.current.value="",n.setState({data1:new Map,data1Error:new Map,data2:new Map,nameChanged:[],isLoading:!1,showResults:!0,isFinishMerge:!0,resultData:c,errorFound:Y.length>0});case 20:case"end":return e.stop()}}),e)}))),n.downloadToFile=function(e,a,t){var n=document.createElement("a"),r=new Blob([e],{type:t});n.href=URL.createObjectURL(r),n.download=a,n.click(),URL.revokeObjectURL(n.href)},n.state={data1:new Map,data1Error:new Map,data2:new Map,nameChanged:[],fileName:"",errorfileName:"",isLoading:!1,showResults:!1,errorFound:!1,isFinishMerge:!1,resultData:""},n.input1Ref=r.a.createRef(),n.input2Ref=r.a.createRef(),n.handleInputFile=n.handleInputFile.bind(Object(p.a)(n)),n.handleMergeData=n.handleMergeData.bind(Object(p.a)(n)),n.exportErrorFile=n.exportErrorFile.bind(Object(p.a)(n)),n.handleDownLoadFileMerged=n.handleDownLoadFileMerged.bind(Object(p.a)(n)),n.resetState=n.resetState.bind(Object(p.a)(n)),n}return Object(f.a)(t,[{key:"checkFileCSV",value:function(e){var a=e.substr(e.lastIndexOf(".")+1);return-1!==S.a.findIndex(["csv"],(function(e){return e==a}))}},{key:"checkFileType",value:function(e){return e&&e.hasOwnProperty("\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u30ad\u30fc")?1:e&&e.hasOwnProperty(R)&&e.hasOwnProperty(N)&&e.hasOwnProperty(I)&&e.hasOwnProperty(V)?2:-1}},{key:"handleInvalidData",value:function(e,a){alert(e),a&&(a.target.value="")}},{key:"handleInputFile",value:function(e){var a=this;Y=[],this.setState({isLoading:!0,errorFound:!1,isAvailableDownLoad:!1,resultData:"",isFinishMerge:!1});var t=e.target.value.split("\\").pop();this.checkFileCSV(t)?w.a.parse(e.target.files[0],{delimiter:",",header:!0,skipEmptyLines:!0,trimHeaders:!0,complete:function(n){console.log(n.data);var r=S.a.first(null===n||void 0===n?void 0:n.data)||void 0;if(n.errors.length>0||!r)return a.handleInvalidData("The CSV file is empty data, Please choose another file.",e),void a.setState({isLoading:!1});1==a.checkFileType(r)?(a.setState({fileName:t.substr(0,t.lastIndexOf("."))}),a.handleDataFile1(n)):2==a.checkFileType(r)?(a.setState({errorfileName:t.substr(0,t.lastIndexOf("."))}),a.handleDataFile2(n)):(a.handleInvalidData("Invalid data format csv must have\u300c\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7\u300d\u3001\u300c\u63a5\u7a2e\u56de\u6570\uff0e\u300d\u3001\u300c\u63a5\u7a2e\u65e5\uff0e\u300d\u3001\u300c\u30e1\u30fc\u30ab\u30fc\uff0e\u300dfields. And, must used UTF-8 encoding.",e),a.setState({isLoading:!1}))},transform:function(e,t){return a.validDataString(e)},transformHeader:function(e,t){if((e=a.validDataString(e))==k){var n=a.state.nameChanged;e=k+t,n.push(e),a.setState({nameChanged:n})}return e}}):this.handleInvalidData("Invalid file type",e)}},{key:"validDataString",value:function(e){return e=e.replace(new RegExp(/[="]/g),"")}},{key:"handleDataFile1",value:function(e){for(var a=new Map,t=new Map,n=new Map,r=0;r<e.data.length;r++){var i=e.data[r];if("1\u56de\u76ee"===i["\u63a5\u7a2e\u56de\u6570"]||"2\u56de\u76ee"===i["\u63a5\u7a2e\u56de\u6570"]){var s=i["\u63a5\u7a2e\u5238\u756a\u53f7"]+i["\u63a5\u7a2e\u56de\u6570"];"\u5bfe\u5fdc\u6e08"===i["\u72b6\u614b"]?a.set(s,i):"\u672a\u5bfe\u5fdc"===i["\u72b6\u614b"]?n.set(s,i):"\u5b8c\u4e86"===i["\u72b6\u614b"]&&t.set(s,i)}}n.forEach((function(e,t){a.has(t)||a.set(t,e)})),this.setState({data1:a,data1Error:t,isLoading:!1}),console.log("Upload file 1 success")}},{key:"handleDataFile2",value:function(e){console.log(e.data);for(var a=new Map,t=0;t<e.data.length;t++){var n=e.data[t];"1"!==n["\u63a5\u7a2e\u56de\u6570\uff0e"]&&"2"!==n["\u63a5\u7a2e\u56de\u6570\uff0e"]||S.a.isEmpty(n["\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7"])?Y.push(n):a.set(n["\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7"]+n["\u63a5\u7a2e\u56de\u6570\uff0e"]+"\u56de\u76ee",n)}this.setState({data2:a,isLoading:!1}),console.log("list data error before merge"),console.log(Y),console.log("Upload file 2 success"),console.log(a)}},{key:"validateAddEnoughtFileData",value:function(){this.input1Ref.value&&this.input1Ref.value&&(0==this.state.data1.size||0==this.state.data2.size)&&this.handleInvalidData("Can not merge two csv has same type. You must input SwichSmile CSV and another CSV to merge")}},{key:"handleMergeData",value:function(e){var a=this;this.handleProcessData((function(){a.mergeCsv()}))}},{key:"handleProcessData",value:function(e){this.setState({isLoading:!0},(function(){setTimeout((function(){e()}),1e3)}))}},{key:"getCategoryFieldName",value:function(e,a){var t,n=Object(l.a)(e);try{for(n.s();!(t=n.n()).done;){var r,i=Object(o.a)(t.value,2),s=(i[0],i[1]),c=Object(l.a)(a);try{for(c.s();!(r=c.n()).done;){var d=r.value;if(s[d].includes("category"))return d}}catch(j){c.e(j)}finally{c.f()}}}catch(j){n.e(j)}finally{n.f()}var h,u=Object(l.a)(e);try{for(u.s();!(h=u.n()).done;){var f,p=Object(o.a)(h.value,2),g=(p[0],p[1]),v=Object(l.a)(a);try{for(v.s();!(f=v.n()).done;){var b=f.value;if(g[b]>0)return b===a[0]?a[1]:a[0]}}catch(j){v.e(j)}finally{v.f()}}}catch(j){u.e(j)}finally{u.f()}return a[0]}},{key:"resetState",value:function(){this.setState({data1:new Map,data1Error:new Map,data2:new Map,nameChanged:[],fileName:"",errorfileName:"",isLoading:!1,showResults:!1,errorFound:!1,resultData:"",isFinishMerge:!1}),Y=[]}},{key:"handleDownLoadFileMerged",value:function(){var e=D()(new Date).format("MMDDYYYYhhmm"),a=this.state.fileName+"_merged_"+e+".csv";this.downloadToFile(this.state.resultData,a,"text/csv;charset=utf-8;")}},{key:"exportErrorFile",value:function(){var e=this;S.a.size(Y)>0&&this.setState({isLoading:!0},(function(){setTimeout((function(){var a=w.a.unparse(Y),t=D()(new Date).format("MMDDYYYYhhmm");e.downloadToFile(a,[e.state.errorfileName,"error",t+".csv"].join("_"),"text/csv;charset=utf-8;"),e.setState({isLoading:!1})}),100)}))}},{key:"render",value:function(){var e=this;return Object(M.jsxs)("div",{className:"App",children:[Object(M.jsxs)(b.a,{bg:"light",expand:"lg",children:[Object(M.jsx)(b.a.Brand,{href:"#home",children:"CSV\u30de\u30fc\u30b8\u30c4\u30fc\u30eb"}),Object(M.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"})]}),Object(M.jsxs)("div",{className:"container",children:[Object(M.jsxs)(j.a,{className:"form-container",children:[Object(M.jsxs)("label",{className:"form-input-title",children:["\u4f7f\u7528\u65b9\u6cd5\uff1a",Object(M.jsx)("br",{}),"\u2460 \u5065\u5eb7\u30ab\u30eb\u30c6\u306eCSV\u30d5\u30a1\u30a4\u30eb\u304a\u3088\u3073\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3092PC\u304b\u3089\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(M.jsx)("br",{}),"\xa0\xa0\xa0\xa0\u30fb\u3069\u3061\u3089\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3082\u6587\u5b57\u30b3\u30fc\u30c9\u3092UTF-8\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",Object(M.jsx)("br",{}),"\xa0\xa0\xa0\xa0\u30fb\u5065\u5eb7\u30ab\u30eb\u30c6\u306eCSV\u30d5\u30a1\u30a4\u30eb\u306f\u300c\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238 \u5238\u756a\u53f7\u300d\u3001\u300c\u751f\u5e74\u6708\u65e5\u300d\u3001\u300c\u63a5\u7a2e\u56de\u6570\uff0e\u300d\u3001\u300c\u63a5\u7a2e\u65e5\uff0e\u300d\u3001\u300c\u30e1\u30fc\u30ab\u30fc\uff0e\u300d\u306e\u30c7\u30fc\u30bf\u3092\u5fc5\u9808\u3068\u3057\u307e\u3059\u3002",Object(M.jsx)("br",{}),"\u2461 2\u3064\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u3001\u300cCSV\u30de\u30fc\u30b8\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(M.jsx)("br",{}),"\u2462 \u300c\u30de\u30fc\u30b8\u3055\u308c\u305f\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3057\u3066\u3001\u30de\u30fc\u30b8\u3055\u308c\u305fCSV\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"\u30de\u30fc\u30b8\u306e\u969b\u306b\u30a8\u30e9\u30fc\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u300c\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5065\u5eb7\u30ab\u30eb\u30c6\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",Object(M.jsx)("br",{}),"\u300c\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5065\u5eb7\u30ab\u30eb\u30c6\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3068\u3001\u5065\u5eb7\u30ab\u30eb\u30c6\u4e0a\u306e\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5185\u5bb9\u304cCSV\u30d5\u30a1\u30a4\u30eb\u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002",Object(M.jsx)("br",{})]}),Object(M.jsxs)("div",{className:"form-input-container",children:[Object(M.jsx)(j.a.Group,{controlId:"file1",children:Object(M.jsx)(j.a.File,{id:"fileCSVFile1",label:"\u5065\u5eb7\u30ab\u30eb\u30c6\u306eCSV\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",ref:this.input1Ref,onChange:this.handleInputFile})}),Object(M.jsx)(j.a.Group,{controlId:"file2",children:Object(M.jsx)(j.a.File,{id:"fileCSVFile2",label:"\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306eCSV\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",ref:this.input2Ref,onChange:this.handleInputFile})})]}),this.state.isFinishMerge?Object(M.jsxs)("div",{children:[Object(M.jsx)(m.a,{variant:"primary",type:"button",onClick:this.handleDownLoadFileMerged,disabled:this.state.isLoading,children:"\u30de\u30fc\u30b8\u3055\u308c\u305f\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),this.state.errorFound&&Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(m.a,{variant:"danger",type:"button",className:"ml-4",onClick:this.exportErrorFile,disabled:this.state.isLoading,children:"\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5065\u5eb7\u30ab\u30eb\u30c6\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})})]}):Object(M.jsx)(m.a,{variant:"primary",type:"button",onClick:this.handleMergeData,disabled:this.state.isLoading,children:"CSV\u30de\u30fc\u30b8"})]}),this.state.isLoading?Object(M.jsx)("div",{className:"loading-container",children:Object(M.jsx)(O.a,{className:"loading-content",animation:"border",variant:"primary",role:"status",children:Object(M.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(M.jsx)("div",{}),Object(M.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",minHeight:"200px",top:0,right:0},children:Object(M.jsxs)(y.a,{onClose:function(){return e.setState({showResults:!1})},show:!1,delay:5e3,autohide:!0,children:[Object(M.jsx)(y.a.Header,{children:Object(M.jsx)("strong",{className:"mr-auto",children:"Merge CSV complete."})}),Object(M.jsx)(y.a.Body,{children:"merge CSV file complete. The result CSV will be automatic download."})]})})]})]})}}]),t}(r.a.Component);s.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(T,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.11337e67.chunk.js.map