"use client";

import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AdminNavbar from "@/components/AdminNavbar";
import { ProductService, Product } from "@casa-yolotl/shared";
import { Package, DollarSign, TrendingUp, Edit3, ArrowLeft, Save, X, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function InventoryPage() {
    const { data: session, status } = useSession();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState<{ id: string, type: 'price' | 'stock', value: string } | null>(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    useEffect(() => {
        if (status === "unauthenticated") {
            redirect("/auth/signin");
        }

        // Strict Security: Only CEO can manage inventory
        if (status === "authenticated" && session?.user?.email !== "cesar.vargas.alanis@gmail.com") {
            redirect("/403");
        }

        if (status === "authenticated") {
            fetchProducts();
        }
    }, [status, session]);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const { items } = await ProductService.getInstance().getProducts(1, 50, 'es');
            setProducts(items);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdate = async () => {
        if (!editingProduct) return;
        setIsUpdating(true);
        setMessage(null);

        try {
            const service = ProductService.getInstance();
            if (editingProduct.type === 'price') {
                await service.updatePrice(editingProduct.id, parseFloat(editingProduct.value));
            } else {
                await service.updateStock(editingProduct.id, parseInt(editingProduct.value));
            }

            setMessage({ text: "Cambio aplicado exitosamente.", type: 'success' });
            setTimeout(() => {
                setEditingProduct(null);
                setMessage(null);
                fetchProducts(); // Refresh data
            }, 1000);
        } catch (error) {
            setMessage({ text: "Error al actualizar. Intente de nuevo.", type: 'error' });
        } finally {
            setIsUpdating(false);
        }
    };

    if (status === "loading" || isLoading) {
        return (
            <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-8 h-8 text-brand-gold animate-spin" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Cargando Inventario...</span>
            </div>
        );
    }

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
                        <div className="bg-stone-900 border border-stone-800 p-4 flex items-center gap-6 shadow-2xl">
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
                <div className="bg-stone-900 border border-stone-800 shadow-2xl overflow-hidden mb-12">
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
                                            <div className="w-12 h-12 bg-stone-950 border border-stone-800 overflow-hidden relative">
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
                                            <span className={`text-sm font-sans ${product.stock > 0 ? "text-white" : "text-amber-500 font-bold"}`}>
                                                {product.stock}
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
                                                className="p-2 border border-stone-700 text-stone-400 hover:border-brand-gold hover:text-brand-gold transition-all"
                                                onClick={() => setEditingProduct({ id: product.id, type: 'price', value: product.price })}
                                                title="Editar Precio"
                                            >
                                                <Edit3 className="w-3 h-3" />
                                            </button>
                                            <button
                                                className="p-2 border border-stone-700 text-stone-400 hover:border-brand-gold hover:text-brand-gold transition-all"
                                                onClick={() => setEditingProduct({ id: product.id, type: 'stock', value: product.stock.toString() })}
                                                title="Ajustar Stock"
                                            >
                                                <Package className="w-3 h-3" />
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
                    <div className="bg-stone-900 border border-stone-800 p-8 shadow-xl">
                        <h4 className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-4 flex items-center gap-2">
                            <TrendingUp className="w-3 h-3" /> Nota del CEO IA
                        </h4>
                        <p className="text-xs text-stone-500 italic leading-relaxed">
                            "Los niveles de stock en Mezcales están un 15% por debajo del umbral óptimo para la temporada de Q2. Sugiero revisión de precios para mantener el margen de ROI proyectado (22.4%)."
                        </p>
                    </div>
                </div>
            </main>

            {/* Quick Edit Modal */}
            {editingProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm animate-fade-in">
                    <div className="bg-stone-900 border border-stone-800 p-10 max-w-md w-full shadow-[0_0_50px_rgba(197,160,89,0.1)] relative overflow-hidden">
                        <button
                            onClick={() => setEditingProduct(null)}
                            className="absolute top-6 right-6 text-stone-500 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <h3 className="text-xl font-serif text-white mb-2">
                            {editingProduct.type === 'price' ? 'Ajustar Precio' : 'Actualizar Inventario'}
                        </h3>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-8">
                            Admin Identity: {session?.user?.email}
                        </p>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">
                                    {editingProduct.type === 'price' ? 'Nuevo Valor (MXN)' : 'Cantidad Disponible'}
                                </label>
                                <div className="relative">
                                    {editingProduct.type === 'price' && <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />}
                                    <input
                                        type="number"
                                        value={editingProduct.value}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, value: e.target.value })}
                                        className={`w-full bg-stone-950 border border-stone-800 p-4 text-white focus:border-brand-gold outline-none transition-colors ${editingProduct.type === 'price' ? 'pl-10' : ''}`}
                                        autoFocus
                                    />
                                </div>
                            </div>

                            {message && (
                                <div className={`flex items-center gap-3 p-4 border ${message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
                                    {message.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <X className="w-4 h-4" />}
                                    <span className="text-[10px] uppercase font-bold tracking-widest">{message.text}</span>
                                </div>
                            )}

                            <button
                                onClick={handleUpdate}
                                disabled={isUpdating}
                                className="w-full bg-brand-gold text-stone-900 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {isUpdating ? (
                                    <>
                                        <Loader2 className="w-3 h-3 animate-spin" /> Procesando Cambios...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-3 h-3" /> Aplicar Actualización
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
