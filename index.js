module.exports = pluck;

var DEFAULT_ATTR    = 'data-pluck';
var IDENTITY        = function(n) { return n; }

function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function pluck(root, attr, map) {

    attr = attr || DEFAULT_ATTR;
    map = map || IDENTITY;

    var plucked = {};

    function _addOne(k, el) {
        if (k.substr(-2, 2) === '[]') {
            k = k.slice(0, -2);
            if (!(k in plucked))
                plucked[k] = [];
            if (!Array.isArray(plucked[k]))
                throw new Error("type mismatch - existing element for plucked key '" + k + "' is not an array");
            plucked[k].push(map(el));
        } else {
            plucked[k] = map(el);
        }
    }

    var els = root.querySelectorAll('[' + attr + ']');
    for (var i = 0; i < els.length; ++i) {
        var el = els[i];
        var key = el.getAttribute(attr);
        if (key.indexOf(' ') >= 0) {
            trim(key).split(/\s+/).forEach(function(k) {
                _addOne(k, el);
            });
        } else {
            _addOne(key, el);
        }
    }

    plucked.root = map(root);

    return plucked;

}