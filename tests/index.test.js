var Hookie = require('../dist/index.js');
var test = require('tape');

test('hook function is called with proper context and arguments', function(t) {
  t.plan(2);

  var test = {
  	slap: Hookie('slap', function (name) {
      return [this, name];
    })
  };

  t.equal(test.slap('brian')[0].slap !== undefined, true);
  t.equal(test.slap('brian')[1], 'brian');
});

test('before and after hooks -- standard', function(t) {
  t.plan(2);

  var counter = 0;
  var test = {
  	slap: Hookie('slap', function (name) { return [this, name]; }),
  	beforeSlap: function () { counter++; },
  	afterSlap: function () { counter++; }
  };

  t.equal(counter, 0);
  test.slap('howard');
  t.equal(counter, 2);
});

test('before and after hooks -- { type: "postfix" }', function(t) {
  t.plan(2);

  var counter = 0;
  var test = {
  	slap: Hookie('slap', function (name) { return [this, name]; }, { type: 'postfix' }),
  	slapBefore: function () { counter++; },
  	slapAfter: function () { counter++; }
  };

  t.equal(counter, 0);
  test.slap('hank');
  t.equal(counter, 2);
});

test('before and after hooks -- { capitalize: false }', function(t) {
  t.plan(2);

  var counter = 0;
  var test = {
  	slap: Hookie('slap', function (name) { return [this, name]; }, { capitalize: false }),
  	beforeslap: function () { counter++; }
  };

  t.equal(counter, 0);
  test.slap('hank');
  t.equal(counter, 1);
});


test('before and after hooks -- { before: "pre" }', function(t) {
  t.plan(2);

  var counter = 0;
  var test = {
  	slap: Hookie('slap', function (name) { return [this, name]; }, { before: 'pre' }),
  	preSlap: function () { counter++; }
  };

  t.equal(counter, 0);
  test.slap('hank');
  t.equal(counter, 1);
});

test('before and after hooks -- { after: "post" }', function(t) {
  t.plan(2);

  var counter = 0;
  var test = {
  	slap: Hookie('slap', function (name) { return [this, name]; }, { after: 'post' }),
  	postSlap: function () { counter++; }
  };

  t.equal(counter, 0);
  test.slap('hank');
  t.equal(counter, 1);
});
