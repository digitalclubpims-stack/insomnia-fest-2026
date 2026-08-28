# INSOMNIA FEST WEBSITE — V11 FINAL

This build implements the latest event-card reference and typography/motion corrections.

## Event cards
- Desktop: large 2-column poster cards with fixed 520px height.
- Mobile: fixed 540px card height (525px on very small screens).
- Poster area is locked to a true 3:4 ratio so final artwork can be dropped in without changing card geometry.
- Event card now contains: event number, event title, description, DATE, TIME, LOCATION, VENUE, FORMAT and PRIZE, plus REGISTER.
- Logistics default to TBA until final values are supplied in `EVENT_DETAILS` in `app.js`; this prevents invented event information.

## Typography
- Larger event descriptions and category filters.
- Category names and event titles have stronger hierarchy.
- Long category titles are prevented from being clipped.
- Spotlight “THE NIGHTS OF INSOMNIA” uses safe line-height to prevent overlap.

## Animation
- Removed the continuous random-looking vertical floating motion from event cards.
- Event cards now enter with a controlled alternating horizontal slide, slight tilt and scale settle.
- Category cards use the same deliberate entrance treatment.
- Existing GSAP/ScrollTrigger cinematic motion remains for other sections.

## Other fixes retained
- Fixed navigation bar.
- Mobile pass logo visible.
- Newsletter email field removed from footer.
- Footer centered and readable.
- Instagram link points to the supplied Ecstasy at PiMS Instagram URL.

## Deployment
Replace the previous site files with this ZIP's contents. Do not merge the old stylesheet with this version.
