const fs = require ('fs')
const folderName ='./OzaefeB'
try{

    if (!fs.existsSync(folderName)) {
        fs.mkdirSync (folderName);
    }
}catch (err) {
    console.error(err);
}

const content = 'this is week 4 of the ICT-YEP programm.!'

fs.writeFile('/Users/backendclass1/Documents/ICT-YEP/week 4/OzaefeB/ogoro.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
})