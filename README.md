# scp-deploy

An upload tool provided to developers using ssh

----



![](https://zobor.github.io/scp-deploy/imgs/npm.svg)   ![](https://zobor.github.io/scp-deploy/imgs/node.svg)


## Install
```shell
$ npm install scp-deploy --save-dev
```

## API
```js
let deploy = require('scp-deploy')
deploy({
    host: '',
    port: 22,
    username: '',
    password: '',
    src: [],
    path: ''
}).then((info)=>{
	// do sth.
}).catch((err)=>{
    // handler error
})
```

## deploy([options])

* `host`  **String** server ip

* `port`  **Number** server ssh port

* `username` **String** server ssh username

* `password`  **String** server ssh password

* `path`  **String** server path to save files

* `src `  **String/Array** local file list

* `lastmodify` **String/Object** last modify time must over this deadline



## Licence
MIT