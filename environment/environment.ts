export const environment = {
  DATABASE: process.env.MONGODB || 'mongodb://localhost:27017/inventory',
  PORT: process.env.PORT || 3000
}