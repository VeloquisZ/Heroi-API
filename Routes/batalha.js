import express from 'express'
import { listarHeroi,adicionarHeroi,adicionarVilao,listarViloes,Batalhar } from '../controller/conter.js'

const router = express.Router()

router.get('/herois',listarHeroi)

router.get('/viloes',listarViloes)

router.post('/herois',adicionarHeroi)

router.post('/viloes',adicionarVilao)

router.post('/batalhar',Batalhar)

export default router 
