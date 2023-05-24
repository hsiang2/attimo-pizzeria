import { useOrders } from "../../react-query"

const Orders = () => {
    const { data: orders } = useOrders() || []
    // const { data, isLoading } = useOrders()
    // const orders = data || []
    return (
        orders.map((order) =>
            <div>
                <div>{order.id}</div>
            </div>
        )
    )
}

export default Orders