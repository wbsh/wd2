webpackJsonp([0],{FkDT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"TreeLeaf",components:{TreeNode:function(){return new Promise(function(e){e()}).then(n.bind(null,"mwaQ"))},CompanyCard:n("0KbX").a},created:function(){var e=this;e.state.$on("expandAll",function(){e.isOpen=!0}),e.state.$on("collapseAll",function(){e.isOpen=!1})},mounted:function(){this.preselectedCompany&&this.preselectedCompany===this.node.id&&this.select()},props:["node","state","preselectedCompany"],data:function(){return{hasChildren:this.node[this.state.childrenProp]&&this.node[this.state.childrenProp].length>0,isOpen:!0}},methods:{toggleOpen:function(e){e.target.parentNode.classList.toggle("opened-node"),this.isOpen=!this.isOpen},select:function(e){this.$el.classList.add("selected-node"),this.state.selectNode(this.node,this.deselect)},deselect:function(){this.$el.classList.remove("selected-node")},enter:function(e){e.style.height="auto";var t=getComputedStyle(e).height;e.style.height="0px",e.offsetHeight,e.style.height=t},leave:function(e){e.style.height="auto";var t=getComputedStyle(e).height;e.style.height=t,e.offsetHeight,e.style.height="0px"},clearHeight:function(e){e.style.height=null}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:[e.hasChildren?"tree-node":"tree-leaf",{"opened-node":e.hasChildren}]},[n("i",{on:{click:e.toggleOpen}}),e._v(" "),n("span",{staticClass:"node-container",on:{click:e.select}},[e.node.logo&&e.node.name?n("company-card",{attrs:{company:e.node,size:"s"}}):e._e()],1),e._v(" "),n("transition",{attrs:{name:"tree-slide"},on:{enter:e.enter,"after-enter":e.clearHeight,leave:e.leave,"after-leave":e.clearHeight}},[n("TreeNode",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],attrs:{nodes:e.node[e.state.childrenProp],state:e.state}})],1)],1)},staticRenderFns:[]},o=n("VU/8")(s,i,!1,null,null,null);t.default=o.exports}});
//# sourceMappingURL=0.70e84d5d08202467f7f4.js.map