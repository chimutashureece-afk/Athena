import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewRFQPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Create Request for Quotation</h1>
                <p className="text-muted-foreground mt-1">
                    Broadcast your material requirements to verified local suppliers.
                </p>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm p-6 md:p-8">
                <form className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold border-b border-border pb-2">Material Details</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Material Type</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                                    <option>Select material...</option>
                                    <option>Portland Cement (50kg bag)</option>
                                    <option>Standard Common Bricks</option>
                                    <option>Face Bricks</option>
                                    <option>Deformed Steel Bars (12mm)</option>
                                    <option>River Sand (m³)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Quantity Required</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 500"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Detailed Specifications</label>
                            <textarea
                                placeholder="Include any specific grades, brands, or technical requirements..."
                                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold border-b border-border pb-2">Logistics & Budget</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Delivery Location</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                                    <option>Select zone...</option>
                                    <option>Harare CBD</option>
                                    <option>Mount Pleasant, Harare</option>
                                    <option>Bulawayo Central</option>
                                    <option>Mutare</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Delivery Deadline</label>
                                <input
                                    type="date"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium">Target Budget / Estimate (USD)</label>
                                <input
                                    type="number"
                                    placeholder="Total budget estimate"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <Link href="/manager/dashboard" className="flex-1 md:flex-none">
                            <Button type="button" variant="outline" className="w-full text-base h-11">Cancel</Button>
                        </Link>
                        <Link href="/manager/dashboard" className="flex-1 md:flex-none">
                            <Button type="button" className="w-full text-base h-11">Broadcast RFQ</Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
