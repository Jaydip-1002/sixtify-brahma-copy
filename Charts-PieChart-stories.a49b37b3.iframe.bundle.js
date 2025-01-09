"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[515],{"./stories/Charts/PieChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomAngles:()=>CustomAngles,CustomArcLabel:()=>CustomArcLabel,CustomRadii:()=>CustomRadii,CustomSize:()=>CustomSize,DefaultPieChart:()=>DefaultPieChart,FadedSeries:()=>FadedSeries,HighlightedSeries:()=>HighlightedSeries,MixedSeries:()=>MixedSeries,NoAnimation:()=>NoAnimation,NoTooltip:()=>NoTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"shared-component/Charts/PieChart",component:__webpack_require__("../../packages/shared-components/src/index.ts").rW,tags:["autodocs"],argTypes:{height:{description:"Height of the PieChart",control:{type:"number"},defaultValue:235},width:{description:"Width of the PieChart",control:{type:"number"},defaultValue:235},skipAnimation:{description:"Disables animation if true",control:{type:"boolean"},defaultValue:!1},tooltip:{description:"Tooltip behavior ('item', 'axis', 'none')",control:{type:"select",options:["item","axis","none"]},defaultValue:"item",mapping:{item:{trigger:"item"},axis:{trigger:"axis"},none:{trigger:"none"}}},label:{description:"Center label text",control:{type:"text"},defaultValue:"Center"},series:{description:"Pie chart series configuration",control:{type:"object"},defaultValue:{type:"pie",data:[{label:"A",value:40},{label:"B",value:30},{label:"C",value:20},{label:"D",value:10}],innerRadius:0,outerRadius:100,startAngle:0,endAngle:360,paddingAngle:0,arcLabel:"label",arcLabelMinAngle:0,cx:"50%",cy:"50%",highlightScope:{fade:"global",highlight:"item"},faded:{innerRadius:30,additionalRadius:-30,color:"gray"}}}}},DefaultPieChart={args:{series:{type:"pie",data:[{label:"A",value:40},{label:"B",value:30},{label:"C",value:20},{label:"D",value:10}]}}},CustomSize={args:{height:300,width:300,series:{type:"pie",data:[{label:"A",value:40},{label:"B",value:30},{label:"C",value:20},{label:"D",value:10}]}}},NoAnimation={args:{skipAnimation:!0,series:{type:"pie",data:[{label:"A",value:40},{label:"B",value:30},{label:"C",value:20},{label:"D",value:10}]}}},CustomRadii={args:{series:{type:"pie",data:[{label:"A",value:40},{label:"B",value:30},{label:"C",value:20},{label:"D",value:10}],innerRadius:90,outerRadius:"90%",cornerRadius:0}}},NoTooltip={args:{tooltip:{trigger:"none"},series:{type:"pie",data:[{label:"A",value:40},{label:"B",value:30},{label:"C",value:20},{label:"D",value:10}]}}},CustomAngles={args:{series:{type:"pie",data:[{value:50,color:"#F39C12",id:"A",label:"A"},{value:50,color:"#2980B9",id:"B",label:"B"}],startAngle:45,endAngle:270}}},CustomArcLabel={args:{series:{type:"pie",data:[{value:60,color:"#1ABC9C",id:"A",label:"A"},{value:40,color:"#E74C3C",id:"B",label:"B"}],arcLabel:item=>`${item.label}: ${item.value}%`}}},HighlightedSeries={args:{series:{type:"pie",data:[{value:50,color:"#F39C12",id:"A",label:"A"},{value:50,color:"#2980B9",id:"B",label:"B"}],highlightScope:{fade:"global",highlight:"item"}}}},FadedSeries={args:{series:{type:"pie",data:[{label:"A",value:70,color:"#1ABC9C"},{label:"B",value:30,color:"#E74C3C"}],faded:{innerRadius:30,additionalRadius:-30,color:"gray"}}}},MixedSeries={args:{series:{type:"pie",data:[{value:50,color:"#F39C12",id:"A",label:"A"},{value:50,color:"#2980B9",id:"B",label:"B"}],highlightScope:{fade:"global",highlight:"item"},faded:{innerRadius:30,additionalRadius:-30,color:"gray"}}}},__namedExportsOrder=["DefaultPieChart","CustomSize","NoAnimation","CustomRadii","NoTooltip","CustomAngles","CustomArcLabel","HighlightedSeries","FadedSeries","MixedSeries"];DefaultPieChart.parameters={...DefaultPieChart.parameters,docs:{...DefaultPieChart.parameters?.docs,source:{originalSource:'{\n  args: {\n    series: {\n      type: "pie",\n      data: [{\n        label: "A",\n        value: 40\n      }, {\n        label: "B",\n        value: 30\n      }, {\n        label: "C",\n        value: 20\n      }, {\n        label: "D",\n        value: 10\n      }]\n    }\n  }\n}',...DefaultPieChart.parameters?.docs?.source}}},CustomSize.parameters={...CustomSize.parameters,docs:{...CustomSize.parameters?.docs,source:{originalSource:'{\n  args: {\n    height: 300,\n    width: 300,\n    series: {\n      type: "pie",\n      data: [{\n        label: "A",\n        value: 40\n      }, {\n        label: "B",\n        value: 30\n      }, {\n        label: "C",\n        value: 20\n      }, {\n        label: "D",\n        value: 10\n      }]\n    }\n  }\n}',...CustomSize.parameters?.docs?.source}}},NoAnimation.parameters={...NoAnimation.parameters,docs:{...NoAnimation.parameters?.docs,source:{originalSource:'{\n  args: {\n    skipAnimation: true,\n    series: {\n      type: "pie",\n      data: [{\n        label: "A",\n        value: 40\n      }, {\n        label: "B",\n        value: 30\n      }, {\n        label: "C",\n        value: 20\n      }, {\n        label: "D",\n        value: 10\n      }]\n    }\n  }\n}',...NoAnimation.parameters?.docs?.source}}},CustomRadii.parameters={...CustomRadii.parameters,docs:{...CustomRadii.parameters?.docs,source:{originalSource:'{\n  args: {\n    series: {\n      type: "pie",\n      data: [{\n        label: "A",\n        value: 40\n      }, {\n        label: "B",\n        value: 30\n      }, {\n        label: "C",\n        value: 20\n      }, {\n        label: "D",\n        value: 10\n      }],\n      innerRadius: 90,\n      outerRadius: "90%",\n      cornerRadius: 0\n    }\n  }\n}',...CustomRadii.parameters?.docs?.source}}},NoTooltip.parameters={...NoTooltip.parameters,docs:{...NoTooltip.parameters?.docs,source:{originalSource:'{\n  args: {\n    tooltip: {\n      trigger: "none"\n    },\n    series: {\n      type: "pie",\n      data: [{\n        label: "A",\n        value: 40\n      }, {\n        label: "B",\n        value: 30\n      }, {\n        label: "C",\n        value: 20\n      }, {\n        label: "D",\n        value: 10\n      }]\n    }\n  }\n}',...NoTooltip.parameters?.docs?.source}}},CustomAngles.parameters={...CustomAngles.parameters,docs:{...CustomAngles.parameters?.docs,source:{originalSource:'{\n  args: {\n    series: {\n      type: "pie",\n      data: [{\n        value: 50,\n        color: "#F39C12",\n        id: "A",\n        label: "A"\n      }, {\n        value: 50,\n        color: "#2980B9",\n        id: "B",\n        label: "B"\n      }],\n      startAngle: 45,\n      endAngle: 270\n    }\n  }\n}',...CustomAngles.parameters?.docs?.source}}},CustomArcLabel.parameters={...CustomArcLabel.parameters,docs:{...CustomArcLabel.parameters?.docs,source:{originalSource:'{\n  args: {\n    series: {\n      type: "pie",\n      data: [{\n        value: 60,\n        color: "#1ABC9C",\n        id: "A",\n        label: "A"\n      }, {\n        value: 40,\n        color: "#E74C3C",\n        id: "B",\n        label: "B"\n      }],\n      arcLabel: item => `${item.label}: ${item.value}%`\n    }\n  }\n}',...CustomArcLabel.parameters?.docs?.source}}},HighlightedSeries.parameters={...HighlightedSeries.parameters,docs:{...HighlightedSeries.parameters?.docs,source:{originalSource:'{\n  args: {\n    series: {\n      type: "pie",\n      data: [{\n        value: 50,\n        color: "#F39C12",\n        id: "A",\n        label: "A"\n      }, {\n        value: 50,\n        color: "#2980B9",\n        id: "B",\n        label: "B"\n      }],\n      highlightScope: {\n        fade: "global",\n        highlight: "item"\n      }\n    }\n  }\n}',...HighlightedSeries.parameters?.docs?.source}}},FadedSeries.parameters={...FadedSeries.parameters,docs:{...FadedSeries.parameters?.docs,source:{originalSource:'{\n  args: {\n    series: {\n      type: "pie",\n      data: [{\n        label: "A",\n        value: 70,\n        color: "#1ABC9C"\n      }, {\n        label: "B",\n        value: 30,\n        color: "#E74C3C"\n      }],\n      faded: {\n        innerRadius: 30,\n        additionalRadius: -30,\n        color: "gray"\n      }\n    }\n  }\n}',...FadedSeries.parameters?.docs?.source}}},MixedSeries.parameters={...MixedSeries.parameters,docs:{...MixedSeries.parameters?.docs,source:{originalSource:'{\n  args: {\n    series: {\n      type: "pie",\n      data: [{\n        value: 50,\n        color: "#F39C12",\n        id: "A",\n        label: "A"\n      }, {\n        value: 50,\n        color: "#2980B9",\n        id: "B",\n        label: "B"\n      }],\n      highlightScope: {\n        fade: "global",\n        highlight: "item"\n      },\n      faded: {\n        innerRadius: 30,\n        additionalRadius: -30,\n        color: "gray"\n      }\n    }\n  }\n}',...MixedSeries.parameters?.docs?.source}}}}}]);