import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { Button } from './ui/button';
import Image from 'next/image';
import { ScrollArea } from './ui/scroll-area';

// Chart data for each asset
const ethereumData = [
    { day: "1", value: 45 },
    { day: "2", value: 35 },
    { day: "3", value: 40 },
    { day: "4", value: 30 },
    { day: "5", value: 35 },
    { day: "6", value: 25 },
    { day: "7", value: 20 },
];

// MTBF, MTBR, and MTTF data with three lines
const mtbfMtbrData = [
    { day: "1", mtbf: 2.1, mtbr: 1.8, mttf: 2.5 },
    { day: "2", mtbf: 2.3, mtbr: 1.9, mttf: 2.7 },
    { day: "3", mtbf: 2.0, mtbr: 1.7, mttf: 2.3 },
    { day: "4", mtbf: 2.4, mtbr: 2.0, mttf: 2.8 },
    { day: "5", mtbf: 2.2, mtbr: 1.8, mttf: 2.6 },
    { day: "6", mtbf: 2.5, mtbr: 2.1, mttf: 2.9 },
    { day: "7", mtbf: 2.3, mtbr: 1.9, mttf: 2.7 },
];

const bnbData = [
    { day: "1", value: 45 },
    { day: "2", value: 35 },
    { day: "3", value: 40 },
    { day: "4", value: 30 },
    { day: "5", value: 35 },
    { day: "6", value: 25 },
    { day: "7", value: 20 },
];

const chartConfig = {
    value: {
        label: "Value",
        color: "#8b5cf6",
    },
} satisfies ChartConfig;

const mtbfMtbrChartConfig = {
    mtbf: {
        label: "MTBF",
        color: "#8b5cf6",
    },
    mtbr: {
        label: "MTBR", 
        color: "#10b981",
    },
    mttf: {
        label: "MTTF",
        color: "#f59e0b",
    },
    time: {
        label: "Time (Hours)",
        color: "#6b7280",
    },
    day: {
        label: "Days",
        color: "#6b7280",
    },
} satisfies ChartConfig;

