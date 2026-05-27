import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-muted/40">
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-xl">
                                Z
                            </div>
                            <span className="text-lg font-bold tracking-tight">ZimProcure AI</span>
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block bg-muted">
                <div className="absolute inset-0 h-full w-full bg-grid-black/[0.02] bg-[length:32px_32px]">
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-24">
                    <div className="max-w-xl text-center space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Enterprise Procurement Intelligence</h2>
                        <p className="text-muted-foreground text-lg">
                            Streamlining the supply chain for Zimbabwe's construction industry. Match with reliable suppliers securely and instantly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
