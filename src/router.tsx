import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader, action as updateAvailabilityAction } from './views/Products'
import NewProducto, { action as newProductAction } from './views/NewProducto'
import EditProduct, { loader as editProductLoader, action as editProductAction } from './views/EditProduct'
import { action as removeProductAction } from './components/ProductDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProducto />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar',
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: removeProductAction
            }
        ]
    }
])