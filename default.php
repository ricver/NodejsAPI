<html>
<body>
<?php echo '<p>Hello World</p>'; ?>
<u><b>NodeJS Restfull Crude API</b></u>
<br><br>
<U>Dependencies</U>
<ol>
<li>Node.js</li>
<li>ExpressJS</li>
<li>Mongoose</li>
</ol>

<U>Usage</U><br>
<b>*</b>Get all users /api/user as a GET<br>
<b>*</b>Create user /api/user as a Post
<p>
first_name:value<br>
Last_name:value<br>
email:value<br>
Phone:value<br>
</p>
<b>*</b>Get specific user /api/user/user_id as a GET<br>
<b>*</b>Update specific users /api/user/user_id as a put
<p>
first_name:value<br>
Last_name:value<br>
email:value<br>
Phone:value<br>
</p>
<b>*</b>Delete specific users /api/user/user_id as a DELETE

<br>
<br>
Get me @ <a href="https://github.com/ricver/NodejsAPI.git">Github</a>

<br>
<br>

<u><b>C# RestClientAPILib</b></u>
<br>
<U>Dependencies</U>
<ol>
<li>Newtonsoft.Json</li>
</ol>

<U>Usage</U><br>
<b>*</b>Basic call
<p>
string endPoint = @"http:\\myRestService.com\api\";<br>
var client = new RestClient(endPoint);<br>
var json = client.MakeRequest();<br>
</p>
<b>*</b>Parameter<br>
var json = client.MakeRequest("?param=0");<br>

<b>*</b>set the HttpVerb<br>
var client = new RestClient(endpoint: endPoint, method: HttpVerb.POST, postData: "{'someValueToPost': 'The Value being Posted'}");

<br><br>
Get me @ <a href="https://github.com/ricver/C-RestClientLib.git">Github</a>
<br>
</body>
</html>