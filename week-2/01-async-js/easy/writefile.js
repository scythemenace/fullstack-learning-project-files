const fs = require('fs');

fs.readFile('randomfile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    
    new_data = 'some more bs to replace the old bs.';
    fs.writeFile('randomfile.txt', new_data, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Successfully written to the file");
    })
})

console.log("Logs before?");

for (let i = 0; i < 10; i++) {
    console.log("even this dumbass loop logs first");
}