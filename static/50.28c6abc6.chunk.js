webpackJsonp([50],{2165:function(e,n,t){var o=t(0),r=t(94),a=t(460).PageRenderer;a.__esModule&&(a=a.default);var u=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(2240)}},componentWillMount:function(){},render:function(){return o.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});u.__catalog_loader__=!0,e.exports=u},2240:function(e,n){e.exports='## Dropdown\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<DropdownDemo>\n\t<Dropdown isOpen={state.isOpen} onToggleMenu={() => setState({ isOpen: !state.isOpen })}>\n\t\t<DropdownToggle variant="primary" size="medium">Show a Dropdown!</DropdownToggle>\n\t\t<DropdownMenu>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 1")}>Menu Item 1</MenuItem>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 2")}>Menu Item 2</MenuItem>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 3")}>Menu Item 3</MenuItem>\n\t\t</DropdownMenu>\n\t</Dropdown>\n</DropdownDemo>\n```\n\n## Dropdown Menu Items\n\n```react\nshowSource: true\nstate: { isOpen: false, isChecked: false }\n---\n<DropdownDemo>\n\t<Dropdown isOpen={state.isOpen} onToggleMenu={() => setState({ isOpen: !state.isOpen })}>\n\t\t<DropdownToggle variant="primary" size="medium">Show a Dropdown!</DropdownToggle>\n\t\t<DropdownMenu>\n\t\t\t<h3>Dropdown</h3>\n\t\t\t<MenuSeparator />\n\t\t\t<MenuItem onClick={() => alert("Menu Item 1")}>Menu Item 1</MenuItem>\n\t\t\t<MenuItem disabled onClick={() => alert("Menu Item 2")}>Menu Item 2</MenuItem>\n\t\t\t<MenuCheckbox onClick={() => setState({ isChecked: !state.isChecked })} isChecked={state.isChecked}>Menu Checkbox</MenuCheckbox>\n\t\t</DropdownMenu>\n\t</Dropdown>\n</DropdownDemo>\n```\n\n## Style Variations\n\n```react\nshowSource: true\nstate: { isOpen: false, isChecked: false }\n---\n<DropdownDemo>\n\t<Dropdown\n\t\ttheme={{ hoverBackgroundColor: \'plum\', checkboxPrimary: \'darkslateblue\', checkboxBorder: \'purple\' }}\n\t\tstyleOverrides={{ fontSize: \'14px\', padding: \'4px\' }}\n\t\tisOpen={state.isOpen}\n\t\tonToggleMenu={() => setState({ isOpen: !state.isOpen })}\n\t>\n\t\t<DropdownToggle variant="primary" size="medium">Show a Dropdown!</DropdownToggle>\n\t\t<DropdownMenu>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 1")}>Menu Item 1</MenuItem>\n\t\t\t<MenuCheckbox onClick={() => setState({ isChecked: !state.isChecked })} isChecked={state.isChecked}>Menu Checkbox</MenuCheckbox>\n\t\t</DropdownMenu>\n\t</Dropdown>\n</DropdownDemo>\n```\n\n## Using custom toggle component\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<DropdownDemo>\n\t<Dropdown isOpen={state.isOpen} onToggleMenu={() => setState({ isOpen: !state.isOpen })}>\n\t\t<DropdownToggle>\n\t\t\t{({ref, onKeyDown, onClick, ariaProps}) =>\n\t\t\t\t<Button variant="primary" size="medium" ref={ref} onKeyDown={onKeyDown} onClick={onClick} {...ariaProps}>Show a Dropdown!</Button>}\n\t\t</DropdownToggle>\n\t\t<DropdownMenu>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 1")}>Menu Item 1</MenuItem>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 2")}>Menu Item 2</MenuItem>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 3")}>Menu Item 3</MenuItem>\n\t\t</DropdownMenu>\n\t</Dropdown>\n</DropdownDemo>\n```\n\n## Disable Item\n\n```react\nshowSource: true\nstate: { isOpen: false }\n---\n<DropdownDemo>\n\t<Dropdown isOpen={state.isOpen} onToggleMenu={() => setState({ isOpen: !state.isOpen })}>\n\t\t<DropdownToggle variant="primary" size="medium">Show a Dropdown!</DropdownToggle>\n\t\t<DropdownMenu>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 1")} disabled>Menu Item 1</MenuItem>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 2")}>Menu Item 2</MenuItem>\n\t\t\t<MenuItem onClick={() => alert("Menu Item 3")}>Menu Item 3</MenuItem>\n\t\t</DropdownMenu>\n\t</Dropdown>\n</DropdownDemo>\n```\n'}});
//# sourceMappingURL=50.28c6abc6.chunk.js.map