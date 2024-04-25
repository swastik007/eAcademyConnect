import React from 'react';

function TestimonialCard({ imageName, title, subtitle, text, link }) {
  return (
    <li className="text-sm leading-6">
      <div className="relative group">
        <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-200 to-pink-200 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
        <a href={link} className="cursor-pointer">
          <div className="relative p-6 space-y-6 leading-none rounded-xl bg-slate-100 ring-1 ring-gray-900/5">
            <div className="flex items-center space-x-4">
              <img
                src={imageName}
                className="w-12 h-12 bg-center bg-cover border rounded-full"
                alt={title}
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-700">
                  {title}
                </h3>
                <p className="text-gray-500 text-md">
                  {subtitle}
                </p>
              </div>
            </div>
            <p className="leading-normal text-stone-700 text-md">
              {text}
            </p>
          </div>
        </a>
      </div>
    </li>
  );
}

export default TestimonialCard;
