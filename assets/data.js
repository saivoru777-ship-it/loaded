/* Loaded — produce dataset (v2)
   -------------------------------------------------------------------
   STRUCTURE
     about  — what it is and why it's worth eating. Sits under the nutrition row.
     green  — BUY SIGNALS. What a good one looks like, in the store, in your hand.
     red    — WALK-AWAY SIGNALS and residue-reduction actions. Every line must be
              something a shopper can either spot or do. Nothing here is a fact
              about the crop that the shopper cannot act on.
     hand   — Post-purchase. Storage, prep, food safety.

   TIERS
     Seven levels, cleanest to worst. Placement is derived from EWG's 2026
     Shopper's Guide, which analyzes USDA Pesticide Data Program results
     (54,344 samples, 47 crops). EWG publishes an ordered ranking for the 12
     worst and 15 cleanest crops only. The cut points below are ours, not EWG's,
     and "tidy" honestly carries the crops EWG flagged in neither direction.

       cleanest — 5 lowest-residue crops of the 47
       clean    — remainder of the 15 lowest
       tidy     — middle of the guide, flagged neither way
       passable — flagged for high toxicity score, just outside the worst 12
       grubby   — ranks 9-12 of the worst
       unclean  — ranks 5-8
       avoid    — ranks 1-4

   NUTRITION — USDA FoodData Central reference values, per 100 g raw unless noted.
*/

const TIERS = {
  cleanest: { label: "Cleanest",  n: 7, blurb: "Among the five lowest-residue crops tested. Buy conventional without a second thought." },
  clean:    { label: "Clean",     n: 6, blurb: "In the fifteen lowest-residue crops. Conventional is a fine default." },
  tidy:     { label: "Tidy",      n: 5, blurb: "Middle of the guide — flagged in neither direction. Organic is a preference here, not a priority." },
  passable: { label: "Passable",  n: 4, blurb: "Just outside the worst twelve, flagged for the toxicity of what was found rather than the amount." },
  grubby:   { label: "Grubby",    n: 3, blurb: "Ranked 9th to 12th worst of 47 crops. Worth going organic when the price gap is small." },
  unclean:  { label: "Unclean",   n: 2, blurb: "Ranked 5th to 8th worst of 47 crops. A high-value organic swap." },
  avoid:    { label: "Avoid",     n: 1, blurb: "Ranked in the four worst crops tested. The highest-value organic swaps on the list — but a conventional one still beats skipping the vegetable." }
};

