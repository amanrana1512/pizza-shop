import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table, Row } from "react-bootstrap";
import { deletePizza,getAllPizzas } from "../../action/pizzaAction";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Pizza from "../Pizza";
import Loader from "../Loader";
import Error from "../Error";

const PizzaList = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  console.log(pizzas);
  useEffect(
    () => {
      dispatch(getAllPizzas());
    },
    { dispatch }
  );
  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <error>Error while fetching pizzas</error>
        ) : (
          <Row>
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Pizza Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pizzas &&
                    pizzas.map((pizza) => (
                      <tr>
                        <td>
                          <img
                            src={pizza.image}
                            alt="logo"
                            width="150px"
                            height="100px"
                          />
                        </td>
                        <td>{pizza.name}</td>
                        <td>
                          Small :{pizza.prices[0]["small"]}
                          <br />
                          Medium :{pizza.prices[0]["medium"]}
                          <br />
                          Large :{pizza.prices[0]["large"]}
                          <br />
                        </td>
                        <td>{pizza.category}</td>
                        <td>
                          <Link to={`/admin/editpizza/${pizza._id}`}>
                            <AiFillEdit style={{cursor:"pointer"}}/>
                          </Link>
                          &nbsp; <AiFillDelete style={{color:'red',curson:'pointer'}} onClick={()=>{dispatch(deletePizza(pizza._id))} }/>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </Row>
        )}
      </Container>
    </>
  );
};

export default PizzaList;
