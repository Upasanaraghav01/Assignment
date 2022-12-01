let num="1221";
let bag="";
for(let i=num.length-1;i>=0;i--)
{
bag=bag+num[i];
}
if(bag==num)
{
  console.log("Yes it is a palindrome");
}
else
{
  console.log("No it is not a palindrome");
}



let num= 13;
let count=0;
    for (let i=1; i<=num; i++){
        if (num%i==0){
            count++
        }
    }
    if (count==2){console.log("Yes")}
    else {console.log("No")}
