export default function SupplierSettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground mt-1">Manage your account and notification preferences.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
                <h2 className="font-semibold border-b border-border pb-2">Notification Preferences</h2>
                {[
                    { label: "New RFQ matches", desc: "Get notified when a new RFQ matches your materials" },
                    { label: "Quote status updates", desc: "Know when your quote is reviewed or awarded" },
                    { label: "Weekly performance digest", desc: "Summary of your performance metrics" },
                ].map((n, i) => (
                    <div key={i} className="flex items-start justify-between gap-4">
                        <div>
                            <div className="text-sm font-medium">{n.label}</div>
                            <div className="text-xs text-muted-foreground">{n.desc}</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer mt-0.5">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-10 h-6 bg-muted rounded-full peer peer-checked:bg-primary transition-colors" />
                            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow" />
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
