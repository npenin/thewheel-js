String.prototype.endsWith=function(s)
{
	return this.substring(this.length-s.length)==s;
};
String.prototype.startsWith=function(s)
{
	return this.substring(0,s.length)==s;
};

var defaultTrimChars=' \t\r\n';

String.prototype.trimStart=function(chars)
{
	chars=chars ||defaultTrimChars;
	return this.replace(new RegExp('^['+chars+']+'), '');
}
String.prototype.trimEnd=function(chars)
{
	chars=chars ||defaultTrimChars;
	return this.replace(new RegExp('['+chars+']+$'), '');
}
String.prototype.trim=function(chars)
{
	chars=chars ||defaultTrimChars;
	return this.trimStart(chars).trimEnd(chars);
}
