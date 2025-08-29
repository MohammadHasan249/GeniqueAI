import Link from "next/link";
import { ArrowRight, Zap, Globe, Sparkles, Code, Palette, Rocket } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GeniqueLogo } from "@/components/genique-logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <GeniqueLogo size="md" />
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <SignedOut>
                <Link 
                  href="/sign-in" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/sign-up" 
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </Link>
              </SignedOut>
              <SignedIn>
                <Link 
                  href="/dashboard" 
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <AnimatedGradientText>
              🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span className="text-sm">AI-Powered Landing Page Generation</span>
            </AnimatedGradientText>
          </div>
          
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
             Create Stunning Landing Pages with{" "}
               AI Magic
           </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Transform your ideas into beautiful, high-converting landing pages in minutes. 
            No coding required - just describe what you want and watch AI bring it to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <SignedOut>
              <div className="relative rounded-lg">
                <Link 
                  href="/sign-up" 
                  className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-lg font-semibold overflow-hidden"
                >
                  Start Creating <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  <BorderBeam size={80} borderWidth={2} className="opacity-60" />
                </Link>
              </div>
              <Link 
                href="/sign-in" 
                className="border border-border px-8 py-4 rounded-lg hover:bg-accent transition-colors text-lg"
              >
                Sign In
              </Link>
            </SignedOut>
            <SignedIn>
              <div className="relative rounded-lg">
                <Link 
                  href="/dashboard/create-website" 
                  className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-lg font-semibold overflow-hidden"
                >
                  Create New Landing Page <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  <BorderBeam size={80} borderWidth={2} className="opacity-60" />
                </Link>
              </div>
              <Link 
                href="/dashboard" 
                className="border border-border px-8 py-4 rounded-lg hover:bg-accent transition-colors text-lg"
              >
                View Dashboard
              </Link>
            </SignedIn>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">
                <NumberTicker value={10000} />+
              </div>
              <div className="text-muted-foreground">Landing Pages Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold">
                <NumberTicker value={5000} />+
              </div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">
                <NumberTicker value={99} />%
              </div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose GeniqueAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of web development with our cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate complete landing pages in under 60 seconds. From concept to publish in record time.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Design</h3>
              <p className="text-muted-foreground">
                Advanced AI understands your vision and creates pixel-perfect designs tailored to your needs.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Code Required</h3>
              <p className="text-muted-foreground">
                Build professional landing pages without writing a single line of code. Perfect for everyone.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Styling</h3>
              <p className="text-muted-foreground">
                Every landing page is unique with custom colors, fonts, layouts, branding options.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Responsive</h3>
              <p className="text-muted-foreground">
                All landing pages are automatically optimized for mobile, tablet, and desktop devices.
              </p>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">One-Click Deploy</h3>
              <p className="text-muted-foreground">
                Publish your landing page instantly with our integrated hosting solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to create your dream landing page
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Describe Your Vision</h3>
              <p className="text-muted-foreground">
                Tell our AI what kind of landing page you want. Be as detailed or simple as you like.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Creates Magic</h3>
              <p className="text-muted-foreground">
                Watch as our AI generates a complete landing page with design and conversion-focused content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Launch & Share</h3>
              <p className="text-muted-foreground">
                Review, customize if needed, and launch your landing page to the world in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 bg-card border border-border rounded-lg relative">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">Perfect for trying out GeniqueAI</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Link
                  href="/sign-up"
                  className="w-full bg-secondary text-secondary-foreground py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors inline-block text-center font-medium"
                >
                  Get Started Free
                </Link>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">2 landing pages per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Basic templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Community support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">GeniqueAI subdomain</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="p-8 bg-card border-2 border-primary rounded-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-muted-foreground mb-6">For growing businesses and creators</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Link
                  href="/sign-up"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors inline-block text-center font-medium"
                >
                  Start Pro Trial
                </Link>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Unlimited landing pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Premium templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Custom domain</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">SSL certificate</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 bg-card border border-border rounded-lg relative">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">For large teams and organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Link
                  href="/sign-up"
                  className="w-full bg-secondary text-secondary-foreground py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors inline-block text-center font-medium"
                >
                  Contact Sales
                </Link>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Team collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">White-label solution</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">SLA guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
        <RetroGrid />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Create Your Landing Page?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already creating high-converting landing pages with GeniqueAI
          </p>
          <SignedOut>
            <div className="relative inline-block rounded-lg">
              <Link 
                href="/sign-up" 
                className="group relative bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 text-lg font-semibold overflow-hidden"
              >
                Get Started for Free <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                <BorderBeam size={80} borderWidth={2} className="opacity-70" />
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="relative inline-block rounded-lg">
              <Link 
                href="/dashboard/create-website" 
                className="group relative bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 text-lg font-semibold overflow-hidden"
              >
                Create Your Landing Page Now <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                <BorderBeam size={80} borderWidth={2} className="opacity-70" />
              </Link>
            </div>
          </SignedIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <GeniqueLogo size="md" />
            </div>
            
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2025 GeniqueAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
