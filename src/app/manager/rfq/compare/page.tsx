import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Star, Truck, MapPin, Route, Navigation, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IntelligenceAnalystPanel } from "@/components/ui/intelligence-analyst";

export default function RFQComparePage() {
    const quotes = [
        { supplier: "BuildMat Zimbabwe", price: "$4,200", delivery: "2 Days", score: 98, logisticsScore: 92, location: "Harare Ind. (4km)", badge: "Optimal Balance" },
        { supplier: "Prestige Construction Supplies", price: "$3,950", delivery: "5 Days", score: 85, logisticsScore: 74, location: "Msasa (12km)", badge: "Lowest Cost" },
        { supplier: "FastTrack Logistics", price: "$4,500", delivery: "1 Day", score: 92, logisticsScore: 95, location: "Graniteside (6km)", badge: "Fastest" },
    ];

    const analystInsights = [
        {
            title: "Cost vs. Time Trade-off",
            type: "recommendation" as const,
            description: "BuildMat Zimbabwe provides the best balance. Awarding to Prestige Construction saves $250 but adds 3 days of delay and higher transport risk across Msasa traffic.",
            actionText: "Select BuildMat Option",
        },
        {
            title: "Split Sourcing Opportunity",
            type: "savings" as const,
            description: "You could split this RFQ: Source 80% from Prestige for cost savings and 20% from FastTrack for immediate site requirements. Projected blended saving: $120.",
        },
        {
            title: "Logistics Warning",
            type: "risk" as const,
            description: "Prestige Construction's route intersects with major roadworks on Mutare Road this week, further risking their 5-day delivery estimate."
        }
    ];

    return (
        <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <Link href="/manager/dashboard" className="flex items-center text-sm text-primary mb-4 hover:underline w-fit">
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                </Link>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Evaluate Quotations</h1>
                        <p className="text-muted-foreground mt-1">
                            RFQ-5041: Standard Common Bricks (10,000 units)
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6">
                <div className="flex-1 space-y-6">
                    {/* LOGISTICS & ROUTE OPTIMIZATION LAYER */}
                    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col">
                        <div className="bg-muted border-b border-border p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 font-semibold">
                                <Route className="w-5 h-5 text-primary" /> Delivery Logistics & Proximity Matrix
                            </div>
                            <span className="text-xs text-muted-foreground">Dest: Project Site A (Borrowdale)</span>
                        </div>
                        {/* Mock Map Visualization */}
                        <div className="h-48 bg-slate-100 dark:bg-slate-900 relative">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 to-transparent dark:from-blue-900/20" />
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] mix-blend-multiply" />

                            {/* Site Location */}
                            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                                <div className="bg-foreground text-background text-[10px] font-bold px-2 py-0.5 rounded shadow-lg mb-1">HQ Site</div>
                                <div className="w-4 h-4 rounded-full bg-foreground shadow-lg flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
                                </div>
                            </div>

                            {/* Supplier A Route */}
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <path d="M 50% 25% Q 35% 30% 20% 60%" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-green-500 opacity-60" />
                                <path d="M 50% 25% Q 60% 40% 75% 70%" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-red-500 opacity-60" />
                                <path d="M 50% 25% Q 55% 40% 45% 80%" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-primary opacity-60" />
                            </svg>

                            {/* Supplier Nodes */}
                            <div className="absolute top-[60%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg border-2 border-background" />
                                <div className="bg-card text-[10px] font-medium px-1.5 py-0.5 mt-1 rounded border border-border shadow-sm">FastTrack</div>
                            </div>
                            <div className="absolute top-[70%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg border-2 border-background" />
                                <div className="bg-card text-[10px] font-medium px-1.5 py-0.5 mt-1 rounded border border-border shadow-sm">Prestige</div>
                            </div>
                            <div className="absolute top-[80%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-primary shadow-lg border-2 border-background flex items-center justify-center">
                                    <Star className="w-2 h-2 text-primary-foreground" />
                                </div>
                                <div className="bg-card font-bold text-primary text-[10px] px-1.5 py-0.5 mt-1 rounded border border-primary/20 shadow-sm">BuildMat</div>
                            </div>
                        </div>
                    </div>

                    {/* COMPARISON CARDS */}
                    <div className="grid md:grid-cols-3 gap-4">
                        {quotes.map((quote, i) => (
                            <div key={i} className={`rounded-xl border bg-card relative shadow-sm flex flex-col ${quote.badge === 'Optimal Balance' ? 'border-primary shadow-md ring-1 ring-primary/20' : 'border-border'}`}>
                                {quote.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold shadow-sm whitespace-nowrap z-10">
                                        {quote.badge}
                                    </div>
                                )}
                                <div className="p-5 border-b border-border space-y-1 bg-muted/20">
                                    <h3 className="font-bold">{quote.supplier}</h3>
                                    <div className="flex items-center text-xs text-green-600 dark:text-green-500 font-medium">
                                        <ShieldCheck className="h-3.5 w-3.5 mr-1" /> Verified & Tax Compliant
                                    </div>
                                </div>

                                <div className="p-5 flex-1 space-y-5">
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Total Cost</div>
                                        <div className="text-2xl font-bold font-mono">{quote.price}</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="bg-muted/50 p-2 rounded-md border border-border/50">
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-bold flex items-center gap-1"><Truck className="w-3 h-3" /> Time</div>
                                            <div className="font-medium text-xs">{quote.delivery}</div>
                                        </div>
                                        <div className="bg-muted/50 p-2 rounded-md border border-border/50">
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-bold flex items-center gap-1"><MapPin className="w-3 h-3" /> Distance</div>
                                            <div className="font-medium text-xs">{quote.location}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <div>
                                            <div className="flex justify-between items-end mb-1">
                                                <div className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1">
                                                    Supplier Trust Score
                                                </div>
                                                <div className="font-bold text-xs">{quote.score}/100</div>
                                            </div>
                                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${quote.score > 90 ? 'bg-primary' : 'bg-yellow-500'}`} style={{ width: `${quote.score}%` }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-end mb-1">
                                                <div className="text-[10px] uppercase font-bold text-muted-foreground flex items-center gap-1">
                                                    Logistics Efficiency
                                                </div>
                                                <div className="font-bold text-xs">{quote.logisticsScore}/100</div>
                                            </div>
                                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${quote.logisticsScore > 90 ? 'bg-amber-500' : 'bg-red-400'}`} style={{ width: `${quote.logisticsScore}%` }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 pt-0 mt-auto">
                                    <Button variant={quote.badge === 'Optimal Balance' ? 'default' : 'outline'} className="w-full text-xs h-9">
                                        Award Contract
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI PROCUREMENT ANALYST SIDEBAR */}
                <IntelligenceAnalystPanel
                    insights={analystInsights}
                    aggregatedData={
                        <p>ZimStat & Local Directories show a <strong>2.5% increase</strong> in common brick pricing in Harare this week. Prices quoted are within realistic enterprise margins.</p>
                    }
                />
            </div>
        </div>
    );
}
