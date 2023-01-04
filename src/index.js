import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';
import Counter from './Counter';
import List from './List'
import FormComponent from './form';
import Payment from './pages/paymentPage'
import Product from './pages/productPage'
import HomePage from './pages/homePage'
import ErrorPage from './pages/errorPage';

import FormTextArea from './assignment1/textArea'
import UserForm from './assignment2/userForm';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// finction component
const HeadingComponent = () => {
  return <h1>Hello</h1>;
}

// class component
class HeadingComponentUsingClass extends React.Component{
  render(){
    return <h1>Class Component</h1>
  }
}

const CurrentTime = () => {
  return (
    <p>
    {" "}
    {+new Date()} --
    <HeadingComponentUsingClass/>{" "}
  </p>
  )
}

root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<HomePage/>} />
  //     <Route path='payment' element={<Payment/>} > 
  //       <Route path=':price' element={<Payment/>}></Route>
  //     </Route>
  //     <Route path='product' element={<Product/>} />
  //     <Route path='*' element={<ErrorPage/>} />
  //   </Routes>
  // </BrowserRouter>

  <React.StrictMode>
    {/* <FormTextArea/> */}
    {<UserForm/>}

    {/* <FormComponent/> */}
    {/* <CurrentTime/>
    <Counter/>
    <List/> */}
    {/* <HeadingComponentUsingClass/>
    <HeadingComponent/>
    <h1>Hello Paapi World</h1> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
