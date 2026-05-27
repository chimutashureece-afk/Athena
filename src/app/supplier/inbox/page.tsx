import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Inbox } from "lucide-react";

export default function SupplierInboxPage() {
    const rfqs = [
        { id: "RFQ-5052", mat: "Portland Cement (500 bags)", loc: "Harare CBD", deadline: "Today", budget: "$4,000" },
        { id: "RFQ-5051", mat: "Common Bricks (10,000 units)", loc: "Msasa", deadline: "Tomorrow", budget: "$3,500" },
        { id: "RFQ-5050", mat: "Deformed Steel Bars 12mm", loc: "Bulawayo", deadline: "In 3 Days", budget: "$6,200" },
        { id: "RFQ-5049", mat: "River Sand (20 m³)", loc: "Chitungwiza", deadline: "In 5 Days", budget: "$1,800" },
        { id: "RFQ-5048", mat: "Portland Cement (200 bags)", loc: "Mutare", deadline: "In 7 Days", budget: "$2,100" },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">RFQ Inbox</h1>
                <p className="text-muted-foreground mt-1">Procurement requests matching your material categories.</p>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-border">
                    <div className="flex items-center gap-2">
                        <Inbox className="h-5 w-5 text-muted-foreground" />
                        <h2 className="font-semibold">{rfqs.length} Active RFQs Available</h2>
                    </div>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 border-b border-border text-muted-foreground">
                        <tr>
                            <th className="px-6 py-3 font-medium">Material Details</th>
                            <th className="px-6 py-3 font-medium">Location</th>
                            <th className="px-6 py-3 font-medium">Budget</th>
                            <th className="px-6 py-3 font-medium">Deadline</th>
                            <th className="px-6 py-3 font-medium text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {rfqs.map((row, i) => (
                            <tr key={i} className="bg-card hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-medium">{row.mat}</div>
                                    <div className="text-xs text-muted-foreground">{row.id}</div>
                                </td>
                                <td className="px-6 py-4">{row.loc}</td>
                                <td className="px-6 py-4 font-medium">{row.budget}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border ${row.deadline === "Today"
                                            ? "bg-red-500/10 text-red-600 border-red-500/20"
                                            : "bg-muted text-muted-foreground border-border"
                                        }`}>
                                        {row.deadline === "Today" && <Clock className="w-3 h-3" />}
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
    );
}
