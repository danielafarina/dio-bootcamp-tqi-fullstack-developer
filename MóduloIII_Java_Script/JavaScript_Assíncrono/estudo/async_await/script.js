// Primeira promise
function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
                success: true,
                bandName: band,
                msg: band + 'is the best rock band ever!'
            });
        } else {
            reject({
                success: false,
                msg: 'I\'m not so sure'
            });
        }
    });
}

// Segunda promise: a partir do resultado da primeira, vc chama a segunda.
function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve('Bohemian Rhapsody by ' + response.bandName);
        } else {
            reject('Do you know Queen?');
        }
    });
}

// Usando .then()
// bestRockBand('Nirvana') // segue o aninhamento de chamadas:
//     .then(response => { // só faz se a promise for resolvida.
//         console.log('Checking the answer');
//         return bestRockSong(response)
//     })
//     .then(response => {
//         console.log('Findind the best song...');
//         console.log(response);
//     })
//     .catch(err => { // só faz se a promise for rejeitada.
//         console.log(err.msg);
//     })

    // Usando async/await: veio resolver esse aninhamento infinito de .then(), ficando mais legível.
    async function doTheJob() {
        try {
            const bestRockBandresponse = await bestRockBand('Nirvana');
            console.log(bestRockBandresponse);
            const bestRockSongresponse = await bestRockSong(bestRockBandresponse);
            console.log(bestRockSongresponse);
        } catch (err) { // tratamento de erro com try/catch
            console.log(err.msg);
        }        
    }
    doTheJob();