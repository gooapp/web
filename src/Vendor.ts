import CryptoJS from 'crypto-js';
import { Base64 } from 'js-base64';
import { async } from 'q';


const key = "hzxfkjyxgs729";

function encrypAES(text: string): string
{
    var ciphertext = CryptoJS.AES.encrypt(text, key).toString();
    const base64Text = Base64.encode(ciphertext, true);

    return base64Text;
}

function decryptAES(base64Text: string): string
{
    const ciphertext = Base64.decode(base64Text);
    var bytes = CryptoJS.AES.decrypt(ciphertext, key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}

function testEncrypt()
{
    const en = encrypAES("你好呀");
    const de = decryptAES(en);

    console.log("en", en);
    console.log("de", de);
}

async function encryptConfig()
{
    const res = await fetch("/json/config.txt");
    const configTxt = await res.text();
    const configTxtEn = encrypAES(configTxt);
    console.log("configTxt:", configTxt);
    console.log("configTxtEn:", configTxtEn);
}

async function decryptConfig(configTxtEn)
{
    const configTxt = decryptAES(configTxtEn);
    console.log("decryptConfig:", configTxt);
}

// testEncrypt();
encryptConfig();
// decryptConfig("VTJGc2RHVmtYMStiMHBqZm1rV2R1R1pWM3ZVWlZkN0tKdEFXK2JndGVFZUVtejV6TGVTQkV1T0h3UWkzMDNzYQ");

export { encrypAES, decryptAES };