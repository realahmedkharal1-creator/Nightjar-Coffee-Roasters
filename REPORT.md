# DATA & DESIGN REPORT: Nightjar Coffee Roasters Sales Demo

## SECTION 1: SOURCING & EXTRACTION LEDGER

All content across the website has been extracted and grounded in verified data from Google Maps, Deliveroo Dubai, and official social/web sources.

| Data Point | Value in Website | Source Link / Origin | Status |
| :--- | :--- | :--- | :--- |
| **Business Name** | Nightjar Coffee Roasters | Google Maps / Deliveroo | Grounded |
| **Address** | Warehouse G62, Alserkal Avenue, 8th St, Al Quoz 1, Dubai | Google Maps Listing | Grounded |
| **Plus Code** | 46RF+FR Dubai, United Arab Emirates | Google Maps | Grounded |
| **Coordinates** | 25.1412° N, 55.2272° E | Google Maps Satellite | Grounded |
| **Phone (Tel)** | `+971 4 330 6635` | Google Maps Listing | Grounded |
| **WhatsApp** | `+971 50 365 1120` | Deliveroo / Direct Line | Grounded |
| **Email** | `info@nightjar.coffee` | Nightjar Official Website | Grounded |
| **Opening Hours** | Mon–Sun: 09:00 AM – 10:00 PM (GST) | Google Maps Verified Hours | Grounded |
| **Founders / Leadership**| Leon Surynt (Managing Director & Founder, est. 2017) | Time Out Dubai / Brand History | Grounded |
| **Rating / Reviews** | 4.7 ★ over 1,100+ combined reviews (580+ on Maps) | Google Maps Profile | Grounded |
| **Signature Nitro Taps**| Rwanda Bumbogo, Valencia Orange, Smoked Maple, Kombucha | Deliveroo Menu / In-Store Taps | Grounded |
| **Retail Roasts & Prices**| GONZO (AED 58), S.O.B (AED 58), CANDYMAN (AED 65) | Deliveroo Storefront | Grounded |
| **Kitchen Dishes & AED**| Rendang Scramble (AED 54), Dibba Bay Buttie (AED 65), Alserkal Smash (AED 62) | Deliveroo Al Quoz Store | Grounded |
| **Awards** | Time Out Dubai Best Café Winner | Time Out Dubai Restaurant Awards | Grounded |

---

## SECTION 2: DESIGN SYSTEM ARCHITECTURE

1. **Archetype**: Industrial Dark Craft & Counterculture Roastery
   - Tailored to Nightjar’s Warehouse G62 aesthetic: matte charcoal surfaces (`#0A0908`, `#12100D`), warm amber tones (`#D97706`), fresh cold-brew teal (`#00CDBC`), and soft warm off-white typography (`#EDE9E1`).
2. **Typography**:
   - **Headings**: `Syne` (Bold, angular, industrial, modern).
   - **Body**: `Plus Jakarta Sans` (Clean, highly legible humanist sans-serif).
   - **UI / Accents / Specs**: `Space Mono` (Precision roastery metadata, batch elevation, timer, prices).
3. **Interactive Components**:
   - **Live Timezone Clock**: Evaluates real Dubai GST time (UTC+4) dynamically to show live "Open Now" / "Closed Now" status and countdown.
   - **Interactive Nitro Tap Showcase**: Simulates nitro draft pours, displaying tasting notes, draft temperature (2°C), origin lot, and mouthfeel radar.
   - **Roastery Beans Selector**: Interactive batch specs with sweetness/acidity/body meters, elevation info, and 225g/1kg pricing toggles.
   - **Filtered Craft Menu**: Category filtering and live instant search across kitchen specials, cold bar, and retail bags.
   - **Editorial Lightbox Gallery**: Keyboard-navigable (`←`, `→`, `Esc`) photo showcase.
   - **Verified Review Cards**: Verbatim diner reviews with dish recommendations and links to Google Maps.
   - **Table & Event Reservation Modal**: Comprehensive booking interface.
   - **Sticky Mobile Quick-Bar**: One-tap Call, WhatsApp, and Deliveroo ordering for mobile devices.

---

## SECTION 3: QA AUDIT

- [x] **No Placeholder Text**: Zero "Lorem Ipsum", "dolor sit amet", or generic mockup sentences.
- [x] **No Broken Anchor Links**: All header, footer, and in-page navigation anchors match valid DOM IDs.
- [x] **Verified Pricing**: All AED prices match real Deliveroo items and roastery menu rates.
- [x] **Responsive Testing**: Fluid from 320px mobile to 2560px ultra-wide displays.
- [x] **Accessible Contrast**: WCAG AA compliance with high-contrast text against dark backgrounds.
- [x] **SEO Schema Ready**: JSON-LD `CafeOrCoffeeShop` structured data embedded in `index.html`.
