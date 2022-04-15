import React, { useState } from 'react';

const WishMessage = () => {
  const [state, setState] = useState({
    message: 'Hello',
  });

  const sayGoodMorning = () => {
    setState(state => ({
      message: 'Good Morning',
    }));
  };
  const sayGoodAfternoon = value => {
    setState(state => ({
      message: value,
    }));
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              {' '}
              <p className="h4">Wish Message</p>
            </div>
            <div className="card-body">
              <h5 className="display-3">{state.message}</h5>
              <button
                className="btn btn-success btn-sm"
                onClick={sayGoodMorning}
              >
                Good Morning
              </button>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => sayGoodAfternoon('Good Afternoon')}
              >
                Good Afternoon
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  setState(state => ({
                    message: 'Good evening',
                  }));
                }}
              >
                Good Evening
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishMessage;
