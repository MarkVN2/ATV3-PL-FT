import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pet from "../models/pet";

type props = {
    pets: Pet[],
}

export default function ListaPets (props:props){ 


    function gerarListaPets() {
        if (props.pets.length <= 0) {
            return <>Não há pets</>
        } else {
            let lista = 
            <table  className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Genêro</th>
                <th scope="col">Raça</th>
                <th scope="col">Tipo</th>
              </tr>
            </thead>
            <tbody>
                {props.pets.map((pet,index) =>
                    <tr key={index}>
                        <td>{pet.getName}</td>
                        <td>{pet.getGender}</td>
                        <td>{pet.getRace}</td>
                        <td>{pet.getType}</td>
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
                    {gerarListaPets()}
                </div>
            </>
        )
}