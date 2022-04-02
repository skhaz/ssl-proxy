if (!process.env.PORT) {
  throw new Error('PORT environment variable is not defined.')
}

export const { PORT } = process.env

if (!process.env.TARGET) {
  throw new Error('TARGET environment variable is not defined.')
}

export const { TARGET } = process.env
