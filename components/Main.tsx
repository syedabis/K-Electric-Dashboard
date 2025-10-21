import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import Assets from './Assets';

const Main = () => {
    return (
        <div>
            <main className="flex-1 p-4 lg:p-6">
                {/* Top Staking Assets Section */}
                <Assets />

                {/* Liquid Staking Portfolio */}
                <Card className="bg-black/60 border-primary/20 mb-8">
                    <CardContent className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-2xl font-bold text-white">Stakent®</h3>
                            <Badge variant="secondary" className="bg-white/20 text-white">New</Badge>
                        </div>
                        <h4 className="text-3xl font-bold mb-2 text-white">Liquid Staking Portfolio</h4>
                        <p className="text-white/80 mb-6">An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking</p>
                        <div className="flex gap-4">
                            <Button className="bg-white text-black hover:bg-white/90">
                                <Lock className="w-4 h-4" />
                                Connect with Wallet
                            </Button>
                            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                                <Lock className="w-4 h-4" />
                                Enter a Wallet Address
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default Main