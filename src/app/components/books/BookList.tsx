const BookList = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="col-11 p-5 rounded-5 mt-5"
        style={{ backgroundColor: "#ea5362" }}
      >
        <table className="table table-striped-columns table-dark">
          <thead>
            <tr>
            <th scope="col" className="text-center">
                ID
              </th>
              <th scope="col" className="text-center">
                Nombre de libro
              </th>
              <th scope="col" className="text-center">
                Autor
              </th>
              <th scope="col" className="text-center">
                Genero
              </th>
              <th scope="col" className="text-center">
                Precio
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row" className="text-center">
                1
              </th>
              <td className="text-center">Don Quijote de la Mancha</td>
              <td className="text-center">Miguel de Cervantes</td>
              <td className="text-center">Sátira</td>
              <td className="text-center">$50.000</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                2
              </th>
              <td className="text-center">La Celestina</td>
              <td className="text-center">Fernando de Rojas</td>
              <td className="text-center">Drama</td>
              <td className="text-center">$28.000</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                3
              </th>
              <td className="text-center">Cien Años de Soledad</td>
              <td className="text-center">Gabriel García Márquez</td>
              <td className="text-center">Realismo Magico</td>
              <td className="text-center">$47.000</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                4
              </th>
              <td className="text-center">Divina Comedia</td>
              <td className="text-center">Dante Alighieri</td>
              <td className="text-center">Poesia</td>
              <td className="text-center">$23.000</td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                5
              </th>
              <td className="text-center">La Llamada de Cthulhu</td>
              <td className="text-center">Howard Phillips Lovecraft</td>
              <td className="text-center">Terror</td>
              <td className="text-center">$35.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
