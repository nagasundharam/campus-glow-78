import { createFileRoute } from "@tanstack/react-router";
import { CampusApp } from "@/components/campus-app";

export const Route = createFileRoute("/bookings")({
  head: () => ({ meta: [
    { title: "Bookings — BIT Campus Navigator" },
    { name: "description", content: "Bookings tools and information for Bannari Amman Institute of Technology." },
    { property: "og:title", content: "Bookings — BIT Campus Navigator" },
    { property: "og:description", content: "Bookings tools and information for BIT campus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CampusApp page="bookings" />,
});
