let num="1221";
let bag="";
for(let i=num.length-1;i>=0;i--)
{
bag=bag+num[i];
}
if(bag==num)
{
  console.log("Yes palindrome");
}
else
{
  console.log("Not a palindrome");
}
