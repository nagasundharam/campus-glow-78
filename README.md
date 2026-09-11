# Campus Navigator Pro

REDESIGN THE EXISTING CAMPUS NAVIGATION APPLICATION UI ONLY.

IMPORTANT:

This is an existing, functional campus navigation project. DO NOT rebuild the application from scratch and DO NOT remove, replace, or simplify any existing functionality.

Your primary task is:

1. Redesign the UI.

2. Make the application MOBILE-FIRST.

3. Make the same application fully RESPONSIVE for desktop/tablet/web.

4. Replicate the visual design language of the attached reference image.

5. Preserve all existing business logic, APIs, routes, navigation algorithms, database interactions, authentication, data, and functionality.

==================================================

REFERENCE DESIGN

==================================================

Use the attached reference image as the PRIMARY UI/UX inspiration.

The design should have a similar visual character:

- Modern campus navigation application

- Mobile-first interface

- Clean white/light background

- Soft rounded cards

- Large rounded corners

- Minimal borders

- Subtle shadows

- Yellow/golden primary accent

- Dark charcoal text

- Light gray secondary text

- Spacious layouts

- Large touch-friendly controls

- Bottom navigation on mobile

- Map-first experience

- Building cards with images

- Clean search interface

- Compact information hierarchy

- Premium modern navigation-app appearance

- Similar visual density and spacing to the reference image

Do NOT blindly copy the exact content from the reference image.

Use the existing application's real campus data, pages, functionality and content.

==================================================

MOST IMPORTANT RULE: PRESERVE FUNCTIONALITY

==================================================

DO NOT change:

- Existing backend functionality

- Existing APIs

- Existing API endpoints

- Existing database models

- Existing authentication

- Login/register behavior

- JWT authentication

- User roles

- Admin functionality

- Developer/DevOps/admin permissions if present

- Existing map functionality

- Existing campus map

- Existing routing algorithms

- Dijkstra routing

- Navigation calculations

- Source/destination selection

- Turn-by-turn navigation

- QR localization

- Building data

- Room data

- Asset data

- Booking functionality

- Reservation logic

- Analytics calculations

- Occupancy data

- Events

- Lost & Found

- Notifications

- Help Center

- Chatbot/RAG functionality

- Profile functionality

- Settings functionality

- Saved locations

- Navigation history

- Existing campus graph

- Existing geolocation graph

- Existing map assets

- Existing mock/seed data

- Existing server functionality

DO NOT change the underlying logic just to achieve the new design.

If an existing component already performs a function correctly, keep its functionality and redesign only its presentation.

==================================================

EXISTING APPLICATION STRUCTURE

==================================================

The project already contains functionality/components related to:

- Campus Map

- Interactive Campus Map

- Building Details

- Floating Navigation Panel

- Source/Destination Selector

- Turn-by-Turn Directions

- QR Modal

- Dashboard

- Buildings

- Bookings

- Assets

- Analytics

- Events

- Lost & Found

- Notifications

- Profile

- Settings

- Help Center

- Authentication

- Chatbot/RAG

- Admin

- Navigation History

Use the existing implementation as the source of truth.

Before modifying anything:

1. Inspect the existing project structure.

2. Identify all existing pages.

3. Identify all routes.

4. Identify all reusable components.

5. Identify existing API calls.

6. Identify navigation/state/context logic.

7. Identify existing map/routing logic.

8. Identify existing authentication and role logic.

9. Identify which files are responsible for UI versus business logic.

Then modify the UI layer without breaking functionality.

==================================================

MOBILE-FIRST DESIGN

==================================================

The mobile application should be the PRIMARY design target.

Target screen sizes:

- 320px

- 375px

- 390px

- 412px

- 430px

The application must look like a polished native mobile navigation application even though it is implemented as a web application.

Use:

- Full-width mobile layouts

- Safe spacing around screen edges

- Large touch targets

- Bottom navigation

- Floating action buttons where appropriate

- Bottom sheets

- Rounded cards

- Compact headers

- Sticky navigation where useful

- Mobile-friendly forms

- Mobile-friendly map controls

- Swipe-friendly cards where appropriate

- Avoid desktop-style tables on mobile

Do not simply shrink the desktop UI.

The mobile layout must be intentionally designed for mobile.

==================================================

DESKTOP / RESPONSIVE WEB

==================================================

The same application must also work beautifully on:

- Mobile

- Tablet

- Laptop

- Desktop

- Large desktop monitors

Use responsive breakpoints.

On desktop:

- Use wider content areas

- Use side panels where appropriate