const PRODUCE = [

/* ================= AVOID (ranks 1-4) ================= */
{id:"spinach",name:"Spinach",tier:"avoid",src:"Ranked 1st of 47 crops for pesticide residue · EWG 2026, from USDA data",
 n:{kcal:23,fiber:2.2,sugar:0.4,vitc:28,k:558},
 about:"One of the most nutrient-dense foods in the store: 483 mcg of vitamin K, 194 mcg of folate and 2.7 mg of iron for 23 calories. It cooks down roughly ten to one, so a modest bag delivers far more nutrition than it looks like it will. The oxalates that give raw spinach its chalky mouthfeel also bind some of that iron — a squeeze of lemon or any vitamin C source alongside it meaningfully improves absorption.",
 green:["Leaves stand up rather than drape when you lift the bunch. Limpness is the first thing to go.","Deep uniform green with crisp stems that snap rather than bend.","Dry inside the bag or clamshell, with no condensation on the plastic.","A pack date rather than just a 'best by' — some packers print it, and fresher spinach is a different vegetable."],
 red:["Water pooled in the bottom of the clamshell, or fogged plastic. That's the start of the slime cascade and the rest of the bag follows within a day.","Yellowing at the leaf edges, dark translucent patches, or a sour smell when you open it. Discard the whole container rather than picking through — decay spreads across the pack.","Buying more than you'll cook in three days. Spinach is the fastest-declining green in the case and most of it ends up binned.","To cut residue: rinse loose bunches under cold running water for 20+ seconds, agitating so water reaches both leaf surfaces, then spin fully dry. It won't eliminate residue but it removes a real share of what's on the surface.","If organic is stocked and the gap is under a dollar, take it. This is the crop where that dollar buys the most."],
 hand:["Do NOT re-wash bagged pre-washed greens. Home sinks and cutting boards introduce more contamination risk than the wash removes — this is standard FDA guidance and the opposite of most people's instinct.","Store in a breathable container with a dry paper towel to absorb condensation. Swap the towel when it dampens.","Leafy greens are the highest-risk produce category for E. coli and Listeria. Keep them away from raw meat in the cart, the bag and the fridge.","Freeze what you can't use: blanch 30 seconds, ice bath, squeeze dry, portion and freeze."]},

{id:"kale",name:"Kale, collard & mustard greens",tier:"avoid",src:"Ranked 2nd of 47 crops · EWG 2026, from USDA data",
 n:{kcal:35,fiber:4.1,sugar:0.8,vitc:93,k:348},
 about:"More vitamin C per 100 g than an orange, plus 390 mcg of vitamin K and unusually high fiber for a leafy green. Sturdier than spinach — it holds a full week in the fridge, which makes it the lower-waste choice of the two. Massaging raw leaves with a little oil and salt breaks down the cell walls and makes it dramatically more pleasant to eat.",
 green:["Small to medium leaves. Oversized ones are older and turn bitter and tough.","Firm stems and leaves that feel taut rather than leathery or rubbery.","Deep colour with no yellow cast — yellowing signals age in every variety.","Dry to the touch. Wet kale in a bag is already on the clock."],
 red:["Yellow or brown leaf edges, or leaves that bend limply instead of feeling crisp.","Tiny holes with black specks nearby. That's insect frass — harmless, but it means the bunch has sat.","Pre-chopped bagged kale where you have a choice. Cut surfaces oxidise and degrade far faster than whole leaves.","To cut residue: the ruffled structure traps more than a flat leaf. Separate leaves from the stem, then wash each under running water rather than dunking the bunch in a bowl — a soak just redistributes whatever comes off.","Prior USDA testing found DCPA (Dacthal) on over half of kale samples, a pesticide the EPA moved to cancel. Organic is the only reliable route around it."],
 hand:["Strip leaves from the stems before storing — stems pull moisture and go rubbery.","Store in a loosely closed bag with a dry paper towel; it holds 5–7 days, far longer than spinach.","Blanch and freeze if you overbought. Kale freezes better than most greens.","Collards and mustard greens want longer cooking; kale is the only one of the three that genuinely works raw."]},

{id:"strawberries",name:"Strawberries",tier:"avoid",src:"Ranked 3rd of 47 crops · EWG 2026, from USDA data",
 n:{kcal:32,fiber:2.0,sugar:4.9,vitc:58.8,k:153},
 about:"About a cup covers a full day's vitamin C, and at 4.9 g of sugar per 100 g they're among the lowest-sugar fruits in the store. Also a strong manganese source. Strawberries do not ripen after picking — sugar content is fixed the moment they leave the field, so a pale berry will never become a sweet one.",
 green:["Fully red all the way to the stem cap. White or green shoulders mean it was picked early and that's as sweet as it gets.","Bright green, fresh-looking caps. Dried or brown caps mean age even when the berry still looks fine.","Smell the container. A ripe berry is fragrant through the plastic; no smell means no flavour.","Dry, glossy skin with no soft give when you tilt the container."],
 red:["Juice stains or wet patches on the bottom of the container. Turn it over before buying — crushed fruit underneath is where mould starts and it's invisible from the top.","Visible fuzz on even one berry means spores are already through the pack. Don't buy it, and don't pick around it at home.","Dull, dimpled or shrunken berries. That's dehydration and the texture is gone.","To cut residue: rinse under cold running water just before eating, moving them so water reaches all sides. Never soak — they absorb water and turn mushy. The seeded surface can't be scrubbed hard without damage, which is why this crop rewards organic more than almost any other.","Frozen organic is nutritionally equal, costs far less, and sidesteps the question entirely."],
 hand:["Do not wash until the moment you eat them. Water on the skin triggers mould within a day.","Store unwashed in a single layer, loosely covered, in the fridge.","Remove any berry that softens immediately — one goes and the rest follow fast.","Freeze whole on a tray before bagging so they don't fuse into a block."]},

{id:"grapes",name:"Grapes",tier:"avoid",src:"Ranked 4th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:69,fiber:0.9,sugar:15.5,vitc:3.2,k:191},
 about:"The nutritional draw is almost entirely in the skin, where resveratrol and other polyphenols concentrate. Be clear-eyed about the rest: at 15.5 g sugar and 0.9 g fibre per 100 g, grapes are the least filling fruit per calorie on this list and behave more like a dessert than a vegetable-adjacent snack.",
 green:["Green, pliable stems. Brown brittle stems mean the bunch has been in storage for weeks.","Grapes firmly attached — a bunch that sheds when you lift it is old.","A dusty white bloom on the skin. That's natural wax and a freshness indicator, not residue.","Plump and taut, with no wrinkling near the stem end."],
 red:["Loose grapes rattling around the bottom of the bag. The bunch is past it.","Brown, soft or split fruit. Splits leak sugar and mould follows quickly.","Sticky bags or a fermented smell.","To cut residue: rinse the whole bunch under running water for 30 seconds, separating the cluster with your fingers so water reaches the interior. Tight clusters shelter the inside grapes from any wash, which is the specific problem with this crop.","Portion them out. It is very easy to eat 400 calories of grapes without registering it."],
 hand:["Store unwashed in the perforated bag they came in — the holes are functional ventilation.","Keep them away from strong-smelling foods; grapes absorb odours.","Frozen grapes are a genuinely good dessert substitute and take thirty seconds of effort.","Whole grapes are a serious choking hazard under age four. Quarter them lengthwise, not crosswise."]},

/* ================= UNCLEAN (ranks 5-8) ================= */
{id:"nectarines",name:"Nectarines",tier:"unclean",src:"Ranked 5th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:44,fiber:1.7,sugar:8.9,vitc:5.4,k:201},
 about:"A peach without the fuzz — same species, one recessive gene apart. Good potassium for the calorie count, and the skin carries most of the fibre and carotenoids, so it's worth eating. Like all stone fruit it softens after picking but doesn't get sweeter; sugar is set at harvest.",
 green:["A warm background colour under the red blush — creamy yellow or gold. The red tells you the variety, not the ripeness.","Fragrant at the stem end. Stone fruit that smells like nothing will taste like nothing.","Gives slightly at the shoulder when pressed gently, not at the tip.","Heavy for its size."],
 red:["Rock hard with a green background tint. Picked far too early; it will soften on your counter but stay bland.","Bruises, shrivelled skin around the stem, or any weeping.","Hard fruit sitting in a chilled store display. Cold before ripening causes mealiness that never reverses, so if the case is refrigerated and the fruit is firm, skip it.","To cut residue: rub gently under cold running water for 20 seconds. The skin is thin, so a brush damages it. Peeling removes more but costs you most of the fibre.","Buy in season and local where you can — the long-haul supply chain is where post-harvest fungicide treatment gets added."],
 hand:["Ripen on the counter, stem-down, out of direct sun. A paper bag speeds it up.","Refrigerate only once fully ripe, and only to hold it a couple of days.","Wash right before eating, not before storing.","If it softens faster than you can eat it, slice and freeze for smoothies."]},

{id:"peaches",name:"Peaches",tier:"unclean",src:"Ranked 6th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:39,fiber:1.5,sugar:8.4,vitc:6.6,k:190},
 about:"Low calorie, high water content, decent potassium. Roughly 90% of peach and plum samples carried fludioxonil, the most frequently detected pesticide across all produce in 2026 and a PFAS-class compound — which is the specific reason this crop ranks where it does, rather than anything about the amount.",
 green:["Creamy gold or yellow background beneath the blush. Green background means underripe.","A strong sweet smell at the stem. This is the single best test.","Slight give at the shoulder. A soft tip usually means bruising, not ripeness.","Freestone varieties in late summer if you're cooking — the pit releases cleanly."],
 red:["Any green tint at the stem end. That fruit was picked for shipping, not eating.","Wrinkled skin, brown soft spots, or fuzz that looks matted.","Hard peaches in a refrigerated display — same chilling-injury problem as nectarines.","To cut residue: rinse and rub gently under running water. Peeling is the meaningful reduction if you're buying conventional, though blanching 30 seconds is the only pleasant way to peel a peach.","Frozen peaches are picked riper than shipping fruit and are often nutritionally equal or better. Frozen organic is a strong year-round default."],
 hand:["Ripen stem-down on the counter, never in the fridge.","Once ripe, refrigerate and eat within three days.","To peel: score an X in the bottom, 30 seconds in boiling water, straight into ice water. The skin slips off.","Overripe peaches freeze well sliced — don't throw them out."]},

{id:"cherries",name:"Cherries",tier:"unclean",src:"Ranked 7th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:63,fiber:2.1,sugar:12.8,vitc:7,k:222},
 about:"High in anthocyanins, and the tart varieties have real research behind them for exercise recovery and sleep — tart cherry contains measurable melatonin. Sweet cherries are the higher-sugar of the two at 12.8 g per 100 g. Short intense season, and no ripening after picking.",
 green:["Stems on, green and flexible. Stemless cherries deteriorate several times faster.","Firm and glossy with taut skin.","Deep colour for the variety — dark mahogany for Bing, blush gold for Rainier.","Heavy for their size; light cherries have dehydrated."],
 red:["Brown, dry or missing stems.","Soft, sticky or split fruit. Splits happen from rain near harvest and rot follows immediately.","Brown bruising or pitting on the skin.","To cut residue: rinse under running water with the stems still attached. The stem seals the fruit, so washing stemmed cherries works better than washing pitted ones.","Frozen organic cherries cost a fraction of fresh and lose very little. For anything cooked or blended there's no reason to buy fresh."],
 hand:["Keep cold. Cherries decline noticeably within hours at room temperature.","Store unwashed in a breathable container; wash by the handful as you eat.","Pits are a choking hazard for young children — pit before serving.","Freeze pitted on a tray, then bag."]},

{id:"apples",name:"Apples",tier:"unclean",src:"Ranked 8th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:52,fiber:2.4,sugar:10.4,vitc:4.6,k:107},
 about:"The fibre is pectin, a soluble fibre with real evidence behind it for cholesterol binding, and most of it sits in and just under the skin. Commercially stored apples are often months old when you buy them — that's normal controlled-atmosphere storage rather than deception, but it's why an apple in April tastes different from one in October.",
 green:["Firm with no give anywhere. Press the shoulder — softness means mealy flesh inside.","Taut, unwrinkled skin. Wrinkling around the stem is the clearest age signal.","Heavy for its size.","Local and in season in autumn where available. The difference in texture is not subtle."],
 red:["Soft spots, bruising, or skin that wrinkles under light pressure.","Any broken skin. Damaged apples can develop patulin, a mould toxin, and the break is the entry point.","A heavy, greasy wax film. Some sheen is natural, but thick commercial wax is applied over post-harvest fungicide and seals it in place.","To cut residue: this is one of the few crops on the worst-of list where peeling genuinely helps. It removes a substantial share of surface residue at the cost of some fibre. Washing alone does less here because of the wax.","Apples are commonly treated with the post-harvest fungicide diphenylamine, and organic apples are among the most widely stocked organic items anywhere — an easy swap."],
 hand:["Refrigerate. Apples last five to ten times longer cold than on the counter.","Store away from everything else — they're strong ethylene emitters and will over-ripen nearby produce.","Browning on cut apples is oxidation, not spoilage. Lemon juice or a brief saltwater dip slows it.","One bad apple genuinely does spoil the bunch; remove any that softens."]},

/* ================= GRUBBY (ranks 9-12) ================= */
{id:"blackberries",name:"Blackberries",tier:"grubby",src:"Ranked 9th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:43,fiber:5.3,sugar:4.9,vitc:21,k:162},
 about:"An unusual fibre-to-sugar ratio — 5.3 g of fibre against 4.9 g of sugar per 100 g is close to unique among fruit. Very high anthocyanin content. The USDA only began sampling blackberries in 2023 and they landed high on the list almost immediately, averaging more than four pesticides per sample.",
 green:["Deep uniform black with a slight sheen. Red or purple drupelets mean underripe, and blackberries do not ripen after picking.","Plump, firm individual drupelets with no collapsed segments.","A dry container with no juice staining.","No stem caps attached. Unlike raspberries, a ripe blackberry releases its core, so an attached cap means it was picked early."],
 red:["Juice at the bottom of the clamshell. Turn it over first — this is the reliable tell for crushed fruit underneath.","Visible mould on even one berry; spores are already through the pack.","Dull, shrunken or leaking berries.","To cut residue: rinse gently in a colander under low-pressure running water immediately before eating. The hollow structure holds water, so anything more aggressive destroys them and soaking is counterproductive.","Frozen organic is cheap, nutritionally intact, and solves both the residue question and the two-day shelf life."],
 hand:["Extremely perishable. Buy for two or three days, not a week.","Never wash before storing. Moisture is what kills them.","Store in a single layer where you can — weight crushes the bottom row.","Freeze spread on a tray, then bag."]},

{id:"pears",name:"Pears",tier:"grubby",src:"Ranked 10th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:57,fiber:3.1,sugar:9.8,vitc:4.3,k:116},
 about:"High fibre for a soft fruit at 3.1 g per 100 g, most of it in the skin, and generally well tolerated by people with sensitive digestion. Pears are picked hard on purpose — one of the few fruits that ripen better off the tree than on it, so firmness in the store is correct rather than a defect.",
 green:["Check the neck, not the belly. A pear ripens from the inside out, and slight give at the stem end is the only reliable test.","Smooth skin with no bruising. Russeting — the brown netting on some varieties — is normal and not a flaw.","An intact stem.","Firm is fine and expected. Buy hard and ripen at home."],
 red:["Soft at the widest part of the fruit. That means the inside has already gone mealy or brown.","Dark sunken bruises, which spread inward fast in pears.","Shrivelled skin around the stem.","To cut residue: peeling is a workable mitigation given the long controlled-atmosphere storage and repeated post-harvest treatment this crop gets, at the cost of most of the fibre. Otherwise rub firmly under running water.","Pears are often stored many months before sale, which extends fungicide contact time — a specific argument for organic on this one."],
 hand:["Ripen on the counter; refrigerate once the neck yields, to hold it.","A paper bag with a banana speeds ripening considerably.","Pears go from perfect to mealy in about a day — check daily once they start to soften.","Underripe pears poach beautifully; don't bin a hard one."]},

{id:"potatoes",name:"Potatoes",tier:"grubby",src:"Ranked 11th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:77,fiber:2.2,sugar:0.8,vitc:19.7,k:425},
 about:"More potassium per 100 g than a banana, real vitamin C, and more protein than most vegetables. The residue profile is unusual — only about two pesticides per sample, far fewer than anything else on the worst-of list, but 90% carried chlorpropham, a sprout inhibitor banned in the European Union.",
 green:["Firm all over with taut skin and no give.","Dry and clean, without heavy caked soil hiding the surface.","Smooth skin free of deep eyes.","Sold in paper or mesh rather than sealed plastic. Potatoes need airflow and plastic bags sweat."],
 red:["Any green tint on the skin. Green means solanine, a genuine natural toxin, and it's the one produce defect actually worth taking seriously. Cut it away generously, and discard the potato if the greening is extensive.","Sprouts, soft spots, wrinkling, or a musty smell.","Potatoes displayed under bright lighting. Light is what causes greening in the first place, so a brightly lit bin is a bad sign for everything in it.","To cut residue: peel. Chlorpropham sits on the skin, so peeling targets the specific chemical of concern almost exactly.","Organic potatoes are among the cheapest organic swaps available, which makes the calculation easy here."],
 hand:["Store cool, dark and dry — but NOT in the refrigerator. Cold converts starch to sugar, which raises acrylamide formation when you fry or roast them. This is one of the most consequential storage mistakes people make.","Never store with onions. Each accelerates the other's spoilage.","A paper bag in a cupboard is close to ideal.","Sprouted potatoes with no green, still firm, are fine once the sprouts are removed."]},

{id:"blueberries",name:"Blueberries",tier:"grubby",src:"Ranked 12th of 47 crops · EWG 2026, from USDA data",
 n:{kcal:57,fiber:2.4,sugar:10,vitc:9.7,k:77},
 about:"The anthocyanin and cognitive-health research on blueberries is among the strongest for any single fruit, and the glycaemic impact is low despite the sugar figure. Wild blueberries — usually sold frozen — are smaller, carry more skin per volume, and are typically higher in anthocyanins than cultivated ones.",
 green:["A dusty silver-white bloom on the skin. That's natural wax, a freshness indicator, and you should not try to wash it off.","Deep blue-purple with no red or green. Blueberries don't ripen after picking, so a red one stays sour.","Firm and dry, rolling loose in the container.","Uniform size within the pack, which indicates a single careful pick."],
 red:["Juice staining or moisture in the container.","Soft, wrinkled or dull berries. Loss of bloom means they've been handled a lot.","Any mould, which spreads through a pack fast.","To cut residue: rinse under running water immediately before eating. The waxy bloom holds some residue and won't rinse away, which is a real limit on what washing achieves here — and a specific argument for organic on this crop.","Frozen wild organic blueberries are cheaper, higher in anthocyanins, and remove the question entirely."],
 hand:["Wash only right before eating.","Store in the original vented container; they hold a week or more, far better than other berries.","Pick out any soft ones on the day you buy them.","Freeze straight from the container — they don't clump, so no tray step needed."]},

/* ================= PASSABLE ================= */
{id:"greenbeans",name:"Green beans",tier:"passable",src:"Flagged for high toxicity score, just outside the worst 12 · EWG 2026",
 n:{kcal:31,fiber:2.7,sugar:3.3,vitc:12.2,k:211},
 about:"Good fibre and vitamin K for very few calories. EWG flagged green beans not for the quantity of residue but for what was found — USDA tests from 2021–2022 detected acephate, an organophosphate banned for use on this crop since 2011, on some samples.",
 green:["Snap test: a fresh bean breaks cleanly with an audible crack. The most reliable check there is, and vendors expect you to do it.","Slim and firm, with the seed bumps barely visible through the pod.","Vivid green with a matte, velvety surface.","Dry to the touch."],
 red:["Beans that bend instead of snapping. That's dehydration and the texture is gone.","Visibly bulging seeds through the pod — overmature, tough and starchy.","Rust-coloured spots or blackening, which is moisture damage.","To cut residue: rinse under running water and rub with your fingers, then trim both ends. The stem end is where residue concentrates and you're trimming it anyway.","Frozen green beans are processed within hours of picking, hold their nutrition well, and organic frozen is inexpensive."],
 hand:["Store dry in the crisper; moisture causes rust spots within days.","Don't wash until you're ready to cook.","Blanch before freezing or they turn to mush.","Cook briefly — overcooked green beans lose both colour and vitamin C."]},

{id:"peppers",name:"Bell & hot peppers",tier:"passable",src:"Flagged for high toxicity score, just outside the worst 12 · EWG 2026",
 n:{kcal:31,fiber:2.1,sugar:4.2,vitc:128,k:211},
 about:"Red bell peppers carry 128 mg of vitamin C per 100 g — roughly triple an orange, and the densest source in the produce section. Red, yellow and orange are the same plant as green, just left to ripen, which is why they cost more and are substantially higher in both vitamin C and carotenoids.",
 green:["Heavy for its size with thick walls. Lightness means thin flesh and less to eat.","Taut, glossy skin with no wrinkling.","A firm green stem. A dry or shrivelled stem is the first sign of age.","Sits flat or has an even shape, which makes prep far easier."],
 red:["Soft spots, wrinkling around the shoulders, or any give when pressed.","Black or sunken patches near the blossom end.","Pre-cut peppers in trays. Cut surfaces lose vitamin C quickly and cost several times more.","To cut residue: rub under running water, then remove the stem, core and inner membrane, where residue concentrates most. That's standard prep anyway.","Many are imported from regions with different residue enforcement. Organic or domestic in-season are both reasonable routes around it."],
 hand:["Store whole and unwashed in the crisper — cut peppers deteriorate within two days.","Freeze sliced without blanching. Texture softens but flavour holds for cooking.","The membrane, not the seeds, holds most of the capsaicin in hot peppers.","Wash hands thoroughly after handling hot peppers; capsaicin is oil-soluble and water alone won't shift it."]},

/* ================= TIDY ================= */
{id:"tomatoes",name:"Tomatoes",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:18,fiber:1.2,sugar:2.6,vitc:13.7,k:237},
 about:"Lycopene becomes substantially more bioavailable when cooked with fat, making this the rare case where processed genuinely beats raw — canned and cooked tomatoes outperform fresh on that measure. Very low calorie with good potassium.",
 green:["Fragrant at the stem end. A tomato that smells like nothing will taste like nothing, and this is the only test that matters.","Heavy for its size with taut, unbroken skin.","Slight give under gentle pressure, evenly across the fruit.","Sold at room temperature rather than refrigerated — a chilled display has already damaged the flavour."],
 red:["Rock hard with pale, pinkish colour. Picked green and gas-ripened; it will never develop flavour.","Cracks around the stem, soft spots, or wrinkled skin.","Tomatoes in a refrigerated case. Cold below about 55°F permanently destroys the aroma compounds and no amount of counter time brings them back.","To cut residue: rub under running water. Thin edible skin means no peeling shortcut, but the surface is smooth, so washing works better here than on a berry or a leafy green.","Cherry tomatoes were newly sampled for the 2026 data — worth knowing those numbers are recent and may move."],
 hand:["Never refrigerate a whole tomato. It's the single biggest tomato mistake and it's irreversible.","Store stem-side down on the counter, out of direct sun.","Refrigerate only after cutting, and bring back to room temperature before eating.","Overripe tomatoes are better cooked than binned — sauce, roast, or freeze whole."]},

