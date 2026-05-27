import { Award, Star, TrendingUp, Zap } from "lucide-react";

export default function SupplierPerformancePage() {
    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Performance Metrics</h1>
                <p className="text-muted-foreground mt-1">Your supplier reliability score and historical performance.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                {[
                    { title: "Reliability Score", value: "98/100", icon: Star, color: "text-amber-500" },
                    { title: "Win Rate", value: "42%", icon: Award, color: "text-green-500" },
                    { title: "Avg Response Time", value: "3.2 hrs", icon: Zap, color: "text-blue-500" },
                    { title: "On-Time Delivery", value: "96%", icon: TrendingUp, color: "text-primary" },
                ].map((m, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between pb-2">
                            <h3 className="text-sm font-medium text-muted-foreground">{m.title}</h3>
                            <m.icon className={`h-4 w-4 ${m.color}`} />
                        </div>
                        <div className="text-2xl font-bold">{m.value}</div>
                    </div>
                ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h2 className="font-semibold mb-4">Monthly Quote Win Rate (Last 6 Months)</h2>
                <div className="flex items-end gap-4 h-36">
                    {[60, 72, 55, 80, 42, 68].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                            <div
                                className="w-full bg-primary/80 rounded-t-md"
                                style={{ height: `${h}%` }}
                            />
                            <span className="text-xs text-muted-foreground">{["Dec", "Jan", "Feb", "Mar", "Apr", "May"][i]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
