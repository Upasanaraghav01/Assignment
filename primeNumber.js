let num=11;
let count=0;
if(num==1)
{
console.log("1 is neither prime nor composite")
}
else
{
if(num>1)
{
for(let i=1;i<=num;i++)
{
if(num%i===0)
{
count++;
}
}
}
if(count==2)
{
console.log("number is prime");
}
else
{
console.log("number is not prime");
}
}
