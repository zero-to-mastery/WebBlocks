# Search Box Component 🔎

Reusable search box component with autocomplete functionality to use across your website! 🎉

# Demo 🎬

![search-box-demo](https://user-images.githubusercontent.com/46619361/138612518-d0ff38c0-2c32-4dbe-bab1-d6c4ffef45d1.gif)


# Usage / Quick Start 🏃💨

```html
<!-- default search box -->
<search-box />
```

# Properties 📄

| Attribute  | Description                   | Type      | Default     | Possible values |
| ---------  | ----------------------------- | --------- | ----------- | --------------- |
| `queryURL` | Search query endpoint URL.    | `string`  | `/`         | Valid url       |
| `method`   | Request method.               | `string`  | `GET`       | Valid request method |
| `maxLength`| Maximum query string length.  | `number`  | `2048`      | Positive integer |
| `autocomplete` | Enable/disable autocomplete. | `boolean` | `true`    | `true` or `false` |
| `placeholder` | The placeholder text in input. | `string` | `empty string`  | Any string |
| `rectangle` | Remove border radius. | `boolean` | `false` | `true` or `false` |
| `dark` | Enable dark theme. | `boolean` | `false` | `true` or `false` |
| `size` | Determine the overall size of the component. | `string` | `md` | `sm` or `md` or `lg` |

_Built with [StencilJS](https://stenciljs.com/) by the [ZTM](https://zerotomastery.io/) community_

# TODOs 📝
Some attributes that has no functionalities are `rectangle` and `dark`. These two attributes will be added soon.

- [ ] Remove border radius by setting attribute `rectangle` to `true`.
- [ ] Change to dark theme by setting attribute `dark` to `true`.

# NOTES 📓
The current search box component uses a form to send a request to the provided URL. Although it should work for most cases, it is not ideal. If this component has to be highly reusable, then passing a callback function with the logic to do a http request for a search would be much better. However, I am limited by my knowledge on how to implement such functionality in a clean way that can take asynchronous and synchronous callbacks.
