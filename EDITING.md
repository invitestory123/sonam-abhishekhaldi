# Customer Editing Guide — saga-of-love

This template is a traditional Kannada Hindu wedding invitation featuring floral motifs, traditional Muhurtha timings, multi-event festivities itinerary, venue location map, blessings from both families, and family contact details.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/saga-of-love/editable/wedding-data.js)

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: Traditional formal names with prefixes (e.g. `"Chi. Sou. Manasa P.M"`, `"Chi. Ra. Suman G"`)
- `brideShort` & `groomShort`: Short first names
- `hashtag`: Wedding hashtag (e.g. `"#SumanWedsManasa"`)

### Invitation Wording
Edit `invite` in `editable/wedding-data.js`:
- `kicker`: Header line (e.g. `"Together with their families"`)
- `line`: Invitation line (e.g. `"cordially invite you to their wedding"`)

### Muhurtha Ceremony & Countdown
Edit `event` in `editable/wedding-data.js`:
- `title`: Main ceremony title (`"Muhurtha"`)
- `startsAt` & `endsAt`: ISO timestamps (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Directly drives the live countdown timer.
- `dateLabel`: Formatted date string (e.g. `"21 . 08 . 2027"`)
- `dayLabel`: Day of the week (e.g. `"Friday"`)
- `timeLabel`: Auspicious Muhurtha window (e.g. `"09.30 AM to 10.30 AM"`)
- `note`: Subtitle or note (e.g. `"Reception to follow"`)

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Samudhaya Bhavana / Hall name
- `address`: Full road and city address
- `mapsQuery`: Search query for Google Maps link

### Multi-Event Festivities
Edit `story` array in `editable/wedding-data.js`:
- Itinerary events including Sangeeth, Devarakarya & Haldi, Reception (`year/date`, `title`, `text`, `image`).

### Family Blessings & Contacts
Edit `blessing` and `footer` in `editable/wedding-data.js`:
- `blessing.line` & `blessing.translation`: Vedic/family blessings
- `footer.families`: Formatted family names and host lines
- `footer.contacts`: Phone contacts for RSVP and guest queries

### Media & Artwork
Replace files directly in `editable/assets/` or update paths in `images`:
- Decorative panels: `hero-arch.webp`, `gatePanel.webp`, `map-preview.webp`, `footer-floral.webp`
- Itinerary artwork: `story-1.webp`, `story-2.webp`, `story-3.webp`

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
