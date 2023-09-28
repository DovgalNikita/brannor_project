export type agregationFunc = (value:number) => number; 

export const increment = (value:number) : number => {
    return ++value;
}

export const decrement = (value:number) : number => {
    return --value;
}