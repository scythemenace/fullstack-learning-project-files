const fs = require('fs');
fs.readFile('randomfile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
} )

counter = 0;

for (let i = 0; i < 1000000000; i++){
    for (j = i; j < 10000; j++){
        counter++;
    }
}