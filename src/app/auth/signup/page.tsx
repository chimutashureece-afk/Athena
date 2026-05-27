import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2 text-center lg:text-left">
                <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                <p className="text-sm text-muted-foreground">
                    Sign up to access the procurement network
                </p>
            </div>

            <div className="grid gap-6">
                <form>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="role" className="text-sm font-medium leading-none">I am a...</label>
                            <select
                                id="role"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="manager">Procurement Manager</option>
                                <option value="supplier">Material Supplier</option>
                            </select>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="company" className="text-sm font-medium leading-none">Company Name</label>
                            <input
                                id="company"
                                type="text"
                                placeholder="Acme Construction"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <Link href="/manager/dashboard" className="w-full">
                            <Button type="button" className="w-full mt-2">Create Account</Button>
                        </Link>
                    </div>
                </form>
            </div>

            <p className="px-8 text-center text-sm text-muted-foreground lg:px-0 lg:text-left">
                By clicking continue, you agree to our{" "}
                <Link href="#" className="underline underline-offset-4 hover:text-primary">Terms of Service</Link>{" "}
                and{" "}
                <Link href="#" className="underline underline-offset-4 hover:text-primary">Privacy Policy</Link>.
            </p>

            <p className="px-8 text-center text-sm text-muted-foreground lg:px-0 lg:text-left pt-4 border-t border-border">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-semibold text-primary hover:text-primary/80">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
