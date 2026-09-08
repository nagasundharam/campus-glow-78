import { createFileRoute } from "@tanstack/react-router";
import { CampusApp } from "@/components/campus-app";

export const Route = createFileRoute("/lost-found")({
  head: () => ({ meta: [
    { title: "Lost Found — BIT Campus Navigator" },
    { name: "description", content: "Lost Found tools and information for Bannari Amman Institute of Technology." },
    { property: "og:title", content: "Lost Found — BIT Campus Navigator" },
    { property: "og:description", content: "Lost Found tools and information for BIT campus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CampusApp page="lost-found" />,
});
