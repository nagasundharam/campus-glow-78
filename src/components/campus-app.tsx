import { Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft, ArrowRight, Bell, Bike, BookOpen, Bot, Building2, CalendarDays,
  ChevronDown, CircleHelp, Clock3, Compass, Footprints, Heart, LayoutDashboard,
  LocateFixed, Map, MapPin, Menu, Navigation, PackageSearch, QrCode, Search,
  Settings, ShieldCheck, SlidersHorizontal, Sparkles, UserRound, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllSelectableLocations, searchLocations } from "@/lib/locationService.js";
import { findGeolocationsRoute } from "@/lib/geolocationsDijkstra.js";

const MAP_URL = "/__l5e/assets-v1/ffe4240f-e168-4688-b83c-6038ce83fed5/campus-map.webp";

type PageKey = "explore" | "buildings" | "saved" | "profile" | "navigation" | "bookings" | "assets" | "analytics" | "notifications" | "lost-found" | "events" | "help" | "settings" | "admin" | "chatbot" | "dashboard";

const nav = [
  ["/", "Explore", Compass], ["/buildings", "Buildings", Building2], ["/navigation", "Navigate", Navigation],
  ["/bookings", "Bookings", CalendarDays], ["/assets", "Assets", PackageSearch], ["/events", "Events", Sparkles],
  ["/lost-found", "Lost & found", Search], ["/analytics", "Analytics", LayoutDashboard], ["/chatbot", "Campus assistant", Bot],
  ["/notifications", "Notifications", Bell], ["/help", "Help", CircleHelp], ["/settings", "Settings", Settings],
] as const;

const highlights = [
  { name: "BIT Learning Center", meta: "Library · Open until 11 PM", icon: BookOpen },
  { name: "AS Academic Block", meta: "Academic · 4 floors", icon: Building2 },
  { name: "Central Campus Cafeteria", meta: "Dining · Open until 9:30 PM", icon: Sparkles },
];

export function CampusApp({ page }: { page: PageKey }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className="min-h-dvh bg-background text-foreground lg:grid lg:grid-cols-[252px_minmax(0,1fr)]">
      <DesktopSidebar page={page} />
      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between border-b bg-card px-4 lg:px-7">
          <div className="flex items-center gap-3 lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMenu(true)}><Menu /></Button>
            <Brand compact />
          </div>
          <div className="hidden lg:block"><p className="font-display text-sm font-semibold">Bannari Amman Institute of Technology</p><p className="text-xs text-muted-foreground">Sathyamangalam campus</p></div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Notifications" asChild><Link to="/notifications"><Bell /></Link></Button>
            <Button variant="ghost" className="hidden h-10 gap-2 sm:flex" asChild><Link to="/profile"><span className="grid size-7 place-items-center rounded-full bg-secondary text-xs font-bold">AS</span><span>Alex</span><ChevronDown className="size-3" /></Link></Button>
          </div>
        </header>
        <main>{page === "explore" || page === "navigation" ? <MapWorkspace navigationMode={page === "navigation"} /> : <ContentPage page={page} />}</main>
        <MobileNav page={page} />
      </div>
      {menu && <MobileMenu close={() => setMenu(false)} page={page} />}
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Navigation className="size-5" /></span><div><p className="font-display text-base font-bold leading-none">CampusNav</p>{!compact && <p className="mt-1 text-[10px] font-bold uppercase text-muted-foreground">BIT wayfinding</p>}</div></div>;
}

function DesktopSidebar({ page }: { page: PageKey }) {
  return <aside className="sticky top-0 hidden h-dvh border-r bg-sidebar px-3 py-5 lg:flex lg:flex-col"><div className="px-3"><Brand /></div><nav className="mt-8 flex-1 space-y-1" aria-label="Main navigation">{nav.map(([to,label,Icon]) => { const active=(page === "explore" && to === "/") || page===to.slice(1); return <Button key={to} variant="ghost" className={`h-11 w-full justify-start ${active ? "bg-secondary font-bold text-foreground" : "text-muted-foreground"}`} asChild><Link to={to}><Icon />{label}</Link></Button>; })}</nav><div className="rounded-xl bg-secondary p-3"><p className="text-xs font-bold">Campus status</p><p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-emerald-500" />All services operational</p></div></aside>;
}

