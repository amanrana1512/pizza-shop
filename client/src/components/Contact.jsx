import React from "react";
import { Container, Row, Col, Table} from "react-bootstrap";
import {AiFillCodeSandboxCircle} from "react-icons/ai";
import Image from 'react-bootstrap/Image';

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row>
          <Col md="6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            debitis enim ullam delectus optio, ab laborum nostrum error eveniet
            esse eaque labore laudantium? Voluptas magni cum a, maiores culpa
            sit quod doloremque cumque minus corporis sunt ullam cupiditate
            alias recusandae earum quaerat rem commodi impedit. Sit dolor labore
            quae culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta cupiditate minus nostrum impedit ipsum odit, ducimus magni
            quod nam cumque iste labore nisi blanditiis accusamus expedita
            laborum illum non adipisci aperiam id consequatur? Porro eaque
            quidem blanditiis numquam cumque officiis quaerat labore ut
            voluptate aliquid! Facere, pariatur, ea odio eius omnis corrupti
            veniam autem explicabo hic perspiciatis delectus, numquam provident
            rerum ipsam perferendis id recusandae necessitatibus ipsa quasi
            cupiditate! Nobis, doloremque architecto tenetur tempora ab nulla
            quasi. Numquam rem repellat quam adipisci qui earum iste, accusamus
            optio eum harum laudantium error, officiis reiciendis nihil vitae
            distinctio provident expedita et aliquam, quos veniam cumque
            praesentium. Odio distinctio, laborum animi magnam quod voluptatibus
            asperiores omnis adipisci. Excepturi nesciunt quam nostrum alias
            ullam iusto vel similique voluptatibus, deleniti nisi error dolore
            molestiae, accusantium cumque nam eligendi. Dolorem laboriosam
            voluptatibus, laudantium dolores beatae aut distinctio culpa aperiam
            sed accusantium, obcaecati commodi labore officia quis non iusto
            saepe facere minus maxime veritatis sunt repudiandae cumque ex
            ducimus. Voluptas quam molestiae, repudiandae odio sunt quia eaque
            nemo? Quod, est ullam. Modi veritatis quis vero? Iusto quasi nemo
            modi aut, nisi magni repudiandae, quisquam corporis enim suscipit
            vero accusamus atque ipsa facere soluta ducimus aliquid, accusantium
            mollitia?
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th><AiFillCodeSandboxCircle/></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>King</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
            <Image src="images/farmhouse.jpg" style={{width:'100%', height:'100%'}}/>    
        </Row>
      </Container>
    </>
  );
};

export default Contact;
