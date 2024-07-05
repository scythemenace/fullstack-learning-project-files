const fs = require('fs');

new_data = '';

fs.readFile('sampletext.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    temp_data = data.split(' ')
    intermediate_data = temp_data.filter( elem => {
        return elem != '';
    })

    new_data = intermediate_data.join(' ');

    fs.writeFile('sampletext.txt', new_data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    
        console.log("Successfully written back to the file");
    })
})