const Assets = () => {
    return (
        <div className="w-full p-4 lg:p-6 font-poppins">
            <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-3xl font-bold">Assets Management</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
                </ul>
                <div className='flex flex-col gap-2'>
                    <Button variant="outline" className='w-24'>Asset Type</Button>
                    <Button variant="outline" className='w-24'>Location</Button>
                </div>
                <Image src="/images/k-electric.png" alt="Assets" width={300} height={200} className='w-[200px] h-[100px]' />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Asset Utilization Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 px-2 flex-col">
                            <div className="text-3xl font-bold">Asset Utilization</div>
                            <div className="text-3xl font-bold text-green-400">95%</div>
                        </div>
                        <div className="h-[120px] relative px-4">
                            {/* Mini Chart */}
                            <ChartContainer config={chartConfig} className="h-full w-full">
                                <LineChart data={ethereumData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} height={120}>
                                    <CartesianGrid />
                                    <XAxis dataKey="day" hide />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#8b5cf6" }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Total Assets Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 px-2 flex-col">
                            <div className="text-3xl font-bold">Total Assets</div>
                            <div className="text-3xl font-bold text-green-400">100</div>
                        </div>
                        <div className="h-[120px] relative px-4">
                            {/* Mini Chart */}
                            <ChartContainer config={chartConfig} className="h-full w-full">
                                <LineChart data={bnbData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} height={120}>
                                    <CartesianGrid />
                                    <XAxis dataKey="day" hide />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#8b5cf6" }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* MTBF and MTBR Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 px-4 flex-col">
                            <div className="text-xl font-bold">MTBF and MTBR</div>
                            <div className="text-xl font-bold text-green-400">2.1Hrs</div>
                        </div>
                        <div className="h-[150px] relative w-full px-2">
                            {/* Dual Line Chart - Days on X, Values on Y */}
                            <ChartContainer config={mtbfMtbrChartConfig} className="h-full w-full">
                                <LineChart
                                    data={mtbfMtbrData}
                                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                                    width={undefined}
                                    height={150}
                                >
                                    <CartesianGrid />
                                    <XAxis
                                        dataKey="day"
                                        stroke="#6b7280"
                                        fontSize={10}
                                        tickLine={{ stroke: "#6b7280" }}
                                        axisLine={{ stroke: "#6b7280" }}
                                    />
                                    <YAxis
                                        stroke="#6b7280"
                                        fontSize={10}
                                        tickLine={{ stroke: "#6b7280" }}
                                        axisLine={{ stroke: "#6b7280" }}
                                        width={30}
                                        domain={[1.5, 2.6]}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbf"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#8b5cf6" }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbr"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#10b981" }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Alerts Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 flex-col px-2 mb-2">
                            <div className="text-3xl font-bold">Alerts</div>
                        </div>
                        <div className="h-auto relative px-4">
                            <ScrollArea className='h-[150px] w-full'>
                                <ul className='space-y-2'>
                                    <li>🔴 Asset ID: TR-001 (Transformer) - Health: 15% - Failure Risk: HIGH</li>
                                    <li>🔴Asset ID: GEN-005 (Generator) - Maintenance Overdue: 3 days</li>
                                    <li>🟡 Asset ID: CBL-008 (Cable) - Health: 45% - Next Check: 2 weeks</li>
                                    <li>🟡 Asset ID: PNL-003 (Panel) - Maintenance Due: 1 week</li>
                                    <li>🔴Asset ID: GEN-003 (Generator) - Maintenance Overdue: 4 days</li>
                                </ul>
                            </ScrollArea>
                        </div>
                    </CardContent>
                </Card>

                {/* Asset Health Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 px-4 flex-col">
                            <div className="text-xl font-bold">Resources</div>
                            <div className="text-sm font-bold text-green-400">Manpower and equipment Graph</div>
                        </div>
                        <div className="h-[150px] relative w-full px-2">
                            {/* Dual Line Chart - Days on X, Values on Y */}
                            <ChartContainer config={mtbfMtbrChartConfig} className="h-full w-full">
                                <LineChart
                                    data={mtbfMtbrData}
                                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                                    width={undefined}
                                    height={150}
                                >
                                    <CartesianGrid />
                                    <XAxis
                                        dataKey="day"
                                        stroke="#6b7280"
                                        fontSize={10}
                                        tickLine={{ stroke: "#6b7280" }}
                                        axisLine={{ stroke: "#6b7280" }}
                                    />
                                    <YAxis
                                        stroke="#6b7280"
                                        fontSize={10}
                                        tickLine={{ stroke: "#6b7280" }}
                                        axisLine={{ stroke: "#6b7280" }}
                                        width={30}
                                        domain={[1.5, 2.6]}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbf"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#8b5cf6" }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbr"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#10b981" }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbr"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#10b981" }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Resources Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 px-4 flex-col">
                            <div className="text-xl font-bold">Resources</div>
                            <div className="text-sm font-bold text-green-400">Manpower and equipment Graph</div>
                        </div>
                        <div className="h-[150px] relative w-full px-2">
                            {/* Triple Line Chart - Days on X, Values on Y */}
                            <ChartContainer config={mtbfMtbrChartConfig} className="h-full w-full">
                                <LineChart
                                    data={mtbfMtbrData}
                                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                                    width={undefined}
                                    height={150}
                                >
                                    <CartesianGrid />
                                    <XAxis
                                        dataKey="day"
                                        stroke="#6b7280"
                                        fontSize={10}
                                        tickLine={{ stroke: "#6b7280" }}
                                        axisLine={{ stroke: "#6b7280" }}
                                    />
                                    <YAxis
                                        stroke="#6b7280"
                                        fontSize={10}
                                        tickLine={{ stroke: "#6b7280" }}
                                        axisLine={{ stroke: "#6b7280" }}
                                        width={30}
                                        domain={[1.5, 2.9]}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbf"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#8b5cf6" }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbr"
                                        stroke="#10b981"
                                        strokeWidth={2}
                                        dot={{ fill: "#10b981", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#10b981" }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="mttf"
                                        stroke="#f59e0b"
                                        strokeWidth={2}
                                        dot={{ fill: "#f59e0b", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#f59e0b" }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Cost Forecast Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 px-2 flex-col">
                            <div className="text-3xl font-bold">Cost Forecast</div>
                            <div className="text-md font-semibold text-green-400">Location wise cost graph</div>
                        </div>
                        <div className="h-[120px] relative px-4">
                            {/* Mini Chart */}
                            <ChartContainer config={chartConfig} className="h-full w-full">
                                <LineChart data={ethereumData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} height={120}>
                                    <CartesianGrid />
                                    <XAxis dataKey="day" hide />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#8b5cf6" }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Predictive Assets Card */}
                <Card className='rounded-3xl border-t border-l border-border p-0 overflow-hidden h-[250px]'>
                    <CardContent className="py-6 px-0">
                        <div className="flex gap-3 px-2 flex-col">
                            <div className="text-3xl font-bold">Predictive Assets</div>
                            <div className="text-md font-semibold text-green-400">location wise graph</div>
                        </div>
                        <div className="h-[120px] relative px-4">
                            {/* Mini Chart */}
                            <ChartContainer config={chartConfig} className="h-full w-full">
                                <LineChart data={ethereumData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} height={120}>
                                    <CartesianGrid />
                                    <XAxis dataKey="day" hide />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                                        activeDot={{ r: 4, fill: "#8b5cf6" }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default Assets