{id:"celery",name:"Celery",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:16,fiber:1.6,sugar:1.3,vitc:3.1,k:260},
 about:"Very low calorie with decent potassium, and naturally high in nitrates — which is why 'celery powder' in cured meats is functionally the same chemistry as added nitrites despite the cleaner-sounding label. The celery juice health claims circulating online are not supported by evidence.",
 green:["Tightly packed, upright stalks that don't splay outward.","Snaps crisply. A stalk that bends is dehydrated.","Pale green ribs with fresh, perky leaves still attached.","A firm, pale base with no browning."],
 red:["Splayed or hollow stalks. Hollowness means overmature and pithy.","Yellowing, wilting or slimy leaves.","Brown streaking on the ribs, or a soft discoloured base.","To cut residue: wash between the ribs, not just over the outside. The grooves are the entire problem with this crop and rinsing the outer surface misses them. Separate the stalks and run water down each groove.","Trim and discard the base, where soil, moisture and anything applied all collect."],
 hand:["Wrap in aluminium foil rather than plastic. It stays crisp for weeks instead of days, because foil lets ethylene escape while plastic traps it.","Limp celery revives completely in ice water for an hour.","The leaves are edible and intensely flavoured — use them like an herb rather than binning them.","Store in the crisper, not the door."]},

