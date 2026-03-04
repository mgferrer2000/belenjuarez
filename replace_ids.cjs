const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf8');
const ids = [
    'ri3DMbmlCVE', 'gHWxv-046ZY', '3pV_vBUnKb4', 'bsWFoA_j-YY',
    'PeAbdLqZvHI', 'NIP0NcY4tsA', 'adfTdAvjFVc', 'bW2T18fH5Q4',
    'P7q_-gzsFbw', 'dyauKzaOUbg', 'mB7fBpfW9qg', '7e_vljyg1dg',
    'MKe5wbTxED4', 'K3KXEcz0ows', 'uDK_V_aA35A', 'ikNHPi9g5AI',
    'XUPyv5AinTY', '8QhUwFkQxAI', 'yTg9JSArAAg', 'zzNtV64U540',
    'k7HFqzDw6iQ'
];
let i = 0;
// We only want to replace the youtubeId inside ALBUM_TRACKS
// Let's do a simple regex replace if we are sure it won't hit anything else,
// or we can slice ALBUM_TRACKS out, replace, and put it back.

let parts = content.split('export const ALBUM_TRACKS');
let albumPart = parts[1];
albumPart = albumPart.replace(/youtubeId:\s*'[^']*'/g, (match) => {
    if (i < ids.length) {
        const replace = "youtubeId: '" + ids[i] + "'";
        i++;
        return replace;
    }
    return match;
});

parts[1] = albumPart;
fs.writeFileSync('constants.ts', parts.join('export const ALBUM_TRACKS'));
console.log('Done replacing ' + i + ' ids');
