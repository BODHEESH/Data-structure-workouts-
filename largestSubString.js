// LARGEST SUB STRING IN A STRING

let str = "Iam a good boy "

let SubStr = str.split(' ')


// let largest = ''

// for(let i = 0;i<SubStr.length;i++){

//     if((SubStr[i].length)>(largest.length)){
//         largest = SubStr[i]
//     }

// }

// console.log(largest);


// SECOND LARGEST


let l1 = ''
let l2 = ''

for(let i =0; i<SubStr.length;i++){

    if(SubStr[i].length>l1.length){

        l2 = l1;
        l1 = SubStr[i]
    }else if(SubStr[i]<l1 && SubStr>l2){

        l2=SubStr[i]
    }


}

console.log(l2);