{id:"cucumbers",name:"Cucumbers",tier:"tidy",src:"In the 47-crop guide, newly sampled for 2026 · EWG 2026",
 n:{kcal:15,fiber:0.5,sugar:1.7,vitc:2.8,k:147},
 about:"The lowest-calorie item in the produce section at 15 per 100 g, and about 95% water. Nutritionally modest — this is a texture and hydration food more than a nutrient source, which is fine as long as you know it going in.",
 green:["Firm along the entire length, especially at the ends. Soft tips are the first thing to go.","Dark, even green with no yellowing.","Slim rather than fat. Oversized cucumbers are seedy and bitter.","English cucumbers in plastic film rather than waxed loose ones, if you want to skip the wax question entirely."],
 red:["Soft or wrinkled ends, meaning dehydration has started.","Yellow patches, which mean overmaturity and bitterness.","A heavy, sticky wax coating. Conventional cucumbers are usually waxed, and wax seals surface residue in place where washing can't reach it.","To cut residue: peel conventional waxed cucumbers. You lose very little nutritionally and you remove the wax layer plus whatever is under it in one step.","Newly sampled for the 2026 data and not among the cleanest, so these numbers are recent and worth watching."],
 hand:["Store at cool room temperature or the warmest part of the fridge. Cucumbers suffer chilling injury below about 50°F and turn watery.","Keep away from tomatoes, bananas and apples — ethylene turns them yellow fast.","Salt sliced cucumber and drain 15 minutes before adding to salads to avoid a watery result.","Wrap cut ends; they dry out within hours."]},

{id:"lettuce",name:"Lettuce",tier:"tidy",src:"In the 47-crop guide, newly sampled for 2026 · EWG 2026",
 n:{kcal:17,fiber:2.1,sugar:1.2,vitc:4,k:247},
 about:"Romaine and darker leaf varieties carry real vitamin A (436 mcg RAE) and vitamin K. Iceberg is nutritionally close to water — not harmful, just not doing much. Romaine has been at the centre of repeated multistate E. coli outbreaks, which makes handling more consequential here than for most produce.",
 green:["Heads that feel heavy and dense for their size.","Crisp outer leaves with no wilting at the edges.","A pale, clean-cut base without browning or slime.","Whole heads over bagged mixes where you have the choice — they last several times longer and cost less."],
 red:["Rust-coloured streaks along the ribs, which is oxidation from age or cold damage.","Any slime on the outer leaves or inside the bag.","Bagged salad with condensation inside, or more than a couple of days on the date.","To cut residue: separate the leaves and wash individually under running water, then spin dry. Dunking a whole head in a bowl just moves things around.","Discard the outer two leaves of a whole head. That's both the residue mitigation and standard practice for a crop grown in contact with soil."],
 hand:["Do NOT re-wash bagged pre-washed lettuce. Home washing adds contamination risk rather than removing it — FDA guidance, and it surprises almost everyone.","Store whole heads in a loose bag with a dry paper towel.","Tear rather than cut leaves for salad; cut edges brown faster.","Check FDA recall alerts if you eat a lot of romaine — it's the produce item most often subject to them."]},

{id:"oranges",name:"Oranges",tier:"tidy",src:"In the 47-crop guide, newly sampled for 2026 · EWG 2026",
 n:{kcal:47,fiber:2.4,sugar:9.4,vitc:53.2,k:181},
 about:"Excellent vitamin C plus real fibre if you eat the fruit rather than drink it — a glass of juice is several oranges with the fibre stripped and the sugar concentrated. The white pith holds most of the hesperidin, so scraping every trace of it away costs you something.",
 green:["Heavy for its size. Weight means juice, and it's the most reliable citrus test there is.","Firm with taut skin and a slight sheen.","Some green on the peel is fine — it's chlorophyll re-greening from warm weather and says nothing about ripeness.","Thin skin relative to the fruit, which usually means more flesh."],
 red:["Light, hollow-feeling fruit. It's dried out inside regardless of how it looks.","Soft spots, which spread quickly in citrus, or mould at the stem end.","Wrinkled or leathery skin.","On residue: the thick peel is a strong barrier, which is why citrus generally tests well and why you mostly don't need to worry. The exception is zest — scrub the peel thoroughly under running water first, since that's the one time you eat the outside.","Buy organic specifically if you zest often; otherwise conventional is a reasonable call here."],
 hand:["Store at cool room temperature for a week, or refrigerated for up to a month.","Roll firmly on the counter before juicing to break the internal vesicles. It noticeably increases yield.","Don't store in a sealed bag; citrus needs airflow or it moulds.","Zest before juicing, not after. Zesting a squeezed orange is miserable."]},

{id:"broccoli",name:"Broccoli",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:34,fiber:2.6,sugar:1.7,vitc:89.2,k:316},
 about:"Nearly as much vitamin C as an orange, plus fibre and potassium. Sulforaphane, formed when you chop or chew the raw vegetable, is one of the most studied compounds in nutritional science — and it's destroyed by prolonged boiling, which is why cooking method matters more here than for most vegetables.",
 green:["Tight, compact florets with a deep blue-green or purplish cast.","Firm stalks with no rubberiness, and cut ends that look moist rather than dried.","Heavy for its size.","Leaves still attached and looking fresh — they're edible and a good freshness indicator."],
 red:["Yellowing florets. That's the flower opening, and it means bitterness.","Loose, open florets or any sliminess in the crown.","Dried, split or woody-looking stem ends.","To cut residue: soak florets head-down in cold water for a few minutes to release trapped grit, then rinse under running water. Dense florets trap more than a smooth surface, so a rinse alone under-performs here.","Trim and discard the toughest outer stem layer — standard prep, and it removes the outermost surface."],
 hand:["Steam 3–4 minutes. Boiling leaches vitamin C into the water and destroys the sulforaphane pathway.","Store unwashed in a loose bag; broccoli needs airflow.","The stalk is entirely edible — peel the tough outer layer and it's sweeter than the florets.","Chop and let it sit 10 minutes before cooking; that's when sulforaphane forms."]},

{id:"sweetpotato",name:"Sweet potatoes",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:86,fiber:3.0,sugar:4.2,vitc:2.4,k:337},
 about:"709 mcg RAE of vitamin A per 100 g — a full day's requirement in one medium potato — plus 3 g of fibre, mostly in the skin. Beta-carotene absorption rises sharply with a little fat alongside. 'Yam' on US labels almost always means sweet potato; true yams are a different species and rarely sold in American supermarkets.",
 green:["Firm all over with smooth, unbroken skin.","Even, tapered shape. Irregular knobbly ones are hard to cook evenly.","Medium size. Very large sweet potatoes are often woody in the centre.","Dry skin with no soft or damp patches."],
 red:["Soft spots, which spread fast and turn the whole potato bitter.","Shrivelled skin, sprouting, or dark sunken areas.","Cracks or cuts in the skin, which are entry points for rot.","To cut residue: scrub firmly under running water with a brush. Unlike regular potatoes the skin is worth keeping for the fibre, so scrubbing rather than peeling is the better trade.","Root crops sit in the soil, but sweet potatoes weren't flagged in either direction — conventional is reasonable and organic is a preference rather than a priority."],
 hand:["Store cool and dark but NOT refrigerated. Cold causes a hard core that never softens no matter how long you cook it.","Keep away from onions.","Roast rather than boil — slow roasting drives enzymatic starch conversion and develops far more sweetness.","They keep three to five weeks in a cupboard, much longer than regular potatoes."]},

