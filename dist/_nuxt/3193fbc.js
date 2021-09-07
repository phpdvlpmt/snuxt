(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(36),n(57),n(72),n(46),n(131),n(35),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$supabase,e.next=3,n.from("pupils").select("*").order("id",{ascending:!0});case 3:return r=e.sent,data=r.data,e.abrupt("return",{list:data});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{list:[],subjects:[],grades:[],pupils:[],pupil:"",cls:"",pupilId:null,pupilGrades:[],search:""}},computed:{filteredList:function(){var t=this;return this.list.filter((function(e){return e.class.toLowerCase().includes(t.search.toLowerCase())}))}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.subscribeLists();case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.getSubjects(),this.getGrades(),this.getPupils()},methods:{getList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("pupils").select("*").order("id",{ascending:!0});case 2:return n=e.sent,data=n.data,e.abrupt("return",{list:data});case 5:case"end":return e.stop()}}),e)})))()},getSubjects:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("subjects").select("*");case 2:t.subjects=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getPupils:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("pupils").select("*");case 2:t.pupils=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getGrades:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("grades").select("\n    id, grade,\n    pupils (\n      name\n    ),\n    subjects(\n        subject\n    )\n  ");case 2:t.grades=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getPupilGrades:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===e.pupilId){n.next=4;break}return n.next=3,e.$supabase.from("grades").select("\n    id, grade,\n    pupils (\n      name\n    ),\n    subjects(\n        subject\n    )\n  ").eq("pupilId",t.target.value).eq("subjectId",1);case 3:e.pupilGrades=n.sent;case 4:case"end":return n.stop()}}),n)})))()},addNewPupil:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("pupils").insert([{name:t.pupil,class:t.cls}]);case 2:case"end":return e.stop()}}),e)})))()},subscribeLists:function(){var t=this;this.$supabase.from("pupils").on("INSERT",(function(e){e.new&&t.list.push(e.new)})).subscribe()}}}),l=n(17),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto px-5 bg-green-500 py-4 min-h-screen "},[n("div",{staticClass:"w-full space-y-4 p-5 bg-gradient-to-r\n    from-purple-800\n    via-blue-800\n    to-purple-800"},[n("div",{staticClass:"w-full relative"},[n("span",{staticClass:"absolute inset-y-0 flex items-center pl-2"},[n("svg",{staticClass:"h-5 w-5 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"}})])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"\n        shadow\n        appearance-none\n        border\n        rounded\n        w-full\n        py-2\n        px-3\n        pl-10\n        text-gray-700\n        leading-tight\n        focus:outline-none focus:shadow-outline\n      ",attrs:{type:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"w-full flex items-start space-x-6"},[n("table",{staticClass:"w-full table-auto text-gray-600 text-xs"},[t._m(0),t._v(" "),n("tbody",{staticClass:"bg-gray-200"},t._l(t.filteredList,(function(e){return n("tr",{key:e.id,staticClass:"bg-white border border-gray-200"},[n("td",{staticClass:"px-4 py-2"},[t._v("\n          "+t._s(e.id)+"\n        ")]),t._v(" "),n("td",{staticClass:"px-4 py-2"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("td",{staticClass:"px-4 py-2"},[t._v("\n          "+t._s(e.class)+"\n        ")])])})),0)]),t._v(" "),n("table",{staticClass:"w-full table-auto text-gray-600 text-xs"},[t._m(1),t._v(" "),n("tbody",{staticClass:"bg-gray-200"},t._l(t.subjects.data,(function(e){return n("tr",{key:e.id,staticClass:"bg-white border border-gray-200"},[n("td",{staticClass:"px-4 py-2"},[t._v("\n          "+t._s(e.id)+"\n        ")]),t._v(" "),n("td",{staticClass:"px-4 py-2"},[t._v("\n          "+t._s(e.subject)+"\n        ")])])})),0)])]),t._v(" "),n("div",{staticClass:"w-full  flex items-start space-x-5 "},[n("table",{staticClass:"w-1/2 table-auto text-gray-600 text-xs"},[t._m(2),t._v(" "),n("tbody",{staticClass:"bg-gray-200"},t._l(t.grades.data,(function(e){return n("tr",{key:e.id,staticClass:"bg-white border border-gray-200"},[n("td",{staticClass:"px-4 py-2"},[t._v("\n          "+t._s(e.pupils.name)+"\n        ")]),t._v(" "),n("td",{staticClass:"px-4 py-2"},[t._v("\n         "+t._s(e.subjects.subject)+"\n        ")]),t._v(" "),n("td",{staticClass:"px-4 py-2"},[t._v("\n         "+t._s(e.grade)+"\n        ")])])})),0)]),t._v(" "),n("div",{staticClass:"w-1/2"},[n("select",{staticClass:"w-full",on:{change:function(e){return t.getPupilGrades(e)}}},t._l(t.pupils.data,(function(p){return n("option",{key:p.id,domProps:{value:p.id}},[t._v(t._s(p.name)+" ")])})),0),t._v(" "),t.pupilGrades?n("table",{staticClass:"w-full table-auto text-gray-600 text-xs "},[t._m(3),t._v(" "),n("tbody",{staticClass:"bg-gray-200"},t._l(t.pupilGrades.data,(function(e){return n("tr",{key:e.id,staticClass:"bg-white border border-gray-200"},[n("td",{staticClass:"px-4 py-2",attrs:{colspan:"2"}},[t._v("\n          "+t._s(e.grade)+"\n        ")])])})),0)]):t._e()])]),t._v(" "),n("div",[n("form",{staticClass:"bg-white shadow-md rounded pt-2 px-4 pb-4 mb-4",on:{submit:function(e){return e.preventDefault(),t.addNewPupil()}}},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\n          Pupil\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pupil,expression:"pupil"}],staticClass:"\n            shadow\n            appearance-none\n            border\n            rounded\n            w-full\n            py-2\n            px-3\n            text-gray-700\n            leading-tight\n            focus:outline-none focus:shadow-outline\n          ",attrs:{type:"text"},domProps:{value:t.pupil},on:{input:function(e){e.target.composing||(t.pupil=e.target.value)}}}),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\n          Class\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cls,expression:"cls"}],staticClass:"\n            shadow\n            appearance-none\n            border\n            rounded\n            w-full\n            py-1\n            px-3\n            text-gray-700\n            mb-3\n            leading-tight\n            focus:outline-none focus:shadow-outline\n          ",attrs:{type:"text"},domProps:{value:t.cls},on:{input:function(e){e.target.composing||(t.cls=e.target.value)}}})]),t._v(" "),t._m(4)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"bg-gray-500"},[n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("ID")])]),t._v(" "),n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("Příjmení")])]),t._v(" "),n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("Třída")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"bg-gray-500"},[n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("ID")])]),t._v(" "),n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("Předmět")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"bg-gray-500"},[n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("Příjmení (userId)")])]),t._v(" "),n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("Předmět")])]),t._v(" "),n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("Známky")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"bg-gray-500"},[n("th",{staticClass:"px-4 py-2 text-left"},[n("span",{staticClass:"text-gray-300"},[t._v("Známky")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"\n            bg-purple-800\n            hover:bg-purple-900\n            text-white\n            font-bold\n            py-1\n            px-4\n            rounded\n            focus:outline-none focus:shadow-outline\n          ",attrs:{type:"submit"}},[t._v("\n          Add new pupil\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);