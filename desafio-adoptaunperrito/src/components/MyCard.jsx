/* Tarjeta.jsx */
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


function MyCard({imagen, nombre, descripcion,tipoBgTexto, tipoBgDescripcion}) {
  return (
    <>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen}/>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Tags bgTexto={tipoBgTexto} descripcion={tipoBgDescripcion}></Tags>
            </Card.Body>
        </Card>
    </>
    );
}
export default MyCard;