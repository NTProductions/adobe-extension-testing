(function () {
 'use strict';
 var extPath;
 extPath = location.href;
	if(getOS() == "MAC") {
		extPath = extPath.substring(7, extPath.length - 11);
	}
	if(getOS() == "WIN") {
		extPath = extPath.substring(8, extPath.length - 11);
	}

	console.log("Start");
	console.log(extPath);

 }());

function goIntoJSX() {
	
	}

function getOS() {
 		var userAgent = window.navigator.userAgent,
 		platform = window.navigator.platform,
 		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
 		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
 		os = null;

 		if(macosPlatforms.indexOf(platform) != -1) {
 			os = "MAC";
 		} else if(windowsPlatforms.indexOf(platform) != -1) {
 			os = "WIN";
 		}
 		return os;
 	}