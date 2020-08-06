export const environment = {
  DATABASE: process.env.MONGODB_URI || 'mongodb://localhost:27017/inventory',
  PORT: process.env.PORT || 3000
}