const num = 1;
let a = 0;

for (let i = 0; i <= 100; i++){
    a+= i * num;
    console.log(i * num);
    
    
    if (i === 100) {
        console.log(`The sum of ${num} from 1 - 100 is ${a}`)
    }
}