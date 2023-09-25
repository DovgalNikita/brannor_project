import { NextPage } from "next";
import Link from "next/link";
import styles from './page.module.scss';
import Input from "@/components/UI/Input/Input";
import StyledButton from "@/components/UI/StyledButton/StyledButton";

const Authorization: NextPage = () => {
    return(
        <main className={styles.main}>
            <div className={styles.authBlock}>
                <div className={styles.content}>
                    <div className={styles.title}>Авторизация</div>
                    <div className={styles.form}>
                        <Input height="35px" width="100%" placeholder="Логин"/>
                        <Input height="35px" width="100%" placeholder="Пароль"/>
                    </div>
                    <StyledButton height="35px" margin="25px 0 10px">Войти</StyledButton>
                    <Link href="" className={styles.recoveryLink}>Забыли данные? Восстановить пароль</Link>
                    <Link href="" className={styles.registrLink}>У вас еще нет аккаунта? Зарегистрироваться</Link>
                </div>
            </div>
        </main>
    )
}

export default Authorization;