const names = ['Hello', 'World', 'in', 'a', 'frame'];

function pattern(names) {

    var max = 0;
    names.forEach(element => {
        if (element.length > max) {
            max = element.length;
        }
    });

    console.log('*'.repeat(max + 4));

    names.forEach(element => {
        //console.log('* ');

        let c = max-element.length;
        let str = '* ' + element+' '.repeat(c)+' *';

        console.log(str);
        
    }


    );
    console.log('*'.repeat(max + 4));

}

pattern(names);