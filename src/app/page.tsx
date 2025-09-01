import Link from "next/link";
import { ArrowRight, Zap, Globe, Sparkles, Code, Palette, Rocket, Check, Star, Users, Building2, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { NumberTicker } from "@/components/number-ticker";
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

      {/* Hero Section - Stagetimer Inspired */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-800/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-gray-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                AI-Powered Landing Pages in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Under 5 Minutes
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Answer a few questions. We write copy, build UI, and deploy. 
                No coding required - just describe your vision and watch AI bring it to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <SignedOut>
                  <div className="relative">
                    <Link 
                      href="/sign-up" 
                      className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
                    >
                      Start Building for Free <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <Link 
                    href="/sign-in" 
                    className="border-2 border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-lg font-medium"
                  >
                    Sign In
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="relative">
                    <Link 
                      href="/dashboard/create-website" 
                      className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
                    >
                      Create New Landing Page <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <Link 
                    href="/dashboard" 
                    className="border-2 border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-lg font-medium"
                  >
                    View Dashboard
                  </Link>
                </SignedIn>
              </div>

              <p className="text-sm text-muted-foreground">
                No credit card required • Free plan available
              </p>
            </div>

            {/* Right Visual - Landing Page Mockup */}
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white dark:bg-gray-600 rounded px-3 py-1 text-xs text-gray-500">
                      your-awesome-startup.com
                    </div>
                  </div>
                </div>
                
                {/* Mock Landing Page Content */}
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto mb-3"></div>
                    <div className="h-4 bg-gray-900 dark:bg-gray-100 rounded mb-2"></div>
                    <div className="h-3 bg-gray-400 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded w-32 mx-auto"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-900 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                ✨ AI Generated
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                🚀 Deploy Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section - Trust Indicators */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-6">
              Trusted by <span className="font-semibold text-foreground"><NumberTicker value={200} />+ businesses</span> and growing
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Agencies</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">SaaS Companies</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">Freelancers</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              <span className="font-medium">Startups</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Visual */}
      <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What Genique AI Does
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three powerful features that transform your ideas into professional landing pages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Copy</h3>
              <p className="text-muted-foreground mb-4">
                AI writes compelling headlines, persuasive copy, and calls-to-action tailored to your audience and goals.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                <Check className="w-4 h-4" />
                <span>Conversion-optimized content</span>
              </div>
            </div>

            <div className="group p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Design Variants</h3>
              <p className="text-muted-foreground mb-4">
                Multiple layout options, color schemes, and typography combinations. Pick what matches your brand perfectly.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                <Check className="w-4 h-4" />
                <span>Industry-specific designs</span>
              </div>
            </div>

            <div className="group p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instant Deploy</h3>
              <p className="text-muted-foreground mb-4">
                One-click publishing to our fast CDN. Get a shareable link instantly or connect your custom domain.
              </p>
              <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400">
                <Check className="w-4 h-4" />
                <span>Global CDN included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps from idea to published landing page
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Describe Your Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell our AI what kind of landing page you want. Be as detailed or simple as you like - we'll understand your vision.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Creates Magic</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch as our AI generates a complete landing page with design, copy, and conversion-focused content in under 5 minutes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Launch & Share</h3>
              <p className="text-muted-foreground leading-relaxed">
                Review, customize if needed, and launch your landing page to the world. Get a shareable link instantly.
              </p>
            </div>
          </div>

          {/* Visual Connection Line */}
          <div className="hidden md:block mt-12">
            <div className="flex items-center justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>

          {/* CTA in How It Works */}
          <div className="text-center mt-12">
            <SignedOut>
              <Link 
                href="/sign-up" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Start Your First Landing Page <ArrowRight className="w-4 h-4" />
              </Link>
            </SignedOut>
            <SignedIn>
              <Link 
                href="/dashboard/create-website" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Create New Landing Page <ArrowRight className="w-4 h-4" />
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>

      {/* Use Cases / Industry Shots */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI adapts to your industry with specialized layouts, copy, and design elements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">SaaS</h3>
              <p className="text-sm text-muted-foreground">Feature-focused layouts with trial CTAs and demo sections</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-300 dark:hover:border-purple-600 transition-colors">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">E-commerce</h3>
              <p className="text-sm text-muted-foreground">Product showcases with compelling offers and social proof</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-green-300 dark:hover:border-green-600 transition-colors">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Local Business</h3>
              <p className="text-sm text-muted-foreground">Location-based design with contact forms and testimonials</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-orange-300 dark:hover:border-orange-600 transition-colors">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Professional</h3>
              <p className="text-sm text-muted-foreground">Clean, credible layouts for consultants and agencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-muted-foreground mb-4">
                "Generated a perfect landing page for my SaaS in under 3 minutes. The copy was spot-on and the design looked professional."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Founder, TechFlow</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-muted-foreground mb-4">
                "As a freelancer, this saves me hours of work. I can now focus on strategy while AI handles the implementation."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div>
                  <div className="font-semibold">Marcus Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Marketing Consultant</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-muted-foreground mb-4">
                "The industry-specific templates are amazing. Generated exactly what my restaurant needed with perfect messaging."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                  L
                </div>
                <div>
                  <div className="font-semibold">Lisa Park</div>
                  <div className="text-sm text-muted-foreground">Restaurant Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">Perfect for trying out GeniqueAI</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <SignedOut>
                  <Link
                    href="/sign-up"
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-block text-center font-medium"
                  >
                    Get Started Free
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link
                    href="/dashboard/create-website"
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-block text-center font-medium"
                  >
                    Create Page
                  </Link>
                </SignedIn>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">2 landing pages per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Basic templates & designs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Community support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">GeniqueAI subdomain</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-500 rounded-2xl shadow-lg relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                <SignedOut>
                  <Link
                    href="/sign-up"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all inline-block text-center font-medium shadow-lg"
                  >
                    Start Pro Trial
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link
                    href="/dashboard/create-website"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all inline-block text-center font-medium shadow-lg"
                  >
                    Upgrade to Pro
                  </Link>
                </SignedIn>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Unlimited landing pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Premium templates & designs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Custom domain support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">SSL certificate</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">For large teams and organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <SignedOut>
                  <Link
                    href="/sign-up"
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-block text-center font-medium"
                  >
                    Contact Sales
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link
                    href="/dashboard"
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-block text-center font-medium"
                  >
                    Contact Sales
                  </Link>
                </SignedIn>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Team collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">White-label solution</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
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

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Building Your Landing Page Now
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses who trust Genique AI to create high-converting landing pages
          </p>
          <SignedOut>
            <div className="relative inline-block">
              <Link 
                href="/sign-up" 
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Get Started for Free <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="relative inline-block">
              <Link 
                href="/dashboard/create-website" 
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Create Your Landing Page Now <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
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