document.getElementById('start').addEventListener('submit',(e)=>{
    e.preventDefault();
    let num = document.getElementById('value').value;
    //alert(num);

    //even or odd
    
    if (num%2==0){
        //console.log(`${num} is a even number`);
        document.querySelector('div').innerHTML=`${num} is a even number`;
    }
    else{
        //console.log(`${num} is a odd number`);
        document.querySelector('div').innerHTML=`${num} is a odd number`;
    }

    // //prime or not

    let prime=true;
    if (num<=0){
        // console.log(`${num} is not valid number`)
        document.querySelector('div').innerHTML=`${num} is not a valid number`;
    }
    else if(num == 1){
        // console.log('1 is neither prime nor composite')
        document.querySelector('div').innerHTML='1 is neither prime nor composite';
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
            document.querySelector('div').innerHTML=`${num} is a prime number`;
        }
        else{
            // console.log(`${num} is not a prime number`)
            document.querySelector('div').innerHTML=`${num} is not a prime number`;
        }
    }

    //square

    let square=num*num;
    // console.log(square);
    document.querySelector('div').innerHTML=`${square}`;

    //multiplication

    let limit= document.getElementById('limits').value;
    // console.log(limit); 
    for(let j=1; j<=limit;j++){
        // console.log(`${num} x ${j} = ${num*j}`);
        document.querySelector('div').innerHTML=`${num} x ${j} = ${num*j}`;
    }

    //factorial

    function factorial(num){
        if (num<0){
            // console.log("Factorial not defined");
            document.querySelector('div').innerHTML='Factorial not defined';
            return;
        }
        let fact=1;
        for (let k=1;k<=num;k++){
            fact=fact*k;
        }
        // console.log(fact);
        document.querySelector('div').innerHTML=`${fact}`;
    }
    factorial(num);
})