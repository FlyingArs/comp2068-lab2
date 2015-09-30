//require http
var http = require('http');

//require url
var url = require('url');

//create a server
http.createServer(function(req, res){
	res.write('hello world');
	//parse the query string
	var qs = url.parse(req.url, true).query
	
	//declare variables for method, x, y, and output
	var method = qs.method;
	var x = parseFloat(qs.x);
	var y = parseFloat(qs.y);
	var result;
	
	if (method == 'add'){
		result = x + y;
		method = '+';
	} else if (method == 'subtract'){
		result = x - y;
		method = '-';
	} else if (method == 'multiply'){
		result = x * y;
		method = '*';
	} else if (method == 'divide') {
		result = x/y;
		method = '/';
	} else {
		res.write('<h1>This is the wrong method </h1>' + '<br />');
	}
	
	res.write(x +' '+ method +' '+ y +' = '+ result);
	res.end();
}).listen(3000);