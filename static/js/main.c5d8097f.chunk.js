(this.webpackJsonpcsv_merge=this.webpackJsonpcsv_merge||[]).push([[0],{39:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(13),r=a.n(s),l=(a(39),a(23)),o=a.n(l),c=a(27),d=a(28),h=a(29),u=a(8),f=a(34),g=a(33),p=(a.p,a(41),a(53)),b=a(52),j=a(55),v=a(51),m=a(54),O=(a(42),a(19)),x=a.n(O),S=(a(43),a(10)),F=a.n(S),w=a(14),D=a.n(w),y=a(5),C="\u63a5\u7a2e\u5834\u6240",M="\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7",k="\u63a5\u7a2e\u56de\u6570\uff0e",L="\u63a5\u7a2e\u65e5\uff0e",V="\u30e1\u30fc\u30ab\u30fc\uff0e",I=[],R=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).mergeCsv=Object(c.a)(o.a.mark((function e(){var t,a,i,s,r,l,c,d,h,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.state.data1,a=n.state.data2,i=[],a.forEach((function(e,a){if(t.has(a)){var n=t.get(a);n["\u63a5\u7a2e\u30ef\u30af\u30c1\u30f3\u306e\u30e1\u30fc\u30ab\u30fc"]=e["\u30e1\u30fc\u30ab\u30fc\uff0e"];var s=D()(new Date(e["\u63a5\u7a2e\u65e5\uff0e"])).format("YYYY-MM-DD");n["\u63a5\u7a2e\u5b9f\u65bd\u65e5"]=s,n["\u72b6\u614b"]="\u5b8c\u4e86",n["\u66f4\u65b0\u65e5"]=D()(new Date).format("YYYY-MM-DD hh:mm:ss"),i.push(n)}else I.push(e)})),console.log("data error after merge: "),console.log(I),console.log("finish Merge: "),console.log(i),console.log("begin parse: "),s=x.a.unparse(i,{}),console.log(s),(r=n.state.nameChanged).length>0&&((l=s.indexOf("\n"))&&(c=s.substring(0,l),d=c.split(","),h=[],d.forEach((function(e){if(e.includes(C)){var t=F.a.findIndex(r,(function(t){return e.includes(t)}));t>=0&&(e=F.a.replace(e,r[t],"\u63a5\u7a2e\u5834\u6240"))}h.push(e)}))),u=F.a.join(h,","),s=s.replace(c,u)),n.input1Ref.current.value="",n.input2Ref.current.value="",n.setState({data1:new Map,data2:new Map,nameChanged:[],isLoading:!1,showResults:!0,isFinishMerge:!0,resultData:s,errorFound:I.length>0});case 16:case"end":return e.stop()}}),e)}))),n.downloadToFile=function(e,t,a){var n=document.createElement("a"),i=new Blob([e],{type:a});n.href=URL.createObjectURL(i),n.download=t,n.click(),URL.revokeObjectURL(n.href)},n.state={data1:new Map,data2:new Map,nameChanged:[],fileName:"",errorfileName:"",isLoading:!1,showResults:!1,errorFound:!1,isFinishMerge:!1,resultData:""},n.input1Ref=i.a.createRef(),n.input2Ref=i.a.createRef(),n.handleInputFile=n.handleInputFile.bind(Object(u.a)(n)),n.handleMergeData=n.handleMergeData.bind(Object(u.a)(n)),n.exportErrorFile=n.exportErrorFile.bind(Object(u.a)(n)),n.handleDownLoadFileMerged=n.handleDownLoadFileMerged.bind(Object(u.a)(n)),n.resetState=n.resetState.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"checkFileCSV",value:function(e){var t=e.substr(e.lastIndexOf(".")+1);return-1!==F.a.findIndex(["csv"],(function(e){return e==t}))}},{key:"checkFileType",value:function(e){return e&&e.hasOwnProperty("\u30d1\u30fc\u30c6\u30a3\u30b7\u30e7\u30f3\u30ad\u30fc")?1:e&&e.hasOwnProperty(V)&&e.hasOwnProperty(L)&&e.hasOwnProperty(k)&&e.hasOwnProperty(M)?2:-1}},{key:"handleInvalidData",value:function(e,t){alert(e),t&&(t.target.value="")}},{key:"handleInputFile",value:function(e){var t=this;I=[],this.setState({isLoading:!0,errorFound:!1,isAvailableDownLoad:!1,resultData:"",isFinishMerge:!1});var a=e.target.value.split("\\").pop();this.checkFileCSV(a)?x.a.parse(e.target.files[0],{delimiter:",",header:!0,skipEmptyLines:!0,trimHeaders:!0,complete:function(n){console.log(n.data);var i=F.a.first(null===n||void 0===n?void 0:n.data)||void 0;if(n.errors.length>0||!i)return t.handleInvalidData("The CSV file is empty data, Please choose another file.",e),void t.setState({isLoading:!1});1==t.checkFileType(i)?(t.setState({fileName:a.substr(0,a.lastIndexOf("."))}),t.handleDataFile1(n)):2==t.checkFileType(i)?(t.setState({errorfileName:a.substr(0,a.lastIndexOf("."))}),t.handleDataFile2(n)):(t.handleInvalidData("Invalid data format csv must have\u300c\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7\u300d\u3001\u300c\u63a5\u7a2e\u56de\u6570\uff0e\u300d\u3001\u300c\u63a5\u7a2e\u65e5\uff0e\u300d\u3001\u300c\u30e1\u30fc\u30ab\u30fc\uff0e\u300dfields. And, must used UTF-8 encoding.",e),t.setState({isLoading:!1}))},transform:function(e,a){return t.validDataString(e)},transformHeader:function(e,a){if((e=t.validDataString(e))==C){var n=t.state.nameChanged;e=C+a,n.push(e),t.setState({nameChanged:n})}return e}}):this.handleInvalidData("Invalid file type",e)}},{key:"validDataString",value:function(e){return e=e.replace(new RegExp(/[="]/g),"")}},{key:"handleDataFile1",value:function(e){for(var t=new Map,a=new Map,n=0;n<e.data.length;n++){var i=e.data[n];"1\u56de\u76ee"===i["\u63a5\u7a2e\u56de\u6570"]&&("\u5bfe\u5fdc\u6e08"===i["\u72b6\u614b"]?t.set(i["\u63a5\u7a2e\u5238\u756a\u53f7"],i):"\u672a\u5bfe\u5fdc"===i["\u72b6\u614b"]&&a.set(i["\u63a5\u7a2e\u5238\u756a\u53f7"],i))}a.forEach((function(e,a){t.has(a)||t.set(a,e)})),this.setState({data1:t,isLoading:!1}),console.log("Upload file 1 success")}},{key:"handleDataFile2",value:function(e){console.log(e.data);for(var t=new Map,a=0;a<e.data.length;a++){var n=e.data[a];"1"!==n["\u63a5\u7a2e\u56de\u6570\uff0e"]||F.a.isEmpty(n["\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7"])?I.push(n):t.set(n["\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238\u3000\u5238\u756a\u53f7"],n)}this.setState({data2:t,isLoading:!1}),console.log("list data error before merge"),console.log(I),console.log("Upload file 2 success"),console.log(t)}},{key:"validateAddEnoughtFileData",value:function(){this.input1Ref.value&&this.input1Ref.value&&(0==this.state.data1.size||0==this.state.data2.size)&&this.handleInvalidData("Can not merge two csv has same type. You must input SwichSmile CSV and another CSV to merge")}},{key:"handleMergeData",value:function(e){var t=this;this.handleProcessData((function(){t.mergeCsv()}))}},{key:"handleProcessData",value:function(e){this.setState({isLoading:!0},(function(){setTimeout((function(){e()}),1e3)}))}},{key:"resetState",value:function(){this.setState({data1:new Map,data2:new Map,nameChanged:[],fileName:"",errorfileName:"",isLoading:!1,showResults:!1,errorFound:!1,resultData:"",isFinishMerge:!1}),I=[]}},{key:"handleDownLoadFileMerged",value:function(){var e=D()(new Date).format("MMDDYYYYhhmm"),t=this.state.fileName+"_merged_"+e+".csv";this.downloadToFile(this.state.resultData,t,"text/csv;charset=utf-8;")}},{key:"exportErrorFile",value:function(){var e=this;F.a.size(I)>0&&this.setState({isLoading:!0},(function(){setTimeout((function(){var t=x.a.unparse(I),a=D()(new Date).format("MMDDYYYYhhmm");e.downloadToFile(t,[e.state.errorfileName,"error",a+".csv"].join("_"),"text/csv;charset=utf-8;"),e.setState({isLoading:!1})}),100)}))}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)(p.a,{bg:"light",expand:"lg",children:[Object(y.jsx)(p.a.Brand,{href:"#home",children:"CSV\u30de\u30fc\u30b8\u30c4\u30fc\u30eb"}),Object(y.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"})]}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)(b.a,{className:"form-container",children:[Object(y.jsxs)("label",{className:"form-input-title",children:["\u4f7f\u7528\u65b9\u6cd5\uff1a",Object(y.jsx)("br",{}),"\u2460 \u5065\u5eb7\u30ab\u30eb\u30c6\u306eCSV\u30d5\u30a1\u30a4\u30eb\u304a\u3088\u3073\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3092PC\u304b\u3089\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(y.jsx)("br",{}),"\xa0\xa0\xa0\xa0\u30fb\u3069\u3061\u3089\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3082\u6587\u5b57\u30b3\u30fc\u30c9\u3092UTF-8\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",Object(y.jsx)("br",{}),"\xa0\xa0\xa0\xa0\u30fb\u5065\u5eb7\u30ab\u30eb\u30c6\u306eCSV\u30d5\u30a1\u30a4\u30eb\u306f\u300c\u65b0\u578b\u30b3\u30ed\u30ca\u63a5\u7a2e\u5238 \u5238\u756a\u53f7\u300d\u3001\u300c\u751f\u5e74\u6708\u65e5\u300d\u3001\u300c\u63a5\u7a2e\u56de\u6570\uff0e\u300d\u3001\u300c\u63a5\u7a2e\u65e5\uff0e\u300d\u3001\u300c\u30e1\u30fc\u30ab\u30fc\uff0e\u300d\u306e\u30c7\u30fc\u30bf\u3092\u5fc5\u9808\u3068\u3057\u307e\u3059\u3002",Object(y.jsx)("br",{}),"\u2461 2\u3064\u306eCSV\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u3001\u300cCSV\u30de\u30fc\u30b8\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(y.jsx)("br",{}),"\u2462 \u300c\u30de\u30fc\u30b8\u3055\u308c\u305f\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3057\u3066\u3001\u30de\u30fc\u30b8\u3055\u308c\u305fCSV\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"\u30de\u30fc\u30b8\u306e\u969b\u306b\u30a8\u30e9\u30fc\u304c\u3042\u3063\u305f\u5834\u5408\u3001\u300c\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5065\u5eb7\u30ab\u30eb\u30c6\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u30dc\u30bf\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",Object(y.jsx)("br",{}),"\u300c\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5065\u5eb7\u30ab\u30eb\u30c6\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3068\u3001\u5065\u5eb7\u30ab\u30eb\u30c6\u4e0a\u306e\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5185\u5bb9\u304cCSV\u30d5\u30a1\u30a4\u30eb\u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002",Object(y.jsx)("br",{})]}),Object(y.jsxs)("div",{className:"form-input-container",children:[Object(y.jsx)(b.a.Group,{controlId:"file1",children:Object(y.jsx)(b.a.File,{id:"fileCSVFile1",label:"\u5065\u5eb7\u30ab\u30eb\u30c6\u306eCSV\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",ref:this.input1Ref,onChange:this.handleInputFile})}),Object(y.jsx)(b.a.Group,{controlId:"file2",children:Object(y.jsx)(b.a.File,{id:"fileCSVFile2",label:"\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306eCSV\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",ref:this.input2Ref,onChange:this.handleInputFile})})]}),this.state.isFinishMerge?Object(y.jsxs)("div",{children:[Object(y.jsx)(j.a,{variant:"primary",type:"button",onClick:this.handleDownLoadFileMerged,disabled:this.state.isLoading,children:"\u30de\u30fc\u30b8\u3055\u308c\u305f\u4e88\u7d04\u30b7\u30b9\u30c6\u30e0\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"}),this.state.errorFound&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(j.a,{variant:"danger",type:"button",className:"ml-4",onClick:this.exportErrorFile,disabled:this.state.isLoading,children:"\u30de\u30fc\u30b8\u3055\u308c\u306a\u304b\u3063\u305f\u5065\u5eb7\u30ab\u30eb\u30c6\u306e\u30c7\u30fc\u30bf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})})]}):Object(y.jsx)(j.a,{variant:"primary",type:"button",onClick:this.handleMergeData,disabled:this.state.isLoading,children:"CSV\u30de\u30fc\u30b8"})]}),this.state.isLoading?Object(y.jsx)("div",{className:"loading-container",children:Object(y.jsx)(v.a,{className:"loading-content",animation:"border",variant:"primary",role:"status",children:Object(y.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(y.jsx)("div",{}),Object(y.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",minHeight:"200px",top:0,right:0},children:Object(y.jsxs)(m.a,{onClose:function(){return e.setState({showResults:!1})},show:!1,delay:5e3,autohide:!0,children:[Object(y.jsx)(m.a.Header,{children:Object(y.jsx)("strong",{className:"mr-auto",children:"Merge CSV complete."})}),Object(y.jsx)(m.a.Body,{children:"merge CSV file complete. The result CSV will be automatic download."})]})})]})]})}}]),a}(i.a.Component);r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(R,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c5d8097f.chunk.js.map