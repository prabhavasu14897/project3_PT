# Image Attributions

Category imagery under `public/images/sports/` is sourced from Wikimedia Commons under free licenses (not from any real "Lions United Sports" business). Public-domain/CC0 works need no attribution but are listed for provenance. Product photography for the individual SKUs in `src/data/products.ts` is still a placeholder (see `ProductStage` icon badge) — only the 9 category images are real photographs.

| File | Title | Author | License | Source |
|---|---|---|---|---|
| `shoes.jpg` | British Knights Control Hi in White and Black.jpg | David Schwartz | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:British_Knights_Control_Hi_in_White_and_Black.jpg |
| `cricket.jpg` | Cricket equipment at Southwater CC, in Southwater, West Sussex, England.jpg | Acabashi | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Cricket_equipment_at_Southwater_CC,_in_Southwater,_West_Sussex,_England.jpg |
| `football.jpg` | Gola Speedster soccer shoes 20200501 001.jpg | Methem (Mikko J. Putkonen) | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gola_Speedster_soccer_shoes_20200501_001.jpg |
| `badminton.jpg` | Badminton Racket.jpg | hvshop | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Badminton_Racket.jpg |
| `athletics.jpg` | Old running spikes soles.jpg | SovalValtos | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Old_running_spikes_soles.jpg |
| `kabaddi.jpg` | Asics wrestling shoes.jpg (used as the closest equivalent to kabaddi mat shoes — no clean kabaddi-specific equipment photo exists on Commons) | User Rdikeman on en.wikipedia | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Asics_wrestling_shoes.jpg |
| `volleyball.png` | Beach volleyball ball.png | Thue; derivative by Amada44 | Public domain | https://commons.wikimedia.org/wiki/File:Beach_volleyball_ball.png |
| `throwball.jpg` | Throwball cosco.jpg | Vinoth offl | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Throwball_cosco.jpg |
| `basketball.jpg` | Basketball (Ball).jpg | Uploader (see file page; no separate photographer credited) | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Basketball_(Ball).jpg |

CC BY / CC BY-SA works require attribution if redistributed; this file satisfies that. Before taking this prototype to production, replace these with licensed product photography or images the business owns outright.

## Per-product photo overrides (`public/images/products/`)

Added so the three cricket products (which previously all fell back to the same `sports/cricket.jpg` photo) show distinct imagery on product cards, PDP, cart, and wishlist. Other products still fall back to their sport's photo.

| File | Title | Author | License | Source |
|---|---|---|---|---|
| `ss-player-edition-bat.jpg` | Cricket bat and ball at Bishop's Stortford Cricket Club, Hertfordshire.jpg | Acabashi | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Cricket_bat_and_ball_at_Bishop%27s_Stortford_Cricket_Club,_Hertfordshire.jpg |
| `lu-pittards-pro-gloves-v2.jpg` | User-supplied studio product photo | — | Provided by project owner |
| `ton-gold-edition-pads.jpg` | Same file as `sports/cricket.jpg` above (Cricket equipment at Southwater CC) — pads are the most prominent item in frame | Acabashi | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Cricket_equipment_at_Southwater_CC,_in_Southwater,_West_Sussex,_England.jpg |

## "Browse by Categories" tile overrides (`public/images/categories/`)

These render only in the category carousel (`CategoryCard`); product pages, cart, wishlist, and search still use the `public/images/sports/` photos above via `Sport.image`.

| File | Source | Author | License |
|---|---|---|---|
| `athletics.jpg` | User-supplied illustration | — | Provided by project owner |
| `kabaddi.jpg` | User-supplied photo | — | Provided by project owner |
| `volleyball.jpg` | User-supplied illustration | — | Provided by project owner |
| `throwball.jpg` | User-supplied illustration | — | Provided by project owner |
| `basketball.jpg` | User-supplied illustration | — | Provided by project owner |
| `cricket-batsman.jpg` | User-supplied illustration | — | Provided by project owner |
| `badminton.jpg` | User-supplied illustration | — | Provided by project owner |
| `football.jpg` | User-supplied illustration (replaces an earlier supplied file that carried a visible Adobe Stock watermark and was not used) | — | Provided by project owner |
