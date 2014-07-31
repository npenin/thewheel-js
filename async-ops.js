(function($){
  $.eachAsync=function(array, body, completed)
  {
  	(function step(index)
  	{
  		if(index<array.length)
  			body(index, array[index], function(){ step(index+1) });
  		else if(completed)
  			completed(array);
  	})(0);
  }
})($)
