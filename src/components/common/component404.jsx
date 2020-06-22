import React from "react";
import { withRouter } from "react-router-dom";
const Component404 = () => {
  return (
    <div>
        <h1 className='notFound'>404 Not Found</h1>
    </div>
  );
};
export default withRouter(Component404);