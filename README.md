ngScopeStorage
===

<div>
<p> <img height="50" width="50" src="https://raw.githubusercontent.com/rannn505/ngScopeStorage/master/assets/ngScopeStorage.png"> An AngularJS module that binds $scope to the browser storage </p>
</div>

[![Version npm](https://img.shields.io/npm/v/ngScopeStorage.svg?style=flat-square)](https://www.npmjs.com/package/ngScopeStorage)[![NPM Downloads](https://img.shields.io/npm/dt/ngScopeStorage.svg?style=flat-square)](https://www.npmjs.com/package/ngScopeStorage)[![Dependencies](https://img.shields.io/david/rannn505/ngScopeStorage.svg?style=flat-square)](https://david-dm.org/rannn505/ngScopeStorage)


## Installation

- NPM:
```bash
$ npm install ngscopestorage
```
- CDN:
*Coming Soon*
- Download/Clone this repo and include `ngscopestorage.min.js` in your project
``` html
<script src="Path/To/ngscopestorage.min.js"></script>
```

## What's ngScopeStorage?

ngScopeStorage produce a 3 way data-binding by extending $scope's bindings ability.
In other words this module allow $scope to bind his properties to local/session storage.
View <-- $scope --> BrowserStorage (local/session storage)

## Quick start

```javascript
angular.module('app', ['ngScopeStorage'])
    .controller('ctrl', function($scope,$vms){
        $vms.config({scope:$scope, ctrlName:'exampleCtrl', prefix:'exampleApp'});

        $vms.variableToBind = 'Im in $scope and in BrowserStorage';
    });
```

Now you can Use it:
- In your View with {{ }}:
``` html
<span>{{variableToBind}}</span>
```
- And read it from BrowserStorage with $vms.prefix:
```javascript
localStorage.getItem($vms.prefix.concat("variableToBind")));
```

## Setting up

- Install ngScopeStorage
- Include it in your app
`angular.module('app', ['ngScopeStorage'])`
- Inject `$vms` provider to your controller
`controller('ctrl', ['$scope','$vms', function($scope,$vms){})`
- Use `$vms.config` to feed the module with some necessary configurations
*NOTE:* you must call this function in order the module to work properly.
`$vms.config` function takes an JSON object with the following properties as an argument:
    - **scope** - The $scope of the controller from which you use the module (Object) *required*
    - **ctrlName** - The name of the controller from which you use the module (String) (Default:"http://localhost") *required*
    - **prefix** - A Unique name that will be saved alongside with your variables in the storage (String) (Default:"vms") *optional*
    - **storageType** - The storage in which your variables will be saved (localStorage/sessionStorage) (String) (Default:"localStorage") *optional*
- Attach any properties that you want to `$vms`
- Enjoy :)


## License

  [MIT](LICENSE)

