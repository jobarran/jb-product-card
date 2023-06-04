import React from "react";

import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Defino las props que voy a recibir
export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }:Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

    return (

    <Provider value={{
        counter,
        increaseBy,
        maxCount,
        product
    }}>
        <div
            className={ `${styles.productCard} ${className}` }
            style={ style }
        >

            { 
                children({
                    count: counter,
                    isMaxCountReached: isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product: product,
                    increaseBy: increaseBy,
                    reset: reset
                })
            }

            {/* <ProductImage img={ product.img } />
            <ProductTitle title={product.title } />
            <ProductButtons 
                counter={ counter }
                increaseBy={ increaseBy }
            /> */}

        </div>
    </Provider>

    )
}