- Use multi-column layouts

- Keep the map prominent

- Use desktop navigation/sidebar where appropriate

- Increase information density without making the UI cluttered

On mobile:

- Use bottom navigation

- Use compact headers

- Use bottom sheets

- Use stacked cards

- Keep map interactions touch-friendly

Do NOT create a separate unrelated desktop design.

It should feel like the same product at every breakpoint.

==================================================

COLOR SYSTEM

==================================================

Create a consistent design system inspired by the reference image.

Primary:

- Warm yellow/golden accent

Use yellow primarily for:

- Primary buttons

- Active navigation

- Selected states

- Route highlights

- Important actions

- Location/navigation actions

- Status indicators where appropriate

Secondary colors:

- White

- Off-white

- Very light gray

- Dark charcoal

- Medium gray

- Soft green for Open/Available

- Soft red for Closed/Unavailable

Avoid excessive colors.

The interface should feel clean and professional.

==================================================

TYPOGRAPHY

==================================================

Use a modern clean sans-serif font.

Typography hierarchy:

- Large page titles

- Medium section headings

- Compact card titles

- Small metadata

- Clear status text

Example hierarchy:

Page title:

24–28px / bold

Section heading:

18–20px / semibold

Card title:

15–17px / semibold

Body:

13–15px

Metadata:

11–13px

Do not make text unnecessarily large.

==================================================

MOBILE BOTTOM NAVIGATION

==================================================

Create a polished bottom navigation inspired by modern mobile navigation applications.

Suggested structure:

Explore

Buildings

Saved

You

Use the application's existing routes and functionality.

Do NOT create fake navigation pages.

The active item should use the yellow accent.

Use simple outlined icons with a filled/strong active state.

Bottom navigation should:

- Stay fixed at the bottom on mobile

- Have rounded/top-soft appearance if appropriate

- Avoid covering page content

- Respect mobile safe areas

- Have large enough touch targets

On desktop, replace this with an appropriate responsive navigation/sidebar/header.

==================================================

HOME / EXPLORE SCREEN

==================================================

Make the Explore/Map screen the main experience.

The map should dominate the screen.

Top area:

- Campus/application identity

- Search / destination input

- Current location action

Map:

- Existing campus map must be preserved

- Existing map markers must work

- Existing routes must work

- Existing map controls must work

- Existing building interactions must work

Floating UI:

- Search destination

- Current location

- Map layers if already available

- QR scan/localization if already available

Bottom sheet/card:

Show relevant nearby information such as:

- Buildings

- Facilities

- Navigation options

- Shuttle information

- Important campus locations

Use existing data rather than creating fake data.

==================================================

SEARCH EXPERIENCE

==================================================

Redesign the existing search functionality.

Search UI should resemble a modern navigation app.

Use:

- Rounded search bar

- Search icon

- Clear button

- Recent searches if already supported

- Search results as clean cards

- Building/facility icons

- Distance information

- Availability/open status where existing data supports it

Search results should be touch-friendly.

Do not change the existing search algorithm.

==================================================

BUILDINGS SCREEN

==================================================

Redesign the existing Buildings page to resemble the building-list screen shown in the reference.

Use:

- Category/filter chips

- Search

- Building cards

- Building thumbnail/image

- Building name

- Open/closed status

- Distance

- Walking/travel time

- Navigation CTA

- Save button

- Report action if already supported

Cards should have:

- Rounded corners

- Soft spacing

- Minimal borders

- Subtle shadow

- Clean information hierarchy

Example visual structure:

[ Building Image ]  Building Name

                    Open • 07:00–16:00

                    200 m • 5 min • Walking

                    [Go] [Report] [Save]

Do not hardcode these exact values.

Use existing project data.

==================================================

BUILDING DETAILS SCREEN

==================================================

Redesign BuildingDetailDrawer and/or building detail pages.

Use a modern mobile bottom-sheet/detail-page style.

Top:

- Back button

- Building name

- Open/closed status

- Operating hours

- Distance

- Travel time

Then:

- Building images/gallery if existing

- Floors

- Rooms

- Facilities

- Amenities

- Parking

- Availability

- Other existing building information

Each floor/section should be clearly separated.

Use cards and expandable sections where appropriate.

Preserve all existing building-detail functionality.

==================================================

NAVIGATION EXPERIENCE

==================================================

Navigation is one of the MOST IMPORTANT parts of this application.

Preserve the existing routing logic.

The redesigned UI should make navigation feel similar to a modern maps application.

When navigation starts:

Top/bottom navigation panel should display:

- Destination

