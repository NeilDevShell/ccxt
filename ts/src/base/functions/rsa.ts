import { JSEncrypt } from "../../static_dependencies/jsencrypt/JSEncrypt.js";
import { CHash } from '../../static_dependencies/noble-hashes/utils.js';
import { base16 } from '../../static_dependencies/scure-base/index.js';
import { urlencodeBase64, stringToBase64 } from './encode.js';
import { hmac } from './crypto.js';


function rsa (request, secret, hash : CHash) {
    const RSA = new JSEncrypt ()
    const digester = (input) => base16.encode (hash (input))
    RSA.setPrivateKey (secret)
    return RSA.sign (request, digester, hash.name)
}

function jwt (request, secret, hash : CHash, isRSA = false) {
    const alg = (isRSA ? 'RS' : 'HS') + hash.blockLen
    const encodedHeader = urlencodeBase64 (stringToBase64 (JSON.stringify ({ 'alg': alg, 'typ': 'JWT' })));
    const encodedData = urlencodeBase64 (stringToBase64 (JSON.stringify (request)));
    const token = [ encodedHeader, encodedData ].join ('.');
    const algoType = alg.slice (0, 2);
    let signature = undefined;
    if (algoType === 'HS') {
        signature = urlencodeBase64 (hmac (token, secret, hash, 'base64'));
    } else if (algoType === 'RS') {
        signature = urlencodeBase64 (rsa (token, secret, hash));
    }
    return [ token, signature ].join ('.');
}

export { rsa, jwt }
