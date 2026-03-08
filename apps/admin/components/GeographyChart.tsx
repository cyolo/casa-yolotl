"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { BRAND_COLORS } from "@casa-yolotl/shared";
// import { useLanguage } from "@/context/LanguageContext"; // To be updated if admin has context

export default function GeographyChart() {
    // const { t } = useLanguage();

    // Placeholder for translation hook, currently using static
    const translate = (key: string, fallback: string) => fallback;

    const data = [
        { name: translate("Admin.geo.europe", "Mercado Europa"), value: 65 },
        { name: translate("Admin.geo.na", "Norteamérica"), value: 25 },
        { name: translate("Admin.geo.asia", "Asia Pacífico"), value: 10 },
    ];

    return (
        <div className="h-[300px] w-full mt-8 bg-[#F5F5F1] p-4 rounded-lg">
            <h3 className="text-[#1A1A1A] text-sm uppercase tracking-widest font-bold mb-4">
                {translate("Admin.geo.title", "Ventas/Interés por Región")}
            </h3>
            <ResponsiveContainer width="100%" height="100%" debounce={100}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" horizontal={false} />
                    <XAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#1A1A1A', fontSize: 10 }}
                    />
                    <YAxis
                        dataKey="name"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#1A1A1A', fontSize: 10, fontWeight: 'bold' }}
                        width={110}
                    />
                    <Tooltip
                        cursor={{ fill: 'rgba(197, 160, 89, 0.1)' }}
                        contentStyle={{ backgroundColor: BRAND_COLORS.CREAM, border: `1px solid ${BRAND_COLORS.GOLD}`, fontSize: '10px', color: BRAND_COLORS.BLACK }}
                    />
                    <Bar
                        name={translate("Admin.geo.share", "Participación (%)")}
                        dataKey="value"
                        radius={[0, 2, 2, 0]}
                        barSize={24}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.name === translate("Admin.geo.europe", "Mercado Europa") ? BRAND_COLORS.GOLD : BRAND_COLORS.BLACK} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
