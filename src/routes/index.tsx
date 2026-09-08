import { createFileRoute } from "@tanstack/react-router";
import { CampusApp } from "@/components/campus-app";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Explore Campus — BIT Navigator" },
    { name: "description", content: "Find buildings, rooms, services, and the fastest route across BIT campus." },
    { property: "og:title", content: "Explore Campus — BIT Navigator" },
    { property: "og:description", content: "Find buildings, rooms, services, and the fastest route across BIT campus." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <CampusApp page="explore" />;
}
