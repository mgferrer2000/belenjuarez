const https = require('https');

https.get('https://www.youtube.com/playlist?list=OLAK5uy_nDUfLuFMPYEaeLx1Lyqcj_pBlOxhEE_pE', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        // Find ytInitialData
        const match = data.match(/var ytInitialData = (\{.*?\});<\/script>/);
        if (match) {
            const ytData = JSON.parse(match[1]);
            const tabs = ytData.contents.twoColumnBrowseResultsRenderer.tabs;
            const playlistVideoListRenderer = tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer;
            const ids = playlistVideoListRenderer.contents.map(i => i.playlistVideoRenderer?.videoId).filter(Boolean);
            console.log(ids);
        } else {
            console.log("No ytInitialData found");
        }
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
