#include "json2.js"

function getLayerNames(arg) {
    var layerNames = [];
    var comp = app.project.activeItem;
    for(var i = 1; i <= comp.numLayers; i++) {
        layerNames.push(comp.layer(i).name);
        }

    return JSON.stringify(layerNames);
    }

function osCheck() {
        var os = $.os;
        var match = os.indexOf("Windows");
        if(match != (-1)) {
                var userOS = "PC";
            } else {
                 var userOS = "MAC";
                }
            return userOS;
    }