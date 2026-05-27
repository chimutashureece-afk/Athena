import { Button } from "@/components/ui/button";
import { Building2, MapPin, Package } from "lucide-react";

export default function SupplierProfilePage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Company Profile</h1>
                <p className="text-muted-foreground mt-1">Manage your public supplier information shown to procurement managers.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">BuildMat Zimbabwe</h2>
                        <p className="text-muted-foreground text-sm">Verified Supplier · Member since 2023</p>
                    </div>
                </div>

                <div className="grid gap-4">
                    {[
                        { label: "Company Name", value: "BuildMat Zimbabwe (Pvt) Ltd" },
                        { label: "Contact Email", value: "procurement@buildmat.co.zw" },
                        { label: "Phone Number", value: "+263 77 123 4567" },
                        { label: "Physical Address", value: "14 Industrial Rd, Msasa, Harare" },
                    ].map((f, i) => (
                        <div key={i} className="grid gap-1">
                            <label className="text-sm font-medium text-muted-foreground">{f.label}</label>
                            <input
                                defaultValue={f.value}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                        <Package className="h-4 w-4" /> Materials Supplied
                    </label>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {["Portland Cement", "Common Bricks", "Steel Bars", "River Sand"].map((tag, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Delivery Zones
                    </label>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {["Harare", "Chitungwiza", "Gweru", "Masvingo"].map((zone, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary">
                                {zone}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-border">
                    <Button>Save Changes</Button>
                </div>
            </div>
        </div>
    );
}
