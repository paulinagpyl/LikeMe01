import db from '../database/db.js'

export const getPosts = () => db('SELECT * FROM posts;')

export const findByIdPosts = (id) => db('SELECT * FROM posts WHERE id = $1;',[id])

export const agregarPost = (titulo,img,descripcion,likes) =>
    db('INSERT INTO posts (id,titulo,img,descripcion,likes) VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *;', [titulo,img,descripcion,likes])

//export const updatePosts =()=>{}

//export const deletePosts =()=>{}
