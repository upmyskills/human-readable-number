module.exports = function toReadable (number) {
    const rank = ['', 'teen', 'hundred'];
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fifteen', 'eighteen'];
    const dec = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let res = [];

    if (number === 0) res.push(num[number]);

    if (number > 99) {
        res.push(num[Math.floor(number/100)]);
        res.push(rank[2]);
        number %= 100;
       
    };

    if (number > 13 && number < 20 && number !== 15 && number !== 18) res.push(num[Math.floor(number%10)] + rank[1]);

    if (number === 15) res.push(num[14]);
    if (number === 18) res.push(num[15]);

    if (number >= 20 && number < 100) {
        res.push(dec[Math.floor(number/10)]);
        number %= 10;
    }

    if (number > 0 && number <= 13) res.push(num[number]);

    // console.log(res.join(' '));
    return res.join(' ');
}



// function toReadable (number) {
//     const rank = ['', 'teen', 'hundred'];
//     const num = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fifteen', 'eighteen'];
//     const dec = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
//     let res = [];

//     if (number > 99) {
//         res.push(num[Math.floor(number/100)]);
//         res.push(rank[2]);
//         number %= 100;
       
//     };

   

//     if (number > 13 && number < 20 && number !== 15 && number !== 18) res.push(num[Math.floor(number%10)] + rank[1]);

//     if (number === 15) res.push(num[14]);
//     if (number === 18) res.push(num[15]);

//     if (number >= 20 && number < 100) {
//         res.push(dec[Math.floor(number/10)]);
//         number %= 10;
//     }

//     if (number > 0 && number <= 13) res.push(num[number]);

//     console.log(res.join(' '));
//     return res.join(' ');
// }

// toReadable(2);
// toReadable(720);
// toReadable(22);