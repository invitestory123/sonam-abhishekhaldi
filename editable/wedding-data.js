/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Edit this file to update couple names, dates, events, itinerary, venue, blessing, and contacts.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Sonam",
    brideShort: "Sonam",
    groom: "Abhishek",
    groomShort: "Abhishek",
    hashtag: "#SonamWedsAbhishek",
  },

  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their wedding reception",
  },

  event: {
    title: "Reception",
    startsAt: "2026-11-27T19:00:00+05:30",
    endsAt: "2026-11-27T23:30:00+05:30",
    dateLabel: "27 . 11 . 2026",
    dayLabel: "Friday",
    timeLabel: "07.00 PM Onwards",
    note: "Dinner & Celebrations to follow",
  },

  venue: {
    name: "Crystal Plaza",
    address: "Patrakarpuram, Khyora, Kanpur, Uttar Pradesh (Near Pashupati Nath Temple)",
    mapsQuery: "Crystal Plaza, Patrakarpuram, Khyora, Kanpur, Uttar Pradesh Near Pashupati Nath temple",
    mapsUrl: "https://maps.app.goo.gl/vznf8HWdSEj7aioi6",
    lat: 26.4958,
    lng: 80.2858,
  },

  story: [
    {
      year: "27 November",
      title: "WELCOME OF GUESTS",
      text: "07.00 PM Onwards, Crystal Plaza, Kanpur",
      image: "story-2",
    },
    {
      year: "27 November",
      title: "WEDDING RECEPTION",
      text: "07.30 PM Onwards — Felicitation of Sonam & Abhishek, Crystal Plaza, Kanpur",
      image: "story-1",
    },
    {
      year: "27 November",
      title: "DINNER & CELEBRATIONS",
      text: "08.30 PM Onwards — Grand Dinner, Crystal Plaza, Kanpur",
      image: "story-3",
    },
  ],

  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation: "Two souls, two families, united with love and blessings for a lifetime of joy and togetherness.",
    source: "A blessing from both families",
  },

  footer: {
    families: `With Blessings & Warm Regards,\n\nLate Mrs. Poonam Shukla & Mr. Santosh Shukla & Family\n(Bride's Family)\n\n&\n\nMrs. Anamika Shukla & Mr. Anil Kumar Shukla & Family\n(Groom's Family)`,
    contacts: [],
  },

  images: {
    heroArch: "./editable/assets/hero-arch.webp",
    gatePanel: "./editable/assets/gate-panel.webp",
    mapPreview: "./editable/assets/map-preview.webp",
    footerFloral: "./editable/assets/footer-floral.webp",
    story1: "./editable/assets/story-1.webp",
    story2: "./editable/assets/story-2.webp",
    story3: "./editable/assets/story-3.webp",
  },
};
