# JB-Product-Card

Este es un paquete de prueba de despliegue en NPM

### Joaquin Barrandeguy

## Ejemplo
```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from 'do-product-card'
```

```
<ProductCard
    product={ product }
    initialValues={{
        count: 4,
        // maxCount: 15
    }}
    >
    {
        ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
        )
    }

</ProductCard>
```