- Distance

- Estimated time

- Travel mode

- Route information

- Start/Go button

- Cancel/Stop button if already supported

Turn-by-turn directions should use a clean card-based interface.

Example:

← Head toward Main Block

120 m

Then:

→ Turn right toward Library

80 m

Do not modify route calculations.

==================================================

TRAVEL MODES

==================================================

If travel modes already exist or are being introduced in the existing project, design them as clean selectable chips/cards.

Modes:

🚶 Walking

🚲 Bicycle

🚗 Car

The UI should clearly show the selected travel mode.

Example:

[ 🚶 Walk ] [ 🚲 Bike ] [ 🚗 Car ]

Use the existing routing behavior/data for each mode.

DO NOT invent routing logic solely as part of this UI redesign.

==================================================

QR LOCALIZATION

==================================================

Preserve the existing QR localization functionality.

Redesign the QR scanner/modal to match the application style.

Use:

- Large scan area

- Rounded scanner container

- Simple instructions

- Clear scan button

- Clean success state

- Error state

Do not change QR processing logic.

==================================================

BOOKINGS

==================================================

Redesign the existing booking/reservation UI.

Preserve all functionality.

Improve:

- Calendar UI

- Date selection

- Time selection

- Resource cards

- Availability indicators

- Booking confirmation

- Booking history

- Cancellation/edit actions

Use mobile-friendly bottom sheets/modals.

Desktop should use responsive dialogs/panels.

==================================================

ASSETS

==================================================

Redesign the existing Assets page.

Use:

- Search

- Categories

- Asset cards

- Availability

- Quantity

- Location

- Booking/reservation CTA

Preserve existing asset functionality and API behavior.

==================================================

ANALYTICS

==================================================

Redesign analytics without changing calculations.

Use modern dashboard cards and responsive charts.

Examples:

- Occupancy

- Peak usage

- Booking statistics

- Facility utilization

- Navigation statistics

Charts should be:

- Clean

- Responsive

- Mobile-friendly

- Easy to understand

Do not alter backend analytics calculations.

==================================================

EVENTS

==================================================

Redesign event cards with:

- Event image if available

- Event name

- Date

- Time

- Location

- Description

- Relevant action

Use existing event data.

==================================================

LOST & FOUND

==================================================

Create a clean card-based mobile interface while preserving the existing Lost & Found functionality.

Use:

- Item image

- Item title

- Found/lost status

- Location

- Date

- Details

- Existing actions

==================================================

CHATBOT / AI ASSISTANT

==================================================

Preserve the existing chatbot/RAG functionality.

Redesign it as a modern campus assistant interface.

Use:

- Chat bubbles

- Suggested questions

- Clean input bar

- Send button

- Loading state

- Error state

- Mobile keyboard-friendly layout

Do not change the RAG logic or API.

==================================================

PROFILE / SETTINGS

==================================================

Redesign:

- Profile

- Notifications

- Settings

- Help Center

Use modern grouped settings cards.

Example:

Account

---------

Profile

Notifications

Saved Places

Preferences

---------

Theme

Language

Navigation preferences

Support

---------

Help Center

Report a problem

Preserve all existing functionality.

==================================================

AUTHENTICATION

==================================================

Redesign Login/Register screens to match the new design system.

Use:

- Clean centered layout

- Campus branding

- Rounded input fields

- Clear validation messages

- Primary yellow CTA

- Minimal visual clutter

DO NOT change authentication logic.

==================================================

ADMIN UI

==================================================

Preserve existing admin functionality.

Redesign admin pages with a modern responsive dashboard.

Desktop:

- Sidebar

- Dashboard cards

- Tables

- Charts

Mobile:

- Cards instead of wide tables

- Horizontal scrolling only where necessary

- Responsive controls

Do not remove admin capabilities.

==================================================

COMPONENT DESIGN SYSTEM

==================================================

Create reusable UI components where possible:

- Button

- IconButton

- SearchBar

- BottomNavigation

- Header

- Card

- BuildingCard

- FacilityCard

- StatusBadge

- FilterChip

- BottomSheet

- Modal

- Input

- Select

- Tabs

- EmptyState

- LoadingState

- ErrorState

- Toast

- NavigationPanel

- RouteInfoCard

Avoid duplicate styling.

Create a consistent design system.

==================================================

ICONS

==================================================

Use a consistent icon library such as Lucide if already available or compatible.

Do not mix many different icon styles.

Icons should be:

- Simple

- Minimal

- Consistent

- Touch-friendly

==================================================

IMAGES

==================================================

