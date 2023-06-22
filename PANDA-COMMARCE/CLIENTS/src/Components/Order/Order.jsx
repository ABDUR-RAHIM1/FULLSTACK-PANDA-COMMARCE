import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Notification from "../../Components/Notification/Notification"
import "./Order.css"

function Order() {
    const [message, setMessage] = useState('')
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/order/getOrder ")
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [order])

    //  cancel order 
    const handleCancel = (id) => {
        fetch(`http://localhost:8000/order/deleteOrder/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => setMessage(data.message))
    }


    // order details 
    const handleOrderDetails = (id) => {
        console.log(id, "details")
    }

    return (
        <div className='orderContainer'>
            {message === "Order Cancel Succcessfully Done" && <Notification message={message} />}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>Order Id</td>
                        <td>Costomar Name:</td>
                        <td>Order Details</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(order => {
                            return (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.name}</td>
                                    <td>
                                        <Link to={`/orderDetails/${order._id}`}>
                                            <button className='btn btn-primary btn-sm'>Details</button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleCancel(order._id)} className='btn btn-danger btn-sm'>Cancel </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Order