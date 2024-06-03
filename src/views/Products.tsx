import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import { getProducts, updateAvailability } from "../services/ProductService";
import { Product } from "../types";
import ProductDetails from "../components/ProductDetails";

export async function loader() {
    try {
        const products = await getProducts();
        return products || [];
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
}

export async function action({ request }: ActionFunctionArgs) {
    const data = await Object.fromEntries(await request.formData())
    await updateAvailability(+data.id)

    return {}
}

export default function Products() {
    const products = useLoaderData() as Product[]
    return (
        <>
            <div className="flex justify-between flex-wrap gap-1">
                <h2 className="sm:text-4xl text-3xl font-black mb-3 text-slate-500">
                    Productos
                </h2>
                <Link
                    to={'productos/nuevo'}
                    className=" rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
                >
                    Agregar Producto
                </Link>
            </div>

            <div className="p-2">
                <div className="overflow-x-auto w-full">
                    <table className="w-full mt-5 table-auto">
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="p-2">Producto</th>
                                <th className="p-2">Precio</th>
                                <th className="p-2">Disponibilidad</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <ProductDetails
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};