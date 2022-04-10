import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import { PORT, TARGET } from './environment'

const options = {
  target: TARGET,
  changeOrigin: true,
  secure: false,
}

const proxy = createProxyMiddleware(options)

const app = express()

app.use('/', proxy)

app.listen(PORT, () => {
  process.on('SIGINT', async () => {
    process.exit()
  })
})