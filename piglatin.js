const msg = 'Pace wisdom solutions';

function pigLatinConverter(msg) {
    let msgArray = msg.split(' ');
    let pigLatin = [];
    msgArray.forEach(word => {
        let temp = word.split('');
        let firstLetter = temp.splice(0, 1).join(''); 

        
        if (firstLetter === firstLetter.toUpperCase()) {
            temp[0] = temp[0].toUpperCase();
            firstLetter = firstLetter.toLowerCase();
        }
        temp.push(firstLetter + 'ay');
        pigLatin.push(temp.join(""));
    });
    console.log(pigLatin.join(' '));
}

pigLatinConverter(msg);
