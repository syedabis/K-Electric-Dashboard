"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { date: "Known", desktop: 222, fill: "var(--chart-1)" },
  { date: "Known - PM", desktop: 97, fill: "var(--chart-2)" },
  { date: "Known - IS", desktop: 167, fill: "var(--chart-3)" },
  { date: "Known Poor", desktop: 242, fill: "var(--chart-4)" },
  { date: "Unknown - LR", desktop: 373, fill: "var(--chart-5)" },
  { date: "Unknown - HR", desktop: 301, fill: "var(--chart-1)" },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  }
} satisfies ChartConfig

export function ChartBarInteractive() {
  return (
    <Card className="py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0!">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 sm:px-8 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey="desktop" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
