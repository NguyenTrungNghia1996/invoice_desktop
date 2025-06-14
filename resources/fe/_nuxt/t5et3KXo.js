import{ao as it,r as w,F as T,k as dt,G as rt,y as m,A as n,C as v,H as E,I as a,ar as U,L as f,D as _,B as s,J as C,K,z as c,E as k,N as ct,M as q}from"./CXt9CpHx.js";import{u as ht}from"./BMHoVKzN.js";import{_ as ut,B as pt}from"./BiSs8nCf.js";import{M as mt}from"./BJXH78id.js";import{R as gt,_ as yt}from"./BozhorqG.js";import{_ as vt}from"./DHdZDWaO.js";import{_ as xt}from"./BydhxjDa.js";import"./_QCYz8aP.js";import"./BQfcw6q0.js";import"./C_MGbZ-_.js";const ft={class:"min-h-screen bg-white p-4"},_t={class:""},bt={class:"bg-white p-3 rounded-lg shadow-sm mb-4"},wt={class:"flex flex-col md:flex-row md:items-center justify-between gap-2"},kt={class:"flex flex-col md:flex-row gap-2 w-full"},Yt={class:"flex items-center gap-2"},Dt={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"},St={class:"bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"},Tt={class:"text-2xl font-bold"},Ct={class:"bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500"},Mt={class:"text-2xl font-bold"},$t={class:"bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500"},At={class:"text-2xl font-bold"},Nt={class:"bg-white p-4 rounded-lg shadow-sm mb-4"},zt={class:"text-sm space-y-1"},It={class:"bg-white"},qt={key:1,class:"flex flex-col gap-1"},Ht={key:3,class:"flex gap-1"},Bt={key:0,class:"space-y-4"},Vt={class:"flex justify-between items-center"},jt={class:"text-right"},Et={class:"text-xl font-bold"},Gt={key:0},Zt={__name:"invoices",async setup(Xt){let G,X;const{RestApi:$}=ht(),R=it(),i=w({page:1,limit:10,from:T().startOf("month").format("DD/MM/YYYY"),to:T().endOf("month").format("DD/MM/YYYY"),code:""}),H=w([T(i.value.from,"DD/MM/YYYY"),T(i.value.to,"DD/MM/YYYY")]),A=w(""),B=w([]),D=w({totalInvoices:0,totalAmount:0,totalQuantity:0,productStats:{}}),V=w(!1),N=w(!1),b=w(null),g=w([]),O=[{title:"Mã hóa đơn",dataIndex:"code",key:"code",width:"180px"},{title:"Ngày tạo",dataIndex:"createdAt",key:"createdAt",width:"150px"},{title:"Sản phẩm",key:"items"},{title:"Tổng tiền",key:"total",align:"right",width:"150px"},{title:"Hành động",key:"actions",width:"150px",align:"center"}],P=[{title:"Tên sản phẩm",dataIndex:"name",key:"name"},{title:"Số lượng",dataIndex:"quantity",key:"quantity",align:"center"},{title:"Đơn giá",key:"price",align:"right"},{title:"Thành tiền",key:"total",align:"right"}],F=dt(()=>({current:i.value.page,pageSize:i.value.limit,total:D.value.totalInvoices,showSizeChanger:!0,pageSizeOptions:["1","10","20","50","100"],showTotal:e=>`Tổng ${e} hóa đơn`,size:"small"})),S=async e=>{var t,d,h,u,r,x,p,I,M,o;V.value=!0;try{const{data:l}=await $.invoices.list({params:e});B.value=((d=(t=l.value)==null?void 0:t.data)==null?void 0:d.invoices)||[],D.value={totalInvoices:((u=(h=l.value)==null?void 0:h.data)==null?void 0:u.total)||0,totalAmount:((x=(r=l.value)==null?void 0:r.data)==null?void 0:x.totalAmount)||0,totalQuantity:Object.values(((I=(p=l.value)==null?void 0:p.data)==null?void 0:I.productStats)||{}).reduce((Y,j)=>Y+j.quantity,0),productStats:((o=(M=l.value)==null?void 0:M.data)==null?void 0:o.productStats)||{}}}finally{V.value=!1}},Q=async e=>{i.value.page=e.current,i.value.limit=e.pageSize==1?D.value.totalInvoices:e.pageSize,await S({...i.value})},J=async e=>{(e==null?void 0:e.length)===2&&(i.value.from=e[0].format("DD/MM/YYYY"),i.value.to=e[1].format("DD/MM/YYYY"),i.value.page=1,await S({...i.value}))},W=async()=>{i.value.page=1,i.value.code=A.value,await S({...i.value})},Z=e=>{g.value=e},z=e=>e.items.reduce((t,d)=>t+d.price*d.quantity,0),tt=e=>{b.value=e,N.value=!0},et=async e=>{try{await $.invoices.delete({params:{id:e}}),q.success("Xoá thành công!"),g.value=g.value.filter(t=>t!==e),await S({...i.value})}catch{q.error("Không thể xoá!")}},nt=async()=>{if(g.value.length)try{await $.invoices.delete({params:{id:g.value.join(",")}}),q.success(`Đã xoá ${g.value.length} hóa đơn`),g.value=[],await S({...i.value})}catch{q.error("Không thể xoá hàng loạt!")}},y=e=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",currencyDisplay:"narrowSymbol"}).format(e).replace(/[₫\s]/g,""),at=e=>T(e).format("DD/MM/YYYY"),L=e=>T(e).format("HH:mm DD/MM/YYYY"),ot=(e,t={})=>{const d=new Date(e.createdAt).toLocaleString("vi-VN");return`
  <div style="font-family: monospace; font-size: 16px; width: 100%;">
    ${t.logoUrl?`<div style="text-align:center;"><img src="${t.logoUrl}" style="max-height: 60px; margin-bottom: 5px;" /></div>`:""}
    <div style="text-align:center; font-weight:bold;">${t.storeName||"CỬA HÀNG"}</div>
    ${t.address?`<div style="text-align:center;">Địa chỉ: ${t.address}</div>`:""}
    ${t.phone?`<div style="text-align:center;">Điện thoại: ${t.phone}</div>`:""}
    <hr/>
    <div style="text-align:center; font-weight:bold; margin: 5px 0;">HÓA ĐƠN BÁN HÀNG</div>
    <div style="text-align:center;">Số HĐ: <b>${e.code}</b></div>
    <div style="text-align:center;">Ngày: ${d}</div>
  <table style="width:100%; font-size:16px;">
      <thead>
        <tr>
          <td colspan="4"><hr style="border: none; border-top: 1px solid #000; margin: 4px 0;" /></td>
        </tr>
        <tr>
          <th style="text-align:left;">Tên SP</th>
          <th style="text-align:right;">ĐG</th>
          <th style="text-align:right;">SL</th>
          <th style="text-align:right;">TT</th>
        </tr>
        <tr>
          <td colspan="4"><hr style="border: none; border-top: 1px solid #000; margin: 4px 0;" /></td>
        </tr>
      </thead>
      <tbody>
        ${e.items.map((h,u)=>`
          <tr>
            <td style="word-break: break-word;">${h.name}</td>
            <td style="text-align:right; white-space:nowrap;">${y(h.price)}</td>
            <td style="text-align:right;">${h.quantity}</td>
            <td style="text-align:right; white-space:nowrap;">${y(h.price*h.quantity)}</td>
          </tr>
          ${u<e.items.length-1?`
            <tr><td colspan="4"><hr style="border: none; border-top: 1px dashed #000; margin: 2px 0;" /></td></tr>
          `:""}
        `).join("")}
      </tbody>
    </table>

    <hr />
    <div style="text-align:right; font-weight:bold; white-space:nowrap; font-size:16px;">
      Tổng cộng: ${y(z(e))}
    </div>
    ${e.note?`<div style="font-size:16px;">Ghi chú: ${e.note}</div>`:""}
    <div style="font-weight:bold; white-space:nowrap;text-align:center; margin-top:10px; font-size:16px;">Cảm ơn quý khách!</div>
  </div>
`},lt=async e=>{var x,p;const t=await $.setting.get(),d=((p=(x=t==null?void 0:t.data)==null?void 0:x.value)==null?void 0:p.data)||{},h=ot(e,d),r=document.getElementById("print-frame").contentWindow.document;r.open(),r.write(`
  <html>
    <head>
      <title>Hóa đơn</title>
      <style>
        @page { margin: 0 }
        body {
          font-family: monospace;
          font-size: 13px;
          padding: 10px;
          margin: 0;
        }
        hr {
          border: none;
          border-top: 1px dashed black;
          margin: 10px 0;
        }
        .text-center { text-align: center }
        .bold { font-weight: bold }
        .row { display: flex; justify-content: space-between }
        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }
        th, td {
          word-break: break-word;
          padding: 2px 0;
        }
        th:nth-child(1), td:nth-child(1) { width: 40%; text-align: left; }
        th:nth-child(2), td:nth-child(2) { width: 20%; text-align: right; }
        th:nth-child(3), td:nth-child(3) { width: 15%; text-align: right; }
        th:nth-child(4), td:nth-child(4) { width: 25%; text-align: right; }
      </style>
    </head>
    <body onload="window.print()">
      ${h}
    </body>
  </html>
  `),r.close()},st=async()=>{const e=await ct(()=>import("./DkH2s96g.js"),[],import.meta.url),t=e.default||e,d=[];B.value.forEach((r,x)=>{d.push({STT:x+1,"Mã hóa đơn":r.code,"Ngày tạo":L(r.createdAt),"Sản phẩm":"","Số lượng":"","Đơn giá":"","Thành tiền":"","Tổng tiền":y(z(r)),"Ghi chú":r.note||""}),r.items.forEach(p=>{d.push({STT:"","Mã hóa đơn":"","Ngày tạo":"","Sản phẩm":p.name,"Số lượng":p.quantity,"Đơn giá":p.price,"Thành tiền":p.price*p.quantity,"Tổng tiền":"","Ghi chú":""})})});const h=t.utils.json_to_sheet(d,{skipHeader:!1}),u=t.utils.book_new();t.utils.book_append_sheet(u,h,"Danh sách hóa đơn"),t.writeFile(u,"Danh_sach_hoa_don.xlsx")};return[G,X]=rt(()=>S({...i.value})),await G,X(),(e,t)=>{var M;const d=ut,h=gt,u=pt,r=vt,x=xt,p=yt,I=mt;return c(),m("div",ft,[n("div",_t,[t[11]||(t[11]=n("div",{class:"mb-6"},[n("h1",{class:"text-xl font-bold text-gray-800"},"Quản lý hóa đơn"),n("p",{class:"text-gray-600 text-sm"},"Danh sách và thống kê các hóa đơn bán hàng")],-1)),n("div",bt,[n("div",wt,[n("div",kt,[v(d,{value:a(A),"onUpdate:value":t[0]||(t[0]=o=>E(A)?A.value=o:null),placeholder:"Tìm kiếm theo mã hóa đơn...","enter-button":"","allow-clear":"",class:"w-full",onSearch:W},null,8,["value"]),v(h,{value:a(H),"onUpdate:value":t[1]||(t[1]=o=>E(H)?H.value=o:null),format:"DD/MM/YYYY",onChange:J},null,8,["value"])]),n("div",Yt,[a(R).role==="admin"?(c(),U(r,{key:0,title:"Bạn chắc chắn muốn xoá các hóa đơn đã chọn?","ok-text":"Xoá","cancel-text":"Huỷ",onConfirm:nt,disabled:!a(g).length},{default:_(()=>[v(u,{danger:"",disabled:!a(g).length,class:"flex items-center gap-1"},{default:_(()=>[k(" Xoá đã chọn ("+s(a(g).length)+") ",1)]),_:1},8,["disabled"])]),_:1},8,["disabled"])):f("",!0),v(u,{type:"primary",onClick:st},{default:_(()=>t[3]||(t[3]=[k("Xuất excel")])),_:1,__:[3]})])])]),n("div",Dt,[n("div",St,[t[4]||(t[4]=n("div",{class:"text-gray-500 text-sm"},"Tổng số hóa đơn",-1)),n("div",Tt,s(a(D).totalInvoices),1)]),n("div",Ct,[t[5]||(t[5]=n("div",{class:"text-gray-500 text-sm"},"Tổng doanh thu",-1)),n("div",Mt,s(y(a(D).totalAmount)),1)]),n("div",$t,[t[6]||(t[6]=n("div",{class:"text-gray-500 text-sm"},"Số lượng sản phẩm",-1)),n("div",At,s(a(D).totalQuantity),1)])]),n("div",Nt,[t[7]||(t[7]=n("div",{class:"font-semibold text-gray-700 mb-2"},"Thống kê sản phẩm:",-1)),n("ul",zt,[(c(!0),m(C,null,K(a(D).productStats,(o,l)=>(c(),m("li",{key:l}," • "+s(o.name)+": "+s(o.quantity)+" sản phẩm – "+s(y(o.revenue)),1))),128))])]),n("div",It,[v(x,{columns:O,"data-source":a(B),loading:a(V),pagination:a(F),"row-selection":{selectedRowKeys:a(g),onChange:Z},"row-key":"id",size:"small",onChange:Q,bordered:""},{bodyCell:_(({column:o,record:l})=>[o.key==="createdAt"?(c(),m(C,{key:0},[k(s(at(l.createdAt)),1)],64)):f("",!0),o.key==="items"?(c(),m("div",qt,[(c(!0),m(C,null,K(l.items,(Y,j)=>(c(),m("div",{key:j,class:"text-sm"},s(Y.name)+" (x"+s(Y.quantity)+") - "+s(y(Y.price*Y.quantity)),1))),128))])):f("",!0),o.key==="total"?(c(),m(C,{key:2},[k(s(y(z(l))),1)],64)):f("",!0),o.key==="actions"?(c(),m("div",Ht,[v(u,{type:"text",size:"small",onClick:Y=>tt(l)},{default:_(()=>t[8]||(t[8]=[k(" Chi tiết ")])),_:2,__:[8]},1032,["onClick"]),v(u,{type:"text",size:"small",onClick:Y=>lt(l)},{default:_(()=>t[9]||(t[9]=[k(" In lại ")])),_:2,__:[9]},1032,["onClick"]),a(R).role==="admin"?(c(),U(r,{key:0,title:"Bạn chắc chắn muốn xoá?","ok-text":"Xoá","cancel-text":"Huỷ",onConfirm:()=>et(l.id)},{default:_(()=>[v(u,{type:"text",size:"small",danger:"",class:"hover:bg-red-50 px-1"},{default:_(()=>t[10]||(t[10]=[k(" Xoá ")])),_:1,__:[10]})]),_:2},1032,["onConfirm"])):f("",!0)])):f("",!0)]),_:1},8,["data-source","loading","pagination","row-selection"])])]),v(I,{open:a(N),"onUpdate:open":t[2]||(t[2]=o=>E(N)?N.value=o:null),title:"Chi tiết hóa đơn "+((M=a(b))==null?void 0:M.code),width:"700px",footer:null},{default:_(()=>[a(b)?(c(),m("div",Bt,[n("div",Vt,[n("div",null,[t[12]||(t[12]=n("div",{class:"font-semibold"},"Mã hóa đơn:",-1)),n("div",null,s(a(b).code),1),t[13]||(t[13]=n("div",{class:"font-semibold mt-2"},"Ngày tạo:",-1)),n("div",null,s(L(a(b).createdAt)),1)]),n("div",jt,[t[14]||(t[14]=n("div",{class:"font-semibold"},"Tổng cộng:",-1)),n("div",Et,s(y(z(a(b)))),1)])]),v(p),n("div",null,[t[15]||(t[15]=n("div",{class:"font-semibold mb-2"},"Sản phẩm:",-1)),v(x,{columns:P,"data-source":a(b).items,size:"small",pagination:!1},{bodyCell:_(({column:o,record:l})=>[o.key==="price"?(c(),m(C,{key:0},[k(s(y(l.price)),1)],64)):f("",!0),o.key==="total"?(c(),m(C,{key:1},[k(s(y(l.price*l.quantity)),1)],64)):f("",!0)]),_:1},8,["data-source"])]),a(b).note?(c(),m("div",Gt,[t[16]||(t[16]=n("div",{class:"font-semibold"},"Ghi chú:",-1)),n("div",null,s(a(b).note),1)])):f("",!0)])):f("",!0)]),_:1},8,["open","title"]),t[17]||(t[17]=n("iframe",{id:"print-frame",style:{display:"none"}},null,-1))])}}};export{Zt as default};
