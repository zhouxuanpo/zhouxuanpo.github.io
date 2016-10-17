# marked

#### 本文用于markdown不能正常显示时，所用的包和语法。

`npm install marked --save`

## Usage

### Minimal usage:

```js
var marked = require('marked');
console.log(marked('I am using __markdown__.'));
// Outputs: <p>I am using <strong>markdown</strong>.</p>
 ```


## highlight

需要引入highlight包的。否则显示的md代码不是高亮。

-   `npm install highlight.js --save`

- 在app.js粘入以下代码

```js
marked.setOptions({
          highlight: function (code) {
              return hljs.highlightAuto(code).value;
          }
      });
```

- 然后去node_modules里找highlight.js   找到里面的default.css粘过来， 在index.js里import一下。
