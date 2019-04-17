for(let n=1;n<=100;n++)
	{
	if(n%3==0&&n%5==0) //if divisible by both 3 and 5
		console.log("FizzBuzz");
	else if(n%3==0) //if divisible by 3
		console.log("Fizz");
	else if(n%5==0) //if divisible by 5
		console.log("Buzz");
	else
		console.log(n);
	}
