export const environmnent = {
  DB: process.env.MONGODB_URI || 'mongodb://localhost:27017/heroku_glgx2dmp',
  PORT: process.env.PORT || 3000
}