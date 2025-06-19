// src/scripts/generate.ts
import fs from "node:fs/promises";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { PageSchema } from "../schemas/page.js";

async function main() {
  const { object: page } = await generateObject({
    model: openai("gpt-3.5-turbo"),
    schema: PageSchema,
    prompt:
      "Create landing-page copy for an eco-friendly water bottle start-up.",
  });

  const tsx = `\
import React from "react";

export const metadata = {
  title: "${page.hero.headline.replace(/"/g, '\\"')}",
  description: "${page.hero.subheadline.replace(/"/g, '\\"')}",
};

export default function GeneratedPage() {
  return (
    <main className="mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">
        ${page.hero.headline}
      </h1>
      <p className="text-lg mb-8">${page.hero.subheadline}</p>
      <button className="bg-primary text-white px-6 py-3 rounded">
        ${page.hero.cta}
      </button>

      <section className="mt-16 grid grid-cols-1 gap-8">
        ${page.features
          .map(
            (f) => `
        <div>
          <h3 className="text-xl font-semibold mb-2">${f.title}</h3>
          <p>${f.description}</p>
        </div>`
          )
          .join("")}
      </section>
    </main>
  );
}
`;

  const dest = "src/app/generated/page.tsx"; // route = /generated
  await fs.mkdir("src/app/generated", { recursive: true });
  await fs.writeFile(dest, tsx);

  console.log("✅ Wrote", dest);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
