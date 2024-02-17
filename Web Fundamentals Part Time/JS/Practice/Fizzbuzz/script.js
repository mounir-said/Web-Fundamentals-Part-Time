for(var i=1; i<16; i++) {
  if (i % 3 == 0) {
    console.log("FIZZ");
    continue;
  }else if (i % 5 == 0) {
    console.log("BUZZ")
    continue;
  }else if(i % 3 == 0 && i % 5 == 0){
    console.log("FIZZBUZZ")
    continue;
  }
  console.log(i);
}
