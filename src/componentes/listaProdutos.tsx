import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from "../models/product";

type props = {
    produtos: Product[],
}

export default function ListaProdutos (props:props) {



    function gerarListaProdutos() {
        if (props.produtos.length <= 0) {
            return <>Não há produtos</>
        } else {
            let lista =
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.produtos.map((produto, index) =>
                            <tr key={index}>
                                <td>{produto.name}</td>
                                <td>{produto.getPrice}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            return lista
        }
    }

        return (
            <>
                <div className="container-fluid">
                    {gerarListaProdutos()}
                </div>
            </>
        )
    
}