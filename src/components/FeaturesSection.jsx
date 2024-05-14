import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
    return(
        <section className="features bg-white">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        What We Offer
      </h2>
      <p className="mt-4 text-gray-500">
        The walnut wood card tray is precision milled to perfectly fit a stack
        of Focus cards. The powder coated steel divider separates active cards
        from new ones, or can be used to archive important task lists.
      </p>
      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Model Sets for Every Subject</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Designed by Good Goods, Inc.
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Get Past paper solutions from past to Present</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Solid walnut base with rare earth magnets and powder coated steel
            card cover
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Unleash Academic Excellence</dt>
          <dd className="mt-2 text-sm text-gray-500">6.25" x 3.55" x 1.15"</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Search Literally anything & get instant Answe</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Hand sanded and finished with natural oil
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Conquer Doubts with Peers and Educators on Forum</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Wood card tray and 3 refill packs
          </dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Considerations</dt>
          <dd className="mt-2 text-sm text-gray-500">
            Made from natural materials. Grain and color vary with each item.
          </dd>
        </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img
        src="images/banners/banner30.jpeg"
        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
        className="rounded-lg bg-gray-100"
      />
      <img
        src="images/banners/banner29.png"
        alt="Top down view of walnut card tray with embedded magnets and card groove."
        className="rounded-lg bg-gray-100"
      />
      <img
        src="images/banners/banner35.jpeg"
        alt="Side of walnut card tray with card groove and recessed card area."
        className="rounded-lg bg-gray-100"
      />
      <img
        src="images/banners/banner11.png"
        alt="Walnut card tray filled with cards and card angled in dedicated groove."
        className="rounded-lg bg-gray-100"
      />
    </div>
  </div>
</section>

    )
};

export default FeaturesSection;