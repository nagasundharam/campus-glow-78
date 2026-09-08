import { createFileRoute } from "@tanstack/react-router";
import { CampusApp } from "@/components/campus-app";

export const Route = createFileRoute("/help")({
  head: () => ({ meta: [
    { title: "Help — BIT Campus Navigator" },
    { name: "description", content: "Help tools and information for Bannari Amman Institute of Technology." },
    { property: "og:title", content: "Help — BIT Campus Navigator" },
    { property: "og:description", content: "Help tools and information for BIT campus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CampusApp page="help" />,
});
