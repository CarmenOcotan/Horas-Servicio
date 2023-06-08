import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from "./ExportApi";

function Horas() {
    return (
        <div className="container lo cont-horas pt-5">
            <h3 className="titulo mb-4">Developer 4 - A</h3>
            <div className="main-content mb-5 border">
                <Form className="servicio row m-3 pt-4 d-none w-75 g-2 flex-column">
                    <Row className="align-items-center">
                        <h6>Selecciona el Alumno por su Id</h6>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden> Name </Form.Label>
                            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Ingresa el Id del alumno"/>
                        </Col>
                        <Col xs="auto">
                        <Button type="submit" className="mb-3">Buscar</Button>
                        </Col>
                    </Row>
                    </Form>
                <Table/>
            </div>
        </div>
    );
}

export default Horas;
