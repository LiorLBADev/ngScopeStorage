/**
 * An Angular module that binds $scope to the browser storage.
 * @name ngScopeStorage
 * @version v1.0.0 - 03-10-2015
 * @link https://github.com/rannn505/ngScopeStorage
 * @author rannn505 <rannn505@outlook.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function (window, angular) {
    'use strict';

    const MODULE_NAME = 'ngScopeStorage';

    angular.module('ngScopeStorage', []);


    angular.module('ngScopeStorage')
    
    .provider('$vms', _vms);
    
    /*
    *_vms is the provider's function
    */
    function _vms () {

        /*required*/
        var _scope = null;
        var _ctrlName = null;

        /*optional*/
        var _prefix = 'vms';
        var _storageType = 'localStorage';

        /*module_vars*/
        var _storage = window[_storageType];

        /*setters*/
        
        set_scope.$injector=["scope"];
        function set_scope(scope) {
            if (typeof scope !== 'object') {
                throw new TypeError( MODULE_NAME + '- set_scope must get a object.');
            }
            if (!scope && !angular.isDefined(scope)){
                throw new SyntaxError( MODULE_NAME + '- set_scope must get a value');
            }
            _scope = scope;
        }
        
        set_ctrlName.$injector=["ctrl"];
        function set_ctrlName(ctrl) {
            if (typeof ctrl !== 'string') {
                throw new TypeError( MODULE_NAME + '- set_ctrlName must get a string.');
            }
            if (!ctrl && !angular.isDefined(ctrl)){
                throw new SyntaxError( MODULE_NAME + '- set_ctrlName must get a value');
            }
            _ctrlName = ctrl;
        }

        set_prefix.$injector=["pre"];
        function set_prefix(pre) {
            if (typeof pre !== 'string') {
                throw new TypeError( MODULE_NAME + '- set_prefix must get a string.');
            }
            if (pre === ''){
                throw new SyntaxError( MODULE_NAME + '- set_prefix must`nt get an empty string');
            }
            _prefix = pre;
        }

        set_storageType.$injector=["st"];
        function set_storageType(st) {
            if (typeof st !== 'string') {
                throw new TypeError( MODULE_NAME + '- set_storageType must get a string.');
            }
            if (st === '' && st !== 'localstorage' && st !== 'sessionStorage'){
                throw new SyntaxError( MODULE_NAME + '- set_storageType must`nt get an empty string');
            }
            _storageType = st;
            _storage = window[_storageType];
        }

        /*cleaners*/
        clean_storage.$injector=["_storage"];
        function clean_storage(_storage){
            for (var e in _storage) {
                //console.log(e);
                if(e.indexOf(_prefix) != -1 || e.indexOf(_ctrlName)){
                    _storage.removeItem(e);
                }
            }
        }

        this.$get = function () {

            var _$vms = {};
            _$vms.config = vmConfig

            Object.observe(_$vms,bind);

            return _$vms;
            
            /*$Get-Helpers*/
            vmConfig.$injector=["settingObj"];
            function vmConfig(settingsObj){

                set_scope(settingsObj.scope);
                set_ctrlName(settingsObj.ctrlName);

                if(angular.isDefined(settingsObj.prefix)){set_prefix(settingsObj.prefix)}
                if(angular.isDefined(settingsObj.storageType)){set_storageType(settingsObj.storageType)}
                init();
        };
            
            init.$injector=[];
            function init(){
            clean_storage(_storage);
            _$vms.prefix =_prefix+':'+_ctrlName+'::';
        }

            bind.$injector=["keys"];
            function bind (keys){
        
                        keys.forEach(function (e) {
                            var name = e.name;
                            _scope[name] = e.object[name];
                            _storage.setItem(_prefix+':'+_ctrlName+'::'+name , _scope[name]);
                        });
                        _scope.$apply();
                    }
        };
        
        
        
            }
})(window, window.angular);


