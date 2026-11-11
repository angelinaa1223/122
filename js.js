<script type="text/javascript">

var string - "Angelina Mitina";
var str - string.split("");
var el - document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();
<!--
document.write("Hello, world");
//-->


</script>
