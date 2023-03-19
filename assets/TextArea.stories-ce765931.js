var s=Object.defineProperty;var t=(e,n)=>s(e,"name",{value:n,configurable:!0});import{b as r,B as l,T as i}from"./index-c3e92b24.js";import{a as c,j as o}from"./jsx-runtime-da4cfb3b.js";import"./index-34e51894.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-75cd1920.js";import"./index-c12db9c2.js";const y={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@stackup-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
} as Meta<TextAreaProps>

const Template: Story<TextAreaProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Observations</Text>
      <TextArea {...args} />
    </Box>
  )
}

export const Default = Template.bind({})

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true,
}
`,locationsMap:{default:{startLoc:{col:39,line:13},endLoc:{col:1,line:20},startBody:{col:39,line:13},endBody:{col:1,line:20}},disabled:{startLoc:{col:39,line:13},endLoc:{col:1,line:20},startBody:{col:39,line:13},endBody:{col:1,line:20}}}}},title:"Form/TextArea",component:r,args:{placeholder:"Placeholder",disabled:!1}},a=t(e=>c(l,{css:{display:"flex",flexDirection:"column",gap:"$2"},children:[o(i,{size:"sm",children:"Observations"}),o(r,{...e})]}),"Template"),A=a.bind({}),d=a.bind({});d.args={disabled:!0};const B=["Default","Disabled"];export{A as Default,d as Disabled,B as __namedExportsOrder,y as default};
//# sourceMappingURL=TextArea.stories-ce765931.js.map
