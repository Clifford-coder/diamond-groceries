import React from 'react';
// import PropTypes from 'prop-types';

const Centercontent = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

// Centercontent.propTypes = {
//   children: PropTypes.node,
// };

export default Centercontent;
