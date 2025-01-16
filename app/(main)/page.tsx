import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FAQSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <div className="grow flex flex-col">
      {/* Hero Section */}
      <section className="py-12">
        <HeroSection />
      </section>

      {/* Cards Section */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div>
            <Card className="shadow-teal-200 shadow-md border-teal-400">
              <CardHeader>
                <CardTitle>Instant Prompt Improver</CardTitle>
                <CardDescription>
                  Re-prompt your inputs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  With our instant prompt improver, you can optimize your inputs in seconds for better, more accurate results without leaving your chat.
                </p>
                <Link
                  className={cn(
                    buttonVariants({ size: "xl", variant: "teal" }),
                    "w-full"
                  )}
                  href="#"
                >
                  Start Improving! &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-emerald-200 shadow-md border-emerald-400">
              <CardHeader>
                <CardTitle>Prompt Generator</CardTitle>
                <CardDescription>
                  Build complex prompts tailored to your needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our complex prompt builder allows you to create advanced prompts that deliver meaningful, goal-driven outputs—all within your chat.
                </p>
                <Link
                  className={cn(
                    buttonVariants({ size: "xl" }),
                    "w-full"
                  )}
                  href="#"
                >
                  Start Building &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-slate-200 shadow-md border-slate-400">
              <CardHeader>
                <CardTitle>Prompt Templates</CardTitle>
                <CardDescription>
                  Use our prompt templates to get started quickly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Save time and get inspired with our extensive collection of pre-built prompt templates. Designed for various use cases.
                </p>
                <Link
                  className={cn(
                    buttonVariants({ variant: "orange", size: "xl" }),
                    "w-full"
                  )}
                  href="#"
                >
                  Explore Templates &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-12">
        <PricingSection />
      </section>

      {/* FAQ Section */}
      <section className="container py-12">
        <FAQSection />
      </section>
    </div>
  );
}
