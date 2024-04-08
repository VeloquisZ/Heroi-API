import herois from '../models/herois.js'
import vilao from '../models/viloes.js'


const adicionarHeroi = (req,res)=>{
const {nome,pp} = req.body

if(!nome || !pp){
    return res.status(404).send({mensagem: 'Dados incompletos'})
}

const maiorId = herois.reduce((maiorAtual,item) => item.id > maiorAtual ? item.id : maiorAtual,0)
const novoHeroi = {
    id: maiorId + 1,
    nome,
    pp
}

herois.push(novoHeroi)

res.status(201).send({mensagem : 'Novo heroi gozado com sucesso'})

}
const adicionarVilao = (req,res)=>{

    const {nome,pp} = req.body

    if(!nome || !pp){
        return res.status(404).send({mensagem: 'Dados incompletos'})
    }
    
    const maiorId = vilao.reduce((maiorAtual,item) => item.id > maiorAtual ? item.id : maiorAtual,0)
    const novoVilao = {
        id: maiorId + 1,
        nome,
        pp
    }
    
    herois.push(novoVilao)
    
    res.status(201).send({mensagem : 'Novo vilão gozado com sucesso'})

}

const listarHeroi = (req,res) =>{
res.status(200).send({herois})

}

const listarViloes = (req,res) => {
res.status(200).send({viloes})
}

const Batalhar = (req,res) => {
 const {idH,idV} = req.body
 if(!idH || !idV){
    return res.status(4040).send({mensagem: "Dados incompletos"})
 }

 const heroiBatalha = herois.find(item => item.id == idH)
 const vilaoBatalha = vilao.find(item => item.id == idV)

 if(!heroiBatalha || !vilaoBatalha){
    return res.status(404).send({mensagem: "Personagem não encontrando"})
 }

let mensagem
if(heroiBatalha.pp > vilaoBatalha.pp){
    mensagem = `${heroiBatalha.nome} venceu o ${vilaoBatalha.nome}`
}else if (heroiBatalha.pp < vilaoBatalha.pp){
    mensagem = `${vilaoBatalha.nome} venceu o ${heroiBatalha.nome}`
}else{
    mensagem = "empatou"
}


 res.status(200).send({mensagem: "Batalha"})
}

export{adicionarHeroi,adicionarVilao,listarHeroi,listarViloes,Batalhar}