import React from 'react'

const FancyButton = React.forwardRef((props, ref) => (
  <h1 ref={ref}>
    {props.children}
  </h1>
));

export default FancyButton
