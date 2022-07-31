import React from 'react';
import { Route } from 'react-router-dom';
import { Button,Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;







export const UserLoginTemplate = (props) => {
    let {Component,...restRoute} =  props;

    return <Route {...restRoute} render={(routeProps )=>{
        // return <>
        //   <Component {...routeProps}/>
      
        // </>
    }} />

}