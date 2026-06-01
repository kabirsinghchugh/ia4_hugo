---
title: "Dashboard"
date: 2024-01-01T12:00:00Z
slug: "dashboard"
---

A minimal index of films, books, and music. Notes over ratings, with small
status tags instead of heavy UI.

{{< dashboard >}}
{{< dashboard-section title="Watchlist" description="A short queue with compact notes and a simple status label." >}}
{{< dashboard-card state="queued" status="Queued" title="Oppenheimer" meta="Dir. Christopher Nolan · 2023" note="The weight of the atom." img="/images/dashboard/oppenheimer.jpg" alt="Poster for Oppenheimer" >}}
{{< dashboard-card state="queued" status="Queued" title="Everything Everywhere All at Once" meta="Dir. Daniels · 2022" note="Multiverse, laundry, and love." img="/images/dashboard/everything-everywhere-all-at-once.jpg" alt="Poster for Everything Everywhere All at Once" >}}
{{< dashboard-card state="queued" status="Queued" title="Odd Taxi" meta="13 ep · 2021" note="Walrus cabbie, tangled city." img="/images/dashboard/odd-taxi.jpg" alt="Poster for Odd Taxi" >}}
{{< dashboard-card state="queued" status="Queued" title="Run with the Wind" meta="23 ep · 2018" note="Ten runners, one Hakone relay." img="/images/dashboard/run-with-the-wind.jpg" alt="Poster for Run with the Wind" >}}
{{< dashboard-card state="queued" status="Queued" title="Made in Abyss" meta="2 seasons · 2017" note="Descent into beauty and ruin." img="/images/dashboard/made-in-abyss.jpg" alt="Poster for Made in Abyss" >}}
{{< dashboard-card state="queued" status="Queued" title="Howl's Moving Castle" meta="Dir. Hayao Miyazaki · 2004" note="Ghibli's most romantic flight." img="/images/dashboard/howls-moving-castle.jpg" alt="Poster for Howl's Moving Castle" >}}
{{< dashboard-card state="queued" status="Queued" title="Gintama" meta="Series · 2005" note="Samurai comedy in alien-feudal Edo." img="/images/dashboard/gintama.jpg" alt="Poster for Gintama" >}}
{{< /dashboard-section >}}

{{< dashboard-section title="Reading Queue" description="In-progress and next-up titles with brief themes." >}}
{{< dashboard-card state="queued" status="Queued" title="Why Machines Learn" meta="Anil Ananthaswamy · 378 pp · 2024" note="The elegant math behind modern AI." img="/images/dashboard/why-machines-learn.jpg" alt="Cover for Why Machines Learn" >}}
{{< dashboard-card state="queued" status="Queued" title="Game Changer" meta="Matthew Sadler · 2019" note="AlphaZero rewrites chess." img="/images/dashboard/game-changer.jpg" alt="Cover for Game Changer" >}}
{{< dashboard-card state="queued" status="Queued" title="Critique of Pure Reason" meta="Immanuel Kant · 2016 ed." note="Kant's transcendental architecture." img="/images/dashboard/critique-of-pure-reason.jpg" alt="Cover for Critique of Pure Reason" >}}
{{< dashboard-card state="queued" status="Queued" title="Being Mortal" meta="Atul Gawande · 2014" note="Medicine, aging, and what matters." img="/images/dashboard/being-mortal.jpg" alt="Cover for Being Mortal" >}}
{{< dashboard-card state="queued" status="Queued" title="Service Included" meta="Phoebe Damrosch · 2007" note="Life inside a four-star kitchen." img="/images/dashboard/service-included.jpg" alt="Cover for Service Included" >}}
{{< dashboard-card state="queued" status="Queued" title="World War Z" meta="Max Brooks · 2006 · Audiobook" note="Oral history of the zombie war." img="/images/dashboard/world-war-z.jpg" alt="Cover for World War Z" >}}
{{< dashboard-card state="queued" status="Queued" title="The Sandman: Book of Dreams" meta="Neil Gaiman · 1996" note="Stories from the Dreaming's edges." img="/images/dashboard/the-sandman-book-of-dreams.jpg" alt="Cover for The Sandman: Book of Dreams" >}}
{{< dashboard-card state="queued" status="Queued" title="Philosophical Investigations" meta="Ludwig Wittgenstein · 1953" note="Language games, meaning, use." img="/images/dashboard/philosophical-investigations.jpg" alt="Cover for Philosophical Investigations" >}}
{{< /dashboard-section >}}

{{< dashboard-section title="Listening" description="Playlists and single tracks for focused work." >}}
{{< dashboard-card state="repeat" title="Citylight Drift" meta="38 tracks - Ambient and IDM" note="Soft focus rhythms and neon haze." img="/images/dashboard/logo.jpeg" alt="Cover for Citylight Drift" >}}
{{< dashboard-card state="repeat" title="Morning Lines" meta="24 tracks - Acoustic" note="Warm strings and steady, patient tempos." img="/images/dashboard/logo.jpeg" alt="Cover for Morning Lines" >}}
{{< dashboard-card state="repeat" title="Wide Screens" meta="19 tracks - Soundtracks" note="Cinematic cues for focused reading." img="/images/dashboard/logo.jpeg" alt="Cover for Wide Screens" >}}
{{< dashboard-card state="repeat" title="Signal Bloom" meta="Y. Voss - 3:42" note="Glassy synths and restrained vocals." img="/images/dashboard/logo.jpeg" alt="Cover for Signal Bloom" >}}
{{< /dashboard-section >}}
{{< /dashboard >}}
