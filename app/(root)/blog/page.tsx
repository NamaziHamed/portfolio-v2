import { articles } from "@/articles";
import React from "react";
import WideCarousel from "@/components/blog/wide-carousel";
import FlexibleCard from "@/components/blog/flexible-card";

export const metadata = {
  title: "Blog | Hamed Namazi Portfolio",
  description: "Read all the latest blog posts from MySite.",
};

const page = () => {
  return (
    <div className="flex flex-col items-center w-full gap-5 p-3">
      <WideCarousel slides={articles} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {articles.map((item, index) => (
          <FlexibleCard key={index} post={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
