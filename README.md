# book-notes-app
# 📚 Book Notes App

A full-stack web application to store and manage personal book notes. Built using **Node.js**, **Express**, **PostgreSQL**, and **EJS**, the app provides a clean interface to record and view summaries or thoughts on books you've read.

---

## ✨ Features

- ✅ Add a new book with title, author, and personal notes
- 📖 View all your saved notes in a well-organized list
- 🖋️ Clean and responsive UI with modern CSS styling
- 💾 PostgreSQL integration for persistent storage
- 🔐 Environment-based configuration using `.env`

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS templating engine, HTML, CSS
- **Database:** PostgreSQL
- **Other Tools:** dotenv, body-parser

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/book-notes-app.git
cd book-notes-app
2. Install Dependencies
bash
Copy code
npm install
3. Setup Environment Variables
Create a .env file in the root directory with the following content:

pgsql
Copy code
PG_USER=your_postgres_username
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_postgres_password
PG_PORT=5432
4. Create the Database Table
Make sure your PostgreSQL server is running, and execute this SQL:

sql
Copy code
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  book_name TEXT NOT NULL,
  book_author TEXT NOT NULL,
  notes_content TEXT NOT NULL
);
5. Run the App
bash
Copy code
node index.js
Then open http://localhost:3000 in your browser.
