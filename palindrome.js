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




