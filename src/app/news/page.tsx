"use client";

import { NavigationBar } from "@/components/NavigationBar";
import { ExternalLink } from "lucide-react";

type NewsLink = {
  title: string;
  description: string;
  url: string;
  date: string;
};

type NewsCategory = {
  category: string;
  links: NewsLink[];
};

const newsData: NewsCategory[] = [
  {
    category: "Recent Updates",
    links: [
      {
        title: "EXAMPLE NEWS STORY",
        description: "New participating businesses join the initiative",
        url: "https://www.richmond.gov.uk",
        date: "2025-03-15",
      },
      {
        title: "EXAMPLE NEWS STORY",
        description: "SIT STOP receives local community service award",
        url: "https://www.thersa.org",
        date: "2025-02-20",
      },
      {
        title: "Partnership with Royal Brompton Hospital",
        description:
          "Hospital implements SIT STOP chairs throughout facilities",
        url: "https://www.rbht.nhs.uk",
        date: "2025-01-10",
      },
    ],
  },
];

export default function News() {
  return (
    <div className="w-full overflow-x-hidden">
      <NavigationBar />
      <div className="w-full flex justify-center px-5 md:px-10 lg:px-16 xl:px-20 my-8 pt-20">
        <main className="w-full max-w-7xl">
          <section id="hero" className="w-full text-center space-y-4 mb-16">
            <h1 className="text-6xl md:text-8xl text-black font-bold">NEWS</h1>
            <p className="text-md md:text-xl leading-loose">
              Stay informed about SIT STOP in the news
            </p>
          </section>

          <div className="space-y-16">
            {newsData.map((category, categoryIndex) => (
              <section key={categoryIndex} className="w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-8 border-b-2 border-gray-300 pb-4">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-2">
                          {link.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0 ml-2" />
                      </div>
                      <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {link.description}
                      </p>
                      <time className="text-sm text-gray-500 font-medium">
                        {new Date(link.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
