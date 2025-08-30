"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { WizardSchema, type WizardAnswers } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LogoUpload } from "@/components/logo-upload";

export default function WizardForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<WizardAnswers>({
    resolver: zodResolver(WizardSchema),
    defaultValues: {
      tone: "Friendly",
      goal: "Leads",
      industry: "",
      primaryColor: "#3b82f6",
      logoUrl: "",
    },
  });

  const logoUrl = watch("logoUrl");

  async function onSubmit(values: WizardAnswers) {
    console.log(values);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const { pageId } = await res.json();
      router.push(`/dashboard/pages/${pageId}`); // detail page
    } else {
      alert("Generation failed. Please try again.");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* BUSINESS NAME */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-900">
            Business Name <span className="text-red-500">*</span>
          </label>
          <input 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500"
            placeholder="e.g., Acme Corp, My Startup"
            {...register("businessName")} 
          />
          {errors.businessName && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.businessName.message}
            </p>
          )}
        </div>

        {/* LOGO UPLOAD */}
        <LogoUpload
          currentLogoUrl={logoUrl}
          onLogoUploaded={(url) => setValue("logoUrl", url)}
        />

        {/* PRODUCT */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-900">
            What is your product or service? <span className="text-red-500">*</span>
          </label>
          <input 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500"
            placeholder="e.g., SaaS platform, Online course, Consulting service"
            {...register("product")} 
          />
          {errors.product && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.product.message}
            </p>
          )}
        </div>

        {/* AUDIENCE */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-900">
            Who is your target audience?
          </label>
          <input 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500"
            placeholder="e.g., Small business owners, Students, Marketing professionals"
            {...register("audience")} 
          />
          {errors.audience && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.audience.message}
            </p>
          )}
        </div>

        {/* INDUSTRY */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-900">
            Industry
            <span className="text-sm font-normal text-gray-500 ml-1">(optional)</span>
          </label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900" {...register("industry")}>
            <option value="">Auto-detect from business description</option>
            <option value="saas">💻 SaaS / Software</option>
            <option value="ecommerce">🛒 E-commerce / Retail</option>
            <option value="restaurant">🍕 Restaurant / Food Service</option>
            <option value="healthcare">🏥 Healthcare / Medical</option>
            <option value="education">🎓 Education / Training</option>
            <option value="finance">💰 Finance / Banking</option>
            <option value="creative">🎨 Creative / Design</option>
            <option value="consulting">💼 Consulting / Professional Services</option>
            <option value="technology">⚡ Technology / Engineering</option>
            <option value="other">🔧 Other</option>
          </select>
          <p className="text-xs text-gray-500">This helps us choose the perfect design style for your industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GOAL */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Primary goal
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900" {...register("goal")}>
              <option value="Leads">🎯 Collect leads</option>
              <option value="Sales">💰 Sell a product</option>
              <option value="Newsletter">📧 Grow newsletter</option>
            </select>
          </div>

          {/* TONE */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
              Desired tone
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900" {...register("tone")}>
              <option value="Friendly">😊 Friendly</option>
              <option value="Professional">💼 Professional</option>
              <option value="Bold">⚡ Bold</option>
            </select>
          </div>
        </div>

        {/* COLOR */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-900">
            Primary brand color
          </label>
          <div className="flex items-center gap-3">
            <input 
              type="color" 
              className="h-12 w-20 border border-gray-300 rounded-lg cursor-pointer" 
              {...register("primaryColor")} 
            />
            <span className="text-sm text-gray-600">Choose a color that represents your brand</span>
          </div>
        </div>

        {/* REFERENCE */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-900">
            Reference landing page
            <span className="text-sm font-normal text-gray-500 ml-1">(optional)</span>
          </label>
          <input 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500"
            placeholder="https://example.com"
            {...register("referenceUrl")} 
          />
          <p className="text-xs text-gray-500">Share a landing page you admire for inspiration</p>
        </div>

        <div className="pt-4">
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating your landing page...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Generate My Landing Page
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
