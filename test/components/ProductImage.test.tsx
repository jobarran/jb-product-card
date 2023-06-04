import React from "react";
import renderer from "react-test-renderer";
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../../src/components/data/products';

describe('ProductImage', () => { 
    
    test('Debe mostrar el componente correctamente con la imagen personalizado', () => {

        const wrapper = renderer.create(
            <ProductImage 
                img="https://hola.jpg"
                className="custom-class"
            />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot()


    });

    test('Debe mostrar el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>

            {
                () => (
                    <ProductImage />
                )
            }

            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot()

    })

 })