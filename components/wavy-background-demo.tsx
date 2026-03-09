"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import HeroSection from "./hero-section";

export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <HeroSection />
    </WavyBackground>
  );
}
