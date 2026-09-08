# Campus Navigation UI Redesign

## Goal
Migrate the existing uploaded campus navigation application into the current web project and redesign only its presentation. Preserve its real routes, data contracts, JWT authentication, role checks, API endpoints, map assets, Dijkstra routing, booking behavior, QR flows, analytics, notifications, RAG assistant, and admin capabilities.

## Visual direction
- Build the selected **Dense operational navigator** direction.
- Mobile first: map-dominant Explore screen, compact floating search, large map controls, shallow information sheet, and fixed Explore / Buildings / Saved / You navigation.
- Desktop: persistent left navigation, large center map, and context-sensitive right rail.
- Locked system: Campus Gold `#FFBF24`, soft gold `#FFF4CC`, white/light neutral surfaces, charcoal text, restrained green/red statuses, Sora headings, Manrope body, 14–24px radii, minimal borders, subtle shadows.
- Preserve the uploaded campus map and campus imagery; do not replace them with decorative stock assets.

## Implementation
1. **Port the functional web application**
   - Use the uploaded `.jsx` web implementation as the source of truth; exclude the duplicate legacy React Native `.js` screen tree.
   - Adapt routing to TanStack Start while retaining all public, protected, and Administrator-only paths.
   - Keep REST endpoint paths, payload shapes, JWT behavior, local fallback data, URL query parameters, and socket event names unchanged.

2. **Preserve core navigation behavior**
   - Bring over the existing campus SVG/WebP map assets through the project asset flow.
   - Preserve the Dijkstra/geolocation graph, coordinate conversion, landmark overrides, route steps, travel modes, source/destination selection, navigation history calls, and map interactions.
   - Adapt browser-only map rendering safely for server rendering without changing the routing engine.

3. **Create the shared UI system**
   - Define semantic color, typography, radius, shadow, status, map, and navigation tokens.
   - Build/rework reusable buttons, icon controls, search, chips, cards, badges, fields, tabs, modal/sheet, loading/empty/error states, desktop sidebar, mobile bottom navigation, route information, and building cards.
   - Use consistent Lucide icons and accessible 44px-or-larger controls.

4. **Redesign every existing surface**
   - Explore/map, buildings, building details, route planning, turn-by-turn directions, QR localization.
   - Dashboard, bookings, assets, analytics, events, lost and found, notifications.
   - Profile, settings, help center, login, register, and Administrator dashboard.
   - Restore the existing RAG/chat capability as a web route because its service/backend behavior exists but its previous web navigation omitted the screen; use the existing chat service and offline fallback rather than new logic.

5. **Responsive behavior**
   - Validate deliberate layouts at 320, 375, 390, 412, and 430px widths.
   - Add tablet hybrid behavior and desktop/large-desktop map-plus-rail layouts without creating a separate product design.
   - Prevent fixed navigation, sheets, dialogs, controls, and long labels from overlapping content.

6. **Verification**
   - Check every route renders with unique metadata.
   - Exercise login/register presentation, protected/admin redirects, map load, search, building selection/details, route calculation, travel-mode selection, QR, bookings, assets, analytics, events, lost and found, notifications, chat, profile/settings/help, and admin actions.
   - Confirm API endpoint strings and core algorithms remain unchanged, then check preview errors and mobile/desktop screenshots.

## Technical notes
- The upload contains an authoritative React web `.jsx` tree and a duplicate legacy Expo/React Native `.js` tree; only the web tree will be migrated, with legacy files consulted where a capability such as chat is absent from web routing.
- Existing external server behavior remains external. The frontend will keep its current API contracts and mock/offline fallbacks rather than introducing a new database or fake API.
- The map package will be isolated from server rendering while pure routing/data modules stay shared and unchanged.
