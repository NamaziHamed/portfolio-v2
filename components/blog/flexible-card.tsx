"use client";

import React from "react";
import Link from "next/link";

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Image and Title Section - Wrapped with Link */}
        <Link href={"/blog/" + post.id} className="block">
          {/* Image Section */}
          <div className="w-full h-48 overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Title Section */}
          <div className="p-4 pb-2">
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2">
              {post.title}
            </h3>
          </div>
        </Link>

        {/* Description Section */}
        <div className="px-4 pb-4 flex-1">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
