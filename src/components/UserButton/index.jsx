import { useNavigate } from 'react-router-dom'
import { useUserInfo } from '../../react-query'
import styles from './userButton.module.css'
import { Icon } from '@iconify/react'
import { theme } from 'antd'

const UserButton = () => {
    const {
        token: { colorPrimary },
      } = theme.useToken();
    const { data: userInfo } = useUserInfo() || {}
    const navigate = useNavigate()

    const goToProfile = () => {
        if(userInfo?.uid)
            navigate("/auth/profile")
        else 
            navigate("/auth?redirect=/auth/profile")
            // navigate("/auth/login?redirect=/auth/profile")
    }

    return (
        <div onClick={goToProfile} className={styles.icon}>
            <Icon icon="ph:user-circle" className='icon' style={{color: colorPrimary, cursor: 'pointer'}} />
            {/* <p>
                {!!userInfo?.name
                    ? `${userInfo?.name}'s`
                    : `請登入`
                }
            </p> */}
        </div>
    )
}

export default UserButton