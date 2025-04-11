let b=["Hello world","India","Pakistan"]
b.reverse()



console.log(b)


function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage
  console.log(reverseString("hello"));    // Output: "olleh"
  console.log(reverseString("JavaScript"))

  function reverseString(sty) {
    return sty.split('').reverse().join('')
  }
  
  // Example usage
  console.log(reverseString("hello"));    // Output: "olleh"
  console.log(reverseString("JavaScript"))

  function reverseNumber(num) {
    // Convert number to string, split into array, reverse array, join back to string
    const reversedString = num.toString().split('').reverse().join('');
    // Convert string back to number
    const reversedNumber = parseInt(reversedString);
    // Preserve the sign of the original number
    return reversedNumber * Math.sign(num);
  }
  

  // Example usage:
  console.log(reverseNumber(12345));    // Output: 54321
  console.log(reverseNumber(-9876));    // Output: -6789
  console.log(reverseNumber(1200)); 


  function findLargestNumber(arr) {
    if (arr.length === 0) return null; // Handle empty array
  
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Example usage
  const numbers = [12, 45, 67, 89, 23, 56];
  const largest = findLargestNumber(numbers);
  console.log("The largest number is:", largest);

//Largest number in array
  const number = [12, 45, 67, 89, 23, 56];
  console.log(Math.max(...number));



  const numb = [12, 45, 67, 89, 23, 56];
  console.log(Math.max(...numb))



  function findDuplicates(str) {
    const seen = new Set();
    const duplicates = new Set();

    for (let char of str) {
        if (seen.has(char)) {
            duplicates.add(char);
        } else {
            seen.add(char);
        }
    }

    return [...duplicates];
}

console.log(findDuplicates("hello Guru")); // Output: [ 'l', 'o' ]

function duplicates(stt){
  const sen=new seez()
  const sez=new semz()

for(let char of stt){
  if(sen.has(char))
    sez.add(char)
  
}else{
 
  sen.add(char)
}
   
  

return[...sez];
}
console.log(duplicates("Guru" "Prashath"));


//Duplicates in number and print in reverse order in descending order
//Example 1
const s=[1,6,8,1,2,6,9]
const uniquesorteddesc=[...new Set(s)].sort((a,b)=>b-a);
console.log(uniquesorteddesc)

//Example 2
const y=[2,3,2,6,7,8]
const descnumber=[...new Set(y)].sort((p,q)=>q-p);
console.log(descnumber)

//Remove Duplicate in string
function findDuplicates(sto) {
  const seen = new Set();
  const duplicates = new Set();

  for (let char of sto) {
      if (seen.has(char)) {
          duplicates.add(char);
      } else {
          seen.add(char);
      }
  }

  return [...duplicates];
}

console.log(findDuplicates("Javascript"))
console.log(findDuplicates("Java"))







function findduplic(xxz){
  const se=new Set()
  const st=new Set()

  for (const char of xxz) {
    
    if
      (se.has(char)){
        st.add(char)
      }
      else{
        se.add(char)
      }

    }
    return[...st];
    return st.split("").reverse().join("")
  }
  console.log(findduplic("GuruPrashath"))


function reversestr(sz){
  return(sz.split("").reverse().join(""))
}
console.log(reversestr("Guru"))
