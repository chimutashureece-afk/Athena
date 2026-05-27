import Link from "next/link";
import { LayoutDashboard, FileText, Settings, Building2, Bell, Search, PlusCircle, Users, ChevronDown, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            {/* SIDEBAR */}
            <aside className="w-64 border-r border-border bg-card flex flex-col hidden md:flex">
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">
                            Z
                        </div>
                        <span className="font-bold tracking-tight text-sm">ZimProcure Manager</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    <Link href="/manager/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
                        <LayoutDashboard className="h-4 w-4" /> Dashboard
                    </Link>
                    <Link href="/manager/rfq/new" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <FileText className="h-4 w-4" /> New RFQ
                    </Link>
                    <Link href="/manager/analytics" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <BarChart className="h-4 w-4" /> AI Analytics
                    </Link>
                    <Link href="/manager/rfq/compare" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <Users className="h-4 w-4" /> Compare Quotes
                    </Link>
                    <Link href="/manager/saved-suppliers" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <Building2 className="h-4 w-4" /> Saved Suppliers
                    </Link>
                    <Link href="/manager/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm font-medium transition-colors">
                        <Settings className="h-4 w-4" /> Settings
                    </Link>
                </div>
                <div className="p-4 border-t border-border">
                    <Link href="/manager/rfq/new">
                        <Button className="w-full justify-start gap-2">
                            <PlusCircle className="h-4 w-4" /> New RFQ
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col min-w-0 bg-muted/20">
                <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background">
                    {/* Mobile menu placeholder */}
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
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                        </button>
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20 text-primary font-bold text-xs cursor-pointer">
                                PM
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
