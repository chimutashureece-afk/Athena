import { Award, Briefcase, Clock, FileText, Send, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupplierDashboardPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Supplier Dashboard</h1>
                    <p className="text-muted-foreground mt-1">
                        BuildMat Zimbabwe
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                            Verified Partner
                        </span>
                    </p>
                </div>
            </div>

            {/* METRICS */}
            <div className="grid gap-4 md:grid-cols-4">
                {[
                    { title: "Reliability Score", value: "98/100", desc: "Top 5% in Harare", icon: Star },
                    { title: "New RFQs", value: "14", desc: "Awaiting your quote", icon: FileText },
                    { title: "Win Rate", value: "42%", desc: "+5% this month", icon: Award },
                    { title: "Avg Response Time", value: "3.2 hrs", desc: "Excellent", icon: Zap },
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
                {/* INBOX TABLE */}
                <div className="md:col-span-2 rounded-xl border border-border bg-card shadow-sm">
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <h2 className="font-semibold">Incoming RFQs (Matches Your Materials)</h2>
                        <Link href="/supplier/inbox">
                            <Button variant="outline" size="sm">View All</Button>
                        </Link>
                    </div>
                    <div className="p-0">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 border-b border-border text-muted-foreground">
                                <tr>
                                    <th className="px-6 py-3 font-medium">RFQ Detail</th>
                                    <th className="px-6 py-3 font-medium">Location</th>
                                    <th className="px-6 py-3 font-medium">Deadline</th>
                                    <th className="px-6 py-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { id: "RFQ-5052", mat: "Portland Cement (500 bags)", loc: "Harare CBD", deadline: "Today" },
                                    { id: "RFQ-5051", mat: "Common Bricks (10k units)", loc: "Msasa", deadline: "Tomorrow" },
                                    { id: "RFQ-5050", mat: "Deformed Steel (12mm)", loc: "Bulawayo", deadline: "In 3 Days" },
                                ].map((row, i) => (
                                    <tr key={i} className="bg-card hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium">{row.mat}</div>
                                            <div className="text-xs text-muted-foreground">{row.id}</div>
                                        </td>
                                        <td className="px-6 py-4">{row.loc}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${row.deadline === 'Today' ? 'bg-red-500/10 text-red-600 border-red-500/20' : 'bg-muted text-muted-foreground border-border'
                                                }`}>
                                                {row.deadline === 'Today' && <Clock className="w-3 h-3 mr-1" />}
                                                {row.deadline}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link href={`/supplier/quote/${row.id}`}>
                                                <Button size="sm" className="h-8">Quote Now</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* PROFILE COMPLETENESS OR RECENT ACTIVITY */}
                <div className="rounded-xl border border-border bg-card shadow-sm">
                    <div className="p-6 border-b border-border">
                        <h2 className="font-semibold">Supplier Profile</h2>
                    </div>
                    <div className="p-6 space-y-6">
                        <div>
                            <div className="flex justify-between items-end mb-1">
                                <div className="text-sm font-medium">Profile Strength</div>
                                <div className="text-xs font-bold text-primary">85%</div>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full w-[85%]" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">Add government tax clearance to reach 100% and unlock enterprise RFQs.</p>
                        </div>
                        <div className="pt-4 border-t border-border">
                            <h3 className="text-sm font-medium mb-3">Recent Won Contracts</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">RFQ-5040 (Steel)</div>
                                        <div className="text-xs text-muted-foreground">Awarded 2 days ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
