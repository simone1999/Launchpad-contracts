import { HardhatUserConfig } from 'hardhat/types'

// import "@nomiclabs/hardhat-ganache";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-abi-exporter'
import 'hardhat-tracer'
import 'hardhat-dependency-compiler'
import 'hardhat-contract-sizer'
import '@openzeppelin/hardhat-upgrades'
import '@nomiclabs/hardhat-etherscan'

require('dotenv').config({ path: `${__dirname}/.env` })

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      // forking: {
      //   enabled: true,
      //   url: `${process.env.MAIN_ALCHEMY_URL}`,
      //   blockNumber: 11754056
      // }
    }
  },
  etherscan: {
    apiKey: `${process.env.BSC_API_TOKEN}`
  },
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 30000
          }
        }
      },
      {
        version: '0.7.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 30000
          }
        }
      }
    ]
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false
  },
  typechain: {
    outDir: 'typechain'
  }
}

export default config
