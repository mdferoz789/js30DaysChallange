// // For loop structure
// for(initialization, condition, increment/decrement){
//     // code goes here
//   }
for(let i = 0; i <= 5; i++){
    // console.log(i)
  }
  
  // 0 1 2 3 4 5
  for(let i = 5; i >= 0; i--){
    // console.log(i)
  }
  for(let i = 0; i <= 5; i++){
    // console.log(`${i} * ${i} = ${i * i}`)
  }
  for(let i=0; i<=4; i++){
    // console.log(`${i} + ${i} = ${i + i}`)
  }
  for (let i=1; i<=10; i++){
    // console.log(`${i*1} -- ${i*2} -- ${i*3}-- ${i*4}-- ${i*5}-- ${i*6}-- ${i*7}-- ${i*8}-- ${i*9}-- ${i*10} `)

  }
  for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
      row.push(i * j);
    }
    // console.log(row.join(' -- '));
  }
  const numbers = [2,3];

// Print table headers
console.log('Number | Table');
console.log('------------------');

// Generate multiplication tables
for (let i = 1; i <= 10; i++) {
  let row = '';
  numbers.forEach(num => {
      debugger
    row += `${num} x ${i} = ${num * i}  |  `;
  });
  console.log(row.trim());
}
  