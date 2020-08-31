import * as React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({children, to}) => (
    <Link to={to} style={{textDecoration: 'inherit'}}>
            {children}
    </Link>
  );

export default MenuItem;