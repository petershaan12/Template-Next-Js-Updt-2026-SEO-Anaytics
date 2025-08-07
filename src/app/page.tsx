import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Hero Section */}
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">{siteConfig.author}</span>
            </h1>
            <p className="mb-8 text-base-content/80">
              {siteConfig.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
