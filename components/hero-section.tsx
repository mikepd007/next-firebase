import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="container flex flex-col lg:flex-row items-center gap-8 py-8 relative">
      {/* Text Content */}
      <div className="flex-1 space-y-6 z-10">
        <h1 className="font-heading font-[500] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter">
          Your personal prompt engineer
        </h1>
        <p className="text-base leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          Prompter improves your inputs, builds complex prompts tailored to your needs, and helps you get the most from every AI interaction directly in your chat.
        </p>
        <div className="space-y-6">
          <div className="space-x-4">
            <Link href="/login">
              <Button size="lg">Install Extension!</Button>
            </Link>
            <Link target="_blank" href="https://github.com/enesien/venefish">
              <Button size="lg" variant="link">
                Watch Demo &rarr;
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Compatible with</span>
            <Image 
              src="/chatgpt-light.svg" 
              alt="ChatGPT" 
              width={80} 
              height={32}
            />
            <Image 
              src="/claude-light.svg" 
              alt="Claude" 
              width={80} 
              height={32}
            />
            <Image 
              src="/perplexity-light.svg" 
              alt="Perplexity" 
              width={80} 
              height={32}
            />
          </div>
        </div>
      </div>

      {/* Video Background */}
      <div className="flex-1 flex items-center justify-center min-h-[425px]">
        <div className="w-full max-w-2xl">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover rounded-[10px]"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
} 