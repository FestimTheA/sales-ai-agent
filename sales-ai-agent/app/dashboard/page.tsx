// Imports

"use client";

import { ResponsiveFunnel } from '@nivo/funnel'
import { data } from './data'

// Define the type for Funnel Data
type FunnelData = {
  id: string
  value: number
  label: string
}

// Funnel Chart 
const MyResponsiveFunnel = ({ data }: { data: FunnelData[] }) => (
    <div style={{ height: '65vh' }}>
        <ResponsiveFunnel
            data={data}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            direction="horizontal"
            shapeBlending={0.1}
            valueFormat=" >-,.4~r"
            colors={['#6ea9d7', '#4089ce', '#2171b5', '#08519c']}  // Medium blue to dark blue
            borderWidth={50}  // Increased this so it doesn't look like a condom
            borderOpacity={1}
            labelColor={{
                from: 'color',
                modifiers: [['brighter', 10]]
            }}
            theme={{
                labels: {
                    text: {
                        fontSize: "var(--nextui-font-size-small)",
                        fontFamily: "var(--font-sans)",
                    }
                },
                // Tooltip on Hover Config
                tooltip: {
                    container: {
                        background: 'hsl(var(--nextui-default-100) / 0.9)',
                        color: 'hsl(var(--nextui-foreground-600))',
                        fontSize: "var(--nextui-font-size-small)",
                        fontFamily: "var(--font-sans)",
                        borderRadius: '15px',
                        // boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
                        height: "54px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                // Grid Lines Config
                grid: {
                    line: {
                        stroke: "hsl(var(--nextui-default-200))",
                        opacity: 1
                    }
                }
            }}
            enableBeforeSeparators={false}
            beforeSeparatorLength={100}
            beforeSeparatorOffset={20}
            enableAfterSeparators={false}
            afterSeparatorLength={100}
            afterSeparatorOffset={20}
            currentPartSizeExtension={10}
            currentBorderWidth={40}
            motionConfig="wobbly"
        />

        {/* Color Legend at bottom of Funnel Chart */}
        <div className="mt-4 flex gap-4 justify-center" style={{ fontSize: "var(--nextui-font-size-small)" }}>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#6ea9d7', borderRadius: '3px' }}></div>
                <span>Sourced</span>
            </div>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#4089ce', borderRadius: '3px' }}></div>
                <span>Outreached</span>
            </div>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#2171b5', borderRadius: '3px' }}></div>
                <span>Accepted</span>
            </div>
            <div className="flex items-center gap-2">
                <div style={{ width: '12px', height: '12px', backgroundColor: '#08519c', borderRadius: '3px' }}></div>
                <span>Responded</span>
            </div>
        </div>
    </div>
)

// Page Layout
export default function Page() {
    return (
        <>
            {/* Title */}
            <div className="mb-[18px] flex items-center justify-between">
                <div className="flex w-[226px] items-center gap-2">
                    <h1 className="text-2xl font-[700] leading-[32px]">Dashboard</h1>
                </div>
            </div>
            {/* Funnel Chart Container */}
            <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full" 
                 style={{ height: 'calc(100vh - 200px)' }}>
                <MyResponsiveFunnel data={data} />
            </div>
        </>
    );
}
