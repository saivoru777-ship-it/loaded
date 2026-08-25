# Loaded

**What the label isn't telling you.** A grocery reference built from primary testing data rather than from ingredient lists.

Most food scanner apps read the label and score it. That works for additives and nutrition, and it fails completely on the two things people most want to know: whether loose produce is worth buying organic, and whether a meat claim means anything. Loaded covers those from the underlying sources.

No build step, no dependencies, no tracking, no backend. Three files and a stylesheet.

---

## What's in it

| Section | What it does |
|---|---|
| **Produce** | 44 fruits and vegetables. Tap any item for nutrition, a description, buy signals, walk-away signals, handling, and a residue rating. |
| **Meat labels** | Every common claim sorted into *independently audited*, *affidavit only*, and *means nothing*. |
| **Packaging** | What a foam tray, absorbent pad and stretch film actually are, plus the styrene migration numbers and what they imply. |
| **Scan & verify** | A PLU sticker decoder, a guide to which packaging claims mean anything, plus where to send a barcode. |
| **The apps** | An honest read on Yuka, Olive, Ivy, Trash Panda, EXPOSR and Clean Label Project. |

## Deploying to GitHub Pages

```bash
# from inside this folder
git remote add origin https://github.com/YOUR-USERNAME/loaded.git
git branch -M main
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save.**

Live in about a minute at `https://YOUR-USERNAME.github.io/loaded/`.

The repo is already initialised with a commit, and `.nojekyll` is included so GitHub serves the `assets/` folder untouched.

## Running locally

Open `index.html` in a browser. Data is loaded as a plain script rather than via `fetch()`, specifically so it works from `file://` without a local server.

## Editing the data

Everything lives in `assets/data.js`. Each produce entry:

```js
{
  id:"blueberries", name:"Blueberries",
  tier:"grubby",   // cleanest|clean|tidy|passable|grubby|unclean|avoid
  src:"Ranked 12th of 47 crops · EWG 2026, from USDA data",
  n:{ kcal, fiber, sugar, vitc, k },
  about:"...",     // description + benefits, sits under the nutrition row
  green:[...],     // BUY SIGNALS — what a good one looks like in your hand
  red:[...],       // WALK-AWAY SIGNALS + residue-reduction actions
  hand:[...]       // post-purchase storage and food safety
}
```

Add an object to the array and it appears automatically, searchable, with its own detail view and `#p/id` deep link.

### The flag rule

Every `red` line must be something the shopper can **spot or do**. "Spinach has no skin to peel" is a fact about the crop, not a flag — the shopper can't act on it, so it belongs in `about` or nowhere. "Water pooled in the bottom of the clamshell" is a flag. Lines that just restate risk are fear, not information, and don't belong in this field.

### Why ratings are hidden until you open an item

Labelling spinach **Avoid** on a browsable grid makes people stop buying spinach, which is the opposite of what the data supports. The rating decides where an organic budget goes; it does not decide whether to eat vegetables. Tiles stay neutral and the rating appears with the context that makes it usable.

## Sources

- **Tiers and residue figures** — USDA Pesticide Data Program, as analyzed in EWG's 2026 *Shopper's Guide to Pesticides in Produce* (54,344 samples across 47 crops, 264 pesticides detected). Samples are washed, peeled or scrubbed before testing. The Alliance for Food and Farming's objections to EWG's methodology are presented on the page alongside the rankings.
- **Nutrition** — USDA FoodData Central reference values, per 100 g raw unless noted.
- **Meat claims** — USDA FSIS 2024 guidance on substantiating animal-raising claims; A Greener World's label guide; Consumer Reports on ground beef labeling; *Science* (2022) on antibiotic residues in cattle certified "raised without antibiotics."
- **Packaging** — Peer-reviewed styrene migration measurements from market samples of polystyrene-packed dairy; EFSA's ongoing re-evaluation of styrene in food-contact materials.
- **Adulteration** — UC Davis, *Applied Food Research* (2026), on avocado and olive oil authenticity in processed foods.

## Known limits

Stated plainly, because a tool like this is only worth anything if it's honest about its edges.

- EWG publishes an ordered ranking for the worst twelve and cleanest fifteen crops only. **The cut points between the seven tiers are ours, not EWG's**, and `tidy` honestly carries the crops flagged in neither direction rather than inventing positions for them.
- There is no brand-by-region database and there won't be one. Produce brands are commodity growers who rotate by season and shipping lane, so the label in a given store changes week to week. The Scan & verify tab covers what's actually readable on packaging instead.
- Nutrition figures are population reference values, not measurements of the item in your hand. Variety, ripeness and growing conditions all move them.
- Residue rankings shift year to year. The USDA typically releases results about two years after collection, and rotates which crops it samples.
- Nothing here detects adulteration. That needs a mass spectrometer, not a phone.

## Licence

MIT for the code. The underlying data belongs to USDA, EWG, FSIS and the cited researchers — check their terms before redistributing.
