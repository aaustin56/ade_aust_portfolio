console.log('helloworld from script');
function displayMessage(msg) {
  console.log('msg ' + msg);
  var x = 5;
  console.log(x);
  console.log('here we are');
}

// Single line comment

/* Multi-line
comment */

function fibonacci() {
  var first = 0;
  var second = 1;
  var temp;
  while (second <= 1000) {
    console.log('first ' + first + ', second ' + second);
    temp = second;
    second = second + first;
    first = temp;
  }
}
fibonacci();