{id:"raspberries",name:"Raspberries",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:52,fiber:6.5,sugar:4.4,vitc:26.2,k:151},
 about:"The highest fibre of any common fruit at 6.5 g per 100 g, against only 4.4 g of sugar. High in anthocyanins and ellagic acid. Their close relative the blackberry ranked 9th worst for residue, so it's worth treating raspberries with similar care even though they weren't flagged.",
 green:["Deep, even colour with a slight matte finish.","Plump, intact drupelets with no collapsed segments.","A dry container with no juice staining.","Uniform size, which indicates careful picking rather than a rushed harvest."],
 red:["Moisture or staining at the bottom of the clamshell — check underneath before buying.","Mould on even one berry. Raspberries are the fastest of all berries to go, and spores move through a pack overnight.","Dull, shrunken or leaking fruit.","To cut residue: rinse very gently in a colander under low-pressure water immediately before eating. The hollow centre fills with water and they collapse if you're rough or if you soak them.","Frozen organic is far cheaper, nutritionally intact, and removes the 48-hour shelf life problem."],
 hand:["Buy for two days maximum. This is not a stock-up item.","Never wash before storing.","Single layer if possible — the bottom row crushes under its own weight.","Freeze spread on a tray before bagging."]},

{id:"cantaloupe",name:"Cantaloupe",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:34,fiber:0.9,sugar:7.9,vitc:36.7,k:267},
 about:"Strong vitamin A and vitamin C together for 34 calories, plus good potassium. The netted rind is the highest-risk produce surface in the store — its texture harbours bacteria, and it has been the source of deadly Listeria and Salmonella outbreaks. That makes the handling here genuinely important rather than routine.",
 green:["A sweet, musky smell at the stem end. This is the primary ripeness test.","A smooth, slightly sunken scar where the stem was — it means the melon released naturally when ripe.","Creamy gold or tan under the netting, not green.","Slight give at the blossom end when pressed gently."],
 red:["Green background colour under the netting, or a stem still attached. Both mean it was cut early, and cantaloupe does not ripen further after picking.","Soft, wet or sunken spots anywhere on the rind.","Pre-cut melon in the refrigerated case unless you'll eat it that day. Cut melon is one of the fastest bacterial growth media in a supermarket.","To reduce risk: scrub the rind with a clean brush under running water before cutting. Every time, including organic. The knife drags whatever is in that netting straight into the flesh, which is the documented outbreak pathway — and it matters more here than pesticide residue does.","Wash the knife and board immediately after cutting; don't reuse them on anything raw."],
 hand:["Refrigerate cut melon within two hours and eat within three days.","Whole uncut melons keep several days at room temperature.","Never leave cut melon out during a party — that's a classic food-poisoning scenario.","The seeds are edible roasted, though most people bin them."]},

{id:"grapefruit",name:"Grapefruit",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:42,fiber:1.6,sugar:6.9,vitc:31.2,k:135},
 about:"Good vitamin C, lycopene in the pink and red varieties, and low sugar for citrus. One important caveat that has nothing to do with pesticides: grapefruit interacts with a long list of medications including statins, some blood pressure drugs and immunosuppressants, and the interaction can be serious. Worth a pharmacist conversation before making it a daily habit.",
 green:["Heavy for its size — the single best indicator of juice content.","Firm with slightly springy skin.","Smooth, thin-looking peel. Thick coarse peel means more pith and less flesh.","Slightly flattened at the ends rather than perfectly round."],
 red:["Light or hollow-feeling fruit, which has dried out inside.","Soft or discoloured patches, especially at the stem end.","Rough, puffy skin that separates from the flesh when squeezed.","On residue: the thick peel is a strong barrier and citrus tests well generally, so this is not a high-priority organic swap. Scrub the peel if you zest.","The medication interaction is the actual thing to check on this fruit, and it's entirely independent of how it was grown."],
 hand:["Store at room temperature for a week, or refrigerated for several.","Bring to room temperature before eating — cold mutes the sweetness and amplifies the bitterness.","Segment over a bowl to catch the juice.","Don't add sugar reflexively; a ripe grapefruit at room temperature usually doesn't need it."]},

{id:"zucchini",name:"Summer squash & zucchini",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:17,fiber:1.0,sugar:2.5,vitc:17.9,k:261},
 about:"Very low calorie with decent vitamin C and potassium, and the skin holds most of the nutrients. A small share of US summer squash is grown from GMO seed, so organic is the reliable route if that matters to you.",
 green:["Small to medium — under about eight inches. Oversized squash turns seedy, watery and bland.","Firm with glossy, taut skin.","Heavy for its size.","A fresh-looking cut stem end rather than a dried, shrivelled one."],
 red:["Soft spots, or skin that dents under light pressure.","Dull, wrinkled skin, meaning it's been out of the field a while.","Very large specimens, however good the price looks. The texture is genuinely poor.","To cut residue: rub firmly under running water. The skin is thin and edible with no peeling shortcut, but it's smooth, so washing works better here than on a ridged or netted surface.","Trim both ends before cooking — standard prep, and it removes the stem end where residue concentrates."],
 hand:["Store dry in the crisper; moisture causes soft spots within days.","Salt sliced zucchini and drain 20 minutes before cooking to avoid a watery dish.","Freeze grated and squeezed dry for baking; slices freeze poorly.","Don't wash until you're ready to use it."]},

{id:"eggplant",name:"Eggplant",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:25,fiber:3.0,sugar:3.5,vitc:2.2,k:229},
 about:"Good fibre for very few calories, and nasunin — a well-characterised anthocyanin — is concentrated in the purple skin, so peeling costs you the main nutritional reason to eat it. Worth knowing it absorbs cooking oil dramatically, which routinely turns a 25-calorie vegetable into a very high-calorie dish.",
 green:["Glossy, taut skin with a deep even colour.","Firm with a slight springiness — press gently and the flesh should bounce back.","Heavy for its size, meaning dense flesh rather than air pockets.","A green, fresh-looking cap and stem."],
 red:["Dull or wrinkled skin, meaning it's old and will be bitter.","Flesh that stays indented after you press it. That's the reliable overripeness test.","Brown patches or a dried, shrivelled cap.","On residue: eggplant has thicker skin than most tidy-tier items and wasn't flagged. Rub under running water and don't peel — the skin is where the nasunin is.","Bitterness is a ripeness issue, not a chemical one. Salting sliced eggplant for 30 minutes draws out both bitterness and moisture, and cuts oil absorption substantially."],
 hand:["Store at cool room temperature, not the fridge. Eggplant suffers chilling injury and goes pitted and brown below about 50°F.","Use within a few days; it doesn't keep like other vegetables.","Salt and drain before frying — the single most effective technique for this vegetable.","Cut surfaces brown fast, so prep just before cooking."]},

{id:"plums",name:"Plums",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:46,fiber:1.4,sugar:9.9,vitc:9.5,k:157},
 about:"Good anthocyanin content concentrated in the skin, and low calorie for a stone fruit. About 90% of plum samples carried fludioxonil, the same PFAS-class fungicide found on peaches — worth knowing even though plums weren't flagged overall. The sorbitol content has a mild laxative effect in quantity, which is why prunes work.",
 green:["A dusty white bloom on the skin — natural wax and a freshness indicator, not residue.","Slight give at the stem end with the body still firm.","Deep, even colour for the variety.","Fragrant. Stone fruit without a smell has no flavour."],
 red:["Rock hard with no give anywhere, meaning picked far too early.","Brown soft spots, splits, or weeping around the stem.","Shrivelled skin near the stem end.","To cut residue: rub gently under running water for 20 seconds. Thin skin means no peeling shortcut, though the fludioxonil finding on plums and peaches is a reasonable argument for organic if you eat a lot of stone fruit.","Don't scrub the bloom off deliberately — it's the fruit's own wax, not a coating."],
 hand:["Ripen on the counter, then refrigerate to hold.","Wash right before eating.","Overripe plums are excellent cooked down; don't bin them.","They bruise easily — carry them on top of the bag, not underneath."]},

