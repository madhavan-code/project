const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST||'127.0.0.1',
    user: process.env.DB_USER||'root',
    password: process.env.DB_PASSWORD||'Madhav@32',
    database: process.env.DB_NAME||'project'
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err.message); 
        console.error("Full error details:", err); 
        process.exit(1);
    } else {
        console.log("Database connected successfully!");
    }
});

const runQuery = (sql, values) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

const handleError = (res, err) => {
    console.error(err);
    res.status(500).json({ message: "An internal error occurred." });
};

app.get("/", async (req, res) => {
    try {
        const sql = "SELECT id, name,DATE_FORMAT(dob, '%d-%m-%Y') AS dob , gender,email, phone  FROM data ORDER BY id ASC";
        const data = await runQuery(sql);
        return res.json(data);
    } catch (err) {
        handleError(res, err);
    }
});

app.post("/create", async (req, res) => {
    const sql = "INSERT INTO data (name, dob , gender,email, phone) VALUES (?, ?, ?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.phone, req.body.gender, req.body.dob];
    
    try {
        const data = await runQuery(sql, values);
        return res.status(201).json(data);
    } catch (err) {
        handleError(res, err);
    }
});

app.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const sql = "UPDATE data SET name=?, dob=? , gender=?, email=?, phone=? WHERE id=?";
    const values = [req.body.name, req.body.email, req.body.phone, req.body.gender, req.body.dob, id];

    try {
        const data = await runQuery(sql, values);
        return res.json(data);
    } catch (err) {
        handleError(res, err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM data WHERE id = ?";
    
    try {
        await runQuery(sql, [id]);
        return res.status(204).send(); 
    } catch (err) {
        handleError(res, err);
    }
});

app.listen(6050, () => {
    console.log("Server is running on port 6050!");
});