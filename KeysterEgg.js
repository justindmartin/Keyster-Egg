KeysterEgg = function(props){
  window.keyHistory = new Array();
  this.props = {
    callback: (props.callback !== undefined) ? props.callback : function(){alert('EASTER EGG!');},
    keySequence: (props.keySequence !== undefined) ? props.keySequence.toUpperCase() : '↑↑↓↓←→←→ba',
    keySequenceLength: 0
  };

  this.bindAction();
};

KeysterEgg.prototype.bindAction = function(){
  var _this = this;
  window.onkeydown = function(e){
    _this.watchKeys(e, _this);
  };
};

KeysterEgg.prototype.iskeySequenceCode = function(){
  var matchesFound = 0;
  for(var i = 0; i < window.keyHistory.length; i++){
    if(window.keyHistory[i] === 37 && this.props.keySequence.charAt(i) === '←'){
      matchesFound++;
    }else if(window.keyHistory[i] === 38 && this.props.keySequence.charAt(i) === '↑'){
      matchesFound++;
    }else if(window.keyHistory[i] === 39 && this.props.keySequence.charAt(i) === '→'){
      matchesFound++;
    }else if(window.keyHistory[i] === 40 && this.props.keySequence.charAt(i) === '↓'){
      matchesFound++;
    }else if(window.keyHistory[i] === this.props.keySequence.charCodeAt(i)){
      matchesFound++;
    }
  }
  if(matchesFound === this.propskeysequence.length){
    return true;
  }else{
    return false;
  }
};

KeysterEgg.prototype.watchKeys = function(e, _this){
  if(_this.propskeysequence.length <= window.keyHistory.length){
    window.keyHistory = window.keyHistory.slice(1);
  }
  window.keyHistory.push(e.keyCode);

  if(_this.iskeySequenceCode()){
    _this.props.callback();
  }
};