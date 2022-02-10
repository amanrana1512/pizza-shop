import React,{useEffect} from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import UserList from "../components/Admin/UserList";
import PizzaList from "../components/Admin/PizzaList";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";

const AdminScreen = ({ history }) => {
    const userState =useSelector(state => state.loginUserReducer)
    const {currentUser}=userState;
    useEffect(() => {
      if(localStorage.getItem('currentUser')===null || !currentUser.isAdmin){
          window.location.href="/";
      }
    }, [])
    
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={UserList} exact />
              <Route path="/admin/userlist" component={UserList} exact />
              <Route path="/admin/pizzalist" component={PizzaList} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