Use existing project images/assets wherever available.

Do not replace existing campus/map assets unnecessarily.

Building images should use existing building imagery/data.

Do not introduce random stock images when the project already contains relevant assets.

==================================================

MAP UI

==================================================

The map is a CORE FEATURE.

DO NOT replace the existing map implementation.

DO NOT remove:

- Campus map

- Building markers

- Routes

- Map controls

- Existing SVG/WEBP map assets

- Geolocation

- Navigation overlays

Only redesign surrounding controls, cards, search, bottom sheets and panels.

The map should visually integrate with the new UI.

==================================================

RESPONSIVE BEHAVIOR

==================================================

Mobile:

- Bottom navigation

- Full-width cards

- Bottom sheets

- Floating controls

- Map-first layout

Tablet:

- Hybrid layout

- More visible side content

Desktop:

- Sidebar/navigation

- Larger map

- Two-column layouts

- Persistent panels where useful

Large desktop:

- Center content

- Prevent excessive stretching

- Maintain readable card widths

==================================================

VISUAL DETAILS

==================================================

Match the reference image's overall feeling:

- Rounded iPhone-style UI

- Soft shadows

- White cards

- Yellow primary accent

- Very light gray backgrounds

- Minimal borders

- Compact metadata

- Clean iconography

- High whitespace

- Modern navigation-app aesthetic

Use approximately:

- 16–24px page padding

- 12–18px card padding

- 14–24px border radius

- Soft shadows

- Consistent 8px spacing system

Avoid:

- Heavy gradients

- Excessive glassmorphism

- Neon colors

- Huge text

- Excessive animations

- Cluttered dashboards

- Excessive borders

- Old-fashioned Bootstrap-style UI

==================================================

ANIMATIONS

==================================================

Use subtle animations only:

- Card press

- Button hover

- Bottom sheet transition

- Modal transition

- Tab selection

- Loading states

Animations must not interfere with navigation or map interaction.

==================================================

ACCESSIBILITY

==================================================

Maintain:

- Keyboard accessibility

- Visible focus states

- Good contrast

- Accessible buttons

- Semantic HTML

- Proper labels

- Touch targets of approximately 44px or larger

==================================================

IMPLEMENTATION RULES

==================================================

Before changing code:

1. Inspect the complete existing application.

2. Understand current routes.

3. Understand current contexts/state.

4. Understand API calls.

5. Understand map implementation.

6. Understand navigation implementation.

7. Understand authentication.

8. Identify UI components that can be restyled rather than rewritten.

Then:

9. Create the new design system.

10. Redesign the shared components.

11. Redesign pages one by one.

12. Make mobile the primary breakpoint.

13. Add responsive desktop behavior.

14. Test every existing route.

15. Test every major user interaction.

==================================================

STRICT "DO NOT BREAK" CHECKLIST

==================================================

After the redesign, verify:

[ ] Login works

[ ] Register works

[ ] Authentication works

[ ] Dashboard works

[ ] Map loads

[ ] Current location works

[ ] Search works

[ ] Building selection works

[ ] Building details work

[ ] Source/destination selection works

[ ] Routing works

[ ] Turn-by-turn navigation works

[ ] QR localization works

[ ] Travel modes work if already implemented

[ ] Save functionality works

[ ] Bookings work

[ ] Assets work

[ ] Analytics work

[ ] Events work

[ ] Lost & Found works

[ ] Notifications work

[ ] Chatbot works

[ ] Profile works

[ ] Settings work

[ ] Help Center works

[ ] Admin functionality works

[ ] API calls are unchanged

[ ] Database behavior is unchanged

[ ] Existing data is preserved

[ ] Existing map assets are preserved

[ ] Existing routing algorithms are preserved

==================================================

FINAL OBJECTIVE

==================================================

The final application should look like a professionally designed modern campus navigation product.

Think:

Google Maps / Apple Maps style usability

+

modern campus navigation

+

the visual language of the attached reference image

+

mobile-first responsive web design.

BUT:

FUNCTIONALITY MUST REMAIN THE SAME.

This is a UI/UX transformation, NOT a functionality rewrite.

Do not remove working features simply because they are not visible in the reference image.

Do not replace existing business logic with mock functionality.

Do not create fake APIs.

Do not hardcode data that already exists in the project.

Reuse the existing data, APIs, components and functionality wherever possible.

The final result must be:

MOBILE-FIRST + RESPONSIVE WEB + SAME FUNCTIONALITY + NEW MODERN UI.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/eff3657b-9872-4dd7-863f-851a180a5693).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