{id:"honeydew",name:"Honeydew",tier:"tidy",src:"In the 47-crop guide, flagged in neither direction · EWG 2026",
 n:{kcal:36,fiber:0.8,sugar:8.1,vitc:18,k:228},
 about:"Good vitamin C and potassium, about 90% water, and very low fibre. The smooth rind is considerably easier to scrub effectively than cantaloupe's netting, which makes it the lower-risk melon of the two — but the same rind-to-flesh contamination pathway applies.",
 green:["A slightly waxy or tacky feel to the rind. This is the reliable ripeness test — an unripe honeydew feels slick and smooth.","Creamy yellow-white rind, not green.","Heavy for its size.","Slight give at the blossom end."],
 red:["A stark white or greenish rind with a slick surface. Picked too early, and honeydew doesn't ripen meaningfully once cut from the vine.","Soft, sunken or damp spots.","Pre-cut melon unless you're eating it the same day.","To reduce risk: scrub the rind under running water before cutting. The smooth surface means this actually works well here, unlike cantaloupe where the netting resists cleaning.","Wash the knife and board after cutting rather than moving straight to the next ingredient."],
 hand:["Refrigerate cut melon within two hours; eat within three days.","Whole melons keep several days at room temperature and continue to soften slightly.","Don't leave cut melon out at room temperature.","If it's bland it was picked early, and there's no fixing it — lean on the tacky-rind test next time."]},

{id:"tomatillos",name:"Tomatillos",tier:"tidy",src:"In the 47-crop guide, newly sampled for 2026 · EWG 2026",
 n:{kcal:32,fiber:1.9,sugar:3.9,vitc:11.7,k:268},
 about:"Good potassium and fibre for 32 calories, plus niacin and withanolides. The papery husk gets discarded, taking surface exposure with it — one of the reasons husked crops tend to test well. Roasting deepens the flavour considerably compared with using them raw.",
 green:["Husks that are fresh, pale green and tight against the fruit.","Fruit that fills the husk completely. That's the ripeness signal.","Firm and dense when squeezed through the husk.","Bright green fruit underneath. Yellowing means overripe and the flavour turns flat."],
 red:["Dry, brown or shredded husks, meaning it's been sitting.","Husks rattling loosely around a shrunken fruit.","Soft, wrinkled or splitting fruit.","To cut residue: remove the husk, then wash off the sticky film underneath thoroughly with warm water. That film is natural but it traps whatever it contacts, and rinsing a husked tomatillo without scrubbing the stickiness off achieves very little.","Don't eat them raw and underripe in quantity — unripe tomatillos are high in solanine-family compounds. Cooking resolves it."],
 hand:["Store husk-on in a paper bag in the fridge; they keep for weeks, far longer than tomatoes.","The sticky residue is water-soluble and comes off with warm water and a rub.","Roast or char before blending for salsa verde — raw is sharply acidic.","Freeze whole after husking and washing."]},

/* ================= CLEAN ================= */
{id:"peas",name:"Frozen sweet peas",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:81,fiber:5.1,sugar:5.7,vitc:40,k:244},
 about:"Unusual protein and fibre content for a vegetable — 5.4 g and 5.1 g per 100 g respectively — plus strong vitamin C. Frozen is the recommended form rather than a compromise: peas are blanched and frozen within hours of picking, while fresh ones start converting sugar to starch immediately.",
 green:["A bag that feels loose and rattles. Free-flowing peas mean it hasn't thawed and refrozen.","Plain peas with no added sauce or salt — check the ingredient list, which should say one thing.","A bag from the back of the freezer case, below the load line.","Organic if the gap is small, though this is a low-priority swap given where it sits."],
 red:["A solid frozen block, or clumping inside the bag. That's a thaw-refreeze cycle and the texture is ruined.","Visible ice crystals or frost inside the packaging.","Bags stacked above the freezer case load line, where temperature is unreliable.","Butter sauce or seasoned varieties, which quietly add sodium and fat to a vegetable that needs neither.","No washing is needed or useful — they're blanched before freezing."],
 hand:["Cook from frozen. Thawing first makes them mushy.","Add them in the last two minutes of cooking, not the first.","Keep freezer temperature steady; repeated door-opening degrades them.","They're fine straight from frozen in a salad once briefly rinsed under cool water."]},

{id:"asparagus",name:"Asparagus",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:20,fiber:2.1,sugar:1.9,vitc:5.6,k:202},
 about:"Excellent folate at 52 mcg per 100 g plus vitamin K, all for 20 calories, and it contains inulin — a prebiotic fibre that feeds gut bacteria. A fast growing cycle means a short spray window, which is the main reason it tests as clean as it does.",
 green:["Tightly closed, compact tips. The first and most reliable check.","Firm stalks that snap rather than bend.","Moist, freshly cut ends rather than dried and woody ones.","Standing upright in water in the display, which is how a store that knows what it's doing holds asparagus."],
 red:["Tips that are open, feathery, mushy or darkening. That's the first part to go and it goes fast.","Limp stalks, or dried and split white ends.","A strong sulfurous smell.","Thickness is not a quality signal. Thin spears aren't younger, they're a different variety, and both are fine.","Minimal residue concern here — a quick rinse under running water is sufficient, and organic is a genuine preference rather than a priority."],
 hand:["Store standing upright in an inch of water, loosely covered, like cut flowers. It stays crisp days longer than lying in the crisper.","Snap rather than cut the woody end — it breaks naturally right where tenderness begins.","Cook briefly. Overcooking is the most common way this vegetable gets ruined.","Use within three or four days; it declines quickly even stored well."]},

{id:"cabbage",name:"Cabbage",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:25,fiber:2.5,sugar:3.2,vitc:36.6,k:170},
 about:"Good vitamin C and 76 mcg of vitamin K, plus glucosinolates — the compounds behind most cruciferous vegetable research. One of the cheapest vegetables per pound and it keeps for weeks, which makes it one of the best value items in the store. The high vitamin K matters if you take warfarin: keep intake consistent rather than avoiding it.",
 green:["Heavy and dense for its size. A light head is loose and old.","Tight, firm outer leaves wrapped closely around the head.","Glossy, unblemished leaves with good colour.","A clean-cut, pale stem base without cracking."],
 red:["Loose, floppy or separating outer leaves.","Cracked or splitting heads, which happen from field over-maturity.","A dark, dried or cracked stem base.","Pre-shredded bagged cabbage, which loses vitamin C rapidly through the cut surfaces and costs several times more.","To cut residue: discard the outer two leaves. That's both the mitigation and standard practice, and it's why this crop tests well — the layers that took any spray are the ones you throw away."],
 hand:["Store whole and uncut in the crisper; a whole head keeps a month or more.","A cut head loses vitamin C quickly — wrap the cut face and use within days.","Don't boil it long. Extended cooking produces the sulfur smell and destroys most of the vitamin C.","Fermenting into sauerkraut preserves the vitamin C and adds live cultures."]},

{id:"cauliflower",name:"Cauliflower",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:25,fiber:2.0,sugar:1.9,vitc:48.2,k:299},
 about:"Vitamin C comparable to citrus per 100 g, which surprises most people, plus glucosinolates and good potassium. Very low carbohydrate, which is why it substitutes for rice and potatoes. Also high FODMAP and a common IBS trigger, worth knowing if that applies to you.",
 green:["Tight, compact, creamy-white florets with no separation.","Heavy for its size.","Fresh green leaves still attached and wrapped around the head — a good freshness indicator.","A firm head with no give when pressed."],
 red:["Brown or grey speckling across the florets. It's oxidation rather than rot, so trimming works, but it means age.","Loose, spreading florets or a spongy texture.","Yellowing, wilted or missing leaves.","Pre-riced cauliflower, which spoils within days and costs far more than doing it yourself in a food processor.","Minimal residue concern — the leaves and dense head shield the florets, which is why it tests well. Rinse and move on."],
 hand:["Store stem-down so condensation doesn't pool in the florets and cause brown spots.","Roast rather than boil. Boiling leaches the vitamin C into the water and produces a sulfurous smell.","The leaves and stem are edible and good roasted — don't bin them.","Keeps about a week in the crisper."]},

{id:"watermelon",name:"Watermelon",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:30,fiber:0.4,sugar:6.2,vitc:8.1,k:112},
 about:"Higher lycopene than raw tomatoes, plus citrulline, and it's 92% water, which makes it genuinely useful for hydration. Almost no fibre at 0.4 g per 100 g — the lowest on this page. The rind is a complete barrier to residue, which is why it tests clean, but that same rind is a contamination pathway when a knife carries surface bacteria through it.",
 green:["A creamy yellow ground spot where it rested on the soil. White or absent means picked early, and this is the most reliable indicator.","Heavy for its size.","A deep hollow sound when you knock it. A dull thud means overripe or mealy.","Dull rather than shiny rind. A glossy watermelon is underripe."],
 red:["A white or pale green ground spot, or no ground spot at all.","Soft spots, dents, or a shiny surface.","Pre-cut watermelon sitting at room temperature. Cut melon at ambient temperature is one of the fastest bacterial growth media in a kitchen.","To reduce risk: scrub the rind under running water before cutting. Residue isn't the concern here — surface bacteria transferred by the knife is.","Wash the knife and board immediately after cutting."],
 hand:["Refrigerate cut melon within two hours and eat within four days.","Whole melons keep a week or two at cool room temperature.","Cube and freeze for smoothies rather than binning a melon you can't finish.","The rind is edible pickled, and the white part is where most of the citrulline sits."]},

