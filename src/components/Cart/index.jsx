import { Icon } from "@iconify/react"
import { Badge, Drawer } from "antd"
import { useState } from "react";

const Cart = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

    return(
        <>
            <div onClick={showDrawer}>
                <Badge>
                    <Icon icon="solar:cart-large-4-linear"/>
                </Badge>
            </div>
            <Drawer onClose={onClose} open={open}>

            </Drawer>
            
        </>
    )
}

export default Cart