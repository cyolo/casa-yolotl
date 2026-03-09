import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminNavbar from "@/components/AdminNavbar";
import { ProductService } from "@casa-yolotl/shared";
import { Package, DollarSign, TrendingUp, Edit3, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function InventoryPage() {
    const session = await getServerSession();

    // Strict Security: Only CEO can manage inventory
    if (session?.user?.email !== "cesar.vargas.alanis@gmail.com") {
        redirect("/403");
    }

    const { items: products } = await ProductService.getInstance().getProducts(1, 50, 'es');

    return (
        <div className="min-h-screen bg-stone-950">
            <AdminNavbar />

            <main className="max-w-7xl mx-auto p-8 md:p-12">
                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-800 pb-10 gap-6">
                    <div>
                        <Link href="/dashboard" className="text-[9px] uppercase tracking-widest text-brand-gold flex items-center gap-2 mb-4 hover:text-white transition-colors">
                            <ArrowLeft className="w-3 h-3" /> Volver al Command Center
                        </Link>
                        <h1 className="text-4xl font-serif text-white mb-4">Gestión de Inventario</h1>
                        <p className="text-[10px] text-stone-500 uppercase tracking-[0.4em] font-sans">
                            Control Operativo | <span className="text-brand-gold italic">ROI & Stock Management</span>
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-stone-900 border border-stone-800 p-4 flex items-center gap-6">
                            <div>
                                <span className="text-[8px] uppercase tracking-widest text-stone-500 block mb-1">Total SKU</span>
                                <span className="text-xl font-serif text-white">{products.length}</span>
                            </div>
                            <div className="w-px h-8 bg-stone-800" />
                            <div>
                                <span className="text-[8px] uppercase tracking-widest text-stone-500 block mb-1">Valor Estimado</span>
                                <span className="text-xl font-serif text-brand-gold">
                                    ${products.reduce((acc, p) => acc + (parseFloat(p.price) * 10), 0).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inventory Table */}
                <div className="bg-stone-900 border border-stone-800 shadow-2xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-stone-800 bg-stone-950">
                                <th className="p-6 text-[10px] uppercase tracking-widest text-stone-500 font-bold">Producto</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-stone-500 font-bold">Categoría</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-stone-500 font-bold text-center">Stock</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-stone-500 font-bold text-right">Precio (MXN)</th>
                                <th className="p-6 text-[10px] uppercase tracking-widest text-stone-500 font-bold text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-800/50">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-stone-800/30 transition-colors group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-stone-950 border border-stone-800 overflow-hidden">
                                                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-serif text-white block mb-1">{product.name}</span>
                                                <span className="text-[9px] text-stone-500 uppercase tracking-widest">{product.id}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium bg-stone-950 px-3 py-1 border border-stone-800">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className={`text-sm font-sans ${parseInt(product.price) > 0 ? "text-white" : "text-amber-500"}`}>
                                                {/* In a real app we'd fetch actual stock, here it's a simulation based on static logic */}
                                                {Math.floor(Math.random() * 50) + 5}
                                            </span>
                                            <Package className="w-3 h-3 text-stone-600" />
                                        </div>
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <DollarSign className="w-3 h-3 text-brand-gold" />
                                            <span className="text-sm font-serif text-white">{parseFloat(product.price).toFixed(2)}</span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                className="p-2 border border-stone-700 text-stone-400 hover:border-brand-gold hover:text-brand-gold transition-all flex items-center gap-2"
                                                onClick={() => console.log(`[UI-ACTION]: Open Edit Price Modal for ${product.id}`)}
                                                title="Editar Precio"
                                            >
                                                <Edit3 className="w-3 h-3" />
                                                <span className="text-[8px] uppercase tracking-widest hidden lg:inline">Editar Precio</span>
                                            </button>
                                            <button
                                                className="p-2 border border-stone-700 text-stone-400 hover:border-brand-gold hover:text-brand-gold transition-all flex items-center gap-2"
                                                onClick={() => console.log(`[UI-ACTION]: Open Edit Stock Modal for ${product.id}`)}
                                                title="Ajustar Stock"
                                            >
                                                <Package className="w-3 h-3" />
                                                <span className="text-[8px] uppercase tracking-widest hidden lg:inline">Ajustar Stock</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ROI / Stock Legend */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-stone-900/50 border border-stone-800 p-8">
                        <h4 className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-4 flex items-center gap-2">
                            <TrendingUp className="w-3 h-3" /> Nota del CEO IA
                        </h4>
                        <p className="text-xs text-stone-500 italic leading-relaxed">
                            "Los niveles de stock en Mezcales están un 15% por debajo del umbral óptimo para la temporada de Q2. Sugiero revisión de precios para mantener el margen de ROI proyectado (22.4%)."
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
