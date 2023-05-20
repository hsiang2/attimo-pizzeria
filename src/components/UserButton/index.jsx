import { useNavigate } from 'react-router-dom'
import { useUserInfo } from '../../react-query'
import styles from './userButton.module.css'
import { Icon } from '@iconify/react'

const UserButton = () => {
    const { data: userInfo } = useUserInfo()
    const navigate = useNavigate()

    const goToProfile = () => {
        if(userInfo?.name)
            navigate("/auth/profile")
        else 
            navigate("/auth/login?redirect=/auth/profile")
    }

    return (
        <div onClick={goToProfile} className={styles.icon}>
            <Icon icon="ph:user-circle" className='icon'/>
            <p>
                {!!userInfo?.name
                    ? `${userInfo?.name}'s`
                    : `請登入`
                }
            </p>
        </div>
    )
}

export default UserButton