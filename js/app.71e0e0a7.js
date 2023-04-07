(function(){"use strict";var e={7243:function(e,t,n){var o=n(9242),a=n(3396),s=n.p+"img/edit.092f5b23.svg";const l={class:"wrapper"},i=(0,a._)("img",{src:s,alt:""},null,-1),r=[i];function c(e,t,n,s,i,c){const d=(0,a.up)("Navbar"),h=(0,a.up)("Notes"),u=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(d,{onSetSearch:t[0]||(t[0]=e=>i.searchValue=e)}),(0,a.Wm)(h,{notes:c.filterNotes,onDelNote:c.delNote,onChange:c.change},null,8,["notes","onDelNote","onChange"]),(0,a.Wm)(o.uT,{name:"modal"},{default:(0,a.w5)((()=>[i.isModalOpen?((0,a.wg)(),(0,a.j4)(u,{key:0,onClose:t[1]||(t[1]=e=>i.isModalOpen=!1),onAddNote:c.addNote,edit:i.edit,editedNote:i.editedNote,onChangeNote:c.changeNote},null,8,["onAddNote","edit","editedNote","onChangeNote"])):(0,a.kq)("",!0)])),_:1}),(0,a._)("button",{class:"add__note",onClick:t[2]||(t[2]=e=>(i.isModalOpen=!0,i.edit=!1))},r)])}n(7658);var d=n(7139);const h={class:"modal__block-title"},u={class:"modal__block-fields"},_=(0,a._)("span",null,"Title",-1),g=(0,a._)("span",null,"Content",-1),p={class:"modal__block-btns"};function f(e,t,n,s,l,i){return(0,a.wg)(),(0,a.iD)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>i.closeModal&&i.closeModal(...e))},[(0,a._)("div",{class:"modal__block",onClick:t[5]||(t[5]=(0,o.iM)((()=>{}),["stop"]))},[(0,a._)("h2",h,(0,d.zw)(n.edit?"Изменить заметку":"Добавить заметку"),1),(0,a._)("div",u,[(0,a._)("label",null,[_,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e)},null,512),[[o.nr,l.title]])]),(0,a._)("label",null,[g,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.text=e)},null,512),[[o.nr,l.text]])])]),(0,a._)("div",p,[(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>i.closeModal&&i.closeModal(...e)),class:"modal__block-button del"},"Отмена"),n.edit?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[3]||(t[3]=(...e)=>i.addNote&&i.addNote(...e)),class:"modal__block-button edit"},"Добавить")),n.edit?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:t[4]||(t[4]=(...e)=>i.changeNote&&i.changeNote(...e)),class:"modal__block-button edit"},"Изменить")):(0,a.kq)("",!0)])])])}var v=n(3029),m={data(){return{title:"",text:""}},props:{edit:{type:Boolean},editedNote:{type:Object}},methods:{closeModal(){this.$emit("close")},changeNote(){if(this.title.length>2&&this.text.length>2){const e={id:this.editedNote.id,title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("changeNote",e),this.closeModal()}},addNote(){if(this.title.length>2&&this.text.length>2){const e={id:(0,v.Z)(),title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("addNote",e),this.closeModal()}}}},w=n(89);const N=(0,w.Z)(m,[["render",f]]);var b=N,k=n.p+"img/search.2c9e71ed.svg",y=n.p+"img/back.014b4ff1.svg",C=n.p+"img/close.1d4d165f.svg";const O={class:"header"},x={key:0,class:"header__nav"},D={class:"header__nav-title"},M=(0,a._)("img",{src:k,alt:""},null,-1),$=[M],S={key:1,class:"header__search"},z=(0,a._)("img",{src:y,alt:""},null,-1),j=[z],L=(0,a._)("img",{src:C,alt:""},null,-1),V=[L];function Z(e,t,n,s,l,i){return(0,a.wg)(),(0,a.iD)("header",O,[l.header?((0,a.wg)(),(0,a.iD)("nav",x,[(0,a._)("button",{class:"header__nav-lang",onClick:t[0]||(t[0]=(...e)=>i.switchLang&&i.switchLang(...e))},(0,d.zw)(this.$i18n.locale),1),(0,a._)("h1",D,(0,d.zw)(e.$t("notes")),1),(0,a._)("button",{class:"header__nav-search",onClick:t[1]||(t[1]=e=>l.header=!1)},$)])):((0,a.wg)(),(0,a.iD)("nav",S,[(0,a._)("button",{class:"header__search-back",onClick:t[2]||(t[2]=e=>(l.header=!0,l.search=""))},j),(0,a.wy)((0,a._)("input",{type:"text",class:"header__search-input",placeholder:"Поиск...","onUpdate:modelValue":t[3]||(t[3]=e=>l.search=e)},null,512),[[o.nr,l.search]]),(0,a._)("button",{class:"header__search-clear",onClick:t[4]||(t[4]=e=>l.search="")},V)]))])}var q={data(){return{header:!0,search:""}},methods:{switchLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru"}},watch:{search(e){this.$emit("setSearch",e)}}};const E=(0,w.Z)(q,[["render",Z]]);var I=E,T=n.p+"img/list.4ed3d4be.svg",A=n.p+"img/grid.dbae4039.svg";const B={class:"notes"},J={class:"container"},F={class:"notes__top"},R={class:"notes__top-title"},U={src:T,alt:""},W={src:A,alt:""};function H(e,t,n,s,l,i){const r=(0,a.up)("NotesItem");return(0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("div",J,[(0,a._)("div",F,[(0,a._)("h2",R,(0,d.zw)(n.notes.length>0?e.$t("allNotes"):e.$t("noNotes")),1),(0,a._)("button",{class:"notes__top-btn",onClick:t[0]||(t[0]=e=>l.view=!l.view)},[(0,a.wy)((0,a._)("img",U,null,512),[[o.F8,l.view]]),(0,a.wy)((0,a._)("img",W,null,512),[[o.F8,!l.view]]),(0,a._)("span",null,(0,d.zw)(l.view?"Список":"Сетка"),1)])]),(0,a._)("div",{class:(0,d.C_)(["notes__list",{active:!l.view}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.notes,(t=>((0,a.wg)(),(0,a.j4)(r,{key:t.id,note:t,view:l.view,onDelNote:n=>e.$emit("delNote",t),onChange:n=>e.$emit("change",t)},null,8,["note","view","onDelNote","onChange"])))),128))],2)])])}var P=n.p+"img/del.f04c87ff.svg";const Q={class:"notes__item"},G={class:"notes__item-text"},K={class:"notes__item-btns"},Y=(0,a._)("img",{src:s,alt:""},null,-1),X=(0,a._)("span",null,"РЕДАКТИРОВАТЬ",-1),ee=[Y,X],te=(0,a._)("img",{src:P,alt:""},null,-1),ne=(0,a._)("span",null,"Удалить",-1),oe=[te,ne];function ae(e,t,n,o,s,l){return(0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("div",{class:(0,d.C_)(["notes__item-info",{between:!n.view}])},[(0,a._)("h2",null,(0,d.zw)(n.note.title),1),(0,a._)("p",null,(0,d.zw)(n.note.date),1)],2),(0,a._)("p",G,(0,d.zw)(n.note.text),1),(0,a._)("div",K,[(0,a._)("button",{class:"notes__item-btn edit",onClick:t[0]||(t[0]=t=>e.$emit("change",n.note))},ee),(0,a._)("button",{class:"notes__item-btn del",onClick:t[1]||(t[1]=t=>e.$emit("delNote",n.note))},oe)])])}var se={props:{note:{typeof:Object},view:{typeof:Boolean}}};const le=(0,w.Z)(se,[["render",ae]]);var ie=le,re={data(){return{view:!0}},components:{NotesItem:ie},props:{notes:{typeof:Array}}};const ce=(0,w.Z)(re,[["render",H]]);var de=ce,he={components:{Navbar:I,Notes:de,Modal:b},data(){return{isModalOpen:!1,notes:[],edit:!1,editedNote:null,searchValue:""}},created(){this.getNotes()},computed:{filterNotes(){return this.searchValue?this.notes.filter((e=>e.title.toLowerCase().includes(this.searchValue.toLowerCase()))):this.notes}},methods:{addNote(e){this.notes.push(e)},delNote(e){this.notes=this.notes.filter((t=>t.id!=e.id))},change(e){this.isModalOpen=this.edit=!0;let t=this.notes.find((t=>t.id==e.id));this.editedNote=t},changeNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.text=e.text,t.date=e.date)})),this.editedNote=null},getNotes(){let e=localStorage.notes;e&&(this.notes=JSON.parse(e))}},watch:{notes:{handler(e){localStorage.notes=JSON.stringify(this.notes)},deep:!0}}};const ue=(0,w.Z)(he,[["render",c]]);var _e=ue,ge=n(5658),pe=JSON.parse('{"notes":"Заметки","allNotes":"Все заметки","noNotes":"Нет заметок","list":"Список","grid":"Сетка","edit":"РЕДАКТИРОВАТЬ","del":"Удалить","addNote":"Добавить заметку","add":"Добавить","cancel":"Отмена","changeNote":"Изменить заметку","change":"изменить","search":"Поиск..."}'),fe=JSON.parse('{"notes":"Eslatmalar","allNotes":"Barcha eslatmalar","noNotes":"Eslatmalar yoq","list":"Roʻyxat","grid":"Setka","edit":"O\'ZGARTIRISH","del":"o\'chirish","addNote":"Eslatma qo’shish","add":"Qo’shish","cancel":"Bekor qilish","changeNote":"Elsatmani tahrirlash","change":"o\'zgartirish","search":"Qidirish..."}'),ve=(0,ge.o)({legacy:!0,locale:"ru",fallbackLocale:"uz",globalInjection:!0,messages:{ru:pe,uz:fe}});(0,o.ri)(_e).use(ve).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,s){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,r=0;r<o.length;r++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(i=!1,s<l&&(l=s));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/todo/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,l=o[0],i=o[1],r=o[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(r)var d=r(n)}for(t&&t(o);c<l.length;c++)s=l[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7243)}));o=n.O(o)})();
//# sourceMappingURL=app.71e0e0a7.js.map