var h=Object.defineProperty;var s=(t,l)=>h(t,"name",{value:l,configurable:!0});import{I as u,r as f,B as a,T as d,c as r}from"./index-c3e92b24.js";import{a as n,F as i,j as e}from"./jsx-runtime-da4cfb3b.js";import{r as m}from"./index-34e51894.js";import"./index-75cd1920.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-c12db9c2.js";var o=new Map;o.set("bold",function(t){return n(i,{children:[e("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("circle",{cx:"128",cy:"152",r:"16"})]})});o.set("duotone",function(t){return n(i,{children:[e("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),e("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("circle",{cx:"128",cy:"152",r:"12"})]})});o.set("fill",function(){return e(i,{children:e("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"})})});o.set("light",function(t){return n(i,{children:[e("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("circle",{cx:"128",cy:"152",r:"10"})]})});o.set("thin",function(t){return n(i,{children:[e("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("circle",{cx:"128",cy:"152",r:"8"})]})});o.set("regular",function(t){return n(i,{children:[e("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("circle",{cx:"128",cy:"152",r:"12"})]})});var k=s(function(l,p){return f(l,p,o)},"renderPath"),c=m.forwardRef(function(t,l){return e(u,{...Object.assign({ref:l},t,{renderPath:k})})});c.displayName="Lock";const y=c,D={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import { Box, Text, TextField, TextFieldInputProps } from '@stackup-ui/react'
import { Lock } from 'phosphor-react'

export default {
  title: 'Form/TextField',
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
} as Meta<TextFieldInputProps>

const PrimaryTemplate: Story<TextFieldInputProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Email address</Text>
      <TextField.Root>
        <TextField.Input {...args} />
      </TextField.Root>
    </Box>
  )
}

export const Default = PrimaryTemplate.bind({})

export const Disabled = PrimaryTemplate.bind({})

Disabled.args = {
  disabled: true,
}

const SecondaryTemplate: Story<TextFieldInputProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Email address</Text>
      <TextField.Root>
        <TextField.Icon>
          <Lock weight="bold" />
        </TextField.Icon>
        <TextField.Input {...args} />
      </TextField.Root>
    </Box>
  )
}

export const WithLeftIcon = SecondaryTemplate.bind({})

const TertiaryTemplate: Story<TextFieldInputProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Email address</Text>
      <TextField.Root as="label">
        <TextField.Prefix>cal.com/</TextField.Prefix>
        <TextField.Input {...args} />
      </TextField.Root>
    </Box>
  )
}

export const WithLeftPrefix = TertiaryTemplate.bind({})

WithLeftPrefix.args = {
  placeholder: 'your-username',
}
`,locationsMap:{default:{startLoc:{col:52,line:13},endLoc:{col:1,line:22},startBody:{col:52,line:13},endBody:{col:1,line:22}},disabled:{startLoc:{col:52,line:13},endLoc:{col:1,line:22},startBody:{col:52,line:13},endBody:{col:1,line:22}},"with-left-icon":{startLoc:{col:54,line:32},endLoc:{col:1,line:44},startBody:{col:54,line:32},endBody:{col:1,line:44}},"with-left-prefix":{startLoc:{col:53,line:48},endLoc:{col:1,line:58},startBody:{col:53,line:48},endBody:{col:1,line:58}}}}},title:"Form/TextField",args:{placeholder:"Placeholder",disabled:!1}},x=s(t=>n(a,{css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e(d,{size:"sm",children:"Email address"}),e(r.Root,{children:e(r.Input,{...t})})]}),"PrimaryTemplate"),w=x.bind({}),T=x.bind({});T.args={disabled:!0};const L=s(t=>n(a,{css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e(d,{size:"sm",children:"Email address"}),n(r.Root,{children:[e(r.Icon,{children:e(y,{weight:"bold"})}),e(r.Input,{...t})]})]}),"SecondaryTemplate"),M=L.bind({}),g=s(t=>n(a,{css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e(d,{size:"sm",children:"Email address"}),n(r.Root,{as:"label",children:[e(r.Prefix,{children:"cal.com/"}),e(r.Input,{...t})]})]}),"TertiaryTemplate"),F=g.bind({});F.args={placeholder:"your-username"};const R=["Default","Disabled","WithLeftIcon","WithLeftPrefix"];export{w as Default,T as Disabled,M as WithLeftIcon,F as WithLeftPrefix,R as __namedExportsOrder,D as default};
//# sourceMappingURL=TextField.stories-43e702fc.js.map
