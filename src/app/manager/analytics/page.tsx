import { ArrowDownRight, ArrowUpRight, BarChart4, TrendingDown, Globe, Search, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdvancedAnalyticsPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Procurement Intelligence & Analytics</h1>
                    <p className="text-muted-foreground mt-1">
                        Enterprise dashboard tracking cost savings, performance, and market internet signals.
                    </p>
                </div>
            </div>

            {/* TOP KPI CARDS */}
            <div className="grid gap-4 md:grid-cols-4">
                {[
                    { title: "Total AI Savings", value: "$14,500", desc: "+12% vs Manual Sourcing", icon: TrendingDown, color: "text-green-500" },
                    { title: "Internet Market Avg", value: "$4.15/brick", desc: "ZimStat Aggregation", icon: Globe, color: "text-blue-500" },
                    { title: "Avg Fulfillment Speed", value: "3.2 Days", desc: "-15% Bottleneck Time", icon: BarChart4, color: "text-amber-500" },
                    { title: "Total Spend (YTD)", value: "$425,000", desc: "On track with budget", icon: ArrowUpRight, color: "text-primary" },
                ].map((stat, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* COST TRENDS & SPEND ANALYSIS */}
                <div className="md:col-span-2 rounded-xl border border-border bg-card shadow-sm p-6">
                    <h2 className="font-semibold mb-4">Historical Procurement Cost vs Market Signal (6 Mo)</h2>
                    <div className="h-64 relative flex items-end justify-between gap-2 border-b border-l border-border pb-2 pl-2">
                        {/* Mock area chart / bars */}
                        {[70, 85, 60, 95, 75, 45].map((val, idx) => (
                            <div key={idx} className="flex-1 flex items-end gap-1 group relative">
                                <div className="w-1/2 bg-blue-500/20 rounded-t border border-blue-500/50" style={{ height: `${val}%` }} />
                                <div className="w-1/2 bg-primary/80 rounded-t" style={{ height: `${val - 10}%` }} />

                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Market: ${val}k | You: ${val - 10}k
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground px-2">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    </div>
                    <div className="flex items-center gap-4 mt-6 text-sm">
                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-blue-500/20 border border-blue-500/50 rounded-sm" /> Internet Aggregated Avg</div>
                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-primary/80 border border-primary rounded-sm" /> ZimProcure Negotiated Rate</div>
                    </div>
                </div>

                {/* INTERNET DATA AGGREGATION & SIGNALS */}
                <div className="rounded-xl border border-border bg-card shadow-sm p-0 overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50">
                        <div className="flex items-center gap-2 font-semibold">
                            <Search className="w-4 h-4 text-blue-500" /> Web Market Intelligence
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Real-time data aggregated from public Zim construction listings to identify leverage.
                        </p>
                    </div>
                    <div className="p-0 flex-1 overflow-y-auto divide-y divide-border">
                        {[
                            { item: "Common Bricks (Per 1000)", price: "$120 - $140", trend: "+5% (High Demand)", source: "Harare Classifieds API" },
                            { item: "PC15 Cement (50kg)", price: "$9.50 - $11.00", trend: "-2% (Steady)", source: "Regional Hardware Scraping" },
                            { item: "3/4 Stones (Cubic Meter)", price: "$25.00 - $35.00", trend: "+12% (Shortage)", source: "Public Tender Data" },
                        ].map((signal, idx) => (
                            <div key={idx} className="p-4 hover:bg-muted/30 transition-colors">
                                <div className="flex justify-between font-medium text-sm">
                                    <span>{signal.item}</span>
                                    <span>{signal.price}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${signal.trend.startsWith('+') ? 'bg-red-500/10 text-red-600' : 'bg-green-500/10 text-green-600'}`}>
                                        {signal.trend}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3" /> {signal.source}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BOTTLENECKS & SUPPLIER PERFORMANCE */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card shadow-sm p-6">
                    <h2 className="font-semibold mb-4">Logistics Bottleneck Analysis</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        AI analysis identifies exactly where your procurement cycle is delayed.
                    </p>
                    <div className="space-y-4">
                        {[
                            { stage: "Supplier Quoting Phase", duration: "1.2 Days", percent: 20 },
                            { stage: "Manager Approval Delay", duration: "4.5 Days (Critical)", percent: 60, alert: true },
                            { stage: "Logistics Fulfillment", duration: "2.1 Days", percent: 30 },
                        ].map((b, i) => (
                            <div key={i} className="space-y-1.5">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>{b.stage}</span>
                                    <span className={b.alert ? "text-red-600 dark:text-red-400 font-bold" : ""}>{b.duration}</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${b.alert ? 'bg-red-500' : 'bg-primary/50'}`} style={{ width: `${b.percent}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-border bg-card shadow-sm p-6">
                    <h2 className="font-semibold mb-4">Top Intelligent Supplier Recommendations</h2>
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase border-b border-border">
                            <tr>
                                <th className="pb-2">Supplier Network</th>
                                <th className="pb-2 text-right">Trust Score</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {[
                                { name: "BuildMat Zimbabwe", score: 98, type: "Cement & Bricks" },
                                { name: "Prestige Construction", score: 85, type: "Steel & Scaffolding" },
                                { name: "FastTrack Logistics", score: 92, type: "Transport Only" },
                            ].map((s, i) => (
                                <tr key={i}>
                                    <td className="py-3">
                                        <div className="font-medium">{s.name}</div>
                                        <div className="text-xs text-muted-foreground">{s.type}</div>
                                    </td>
                                    <td className="py-3 text-right">
                                        <div className="font-bold">{s.score}/100</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
