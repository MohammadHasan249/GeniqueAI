"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { WizardSchema, type WizardAnswers } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function WizardForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WizardAnswers>({
    resolver: zodResolver(WizardSchema),
    defaultValues: {
      tone: "Friendly",
      goal: "Leads",
      primaryColor: "#3b82f6",
    },
  });

  async function onSubmit(values: WizardAnswers) {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      const { pageId } = await res.json();
      router.push(`/dashboard/${pageId}`); // detail page (later)
    } else {
      alert("Generation failed. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      {/* PRODUCT */}
      <label className="grid gap-1">
        <span>What is your product or service?</span>
        <input className="input" {...register("product")} />
        {errors.product && <p className="text-red-500">{errors.product.message}</p>}
      </label>

      {/* AUDIENCE */}
      <label className="grid gap-1">
        <span>Who is your target audience?</span>
        <input className="input" {...register("audience")} />
      </label>

      {/* GOAL */}
      <label className="grid gap-1">
        <span>Primary goal of the page</span>
        <select className="input" {...register("goal")}>
          <option value="Leads">Collect leads</option>
          <option value="Sales">Sell a product</option>
          <option value="Newsletter">Grow newsletter</option>
        </select>
      </label>

      {/* TONE */}
      <label className="grid gap-1">
        <span>Desired tone</span>
        <select className="input" {...register("tone")}>
          <option>Friendly</option>
          <option>Professional</option>
          <option>Bold</option>
        </select>
      </label>

      {/* COLOR */}
      <label className="grid gap-1">
        <span>Primary brand color</span>
        <input type="color" className="h-10 w-16" {...register("primaryColor")} />
      </label>

      {/* REFERENCE */}
      <label className="grid gap-1">
        <span>Reference website (optional)</span>
        <input className="input" placeholder="https://example.com" {...register("referenceUrl")} />
      </label>

      <button className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Generating…" : "Generate landing page"}
      </button>
    </form>
  );
}
