import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Wallet, Lock } from 'lucide-react';
import { SiEthereum } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { SiPolygon } from "react-icons/si";
import { LineChart, Line, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";

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

const bnbData = [
    { day: "1", value: 45 },
    { day: "2", value: 35 },
    { day: "3", value: 40 },
    { day: "4", value: 30 },
    { day: "5", value: 35 },
    { day: "6", value: 25 },
    { day: "7", value: 20 },
];

const polygonData = [
    { day: "1", value: 30 },
    { day: "2", value: 40 },
    { day: "3", value: 35 },
    { day: "4", value: 45 },
    { day: "5", value: 40 },
    { day: "6", value: 50 },
    { day: "7", value: 55 },
];

const chartConfig = {
    value: {
        label: "Value",
        color: "#8b5cf6",
    },
} satisfies ChartConfig;

const redChartConfig = {
    value: {
        label: "Value",
        color: "#ef4444",
    },
} satisfies ChartConfig;

const Assets = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                {/* Asset Cards - Takes 3 columns */}
                <div className="lg:col-span-3">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">Recommended coins for 24 hours</span>
                            <Badge>3 Assets</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <Select defaultValue="24h">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="24h">24H</SelectItem>
                                    <SelectItem value="7d">7D</SelectItem>
                                    <SelectItem value="30d">30D</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="proof-of-stake">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="proof-of-stake">Proof of Stake</SelectItem>
                                    <SelectItem value="proof-of-work">Proof of Work</SelectItem>
                                    <SelectItem value="delegated">Delegated</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="desc">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="desc">Desc</SelectItem>
                                    <SelectItem value="asc">Asc</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Top Staking Assets</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Ethereum Card */}
                        <Card className='rounded-3xl border-t border-l border-border'>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                            <SiEthereum className="w-5 h-5 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Proof of Stake</div>
                                            <div className="font-medium">Ethereum (ETH)</div>
                                        </div>
                                    </div>
                                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="text-3xl font-bold mb-2">13.62%</div>
                                <div className="flex items-center gap-1 mb-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-green-500 text-sm">6.25%</span>
                                </div>
                                <div className="h-16 relative">
                                    <div className="absolute top-2 right-2 text-xs text-primary font-medium z-10">+$2,956</div>
                                    {/* Mini Chart */}
                                    <ChartContainer config={chartConfig} className="h-full w-full">
                                        <LineChart data={ethereumData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="2 2" stroke="#9ca3af" />
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

                        {/* BNB Chain Card */}
                        <Card className='rounded-3xl border-t border-l border-border'>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                            <SiBinance className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Proof of Stake</div>
                                            <div className="font-medium">BNB Chain</div>
                                        </div>
                                    </div>
                                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="text-3xl font-bold mb-2">12.72%</div>
                                <div className="flex items-center gap-1 mb-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-green-500 text-sm">5.67%</span>
                                </div>
                                <div className="h-16 relative">
                                    <div className="absolute top-2 right-2 text-xs text-primary font-medium z-10">+$2,009</div>
                                    {/* Mini Chart */}
                                    <ChartContainer config={chartConfig} className="h-full w-full">
                                        <LineChart data={bnbData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="2 2" stroke="#9ca3af" />
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

                        {/* Polygon Card */}
                        <Card className='rounded-3xl border-t border-l border-border'>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                            <SiPolygon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground">Proof of Stake</div>
                                            <div className="font-medium">Polygon (Matic)</div>
                                        </div>
                                    </div>
                                    <TrendingDown className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="text-3xl font-bold mb-2">6.29%</div>
                                <div className="flex items-center gap-1 mb-4">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-red-500 text-sm">1.89%</span>
                                </div>
                                <div className="h-16 relative">
                                    <div className="absolute top-2 right-2 text-xs text-red-500 font-medium z-10">-$0,987</div>
                                    {/* Mini Chart */}
                                    <ChartContainer config={redChartConfig} className="h-full w-full">
                                        <LineChart data={polygonData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="2 2" stroke="#9ca3af" />
                                            <XAxis dataKey="day" hide />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#ef4444"
                                                strokeWidth={2}
                                                dot={{ fill: "#ef4444", strokeWidth: 2, r: 3 }}
                                                activeDot={{ r: 4, fill: "#ef4444" }}
                                            />
                                        </LineChart>
                                    </ChartContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Image Card - Takes 1 column and full height */}
                <div className="lg:col-span-1 border border-white/20 rounded-2xl">
                    <Card
                        className="h-full relative"
                        style={{
                            backgroundImage: "url('/images/stars.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        {/* Black overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
                        <CardContent className="h-full flex flex-col justify-between relative z-10">
                            {/* Top Section - Logo and Badge */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                        <span className="text-black font-bold text-lg">S</span>
                                    </div>
                                </div>
                                <Badge className="bg-purple-500 text-white">New</Badge>
                            </div>

                            {/* Middle Section - Title and Description */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-white text-xl font-bold mb-4">Liquid Staking Portfolio</h3>
                                <p className="text-white/80 text-base leading-relaxed">An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking</p>
                            </div>

                            {/* Bottom Section - Buttons */}
                            <div className="flex flex-col gap-3">
                                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                    <Wallet className="w-4 h-4" />
                                    Connect with Wallet
                                </button>
                                <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                    <Lock className="w-4 h-4" />
                                    Enter a Wallet Address
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Assets