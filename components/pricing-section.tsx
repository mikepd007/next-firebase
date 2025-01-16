import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PricingSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Free Plan */}
      <Card className="shadow-slate-200 shadow-md border-slate-400">
        <CardHeader>
          <CardTitle className="text-2xl">Prompter Free</CardTitle>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">Free</span>
            <span className="text-muted-foreground">Per Month</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Link
            className={cn(buttonVariants({ size: "xl" }), "w-full")}
            href="#"
          >
            Get Prompter Free
          </Link>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="font-medium">10</span> instant prompts per month
            </li>
            <li className="flex items-center gap-2">Basic prompting model</li>
            <li className="flex items-center gap-2">Limited to ChatGPT</li>
            <li className="flex items-center gap-2 text-muted-foreground line-through">
              Complex prompt generator
            </li>
            <li className="flex items-center gap-2 text-muted-foreground line-through">
              Access to prompt library
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Pro Plan */}
      <Card className="shadow-emerald-200 shadow-md border-emerald-400 relative">
        <Badge 
          variant="secondary" 
          className="absolute -top-3 right-4 bg-emerald-500 text-white hover:bg-emerald-500"
        >
          Popular
        </Badge>
        <CardHeader>
          <CardTitle className="text-2xl">Prompter Pro</CardTitle>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">$8.99</span>
            <span className="text-muted-foreground">Per Month</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Link
            className={cn(buttonVariants({ size: "xl", variant: "teal" }), "w-full")}
            href="#"
          >
            Start 7 Day Free Trial
          </Link>
          <p className="text-sm text-muted-foreground">
            Access all tools - instant prompt, our complex prompt builder, and large library of prompt templates.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="font-medium">Instant</span> prompt button (200/month)
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">Complex</span> prompt generator (75/month)
            </li>
            <li className="flex items-center gap-2">Trained tool based prompting model</li>
            <li className="flex items-center gap-2">200+ ready to use templates</li>
            <li className="flex items-center gap-2">Compatible with all integrations</li>
          </ul>
          <div className="flex items-center gap-2 justify-center pt-2">
            <span className="opacity-75">ChatGPT</span>
            <span>+</span>
            <span className="opacity-75">Claude</span>
            <span>+</span>
            <span className="opacity-75">Perplexity</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Cancel anytime
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 