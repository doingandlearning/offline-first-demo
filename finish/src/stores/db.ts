import Dexie from 'dexie'

// Define the database schema
const db = new Dexie('BookVault')
db.version(1).stores({
  books: '++id, title, author, dateFinished, isbn, genre, coverArt',
})

export default db
