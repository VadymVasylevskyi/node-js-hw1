const fs = require('fs')

function logMessage(message) {
    fs.appendFile('log.txt', message+ '\n', (err) => {
        if (err) {
            console.erro('Ошибка при запии в файл:', err)
        } else {
            console.log('Сообщение записано в лог-файл')
        }
    })
}

module.exports = { logMessage }