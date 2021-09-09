# Info.json Template

Below is a template example of the info.json file format, further below you will find all possible options for information and what is required or optional.

```
{
    "id": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    "name": "Ethereum",
    "tag": "ETH",
    "decimals": 18,
    "type": "token",
    "tokenType": "BEP20",
    "information": {
      "website": "https://ethereum.org/",
      "coinGeckoID": "ethereum",
      "coinMarketCapID": "ethereum",
      "description": "Ethereum is a decentralized, open-source blockchain with smart contract functionality supporting thousands of Dapps and DeFi protocols.",
      "explorer": "https://polygonscan.com/token/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      "coinGecko": "https://www.coingecko.com/coins/ethereum/",
      "coinMarketCap": "https://coinmarketcap.com/currencies/ethereum/"
    },
    "styles": {
      "color":"#5960a0",
      "button_a":"#3d3f61",
      "button_b":"#2a2b4e",
      "hover_a":"#383a5a",
      "hover_b":"#28294c"
    },
    "links": [
        {
            "name": "twitter",
            "url": "https://twitter.com/ethereum"
        },
        {
            "name": "reddit",
            "url": "https://www.reddit.com/r/ethereum/"
        },
        {
            "name":"facebook",
            "url":"https://www.facebook.com/ethereumproject/"
        }
    ]
}
```

## Available data options

The table below provide information on what information is required and optional, as well as what is supported.

### Core Information (All required)

| variable      | optional      | description                    | 
| ------------- |:-------------:|:------------------------------:|
| id            | NO            | contract address with checksum |
| name          | NO            | token name                     |
| tag           | NO            | token tag                      |
| decimals      | NO            | tokens decimals                |
| type          | NO            | is it a token or chain         |
| tokenType     | NO            | is it CHAIN, ERC20 or BEP20    |

### Information

| variable          | optional       | description                      | 
| -------------     |:--------------:|:--------------------------------:|
| website           | NO             | link to your website             |
| coinGeckoID       | YES            | your id on CoinGecko             | 
| coinMarketCapID   | YES            | your id on CoinMarketCap         |
| description       | NO             | describe your project in one sentence  |
| explorer          | NO             | link to explorer |
| coinGecko         | YES            | link to CoinGecko page |
| coinMarketCap     | YES            | link to CoinMarketCap page |

### Links

| name          | optional      | 
| ------------- |:-------------:|
| twitter       | NO            |
| discord       | YES           |
| telegram      | YES           |
| facebook      | YES           |
| reddit        | YES           |
| medium        | YES           |
| github        | YES           |
| youtube       | YES           |
| github        | YES           |
| github        | YES           |


