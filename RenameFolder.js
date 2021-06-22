const fs = require('fs')

fs.rename('Blessing', '/Blessing', err => {
    if (err) {

        console.error(err)
        return
    }
//file written successfully
})
