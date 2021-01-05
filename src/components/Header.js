import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Header =()=>(
    <Fragment>
        <h1>Expensify</h1>
        <NavLink exact activeClassName="activeLink" to="/">Home</NavLink>
        <NavLink activeClassName="activeLink" to="/create">Create Expense</NavLink>
    </Fragment>
)

export default Header;