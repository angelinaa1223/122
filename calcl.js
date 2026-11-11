var X, Y;
var X, Y;
X = 5;
Y = X++;
var msg;
msg = "<b>Постфиксная форма (Y = X++;):<" + "/b><br> Y = ";
msg += Y + "<br>X = " + X + "<br><br>";
X = 5;
Y = ++X; // Y = 6, X = 6
msg += "<b>Префиксная форма (Y = ++X;):<" + "/b><br> Y = ";
msg += Y + "<br>X = " + X;
window.alert(msg);
