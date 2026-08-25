# Loaded

**What the label isn't telling you.** A grocery reference built from primary testing data rather than from ingredient lists.

Most food scanner apps read the label and score it. That works for additives and nutrition, and it fails completely on the two things people most want to know: whether loose produce is worth buying organic, and whether a meat claim means anything. Loaded covers those from the underlying sources.

No build step, no dependencies, no tracking, no backend. Three files and a stylesheet.

---

## What's in it

| Section | What it does |
|---|---|
| **Produce** | 44 fruits and vegetables tiered by the USDA Pesticide Data Program results. Tap any item for nutrition per 100 g, red flags, green flags, and handling. |
| **Meat labels** | Every common claim sorted into *independently audited*, *affidavit only*, and *means nothing*. |
| **Packaging** | What a foam tray, absorbent pad and stretch film actually are, plus the styrene migration numbers and what they imply. |
| **Scan & verify** | A PLU sticker decoder, plus where to send a barcode. |
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
  tier:"dirty",          // dirty | watch | clean | mid
  rank:12,               // position within the tier, or null
  avg:"4+",              // avg pesticides per sample
  n:{ kcal, fiber, sugar, vitc, k, star },
  red:[...], green:[...], hand:[...]
}
```

Add an object to the array and it appears in the right group automatically, searchable, with its own detail view and `#p/id` deep link.

## Sources

- **Tiers and residue figures** — USDA Pesticide Data Program, as analyzed in EWG's 2026 *Shopper's Guide to Pesticides in Produce* (54,344 samples across 47 crops, 264 pesticides detected). Samples are washed, peeled or scrubbed before testing. The Alliance for Food and Farming's objections to EWG's methodology are presented on the page alongside the rankings.
- **Nutrition** — USDA FoodData Central reference values, per 100 g raw unless noted.
- **Meat claims** — USDA FSIS 2024 guidance on substantiating animal-raising claims; A Greener World's label guide; Consumer Reports on ground beef labeling; *Science* (2022) on antibiotic residues in cattle certified "raised without antibiotics."
- **Packaging** — Peer-reviewed styrene migration measurements from market samples of polystyrene-packed dairy; EFSA's ongoing re-evaluation of styrene in food-contact materials.
- **Adulteration** — UC Davis, *Applied Food Research* (2026), on avocado and olive oil authenticity in processed foods.

## Known limits

Stated plainly, because a tool like this is only worth anything if it's honest about its edges.

- EWG publishes a full ordered ranking of all 47 crops, but only the worst twelve and cleanest fifteen are published as ordered lists. Items tiered `mid` here sit somewhere in between and this build does not claim to know where.
- Nutrition figures are population reference values, not measurements of the item in your hand. Variety, ripeness and growing conditions all move them.
- Residue rankings shift year to year. The USDA typically releases results about two years after collection, and rotates which crops it samples.
- Nothing here detects adulteration. That needs a mass spectrometer, not a phone.

## Licence

MIT for the code. The underlying data belongs to USDA, EWG, FSIS and the cited researchers — check their terms before redistributing.