{id:"mango",name:"Mango",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:60,fiber:1.6,sugar:13.7,vitc:36.4,k:168},
 about:"Strong vitamin C and vitamin A together, and the thick inedible skin is why it tests clean. Highest sugar of the clean-tier fruits at 13.7 g per 100 g. Worth knowing that mango skin contains urushiol — the same compound as poison ivy — so people sensitive to poison ivy can react to handling the peel.",
 green:["Squeeze gently: a ripe mango gives slightly, like a ripe avocado. Colour is not a ripeness indicator and varies entirely by variety.","A sweet, fruity smell at the stem end.","Plump and rounded rather than flat, meaning more flesh relative to the pit.","Heavy for its size."],
 red:["Rock hard with no smell. It will soften on the counter but may never develop much flavour if picked very early.","Wrinkled skin, black spots, or a sour fermented smell.","Sap oozing at the stem end.","Do not refrigerate an unripe mango. Cold stops ripening permanently and you'll have a hard, bland mango forever.","Residue is a minimal concern given the thick peel. Wash the skin before cutting so the knife doesn't carry surface material in, then peel."],
 hand:["Ripen on the counter; a paper bag speeds it up considerably.","Refrigerate only once ripe, for up to five days.","Peel it — don't eat the skin, both for the urushiol and because it's unpleasant.","Frozen mango is picked ripe and often beats underripe fresh imports."]},

{id:"banana",name:"Banana",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:89,fiber:2.6,sugar:12.2,vitc:8.7,k:358},
 about:"Excellent potassium and vitamin B6. Ripeness dramatically changes how it behaves: green bananas are high in resistant starch, which acts like fibre and feeds gut bacteria, while a heavily spotted banana has converted most of that to simple sugar and hits considerably harder.",
 green:["Buy at the ripeness you'll eat them at, not the ripeness you like. They move fast at room temperature.","Firm with intact, unsplit skins.","An intact crown where the bunch joins. A separated crown means individual bananas ripen unevenly.","Green-tipped if you're buying for the week ahead."],
 red:["Split or broken skins, which are entry points for mould and fruit flies.","Grey or dull-looking skin, usually cold damage in transit — those never ripen properly.","Bruised, mushy areas rather than surface spotting. Brown spots on an otherwise firm banana are just sugar development.","Residue is a minimal concern given the thick peel you discard. Wash your hands after peeling rather than washing the fruit.","Conventional banana farming has real labour and environmental concerns even though residue on the fruit is low — a separate argument for organic or fair trade if that matters to you."],
 hand:["Store apart from other produce. Bananas are among the strongest ethylene emitters and will over-ripen everything nearby.","Refrigeration blackens the peel but the fruit inside is fine — a legitimate way to hold a ripe banana several more days.","Freeze peeled and sliced for smoothies. Never freeze in the peel.","Wrapping the crown in foil slows ripening noticeably."]},

{id:"carrots",name:"Carrots",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:41,fiber:2.8,sugar:4.7,vitc:5.9,k:320},
 about:"The best vitamin A source in the produce section at 835 mcg RAE per 100 g. Beta-carotene absorption roughly triples when eaten with fat, so pairing them with dressing, oil or avocado isn't a garnish — it materially changes what you get out of them.",
 green:["Firm and rigid with a deep, even orange.","Smooth skin without cracking or hairy secondary rootlets, which indicate stress or age.","Medium thickness. Very thick carrots often have a woody core.","Green tops still attached where available — a strong freshness signal."],
 red:["Bendy or rubbery carrots, which have lost most of their moisture.","Green shoulders at the top, which taste bitter. Trim them off.","Cracks, soft spots or black patches near the crown.","White 'blush' on baby carrots is surface dehydration, not mould. Harmless, but it means they've been sitting.","Residue is a minimal concern. Scrub under running water with a brush rather than peeling — the skin has nutrients and there's no reason to remove it here."],
 hand:["Remove the green tops before storing. They pull moisture out of the root within a day.","Store submerged in water in a sealed container in the fridge — they stay crisp for weeks and limp ones revive.","Baby carrots are cut from full carrots and rinsed in a permitted chlorine solution that's then rinsed off. Not a health concern, but whole carrots taste better and cost less.","Whole raw carrots are a choking hazard for young children."]},

{id:"mushrooms",name:"Mushrooms",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:22,fiber:1.0,sugar:2.0,vitc:2.1,k:318},
 about:"Good potassium and selenium for 22 calories. The genuinely interesting trick: set them gill-side up in direct sunlight for 15–30 minutes before cooking and they generate meaningful vitamin D. This is a real, replicable effect — mushrooms contain ergosterol, which converts under UV much the way skin does.",
 green:["Dry, firm caps with no sliminess.","Closed veils underneath if you want mild flavour; open gills mean more flavour and shorter shelf life.","Even colour with no dark wet patches.","Loose in a basket, or in the original vented punnet rather than sealed under plastic film."],
 red:["Any sliminess or a wet film on the cap. That's the end, and it isn't always visible through packaging — press gently through the wrap.","Dark bruising, shrivelling, or a strong ammonia smell.","Condensation inside the packaging.","Residue is a minimal concern — they're grown indoors in controlled substrate, which is why they test clean. A wipe or brief rinse is plenty.","Never forage without expert identification. The margin for error with wild mushrooms is fatal and there is no reliable amateur test."],
 hand:["Store in a paper bag, never plastic. Plastic traps moisture and they turn slimy within days.","Wipe or briefly rinse — the old advice that they soak up water like sponges is overstated, but don't leave them submerged.","Cook them thoroughly. Raw mushrooms are poorly digested.","Sunlight before cooking for the vitamin D. It's free and it works."]},

{id:"kiwi",name:"Kiwi",tier:"clean",src:"Among the 15 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:61,fiber:3.0,sugar:9.0,vitc:92.7,k:312},
 about:"More vitamin C than an orange, plus 3 g of fibre and strong potassium. Contains actinidin, a protein-digesting enzyme that causes mouth tingling in some people and is a genuine allergen for a few. Two kiwi before bed has modest but real evidence behind it for sleep quality.",
 green:["Gives to gentle thumb pressure, like a ripe peach. A hard kiwi is unpleasantly acidic.","Plump with unbroken, evenly fuzzy skin.","Fragrant at the stem end when ripe.","Buy firm if you're planning ahead — they ripen reliably on the counter."],
 red:["Soft, mushy or wet spots, which spread through the fruit quickly.","Wrinkled or shrivelled skin.","Mould or damage at the stem end.","Residue is a minimal concern given the peel you discard. Wash the skin before cutting so the knife doesn't carry surface material into the flesh.","Don't add raw kiwi to yogurt or gelatin in advance — actinidin breaks down dairy proteins and prevents setting."],
 hand:["Ripen on the counter, faster in a paper bag with a banana or apple.","Refrigerate once ripe; they hold well for a week or more.","The skin is edible and high in fibre if you rub the fuzz off, though most people don't.","Halve and scoop with a spoon — quicker than peeling."]},

/* ================= CLEANEST ================= */
{id:"pineapple",name:"Pineapple",tier:"cleanest",src:"Ranked among the 5 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:50,fiber:1.4,sugar:9.9,vitc:47.8,k:109},
 about:"The cleanest item in the entire 2026 guide, and the reason is physical rather than agricultural — the armoured rind is a complete barrier. Strong vitamin C and manganese, plus bromelain, an enzyme that genuinely tenderises meat and breaks down gelatin.",
 green:["Smell the base. A ripe pineapple is sweet and fragrant there, and this is the only test that reliably works.","Heavy for its size.","Fresh green crown leaves, firm and not dried.","Slight give when pressed, with no soft or dark patches."],
 red:["No smell at the base, meaning it was cut early. Pineapple does not get sweeter after harvest.","A fermented or vinegary smell, which means it's gone.","Brown dried crown leaves, or soft leaking spots on the rind.","Colour is not a reliable ripeness indicator — plenty of ripe pineapples are still greenish, so don't use it.","Residue is not a concern here. Buy conventional without hesitation and spend the difference on strawberries."],
 hand:["Store whole at room temperature for a day or two, or refrigerate cut in an airtight container for up to four days.","Cut pineapple freezes well for smoothies.","The core is edible and has the most bromelain, just tougher — dice it small rather than binning it.","Bromelain prevents gelatin setting, so cook it first if you're using it in a jelly."]},

