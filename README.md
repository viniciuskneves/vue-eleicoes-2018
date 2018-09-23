# vue-eleicoes-2018

Projeto 100% inspirado por [Eleições 2018 de Diogo Moretti](https://github.com/diogomoretti/eleicoes2018).

## Setup do projeto
```
npm install
```

### Desenvolvimento
```
npm run serve
```

### Produção
```
npm run build
```

### Lint dos arquivos
```
npm run lint
```

### Run your unit tests - NOT READY
```
npm run test:unit
```

## Deploy
It will automatically build and deploy `./dist` folder to [Surge](https://surge.sh) under `CNAME` file domain.
```
npm run deploy
```

*The default domain in `vue-eleicoes-2018.surge.sh` and all HTTPS accesses will be redirected to HTTP as the API is only available in HTTP.*