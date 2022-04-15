import React, { useState } from 'react';

const ProductItem = () => {
  let [state, setState] = useState({
    product: {
      sno: 'AA001',
      image: 'https://m.media-amazon.com/images/I/41lGv1F1kSL._AC_SX425_.jpg',
      name: 'Mi Watch',
      price: 1500,
      qty: 2,
    },
  });

  let { product } = state;

  let incrQty = () => {
    setState(state => ({
      product: {
        ...state.product,
        qty: state.product.qty + 1,
      },
    }));
  };

  let decrQty = () => {
    setState(state => ({
      product: {
        ...state.product,
        qty: state.product.qty - 1 > 0 ? state.product.qty - 1 : 1,
      },
    }));
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Product Item</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              impedit beatae porro laudantium, doloribus quod? Consectetur
              ullam, vero omnis labore adipisci libero perspiciatis beatae!
              Perferendis vel inventore expedita doloribus neque.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <table className="table table-striped text-center table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  <th>SNo</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.sno}</td>
                  <td>
                    <img
                      src={product.image}
                      alt="product"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <i
                      onClick={decrQty}
                      className="fa fa-minus-square mx-1"
                    ></i>
                    {product.qty}
                    <i onClick={incrQty} className="fa fa-plus-square mx-1"></i>
                  </td>
                  <td>{product.qty * product.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
