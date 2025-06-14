import{r as h,k as Q,T as W,y as T,A as c,C as s,D as u,aT as z,M as b,z as m,ar as N,L as y,aU as X,I as o,H as A,J as D,E as v,B as C}from"./CXt9CpHx.js";import{u as Y}from"./BMHoVKzN.js";import{F as Z,_ as tt}from"./DfpqhckG.js";import{S as et,_ as nt}from"./BydhxjDa.js";import{B as at,G as it}from"./BiSs8nCf.js";import{_ as lt}from"./TBLQoWR7.js";import"./BQfcw6q0.js";import"./_QCYz8aP.js";import"./C_MGbZ-_.js";const ot={class:"min-h-screen bg-white p-4"},st={class:"bg-white p-4 rounded-lg shadow-sm mb-4"},rt={class:"flex gap-2"},dt={class:"text-right mt-4 font-semibold"},ct={class:"flex justify-end gap-2 mt-6"},wt={__name:"create_invoices",setup(ut){const{RestApi:w}=Y(),i=h({items:[],note:""}),r=h(null),_=h([]),p=h(1),k=h(!1),f=h(null),q=h(null),U=[{title:"Sản phẩm",dataIndex:"name",key:"name",ellipsis:!0},{title:"Số lượng",key:"quantity",width:120},{title:"Đơn giá",key:"price",align:"right",width:120,ellipsis:!0},{title:"Thành tiền",key:"total",align:"right",width:120,ellipsis:!0},{title:"Hành Động",key:"action",width:100,align:"center"}],F=async()=>{var e,t;try{const{data:n}=await w.products.list();_.value=((t=(e=n.value)==null?void 0:e.data)==null?void 0:t.products)||[]}catch{b.error("Không thể tải sản phẩm")}};function S(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase()}const G=(e,t)=>S(t.label).includes(S(e)),P=Q(()=>_.value.map(e=>({label:`${e.name} - ${d(e.price)}`,value:e.id}))),I=()=>{const e=_.value.find(n=>n.id===r.value);if(!e)return;const t=i.value.items.find(n=>n.productId===e.id);t?t.quantity+=p.value:i.value.items.push({productId:e.id,name:e.name,price:e.price,quantity:p.value}),r.value=null,p.value=1},j=e=>{i.value.items.splice(e,1)},B=e=>e.reduce((t,n)=>t+n.price*n.quantity,0),H=()=>{i.value={items:[],note:""},r.value=null,p.value=1,f.value=null},E=async()=>{var e,t;if(!i.value.items.length){b.warning("Vui lòng thêm sản phẩm");return}k.value=!0;try{const{data:n}=await w.invoices.create({body:{items:i.value.items,note:i.value.note}});if(((e=n.value)==null?void 0:e.status)==="success"){f.value=n.value.data;const{data:a}=await w.setting.get();q.value=((t=a.value)==null?void 0:t.data)||{},b.success("Tạo hóa đơn thành công!"),K(),H()}else throw new Error("Tạo hóa đơn thất bại")}catch(n){b.error(n.message||"Đã xảy ra lỗi")}finally{k.value=!1}},K=()=>{if(!f.value)return;const e=L(f.value,q.value),n=document.getElementById("print-frame").contentWindow.document;n.open(),n.write(`
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
      ${e}
    </body>
  </html>
`),n.close()},L=(e,t={})=>{e.items.map(a=>`
    <div class="row">
      <span>${a.name} x${a.quantity}</span>
      <span>${d(a.price*a.quantity)}</span>
    </div>
  `).join("");const n=new Date(e.createdAt).toLocaleString("vi-VN");return`
  <div style="font-family: monospace; font-size: 16px; width: 100%;">
    ${t.logoUrl?`<div style="text-align:center;"><img src="${t.logoUrl}" style="max-height: 60px; margin-bottom: 5px;" /></div>`:""}
    <div style="text-align:center; font-weight:bold;">${t.storeName||"CỬA HÀNG"}</div>
    ${t.address?`<div style="text-align:center;">Địa chỉ: ${t.address}</div>`:""}
    ${t.phone?`<div style="text-align:center;">Điện thoại: ${t.phone}</div>`:""}
    <hr/>
    <div style="text-align:center; font-weight:bold; margin: 5px 0;">HÓA ĐƠN BÁN HÀNG</div>
    <div style="text-align:center;">Số HĐ: <b>${e.code}</b></div>
    <div style="text-align:center;">Ngày: ${n}</div>
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
        ${e.items.map((a,x)=>`
          <tr>
            <td style="word-break: break-word;">${a.name}</td>
            <td style="text-align:right; white-space:nowrap;">${d(a.price)}</td>
            <td style="text-align:right;">${a.quantity}</td>
            <td style="text-align:right; white-space:nowrap;">${d(a.price*a.quantity)}</td>
          </tr>
          ${x<e.items.length-1?`
            <tr><td colspan="4"><hr style="border: none; border-top: 1px dashed #000;" /></td></tr>
          `:""}
        `).join("")}
      </tbody>
    </table>

    <hr />
    <div style="text-align:right; font-weight:bold; white-space:nowrap; font-size:20px;">
      Tổng cộng: ${d(B(e.items))} đ
    </div>
    ${e.note?`<div>Ghi chú: ${e.note}</div>`:""}
    <div style=" font-weight:bold; white-space:nowrap;text-align:center; margin-top:10px; font-size:16px;">Cảm ơn quý khách!</div>
  </div>
`},d=e=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",currencyDisplay:"narrowSymbol"}).format(e).replace(/[₫\s]/g,"");return W(r,(e,t)=>{e&&e!==t&&I()}),F(),(e,t)=>{const n=et,a=tt,x=lt,$=at,O=nt,R=it,M=Z;return m(),T("div",ot,[t[7]||(t[7]=c("div",{class:"mb-6"},[c("h1",{class:"text-xl font-bold text-gray-800"},"Tạo hóa đơn mới"),c("p",{class:"text-gray-600 text-sm"},"Thêm sản phẩm và thông tin vào hóa đơn")],-1)),c("div",st,[s(M,{layout:"vertical",onSubmit:t[3]||(t[3]=z(()=>{},["prevent"]))},{default:u(()=>[s(a,{label:"Chọn sản phẩm"},{default:u(()=>[c("div",rt,[s(n,{value:o(r),"onUpdate:value":t[0]||(t[0]=l=>A(r)?r.value=l:null),"show-search":"",options:o(P),"filter-option":G,placeholder:"Tìm sản phẩm",style:{width:"100%"},onKeydown:X(z(I,["prevent"]),["enter"])},null,8,["value","options","onKeydown"])])]),_:1}),o(r)?(m(),N(a,{key:0,label:"Số lượng"},{default:u(()=>[s(x,{value:o(p),"onUpdate:value":t[1]||(t[1]=l=>A(p)?p.value=l:null),min:1,style:{width:"100%"}},null,8,["value"])]),_:1})):y("",!0),s(O,{class:"mt-6",columns:U,"data-source":o(i).items,size:"small",pagination:!1,bordered:""},{bodyCell:u(({column:l,record:g,index:J})=>[l.key==="quantity"?(m(),N(x,{key:0,value:g.quantity,"onUpdate:value":V=>g.quantity=V,min:1},null,8,["value","onUpdate:value"])):y("",!0),l.key==="price"?(m(),T(D,{key:1},[v(C(d(g.price)),1)],64)):y("",!0),l.key==="total"?(m(),T(D,{key:2},[v(C(d(g.price*g.quantity)),1)],64)):y("",!0),l.key==="action"?(m(),N($,{key:3,type:"text",danger:"",onClick:V=>j(J)},{default:u(()=>t[4]||(t[4]=[v("Xóa")])),_:2,__:[4]},1032,["onClick"])):y("",!0)]),_:1},8,["data-source"]),c("div",dt," Tổng cộng: "+C(d(B(o(i).items))),1),s(a,{label:"Ghi chú",class:"mt-4"},{default:u(()=>[s(R,{value:o(i).note,"onUpdate:value":t[2]||(t[2]=l=>o(i).note=l),rows:3},null,8,["value"])]),_:1}),c("div",ct,[s($,{onClick:H},{default:u(()=>t[5]||(t[5]=[v("Hủy bỏ")])),_:1,__:[5]}),s($,{onClick:E,type:"primary",loading:o(k),disabled:!o(i).items.length},{default:u(()=>t[6]||(t[6]=[v(" Tạo hóa đơn ")])),_:1,__:[6]},8,["loading","disabled"])])]),_:1})]),t[8]||(t[8]=c("iframe",{id:"print-frame",style:{display:"none"}},null,-1))])}}};export{wt as default};
