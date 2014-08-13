# pluck-elements

Given a DOM node, pluck child elements into an object structure based on the value of a named attribute.

Given this:

```html
<div id='foo'>
  <ul class='people' data-pluck='list'>
    <li data-pluck='people[]'>Jason</li>
    <li data-pluck='people[]'>Jim</li>
    <li data-pluck='people[]'>John</li>
  </ul>
  <input type='text' data-pluck='input'>
  <input type='button' data-pluck='submit'>
</div>
```

It produces this (wherein `#<...>` denotes a real DOM element):

```
{
  root: #<div#foo>,
  list: #<ul.people>,
  people: [
    #<li>,
    #<li>,
    #<li>
  ],
  input: #<input[type=text]>,
  submit: #<input[type=button]>
}
```

## Installation

### Browserify

Get it:

```shell
$ npm install pluck-elements
```

Require it:

```javascript
var pluckElements = require('pluck-elements');
```

### UMD

Copy and paste either `build/pluck-elements.js` or `build/pluck-elements.min.js` into your project.

## API

#### `pluck(el, attr, map)`

Converts `html` into a DOM node and plucks all nested elements with the `data-pluck` attribute, inserting them into a dictionary keyed by said value of `[data-pluck]`.

`[data-pluck]` may contain a list of whitespace separated values; in this case a key for each distinct value will be created in the output dictionary. Where a key is suffixed with `[]`, e.g. `people[]`, multiple plucked elements sharing the same key will be collected into an array.

Returns the dictionary of plucked elements, including an additional `root` entry for the root element.

Supported `options`:

  * `attribute`: name of attribute used to denote elements to be plucked into the returned structure. Defaults to `data-pluck`.
  * `mapNode`: a callback that may be used to map each plucked element. Defaults to the identity.

## Copyright &amp; License

&copy; 2014 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.