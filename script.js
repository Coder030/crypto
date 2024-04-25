const btcPriceElement = document.getElementById('btc-price');
const ethPriceElement = document.getElementById('eth-price');
const ltcPriceElement = document.getElementById('ltc-price');
const xrpPriceElement = document.getElementById('xrp-price');
const adaPriceElement = document.getElementById('ada-price');
const linkPriceElement = document.getElementById('link-price');
const bchPriceElement = document.getElementById('bch-price');
const bnbPriceElement = document.getElementById('bnb-price');
const eosPriceElement = document.getElementById('eos-price');
const xtzPriceElement = document.getElementById('xtz-price');
const dashPriceElement = document.getElementById('dash-price');

async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,cardano,chainlink,bitcoin-cash,binancecoin,eos,tezos,dash&vs_currencies=usd');
        const data = await response.json();

        btcPriceElement.textContent = `$${data.bitcoin.usd}`;
        ethPriceElement.textContent = `$${data.ethereum.usd}`;
        ltcPriceElement.textContent = `$${data.litecoin.usd}`;
        xrpPriceElement.textContent = `$${data.ripple.usd}`;
        adaPriceElement.textContent = `$${data.cardano.usd}`;
        linkPriceElement.textContent = `$${data.chainlink.usd}`;
        bchPriceElement.textContent = `$${data['bitcoin-cash'].usd}`;
        bnbPriceElement.textContent = `$${data.binancecoin.usd}`;
        eosPriceElement.textContent = `$${data.eos.usd}`;
        xtzPriceElement.textContent = `$${data.tezos.usd}`;
        dashPriceElement.textContent = `$${data.dash.usd}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchCryptoPrices();

// Update prices every 60 seconds
setInterval(fetchCryptoPrices, 60000);
