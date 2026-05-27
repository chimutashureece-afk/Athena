import Link from "next/link";
import { ArrowLeft, Building2, MapPin, CalendarDays, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubmitQuotePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <Link href="/supplier/dashboard" className="flex items-center text-sm text-primary mb-4 hover:underline w-fit">
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Inbox
                </Link>
                <h1 className="text-3xl font-bold tracking-tight">Submit Quotation</h1>
                <p className="text-muted-foreground mt-1">
                    Prepare your bid for RFQ-5052: Portland Cement (500 bags)
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* RFQ DETAILS */}
                <div className="md:col-span-1 space-y-6">
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <h2 className="font-semibold border-b border-border pb-3 mb-4">Request Details</h2>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <Building2 className="w-5 h-5 text-muted-foreground shrink-0" />
                                <div>
                                    <div className="text-sm font-medium">Buyer</div>
                                    <div className="text-sm text-muted-foreground">Premier Construction Ltd.</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                                <div>
                                    <div className="text-sm font-medium">Delivery Location</div>
                                    <div className="text-sm text-muted-foreground">Harare CBD Project Site</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <CalendarDays className="w-5 h-5 text-muted-foreground shrink-0" />
                                <div>
                                    <div className="text-sm font-medium">Required By</div>
                                    <div className="text-sm text-red-500 font-medium">Today by 15:00</div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Receipt className="w-5 h-5 text-muted-foreground shrink-0" />
                                <div>
                                    <div className="text-sm font-medium">Notes</div>
                                    <div className="text-sm text-muted-foreground">Requires PC15 specification. Offloading assistance provided.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QUOTATION FORM */}
                <div className="md:col-span-2">
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Unit Price (USD)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        placeholder="Price per bag"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Delivery Fee (USD)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        placeholder="Total delivery cost"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Can you meet the delivery deadline?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="radio" name="deadline" className="text-primary focus:ring-primary h-4 w-4" defaultChecked />
                                        Yes, absolutely
                                    </label>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="radio" name="deadline" className="text-primary focus:ring-primary h-4 w-4" />
                                        No, suggest alternate
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Additional Terms / Notes</label>
                                <textarea
                                    placeholder="Specify payment terms or material variations..."
                                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                />
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-border">
                                <Link href="/supplier/dashboard" className="flex-1">
                                    <Button type="button" className="w-full text-base h-11">Submit Competitive Bid</Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
