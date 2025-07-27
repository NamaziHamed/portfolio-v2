import { articles } from "@/articles";
import React from "react";
import Image from "next/image";

const page = ({ params }: { params: { id: string } }) => {
  const post = articles.filter((item) => item.id === Number(params.id))[0];
  return (
    <div className="flex flex-col gap-5 max-w-7xl mx-auto pt-10 px-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center">
        {post.title}
      </h1>
      <h4 className="text-lg md:text-xl lg:text-2xl">{post.description}</h4>
      <div>
        <Image
          src={post.img}
          alt={post.title}
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
      <div
        id="post-content"
        dangerouslySetInnerHTML={{ __html: post.text }}
        className="space-y-7 text-lg md:text-xl lg:text-2xl"
      ></div>
    </div>
  );
};

export default page;
