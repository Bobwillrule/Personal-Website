# Asset sources and editing guide

Prepared 2026-09-22. All images and fonts used by the site are served locally. The supplied reference guided composition; no portion of its interface is used as a flattened website screenshot.

## Reference-inspired artwork

These images were created with the built-in image-generation tool and then encoded as web-optimized WebP assets. The generated portrait is illustrative artwork based on the supplied inspiration, **not an authenticated photograph of Hugo**. The cleanroom is a generic illustrative scene, not documentation of TSMC's facility. Coffee, workspace, and collaboration are illustrative scenes rather than Hugo's personal photographs.

Replace the relevant file in `public/images` to use personal photography. Preserve its filename or update the background in `src/styles.css` / image key in `src/content.js`.

| Saved asset                           | Purpose                              | Size          |
| ------------------------------------- | ------------------------------------ | ------------- |
| `public/images/hero.webp`             | Earlier hero, retained project cover | 81,600 bytes  |
| `public/images/vancouver-sketch.webp` | Current illustrated homepage hero    | 236,392 bytes |
| `public/images/cleanroom.webp`        | Experience backdrop                  | 64,744 bytes  |
| `public/images/vancouver-night.webp`  | Footer panorama                      | 121,800 bytes |
| `public/images/coffee.webp`           | Morning journal card                 | 28,992 bytes  |
| `public/images/workspace.webp`        | Building journal card                | 54,128 bytes  |
| `public/images/collaboration.webp`    | Collaboration journal card           | 39,540 bytes  |
| `public/images/gym.jpg`               | Wake Up & Gym journal card            | 107,862 bytes |
| `public/images/projects-leetcode.png` | User-supplied Projects & LeetCode card | 434,833 bytes |
| `public/images/dinner.jpg`            | User-supplied Cook Dinner photo        | 83,487 bytes  |
| `public/images/gaming-friends.jpg`    | User-supplied Valorant journal card   | 81,611 bytes  |
| `public/images/sleep.jpg`             | Sleep journal card                    | 85,191 bytes  |

### Generation prompts

**Semiconductor blueprint** (2026-09-24; built-in image-generation tool; reference: `codex-clipboard-fe56fd9f-cc71-4171-a6cb-f569b114fab0.png`; saved as `public/images/semiconductor-blueprint.webp`, 2164 × 727, 198,630 bytes):

