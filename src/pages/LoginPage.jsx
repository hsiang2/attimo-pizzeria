import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import Header from "../components/Header"
import LoginCard from '../components/LoginCard';
import { useSelector } from 'react-redux';
import { selectLightMode } from '../redux/colorSlice';
import { useSearchParams } from 'react-router-dom';
import RegisterCard from '../components/RegisterCard';


const LoginPage = () => {

    // const lightMode = useSelector(selectLightMode)
    // const [searchParams] = useSearchParams()
    // const redirect = searchParams.get('redirect')
    // const items = [
    //     {
    //       key: '1',
    //       label: `Signup`,
    //       children: <LoginCard redirect={redirect} />,
    //     },
    //     {
    //       key: '2',
    //       label: ``,
    //       children: <RegisterCard redirect={redirect} />,
    //     },
    //   ];

    // return (
    //     <div className={`mainLayout ${lightMode ? 'bgHome' : 'bgHomeDark'} `}>
    //         <Helmet><title>Attimo Pizzeria | Login</title></Helmet>
    //         <div className="layoutHeader fullWidth" >
    //             <Header />
    //         </div>
    //         <div className="layoutContent container">
    //             <Tabs
    //                 defaultActiveKey="1"
    //                 centered
    //                 items={items}
    //                 tabBarStyle={{
    //                     // color: '#BFC8E1',
    //                     marginBottom: '6.5rem'
    //                 }}
    //             />
                    
    //         </div>
    //             <Footer className="layoutFooter" />
    //     </div>
        
    // )
    
    const lightMode = useSelector(selectLightMode)
    const [searchParams] = useSearchParams()
    const redirect = searchParams.get('redirect')

    return(
        <div className={`mainLayout ${lightMode ? 'bgHome' : 'bgHomeDark'} `}>
            <Helmet><title>Attimo Pizzeria | Login</title></Helmet>
                <div className="layoutHeader fullWidth" >
                    <Header />
                </div>
                <div className="layoutContent container">
                    <LoginCard redirect={redirect} />
                </div>
                <Footer className="layoutFooter" />
        </div>
    )
}

export default LoginPage