{id:"sweetcorn",name:"Sweet corn",tier:"cleanest",src:"Ranked among the 5 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:86,fiber:2.0,sugar:3.2,vitc:6.8,k:270},
 about:"Second cleanest in the guide, and the husk does the work. Good lutein and zeaxanthin — carotenoids that concentrate in the retina. A small share of US sweet corn is grown from GMO seed, so organic is the reliable route if you want to avoid that.",
 green:["Bright green, tightly wrapped husks that cling to the cob.","A moist, pale stem end. Dried and brown means days off the plant.","Golden-brown, slightly sticky silk. Dry black silk means old.","Kernels that feel plump and evenly filled when you press through the husk."],
 red:["Dried, yellowing or loose husks.","Pre-husked corn on trays, which has already begun converting sugar to starch and dries out fast.","Gaps in the kernel rows or shrivelled tips when you peek.","Sugar converts to starch within hours of picking and the conversion is irreversible. Buy the freshest available and cook it the same day — this matters far more to how it tastes than anything else here.","Residue is not a concern. Buy conventional unless GMO avoidance is your reason for going organic."],
 hand:["Refrigerate immediately and cook within two days.","Leave the husk on until you cook it — it's the best possible storage wrapper.","Grill in the husk; it steams the kernels and prevents drying out.","Frozen corn is picked and frozen within hours and often beats supermarket 'fresh'."]},

{id:"avocado",name:"Avocado",tier:"cleanest",src:"Ranked among the 5 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:160,fiber:6.7,sugar:0.7,vitc:10,k:485},
 about:"Third cleanest in the guide — thick leathery skin is a near-perfect barrier. Outstanding fibre and more potassium per 100 g than a banana, and the fat content substantially increases carotenoid absorption from anything eaten alongside it. Also the highest-calorie item in the produce section by a wide margin.",
 green:["Check under the stem nub. Flick it off: green underneath means ready, and it's far more reliable than squeezing.","Yields to gentle pressure in your palm, not your fingertips — fingertip pressure is how avocados get bruised.","Unbroken skin with no sunken patches.","Buy a mix of firm and ripe if you're buying several, so they don't all peak on the same day."],
 red:["Brown under the stem nub, meaning overripe and stringy inside.","Soft spots, dents, or give that feels mushy rather than springy.","Cracked skin or oozing at the stem.","Wash the skin before cutting. This is the one wash step almost everyone skips and it matters — the blade drags whatever is on the rind directly into the flesh.","Residue is not a concern. Buy conventional; the skin does the work."],
 hand:["Ripen on the counter; a paper bag with a banana speeds it up considerably.","Refrigerate once ripe to hold it two or three more days.","Lemon juice and an airtight container slow browning on a cut half. The pit trick does almost nothing.","Freeze mashed with a little lime juice — that works well, unlike freezing slices."]},

{id:"papaya",name:"Papaya",tier:"cleanest",src:"Ranked among the 5 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:43,fiber:1.7,sugar:7.8,vitc:60.9,k:182},
 about:"Fourth cleanest in the guide. Excellent vitamin C, a good lycopene source, and papain — an enzyme that genuinely aids protein digestion. Most Hawaiian papaya is GMO, engineered for ringspot virus resistance, so organic is the route if you want to avoid that.",
 green:["Mostly yellow or orange skin with a little green remaining.","Gives to gentle pressure along its length, like a ripe avocado.","Smooth, unblemished skin.","A sweet smell at the stem end."],
 red:["Entirely green and hard, unless you're cooking it green as a vegetable.","Dark sunken spots, mould at the stem, or a fermented smell.","Bruises, which spread quickly through the soft flesh.","Scrub the rind under running water before cutting. Imported papaya has been linked to multiple Salmonella outbreaks and the knife-through-rind pathway is the documented route — it matters more here than residue does.","Residue itself is not a concern given the thick skin you discard."],
 hand:["Ripen at room temperature; refrigerate once ripe and eat within a few days.","Refrigerate cut papaya within two hours.","The seeds are edible and peppery — a rough substitute for black pepper.","Green unripe papaya is a vegetable, not a failure, and works well shredded in salads."]},

{id:"onions",name:"Onions",tier:"cleanest",src:"Ranked among the 5 lowest-residue crops of 47 · EWG 2026",
 n:{kcal:40,fiber:1.7,sugar:4.2,vitc:7.4,k:146},
 about:"Fifth cleanest in the guide — the papery layers get discarded along with any surface residue. Quercetin is concentrated in the outermost edible layers, so over-peeling costs you the main nutritional reason to eat them. Cheap, keeps for weeks, and improves nearly everything.",
 green:["Firm and heavy with tight, dry, papery skin.","No give at all when squeezed, especially at the neck.","A dry, tightly closed neck where the stem was.","Bought loose rather than in a mesh bag where you can, so you can check each one."],
 red:["Soft spots, especially at the neck, which is where rot starts.","Green shoots emerging from the top, meaning it's sprouting and the flavour turns harsh.","Damp or mouldy patches under the papery skin, or a strong smell through the skin.","Onions have caused large multistate Salmonella outbreaks in recent years. Wash your hands and board after handling, and don't move from onions to ready-to-eat food without doing so.","Residue is not a concern. Buy conventional, and don't over-peel — stop at the first clean layer."],
 hand:["Store dry, dark and ventilated. Never a sealed bag, never the fridge — humidity is what ruins onions.","Never store next to potatoes. Each accelerates the other's spoilage and it's a fast effect.","Refrigerate a whole onion 30 minutes before cutting to reduce tearing.","Cut onions should be wrapped and refrigerated; they oxidise and pick up fridge odours quickly."]}
];

/* PLU sticker decoding — works on any loose produce, no app required. */
const PLU_RULES = [
  {code:"4 digits (e.g. 4011)", label:"Conventionally grown", tone:"neutral",
   note:"The standard code. It tells you the item and its size, and nothing about how it was grown beyond conventional rules applying."},
  {code:"5 digits starting with 9 (e.g. 94011)", label:"Certified organic", tone:"good",
   note:"The 9 prefix is the organic indicator. This is the fastest way to verify organic on loose produce that has no packaging to read."},
  {code:"5 digits starting with 8 (e.g. 84011)", label:"Reserved for GMO — never adopted", tone:"neutral",
   note:"Widely repeated online as the 'GMO code'. It was reserved but the industry never used it, so its absence tells you nothing at all. Buying organic is the reliable route to avoiding GMO produce."}
];

/* What is actually readable on produce packaging.
   This replaces a brand-by-region database, which cannot honestly be built:
   produce brands are commodity growers who rotate by season and shipping lane,
   so the "best spinach brand" in a given store changes week to week. */
const LABEL_READS = [
  {t:"USDA Organic seal", v:"real",
   d:"Legally defined and third-party inspected. On produce it means no synthetic pesticides from the prohibited list, no synthetic fertiliser and no GMO seed. It is the only produce claim with a mandatory audit behind it."},
  {t:"Country of origin (COOL)", v:"real",
   d:"Mandatory on most fresh produce and genuinely useful. Residue enforcement varies substantially between exporting countries, and domestic in-season usually means a shorter chain and less post-harvest treatment."},
  {t:"Pack or harvest date", v:"real",
   d:"Not required, but some packers print it on bagged greens and berries. Where it appears it beats a 'best by' date, which is the packer's estimate rather than a fact. Fresher greens are a materially different vegetable."},
  {t:"Certified California-grown olive oil", v:"real",
   d:"Since 2022, California law requires that oil labelled as California-grown contain 100% California olives with no blending. That is a legal purity backstop — and avocado oil has no equivalent, which is precisely why avocado oil fraud is so widespread."},
  {t:"\"Local\"", v:"none",
   d:"No federal definition. It can mean the next county or the next time zone depending on who printed the sign. Look for a named farm or state instead."},
  {t:"\"Pesticide-free\" / \"No spray\"", v:"none",
   d:"Unregulated and unaudited on produce. If it isn't the USDA Organic seal, nobody verified it."},
  {t:"\"Natural\" on produce", v:"none",
   d:"Meaningless on fresh fruit and vegetables. It has a narrow USDA definition for meat and no defined meaning here at all."},
  {t:"\"Non-GMO Project Verified\"", v:"mixed",
   d:"A real third-party audit, but often applied to crops that have no GMO version in commercial production, where it verifies something never in question. Meaningful on corn, papaya and summer squash; decorative on strawberries."}
];
