"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DynamicIcon, type IconName } from "lucide-react/dynamic"
import Link from "next/link"

type FAQItem = {
  id: string
  icon: IconName
  question: string
  answer: string
}

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "info",
      question: "What is Descify?",
      answer:
        "Descify is a desktop application that helps you generate and manage metadata for your images using AI. It can create titles, keywords, descriptions, and tags for batch images, making it perfect for stock photographers, content marketers, and designers.",
    },
    {
      id: "item-2",
      icon: "cpu",
      question: "Which AI models does Descify support?",
      answer:
        "Descify supports Gemini (Google AI) and OpenRouter (which provides access to many AI models including Llama, Claude, and more). OpenAI is not supported.",
    },
    {
      id: "item-3",
      icon: "file-key",
      question: "Do I need to install ExifTool?",
      answer:
        "Yes, ExifTool needs to be installed on your system and added to your PATH. Descify uses ExifTool to embed metadata directly into your image files. You can download it from https://exiftool.org/.",
    },
    {
      id: "item-4",
      icon: "key",
      question: "How do I get an API key?",
      answer:
        "For Gemini, visit https://aistudio.google.com/api-keys to get your API key. For OpenRouter, visit https://openrouter.ai/api-keys. You'll need to enter your API key in the Descify settings before generating metadata.",
    },
    {
      id: "item-5",
      icon: "shield",
      question: "Is my data secure?",
      answer:
        "Yes. Your API keys are stored locally on your device and never sent to our servers. All AI requests are made directly from your computer to the AI providers.",
    },
    {
      id: "item-6",
      icon: "monitor",
      question: "What platforms does Descify support?",
      answer:
        "Descify is a cross-platform desktop app that works on Windows, macOS, and Linux. It's built with Tauri for a fast, native desktop experience.",
    },
    {
      id: "item-7",
      icon: "edit",
      question: "Can I edit the generated metadata?",
      answer:
        "Absolutely! After AI generates the metadata, you can preview the images and edit any field (title, keywords, description, tags) before saving or exporting.",
    },
    {
      id: "item-8",
      icon: "download",
      question: "What export options are available?",
      answer:
        "You can export metadata as CSV, JSON, or text files. You can also embed the metadata directly into image files using ExifTool.",
    },
  ]

  return (
    <section className="bg-muted py-20 dark:bg-background">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Can&apos;t find what you&apos;re looking for? Contact our{" "}
                <Link
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-lg border bg-background px-4 shadow-xs last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
