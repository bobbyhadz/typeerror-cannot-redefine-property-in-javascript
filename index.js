// TypeError: Cannot redefine property: X in JavaScript

// EXAMPLE 1 - Set the `configurable` property to `true`

// ✅ Works as expected
const obj = Object.create({});

Object.defineProperty(obj, 'site', {
  value: 'bobbyhadz.com',
  configurable: true,
});

Object.defineProperty(obj, 'site', {
  value: 'google.com',
  configurable: true,
});

console.log(obj.site); // 👉️ google.com

// ------------------------------------------------------------------

// // EXAMPLE 2 - Setting enumerable to true to iterate over the object's properties

// const obj = Object.create({});

// Object.defineProperty(obj, 'site', {
//   value: 'bobbyhadz.com',
//   configurable: true,
//   enumerable: true,
// });

// Object.defineProperty(obj, 'site', {
//   value: 'google.com',
//   configurable: true,
//   enumerable: true,
// });

// for (const key in obj) {
//   console.log(key, obj[key]); // 👉️ site, google.com
// }

// console.log(obj.site); // 👉️ google.com
