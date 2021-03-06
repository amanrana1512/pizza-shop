import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../action/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Filter from "../components/Filter";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <Loader/>
) : error ? (
          <error>Error while fetching pizzas</error>
        ) : (
          <Row>
            <Filter/>
            {pizzas.map((pizza) => (
              <Col md="4" key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col> 
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
