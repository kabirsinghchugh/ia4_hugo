---
title: "Dashboard"
date: 2024-01-01T12:00:00Z
slug: "dashboard"
---

A minimal index of films, books, and music. Notes over ratings, with small
status tags instead of heavy UI.

{{< dashboard >}}
{{< dashboard-section title="Watchlist" description="A short queue with compact notes and a simple status label." >}}
{{< dashboard-card state="queued" status="Queued" title="Marble Nights" meta="Dir. L. Varma - 128 min - 2026" note="Noir cityscapes, glass reflections, slow burn." img="/images/dashboard/logo.jpeg" alt="Poster for Marble Nights" >}}
{{< dashboard-card state="queued" status="Queued" title="Solar Orchard" meta="Dir. E. Hsu - 102 min - 2026" note="Pastoral sci-fi with bright, patient daylight." img="/images/dashboard/logo.jpeg" alt="Poster for Solar Orchard" >}}
{{< dashboard-card state="watching" status="Watching" title="The Quiet Index" meta="Dir. R. Okafor - 114 min - 2025" note="Archivists, whispers, and hidden city maps." img="/images/dashboard/logo.jpeg" alt="Poster for The Quiet Index" >}}
{{< dashboard-card state="queued" status="Queued" title="Winter Gate" meta="Dir. M. Kenji - 96 min - 2025" note="Snowbound mystery with a precise score." img="/images/dashboard/logo.jpeg" alt="Poster for Winter Gate" >}}
{{< dashboard-card state="queued" status="Queued" title="Cobalt Transit" meta="Dir. A. Dias - 121 min - 2025" note="Night train thriller, minimal dialogue." img="/images/dashboard/logo.jpeg" alt="Poster for Cobalt Transit" >}}
{{< dashboard-card state="finished" status="Finished" title="Glass Harbor" meta="Dir. N. Singh - 109 min - 2024" note="Coastal thriller with a calm, steel palette." img="/images/dashboard/logo.jpeg" alt="Poster for Glass Harbor" >}}
{{< /dashboard-section >}}

{{< dashboard-section title="Reading Queue" description="In-progress and next-up titles with brief themes." >}}
{{< dashboard-card state="reading" status="Reading" title="Silt and Signal" meta="Anika Rao - Essays" note="Design, memory, and quiet infrastructure." img="/images/dashboard/logo.jpeg" alt="Cover for Silt and Signal" >}}
{{< dashboard-card state="queued" status="Queued" title="Field Notes for Light" meta="Tomas Iri - Nonfiction" note="Illumination, craft, and attention." img="/images/dashboard/logo.jpeg" alt="Cover for Field Notes for Light" >}}
{{< dashboard-card state="queued" status="Queued" title="Atlas of Small Rooms" meta="M. Legrand - Fiction" note="Micro-stories set inside calm interiors." img="/images/dashboard/logo.jpeg" alt="Cover for Atlas of Small Rooms" >}}
{{< dashboard-card state="queued" status="Queued" title="The Paper River" meta="Kei Nakamura - Fiction" note="A slow journey along a fading print city." img="/images/dashboard/logo.jpeg" alt="Cover for The Paper River" >}}
{{< /dashboard-section >}}

{{< dashboard-section title="Listening" description="Playlists and single tracks for focused work." >}}
{{< dashboard-card state="repeat" title="Citylight Drift" meta="38 tracks - Ambient and IDM" note="Soft focus rhythms and neon haze." img="/images/dashboard/logo.jpeg" alt="Cover for Citylight Drift" >}}
{{< dashboard-card state="repeat" title="Morning Lines" meta="24 tracks - Acoustic" note="Warm strings and steady, patient tempos." img="/images/dashboard/logo.jpeg" alt="Cover for Morning Lines" >}}
{{< dashboard-card state="repeat" title="Wide Screens" meta="19 tracks - Soundtracks" note="Cinematic cues for focused reading." img="/images/dashboard/logo.jpeg" alt="Cover for Wide Screens" >}}
{{< dashboard-card state="repeat" title="Signal Bloom" meta="Y. Voss - 3:42" note="Glassy synths and restrained vocals." img="/images/dashboard/logo.jpeg" alt="Cover for Signal Bloom" >}}
{{< /dashboard-section >}}
{{< /dashboard >}}
