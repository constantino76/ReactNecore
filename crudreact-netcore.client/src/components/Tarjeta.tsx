

const Tarjeta = ({titulo, parrafo, textoboton, children }) => {
  return (
      <div className="card  text-center bg-dark mt-5">
          <div className="card-header card-success">
              <h2 className="card-title text-info"> {titulo}</h2>

          </div>
          <div className="card-body">

              <div className="card-text">
                  <p className="text-light">{ parrafo}  </p>

              </div>
              <a href="" className="btn btn-danger">{textoboton}</a>
              { children}
          </div>
          
      </div>
  );
}

export default Tarjeta;