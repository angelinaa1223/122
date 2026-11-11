<!--
var X,Y;
X = 5
Y = X++; // Y = 5, X = 6 
var msg;
msg = "<b> Постфиксная форма (Y = X++;):<" + "/b><br> Y=";
msg += Y + "<br>X " + "<br><br>";
X = 5;
Y = ++X; //Y = 6, X = 6
msg +="<b> Префиксная форма (Y = ++X;):<" + "/b><br> Y=";
msg += Y +"<br>X = "+ X;
