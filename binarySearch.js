// let array = [1,2,4,5,6]
// let left = 0;
// let right = array.length;
// let mid = (left+right)/2
// let target = 2

// let flag = 1;
// while(left!=right){
//   if(target==array[mid]){
//     console.log("element is present at mid position",mid);
//     flag = 0;
//     break;
//   }
//   else if(target>array[mid]){
//     left = mid;
//     mid= Math.floor((left+right/2))
//   }
//   else if(target<array[mid]){
//     right = mid;
//     mid= Math.floor((left+right/2))
//   }
// }

// if(flag==1){
//   console.log("element is not present");
// }


let a=[33,44,55,66,88];
let key=66;

let left=0;
let right=a.length; 
let mid=(left+right)/2;

// console.log(Math.floor(mid))
// console.log(mid)
let flag=1;
while(left!=right)
{
    if(key==a[mid])
    {
       console.log('element present',mid);
       flag=0;
       break;
    }
    else if(key>a[mid])
    {
     left=mid;
     mid=Math.floor((left+right)/2)
    }
    else if(key<a[mid])
    {
     right=mid; 
     mid=Math.floor((left+right)/2)
    }
    
}

if(flag==1)
{
    console.log("element not present");
}