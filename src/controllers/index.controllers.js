const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'simon',
    host: 'localhost',
    password: 'usuario',
    database: 'primerapi',
    port: '5432'
});


const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows)
    res.status(200).json(response.rows)

};

const createUser = async (req, res) => {
    const {name, email} = req.body;

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response)
    res.json({
        message: 'usuario agregado satifatoriamente', 
        body: {
            user: {name,email}
        }
    })
}


const getUsersById = async (req, res) =>{
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.json(response.rows)
}

const deleteUser = async (req,res) => {
    const id = req.params.id
    const response = pool.query('DELETE FROM  users WHERE id = $1', [id])
    console.log(response)
    res.json(  `User ${id} eleminado`)
}

const updateUser = async (req,res) => {
    const id = req.params.id
    const {name,email} = req.body
    const response =  await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,id
    ])
    console.log(response)
    res.json('user updated succesfuly')
}
module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}