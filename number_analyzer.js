document.getElementById('start').addEventListener('submit',(e)=>{
    e.preventDefault();
    let num = document.getElementById('value').value;
    //alert(num);

    //even or odd
    
    if (num%2==0){
        //console.log(`${num} is a even number`);
        document.getElementById('d1').innerHTML='Even/Odd: Even';
    }
    else{
        //console.log(`${num} is a odd number`);
        document.getElementById('d1').innerHTML='Even/Odd: Odd';
    }

    // //prime or not

    let prime=true;
    if (num<=0){
        // console.log(`${num} is not valid number`)
        document.getElementById('d2').innerHTML=`Prime: Not a valid number`;
    }
    else if(num == 1){
        // console.log('1 is neither prime nor composite')
        document.getElementById('d2').innerHTML='Prime: Neither prime Nor composite';
    }
    else if(num>1){
        for(let i=2; i<=Math.sqrt(num);i++){
            if(num%i==0){
                prime= false;
                break;
            }
        }
        if (prime){
            // console.log(`${num} is a prime number`);
            document.getElementById('d2').innerHTML='Prime/Not: Prime';
        }
        else{
            // console.log(`${num} is not a prime number`)
            document.getElementById('d2').innerHTML='Prime/Not: Not Prime';
        }
    }

    //square

    let square=num*num;
    // console.log(square);
    document.getElementById('d3').innerHTML=`Square: ${square}`;

     //factorial

    function factorial(num){
        if (num<0){
            // console.log("Factorial not defined");
            document.getElementById('d4').innerHTML='Factorial: Not defined';
            return;
        }
        let fact=1;
        for (let k=1;k<=num;k++){
            fact=fact*k;
        }
        // console.log(fact);
        document.getElementById('d4').innerHTML=`Factorial: ${fact}`;
    }
    factorial(num);

    //multiplication

    // let limit= document.getElementById('limits').value;
    // // console.log(limit); 
    // let table ="";
    // for(let j=1; j<=limit;j++){
    //     // console.log(`${num} x ${j} = ${num*j}`);
    //     table+=`${num} x ${j} = ${num * j} <br>`;
    // }
    // document.getElementById('d5').innerHTML=table;

   let d5 = document.getElementById("d5");
    d5.innerHTML = ""; 
    let limit= document.getElementById('limits').value;
    document.getElementById('d5').innerHTML='Multiplication: ';

    for (let i = 1; i <= limit; i++) {
        d5.innerHTML += ` 
        <div class="mul-row">
            <span>${num}</span>
            <span>x</span>
            <span>${i}</span>
            <span>=</span>
            <span>${num * i}</span>
        </div>
        `;
    }
})