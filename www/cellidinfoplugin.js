/**
 * @constructor
 */
var SimLocationLoader = function (require, exports, module) {
    var exec = require("cordova/exec");
    
	var cellidinfoplugin = function(){};

	cellidinfoplugin.prototype.getCellInfo = function(successCallback, failure){
		cordova.exec(successCallback, failure, "CellIdInfoPlugin", "getCellInfo", []);
	};

	cellidinfoplugin.prototype.getGeoCords = function(successCallback, failure){
	  cordova.exec(successGeoCords, failure, "CellIdInfoPlugin", "getGeoCords", []);
	};

	// This callback function will be executed depending on device location i.e indoor or outdoor and may take 30 seconds to 20 minutes.
	function successGeoCords(result){
		alert(JSON.stringify(result));
	}

	// Plug into Cordova
	cordova.addConstructor(function() {

	    if (!window.Cordova) {
	        window.Cordova = cordova;
	    };

	    if(!window.plugins) window.plugins = {};
	    window.plugins.CellIdInfoPlugin = new CellIdInfoPlugin();
	    return window.plugins.CellIdInfoPlugin;
	});
};
SimLocationLoader(require, exports, module);

cordova.define("cordova/plugin/cellidinfoplugin", SimLocationLoader);