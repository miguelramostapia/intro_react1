import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Tags({bgTexto, textColor,descripcion}) {
  return (
    <>
      <Badge bg={bgTexto} text={textColor}>
        {descripcion}
      </Badge>
    </>
  );
}

export default Tags;