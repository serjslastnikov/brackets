module.exports = function check(str, bracketsConfig) {
  let configArray = bracketsConfig;
  let string = str;
  let a;
  let b;
  let control = true;
  while (control === true && string.length > 0) {
  find(string, configArray);
  }

  return control;

  
  function find() {
    control = false;
    configArray.forEach(function(item) {
    a = string.indexOf(item[0]);
    b = string.indexOf(item[1], a+1);
      while (a < string.length) {
        if (a === -1) {
          return
        }
        if(a === b - 1) {
          string = string.slice(0, a) + string.slice(b+1);
          control = true;
          return
        }  else {
          a++;
          a = string.indexOf(item[0], a);
          b = string.indexOf(item[1], a+1);
        }
      }
  })
return
 }

};