> Use case: illustration-story. Asset type: wide 3:1 background artwork for an engineering portfolio experience section. Input image role: reference for the background illustration style and composition ONLY. Generate ONLY the dark architectural blueprint background; remove ALL interface elements, cards, text, annotations, numbers, typography, and logos. Rich near-black midnight navy paper (#0b1623), extremely fine pale slate-blue ink architectural sketch lines. Along the bottom left: low semiconductor campus buildings, tiny trees, mountain silhouettes and a slender Taipei-inspired tower, drawn as an elegant travel sketch. On the far RIGHT 22%: a larger semiconductor fabrication building in perspective with a large tilted circular silicon wafer above it, intricate grid etched into wafer, trees and a curved road below. Leave the upper left and central 75% mostly empty dark navy with extremely faint mountain contours, so real website text and a glass card can be overlaid. Match the attached reference's elegant dark blueprint illustration closely. Artwork bright enough to be visible at edges, quieter in center. Wide panoramic 3:1 composition, sophisticated technical pen drawing, sparse delicate strokes, no photography, no people, no glow. No text, no words, no tsmc lettering, no logo, no UI, no cards, no border. This is conceptual illustrative architecture, not an exact real facility.

This conceptual architectural illustration replaces the cleanroom photo treatment in the experience section. It does not document a real TSMC facility. All headings, metrics, annotations, and controls remain real HTML.

**Vancouver ink illustration** (2026-09-23; reference input: the user-supplied `codex-clipboard-a4826c72-eae8-4471-b56c-7f5d983c5ec3.png`; saved as `public/images/vancouver-sketch.webp`, 1774 × 887):

> Use case: illustration-story. Asset type: standalone landscape illustration for the right half of a personal website hero. Reference image role: visual style and scene reference only. Recreate ONLY the fine hand-drawn Vancouver landscape artwork from the right half of this reference, without any website interface. A delicate sophisticated blue-gray pen and ink drawing of Vancouver's waterfront skyline backed by layered sharp mountain peaks, with tall Pacific Northwest evergreen trees framing both sides (larger clustered trees on the left), shoreline rocks and tiny bushes, and understated horizontal water ripples in the foreground. Sparse soft pale blue-gray watercolor washes in the distant mountains and city, abundant clean WHITE negative space around the illustration, pure white background, softly disappearing organic edges with no frame. Wide landscape 2:1 composition. Buildings small and finely detailed, mountains tall, trees drawn with expressive dark slate-blue ink strokes. Refined architectural travel sketch, airy, elegant, monochromatic slate navy with very pale gray-blue accents. Match the actual reference illustration closely. No person, no text, no letters, no words, no quotation, no typography, no buttons, no logo, no border, no UI.

The new hero uses real HTML for its heading, handwritten annotation, links, and location caption. The drawing is illustrative rather than an exact geographic rendering. The earlier portrait is no longer the homepage hero.

**Hero** (reference input: the user-supplied `codex-clipboard-8c966c05-83ab-412e-81c6-c76b53a2f813.png`):

> Use case: photorealistic-natural. Asset type: photographic hero background for a personal portfolio website. Use the supplied full website inspiration ONLY as composition reference for the TOP photographic hero. Generate just one wide cinematic photographic image, approximately 3:1 landscape, no interface, absolutely NO text, no lettering, no logos, no buttons, no cards, no borders. Recreate the top hero's visual: a young East Asian male university student with tousled black hair and plain black hoodie and backpack, in three-quarter portrait facing right, occupying the LEFT 34% of image. Face near x=23%, eye line y=32%, torso goes to bottom. Warm dusk rim light on his face, dark architectural wall on far left, Vancouver waterfront city skyline, dark evergreen trees and blue mountains across the background, soft peach sunset clouds. The middle 40% and right side should be scenic negative space, sufficiently dark for future white website text. Photographic, refined natural editorial style, rich navy charcoal shadows and restrained warm highlights. Match the source hero's mood and composition very closely, but create a clean high quality standalone background image. This is reference-inspired illustrative artwork, not a claim of a real photo.

**Cleanroom**:

> Use case: photorealistic-natural. Asset type: atmospheric background for an engineer's portfolio experience section. Single very wide landscape photograph, 3:1 aspect ratio. A modern semiconductor cleanroom with silver processing equipment, wafer fabrication machinery, orderly cables and overhead panels. One technician in full white cleanroom suit and clear protective glasses on the RIGHT THIRD, seen side-on working at equipment, face mostly obscured by mask. LEFT TWO THIRDS dark, low contrast, soft focus equipment and shadows, ample negative space for future website overlay text. Cool desaturated steel blue and charcoal color grade, realistic industrial photography, soft overhead light, restrained cinematic mood. No words, no logos, no letters, no signage, no UI. Illustrative generated scene; do not depict a specific real company facility.

**Vancouver at night**:

> Use case: photorealistic-natural. Asset type: a single wide photographic website footer background. Panoramic Vancouver skyline seen from a forested hillside across the water at blue hour. Layered dramatic dark blue mountains in background, evergreen silhouettes in foreground, warm tiny amber city lights and waterfront. Cinematic high quality photography, 3:1 very wide landscape. Deep midnight navy palette, restrained blue atmospheric haze, darkened overall for white text overlay. No person. No text, no lettering, no logo, no UI. Quiet, aspirational, Pacific Northwest atmosphere.

**Coffee**:

> A refined editorial lifestyle photo, landscape 4:3. One dark ceramic coffee cup with steam on a warm walnut desk beside a closed notebook and black pen. Soft early morning window sunlight from left, dark softly blurred home interior behind, earthy browns, tasteful calm composition. Close-up, realistic photography, no person, no text, no logo. Website day-in-life card image.

**Workspace**:

> Editorial lifestyle photo, landscape 4:3. Laptop on warm wooden desk near a window, displaying a generic dark code editor with indistinct unreadable lines, small plant and desk lamp, sunny green trees beyond window. Refined realistic photography, muted warm wood and dark slate tones, no legible words or logos. Website day-in-life image for building software.

**Collaboration**:

> Editorial lifestyle photo, landscape 4:3. Three diverse university students in their early twenties collaborating around a laptop in a bright modern campus library, candid side angle, warm natural sunlight, muted tones, attentive friendly mood. Laptop screen indistinct. Realistic photography, no branding, no words, no logos. Generic illustrative scene for a portfolio teamwork card.

**Updated day-in-the-life cards** (2026-09-26; built-in image-generation tool; optimized to 900 × 600 JPEG):

- **Gym:** Early-morning modern university gym with shoes, water bottle, towel, dumbbells, and a workout bench; refined candid editorial photography, muted navy and neutral palette, no people, text, or logos.
- **Sleep:** A tidy student bedroom ready for sleep with a made bed, closed laptop, warm bedside lamp, and cool city light; calm editorial interior photography, no people, text, or logos.

**Cook Dinner card** (2026-09-26; user-supplied photo edited with the built-in image-generation tool; saved as `public/images/dinner.jpg`, 900 × 600, 83,487 bytes):

> Use case: precise-object-edit. Asset type: 3:2 landscape journal-card photograph for a personal portfolio. Image 1 is the edit target and must remain recognizably the same real dinner photo. Professionally touch up Image 1 for the Cook Dinner card. Crop to a balanced 3:2 landscape composition centered on both plated beef Wellington dinners, with the right plate remaining the primary focal point. Correct the warm color cast, lift dim midtones, recover plate highlights, add gentle natural contrast and subtle sharpness so the food looks appetizing but still real. Reduce only minor visual distractions at the extreme top edge and make the counter look clean and natural. Preserve the exact two plates, plate patterns, beef Wellington portions, doneness, mashed potatoes, asparagus, sauce placement, kitchen counter, camera angle, and real homemade character. Do not redesign, replace, add, remove, or rearrange any food; do not invent garnish; no text; no watermark; avoid glossy restaurant-ad styling or heavy retouching.

**Valorant card** (2026-09-26; user-supplied image): `public/images/gaming-friends.jpg` is a centered 720 × 480 crop of the supplied competitive Valorant screenshot. The crop preserves the “MY ACE IN COMP” caption and five-player combat report while matching the journal card’s 3:2 aspect ratio.

**Projects & LeetCode card** (2026-10-05; user-supplied image): `public/images/projects-leetcode.png` is an unchanged 2876 × 1800 copy of the supplied LeetCode screenshot. The site displays it with the journal card's existing responsive crop.

## Existing repository assets

The original `Images` directory remains intact. Optimized copies in `public/images` use the existing UBC campus photo, Whistler photo, CAD table image, calculator screenshot, tracker screenshot, and game image. `public/images/game.webp` is the Sewage Search gallery cover; the other software covers use CSS/SVG illustrations. Those illustrations are identified in the project dialogs and make no claim to show measured financial performance.

`public/images/ubc-emblem.png` is an optimized 211 × 288 copy of the transparent UBC emblem supplied by the user on 2026-09-26. It replaces the earlier code-drawn badge in the education section.

`public/images/tsmc-logo-supplied.png` is the current logo used on both TSMC cards: an exact copy of the user's replacement image supplied on 2026-09-27 (1544 × 1215). Verified RGBA with transparent outer pixels; no image edits applied. Display dimensions preserve its natural aspect ratio and the established responsive sizing.

Earlier assets remain for provenance: `public/images/tsmc-logo.png` is the initial 768 × 768 supplied image with a painted checkerboard; `public/images/tsmc-logo-transparent.png` is the superseded 561 × 443 extracted cutout.

Two built-in image-editing attempts requested: “Remove the checkerboard completely, replace it with genuine alpha transparency, preserve the red tsmc lettering, underline, black grid, and white wafer interior, and crop tightly.” Both returned RGB files with painted checkerboards and were rejected. The final asset instead uses deterministic background extraction from the original: remove only pale neutral pixels connected to the outside edge, preserving the enclosed wafer interior. Actual alpha transparency was verified before integration.

## Documents

- `public/documents/Hugo-Chen-Resume.pdf`: exact copy of the supplied `Hugo_resume_New (3).pdf`; includes its original contact details.
- `public/documents/Project-Portfolio.pdf`: exact copy of the repository's `PDF/Project Portfolio.pdf`.

## Content choices

- The resume is authoritative for education, TSMC experience, AI Trader, BehindTheETF, and Financial Tracker.
- Public GitHub repository names and the original Unit Calculator's Kotlin language were checked through the GitHub API on 2026-09-22. Later Unit Calculator versions remain separate repositories.
- The daily-card activities were supplied by the user on 2026-09-26. Their order is representative and does not claim exact times.
- All pages share the homepage navigation with LinkedIn, GitHub, and email icons; no availability badge is displayed.
- Typography: DM Sans, DM Serif Display, and Caveat, bundled locally through their Fontsource packages (SIL Open Font License; licenses are included in installed packages).
