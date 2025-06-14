import{r as b,F as S,k as st,G as lt,y as u,A as n,C as g,H as G,I as a,D as w,B as l,J as M,K,z as m,E as Y,L as D,M as z,N as it}from"./CXt9CpHx.js";import{u as dt}from"./BMHoVKzN.js";import{_ as rt,B as ct}from"./BiSs8nCf.js";import{R as ut,_ as mt}from"./BozhorqG.js";import{_ as ht}from"./DHdZDWaO.js";import{_ as pt}from"./BydhxjDa.js";import{M as gt}from"./BJXH78id.js";import"./_QCYz8aP.js";import"./C_MGbZ-_.js";import"./BQfcw6q0.js";const vt={class:"min-h-screen bg-white p-4"},yt={class:""},_t={class:"bg-white p-3 rounded-lg shadow-sm mb-4"},xt={class:"flex flex-col md:flex-row md:items-center justify-between gap-2"},ft={class:"flex flex-col md:flex-row gap-2 w-full"},bt={class:"flex items-center gap-2"},wt={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"},kt={class:"bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"},Yt={class:"text-2xl font-bold"},Dt={class:"bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500"},Tt={class:"text-2xl font-bold"},Ct={class:"bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500"},St={class:"text-2xl font-bold"},Mt={class:"bg-white p-4 rounded-lg shadow-sm mb-4"},$t={class:"text-sm space-y-1"},At={class:"bg-white"},It={key:1,class:"flex flex-col gap-1"},Nt={key:3,class:"flex gap-1"},qt={key:0,class:"space-y-4"},zt={class:"flex justify-between items-center"},Ht={class:"text-right"},Bt={class:"text-xl font-bold"},jt={key:0},Qt={__name:"test",async setup(Et){let R,X;const{RestApi:I}=dt(),s=b({page:1,limit:10,from:S().startOf("month").format("DD/MM/YYYY"),to:S().endOf("month").format("DD/MM/YYYY"),code:""}),H=b([S(s.value.from,"DD/MM/YYYY"),S(s.value.to,"DD/MM/YYYY")]),N=b(""),B=b([]),T=b({totalInvoices:0,totalAmount:0,totalQuantity:0,productStats:{}}),j=b(!1),q=b(!1),f=b(null),v=b([]),L=[{title:"Mã hóa đơn",dataIndex:"code",key:"code",width:"180px"},{title:"Ngày tạo",dataIndex:"createdAt",key:"createdAt",width:"150px"},{title:"Sản phẩm",key:"items"},{title:"Tổng tiền",key:"total",align:"right",width:"150px"},{title:"Hành động",key:"actions",width:"150px",align:"center"}],O=[{title:"Tên sản phẩm",dataIndex:"name",key:"name"},{title:"Số lượng",dataIndex:"quantity",key:"quantity",align:"center"},{title:"Đơn giá",key:"price",align:"right"},{title:"Thành tiền",key:"total",align:"right"}],U=st(()=>({current:s.value.page,pageSize:s.value.limit,total:T.value.totalInvoices,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:e=>`Tổng ${e} hóa đơn`,size:"small"})),C=async(e=null)=>{var t,i,k,y,d,_,c,x,A,o;j.value=!0;try{const r=e||s.value,{data:p}=await I.invoices.list({params:r});B.value=((i=(t=p.value)==null?void 0:t.data)==null?void 0:i.invoices)||[],T.value={totalInvoices:((y=(k=p.value)==null?void 0:k.data)==null?void 0:y.total)||0,totalAmount:((_=(d=p.value)==null?void 0:d.data)==null?void 0:_.totalAmount)||0,totalQuantity:Object.values(((x=(c=p.value)==null?void 0:c.data)==null?void 0:x.productStats)||{}).reduce((V,ot)=>V+ot.quantity,0),productStats:((o=(A=p.value)==null?void 0:A.data)==null?void 0:o.productStats)||{}}}finally{j.value=!1}},F=async e=>{s.value.page=e.current,s.value.limit=e.pageSize,await C({...s.value})},P=async e=>{(e==null?void 0:e.length)===2&&(s.value.from=e[0].format("DD/MM/YYYY"),s.value.to=e[1].format("DD/MM/YYYY"),s.value.page=1,await C({...s.value}))},Q=async()=>{s.value.page=1,s.value.code=N.value,await C({...s.value})},J=e=>{v.value=e},$=e=>e.items.reduce((t,i)=>t+i.price*i.quantity,0),W=e=>{f.value=e,q.value=!0},Z=async e=>{try{await I.invoices.delete({params:{id:e}}),z.success("Xoá thành công!"),v.value=v.value.filter(t=>t!==e),await C({...s.value})}catch{z.error("Không thể xoá!")}},tt=async()=>{if(v.value.length)try{await I.invoices.delete({params:{id:v.value.join(",")}}),z.success(`Đã xoá ${v.value.length} hóa đơn`),v.value=[],await C({...s.value})}catch{z.error("Không thể xoá hàng loạt!")}},h=e=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e),et=e=>S(e).format("DD/MM/YYYY"),E=e=>S(e).format("HH:mm DD/MM/YYYY"),nt=async e=>{var _,c;const t=await I.setting.get(),i=((c=(_=t==null?void 0:t.data)==null?void 0:_.value)==null?void 0:c.data)||{},k=`
<html>
  <head>
    <title>In hóa đơn</title>
    <style>
      @page { margin: 0 }
      html, body {
        margin: 0;
        font-family: monospace;
        font-size: 13px;
        width: 80mm;
        padding: 10px;
      }
      hr {
        border: none;
        border-top: 1px dashed black;
        margin: 10px 0;
      }
      .text-center { text-align: center }
      .bold { font-weight: bold }
      .row { display: flex; justify-content: space-between }
    </style>
  </head>
  <body onload="window.print()">
    ${i.logoUrl?`<div class="text-center"><img src="${i.logoUrl}" style="max-width:60px;margin:4px auto;"/></div>`:""}
    <div class="text-center bold">${i.storeName||"CỬA HÀNG"}</div>
    <div class="text-center">Địa chỉ: ${i.address||""}</div>
    <div class="text-center">Điện Thoại: ${i.phone||""}</div>
    <hr />
    <div class="text-center bold">HÓA ĐƠN BÁN HÀNG</div>
    <div class="text-center">Hóa Đơn: ${e.code}</div>
    <div class="text-center">Ngày: ${E(e.createdAt)}</div>
    <hr />
    <table style="width: 100%;">
      <thead>
        <tr>
          <td><b>Tên SP</b></td>
          <td style="text-align:right;"><b>SL</b></td>
          <td style="text-align:right;"><b>Đơn giá</b></td>
          <td style="text-align:right;"><b>Thành tiền</b></td>
        </tr>
      </thead>
      <tbody>
        ${e.items.map(x=>`
          <tr>
            <td>${x.name}</td>
            <td style="text-align:right;">${x.quantity}</td>
            <td style="text-align:right;">${h(x.price)}</td>
            <td style="text-align:right;">${h(x.quantity*x.price)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    <hr />
    <div class="row bold">
      <span>Tổng tiền:</span>
      <span>${h($(e))}</span>
    </div>
    <div class="row bold">
      <span>Thành tiền:</span>
      <span>${h($(e))}</span>
    </div>
    ${e.note?`<div>Ghi chú: ${e.note}</div>`:""}
    <div class="text-center" style="margin-top:10px;">Cảm ơn quý khách!</div>
  </body>
</html>
`,d=document.getElementById("print-frame").contentWindow.document;d.open(),d.write(k),d.close()},at=async()=>{const e=await it(()=>import("./DkH2s96g.js"),[],import.meta.url),t=e.default||e,i=[];B.value.forEach((d,_)=>{i.push({STT:_+1,"Mã hóa đơn":d.code,"Ngày tạo":E(d.createdAt),"Sản phẩm":"","Số lượng":"","Đơn giá":"","Thành tiền":"","Tổng tiền":h($(d)),"Ghi chú":d.note||""}),d.items.forEach(c=>{i.push({STT:"","Mã hóa đơn":"","Ngày tạo":"","Sản phẩm":c.name,"Số lượng":c.quantity,"Đơn giá":c.price,"Thành tiền":c.price*c.quantity,"Tổng tiền":"","Ghi chú":""})})});const k=t.utils.json_to_sheet(i,{skipHeader:!1}),y=t.utils.book_new();t.utils.book_append_sheet(y,k,"Danh sách hóa đơn"),t.writeFile(y,"Danh_sach_hoa_don.xlsx")};return[R,X]=lt(()=>C({...s.value})),await R,X(),(e,t)=>{var A;const i=rt,k=ut,y=ct,d=ht,_=pt,c=mt,x=gt;return m(),u("div",vt,[n("div",yt,[t[10]||(t[10]=n("div",{class:"mb-6"},[n("h1",{class:"text-xl font-bold text-gray-800"},"Quản lý hóa đơn"),n("p",{class:"text-gray-600 text-sm"},"Danh sách và thống kê các hóa đơn bán hàng")],-1)),n("div",_t,[n("div",xt,[n("div",ft,[g(i,{value:a(N),"onUpdate:value":t[0]||(t[0]=o=>G(N)?N.value=o:null),placeholder:"Tìm kiếm theo mã hóa đơn...","enter-button":"","allow-clear":"",class:"w-full",onSearch:Q},null,8,["value"]),g(k,{value:a(H),"onUpdate:value":t[1]||(t[1]=o=>G(H)?H.value=o:null),format:"DD/MM/YYYY",onChange:P},null,8,["value"])]),n("div",bt,[g(d,{title:"Bạn chắc chắn muốn xoá các hóa đơn đã chọn?","ok-text":"Xoá","cancel-text":"Huỷ",onConfirm:tt,disabled:!a(v).length},{default:w(()=>[g(y,{danger:"",disabled:!a(v).length,class:"flex items-center gap-1"},{default:w(()=>[Y(" Xoá đã chọn ("+l(a(v).length)+") ",1)]),_:1},8,["disabled"])]),_:1},8,["disabled"])])])]),n("div",wt,[n("div",kt,[t[3]||(t[3]=n("div",{class:"text-gray-500 text-sm"},"Tổng số hóa đơn",-1)),n("div",Yt,l(a(T).totalInvoices),1)]),n("div",Dt,[t[4]||(t[4]=n("div",{class:"text-gray-500 text-sm"},"Tổng doanh thu",-1)),n("div",Tt,l(h(a(T).totalAmount)),1)]),n("div",Ct,[t[5]||(t[5]=n("div",{class:"text-gray-500 text-sm"},"Số lượng sản phẩm",-1)),n("div",St,l(a(T).totalQuantity),1)])]),n("div",Mt,[t[6]||(t[6]=n("div",{class:"font-semibold text-gray-700 mb-2"},"Thống kê sản phẩm:",-1)),n("ul",$t,[(m(!0),u(M,null,K(a(T).productStats,(o,r)=>(m(),u("li",{key:r}," • "+l(o.name)+": "+l(o.quantity)+" sản phẩm – "+l(h(o.revenue)),1))),128))])]),n("div",At,[g(_,{columns:L,"data-source":a(B),loading:a(j),pagination:a(U),"row-selection":{selectedRowKeys:a(v),onChange:J},"row-key":"id",size:"small",onChange:F,bordered:""},{bodyCell:w(({column:o,record:r})=>[o.key==="createdAt"?(m(),u(M,{key:0},[Y(l(et(r.createdAt)),1)],64)):D("",!0),o.key==="items"?(m(),u("div",It,[(m(!0),u(M,null,K(r.items,(p,V)=>(m(),u("div",{key:V,class:"text-sm"},l(p.name)+" (x"+l(p.quantity)+") - "+l(h(p.price*p.quantity)),1))),128))])):D("",!0),o.key==="total"?(m(),u(M,{key:2},[Y(l(h($(r))),1)],64)):D("",!0),o.key==="actions"?(m(),u("div",Nt,[g(y,{type:"text",size:"small",onClick:p=>W(r)},{default:w(()=>t[7]||(t[7]=[Y(" Chi tiết ")])),_:2,__:[7]},1032,["onClick"]),g(y,{type:"text",size:"small",onClick:p=>nt(r)},{default:w(()=>t[8]||(t[8]=[Y(" In lại ")])),_:2,__:[8]},1032,["onClick"]),g(d,{title:"Bạn chắc chắn muốn xoá?","ok-text":"Xoá","cancel-text":"Huỷ",onConfirm:()=>Z(r.id)},{default:w(()=>[g(y,{type:"text",size:"small",danger:"",class:"hover:bg-red-50 px-1"},{default:w(()=>t[9]||(t[9]=[Y(" Xoá ")])),_:1,__:[9]})]),_:2},1032,["onConfirm"])])):D("",!0)]),_:1},8,["data-source","loading","pagination","row-selection"])])]),g(x,{open:a(q),"onUpdate:open":t[2]||(t[2]=o=>G(q)?q.value=o:null),title:"Chi tiết hóa đơn "+((A=a(f))==null?void 0:A.code),width:"700px",footer:null},{default:w(()=>[a(f)?(m(),u("div",qt,[n("div",zt,[n("div",null,[t[11]||(t[11]=n("div",{class:"font-semibold"},"Mã hóa đơn:",-1)),n("div",null,l(a(f).code),1),t[12]||(t[12]=n("div",{class:"font-semibold mt-2"},"Ngày tạo:",-1)),n("div",null,l(E(a(f).createdAt)),1)]),n("div",Ht,[t[13]||(t[13]=n("div",{class:"font-semibold"},"Tổng cộng:",-1)),n("div",Bt,l(h($(a(f)))),1)])]),g(c),n("div",null,[t[14]||(t[14]=n("div",{class:"font-semibold mb-2"},"Sản phẩm:",-1)),g(_,{columns:O,"data-source":a(f).items,size:"small",pagination:!1},{bodyCell:w(({column:o,record:r})=>[o.key==="price"?(m(),u(M,{key:0},[Y(l(h(r.price)),1)],64)):D("",!0),o.key==="total"?(m(),u(M,{key:1},[Y(l(h(r.price*r.quantity)),1)],64)):D("",!0)]),_:1},8,["data-source"])]),a(f).note?(m(),u("div",jt,[t[15]||(t[15]=n("div",{class:"font-semibold"},"Ghi chú:",-1)),n("div",null,l(a(f).note),1)])):D("",!0)])):D("",!0)]),_:1},8,["open","title"]),n("div",{onClick:at},"test"),t[16]||(t[16]=n("iframe",{id:"print-frame",style:{display:"none"}},null,-1))])}}};export{Qt as default};
