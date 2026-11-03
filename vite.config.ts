import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const mockApiDelay = 2_000

function sendJson(response: import('node:http').ServerResponse, statusCode: number, body: unknown) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

function readRequestBody(request: import('node:http').IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let requestBody = ''

    request.on('data', (chunk: Buffer) => { requestBody += chunk })
    request.on('end', () => {
      try {
        resolve(requestBody ? JSON.parse(requestBody) : {})
      } catch {
        reject(new Error('Invalid JSON body'))
      }
    })
    request.on('error', reject)
  })
}

function mockApi(): Plugin {
  return {
    name: 'mock-api',
    configureServer(server) {
      server.middlewares.use('/api/cart', async (request, response, next) => {
        if (request.method !== 'POST') {
          sendJson(response, 405, { message: 'Method Not Allowed' })
          return
        }
        try {
          await readRequestBody(request)
          await new Promise((resolve) => setTimeout(resolve, mockApiDelay))
          sendJson(response, 500, { message: 'Košík je momentálne nedostupný.' })
        } catch (error) { next(error) }
      })

      server.middlewares.use('/api/orders', async (request, response, next) => {
        if (request.method !== 'POST') {
          sendJson(response, 405, { message: 'Method Not Allowed' })
          return
        }
        try {
          const body = await readRequestBody(request)
          const hasItems = typeof body === 'object' && body !== null &&
            Array.isArray((body as { items?: unknown }).items) && (body as { items: unknown[] }).items.length > 0
          if (!hasItems) {
            sendJson(response, 400, { message: 'Objednávka musí obsahovať aspoň jednu položku.' })
            return
          }
          await new Promise((resolve) => setTimeout(resolve, 800))
          sendJson(response, 201, { orderId: 'mock-order-001', message: 'Objednávka bola úspešne odoslaná.' })
        } catch (error) { next(error) }
      })
    },
  }
}

export default defineConfig({ plugins: [react(), mockApi()] })
