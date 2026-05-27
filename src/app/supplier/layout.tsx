import Link from "next/link";
import { LayoutDashboard, Inbox, Send, Store, TrendingUp, Settings, Bell, Search, ChevronDown } from "lucide-react";

export default function SupplierLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            {/* SIDEBAR */}
            <aside className="w-64 border-r border-border bg-card flex flex-col hidden md:flex">
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">
                            Z
                        </div>
                        <span className="font-bold tracking-tight text-sm">ZimProcure Supplier</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    <Link href="/supplier/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
                        <LayoutDashboard className="h-4 w-4" /> Dashboard
                    </Link>
                    <Link href="/supplier/inbox" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <Inbox className="h-4 w-4" /> RFQ Inbox
                        <span className="ml-auto bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full">3</span>
                    </Link>
                    <Link href="/supplier/quotations" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <Send className="h-4 w-4" /> My Quotations
                    </Link>
                    <Link href="/supplier/performance" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <TrendingUp className="h-4 w-4" /> Performance Metrics
                    </Link>
                    <div className="pt-4 mt-4 border-t border-border" />
                    <Link href="/supplier/profile" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <Store className="h-4 w-4" /> Company Profile
                    </Link>
                    <Link href="/supplier/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <Settings className="h-4 w-4" /> Settings
                    </Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col min-w-0 bg-muted/20">
                <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background">
                    <div className="flex items-center gap-2 md:hidden">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">Z</div>
                        <span className="font-bold tracking-tight text-sm">ZimProcure</span>
                    </div>
                    <div className="flex-1" />
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <input
                                type="search"
                                placeholder="Search RFQs..."
                                className="h-9 w-64 rounded-md border border-input bg-muted/50 pl-9 pr-4 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                            />
                        </div>
                        <button className="relative h-9 w-9 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors">
                            <Bell className="h-4 w-4 text-muted-foreground" />
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
                        </button>
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/20 text-indigo-500 font-bold text-xs cursor-pointer">
                                SP
                            </div>
                            <ChevronDown className="h-3 w-3 text-muted-foreground hidden sm:block" />
                        </Link>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
