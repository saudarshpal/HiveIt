import dotenv from 'dotenv'

dotenv.config()

const DB_URL = process.env.MONGODB_URL
const PORT_NO = process.env.PORT

export {
    DB_URL,
    PORT_NO
}