function MapWorkspace({ navigationMode }: { navigationMode: boolean }) {
  const allLocations = useMemo(() => getAllSelectableLocations(), []);
  const [query, setQuery] = useState("");
  const [from, setFrom] = useState("main-gate");
  const [to, setTo] = useState("learning-center");
  const [mode, setMode] = useState<"pedestrian" | "vehicle">("pedestrian");
  const [route, setRoute] = useState<any>(() => findGeolocationsRoute(from, to, mode));
  const results = query ? searchLocations(query).slice(0, 6) : [];
  const startRoute = () => setRoute(findGeolocationsRoute(from, to, mode));
  return <div className="relative lg:grid lg:h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,1fr)_360px]">
    <section className="relative h-[calc(100dvh-8.5rem)] min-h-[540px] overflow-hidden bg-muted lg:h-full">
      <img src={MAP_URL} alt="Bannari Amman Institute of Technology campus map" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-foreground/5" />
      <div className="absolute inset-x-3 top-3 z-10 mx-auto max-w-xl lg:top-5">
        <div className="flex items-center gap-2 rounded-2xl border bg-card p-2 shadow-xl">
          <Search className="ml-2 size-5 text-muted-foreground" /><Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search buildings, rooms, labs…" className="h-10 border-0 bg-transparent shadow-none focus-visible:ring-0" />
          {query && <Button size="icon" variant="ghost" aria-label="Clear search" onClick={()=>setQuery("")}><X /></Button>}
        </div>
        {results.length > 0 && <div className="mt-2 overflow-hidden rounded-xl border bg-card shadow-xl">{results.map((r:any)=><Button key={r.roomId || r.id} variant="ghost" className="h-auto w-full justify-start rounded-none px-4 py-3 text-left" onClick={()=>{setTo(r.id);setQuery("");}}><MapPin className="text-primary"/><span><span className="block text-sm font-bold">{r.name}</span><span className="block text-xs text-muted-foreground">{r.category}</span></span></Button>)}</div>}
      </div>
      <div className="absolute right-3 top-20 z-[2] flex flex-col gap-2 lg:right-5 lg:top-24"><Button size="icon" variant="secondary" className="size-11 bg-card shadow-lg" aria-label="Locate me"><LocateFixed /></Button><Button size="icon" variant="secondary" className="size-11 bg-card shadow-lg" aria-label="Map filters"><SlidersHorizontal /></Button></div>
      {route?.success && <RouteOverlay route={route} />}
      <div className="absolute bottom-3 left-3 right-3 z-[2] rounded-2xl bg-card p-4 shadow-xl lg:hidden">
        <div className="mb-3 flex items-start justify-between"><div><p className="text-xs font-bold uppercase text-muted-foreground">Nearby now</p><h2 className="mt-1 font-display text-lg font-bold">Learning Center</h2></div><span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-bold">3 min</span></div><div className="flex gap-2"><Button className="h-11 flex-1" onClick={startRoute}><Navigation />Directions</Button><Button className="h-11" variant="outline" aria-label="Save location"><Heart /></Button></div>
      </div>
    </section>
    <aside className={`${navigationMode ? "block" : "hidden lg:block"} border-l bg-card p-5 pb-24 lg:overflow-y-auto lg:pb-5`}>
      <p className="text-xs font-bold uppercase text-muted-foreground">Route planner</p><h1 className="mt-1 font-display text-2xl font-bold">Where are you going?</h1>
      <div className="mt-5 space-y-3"><LocationSelect label="Start" value={from} onChange={setFrom} locations={allLocations}/><LocationSelect label="Destination" value={to} onChange={setTo} locations={allLocations}/></div>
      <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1"><Button variant={mode==="pedestrian"?"secondary":"ghost"} onClick={()=>setMode("pedestrian")}><Footprints />Walk</Button><Button variant={mode==="vehicle"?"secondary":"ghost"} onClick={()=>setMode("vehicle")}><Bike />Drive</Button></div>
      <Button className="mt-4 h-12 w-full font-bold" onClick={startRoute}><Navigation />Find fastest route</Button>
      {route?.success && <div className="mt-5 border-t pt-5"><div className="flex items-end gap-5"><div><p className="text-3xl font-display font-bold">{route.formattedWalkingTime.split(" ").slice(0,2).join(" ")}</p><p className="text-xs text-muted-foreground">Estimated time</p></div><div><p className="font-display text-lg font-bold">{route.formattedDistance}</p><p className="text-xs text-muted-foreground">Distance</p></div></div><ol className="mt-5 space-y-4">{route.stepInstructions.slice(0,4).map((step:string,i:number)=><li key={step} className="flex gap-3 text-sm"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold">{i+1}</span><span className="pt-1">{step}</span></li>)}</ol></div>}
      {!navigationMode && <div className="mt-7"><div className="flex items-center justify-between"><h2 className="font-display font-bold">Popular nearby</h2><Button variant="link" size="sm" asChild><Link to="/buildings">View all</Link></Button></div><div className="mt-2 space-y-2">{highlights.map(({name,meta,icon:Icon})=><div key={name} className="flex items-center gap-3 rounded-xl border p-3"><span className="grid size-10 place-items-center rounded-xl bg-secondary"><Icon className="size-5"/></span><div className="min-w-0"><p className="truncate text-sm font-bold">{name}</p><p className="text-xs text-muted-foreground">{meta}</p></div><ArrowRight className="ml-auto size-4"/></div>)}</div></div>}
    </aside>
  </div>;
}

function LocationSelect({label,value,onChange,locations}:{label:string,value:string,onChange:(v:string)=>void,locations:any[]}) { return <label className="block"><span className="mb-1 block text-xs font-bold text-muted-foreground">{label}</span><div className="flex items-center gap-2 rounded-xl border px-3"><MapPin className="size-4 text-primary"/><select value={value} onChange={e=>onChange(e.target.value)} className="h-12 min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none"><option value="main-gate">Main Gate</option><option value="learning-center">BIT Learning Center</option>{locations.slice(0,100).map((l:any)=><option key={`${l.id}-${l.roomId||""}`} value={l.id}>{l.name}</option>)}</select></div></label> }

function RouteOverlay({ route }: { route: any }) { const points=(route.crsSimpleCoordinates||[]).map((p:number[])=>`${(p[1]/2896)*100},${(1-p[0]/3876)*100}`).join(" "); return <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 z-[1] h-full w-full" aria-hidden="true"><polyline points={points} fill="none" stroke="var(--primary)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/><circle cx="63" cy="14" r="1.4" fill="var(--primary)"/></svg> }

function ContentPage({ page }: { page: PageKey }) {
  const content: Record<string,{title:string,sub:string,items:{title:string,meta:string,status?:string}[]}> = {
    buildings:{title:"Campus buildings",sub:"Browse academic blocks, services, and facilities.",items:highlights.map(x=>({title:x.name,meta:x.meta,status:"Open"}))},
    saved:{title:"Saved places",sub:"Your quickest shortcuts across campus.",items:[{title:"AS Academic Block",meta:"Academic · Saved yesterday"},{title:"BIT Learning Center",meta:"Library · Saved last week"}]},
    bookings:{title:"My bookings",sub:"Manage rooms, facilities, and equipment reservations.",items:[{title:"MacBook Pro · Lab unit",meta:"Today · 10:00 AM–12:00 PM",status:"Approved"},{title:"Seminar Pod 204",meta:"Tomorrow · 2:00–4:00 PM",status:"Pending"}]},
    assets:{title:"Campus assets",sub:"Find and reserve available equipment.",items:[{title:"Apple MacBook Pro M3 Max",meta:"Computer Center · Floor 2",status:"Available"},{title:"Meta Quest 3 headset",meta:"Innovation Lab A-102",status:"Available"},{title:"DJI Mavic 3 Pro drone",meta:"GIS Spatial Analytics Center",status:"Reserved"}]},
    events:{title:"Campus events",sub:"What’s happening around BIT.",items:[{title:"Innovation Expo 2026",meta:"Vedhanayagam Auditorium · Friday, 10 AM",status:"RSVP"},{title:"Inter-department Sports Meet",meta:"BIT Sports Arena · Saturday, 7 AM",status:"Open"}]},
    "lost-found":{title:"Lost & found",sub:"Report and recover items across campus.",items:[{title:"Black scientific calculator",meta:"Found near AS Block · 2 hours ago",status:"Found"},{title:"Blue student ID lanyard",meta:"Lost near cafeteria · Yesterday",status:"Lost"}]},
    notifications:{title:"Notifications",sub:"Updates from bookings, events, and campus services.",items:[{title:"Booking approved",meta:"Your MacBook Pro reservation is ready."},{title:"Route advisory",meta:"Pedestrian path near Main Gate is busy."}]},
    analytics:{title:"Campus analytics",sub:"Live operational overview and resource usage.",items:[{title:"2,847 active visitors",meta:"12% higher than yesterday",status:"Live"},{title:"68% room occupancy",meta:"Peak period · 11 AM–1 PM"},{title:"42 assets available",meta:"Across 9 campus facilities"}]},
    dashboard:{title:"Good morning, Alex",sub:"Your campus day at a glance.",items:[{title:"Next class · CS 204",meta:"AS Academic Block · 9:30 AM"},{title:"Equipment booking",meta:"Computer Center · 10:00 AM",status:"Approved"}]},
    help:{title:"Help center",sub:"Answers and support for navigating campus.",items:[{title:"How campus directions work",meta:"Routing and accessibility"},{title:"Bookings and QR check-in",meta:"Facilities and equipment"},{title:"Contact campus support",meta:"Typically replies within one hour"}]},
    settings:{title:"Settings",sub:"Control your navigation and notification preferences.",items:[{title:"Accessible routes",meta:"Prefer step-free paths"},{title:"Travel mode",meta:"Walking"},{title:"Campus notifications",meta:"Bookings and route advisories enabled"}]},
    profile:{title:"Alex Johnson",sub:"Computer Science · Student",items:[{title:"Student ID",meta:"BIT26CS1042"},{title:"Saved places",meta:"2 campus locations"},{title:"Bookings",meta:"1 active reservation"}]},
    admin:{title:"Campus administration",sub:"Operational controls and service overview.",items:[{title:"User management",meta:"2,847 active users"},{title:"Asset requests",meta:"7 pending approvals",status:"Review"},{title:"Service health",meta:"All systems operational",status:"Healthy"}]},
  };
  if(page==="chatbot") return <ChatPage/>;
  const c=content[page] || content.dashboard;
  return <div className="mx-auto min-h-[calc(100dvh-4rem)] max-w-6xl px-4 py-7 pb-28 sm:px-7 lg:pb-10"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase text-muted-foreground">CampusNav</p><h1 className="mt-1 font-display text-3xl font-bold">{c.title}</h1><p className="mt-2 text-sm text-muted-foreground">{c.sub}</p></div><Button><QrCode />Scan campus QR</Button></div><div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{c.items.map((item,i)=><article key={item.title} className="rounded-2xl border bg-card p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><span className="grid size-11 place-items-center rounded-xl bg-secondary"><Building2 className="size-5"/></span>{item.status&&<span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-bold">{item.status}</span>}</div><h2 className="mt-5 font-display text-lg font-bold">{item.title}</h2><p className="mt-1 text-sm text-muted-foreground">{item.meta}</p><Button className="mt-5 w-full" variant="outline">View details<ArrowRight /></Button></article>)}</div></div>;
}

function ChatPage() { const [messages,setMessages]=useState([{role:"assistant",text:"Hi Alex — ask me about campus buildings, rooms, services, or the fastest way to get somewhere."}]); const [text,setText]=useState(""); const send=()=>{if(!text.trim())return; const q=text; setText(""); setMessages(m=>[...m,{role:"user",text:q},{role:"assistant",text:`I can help with “${q}”. For exact directions, open Navigate and choose your start and destination.`}]);}; return <div className="mx-auto flex h-[calc(100dvh-4rem)] max-w-4xl flex-col px-4 pb-24 pt-7 sm:px-7 lg:pb-7"><div><p className="text-xs font-bold uppercase text-muted-foreground">Campus assistant</p><h1 className="mt-1 font-display text-3xl font-bold">How can I help?</h1></div><div className="mt-6 flex-1 space-y-3 overflow-y-auto rounded-2xl border bg-card p-4">{messages.map((m,i)=><div key={i} className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm ${m.role==="user"?"ml-auto bg-primary text-primary-foreground":"bg-muted"}`}>{m.text}</div>)}</div><form className="mt-3 flex gap-2" onSubmit={e=>{e.preventDefault();send();}}><Input value={text} onChange={e=>setText(e.target.value)} placeholder="Ask about campus…" className="h-12 rounded-xl bg-card"/><Button className="size-12 shrink-0" type="submit" aria-label="Send message"><ArrowRight/></Button></form></div> }

function MobileNav({page}:{page:PageKey}) { const items=[["/","Explore",Compass],["/buildings","Buildings",Building2],["/saved","Saved",Heart],["/profile","You",UserRound]] as const; return <nav className="fixed inset-x-0 bottom-0 z-30 grid h-[74px] grid-cols-4 border-t bg-card px-2 pb-[env(safe-area-inset-bottom)] lg:hidden" aria-label="Quick navigation">{items.map(([to,label,Icon])=>{const active=(page==="explore"&&to==="/")||page===to.slice(1);return <Link key={to} to={to} className={`flex flex-col items-center justify-center gap-1 text-[11px] font-bold ${active?"text-foreground":"text-muted-foreground"}`}><span className={active?"rounded-xl bg-primary p-2":"p-2"}><Icon className="size-5"/></span>{label}</Link>})}</nav> }

function MobileMenu({close,page}:{close:()=>void,page:PageKey}) { return <div className="fixed inset-0 z-50 bg-foreground/25 lg:hidden"><aside className="h-full w-[86%] max-w-sm bg-card p-4 shadow-2xl"><div className="flex items-center justify-between"><Brand/><Button variant="ghost" size="icon" onClick={close} aria-label="Close menu"><X/></Button></div><nav className="mt-6 space-y-1">{nav.map(([to,label,Icon])=><Button key={to} variant="ghost" className={`h-11 w-full justify-start ${page===to.slice(1)?"bg-secondary":""}`} asChild><Link to={to} onClick={close}><Icon/>{label}</Link></Button>)}</nav></aside></div> }