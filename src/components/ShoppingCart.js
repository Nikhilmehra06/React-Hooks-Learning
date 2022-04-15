import React from 'react';
import { useState } from 'react';

const ShoppingCart = () => {
  let [state, setState] = useState({
    products: [
      {
        sno: 'AA001',
        image: 'https://m.media-amazon.com/images/I/41lGv1F1kSL._AC_SX425_.jpg',
        name: 'Mi Watch',
        price: 1500,
        qty: 2,
      },
      {
        sno: 'AA002',
        image:
          'https://img.tatacliq.com/images/i6/1348Wx2000H/MP000000007530804_1348Wx2000H_20200820184600.jpeg',
        name: 'Realme Watch',
        price: 1500,
        qty: 2,
      },
      {
        sno: 'AA003',
        image: 'https://m.media-amazon.com/images/I/61ju0Nt8bhL._SL1500_.jpg',
        name: 'oppo Watch',
        price: 6000,
        qty: 2,
      },
      {
        sno: 'AA004',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoKCKdcrhV---FB8JwMwWaKZNe0RUxRnRqg&usqp=CAU',
        name: 'Samsung Watch',
        price: 1200,
        qty: 2,
      },
      {
        sno: 'AA005',
        image:
          'https://img.poorvika.com/1600_JPG/Smart-Technology/Inbase/Inbase-Urban-LYF-Z-Smartwatch/Inbase-Urban-LYF-Z-Smartwatch-Black-2.jpg',
        name: 'Apple Watch',
        price: 10000,
        qty: 2,
      },
    ],
  });

  let { products } = state;

  let incrQty = productId => {
    let items = products.map(product => {
      if (product.sno === productId) {
        return {
          ...product,
          qty: product.qty + 1,
        };
      }
      return product;
    });

    setState(() => ({
      products: [...items],
    }));
  };
  let decrQty = productId => {
    let items = products.map(product => {
      if (product.sno === productId) {
        return {
          ...product,
          qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
        };
      }
      return product;
    });

    setState(() => ({
      products: [...items],
    }));
  };

  let grandTotal = () => {
    let total = 0;
    for (let product of products) {
      total += product.price * product.qty;
    }
    return total;
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Shoping Cart</p>
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
                {products.map(product => {
                  return (
                    <tr key={product.sno}>
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
                      <td>&#8377;{product.price.toFixed(2)}</td>
                      <td>
                        <i
                          onClick={() => decrQty(product.sno)}
                          className="fa fa-minus-square mx-1"
                        ></i>
                        {product.qty}
                        <i
                          onClick={() => incrQty(product.sno)}
                          className="fa fa-plus-square mx-1"
                        ></i>
                      </td>
                      <td>&#8377;{(product.qty * product.price).toFixed(2)}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={4}></td>
                  <td>Grand Total</td>
                  <td>&#8377;{grandTotal()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
