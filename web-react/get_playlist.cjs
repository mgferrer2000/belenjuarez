const https = require('https');

https.get('https://www.youtube.com/playlist?list=OLAK5uy_nDUfLuFMPYEaeLx1Lyqcj_pBlOxhEE_pE', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const regex = /"videoId":"([^"]+)"/g;
        let match;
        const ids = new Set();
        while ((match = regex.exec(data)) !== null) {
            if (match[1].length === 11) {
                ids.add(match[1]);
            }
        }
        console.log(Array.from(ids));
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
