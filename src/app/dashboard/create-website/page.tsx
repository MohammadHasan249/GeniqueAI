import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import WizardForm from "./wizard-form";

export const metadata = { title: "Create a new landing page" };

export default function CreateWebsitePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header with Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Create Your Landing Page</h1>
              <p className="text-muted-foreground">Tell us about your vision and let AI bring it to life</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-card border border-border rounded-lg p-8">
          <WizardForm />
        </div>
      </div>
    </div>
  );
}
