"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const LandingCarousel = () => {
  return (
    <div className="p-16 mb-24 bg-transparent">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="bg-[#192339] rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl text-white font-semibold mb-4">
                Feature 1
              </h2>
              <p className="text-lg text-zinc-400">
                Provide a brief description of the feature and its benefits.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[#192339] rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl text-white font-semibold mb-4">
                Feature 2
              </h2>
              <p className="text-lg text-zinc-400">
                Provide a brief description of the feature and its benefits.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-[#192339] rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl text-white font-semibold mb-4">
                Feature 3
              </h2>
              <p className="text-lg text-zinc-400">
                Provide a brief description of the feature and its benefits.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
