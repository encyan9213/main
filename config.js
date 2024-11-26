const app_id = "26d12d52-e55d-4842-b35a-ceabc3beaa8b" //skywayのアプリケーションID //skyway application ID
const secret_key = "dzqQo2AB/xW02ti/RNsovDJp/EeCDM2bYqkye0P4LSE=" //skywayのシークレットキー // skyway secret key
let proximity = true;  //近接VCのtrue:有効/false:無効(デフォルトはtrue) //Proximity VC true:enable/false:disable (default: true)
let password = false; //接続時のパスワードの有無(デフォルトはfalse) //Password in connection (default: false)
let distance = 6; // 声の届く最大距離(デフォルトは6) //Max distance of sound (default: 6)
const port = 19132; // websocketをlistenするポート //Port to listen
const web_port = 8080; // 近接vcのwebサイトと接続するポート // Port to connect website
let lang = "ja"; //言語(ja:日本語, en:英語) //Language (ja:Japanese, en:English)
module.exports = { distance, app_id, secret_key, proximity, port, web_port, lang, password };