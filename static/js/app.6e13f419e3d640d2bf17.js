webpackJsonp([1],{"+Gxq":function(t,e,a){"use strict";var n=a("fnDg").a;var o=a("VU/8")(n,null,!1,function(t){a("4veK")},null,null);e.a=o.exports},"1IYV":function(t,e){},"4veK":function(t,e){},"HUt/":function(t,e,a){"use strict";var n=a("qRo1").a;var o=a("VU/8")(n,null,!1,function(t){a("n9mN")},null,null);e.a=o.exports},JCpY:function(t,e,a){"use strict";var n=a("rKsW").a;var o=a("VU/8")(n,null,!1,function(t){a("xBwK")},null,null);e.a=o.exports},JDVb:function(t,e,a){"use strict";var n=a("9NuQ").a;var o=a("VU/8")(n,null,!1,function(t){a("Y9O/")},null,null);e.a=o.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),o=(a("1IYV"),a("ESwS")),s=a.n(o),r=a("e6fC"),i=a("//Fk"),l=a.n(i),c=a("mtWM"),u=a.n(c),m=a("NYxO");function p(t){return t}function v(t){return{id:t.id,name:t.name,code:t.isoCode,order:t.sortOrder}}function d(t){return{id:t.id,name:t.name,code:t.isoCode,order:t.sortOrder}}var f="http://dev2.api.balanceshare.com",_=function(){return u.a.get(f+"/Companies").then(function(t){return t.map(p)})},g=function(t){return u.a.post(f+"/Companies",t).then(function(t){return p(t)})},y=function(t){return u.a.get(f+"/Companies/"+t).then(function(t){return p(t)})},h=function(t){var e=t;return u.a.patch(f+"/Companies/"+t.id,e)},b=function(t){return u.a.delete(f+"/Companies/"+t)},C=function(t,e){var a=new FormData;return a.append("file",e),u.a.post(f+"/Companies/"+t+"/Logo",a)},x="http://dev2.api.balanceshare.com/Aliases",F=function(t,e){return u.a.get(x+"/Companies/"+t+"RefCompanies/"+e+"/Aliases")},w=function(t,e,a){return u.a.post(x,{companyId:t,refCompanyID:e,aliasText:a})},T=function(t,e){return u.a.patch(x+t,{id:t,aliasText:e})},A=function(t){return u.a.delete(x+t)},D="http://dev2.api.balanceshare.com/Personnel",$=function(t,e,a,n,o){return u.a.post(D,{companyId:t,responsibility:e,name:a,email:n,phone:o})},N=function(t,e){return u.a.patch(D+t,e)},S=function(t){return u.a.delete(D+t)},R={state:{selectedCompany:null,list:null},getters:{selectedCompany:function(t){return t.selectedCompany},companiesList:function(t){return t.list}},mutations:{setList:function(t,e){t.list=e},addCompany:function(t,e){},selectCompany:function(t,e){t.selectedCompany=t.list[e]},updateSelCompany:function(t,e){t.selectedCompany=e},deleteSelCompany:function(t){var e=t.list.indexOf(t.selectedCompany);t.list.splice(e,1),t.selectedCompany=null},setSCLogo:function(t,e){t.selectedCompany.logo.src=e},addSCAlias:function(t,e){t.selectedCompany.aliases.push(e)},updateSCAlias:function(t,e){var a=e.alias,n=e.text,o=t.selectedCompany.aliases;o[o.indexOf(a)].alias=n},deleteSCAlias:function(t,e){var a=t.selectedCompany.aliases,n=a.indexOf(e);a.splice(n,1)}},actions:{loadCompanies:function(t){var e=t.commit,a=t.state;return a.list?l.a.resolve(a.list):_().then(function(t){return e("setList",t),t})},createCompany:function(t,e){var a=t.commit;return g(e).then(function(t){return a("addCompany",t),t})},loadSelCompany:function(t,e){var a=t.commit,n=t.state,o=e.id,s=e.index;return n.selectedCompany&&n.selectedCompany.id===o?l.a.resolve(n.selectedCompany):y(o).then(function(t){return a("selectCompany",s),t})},updateSelCompany:function(t,e){var a=t.commit;return h(e).then(function(t){return a("updateSelCompany",t),t})},deleteSelCompany:function(t){var e=t.commit,a=t.state;return b(a.selectedCompany.id).then(function(){e("deleteCompany")})},uploadSCLogo:function(t,e){var a=t.commit,n=t.state;return C(n.selectedCompany.id,e).then(function(t){a("setSCLogo",t)})},loadSCRefCompAliases:function(t,e){var a=t.commit,n=t.state;return F(n.selectedCompany.id,e).then(function(t){a("setSCRefCompAliases",t)})},createSCAlias:function(t,e){var a=t.commit,n=t.state.selectedCompany.id;return w(n,n,e).then(function(t){a("addSCAlias",t)})},updateSCAlias:function(t,e){var a=t.commit,n=e.alias,o=e.text;return T(n.id,o).then(function(){a("updateSCAlias",{alias:n,text:o})})},deleteSCAlias:function(t,e){var a=t.commit;return A(e.id).then(function(){a("removeSCAlias",e)})},createSCPersonnel:function(t,e){t.commit,t.state;return $()},updateSCPersonnel:function(t,e){t.commit;return N()},deleteSCPersonnel:function(t,e){t.commit;return S()}}},P="http://dev2.api.balanceshare.com",E={countries:function(){return u.a.get(P+"/Countries").then(function(t){return t.map(v)})},currencies:function(){return u.a.get(P+"/Currencies").then(function(t){return t.map(d)})},statements:function(){return u.a.get(P+"/StatementTypes").then(function(t){return t.map(v)})},taxes:function(){return u.a.get(P+"/Taxes").then(function(t){return t.map(v)})},softwareTypes:function(){return u.a.get(P+"/SoftwareTypes").then(function(t){return t.map(v)})},responsibilities:function(){return u.a.get(P+"/Responsibilities").then(function(t){return t.map(v)})}},I={},k={},U={},V={};["Countries","Currencies"].forEach(function(t){I[t]=null,k["get"+t]=function(e){return e[t]},U["set"+t]=function(e,a){e[t]=a},V["load"+t]=function(e){var a=e.commit;E[t.toLowerCase()]().then(function(e){return a("set"+t,e),e})}});var O={state:I,getters:k,mutations:U,actions:V};n.a.use(m.a);var L=new m.a.Store({modules:{company:R,nomenclature:O}});u.a.interceptors.request.use(function(t){switch(t.headers=t.headers||{},t.method){case"patch":case"put":case"post":t.headers["Content-Type"]="application/json"}return t}),u.a.interceptors.response.use(function(t){return t.data.data},function(t){return 401===t.response.status&&L.dispatch("logout"),l.a.reject(t)});var M=a("/ocq"),q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("h1",[this._v("Home")])])}]},H=a("VU/8")({},q,!1,null,null,null).exports,K={data:function(){return{formData:{statement:1}}},methods:{submit:function(){alert("Bai Hui")}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("h1",[t._v("Matching Tool")]),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"country"}},[t._v("Statement type:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.statement,expression:"formData.statement"}],staticClass:"form-control",attrs:{id:"country",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"statement",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1",selected:""}},[t._v("Balance Sheet")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Income Statement")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Cash Flow Statement")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"from"}},[t._v("From:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.from,expression:"formData.from"}],staticClass:"form-control",attrs:{type:"text",id:"from",required:""},domProps:{value:t.formData.from},on:{input:function(e){e.target.composing||t.$set(t.formData,"from",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"to"}},[t._v("To:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.to,expression:"formData.to"}],staticClass:"form-control",attrs:{type:"text",id:"to",required:""},domProps:{value:t.formData.to},on:{input:function(e){e.target.composing||t.$set(t.formData,"to",e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"file1"}},[t._v("Own Company File:")]),t._v(" "),a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"file1"}}),t._v(" "),a("label",{staticClass:"custom-file-label",attrs:{for:"file1"}},[t._v("Choose file")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"file2"}},[t._v("Opposite Company File:")]),t._v(" "),a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"file2"}}),t._v(" "),a("label",{staticClass:"custom-file-label",attrs:{for:"file2"}},[t._v("Choose file")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Submit")])])}]},z=a("VU/8")(K,B,!1,null,null,null).exports,W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["logo","logo-"+t.size]},[t.logo.src?a("img",{attrs:{src:t.logo.src}}):a("div",[t._v(t._s(t.logo.initials))]),t._v(" "),a("img",{staticClass:"flag",attrs:{src:"/static/flags/"+t.countryCode+".svg",target:"_blank"}})])},staticRenderFns:[]},X={components:{LogoFlag:a("VU/8")({props:{logo:{},size:{},countryCode:{default:"us"}},methods:{style:function(t){return{background:"url(/static/flags/"+t+".svg)"}}}},W,!1,null,null,null).exports},props:["company","size"]},Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["company-card","company-card-"+t.size]},[a("logo-flag",{attrs:{logo:t.company.logo,size:t.size,countryCode:t.company.country.code}}),t._v(" "),a("div",{staticClass:"company-card-name"},[t._v(t._s(t.company.name))])],1)},staticRenderFns:[]},j={components:{CompanyCard:a("VU/8")(X,Y,!1,null,null,null).exports},props:["companies"]},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),a("tbody",t._l(t.companies,function(e){return a("tr",[a("th",[a("router-link",{attrs:{to:"/company/"+e.id}},[a("company-card",{attrs:{company:e,size:"m"}})],1)],1),t._v(" "),a("td",[t._v(t._s(e.aliases.map(function(t){return t.name}).join(", ")))]),t._v(" "),a("td",[t._v(t._s(e.regNum))]),t._v(" "),a("td",[t._v(t._s(e.currency.code))]),t._v(" "),a("td",[t._v(t._s(e.parent.name))]),t._v(" "),a("td",[t._v(t._s(e.topParent))]),t._v(" "),t._m(1,!0)])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Aliases")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Reg Number")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Reporting Currency")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Direct Parent")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Top Parent")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("...")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Upload")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Start Reconciliation")])])])])}]},Q={components:{CompaniesTable:a("VU/8")(j,J,!1,null,null,null).exports},created:function(){var t=this;this.loading=!0,this.$store.dispatch("loadCompanies").finally(function(){t.loading=!1})},data:function(){return{loading:!1}},computed:{companiesList:function(){return this.$store.getters.companiesList}}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Companies")]),t._v(" "),t.companiesList?a("companies-table",{attrs:{companies:t.companiesList}}):t._e()],1)},staticRenderFns:[]},Z=a("VU/8")(Q,G,!1,null,null,null).exports,tt={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},et=a("VU/8")({name:"Prototype"},tt,!1,null,null,null).exports,at=a("fZjL"),nt=a.n(at),ot=a("Dd8w"),st=a.n(ot),rt={name:null,country:null,currency:null,regId:null,aliases:[],vats:[],corpTax:null,audit:null,personnel:[],taxes:[],software:[],misc:[]},it={props:{company:{default:function(){return st()({},rt)}}},data:function(){return{companyForm:this.company,showCorpTax:!1,showAudit:!1}},methods:{addAlias:function(){this.companyForm.aliases.push({value:null})},removeAlias:function(t){this.companyForm.aliases.splice(t,1)},addCorpTax:function(){this.companyForm.corpTax={},this.showCorpTax=!0},removeCorpTax:function(){this.showCorpTax=!1,this.companyForm.corpTax=null},addVAT:function(){this.companyForm.vats.push({country:1})},removeVAT:function(t){this.companyForm.vats.splice(t,1)},addAudit:function(){this.companyForm.audit={},this.showAudit=!0},removeAudit:function(){this.showAudit=!1,this.companyForm.audit=null},addResponsible:function(){this.companyForm.personnel.push({label:1})},removeResponsible:function(t){this.companyForm.personnel.splice(t,1)},addTax:function(){this.companyForm.taxes.push({label:1})},removeTax:function(t){this.companyForm.taxes.splice(t,1)},addSoftware:function(){this.companyForm.software.push({label:1})},removeSoftware:function(t){this.companyForm.software.splice(t,1)},addField:function(){this.companyForm.misc.push({label:null})},removeField:function(t){this.companyForm.misc.splice(t,1)},submit:function(){var t=this.companyForm,e={},a={};a.aliases=t.aliases.filter(function(t){return!!t.value}).map(function(t){return t.value}),a.vats=t.vats.filter(function(t){return!!t.id}),a.personnel=t.personnel.filter(function(t){return!!t.name}),a.taxes=t.taxes.filter(function(t){return!!t.value}),a.softwareArr=t.software.filter(function(t){return!!t.value}),a.misc=t.misc.filter(function(t){return!!t.value}),nt()(a).forEach(function(t){a[t].length&&(e[t]=a[t])});["regId","corpTax"].forEach(function(a){t[a]&&(e[a]=t[a])}),e.name=t.name,e.country=t.country,e.currency=t.currency,console.log(e)}}},lt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[t._m(0),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Company Name:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.name,expression:"companyForm.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Company Name",required:""},domProps:{value:t.companyForm.name},on:{input:function(e){e.target.composing||t.$set(t.companyForm,"name",e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("The complete registered name.")])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"country"}},[t._v("Country:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.country,expression:"companyForm.country"}],staticClass:"form-control",attrs:{id:"country",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.companyForm,"country",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("USA")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("UK")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Hong Kong")])])]),t._v(" "),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"currency"}},[t._v("Reporting Currency:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.currency,expression:"companyForm.currency"}],staticClass:"form-control",attrs:{id:"currency",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.companyForm,"currency",e.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("USD")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("EUR")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("BCH")])])])]),t._v(" "),t.companyForm.regId||""===t.companyForm.regId?a("div",{staticClass:"form-row"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.companyForm.regId=null}}},[t._v("-")]),t._v(" "),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"regId"}},[t._v("Registration ID:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.regId,expression:"companyForm.regId"}],staticClass:"form-control",attrs:{type:"text",id:"regId",placeholder:"Registration ID"},domProps:{value:t.companyForm.regId},on:{input:function(e){e.target.composing||t.$set(t.companyForm,"regId",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"mb-4"},[null===t.companyForm.regId?a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:function(e){t.companyForm.regId=""}}},[t._v("+ Add Registration ID")]):t._e()]),t._v(" "),t._l(t.companyForm.aliases,function(e,n){return a("div",{staticClass:"form-row"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.removeAlias(n)}}},[t._v("-")]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"alias.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Alias"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-4"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addAlias}},[t._v("+ Add Alias")])]),t._v(" "),t.showCorpTax?a("div",{staticClass:"form-row"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.removeCorpTax}},[t._v("-")]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.corpTax.id,expression:"companyForm.corpTax.id"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Corporate Tax ID"},domProps:{value:t.companyForm.corpTax.id},on:{input:function(e){e.target.composing||t.$set(t.companyForm.corpTax,"id",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.corpTax.filingDate,expression:"companyForm.corpTax.filingDate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filing Deadline"},domProps:{value:t.companyForm.corpTax.filingDate},on:{input:function(e){e.target.composing||t.$set(t.companyForm.corpTax,"filingDate",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.corpTax.dueDate,expression:"companyForm.corpTax.dueDate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Due Date"},domProps:{value:t.companyForm.corpTax.dueDate},on:{input:function(e){e.target.composing||t.$set(t.companyForm.corpTax,"dueDate",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.corpTax.advancedPayments,expression:"companyForm.corpTax.advancedPayments"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Advanced Payments: to do ..."},domProps:{value:t.companyForm.corpTax.advancedPayments},on:{input:function(e){e.target.composing||t.$set(t.companyForm.corpTax,"advancedPayments",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"mb-4"},[t.showCorpTax?t._e():a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addCorpTax}},[t._v("+ Add Corporate Tax")])]),t._v(" "),t._l(t.companyForm.vats,function(e,n){return a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group-col"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.removeVAT(n)}}},[t._v("-")])]),t._v(" "),a("div",{staticClass:"form-group col"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"vat.country"}],staticClass:"form-control",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"country",a.target.multiple?n:n[0])}}},[a("option",{attrs:{value:"1"}},[t._v("European Empire")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("United States")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("United Kingdom")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("Hong Kong")])])]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"vat.id"}],staticClass:"form-control",attrs:{type:"text",placeholder:1===e.country?"VAT ID":"Sales Tax ID"},domProps:{value:e.id},on:{input:function(a){a.target.composing||t.$set(e,"id",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reportingRegularity,expression:"vat.reportingRegularity"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Reporting Regularity: todo ..."},domProps:{value:e.reportingRegularity},on:{input:function(a){a.target.composing||t.$set(e,"reportingRegularity",a.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-4"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addVAT}},[t._v("+ Add VAT / Sales Tax")])]),t._v(" "),t.showAudit?a("div",{staticClass:"form-row"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.removeAudit}},[t._v("-")]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.audit.name,expression:"companyForm.audit.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Auditor's Name"},domProps:{value:t.companyForm.audit.name},on:{input:function(e){e.target.composing||t.$set(t.companyForm.audit,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.audit.email,expression:"companyForm.audit.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Auditor's Email"},domProps:{value:t.companyForm.audit.email},on:{input:function(e){e.target.composing||t.$set(t.companyForm.audit,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.audit.phone,expression:"companyForm.audit.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Auditor's Phone"},domProps:{value:t.companyForm.audit.phone},on:{input:function(e){e.target.composing||t.$set(t.companyForm.audit,"phone",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyForm.audit.ddl,expression:"companyForm.audit.ddl"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Audit Deadline: to do ..."},domProps:{value:t.companyForm.audit.ddl},on:{input:function(e){e.target.composing||t.$set(t.companyForm.audit,"ddl",e.target.value)}}})])]):t._e(),t._v(" "),a("div",{staticClass:"mb-4"},[t.showAudit?t._e():a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addAudit}},[t._v("+ Add Audit Info")])]),t._v(" "),t._l(t.companyForm.personnel,function(e,n){return a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group-col"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.removeResponsible(n)}}},[t._v("-")])]),t._v(" "),a("div",{staticClass:"form-group col"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"responsible.label"}],staticClass:"form-control",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"label",a.target.multiple?n:n[0])}}},[a("option",{attrs:{value:"1"}},[t._v("Executive Director")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Non-Executive Director")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Accountant")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("Payroll Manager")]),t._v(" "),a("option",{attrs:{value:"5"}},[t._v("Legal Advisor")]),t._v(" "),a("option",{attrs:{value:"6"}},[t._v("Tax Advisor")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("TODO: add custom option")])]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"responsible.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"responsible.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"responsible.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:e.phone},on:{input:function(a){a.target.composing||t.$set(e,"phone",a.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-4"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addResponsible}},[t._v("+ Add Personnel")])]),t._v(" "),t._l(t.companyForm.taxes,function(e,n){return a("div",{staticClass:"form-row"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.removeTax(n)}}},[t._v("-")]),t._v(" "),a("div",{staticClass:"form-group col"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"tax.label"}],staticClass:"form-control",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"label",a.target.multiple?n:n[0])}}},[a("option",{attrs:{value:"1"}},[t._v("Withholding tax")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Municipality tax")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Bai Hui Tax")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("TODO: add custom option")])]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.filingDate,expression:"tax.filingDate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filing Deadline"},domProps:{value:e.filingDate},on:{input:function(a){a.target.composing||t.$set(e,"filingDate",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dueDate,expression:"tax.dueDate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Due Date"},domProps:{value:e.dueDate},on:{input:function(a){a.target.composing||t.$set(e,"dueDate",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"tax.value"}],staticClass:"form-control",attrs:{placeholder:"Info",rows:"3"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-4"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addTax}},[t._v("+ Add Tax")])]),t._v(" "),t._l(t.companyForm.software,function(e,n){return a("div",{staticClass:"form-row"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.removeSoftware(n)}}},[t._v("-")]),t._v(" "),a("div",{staticClass:"form-group col"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"software.label"}],staticClass:"form-control",on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"label",a.target.multiple?n:n[0])}}},[a("option",{attrs:{value:"1"}},[t._v("ERP")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("CRM")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Invoicing")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("TODO: add custom option")])]),t._v(" "),a("div",{staticClass:"form-group col"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"software.value"}],staticClass:"form-control",attrs:{placeholder:"Info",rows:"3"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-4"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addSoftware}},[t._v("+ Add Software")])]),t._v(" "),t._l(t.companyForm.misc,function(e,n){return a("div",{staticClass:"form-row"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.removeField(n)}}},[t._v("-")]),t._v(" "),a("div",{staticClass:"form-group col"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"field.label"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Label"},domProps:{value:e.label},on:{input:function(a){a.target.composing||t.$set(e,"label",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"field.value"}],staticClass:"form-control",attrs:{placeholder:"Info",rows:"3"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])}),t._v(" "),a("div",{staticClass:"mb-4"},[a("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"},on:{click:t.addField}},[t._v("+ Add Field")])])],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("Cancel")])])}]},ct={name:"Company",components:{CompanyForm:a("VU/8")(it,lt,!1,null,null,null).exports},data:function(){return{msg:"Home"}}},ut={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[e("h1",[this._v("Company")]),this._v(" "),e("company-form")],1)},staticRenderFns:[]},mt=a("VU/8")(ct,ut,!1,null,null,null).exports,pt={props:["isMissing"],data:function(){return{loading:!1,countryCode:"us",mockFx:{id:1,currency:{id:1,code:"USD",country:"us"},rate:1.2345}}},methods:{edit:function(t){var e=window.prompt("FX Rate:",t.rate);e?this.loading=!0:""===e&&window.alert("The name can not be empty!")},remove:function(t){window.confirm("Are you sure you want to delete ...<TODO>...")&&(this.loading=!0)}}},vt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Type")]),t._v(" "),a("th",{attrs:{colspan:"3"}},[t._v("Currency")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Rate")]),t._v(" "),t.isMissing?t._e():[a("th",{attrs:{scope:"col"}},[t._v("Input Method")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Source")]),t._v(" "),a("th",{attrs:{scope:"col"}})]],2)]),t._v(" "),a("tbody",[a("tr",[a("th",[t._v("31 Jan `15")]),t._v(" "),a("td",[t._v("Daily")]),t._v(" "),a("td",[a("img",{staticClass:"flag",attrs:{src:"/static/flags/"+t.mockFx.currency.country+".svg",target:"_blank"}})]),t._v(" "),a("td",[t._v(t._s(t.mockFx.currency.code))]),t._v(" "),a("td",[t._v("US dollar")]),t._v(" "),t.isMissing?[t._m(0)]:t._e(),t._v(" "),t.isMissing?t._e():[a("td",[t._v(t._s(t.mockFx.rate))]),t._v(" "),a("td",[t._v("Auto/Manual")]),t._v(" "),t._m(1),t._v(" "),a("td",[a("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button"},on:{click:function(e){t.edit(t.mockFx)}}},[t._v("Edit")]),t._v(" "),a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){t.remove(t.mockFx)}}},[t._v("Delete")])])]],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("input",{attrs:{type:"text",placeholder:"1.2345"}}),this._v(" "),e("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[this._v("Save")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"http://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"}},[this._v("ECB")])])}]},dt={name:"FX-Rates",components:{FxTable:a("VU/8")(pt,vt,!1,null,null,null).exports},data:function(){return{isMissing:!0}}},ft={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("FX Rates")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"missing-fx-panel"}},[a("fx-table",{attrs:{"is-missing":t.isMissing}})],1),t._v(" "),a("div",{staticClass:"tab-pane fade",attrs:{id:"all-fx-panel"}},[t._m(1),t._v(" "),a("fx-table")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab"}},[a("a",{staticClass:"nav-item nav-link active",attrs:{id:"missing-fx-tab","data-toggle":"tab",href:"#missing-fx-panel"}},[t._v("Missing FX Rates")]),t._v(" "),a("a",{staticClass:"nav-item nav-link",attrs:{id:"all-fx-tab","data-toggle":"tab",href:"#all-fx-panel"}},[t._v("All FX Rates")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("br"),this._v(" "),e("button",{staticClass:"btn btn-success btn-sm",attrs:{type:"button"}},[this._v("Add FX Rate")])])}]},_t=a("VU/8")(dt,ft,!1,null,null,null).exports,gt={created:function(){var t=this;this.loading=!0;var e=this.$store.dispatch("loadCountries"),a=this.$store.dispatch("loadCurrencies");l.a.all([e,a]).then(function(){t.loading=!1})},data:function(){return{loading:!1}},computed:{countries:function(){return this.$store.getters.getCountries},currencies:function(){return this.$store.getters.getCurrencies}}},yt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("h1",[t._v("Nomenclatures")]),t._v(" "),a("h3",[t._v("Countries")]),t._v(" "),a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.countries,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.code))]),t._v(" "),a("td",[t._v(t._s(e.order))])])}))]),t._v(" "),a("h3",[t._v("Currencies")]),t._v(" "),a("table",[t._m(1),t._v(" "),a("tbody",t._l(t.currencies,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.code))]),t._v(" "),a("td",[t._v(t._s(e.order))])])}))]),t._v(" "),a("loading",{attrs:{loading:t.loading}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("Order")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Id")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("Order")])])])}]},ht=a("VU/8")(gt,yt,!1,null,null,null).exports;n.a.use(M.a);var bt=new M.a({routes:[{path:"/",name:"home",component:H,meta:{pageId:"home-page",pageClass:""}},{path:"/companies",name:"companies",component:Z,meta:{pageId:"companies-page",pageClass:""}},{path:"/matching-tool",name:"matchingTool",component:z,meta:{pageId:"matching-tool-page",pageClass:""}},{path:"/prototype",name:"prototype",component:et,redirect:"/prototype/company",meta:{pageId:"",pageClass:"prototype-page"},children:[{path:"company",name:"company",component:mt,meta:{pageId:"company-page",pageClass:""}},{path:"fx",name:"fx",component:_t,meta:{pageId:"fx-page",pageClass:""}},{path:"nomenclatures",name:"nomenclatures",component:ht,meta:{pageId:"nomenclatures-page",pageClass:""}}]},{path:"*",redirect:"/"}],mode:"history"}),Ct={data:function(){return{isDev:!0,buildTimestamp:"Thu, 01 Feb 2018 09:42:26 GMT"}},methods:{test:function(){console.log("Test")}},computed:{user:function(){return null}}},xt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",{class:{debug:t.isDev}},[a("header",[a("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"light",id:"top-bar"}},[a("b-navbar-brand",{attrs:{to:"/"}},[t._v("Balance Share")]),t._v(" "),a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[t.user?[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:t.user.name,right:""}},[a("b-dropdown-item",{attrs:{to:"/change"}},[t._v("Change Password")])],1),t._v(" "),a("b-nav-item",{on:{click:t.logout}},[t._v("Logout")])],1)]:[t.isDev?a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/companies",exact:""}},[t._v("Companies")]),t._v(" "),a("b-nav-item",{attrs:{to:"/prototype/company",exact:""}},[t._v("Company Profile")]),t._v(" "),a("b-nav-item",{attrs:{to:"/prototype/fx",exact:""}},[t._v("FX Rates")]),t._v(" "),a("b-nav-item",{attrs:{to:"/prototype/nomenclatures",exact:""}},[t._v("Nomenclatures")]),t._v(" "),a("b-nav-item",{attrs:{to:"/matching-tool",exact:""}},[t._v("Matching Tool")]),t._v(" "),a("b-nav-item-dropdown",{attrs:{text:"auth pages",right:""}},[a("b-dropdown-item",{attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),a("b-dropdown-item",{attrs:{to:"/register"}},[t._v("Register")]),t._v(" "),a("b-dropdown-item",{attrs:{to:"/forgot"}},[t._v("Forgot pass")]),t._v(" "),a("b-dropdown-item",{attrs:{to:"/reset"}},[t._v("Reset pass")])],1)],1):t._e()]],2)],1)],1),t._v(" "),a("router-view"),t._v(" "),a("footer"),t._v(" "),t.isDev?a("div",{attrs:{id:"dev-toolbox"}},[a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseDevToolbox",modifiers:{collapseDevToolbox:!0}}],attrs:{variant:"outline-danger"}},[t._v("* Dev Toolbox")]),t._v(" "),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapseDevToolbox"}},[a("b-card",[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.test}},[t._v("Test Action")]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n          "+t._s(t.buildTimestamp)+"\n        ")])])],1)],1):t._e()],1)},staticRenderFns:[]},Ft=a("VU/8")(Ct,xt,!1,null,null,null).exports,wt={render:function(){var t=this.$createElement,e=this._self._c||t;return this.loading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:"/static/images/loading.gif"}})]):this._e()},staticRenderFns:[]},Tt=a("VU/8")({props:{loading:{}}},wt,!1,null,null,null).exports;a("pQP2");n.a.config.productionTip=!1,n.a.use(r.a),n.a.use(s.a),n.a.component("loading",Tt),new n.a({el:"#app",router:bt,store:L,render:function(t){return t(Ft)}})},"Y9O/":function(t,e){},dW2o:function(t,e){},n9mN:function(t,e){},pQP2:function(t,e){},r15W:function(t,e,a){"use strict";var n=a("E9Zr").a;var o=a("VU/8")(n,null,!1,function(t){a("dW2o")},null,null);e.a=o.exports},xBwK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6e13f419e3d640d2bf17.js.map