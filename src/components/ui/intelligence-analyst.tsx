import { BrainCircuit, AlertTriangle, Lightbulb, PiggyBank, ShieldCheck } from "lucide-react";
import { Button } from "./button";

interface InsightProps {
    title: string;
    type: "savings" | "risk" | "recommendation" | "logistics";
    description: string;
    actionText?: string;
    onAction?: () => void;
}

export function IntelligenceAnalystPanel({ insights, aggregatedData }: { insights: InsightProps[], aggregatedData?: React.ReactNode }) {
    return (
        <div className="w-full xl:w-96 shrink-0 border border-border bg-card rounded-xl overflow-hidden shadow-sm flex flex-col h-full max-h-[800px]">
            <div className="bg-primary/5 border-b border-border p-4 flex items-center gap-3">
                <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                    <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="font-bold text-sm leading-tight text-foreground">Procurement Analyst</h2>
                    <p className="text-xs font-medium text-muted-foreground leading-tight">AI & Market Intelligence Engine</p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {aggregatedData && (
                    <div className="space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Market context</h3>
                        <div className="p-3 bg-muted/50 rounded-lg border border-border/50 text-sm">
                            {aggregatedData}
                        </div>
                    </div>
                )}

                <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Intelligence Insights</h3>
                    {insights.map((insight, idx) => (
                        <div key={idx} className="p-4 rounded-lg border border-border bg-background shadow-sm text-sm space-y-2 relative overflow-hidden">
                            {insight.type === "savings" && <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />}
                            {insight.type === "risk" && <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />}
                            {insight.type === "recommendation" && <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />}
                            {insight.type === "logistics" && <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />}

                            <div className="flex items-center gap-2 font-semibold">
                                {insight.type === "savings" && <PiggyBank className="w-4 h-4 text-green-600" />}
                                {insight.type === "risk" && <AlertTriangle className="w-4 h-4 text-red-600" />}
                                {insight.type === "recommendation" && <ShieldCheck className="w-4 h-4 text-blue-600" />}
                                {insight.type === "logistics" && <Lightbulb className="w-4 h-4 text-amber-600" />}
                                {insight.title}
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {insight.description}
                            </p>
                            {insight.actionText && (
                                <Button variant="outline" size="sm" className="w-full mt-2 h-8 text-xs font-medium" onClick={insight.onAction}>
                                    {insight.actionText}
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
