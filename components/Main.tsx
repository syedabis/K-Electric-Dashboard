import React from 'react'
import Assets from './Assets';
import { ChartBarInteractive } from './HorizontalChart';
import { ChartLineInteractive } from './LineChart';

const Main = () => {
    return (
        <main className="flex-1 w-full font-poppins py-6">
            {/* Top Staking Assets Section */}
            <Assets />

            {/* Charts Section */}
            <div className="p-4 lg:p-6">
                <div className="flex flex-col gap-6">
                    {/* Line Chart - Full width */}
                    <div className="w-full">
                        <ChartLineInteractive />
                    </div>
                    
                    {/* Bar Chart - Full width */}
                    <div className="w-full">
                        <ChartBarInteractive />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main