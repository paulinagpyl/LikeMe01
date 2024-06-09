import db from '../database/db.js'

// trae todos los posteos
export const getPosts = () => db('SELECT * FROM posts;')

// busca solo uno
export const findByIdPosts = (id) => db('SELECT * FROM posts WHERE id = $1;',[id])

// guarda en bd un post nuevo
export const agregarPost = (titulo,img,descripcion) =>
    db('INSERT INTO posts (id,titulo,img,descripcion,likes) VALUES (DEFAULT, $1, $2, $3, 0) RETURNING *;', [titulo,img,descripcion])

// modifica pisando todos los datos de una ficha
export const like =(id)=>
    db('update posts set likes = likes +1 where id = $1 returning *;',[id])
    
// export const updateByLikesPost =(id,likes)=>
//     db('update posts set likes = $2 where id = $1 returning *;',[id, likes])
    
// export const eliminarPost =(id)=>
//         db('DELETE FROM posts where id = $1 returning *;', [id])

export const eliminarPost =(id)=>
        db('DELETE FROM posts where id = $1 returning *;', [id])