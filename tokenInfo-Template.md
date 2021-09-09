# Info.json Template


The following information is required to be filled in:
- id
- name
- tag
- decimals
- type
- tokenType

- information
-- website
-- coinGeckoID (optional)
-- coinMarketCapID (optional)

Below is a template example of the info.json file format

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
