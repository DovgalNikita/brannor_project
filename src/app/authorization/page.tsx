import { NextPage } from "next";
import styles from './page.module.scss';
import Input from "@/components/UI/Input/Input";
import StyledButton from "@/components/UI/StyledButton/StyledButton";

const Authorization: NextPage = () => {
    return(
        <main className={styles.main}>
            <div className={styles.authBlock}>
                <div className={styles.title}>Авторизация</div>
                <Input placeholder="Логин"/>
                <Input placeholder="Пароль"/>
                <StyledButton height="50px">Войти</StyledButton>
            </div>
        </main>
    )
}

export default Authorization;