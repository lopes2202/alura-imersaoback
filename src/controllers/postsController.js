import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postsModels.js";


 async function listarPosts (req, res)
{
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
}

async function postarPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.messaage)
        res.status(500).json({"Erro": "Falhou na requisição" })
    }

}

async function uploadFoto(req, res) {
    const novoPost = {
        descricao: "",
        url: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost);
        const fotoAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, fotoAtualizada)
        
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.messaage)
        res.status(500).json({"Erro": "Falhou na requisição" })
    }

}


export {listarPosts, postarPost, uploadFoto}