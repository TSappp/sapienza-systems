import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="py-32 md:py-44">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-amber-700 text-sm font-semibold uppercase tracking-wider mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-6 text-stone-600 text-lg leading-relaxed">
          This page doesn&rsquo;t exist. You may have followed an old link or
          mistyped the URL.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
