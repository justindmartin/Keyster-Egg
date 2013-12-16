Keyster Egg
=================

The KeysterEgg class lets you make key combination easter eggs in JavaScript, just like Konami used to make.

## Usage Example

```Javascript
var egg = new KeysterEgg({
  callback: function(){
    alert('Hiya!');
  },
  keyCombo: '↑↑↓↓←→←→ba'
});
```