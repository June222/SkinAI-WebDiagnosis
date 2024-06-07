import React from 'react';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const RedirectionRoute = () => {
    return <Navigate to="/index" />;

};

RedirectionRoute.propTypes = {
    children: PropTypes.node,
};

export default RedirectionRoute;
