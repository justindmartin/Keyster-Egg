Keyster Egg
=================

The KeysterEgg class lets you make key sequence easter eggs in JavaScript, just like Konami used to make.

## Usage Example

```Javascript
var egg = new KeysterEgg({
  callback: function(){
    alert('Hi there!');
  },
  keySequence: 'hello'
});
```

## Use the following for directional keys in KeysterEgg sequences
↑  equals  UP

↓  equals  DOWN

←  equals  LEFT

→  equals  RIGHT