(function(){var e={9320:function(e,t,i){"use strict";var n=i(9242),r=i(1020),a=i(1913),o=(i(4415),i(3396));function c(e,t,i,n,r,a){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(c)}var s={},l=i(89);const u=(0,l.Z)(s,[["render",c],["__scopeId","data-v-e31d0298"]]);var d=u,g=i(2483),m=i(4870),p=i(7139);const v={class:"root"},f={class:"slot-wrapper"};function h(e,t,i,n,r,a){const c=(0,o.up)("el-button");return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",{style:(0,p.j5)(a.setBaseBg()),class:"base-bg"},[(0,o._)("div",{style:(0,p.j5)(a.setLinkBg()),class:"link-bg"},null,4)],4),(0,o._)("div",{class:(0,p.C_)(["main",{active:r.mainShow}])},[(0,o._)("div",f,[(0,o.Wm)(c,{class:"bttn"},{default:(0,o.w5)((()=>[(0,o.Uk)("Get random cocktail")])),_:1}),(0,o.WI)(e.$slots,"default",{},void 0,!0)]),(0,o._)("div",{onClick:t[0]||(t[0]=e=>r.mainShow=!r.mainShow),class:"slide-main"},[(0,o._)("div",{class:(0,p.C_)(["arrow",{active:!r.mainShow}])},null,2)])],2)])}var w={props:{imgUrl:{type:String,required:!1},imgName:{type:String,required:!1}},data(){return{imagePath:"",mainShow:!1}},mounted(){this.setBaseBg()},watch:{imgUrl:"setLinkBg",imgName:"setBaseBg"},methods:{setBaseBg(){return this.imagePath=i(990)(`./${this.imgName}`),{backgroundImage:`url(${this.imagePath})`}},setLinkBg(){return{backgroundImage:`url(${this.imgUrl})`}}}};const _=(0,l.Z)(w,[["render",h],["__scopeId","data-v-2eccc9c5"]]);var b=_,k=i(1076);const y="https://www.thecocktaildb.com/api/json/v1/1/",j=`${y}list.php?i=list`,D=`${y}filter.php?i=`,I=`${y}lookup.php?i=`,S=(0,r.Q_)("root",{state:()=>({ingredients:[],ingredient:null,coctails:[]}),actions:{async getIngredients(){const e=await k.Z.get(j);this.ingredients=e?.data?.drinks},async getCoctails(e){const t=await k.Z.get(`${D}${e}`);this.coctails=t?.data?.drinks},setIngredient(e){this.ingredient=e}}}),O={class:"name"};function x(e,t,i,n,r,a){const c=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(c,{to:`/coctails/${i.coctail.idDrink}`,class:"root"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"img",style:(0,p.j5)(a.setBgImage())},null,4),(0,o._)("div",O,(0,p.zw)(i.coctail.strDrink),1)])),_:1},8,["to"])}var U={props:{coctail:{type:Object,required:!0}},methods:{setBgImage(){return{backgroundImage:`url(${this.coctail.strDrinkThumb})`}}}};const C=(0,l.Z)(U,[["render",x],["__scopeId","data-v-c257120a"]]);var B=C;const $=e=>((0,o.dD)("data-v-5d392944"),e=e(),(0,o.Cn)(),e),T={class:"wrapper container"},H={key:0},Z=$((()=>(0,o._)("div",{class:"title"},"Choose your drink",-1))),M=$((()=>(0,o._)("div",{class:"line"},null,-1))),N={class:"select-wrapper"},P=$((()=>(0,o._)("div",{class:"text"}," Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator. ",-1))),z=$((()=>(0,o._)("div",{class:"img-wrapper"},null,-1))),q={key:1},L={class:"title"},W=$((()=>(0,o._)("div",{class:"line"},null,-1))),F={class:"coctails-list"};var K={__name:"Home",setup(e){const t=S();t.getIngredients();const{ingredients:i,ingredient:n,coctails:a}=(0,r.Jk)(t);function c(){t.getCoctails(t.ingredient)}return(e,r)=>{const s=(0,o.up)("el-option"),l=(0,o.up)("el-select");return(0,o.wg)(),(0,o.j4)(b,{imgName:(0,m.SU)(n)?"home-main-img-coctail-choice.jpg":"home-bg.jpg"},{default:(0,o.w5)((()=>[(0,o._)("div",T,[(0,m.SU)(n)&&(0,m.SU)(a)?((0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("div",L,"COCKTAILS WITH "+(0,p.zw)((0,m.SU)(t).ingredient),1),W,(0,o._)("div",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,m.SU)(a),(e=>((0,o.wg)(),(0,o.j4)(B,{key:e.idDrink,coctail:e},null,8,["coctail"])))),128))])])):((0,o.wg)(),(0,o.iD)("div",H,[Z,M,(0,o._)("div",N,[(0,o.Wm)(l,{modelValue:(0,m.SU)(t).ingredient,"onUpdate:modelValue":r[0]||(r[0]=e=>(0,m.SU)(t).ingredient=e),class:"select",filterable:"","allow-create":"",placeholder:"Choose main ingredient",size:"large",onChange:c},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,m.SU)(i),(e=>((0,o.wg)(),(0,o.j4)(s,{key:e.strIngredient1,label:e.strIngredient1,value:e.strIngredient1},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),P,z]))])])),_:1},8,["imgName"])}}};const V=(0,l.Z)(K,[["__scopeId","data-v-5d392944"]]);var Y=V,A=(i(560),i(2164));const E=e=>((0,o.dD)("data-v-01878443"),e=e(),(0,o.Cn)(),e),G={key:0,class:"wrapper container"},R={class:"title"},J=E((()=>(0,o._)("div",{class:"line"},null,-1))),Q={class:"ingredient-list"},X=E((()=>(0,o._)("img",{src:A,alt:"icon"},null,-1))),ee={key:0,class:"measure"},te={class:"coctail-formula"};var ie={__name:"Coctail",setup(e){const t=(0,g.yj)(),i=(0,m.iH)(null),n=(0,o.Fl)((()=>t.path.split("/").pop())),r=(0,o.Fl)((()=>{const e=[];for(let t=1;t<16;t++){if(!i.value[`strIngredient${t}`])break;const n={};n.name=i.value[`strIngredient${t}`],n.measure=i.value[`strMeasure${t}`],e.push(n)}return e}));async function a(){const e=await k.Z.get(`${I}${n.value}`);i.value=e?.data?.drinks[0]}return a(),(e,t)=>((0,o.wg)(),(0,o.j4)(b,{imgName:"coctail-bg.jpg",imgUrl:i.value?i.value.strDrinkThumb:""},{default:(0,o.w5)((()=>[i.value?((0,o.wg)(),(0,o.iD)("div",G,[(0,o._)("div",R,(0,p.zw)(i.value.strDrink),1),J,(0,o._)("div",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.value,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"ingredient"},[X,(0,o._)("div",null,(0,p.zw)(e.name),1),e.measure?((0,o.wg)(),(0,o.iD)("div",ee,(0,p.zw)(e.measure),1)):(0,o.kq)("",!0)])))),128))]),(0,o._)("div",te,(0,p.zw)(i.value.strInstructions),1)])):(0,o.kq)("",!0)])),_:1},8,["imgUrl"]))}};const ne=(0,l.Z)(ie,[["__scopeId","data-v-01878443"]]);var re=ne,ae={__name:"CoctailRandom",setup(e){return(e,t)=>((0,o.wg)(),(0,o.j4)(b,{imgUrl:"https://plus.unsplash.com/premium_photo-1681245769050-d7f7988c1e5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}))}};const oe=ae;var ce=oe;const se=[{path:"/",name:"home",component:Y},{path:"/coctails/:id",name:"coctail",component:re},{path:"/coctail-random",name:"coctail-random",component:ce}],le=(0,g.p7)({history:(0,g.PO)("/vue-coctails/"),routes:se});var ue=le;const de=(0,n.ri)(d);de.use((0,r.WB)()),de.use(ue),de.use(a.Z),de.mount("#app")},990:function(e,t,i){var n={"./coctail-bg.jpg":3034,"./heart-icon.svg":2164,"./home-bg.jpg":9559,"./home-main-img-coctail-choice.jpg":2171,"./home-main-img.png":8797};function r(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=990},2164:function(e,t,i){"use strict";e.exports=i.p+"img/heart-icon.fe61c5ba.svg"},3034:function(e,t,i){"use strict";e.exports=i.p+"img/coctail-bg.a561dc0b.jpg"},9559:function(e,t,i){"use strict";e.exports=i.p+"img/home-bg.86f9ee1c.jpg"},2171:function(e,t,i){"use strict";e.exports=i.p+"img/home-main-img-coctail-choice.7559e1f2.jpg"},8797:function(e,t,i){"use strict";e.exports=i.p+"img/home-main-img.9bb0f8c0.png"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[s])}))?n.splice(s--,1):(c=!1,a<o&&(o=a));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/vue-coctails/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],c=n[1],s=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(s)var u=s(i)}for(t&&t(n);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self["webpackChunkvue_coctails"]=self["webpackChunkvue_coctails"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(9320)}));n=i.O(n)})();
//# sourceMappingURL=app.7aec4c58.js.map