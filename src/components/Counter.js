import React, { useState } from 'react';

const Counter = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const incrCounter = () => {
    setState(state => ({
      count: state.count + 1,
    }));
  };
  const decrCounter = () => {
    setState(state => ({
      count: state.count - 1,
    }));
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <p className="h4">Counter</p>
              </div>
              <div className="card-body">
                <h5 className="display-3">{state.count}</h5>
                <button
                  className="btn btn-success btn-sm"
                  onClick={incrCounter}
                >
                  increment
                </button>
                <button className="btn btn-danger btn-sm" onClick={decrCounter}>
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
