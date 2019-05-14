---
title: Dictionary (draft)
date: '2018-11-26'
---

# Dictionary

5 types of primitives

- boolean
- number
- string
- null //typeof = object, but it should be null
- undefined

#Test repl

<iframe height="1000px" width="100%" src="https://repl.it/@martinezi/bubble-sort-exercise-prompt?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

#Declaring Variables and Hoisting

```javascript
var f

global.f
```

Both works but var has an advantage of clearly conveying the effect on program's scope. To avoid errors always declare locally.

When a variable is declared, it is hoisted. The reference to the variable is bound to the nearest scope, in which the variable was declared.

No block scope until es2016
let is block scoped.
#Closure
#Scope
#Functions
**Function declaration** defines a function and binds it to a variable in the _current_ scope.

[Function Expressions vs Function Declarations](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)

```javascript
function double(x) {
  return x * 2
}
```

Above example could be turned into a **named function expression** if it is bound to a variable:

```javascript
var f = function double(x) {
  return x * 2
}
```

In the first example function is declared as **_double_** in the function (global scope, unless imported into another fucntion). Function declaration is hoisted.

In the latter example, function is bound to the variable **_f_**. Declared variable is hoisted, but function expression is not.

We can also write it as **anonymous function expression**:

```javascript
var f = function(x) {
  return x * 2
}
```

**Named vs Anonymous function expression**

Named
Both of the functions are only available in the function scope, so in order to use them recursively, they can be called by the name inside the function:

```javascript
var f = function name() {
  return name()
  // Will fail because calls itself indefinitely.
}
```

But when name function is called in the global scope it will be undefined as it only lives within the function closure.

The variable f is also available in the function body, so in the case of anonymous functions, f can be used to call the function recursively.

**.call**
In the function constructor.

The function behaves similarly, but the first parameter allows you to define the receiver object explicitly.

dictionary example
hasOwnProperty method does not exist in dictionary.
But by using call we can access it

```javascript
var hasOwnProperty = {}.hasOwnProperty
dict.foo = 1
hasOwnProperty.call(dict, 'foo') //true
hasOwnProperty.call(dict, 'hasOwnProperty') //false
```

**.apply**

Variadic o Variable-arity function : It can take any number of arguments.

Apply takes an array of arguments and calls the function as if each element of the array were an individual argument for the call. Additionally you can set this explicitly with the first argument. If this is not going to be used you can pass in null.

```javascript
average(arg1, arg2, ...argn)

var scores = getAllScores()
average.apply(null, scores)
// If scores have 3 elements
// average.apply(null, scores); = average(scores[0], scores[1], scores[2]);
```

- _Use apply to call variadic functions with a computed array of arguments._
- _Use the first argument of apply to provide a receiver for variadic methods._

**Variadic functions**

Variadic functions can be created by using the _arguments_.

fixed-arity vs variable-arity functions

Lets take averageOfArray as example;

```javascript
// Fixed-arity function
function averageOfArray(a) {
  for (var i = 0, sum = 0, n = a.length; i < n; i++) {
    sum += a[i]
  }
  return sum / n
}

//Variable-arity fucntion
function average() {
  for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
    sum += arguments[i]
  }
  return sum / n
}
```

One caveat of variable-arity functions is that they loose convenience as they need to be called with apply. To overcome this we can wrap the fixed-arity function by using arguments with the variable-arity function.

```javascript
function average(){
  return function averageOfArray(arguments);
}
```

This turns variable-arity function into a version with fixed capability without the need of apply function.

#**arguments**
**Never Modify arguments object**
If needed arguments object could be copied to a real array using

```javascript
var args = [].slice.call(arguments)
```

Arguments is nested within the function, so when using f.g.h
cases if we want to reach the arguments of f in h, we need to create a variable that stores that at f level scope.

```javascript
f(){
 a = arguments;
 g(){
      h(){
      a //arguments of a
      arguments // arguments of h
      }
  }
}
```

**.bind**

A function's receiver is determined by how it is called.

For example forEach implementation uses the global object as it's default receiver. Let us look at an example:

```javascript
var buffer = {
  entries: [],
  add: function(s) {
    this.entries.push(s)
  },
  concat: function() {
    return this.entries.join('')
  },
}

var source = ['867', '-', '42355']
source.forEach(buffer.add) // error: entries is not defined
```

