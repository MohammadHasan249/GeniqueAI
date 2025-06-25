import WizardForm from "./wizard-form";

export const metadata = { title: "Create a new website" };

export default function CreateWebsitePage() {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Create your landing page</h1>
      <WizardForm />
    </section>
  );
}
