//NOTE:
//please use jsdoc generate doclet file for cocos-2d-html5 first
//execute "node_modules/.bin/jsdoc.cmd" -c jsdoc_conf.json ../../cocos2d-js-v3.0-beta/frameworks/cocos2d-html5/ > cocos.doclet
var fs = require('fs');
var rootClass = 'cc.Node';
var docletFile = 'tools/cocos.doclet';
var outputFile = 'src/InspectElementConfig.js';
var meta = JSON.parse(fs.readFileSync(docletFile));
var family = {};
var total = meta.length;
var data, className, parent;
var classMap = {};

var typeMap = {
    'Number' : 'number',
    'Boolean' : 'boolean',
    'String' : 'string',
    'cc.Color' : 'color',
    'cc.Texture2D' : 'image',
    'cc.Point' : 'point',
    'cc.Size' : 'size',
};
//fiter all meta data
for (var i = 0; i < total; i++) {
    data = meta[i];
    if (data['longname'] == '' || data['kind'] != 'class') continue;

    className = data['longname'];
    parent = '';
    if (data['augments'] != undefined) parent = data['augments'][0];
    
    family[className] = parent;

    classMap[className] = data;
}

//add inherit can't refer from code
family['ccui.Node'] = 'cc.Node';
family['ccs.Node'] = 'cc.Node';
family['ccs.NodeRGBA'] = 'cc.NodeRGBA';
family['ccs.Sprite'] = 'cc.Sprite';
fs.writeFileSync('family.js', require('util').inspect(family));

//find all child of cc.Node
var inherit = {};
var parents;
for(var className in family) {
    parents = getAllParent(family, className);
    if (contains(parents, rootClass)) {
        inherit[className] = parents;
    }
}

//get every class properties
var classAttr = {};
var shortName;
for(var className in inherit) {
    shortName = classMap[className]['name'];
    classAttr[shortName] = getAllProperties(classMap, inherit, className);
}

//doc-code inconsistent fix
classAttr['Button']['titleColor'] = classAttr['Button']['titleFontColor'];
delete classAttr['Button']['titleFontColor'];
//fix end

fs.writeFileSync(outputFile, 'var InspectElementConfig = ' + require('util').inspect(classAttr) + ';');

function getChildClass(family, className) {
    if (family[className] == undefined) return [];
    var children = family[className];
    var ret = {};
    for(var i = 0; i < children.length; i++) {
        ret[children[i]] = getChildClass(family, children[i]);
    }
    return ret;
}

function getAllParent(family, className) {
    if (className == undefined) return [];
    var parent = family[className];
    if (parent == '') return [];
    var ret = [parent];
    ret = ret.concat(getAllParent(family, parent));
    return ret;
}

function contains(array, target) {
    for(var i = 0; i < array.length; i++) {
        if (array[i] === target) return true;
    }
    return false;
}

function mergeObject(obj1, obj2) {
    for(var key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}

function getProperties(classMap, className) {
    var meta = classMap[className];
    if (meta == undefined) return {};

    var properties = meta['properties'];
    if (properties == undefined) return {};

    var ret = {};

    var property, type;
    for(var i = 0; i < properties.length; i++) {
        property = properties[i];
        type = property['type']['names'][0];
        name = property['name'];

        if (typeMap[type] == undefined) continue;

        ret[name] = {
            desc: property['description'],
            type: type,
            value: property['defaultvalue']
        }
        if (/^<@readonly>/.test(property['description'])) {
            ret[name]['readonly'] = true;
        }

        if (ret[name]['value'] === null) {
            if (type === 'Number') ret[name]['value'] = 0;
            if (type === 'Boolean') ret[name]['value'] = false;
            if (type === 'String') ret[name]['value'] = '';
        }

        ret[name]['type'] = typeMap[type];
    }
    return ret;
}

function getAllProperties(classMap, inherit, className) {
    var parents = inherit[className];
    var all = getProperties(classMap, className);
    var properties;
    for(var i = 0; i < parents.length; i++) {
        properties = getProperties(classMap, parents[i]);
        all = mergeObject(all, properties);
    }
    return all;
}
