# HAT

## Install

Clone the project and run in terminal:
```bash
npm install
```

If you don't have ZeppelinOS yet, run:
```bash
npm i -g zos
```

## Local Deploying
Setup your own Ethereum node on http://localhost:9545, You can use with `ganache-cli`:
```bash
npm i -g ganache-cli
ganache-cli --port 9545 --deterministic
```

Deploy both contract and depedencies:
```bash
zos push --deploy-dependencies --network local
```

## Mainnet Deploying

Change the variables `mnemonic` and `INFURA_TOKEN` at `truffle-config.js` Put your the owner seed words and Infura token (or change the RPC provider) and run in terminal:

```bash
zos push --deploy-dependencies --network mainnet
```
