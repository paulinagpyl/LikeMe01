import express from 'express'
import cors from 'cors'

import * as sql from './models/posts.dao.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())

// leer todos los post
app.get('/posts', (req, res) =>  sql.getPosts()
    .then((result) => res.status(200).json({status:true, code:200, message:result}))
    .catch((error) => res.status(500).json({status:false, code:500, message:error}))
)

//encontrar un posts
app.get('/posts/:id',(req, res)=> sql.findByIdPosts(req.params.id)
    .then((result) => res.status(200).json({status:true, code:200, message:result}))
    .catch((error) => res.status(500).json({status:false, code:500, message:error}))
)

// crear un posts
app.post('/posts',(req, res)=> sql.agregarPost(req.body.titulo, req.body.img, req.body.descripcion)
    .then((result) => res.status(201).json({status:true, code:201, message:result}))
    .catch((error) => res.status(500).json({status:false, code:500, message:error}))
)

// actualizar posts con todos los datos
app.put('/posts/like/:id',(req, res)=> sql.like(req.params.id)
    .then((result) => { res.status(200).json({status:true, code:200, message:result})})
    .catch((error) => res.status(500).json({status:false, code:500, message:error}))
)

// eliminar registro
app.delete('/posts/:id',(req, res)=>sql.eliminarPost(req.params.id)
    .then((result) => res.status(200).json({status:true, code:200, message:result}))
    .catch((error) => res.status(500).json({status:false, code:500, message:error}))
)

app.all('*',(req, res)=>res.status(404).json({status: false, code: 404, message: 'page nor found'}))

app.listen(PORT,()=>console.log('Server up'))

export default app