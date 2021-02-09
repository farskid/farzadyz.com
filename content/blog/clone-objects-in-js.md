---
title: 3 Ways to clone objects in Javascript
slug: 3-ways-to-clone-objects-in-javascript
publishedAt: 01 Jan 2017
keywords: Javascript Objects clone
---

Cloning an object is somewhat a task that is almost always used in any project from a simple one to the most complicated ones.
As it may seem simple for not seasoned Javascript developers, it actually has some pitfalls that would hurt you in the bones if you didn’t know the proper way to do it.

## Talk is cheap, show me the code

The first way that could cross a developer’s mind is to deeply iterate through source object’s properties and copy them one by one on the target object. As it may seem good at the beginning, it is not a performance friendly solution and a potential bottleneck when it comes to large and deep objects.

### 1: Deep copy using iteration

```js
function iterationCopy(src) {
  let target = {};
  for (let prop in src) {
    if (src.hasOwnProperty(prop)) {
      target[prop] = src[prop];
    }
  }
  return target;
}
const source = { a: 1, b: 2, c: 3 };
const target = iterationCopy(source);
console.log(target); // {a:1, b:2, c:3}
// Check if clones it and not changing it
source.a = "a";
console.log(source.a); // 'a'
console.log(target.a); // 1
```

So as you see, it’s working!

Now let’s cut the chase to the second solution which is indeed more elegant but, more limited to use.

### 2: Converting to JSON and back

```js
function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}
const source = { a: 1, b: 2, c: 3 };
const target = jsonCopy(source);
console.log(target); // {a:1, b:2, c:3}
// Check if clones it and not changing it
source.a = "a";
console.log(source.a); // 'a'
console.log(target.a); // 1
```

Note: Be careful about using this method as your source object MUST be JSON safe. So it may need some sort of exception handling to keep it safe in cases in which the source object is not convertible to JSON.

### 3: Using Object.assign

> Update: This method has a flaw that it only does a shallow copy. It means that nested properties are still going to be copied by reference. Be careful about it.

This way is the best and the safest way I personally consume in my projects.It’s leveraging a built-in static method on the Object object and is handled and provided by the language. So use this one!

```js
function bestCopyEver(src) {
  return Object.assign({}, src);
}
const source = { a: 1, b: 2, c: 3 };
const target = bestCopyEver(source);
console.log(target); // {a:1, b:2, c:3}
// Check if clones it and not changing it
source.a = "a";
console.log(source.a); // 'a'
console.log(target.a); // 1
```

## Conclusion

You must know that every framework and including libraries such as Lodash and Underscore has a way to support cloning objects. Almost all of them used a more complex version of iterationCopy before ES6 was introduced. On ES6+ environments, there is language support for Object.assign , so try to use the most out of it. As a rule of thumb, always try to use the 3rd solution and avoid the JSON solution.

Keep calm and clone objects without any hesitation :)
