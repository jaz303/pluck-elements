var pluck = require('..');
var test = require('tape');

window.init = function() {
    test("create template", function(assert) {

        var instance = pluck(document.querySelector('#foo'));

        assert.equal(instance.root.id, "foo");

        assert.equal(instance.list.nodeName.toLowerCase(), 'ul');

        assert.equal(instance.people.length, 3);

        assert.equal(instance.a.id, 'a');
        assert.equal(instance.b.id, 'b');
        assert.equal(instance.c.id, 'c');

        assert.equal(instance.people[0].id, 'a');
        assert.equal(instance.people[1].id, 'b');
        assert.equal(instance.people[2].id, 'c');

        assert.equal(instance.input.nodeName.toLowerCase(), 'input');
        assert.equal(instance.submit.nodeName.toLowerCase(), 'input');

        assert.end();

    });
}