Here the receiver of buffer.add is not buffer. We pass the buffer.add function to forEach. In this case, forEach offers an optional argument to use as receiver of its callback.

```javascript
source.forEach(buffer.add, buffer)
```

Not all higher order functions provide a receiver for their callbacks. In this case we can create a local function that **calls** buffer.add method from buffer object.

```javascript
source.forEach(function(s) {
  buffer.add(s)
})
```

In this case we call buffer.add appropriately as a method of the object in a wrapper function. No matter how the wrapper function function(s){} is called, since inside it is called as a method of its parent object, it pushes its arguments inside buffer.entries.

Since the need to use this pattern was so common, in ES5 it was added to the library as .bind.

!! buffer.add.bind(_buffer_) creates a new function just like the old one , but with its receiver bound to _buffer_ (.bind(_buffer_)).

Since it is a new function

```javascript
buffer.add === buffer.add.bind(buffer) //false
```

**This is a crucial point;** It means bind is safe to call even on a function that may be shared by other parts of a program. It is especially important for methods shared on a prototype object: the method will still work correctly when called on any of the prototype's descendants.

**Using .bind to curry functions**

An example function, constructing urls

```javascript
function simpleURL(protocol, domain, path) {
  return protocol + '://' + domain + '/' + path
}
```

Let us assume we use this to create absolute URLS for our website:

```javascript
var urls = paths.map(function(path) {
  return simpleURL('http', siteDomain, path)
})
```

For each iteration of the map higher order function, we use same first two arguments. They are fixed for our urls.

We can use bind method on simpleURL to construct this function without a wrapper function.

```javascript
var urls = paths.map(simpleURL.bind(null, 'http', siteDomain))
```

Remember .map higher order function passes each element of the array into the function inside, simpleURL, as an argument. So in this case it is

```javascript
simpleURL(path).bind(null, 'http', siteDomain)
```

inside map function. The arguments after receiver object(first bind argument), are prepended to simpleURL arguments, so in effect the function above delegates to

```javascript
simpleURL('http', siteDomain, path)
```

The call to simpleURL.bind produces a new function that deletages to simpleURL.

This technique of binding a function to a subset of its arguments is known as currying, named after the logician Haskell Curry.

With currying you can implement function delegation without explicit wrapper functions.

#Objects and Prototypes

// Reserved

[http://javascriptissexy.com/javascript-objects-in-detail/](http://javascriptissexy.com/javascript-objects-in-detail/)
**in** all properties show, inherited and own
To find out if a property exists on an object (either as an inherited or an own property), you use the in operator:

```javascript
// Create a new school object with a property name schoolName
var school = { schoolName: 'MIT' }

// Prints true because schoolName is an own property on the school object
console.log('schoolName' in school) // true

// Prints false because we did not define a schoolType property on the school object, and neither did the object inherit a schoolType property from its prototype object Object.prototype.
console.log('schoolType' in school) // false

// Prints true because the school object inherited the toString method from Object.prototype.
console.log('toString' in school) // true
```

**hasOwnProperty** only own properties show.
To find out if an object has a specific property as one of its own property, you use the hasOwnProperty method. This method is very useful because from time to time you need to enumerate an object and you want only the own properties, not the inherited ones.

get
set

In object literal, the get or set notation for properties allows you to specify a function to be run when the property is read or written.

```javascript
var pile = {
  elements: ['eggshell', 'orange peel', 'worm'],
  get height() {
    return this.elements.length
  },
  set height(value) {
    console.log('Ignoring attempt to set height to', value)
  },
}

console.log(pile.height)
// → 3
pile.height = 100
// → Ignoring attempt to set height to 100
```

#Enumurable

Properties that show in for ... in loops.

Enumerable properties are those properties whose internal [[Enumerable]] flag is set to true, which is the default for properties created via simple assignment or via a property initializer (properties defined via Object.defineProperty and such default [[Enumerable]] to false). Enumerable properties show up in for...in loops unless the property's name is a Symbol. Ownership of properties is determined by whether the property belongs to the object directly and not to its prototype chain. Properties of an object can also be retrieved in total. There are a number of built-in means of detecting, iterating/enumerating, and retrieving object properties, with the chart showing which are available.
