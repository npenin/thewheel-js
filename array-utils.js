Array.prototype.any=function(condition){
  for(var i=0;i<this.length;i++)
  {
    if(condition.call(this[i], i, this[i]))
      return true;
  }
  return false;
};
