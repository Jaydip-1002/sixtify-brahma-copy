"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[268],{"./stories/AgGrid/AgGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultAgGrid:()=>DefaultAgGrid,NoRecordsAgGridWithOverlay:()=>NoRecordsAgGridWithOverlay,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@14.2.23_@babel+core@7.24.3_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_repo_shared_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/shared-components/src/index.ts");const column=[{headerName:"SampleId",field:"id",sortable:!1,width:150},{headerName:"name",field:"name",width:150},{headerName:"age",field:"age",width:150}],__WEBPACK_DEFAULT_EXPORT__={title:"shared-component/AgGrid",component:_repo_shared_components__WEBPACK_IMPORTED_MODULE_1__.z1,tags:["autodocs"],argTypes:{height:{control:"text"},totalRecords:{control:"number"},rowModelType:{control:"select",options:["clientSide","infinite"]},ref:{control:!1},overlayNoRowsTemplate:{control:!1}},args:{rowData:[{id:1,name:"John",age:25},{id:2,name:"Jane",age:30},{id:3,name:"Bob",age:40}],rowModelType:"clientSide"}},DefaultAgGrid={args:{rowModelType:"clientSide",totalRecords:3},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_repo_shared_components__WEBPACK_IMPORTED_MODULE_1__.z1,{...args,columnDefs:column,height:"500px"})},NoRecordsAgGridWithOverlay={args:{rowData:[],overlayNoRowsTemplate:'<span class="no-rows">No records to display</span>'},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_repo_shared_components__WEBPACK_IMPORTED_MODULE_1__.z1,{...args,columnDefs:column,height:"500px"})},__namedExportsOrder=["DefaultAgGrid","NoRecordsAgGridWithOverlay"];DefaultAgGrid.parameters={...DefaultAgGrid.parameters,docs:{...DefaultAgGrid.parameters?.docs,source:{originalSource:'{\n  args: {\n    rowModelType: "clientSide",\n    totalRecords: 3\n  },\n  render: args => {\n    return <AgGrid {...args} columnDefs={column} height="500px" />;\n  }\n}',...DefaultAgGrid.parameters?.docs?.source}}},NoRecordsAgGridWithOverlay.parameters={...NoRecordsAgGridWithOverlay.parameters,docs:{...NoRecordsAgGridWithOverlay.parameters?.docs,source:{originalSource:'{\n  args: {\n    rowData: [],\n    overlayNoRowsTemplate: \'<span class="no-rows">No records to display</span>\'\n  },\n  render: args => {\n    return <AgGrid {...args} columnDefs={column} height="500px" />;\n  }\n}',...NoRecordsAgGridWithOverlay.parameters?.docs?.source}}}}}]);