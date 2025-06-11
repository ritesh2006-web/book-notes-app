import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const port = 3000;
const app = express();
env.config();


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
})
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM books");
        res.render("main.ejs", { books: result.rows });

    }
    catch(err)
    {
        console.log("Error fetching books!", err);
        res.status(500).send("Database error");
    }
    
})


app.get("/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/new", async (req, res) => {
    const content = req.body.newContent;
    const book_name = req.body.bookName;
    const author = req.body.authorName;

    try {
        await db.query("INSERT INTO books (book_name,book_author,notes_content) VALUES ($1,$2,$3)", [book_name, author, content]);
        res.redirect("/");
    }
    catch (err) {
        console.log(err);
    }
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})


