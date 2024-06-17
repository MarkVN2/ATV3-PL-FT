import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastro";
import Client from "../models/client";
import CPF from "../models/cpf";
import ListaPets from "./listaPets";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServiços";
import Pet from "../models/pet";
import { useState } from "react";



export default function Roteador (){
    const [view,setView] = useState('Clientes');

    const selecionarView = (screen: any, e : any) => {
        e.preventDefault()
        setView(screen)
    }
    
    let clients_test = [
        new Client('Name1','SocialName1',new CPF('10', new Date())),
        new Client('Name2','SocialName2',new CPF('20', new Date())),
        new Client('Name3','SocialName3',new CPF('30', new Date())),
        new Client('Name4','SocialName4',new CPF('40', new Date())),
        new Client('Name5','SocialName5',new CPF('50', new Date())),
        new Client('Name6','SocialName6',new CPF('60', new Date())),
        new Client('Name7','SocialName7',new CPF('70', new Date())),
        new Client('Name8','SocialName8',new CPF('80', new Date())),
        new Client('Name9','SocialName9',new CPF('90', new Date())),
        new Client('Name10','SocialName10',new CPF('100', new Date()))
    ]
    let pets_test = [ 
    new Pet('Name1','Race1','M','Type1'),
    new Pet('Name2','Race2','M','Type2'),
    new Pet('Name3','Race3','M','Type3'),
    ]

    const gerarPagina = () : any =>{
        let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Serviços', 'Produtos', 'Adicionar']} />
        if (view === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente clientes={clients_test} />
                </>
            )
        }
        else if(view ==='Pets') {
            return(
            <>
                {barraNavegacao}
                <ListaPets pets={pets_test} />
                
            </>
            )
        }
        else if(view ==='Serviços') {
            return(
                <>
                    {barraNavegacao}
                    <ListaServicos servicos={[]} />
                    
                </>
                )
        }
        else if(view ==='Produtos') {
            return(
                <>
                    {barraNavegacao}
                    <ListaProdutos produtos={[]} />
                    
                </>
                )
        }
         else if(view ==='Adicionar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente />
                </>
            )
        }
    }
    return (gerarPagina())
}