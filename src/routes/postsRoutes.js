import express from "express";
import multer from "multer";
import { listarPosts, postarPost, uploadFoto } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });
  
const upload = multer(
    {
        dest:"./uploads", storage
    }
)

const routes = (app) => {
    app.use(express.json());   
    app.get("/posts", listarPosts);
    app.post("/posts", postarPost)
    app.post("/upload", upload.single("imagem"), uploadFoto)
}

export default routes;