const express = require('express');
const { resolve } = require('path');
const path = require('path');
const app = express();

app.use('/', express.static(resolve('./build')))

app.get('*', (res, response) => {
    const index = path.join(__dirname, 'build', 'index.html');
    response.sendFile(index);
});

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.log(err)
    }
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('./build'));
    }

    console.log('servico executado com sucesso!')
})