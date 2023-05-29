import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectLightMode } from "../redux/colorSlice"

import LoginCard from "../components/LoginCard"
import RegisterCard from "../components/RegisterCard"
import { Tabs } from "antd"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AuthPage = () => {
    const lightMode = useSelector(selectLightMode)
    const [searchParams] = useSearchParams()
    const redirect = searchParams.get('redirect')
    const items = [
        {
          key: '1',
          label: `SIGN UP`,
          children: <RegisterCard redirect={redirect} />,
        },
        {
          key: '2',
          label: `LOG IN`,
          children: <LoginCard redirect={redirect} />,
        },
      ];

    return (
        <div className={`mainLayout ${lightMode ? 'bgAuth' : 'bgAuthDark'} `}>
            {/* <Helmet><title>Attimo Pizzeria | Login</title></Helmet> */}
            <div className="layoutHeader fullWidth" >
                <Header />
            </div>
            <div className="layoutContent container">
                <div className={lightMode ? 'authCard' : 'authCardDark'} >
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        items={items}
                        tabBarStyle={{
                            fontFamily: 'Alegreya Sans',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            // color: '#BFC8E1',
                            // marginTop: '10rem',
                            // marginBottom: '6.5rem'
                        }}
                    />
                </div>
            </div>
                <Footer className="layoutFooter" />
        </div>
        
    )
}

export default AuthPage