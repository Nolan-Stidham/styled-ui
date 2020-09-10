webpackJsonp([58],{2161:function(t,e,n){var a=n(0),s=n(94),d=n(460).PageRenderer;d.__esModule&&(d=d.default);var r=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2236)}},componentWillMount:function(){},render:function(){return a.createElement(d,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,t.exports=r},2236:function(t,e){t.exports='## Default Date Picker\n\n```react\nshowSource: true\nstate: { selectedDate: null }\n---\n<div>\n\t<span>The selected date is {dateFunctions.format(state.selectedDate, \'MM-dd-yyyy\')}</span>\n\t<DatePickerInput\n\t\tdefaultSelectedDate={state.selectedDate || new Date()}\n\t\tonChange={(date) => setState({ selectedDate: date })}\n\t\tdateFunctions={dateFunctions}\n\t\tparseUserDateString={parseUserDateString}\n\t\tvalidate={() => true}\n\t/>\n</div>\n```\n\n## Customized placement of Date Picker\n\n```react\nshowSource: true\nstate: { selectedDate: null }\n---\n<div>\n\t<span>The selected date is {dateFunctions.format(state.selectedDate, \'MM-dd-yyyy\')}</span>\n\t<DatePickerInput\n\t\tdefaultSelectedDate={state.selectedDate || new Date()}\n\t\tonChange={(date) => setState({ selectedDate: date })}\n\t\tdateFunctions={dateFunctions}\n\t\tparseUserDateString={parseUserDateString}\n\t\tvalidate={() => true}\n\t\tplacement={"left-start"}\n\t/>\n</div>\n```\n\n## Custom props on Date Picker\n\nUseful for adding IDs to assign labels.\n\n```react\nshowSource: true\nstate: { selectedDate: null }\n---\n<div>\n\t<label htmlFor="date-picker-input">The selected date is {dateFunctions.format(state.selectedDate, \'MM-dd-yyyy\')}</label>\n\t<DatePickerInput\n\t\tid="date-picker-input"\n\t\tdefaultSelectedDate={state.selectedDate || new Date()}\n\t\tonChange={(date) => setState({ selectedDate: date })}\n\t\tdateFunctions={dateFunctions}\n\t\tparseUserDateString={parseUserDateString}\n\t\tvalidate={() => true}\n\t\tplacement={"left-start"}\n\t/>\n</div>\n```\n'}});
//# sourceMappingURL=58.a4780e04.chunk.js.map