(function(){var e={4610:function(e,t,a){"use strict";var i=a(9242),n=a(1020),s=a(3056),o=(a(4415),a(3396));function l(e,t,a,i,n,s){const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l)}var r={},c=a(89);const u=(0,c.Z)(r,[["render",l],["__scopeId","data-v-e31d0298"]]);var d=u,v=a(2483);const g={HOME:"/",COCTAIL:"/coctails/:id",COCTAIL_RANDOM:"/coctail-random",CATEGORIES:"/categories",COCTAILS_BY_CATEGORY:"/categories/:category",COCTAILS_SORT_BY_ALCOHOL:"/alcoholic/:alcohol",INGREDIENTS:"/ingredients/:ingredientsList",FAVORITES:"/favorites"};var p=a(4870),m=a(7139);const k={class:"root"},h={class:"buttons-wrapper"},f={class:"slot-wrapper"};function _(e,t,a,i,n,s){const l=(0,o.up)("BackButton"),r=(0,o.up)("NavMenu");return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",{style:(0,m.j5)(s.setBaseBg()),class:"base-bg"},[(0,o._)("div",{style:(0,m.j5)(s.setLinkBg()),class:"link-bg"},null,4)],4),(0,o._)("div",{class:(0,m.C_)(["main",{active:n.mainShow}])},[(0,o._)("div",h,[a.backButtonVisible?((0,o.wg)(),(0,o.j4)(l,{key:0,onClick:s.goBack,class:"back-button"},null,8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(r,{class:"nav",getCoctail:a.getCoctail},null,8,["getCoctail"])]),(0,o._)("div",f,[(0,o.WI)(e.$slots,"default",{},void 0,!0)]),(0,o._)("div",{onClick:t[0]||(t[0]=e=>n.mainShow=!n.mainShow),class:"slide-main"},[(0,o._)("div",{class:(0,m.C_)(["arrow",{active:!n.mainShow}])},null,2)])],2)])}var w=a(2748),y={__name:"BackButton",setup(e){return(e,t)=>{const a=(0,o.up)("el-button");return(0,o.wg)(),(0,o.j4)(a,{type:"primary",icon:(0,p.SU)(w.eJh),circle:""},null,8,["icon"])}}};const C=y;var b=C;const D=e=>((0,o.dD)("data-v-495fac30"),e=e(),(0,o.Cn)(),e),I={class:"nav"},O=D((()=>(0,o._)("span",null,null,-1))),T=[O];function j(e,t,a,i,n,s){const l=(0,o.up)("el-button");return(0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("div",{class:(0,m.C_)(["nav-list",{active:n.menuIsActive}])},[(0,o.Wm)(l,{class:"bttn",onClick:s.goToCoctailRandom},{default:(0,o.w5)((()=>[(0,o.Uk)("Get random cocktail")])),_:1},8,["onClick"]),(0,o.Wm)(l,{class:(0,m.C_)([{empty:!Object.keys(i.favorites).length},"bttn"]),onClick:s.goToFavorites},{default:(0,o.w5)((()=>[(0,o.Uk)("Favorites")])),_:1},8,["class","onClick"]),(0,o.Wm)(l,{class:"bttn",onClick:s.goToIngredients},{default:(0,o.w5)((()=>[(0,o.Uk)("Ingredients")])),_:1},8,["onClick"]),(0,o.Wm)(l,{class:"bttn",onClick:s.goToCategories},{default:(0,o.w5)((()=>[(0,o.Uk)("Categories")])),_:1},8,["onClick"]),(0,o.Wm)(l,{class:"bttn",onClick:s.goHome},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1},8,["onClick"])],2),(0,o._)("div",{class:(0,m.C_)(["nav-icon",{active:n.menuIsActive}]),onClick:t[0]||(t[0]=e=>n.menuIsActive=!n.menuIsActive)},T,2)])}a(560);var S=a(1076);const U="https://www.thecocktaildb.com/api/json/v1/1/",A=`${U}list.php?i=list`,F=`${U}filter.php?i=`,N=`${U}lookup.php?i=`,$=`${U}random.php`,B=`${U}list.php?c=list`,L=`${U}filter.php?c=`,E=`${U}list.php?a=list`,q=`${U}filter.php?a=`,Z=(0,n.Q_)("root",{state:()=>({ingredients:[],ingredient:null,coctails:[],categories:[],favorites:{}}),actions:{async getIngredients(){const e=await S.Z.get(A);this.ingredients=e?.data?.drinks},async getCoctails(e){const t=await S.Z.get(`${F}${e}`);this.coctails=t?.data?.drinks},clearCoctails(){this.coctails=[]},setIngredient(e){this.ingredient=e},async getCategories(){const e=await S.Z.get(B);this.categories=e?.data?.drinks},getFavorites(){const e=localStorage.getItem("favorites");e&&(this.favorites=JSON.parse(e))},addToFavorites(e){const t=Object.keys(this.favorites);t&&(t.includes(e.idDrink)?delete this.favorites[`${e.idDrink}`]:this.favorites[`${e.idDrink}`]={strDrink:e.strDrink,strDrinkThumb:e.strDrinkThumb}),localStorage.setItem("favorites",JSON.stringify(this.favorites))}}});var W={props:{getCoctail:{type:Function}},data(){return{menuIsActive:!1,route:(0,v.yj)(),router:(0,v.tv)()}},setup(){const e=Z();e.getFavorites();const{favorites:t}=(0,n.Jk)(e);return{favorites:t}},computed:{routeName(){return this.route.name}},methods:{goToCoctailRandom(){this.router.push(g.COCTAIL_RANDOM),this.routeName===g.COCTAIL_RANDOM&&this.getCoctail(),this.menuIsActive=!1},goToFavorites(){this.router.push("/favorites")},goToCategories(){this.router.push(g.CATEGORIES),this.menuIsActive=!1},goToIngredients(){"ingredients"===this.routeName.split("/")[1]?this.router.push("null"):this.router.push("/ingredients/null"),this.menuIsActive=!1},goHome(){Z().setIngredient(null),this.router.push(g.HOME),this.menuIsActive=!1}}};const x=(0,c.Z)(W,[["render",j],["__scopeId","data-v-495fac30"]]);var H=x,R={components:{BackButton:b,NavMenu:H},props:{imgUrl:{type:String},imgName:{type:String},backFunc:{type:Function},getCoctail:{type:Function},backButtonVisible:{type:Boolean,default:!0}},data(){return{imagePath:"",mainShow:!1,router:(0,v.tv)()}},mounted(){this.setBaseBg()},watch:{imgUrl:"setLinkBg",imgName:"setBaseBg"},methods:{setBaseBg(){return this.imagePath=a(990)(`./${this.imgName}`),{backgroundImage:`url(${this.imagePath})`}},setLinkBg(){return{backgroundImage:`url(${this.imgUrl})`}},goBack(){this.backFunc?this.backFunc():this.router.go(-1)}}};const z=(0,c.Z)(R,[["render",_],["__scopeId","data-v-596adc81"]]);var Y=z;const M={class:"coctails-list"};function P(e,t,a,i,n,s){const l=(0,o.up)("CoctailThumb");return(0,o.wg)(),(0,o.iD)("div",M,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.list,(e=>((0,o.wg)(),(0,o.j4)(l,{key:e.idDrink,coctail:e},null,8,["coctail"])))),128))])}const J={class:"img"},V=["src"],G={class:"name"};function K(e,t,a,i,n,s){const l=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(l,{to:`/coctails/${a.coctail.idDrink}`,class:"root"},{default:(0,o.w5)((()=>[(0,o._)("div",J,[(0,o._)("img",{src:a.coctail.strDrinkThumb,loading:"lazy",alt:"image"},null,8,V)]),(0,o._)("div",G,(0,m.zw)(a.coctail.strDrink),1)])),_:1},8,["to"])}var Q={props:{coctail:{type:Object,required:!0}}};const X=(0,c.Z)(Q,[["render",K],["__scopeId","data-v-ade68f58"]]);var ee=X,te={components:{CoctailThumb:ee},props:{list:{type:Array,required:!0}}};const ae=(0,c.Z)(te,[["render",P],["__scopeId","data-v-1f26a2b3"]]);var ie=ae;const ne=e=>((0,o.dD)("data-v-d1938aea"),e=e(),(0,o.Cn)(),e),se={class:"wrapper container"},oe={key:0},le=ne((()=>(0,o._)("div",{class:"title"},"Choose your drink",-1))),re=ne((()=>(0,o._)("div",{class:"line"},null,-1))),ce={class:"select-wrapper"},ue=ne((()=>(0,o._)("div",{class:"text"}," Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator. ",-1))),de=ne((()=>(0,o._)("div",{class:"img-wrapper"},null,-1))),ve={key:1},ge={class:"title"},pe=ne((()=>(0,o._)("div",{class:"line"},null,-1)));var me={__name:"Home",setup(e){const t=Z();t.getIngredients();const{ingredients:a,ingredient:i,coctails:s}=(0,n.Jk)(t);function l(){t.getCoctails(t.ingredient)}function r(){t.setIngredient(null),t.clearCoctails()}return(e,n)=>{const c=(0,o.up)("el-option"),u=(0,o.up)("el-select"),d=(0,o.up)("my-loader");return(0,o.wg)(),(0,o.j4)(Y,{imgName:(0,p.SU)(i)?"home-main-img-coctail-choice.jpg":"home-bg.jpg",backFunc:r,backButtonVisible:!!(0,p.SU)(i)},{default:(0,o.w5)((()=>[(0,o._)("div",se,[(0,p.SU)(i)&&(0,p.SU)(s)?((0,o.wg)(),(0,o.iD)("div",ve,[(0,o._)("div",ge,"COCKTAILS WITH "+(0,m.zw)((0,p.SU)(t).ingredient),1),pe,(0,o.Wm)(ie,{list:(0,p.SU)(s)},null,8,["list"])])):((0,o.wg)(),(0,o.iD)("div",oe,[le,re,(0,o._)("div",ce,[(0,o.Wm)(u,{modelValue:(0,p.SU)(t).ingredient,"onUpdate:modelValue":n[0]||(n[0]=e=>(0,p.SU)(t).ingredient=e),class:"select",filterable:"","allow-create":"",placeholder:"Choose main ingredient",size:"large",onChange:l},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,p.SU)(a),(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.strIngredient1,label:e.strIngredient1,value:e.strIngredient1},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),ue,de])),(0,p.SU)(i)&&!(0,p.SU)(s).length?((0,o.wg)(),(0,o.j4)(d,{key:2})):(0,o.kq)("",!0)])])),_:1},8,["imgName","backButtonVisible"])}}};const ke=(0,c.Z)(me,[["__scopeId","data-v-d1938aea"]]);var he=ke,fe=a(2164);function _e(e,t,a,i,n,s){const l=(0,o.up)("FavoritesIcon");return(0,o.wg)(),(0,o.j4)(l,{onClick:i.addToFavorites,class:(0,m.C_)({active:a.isFavorites})},null,8,["onClick","class"])}const we=e=>((0,o.dD)("data-v-178e7466"),e=e(),(0,o.Cn)(),e),ye={class:"svg-wrapper",title:"add to favorites"},Ce=we((()=>(0,o._)("svg",{width:"800px",height:"800px",viewBox:"-5.79 0 138.71 138.71",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{class:"stroke",d:"M71.18,21.78c6.74-1.17,12.3-2.43,17.93-3.05,9.6-1.06,18,1.55,25,8.67,12.63,13,15.9,28,10.75,45.12-2.84,9.43-9.94,15.27-17.89,20-8.34,5-17.13,9.22-25.63,14-11.7,6.52-21.56,15-28.41,26.76-1.35,2.31-3.89,3.93-5.48,5.47-4-.28-6.3-1.43-7-4.83-.43-1.94-1.2-3.81-1.7-5.74-2.21-8.39-6.23-15.92-10.76-23.25-6.78-10.94-14.12-21.53-20-33A71.89,71.89,0,0,1,0,41.31c-.37-12.09,3.59-23,12.76-31.7,10.52-10,33.5-14.7,49-1.49,3.17,2.7,5.26,6.69,7.72,10.16A20.55,20.55,0,0,1,71.18,21.78ZM47.47,118.4a9.63,9.63,0,0,0,2.13-1.48C58.66,105.84,70.18,98.1,82.9,91.8c7.67-3.8,15.17-8,22.44-12.56,11.32-7,13.55-16.93,10.85-29.07A36.87,36.87,0,0,0,111.75,40c-3.7-6.36-9.39-9.78-16.79-10.42-7.59-.65-14.77.31-21.56,4.11-3.79,2.11-7.32.63-9.13-3.27a15.5,15.5,0,0,1-1.08-3.25C61.68,20.26,56.8,16.61,50.71,14.1a31,31,0,0,0-16.86-1.91,19.2,19.2,0,0,0-7.89,3c-8.85,6.3-14.17,14.86-14.69,25.89A50.51,50.51,0,0,0,18,69.1c3.42,6,7,11.81,10.69,17.6,6.16,9.65,12.63,19.09,17.1,29.71A9.43,9.43,0,0,0,47.47,118.4Z"}),(0,o._)("path",{d:"M47.47,118.4a9.43,9.43,0,0,1-1.65-2c-4.47-10.62-10.94-20.06-17.1-29.71C25,80.91,21.45,75.05,18,69.1a50.51,50.51,0,0,1-6.76-28c.52-11,5.84-19.59,14.69-25.89a19.2,19.2,0,0,1,7.89-3A31,31,0,0,1,50.71,14.1c6.09,2.51,11,6.16,12.48,13.07a15.5,15.5,0,0,0,1.08,3.25c1.81,3.9,5.34,5.38,9.13,3.27,6.79-3.8,14-4.76,21.56-4.11,7.4.64,13.09,4.06,16.79,10.42a36.87,36.87,0,0,1,4.44,10.17c2.7,12.14.47,22-10.85,29.07C98.07,83.77,90.57,88,82.9,91.8c-12.72,6.3-24.24,14-33.3,25.12A9.63,9.63,0,0,1,47.47,118.4Z"})],-1))),be=[Ce];function De(e,t){return(0,o.wg)(),(0,o.iD)("span",ye,be)}const Ie={},Oe=(0,c.Z)(Ie,[["render",De],["__scopeId","data-v-178e7466"]]);var Te=Oe,je={components:{FavoritesIcon:Te},props:{coctailData:{type:Object,required:!0},isFavorites:{type:Boolean,default:!1}},setup(e){const t=Z();t.getFavorites();const{favorites:a}=(0,n.Jk)(t);function i(){t.addToFavorites(e.coctailData)}return{favorites:a,addToFavorites:i}}};const Se=(0,c.Z)(je,[["render",_e],["__scopeId","data-v-709a6004"]]);var Ue=Se;const Ae=e=>((0,o.dD)("data-v-6ea1eed2"),e=e(),(0,o.Cn)(),e),Fe={key:0,class:"wrapper container"},Ne={class:"title"},$e=Ae((()=>(0,o._)("div",{class:"line"},null,-1))),Be={class:"ingredient-list"},Le=Ae((()=>(0,o._)("img",{src:fe,alt:"icon"},null,-1))),Ee={key:0,class:"measure"},qe={class:"coctail-formula"},Ze={class:"alcoholic"},We={class:"category"},xe={key:1,class:"wrapper container"};var He={__name:"Coctail",setup(e){const t=Z(),{favorites:a}=(0,n.Jk)(t),i=(0,v.yj)(),s=(0,p.iH)(null),l=(0,o.Fl)((()=>i.path.split("/").pop())),r=(0,o.Fl)((()=>{const e=[];for(let t=1;t<16;t++){if(!s.value[`strIngredient${t}`])break;const a={};a.name=s.value[`strIngredient${t}`],a.measure=s.value[`strMeasure${t}`],e.push(a)}return e})),c=(0,o.Fl)((()=>({idDrink:s.value.idDrink,strDrink:s.value.strDrink,strDrinkThumb:s.value.strDrinkThumb})));async function u(){const e=await S.Z.get(`${N}${l.value}`);s.value=e?.data?.drinks[0]}return u(),(e,t)=>{const i=(0,o.up)("RouterLink"),n=(0,o.up)("my-loader");return(0,o.wg)(),(0,o.j4)(Y,{imgName:"coctail-bg.jpg",imgUrl:s.value?s.value.strDrinkThumb:""},{default:(0,o.w5)((()=>[s.value?((0,o.wg)(),(0,o.iD)("div",Fe,[(0,o._)("div",Ne,[(0,o.Uk)((0,m.zw)(s.value.strDrink)+" ",1),(0,o.Wm)(Ue,{coctailData:c.value,isFavorites:Object.keys((0,p.SU)(a)).includes(l.value)},null,8,["coctailData","isFavorites"])]),$e,(0,o._)("div",Be,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.value,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"ingredient"},[Le,(0,o._)("div",null,(0,m.zw)(e.name),1),e.measure?((0,o.wg)(),(0,o.iD)("div",Ee,(0,m.zw)(e.measure),1)):(0,o.kq)("",!0)])))),128))]),(0,o._)("div",qe,[(0,o.Uk)((0,m.zw)(s.value.strInstructions)+" ",1),(0,o._)("div",Ze,[(0,o.Uk)(" This is "),(0,o.Wm)(i,{class:"link",to:`/alcoholic/${s.value.strAlcoholic.replace(" ","_")}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(s.value.strAlcoholic),1)])),_:1},8,["to"]),(0,o.Uk)(" coctail ")])]),(0,o._)("div",We,[(0,o.Uk)(" category: "),(0,o.Wm)(i,{class:"link",to:`/categories/${s.value.strCategory.replace(" / ","_").replace(" ","%20")}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(s.value.strCategory),1)])),_:1},8,["to"])])])):(0,o.kq)("",!0),s.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",xe,[(0,o.Wm)(n)]))])),_:1},8,["imgUrl"])}}};const Re=(0,c.Z)(He,[["__scopeId","data-v-6ea1eed2"]]);var ze=Re,Ye=a(1569),Me=a(4528);const Pe={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Je=(0,o._)("path",{d:"M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"},null,-1),Ve=[Je];function Ge(e,t){return(0,o.wg)(),(0,o.iD)("svg",Pe,Ve)}const Ke={},Qe=(0,c.Z)(Ke,[["render",Ge]]);var Xe=Qe;const et=e=>((0,o.dD)("data-v-ddc6e4da"),e=e(),(0,o.Cn)(),e),tt={key:0,class:"wrapper container"},at={class:"title"},it=et((()=>(0,o._)("div",{class:"line"},null,-1))),nt={class:"ingredient-list"},st={class:"name"},ot={key:0,class:"measure"},lt={class:"prev slider-button"},rt={class:"next slider-button"},ct={class:"coctail-formula"},ut={class:"alcoholic"},dt={class:"category"},vt={key:1,class:"wrapper container"};var gt={__name:"CoctailRandom",setup(e){const t=Z(),{favorites:a}=(0,n.Jk)(t),i=(0,p.iH)(null),s={0:{slidesPerView:1},400:{slidesPerView:2},950:{slidesPerView:3}},l=(0,o.Fl)((()=>{const e=[];for(let t=1;t<16;t++){if(!i.value[`strIngredient${t}`])break;const a={};a.name=i.value[`strIngredient${t}`],a.measure=i.value[`strMeasure${t}`],e.push(a)}return e})),r=(0,o.Fl)((()=>i.value.idDrink)),c=(0,o.Fl)((()=>({idDrink:i.value.idDrink,strDrink:i.value.strDrink,strDrinkThumb:i.value.strDrinkThumb})));function u(e){return{backgroundImage:`url(https://www.thecocktaildb.com/images/ingredients/${e.replace(/ /g,"%20")}-Small.png)`}}async function d(){const e=await S.Z.get($);i.value=e?.data?.drinks[0]}return d(),(e,t)=>{const n=(0,o.up)("RouterLink"),v=(0,o.up)("my-loader");return(0,o.wg)(),(0,o.j4)(Y,{imgName:"coctail-bg.jpg",imgUrl:i.value?i.value.strDrinkThumb:"",getCoctail:d},{default:(0,o.w5)((()=>[i.value?((0,o.wg)(),(0,o.iD)("div",tt,[(0,o._)("div",at,[(0,o.Uk)((0,m.zw)(i.value.strDrink)+" ",1),(0,o.Wm)(Ue,{coctailData:c.value,isFavorites:Object.keys((0,p.SU)(a)).includes(r.value)},null,8,["coctailData","isFavorites"])]),it,(0,o._)("div",nt,[(0,o.Wm)((0,p.SU)(Me.tq),{modules:[(0,p.SU)(Ye.W_)],breakpoints:s,navigation:{enabled:!0,prevEl:".prev",nextEl:".next"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.value,((e,t)=>((0,o.wg)(),(0,o.j4)((0,p.SU)(Me.o5),{class:"slide",key:t},{default:(0,o.w5)((()=>[(0,o._)("div",{style:(0,m.j5)(u(e.name)),class:"image"},null,4),(0,o._)("div",st,(0,m.zw)(e.name),1),e.measure?((0,o.wg)(),(0,o.iD)("div",ot,(0,m.zw)(e.measure),1)):(0,o.kq)("",!0)])),_:2},1024)))),128))])),_:1},8,["modules","navigation"]),(0,o._)("div",lt,[(0,o.Wm)(Xe)]),(0,o._)("div",rt,[(0,o.Wm)(Xe)])]),(0,o._)("div",ct,[(0,o.Uk)((0,m.zw)(i.value.strInstructions)+" ",1),(0,o._)("div",ut,[(0,o.Uk)(" This is "),(0,o.Wm)(n,{class:"link",to:`/alcoholic/${i.value.strAlcoholic.replace(" ","_")}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(i.value.strAlcoholic),1)])),_:1},8,["to"]),(0,o.Uk)(" coctail ")])]),(0,o._)("div",dt,[(0,o.Uk)(" category: "),(0,o.Wm)(n,{class:"link",to:`/categories/${i.value.strCategory.replace(" / ","_").replace(" ","%20")}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(i.value.strCategory),1)])),_:1},8,["to"])])])):(0,o.kq)("",!0),i.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",vt,[(0,o.Wm)(v)]))])),_:1},8,["imgUrl"])}}};const pt=(0,c.Z)(gt,[["__scopeId","data-v-ddc6e4da"]]);var mt=pt;const kt=e=>((0,o.dD)("data-v-3a4bbe86"),e=e(),(0,o.Cn)(),e),ht={class:"wrapper container"},ft={key:0},_t=kt((()=>(0,o._)("div",{class:"title"},"Choose category",-1))),wt=kt((()=>(0,o._)("div",{class:"line"},null,-1))),yt=kt((()=>(0,o._)("div",{class:"text"}," From classic cocktails to modern trends, our categories offer a rich selection of drinks for every taste. Explore different styles and discover new flavors crafted by magnificent mixologists. ",-1))),Ct={key:0,class:"categories-list"};var bt={__name:"Categories",setup(e){const t=Z();t.getCategories();const{categories:a}=(0,n.Jk)(t);return(e,t)=>{const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(Y,{imgName:"coctail-bg.jpg"},{default:(0,o.w5)((()=>[(0,o._)("div",ht,[(0,p.SU)(a)?((0,o.wg)(),(0,o.iD)("div",ft,[_t,wt,yt,(0,p.SU)(a)?((0,o.wg)(),(0,o.iD)("div",Ct,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,p.SU)(a),((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"category",key:t},[(0,o.Wm)(i,{to:`/categories/${e.strCategory.replace(" / ","_").replace(" ","%20")}`},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(e.strCategory),1)])),_:2},1032,["to"])])))),128))])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])])),_:1},8,["imgName"])}}};const Dt=(0,c.Z)(bt,[["__scopeId","data-v-3a4bbe86"]]);var It=Dt;const Ot=e=>((0,o.dD)("data-v-8afcebc2"),e=e(),(0,o.Cn)(),e),Tt={class:"wrapper container"},jt={key:0},St={class:"title"},Ut=Ot((()=>(0,o._)("div",{class:"line"},null,-1))),At={class:"categories-list"};var Ft={__name:"CoctailsByCategory",setup(e){const t=Z();t.getCategories();const a=(0,v.yj)(),{categories:i}=(0,n.Jk)(t),s=(0,p.iH)([]),l=(0,o.Fl)((()=>a.path.split("/").pop().replace("_"," / ").replace("%20"," ")));function r(e){return l.value===e}async function c(e){const t=await S.Z.get(`${L}${e}`);s.value=t?.data?.drinks}function u(){c(l.value)}return(0,o.bv)((()=>{u()})),(0,o.YP)((()=>a.path),(e=>{l.value=e.split("/").pop().replace("_"," / ").replace("%20"," "),u()})),(e,t)=>{const a=(0,o.up)("RouterLink"),n=(0,o.up)("my-loader");return(0,o.wg)(),(0,o.j4)(Y,{imgName:"coctail-bg.jpg"},{default:(0,o.w5)((()=>[(0,o._)("div",Tt,[(0,p.SU)(i)?((0,o.wg)(),(0,o.iD)("div",jt,[(0,o._)("div",St,(0,m.zw)(l.value),1),Ut,(0,o._)("div",At,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,p.SU)(i),(e=>((0,o.wg)(),(0,o.iD)("div",{class:(0,m.C_)(["category",{active:r(e.strCategory)}]),key:e},[(0,o.Wm)(a,{to:`/categories/${e.strCategory.replace(" / ","_").replace(" ","%20")}`,onClick:t[0]||(t[0]=e=>c())},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(e.strCategory),1)])),_:2},1032,["to"])],2)))),128))]),s.value?((0,o.wg)(),(0,o.j4)(ie,{key:0,list:s.value},null,8,["list"])):(0,o.kq)("",!0),s.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(n,{key:1}))])):(0,o.kq)("",!0)])])),_:1},8,["imgName"])}}};const Nt=(0,c.Z)(Ft,[["__scopeId","data-v-8afcebc2"]]);var $t=Nt;const Bt=e=>((0,o.dD)("data-v-fb5f4768"),e=e(),(0,o.Cn)(),e),Lt={class:"wrapper container"},Et=Bt((()=>(0,o._)("div",{class:"title"},null,-1))),qt={key:0,class:"tabs-wrapper"},Zt=["onClick"];var Wt={__name:"AlcoholicSort",setup(e){const t=(0,p.iH)(null),a=(0,p.iH)([]),i=(0,v.yj)(),n=(0,v.tv)(),s=(0,o.Fl)((()=>i.path.split("/").pop()));function l(e){return s.value.split("/").pop().replace("_"," ")===e}async function r(){const e=await S.Z.get(E);t.value=e?.data?.drinks}async function c(){a.value=[];const e=await S.Z.get(`${q}${s.value}`);a.value=e?.data?.drinks}function u(){c()}function d(e){n.push(`/alcoholic/${e}`)}return(0,o.bv)((()=>{u()})),(0,o.YP)(s,(()=>{u()})),r(),u(),(e,i)=>{const n=(0,o.up)("my-loader");return(0,o.wg)(),(0,o.j4)(Y,{imgName:"home-main-img-coctail-choice.jpg"},{default:(0,o.w5)((()=>[(0,o._)("div",Lt,[(0,o._)("div",null,[Et,t.value?((0,o.wg)(),(0,o.iD)("div",qt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,(e=>((0,o.wg)(),(0,o.iD)("div",{class:(0,m.C_)(["tab",{active:l(e.strAlcoholic)}]),key:e,onClick:t=>d(e.strAlcoholic.replace(" ","_"))},(0,m.zw)(e.strAlcoholic),11,Zt)))),128))])):(0,o.kq)("",!0),a.value?((0,o.wg)(),(0,o.j4)(ie,{key:1,list:a.value},null,8,["list"])):(0,o.kq)("",!0),a.value.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(n,{key:2}))])])])),_:1},8,["imgName"])}}};const xt=(0,c.Z)(Wt,[["__scopeId","data-v-fb5f4768"]]);var Ht=xt;const Rt=e=>((0,o.dD)("data-v-366da522"),e=e(),(0,o.Cn)(),e),zt={class:"wrapper container"},Yt={key:0},Mt={key:0,class:"title"},Pt={key:1,class:"title"},Jt=Rt((()=>(0,o._)("span",null,"/ ",-1))),Vt=Rt((()=>(0,o._)("div",{class:"line"},null,-1))),Gt={key:3,class:"text"},Kt={key:4,class:"coctails-wrapper"},Qt={key:5,class:"text"},Xt={class:"ingredients-wrapper"},ea=["onClick"],ta=Rt((()=>(0,o._)("div",{class:"img-wrapper"},null,-1)));var aa={__name:"IngredientsPage",setup(e){const t=Z();t.getIngredients();const a=(0,v.yj)(),i=(0,v.tv)(),{ingredients:s}=(0,n.Jk)(t),l=(0,o.Fl)((()=>"null"===a.path.split("/").pop()?[]:a.path.split("/").pop().replace(/%20/g," ").split("_"))),r=(0,p.iH)([]),c=(0,o.Fl)((()=>0===r.value.length?[]:1===r.value.length?r.value[0]:r.value.reduce(((e,t)=>e.filter((e=>t.some((t=>t.idDrink===e.idDrink))))))));async function u(e){const t=l.value.indexOf(e);-1===t?(l.value.push(e),i.push(l.value.join("_"))):(l.value.splice(t,1),l.value.length?i.push(l.value.join("_")):i.push("null")),d()}async function d(){if(r.value=[],"null"!==a.path.split("/").pop())for(const e of l.value)await g(e)}async function g(e){const t=await S.Z.get(`${F}${e}`);r.value.push(t?.data?.drinks)}function k(e){return l.value.includes(e)}function h(){i.push("null")}return(0,o.YP)(l,(()=>{d()})),(0,o.bv)((()=>{d()})),(e,t)=>((0,o.wg)(),(0,o.j4)(Y,{imgName:"home-main-img-coctail-choice.jpg"},{default:(0,o.w5)((()=>[(0,o._)("div",zt,[(0,p.SU)(s)?((0,o.wg)(),(0,o.iD)("div",Yt,[l.value.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",Mt,"Ingredients")),l.value.length?((0,o.wg)(),(0,o.iD)("div",Pt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.value,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e},[(0,o.Uk)((0,m.zw)(e)+" ",1),Jt])))),128))])):(0,o.kq)("",!0),l.value.length?((0,o.wg)(),(0,o.iD)("div",{key:2,onClick:h,class:"clean"},"clean")):(0,o.kq)("",!0),Vt,l.value.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",Gt," Welcome to the Ingredients page! Here you'll find a diverse selection of components to create your perfect cocktails. From fresh fruits and berries to various syrups and alcoholic beverages - we have everything to satisfy your taste buds. Choose from the list, create your unique combinations, and embark on your culinary adventure! ")),c.value.length?((0,o.wg)(),(0,o.iD)("div",Kt,[(0,o.Wm)(ie,{list:c.value,class:"list"},null,8,["list"])])):(0,o.kq)("",!0),!c.value.length&&l.value.length?((0,o.wg)(),(0,o.iD)("div",Qt," No cocktails with these ingredients ")):(0,o.kq)("",!0),(0,o._)("div",Xt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,p.SU)(s),(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:(0,m.C_)(["ingredients-item",{active:k(e.strIngredient1)}]),onClick:t=>u(e.strIngredient1)},(0,m.zw)(e.strIngredient1),11,ea)))),128))]),ta])):(0,o.kq)("",!0)])])),_:1},8,["imgName"]))}};const ia=(0,c.Z)(aa,[["__scopeId","data-v-366da522"]]);var na=ia;const sa=e=>((0,o.dD)("data-v-ffcdb6d8"),e=e(),(0,o.Cn)(),e),oa={class:"wrapper container"},la=sa((()=>(0,o._)("div",{class:"title"},"favorites",-1))),ra=sa((()=>(0,o._)("div",{class:"line"},null,-1))),ca={class:"text"},ua=sa((()=>(0,o._)("br",null,null,-1))),da=sa((()=>(0,o._)("br",null,null,-1))),va={key:0},ga={key:1,class:"clear-button-wrapper"};var pa={__name:"FavoritesPage",setup(e){const t=Z();t.getFavorites();const{favorites:a}=(0,n.Jk)(t),i=(0,o.Fl)((()=>{const e=[];return Object.keys(a.value).forEach((t=>{const i=a.value[t];e.push({idDrink:t,strDrink:i.strDrink,strDrinkThumb:i.strDrinkThumb})})),e}));function s(){localStorage.setItem("favorites",JSON.stringify({})),t.getFavorites()}return(e,t)=>{const a=(0,o.up)("el-button");return(0,o.wg)(),(0,o.j4)(Y,{imgName:"coctail-bg.jpg"},{default:(0,o.w5)((()=>[(0,o._)("div",oa,[(0,o._)("div",null,[la,ra,(0,o._)("div",ca,[(0,o.Uk)(" Welcome to the Favorites section! Here, you'll find the cocktails that have captured your taste. Enjoy the exquisite blends of your favorite drinks all in one place "),ua,(0,o.Uk)(),da,i.value.length?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",va,[(0,o.Uk)(" Your list of favorite cocktails is empty. To add a cocktail to your favorites, click the "),(0,o.Wm)(Te),(0,o.Uk)(" on the cocktail page ")]))]),i.value.length?((0,o.wg)(),(0,o.j4)(ie,{key:0,list:i.value},null,8,["list"])):(0,o.kq)("",!0),i.value.length?((0,o.wg)(),(0,o.iD)("div",ga,[(0,o.Wm)(a,{class:"bttn",onClick:s},{default:(0,o.w5)((()=>[(0,o.Uk)("Clear favorites")])),_:1})])):(0,o.kq)("",!0)])])])),_:1},8,["imgName"])}}};const ma=(0,c.Z)(pa,[["__scopeId","data-v-ffcdb6d8"]]);var ka=ma;const ha=[{path:g.HOME,name:g.HOME,component:he},{path:g.COCTAIL,name:g.COCTAIL,component:ze},{path:g.COCTAIL_RANDOM,name:g.COCTAIL_RANDOM,component:mt},{path:g.CATEGORIES,name:g.CATEGORIES,component:It},{path:g.COCTAILS_BY_CATEGORY,name:g.COCTAILS_BY_CATEGORY,component:$t},{path:g.COCTAILS_SORT_BY_ALCOHOL,name:g.COCTAILS_SORT_BY_ALCOHOL,component:Ht},{path:g.INGREDIENTS,name:g.INGREDIENTS,component:na},{path:g.FAVORITES,name:g.FAVORITES,component:ka}],fa=(0,v.p7)({history:(0,v.PO)("/vue-coctails/"),routes:ha});var _a=fa;const wa=e=>((0,o.dD)("data-v-06b53175"),e=e(),(0,o.Cn)(),e),ya={class:"loader-wrapper"},Ca=wa((()=>(0,o._)("span",{class:"loader"},null,-1))),ba=[Ca];function Da(e,t,a,i,n,s){return(0,o.wg)(),(0,o.iD)("div",ya,ba)}var Ia={name:"my-loader"};const Oa=(0,c.Z)(Ia,[["render",Da],["__scopeId","data-v-06b53175"]]);var Ta=Oa;const ja=[Ta],Sa=(0,i.ri)(d);ja.forEach((e=>{Sa.component(e.name,e)})),Sa.use((0,n.WB)()),Sa.use(_a),Sa.use(s.Z),Sa.mount("#app")},990:function(e,t,a){var i={"./coctail-bg.jpg":3034,"./heart-icon.svg":2164,"./home-bg.jpg":9559,"./home-main-img-coctail-choice.jpg":2171,"./home-main-img.png":8797};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=s,e.exports=n,n.id=990},2164:function(e,t,a){"use strict";e.exports=a.p+"img/heart-icon.fe61c5ba.svg"},3034:function(e,t,a){"use strict";e.exports=a.p+"img/coctail-bg.a561dc0b.jpg"},9559:function(e,t,a){"use strict";e.exports=a.p+"img/home-bg.86f9ee1c.jpg"},2171:function(e,t,a){"use strict";e.exports=a.p+"img/home-main-img-coctail-choice.7559e1f2.jpg"},8797:function(e,t,a){"use strict";e.exports=a.p+"img/home-main-img.9bb0f8c0.png"}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,s){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],s=e[u][2];for(var l=!0,r=0;r<i.length;r++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/vue-coctails/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,o=i[0],l=i[1],r=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(r)var u=r(a)}for(t&&t(i);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},i=self["webpackChunkvue_coctails"]=self["webpackChunkvue_coctails"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(4610)}));i=a.O(i)})();
//# sourceMappingURL=app.0f3bb163.js.map