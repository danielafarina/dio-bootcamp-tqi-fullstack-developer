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
// bestRockBand('Queen')
//     .then(response => {
//         console.log('Checking the answer');
//         return bestRockSong(response)
//     })
//     .then(response => {
//         console.log('Findind the best song...');
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err.msg);
//     })

    // Usando async/await: veio resolver esse aninhamento de .then(), ficando mais legível.
    async function doTheJob() {
        const bestRockBandresponse = await bestRockBand('Kiss');
        console.log(bestRockBandresponse);
        const bestRockSongresponse = await bestRockSong(bestRockBandresponse);
        console.log(bestRockSongresponse);
    }
    doTheJob();