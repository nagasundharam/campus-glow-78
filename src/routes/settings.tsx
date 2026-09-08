import { createFileRoute } from "@tanstack/react-router";
import { CampusApp } from "@/components/campus-app";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "Settings — BIT Campus Navigator" },
    { name: "description", content: "Settings tools and information for Bannari Amman Institute of Technology." },
    { property: "og:title", content: "Settings — BIT Campus Navigator" },
    { property: "og:description", content: "Settings tools and information for BIT campus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CampusApp page="settings" />,
});
