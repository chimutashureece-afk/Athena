import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, XCircle } from "lucide-react";

export default function SupplierQuotationsPage() {
    const quotes = [
        { id: "Q-1041", rfq: "RFQ-5048", mat: "Cement (200 bags)", amount: "$2,050", submitted: "2 days ago", status: "Pending" },
        { id: "Q-1040", rfq: "RFQ-5040", mat: "Deformed Steel (12mm)", amount: "$4,800", submitted: "4 days ago", status: "Won" },
        { id: "Q-1039", rfq: "RFQ-5035", mat: "Common Bricks (5k)", amount: "$1,900", submitted: "1 week ago", status: "Lost" },
        { id: "Q-1038", rfq: "RFQ-5030", mat: "Cement (100 bags)", amount: "$950", submitted: "2 weeks ago", status: "Won" },
    ];

    const statusIcon = (s: string) => s === "Won"
        ? <CheckCircle className="w-3 h-3 mr-1" />
        : s === "Lost" ? <XCircle className="w-3 h-3 mr-1" />
            : <Clock className="w-3 h-3 mr-1" />;

    const statusClass = (s: string) => s === "Won"
        ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
        : s === "Lost"
            ? "bg-red-500/10 text-red-600 border-red-500/20"
            : "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Quotations</h1>
                <p className="text-muted-foreground mt-1">Track all submitted bids and their statuses.</p>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-muted/50 border-b border-border text-muted-foreground">
                        <tr>
                            <th className="px-6 py-3 font-medium">Quote ID</th>
                            <th className="px-6 py-3 font-medium">Material</th>
                            <th className="px-6 py-3 font-medium">Amount</th>
                            <th className="px-6 py-3 font-medium">Submitted</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {quotes.map((q, i) => (
                            <tr key={i} className="bg-card hover:bg-muted/50 transition-colors">
                                <td className="px-6 py-4 font-medium">{q.id}
                                    <div className="text-xs text-muted-foreground">{q.rfq}</div>
                                </td>
                                <td className="px-6 py-4">{q.mat}</td>
                                <td className="px-6 py-4 font-bold">{q.amount}</td>
                                <td className="px-6 py-4 text-muted-foreground">{q.submitted}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${statusClass(q.status)}`}>
                                        {statusIcon(q.status)}{q.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="sm" className="text-xs h-8">View Details</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
