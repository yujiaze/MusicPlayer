## Install Grunt

`npm install -g grunt-cli`

Use TaoBao NPM Ghost cuz I failed to access npm.org

`npm config set registry https://registry.npm.taobao.org`

or `npm --registry https://registry.npm.taobao.org info grunt-cli`,this is only valid for once

or edit `~/.npmrc` -> `registry = https://registry.npm.taobao.org`

## Install Grunt in current repo

`npm install grunt --save-dev`

`npm install grunt-contrib-connect --save-dev` 

Tips:You can install one more packages for once

## Configure it

`touch Gruntfile.js`

## Input upload folder or several files

`<input id="music-list" type="file" accept="audio/*" webkitdirectory directory multiple />`

`directory` and `multiple`

## After uploading files, I can't get the file path for security reasons

but I got this: `URL.createObjectURL()` and `URL.revokeObjectURL()` in HTML5 File API

## So begin to organize my code

I wrote app.js first,like a view in Backbone,initial some DOM var for app and event binding

Then I wrote music-list and music-model, actually these works were done in the same time
