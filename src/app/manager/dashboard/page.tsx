import { AlertCircle, Clock, FileCheck2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ManagerDashboardPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                    <p className="text-muted-foreground mt-1">
                        Monitor your procurement activities and supplier bids.
                    </p>
                </div>
                <Link href="/manager/rfq/new">
                    <Button>Create Procurement Request</Button>
                </Link>
            </div>

            {/* KPI CARDS */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Active RFQs", value: "12", desc: "+2 since last week", icon: Clock },
                    { title: "Pending Quotes", value: "34", desc: "18 require review", icon: AlertCircle },
                    { title: "Awarded Contracts", value: "156", desc: "+12% completion rate", icon: FileCheck2 },
                    { title: "Monthly Spend", value: "$42.5k", desc: "-4% optimized vs budget", icon: TrendingUp },
                ].map((stat, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-sm">
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* RECENT RFQS TABLE */}
                <div className="md:col-span-2 rounded-xl border border-border bg-card shadow-sm">
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <h2 className="font-semibold">Recent Requests for Quotation</h2>
                        <Link href="/manager/rfq/compare" className="text-sm text-primary hover:underline">View all</Link>
                    </div>
                    <div className="p-0">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 border-b border-border text-muted-foreground">
                                <tr>
                                    <th className="px-6 py-3 font-medium">RFQ ID</th>
                                    <th className="px-6 py-3 font-medium">Material</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium text-right">Quotes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { id: "RFQ-5042", material: "Portland Cement (50kg)", status: "Active", max: 5 },
                                    { id: "RFQ-5041", material: "Standard Common Bricks", status: "Evaluating", max: 8 },
                                    { id: "RFQ-5040", material: "Deformed Steel Bars (12mm)", status: "Awarded", max: 3 },
                                    { id: "RFQ-5039", material: "River Sand (m³)", status: "Closed", max: 12 },
                                ].map((row, i) => (
                                    <tr key={i} className="bg-card hover:bg-muted/50 transition-colors cursor-pointer">
                                        <td className="px-6 py-4 font-medium">
                                            <Link href="/manager/rfq/compare" className="hover:text-primary transition-colors">{row.id}</Link>
                                        </td>
                                        <td className="px-6 py-4">{row.material}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                        ${row.status === 'Active' ? 'bg-green-500/10 text-green-600 dark:text-green-400' :
                                                    row.status === 'Evaluating' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                                                        'bg-muted text-muted-foreground'}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">{row.max}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ACTIVITY FEED */}
                <div className="rounded-xl border border-border bg-card shadow-sm">
                    <div className="p-6 border-b border-border">
                        <h2 className="font-semibold">Procurement Insights</h2>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="space-y-2">
                            <div className="text-sm font-medium">Action Required</div>
                            <p className="text-sm text-muted-foreground">You have 5 quotations ready for evaluation for RFQ-5041.</p>
                            <Link href="/manager/rfq/compare">
                                <Button variant="outline" size="sm" className="w-full mt-2">Compare Quotes</Button>
                            </Link>
                        </div>
                        <div className="space-y-2 pt-4 border-t border-border">
                            <div className="text-sm font-medium">Market Alert</div>
                            <p className="text-sm text-muted-foreground">Cement prices in Harare have fluctuated +2.5% this week.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
