# Hookie

Simple function lifecycle hooks.  Creates functions that call named hooks before and after each function calls.

# Hookie(name, func, options)

Creates a wrapped function that will call hooks before and after it is called.

## Example

```js
var person = {
  beforeSlap: function () { log('before') },

  slap: Hookie('slap', function (name) {
    log('slap!')
  }),

  afterSlap: function () { log('after') }
}

person.slap()
// before
// slap!
// after
```

## Options

### type

_default value:_ __'Prefix'__
_Possible values:_ __'prefix'__, __'postfix'__

Changes where hook term is placed in terms of the hook name.

```js
Hookie(name, func, { type: 'postfix' })
```

### capitalize

_default value:_ __true__
_Possible values:_ __true__, __false__

Switch that decides whether callback functions have a captalized naming scheme.

```js
Hookie(name, func, { capitalize: true })
```

### before

_default value:_ __'before'__

Defines the term used when building the before-hook name.

```js
Hookie(name, func, { before: 'pre' })
```

### after

_default value:_ __'after'__

Defines the term used when building the after-hook name.

```js
Hookie(name, func, { after: 'post' })
```
