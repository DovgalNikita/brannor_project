"use client";
import { FC, useState } from "react";
import styles from './CounterButton.module.scss';
import { increment, decrement, agregationFunc } from "@/utils/agregationFuncs";

const CounterButton: FC = () => {

    const [value, setValue] = useState <number>(0);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, operation: agregationFunc) => {
        setValue(operation(value));
    }

    return(
        <div className={styles.block}>
            <button className={styles.button} onClick={(e)=>clickHandler(e,decrement)}>-</button>
            <div className={styles.value}>{value}</div>
            <button className={styles.button} onClick={(e)=>clickHandler(e,increment)}>+</button>
        </div>
    )
}

export default CounterButton;