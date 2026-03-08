"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    ReferenceLine
} from "recharts";
import { BRAND_COLORS } from "@casa-yolotl/shared";

const data = [
    { name: "Margen Neto", value: 24, target: 25 },
    { name: "ROAS", value: 4.2, target: 4.0 },
    { name: "Cashflow", value: 22, target: 20 },
];

export default function ROIChart() {
    return (
        <div className="h-[300px] w-full mt-8 bg-[#F5F5F1] p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="100%" debounce={100}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#1A1A1A', fontSize: 10, fontWeight: 'bold' }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#1A1A1A', fontSize: 10 }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: BRAND_COLORS.CREAM, border: `1px solid ${BRAND_COLORS.GOLD}`, fontSize: '10px', color: BRAND_COLORS.BLACK }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '20px', color: BRAND_COLORS.BLACK }}
                    />
                    <ReferenceLine y={20} label={{ position: 'top', value: 'Min Margin 20%', fill: BRAND_COLORS.BLACK, fontSize: 10 }} stroke={BRAND_COLORS.GOLD} strokeDasharray="5 5" />
                    <Line
                        name="Actual (%)"
                        type="monotone"
                        dataKey="value"
                        stroke="#1A1A1A"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#1A1A1A' }}
                        activeDot={{ r: 6, fill: BRAND_COLORS.GOLD }}
                    />
                    <Line
                        name="Target (%)"
                        type="monotone"
                        dataKey="target"
                        stroke={BRAND_COLORS.GOLD}
                        strokeWidth={2}
                        strokeDasharray="3 3"
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
