import { createFileRoute } from "@tanstack/react-router";
import { CampusApp } from "@/components/campus-app";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [
    { title: "Analytics — BIT Campus Navigator" },
    { name: "description", content: "Analytics tools and information for Bannari Amman Institute of Technology." },
    { property: "og:title", content: "Analytics — BIT Campus Navigator" },
    { property: "og:description", content: "Analytics tools and information for BIT campus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CampusApp page="analytics" />,
});
