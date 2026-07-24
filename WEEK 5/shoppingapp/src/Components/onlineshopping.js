import React from "react";
import Cart from "./Cart";

class OnlineShopping extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            items: [

                { itemName: "Laptop", price: 65000 },

                { itemName: "Mouse", price: 800 },

                { itemName: "Keyboard", price: 1500 },

                { itemName: "Headphones", price: 2500 },

                { itemName: "Monitor", price: 12000 }

            ]

        };

    }

    render() {

        return (

            <div
                style={{
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >

                <h1>Online Shopping Cart</h1>

                <table
                    border="1"
                    cellPadding="10"
                    style={{
                        margin: "auto",
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>

                        <tr>

                            <th>Item Name</th>

                            <th>Price</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            this.state.items.map((item, index) => (

                                <Cart
                                    key={index}
                                    itemName={item.itemName}
                                    price={item.price}
                                />

                            ))
                        }

                    </tbody>

                </table>

            </div>

        );

    }

}

export default OnlineShopping;