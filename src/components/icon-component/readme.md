# Icon-component

## Overview

Developing an icon component with necessary styles using StencilJS. Here instead of icons used as images, their properties are captured for constructing `'<svg>'` and `'<path>'` tags which are inserted into the shadow dom of the component. This provide us with a flexibility to customise the icon (like color, hovercolor etc).

### Icons that can be currently used

- amazon
- apple
- facebook
- twitter
- whatsapp
- twitch
- instagram
- microsoft
- google
- google-play
- github
- linkedin
- angle down/left/right/up
- arrow down/left/right/up
- close
- settings
- warning
- download
- home

and much more (Do refer to the icons-list file for more icons)

### Properties required for using the component

#### Required

- name : name of the icon to be used (Eg: if name is entered as amazon, the icon for it is displayed)
- label : defaults to `''` which generates a decorative icon. When value is provided, a button with the icon is generated

#### Optional

- size : defaults to 's'. Other values that can be used are `'md'`,`'l'`,`'xl'`
- background : background color for the icon. Defaults to `'none'`
- primarycolor : color for the icon. Defaults to `'#000'`
- bordersize : thickness of the border. Defaults to `''`
- bordercolor : color for the border. Default is `''`
- bordertype : type of the border required. Values that can be passed are `'square'` and `'circle'`. Default value is `'none'`
- hovercolorbg : background color for the icon during the hover state. Default is `'none'`
- hovercolorprimary : foreground color for the icon during the hover state. Default is `'none'`
- tooltip : Values that can be passed are `'yes'` and `'no'`. If the value is `'yes'`, a tooltip is generated with the context being the name of the icon. Default value is `'no'`
- tooltippos : `'top'` and `'bottom'` are 2 positions for the tooltip. Default is `'top'`.

### Example

Following is an example to use all the properties and constructing an icon component

```html
<icon-component
  name="github"
  label="social-icon"
  primarycolor="#000"
  bordersize="2px"
  bordercolor="#000"
  bordertype="circle"
  hovercolorbg="#000"
  hovercolorprimary="#fff"
  tooltip="yes"
  tooltippos="top"
/>
```

<!-- Auto Generated Below -->

## Properties

| Property            | Attribute           | Description | Type     | Default  |
| ------------------- | ------------------- | ----------- | -------- | -------- |
| `background`        | `background`        |             | `string` | `'none'` |
| `bordercolor`       | `bordercolor`       |             | `string` | `''`     |
| `bordersize`        | `bordersize`        |             | `string` | `''`     |
| `bordertype`        | `bordertype`        |             | `string` | `'none'` |
| `hovercolorbg`      | `hovercolorbg`      |             | `string` | `''`     |
| `hovercolorprimary` | `hovercolorprimary` |             | `string` | `''`     |
| `label`             | `label`             |             | `string` | `''`     |
| `name`              | `name`              |             | `string` | `''`     |
| `primarycolor`      | `primarycolor`      |             | `string` | `'#000'` |
| `size`              | `size`              |             | `string` | `'s'`    |
| `tooltip`           | `tooltip`           |             | `string` | `'no'`   |
| `tooltippos`        | `tooltippos`        |             | `string` | `'top'`  |

---

_Built with [StencilJS](https://stenciljs.com/) by the [ZTM](https://zerotomastery.io/) community_
