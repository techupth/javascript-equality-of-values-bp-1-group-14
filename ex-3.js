function isPlainObject(value) {
  let result ;
  if(value === Object){
      result = true;
  }else if (value === Array) {
      result = false
  }else if (value === null) {
      result = false
  }else{
      result = "This is not an object"
  }
  return result
  }
  
    // Example case
    let result1 = isPlainObject({ name: "John" });
    let result2 = isPlainObject(null);
    let result3 = isPlainObject(["apples", "oranges"]);
    
    // ผลลัพธ์ควรที่ได้จาก Example case
    console.log(result1); //true
    console.log(result2); // false
    console.log(result3); // false
    console.log(typeof(result3))

    let test = ["apples", "oranges"]
  console.log(Array.isArray(test))