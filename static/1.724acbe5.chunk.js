webpackJsonp([1],{2198:function(a,t,n){var e=n(0),b=n(94),T=n(460).PageRenderer;T.__esModule&&(T=T.default);var r=b({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2273)}},componentWillMount:function(){},render:function(){return e.createElement(T,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,a.exports=r},2273:function(a,t){a.exports='## Component Variations\n\nA tab controller with screen reader and keyboard navigation support\n\n```react\nshowSource: true\n---\n<TabDemo>\n\t<TabManager>\n\t\t<TabList>\n\t\t\t<Tab>First Tab</Tab>\n\t\t\t<Tab>Second Tab</Tab>\n\t\t\t<Tab>Third Tab</Tab>\n\t\t\t<Tab disabled>Disabled Tab</Tab>\n\t\t</TabList>\n\t\t<TabPanels>\n\t\t\t<TabPanel>First Tab!</TabPanel>\n\t\t\t<TabPanel>Second Tab!</TabPanel>\n\t\t\t<TabPanel>Third Tab!</TabPanel>\n\t\t\t<TabPanel>Disabled Tab!</TabPanel>\n\t\t</TabPanels>\n\t</TabManager>\n</TabDemo>\n```\n\nSupports modal (default) and page variants\n\n```react\nshowSource: true\n---\n<TabDemo>\n\t<TabManager variant="page">\n\t\t<TabList>\n\t\t\t<Tab>First Tab</Tab>\n\t\t\t<Tab>Second Tab</Tab>\n\t\t\t<Tab>Third Tab</Tab>\n\t\t\t<Tab disabled>Disabled Tab</Tab>\n\t\t</TabList>\n\t\t<TabPanels>\n\t\t\t<TabPanel>First Tab!</TabPanel>\n\t\t\t<TabPanel>Second Tab!</TabPanel>\n\t\t\t<TabPanel>Third Tab!</TabPanel>\n\t\t\t<TabPanel>Disabled Tab!</TabPanel>\n\t\t</TabPanels>\n\t</TabManager>\n</TabDemo>\n```\n\n### Style Variations\n\nBoth the Tab and TabPanel components extend the Box component and accept styled-system props.\n\n```react\nshowSource: true\n---\n<TabDemo>\n\t<TabManager>\n\t\t<TabList>\n\t\t\t<Tab width="200px">First Tab</Tab>\n\t\t\t<Tab disabled>Disabled Tab</Tab>\n\t\t\t<Tab>Third Tab</Tab>\n\t\t</TabList>\n\t\t<TabPanels>\n\t\t\t<TabPanel backgroundColor="gray4" padding={5}>First Tab!</TabPanel>\n\t\t\t<TabPanel>Second Tab!</TabPanel>\n\t\t\t<TabPanel>Third Tab!</TabPanel>\n\t\t</TabPanels>\n\t</TabManager>\n</TabDemo>\n```\n\n### Controlled\n\n```react\nshowSource: true\nstate: { currentTab: 0 }\n---\n<TabDemo spacing={5}>\n\t<Button variant="primary" size="medium" onClick={() => setState({ currentTab: 0 })}>First tab</Button>\n\t<Paragraph>The current tab index is {state.currentTab}</Paragraph>\n\t<div>\n\t\t<TabManager selectedTab={state.currentTab} onSelectedTabChange={tabIndex => setState({ currentTab: tabIndex })}>\n\t\t\t<TabList>\n\t\t\t\t<Tab>First Tab</Tab>\n\t\t\t\t<Tab>Second Tab</Tab>\n\t\t\t\t<Tab>Third Tab</Tab>\n\t\t\t</TabList>\n\t\t\t<TabPanels>\n\t\t\t\t<TabPanel>First Tab!</TabPanel>\n\t\t\t\t<TabPanel>Second Tab!</TabPanel>\n\t\t\t\t<TabPanel>Third Tab!</TabPanel>\n\t\t\t</TabPanels>\n\t\t</TabManager>\n\t</div>\n</TabDemo>\n```\n'}});
//# sourceMappingURL=1.724acbe5.chunk.js.map