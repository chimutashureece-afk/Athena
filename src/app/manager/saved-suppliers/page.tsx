import { Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ManagerSavedSuppliersPage() {
    const saved = [
        { name: "BuildMat Zimbabwe", location: "Msasa, Harare", materials: ["Cement", "Bricks"], score: 98, contracts: 12 },
        { name: "Prestige Construction Supplies", location: "Borrowdale, Harare", materials: ["Steel Bars", "Aggregate"], score: 91, contracts: 7 },
        { name: "FastTrack Logistics & Mats", location: "Graniteside, Harare", materials: ["River Sand", "Cement"], score: 85, contracts: 5 },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Saved Suppliers</h1>
                <p className="text-muted-foreground mt-1">Your preferred and frequently used suppliers.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {saved.map((s, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card shadow-sm p-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Building2 className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">{s.name}</h3>
                                <p className="text-xs text-muted-foreground">{s.location}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {s.materials.map((m) => (
                                <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-muted border border-border font-medium">{m}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-amber-500 font-semibold">
                                <Star className="h-4 w-4" /> {s.score}/100
                            </div>
                            <span className="text-muted-foreground text-xs">{s.contracts} contracts</span>
                        </div>
                        <Link href="/manager/rfq/new">
                            <Button variant="outline" size="sm" className="w-full mt-2">Send RFQ</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
