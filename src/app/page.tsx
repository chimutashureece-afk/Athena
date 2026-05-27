import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ChevronRight, FileText, LineChart, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-xl">
              Z
            </div>
            <span className="text-lg font-bold tracking-tight">ZimProcure AI</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it works</Link>
            <Link href="#suppliers" className="hover:text-foreground transition-colors">For Suppliers</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/manager/dashboard">
              <Button variant="ghost" className="hidden sm:inline-flex">Manager Login</Button>
            </Link>
            <Link href="/supplier/dashboard">
              <Button variant="outline" className="hidden sm:inline-flex">Supplier Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-24 lg:py-32 border-b border-border">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02] bg-[length:32px_32px]" />
          <div className="container relative z-10 px-4 md:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Enterprise Procurement OS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl opacity-90">
              Smarter Construction Procurement for Zimbabwe
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Help procurement teams source construction materials faster, compare supplier quotes intelligently, and optimize procurement decisions locally.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/manager/dashboard">
                <Button size="lg" className="h-12 px-8 text-base shadow-sm">
                  Submit RFQ <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/supplier/dashboard">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  Become a Supplier
                </Button>
              </Link>
            </div>

            {/* HERO VISUAL MOCKUP */}
            <div className="mt-20 w-full max-w-5xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="h-12 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
              </div>
              <div className="p-8 grid md:grid-cols-3 gap-6 text-left">
                <div className="md:col-span-2 space-y-4">
                  <div className="h-8 w-1/3 bg-muted rounded-md" />
                  <div className="space-y-2">
                    <div className="h-24 bg-secondary rounded-lg border border-border" />
                    <div className="h-24 bg-secondary rounded-lg border border-border" />
                    <div className="h-24 bg-secondary rounded-lg border border-border border-l-4 border-l-primary" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 bg-muted rounded-lg" />
                  <div className="h-32 bg-muted rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES / BENEFITS */}
        <section id="features" className="py-24 bg-muted/30">
          <div className="container px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Enterprise Workflow Efficiency</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Built specifically for the African construction industry to bring transparency and speed to material sourcing.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: FileText, title: "Automated RFQs", desc: "Create detailed material requests in seconds and instantly broadcast to verified local suppliers." },
                { icon: LineChart, title: "Intelligent Ranking", desc: "Compare quotes not just on price, but on delivery speed, availability, and supplier reliability scores." },
                { icon: CheckCircle2, title: "Verified Network", desc: "Access a curated network of Zimbabwean suppliers for Cement, Bricks, Steel, and aggregate materials." }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24">
          <div className="container px-4 md:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How Procurement Works</h2>
                <div className="space-y-6">
                  {[
                    { number: "01", title: "Submit Material Needs", desc: "Specify quantities, deadlines, and delivery locations." },
                    { number: "02", title: "Receive Quotations", desc: "Suppliers submit competitive bids directly to your dashboard." },
                    { number: "03", title: "Smart Comparison", desc: "Our engine ranks the best options across multiple data points." },
                    { number: "04", title: "Award & Track", desc: "Approve the best quote and track delivery status." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{step.title}</h4>
                        <p className="text-muted-foreground mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-muted border border-border p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/50 to-transparent" />
                  <div className="relative z-10 w-full space-y-4">
                    <div className="p-4 rounded-lg bg-card/80 backdrop-blur border border-border shadow-sm">
                      <div className="h-2 w-24 bg-muted-foreground/20 rounded mb-2" />
                      <div className="h-4 w-3/4 bg-muted-foreground/40 rounded" />
                    </div>
                    <div className="p-4 rounded-lg border-2 border-primary bg-card/90 backdrop-blur shadow-md scale-105">
                      <div className="flex justify-between items-center mb-2">
                        <div className="h-2 w-24 bg-primary/40 rounded" />
                        <div className="h-6 w-16 bg-primary/20 text-primary text-[10px] flex items-center justify-center font-bold rounded">TOP MATCH</div>
                      </div>
                      <div className="h-4 w-3/4 bg-foreground/80 rounded" />
                    </div>
                    <div className="p-4 rounded-lg bg-card/80 backdrop-blur border border-border shadow-sm">
                      <div className="h-2 w-24 bg-muted-foreground/20 rounded mb-2" />
                      <div className="h-4 w-1/2 bg-muted-foreground/40 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 border-t border-border bg-primary/5">
          <div className="container px-4 md:px-8 text-center max-w-3xl border border-border/50 bg-background/50 backdrop-blur p-12 rounded-3xl shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight">Ready to modernize your procurement?</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Join leading Zimbabwean construction firms sourcing materials smarter, faster, and cheaper.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/manager/dashboard">
                <Button size="lg" className="h-12 px-8">Start As Procurement Manager</Button>
              </Link>
              <Link href="/supplier/dashboard">
                <Button variant="outline" size="lg" className="h-12 px-8">Join As Supplier</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-12">
        <div className="container px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-sm">
              Z
            </div>
            <span className="font-bold tracking-tight pt-1">ZimProcure AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZimProcurement System. Dedicated to Zimbabwe's infrastructure growth.
          </p>
        </div>
      </footer>
    </div>
  );
}
