export const environmnent = {
  DB: process.env.DATA_BASE || 'mongodb://localhost:27017/inventory',
  PORT: process.env.PORT || 3000
}