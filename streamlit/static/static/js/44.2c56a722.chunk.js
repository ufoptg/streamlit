(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[44],{1805:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return f}));var n=i(2),o=i(4),a=i(6),r=i(7),l=i(0),u=i.n(l),s=i(214),p=i(168),m=i(43),c=i(1),f=function(e){Object(a.a)(i,e);var t=Object(r.a)(i);function i(){var e;Object(n.a)(this,i);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).formClearHelper=new s.b,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setIntValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState((function(e,t){return{value:t.element.default}}),(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onChange=function(t){e.setState({value:t},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return Object(o.a)(i,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getIntValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props.element,t=e.options,i=e.help,n=e.label,o=e.labelVisibility,a=e.formId,r=this.props,l=r.disabled,u=r.widgetMgr;return this.formClearHelper.manageFormClearListener(u,a,this.onFormCleared),Object(c.jsx)(p.b,{label:n,labelVisibility:Object(m.k)(null===o||void 0===o?void 0:o.value),options:t,disabled:l,width:this.props.width,onChange:this.onChange,value:this.state.value,help:i})}}]),i}(u.a.PureComponent)}}]);