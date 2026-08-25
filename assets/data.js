/* Loaded — produce dataset
   Tier + rank: EWG 2026 Shopper's Guide to Pesticides in Produce, which analyzes
   USDA Pesticide Data Program lab results (54,344 samples, 47 crops, 264 pesticides
   detected). Samples are washed, peeled or scrubbed before testing.
   Nutrition: USDA FoodData Central standard reference values, raw unless noted,
   per 100 g. Rounded — these are reference values, not lot measurements.
   Handling: FDA/USDA food-safety guidance and standard post-harvest practice.

   tier: "dirty"  = 2026 Dirty Dozen (rank 1-12, worst first)
         "watch"  = just outside the twelve, flagged by EWG for high toxicity score
         "clean"  = 2026 Clean Fifteen (rank 1-5 published in order; rest unordered)
         "mid"    = in the 47-crop guide but not in either published tier here
*/

const PRODUCE = [
/* ---------- DIRTY DOZEN ---------- */
{id:"spinach",name:"Spinach",tier:"dirty",rank:1,avg:"4+",
 n:{kcal:23,fiber:2.2,sugar:0.4,vitc:28,k:558,star:"Vitamin K 483 mcg · folate 194 mcg · iron 2.7 mg"},
 red:["Highest pesticide residue by weight of any crop tested, two years running.","All leaf, no skin — nothing to peel and enormous surface area per bite.","Leafy greens are the single highest-risk produce category for E. coli and Listeria outbreaks."],
 green:["Extraordinary nutrient density for 23 calories — one of the best vitamin K sources in the food supply.","Organic spinach is widely stocked and the price gap is usually small.","Cooking collapses it ~10:1, so a modest bag delivers a lot of nutrition."],
 hand:["Don't re-wash bagged pre-washed greens — home sinks reintroduce more risk than they remove.","Loose bunches: cold running water, then spin fully dry. Trapped moisture accelerates spoilage.","Store in a breathable container with a dry paper towel, not a sealed bag."]},

{id:"kale",name:"Kale, collard & mustard greens",tier:"dirty",rank:2,avg:"4+",
 n:{kcal:35,fiber:4.1,sugar:0.8,vitc:93,k:348,star:"Vitamin K 390 mcg · vitamin A 241 mcg RAE"},
 red:["Over half of kale samples in prior years carried DCPA (Dacthal), a pesticide the EPA moved to cancel over developmental risk.","Ruffled leaf structure traps residue in ways smooth leaves don't.","Sprayed heavily and eaten raw more often than most greens."],
 green:["More vitamin C per 100 g than an orange.","Very high fiber for a leafy green.","Sturdy enough to store a full week, so less waste per dollar than spinach."],
 hand:["Strip leaves from stems — stems hold more residue and are unpleasant raw.","Massaging raw kale with a little oil and salt breaks down the cell walls and improves digestibility.","Blanch and freeze if you buy more than you'll use in a week."]},

{id:"strawberries",name:"Strawberries",tier:"dirty",rank:3,avg:"4+",
 n:{kcal:32,fiber:2.0,sugar:4.9,vitc:58.8,k:153,star:"Vitamin C 59 mg — roughly a full daily requirement per cup"},
 red:["Porous seeded skin that cannot be peeled or effectively scrubbed.","The average American eats about eight pounds a year, so exposure compounds.","Grown close to the ground with a long spray season."],
 green:["Excellent vitamin C and manganese for very few calories.","Low sugar relative to most fruit.","If you make only one organic switch in the produce aisle, the data says make it this one."],
 hand:["Do not wash until the moment you eat them — water on the skin triggers mold within a day.","Store in a single layer, unwashed, in the fridge; discard any moldy berry immediately since spores spread fast.","Freeze whole on a tray before bagging so they don't fuse."]},

{id:"grapes",name:"Grapes",tier:"dirty",rank:4,avg:"4+",
 n:{kcal:69,fiber:0.9,sugar:15.5,vitc:3.2,k:191,star:"Resveratrol and polyphenols concentrated in the skin"},
 red:["Sprayed repeatedly across a long season and eaten skin-on.","Very high sugar and very low fiber — the least filling fruit per calorie on this list.","Tight clusters shelter residue from washing."],
 green:["Skin polyphenols are the actual nutritional draw.","Freezes well and works as a dessert substitute.","Organic table grapes are now widely available."],
 hand:["Rinse under running water just before eating, cluster by cluster.","Store unwashed in the perforated bag they came in — the holes are functional.","Whole grapes are a choking hazard for children under four; quarter them lengthwise."]},

{id:"nectarines",name:"Nectarines",tier:"dirty",rank:5,avg:"4+",
 n:{kcal:44,fiber:1.7,sugar:8.9,vitc:5.4,k:201,star:"Vitamin A 17 mcg RAE · beta-carotene"},
 red:["Thin fuzzless skin offers essentially no barrier.","Frequently treated post-harvest to extend shelf life.","Same PFAS-class fungicide exposure as peaches."],
 green:["Good potassium for the calorie count.","Skin holds most of the fiber and carotenoids — worth eating.","Naturally sweet enough to replace a processed dessert."],
 hand:["Ripen on the counter, then refrigerate to hold — never refrigerate a hard one, it will go mealy and never recover.","Wash right before eating.","A ripe nectarine yields to gentle pressure at the shoulder, not the tip."]},

{id:"peaches",name:"Peaches",tier:"dirty",rank:6,avg:"4+",
 n:{kcal:39,fiber:1.5,sugar:8.4,vitc:6.6,k:190,star:"Vitamin A 16 mcg RAE"},
 red:["Roughly 90% of peach and plum samples carried fludioxonil, a PFAS-class fungicide and the single most frequently detected pesticide across all produce in 2026.","Fuzzy skin traps residue and can't be scrubbed hard without damaging the fruit.","Long spray season plus post-harvest treatment."],
 green:["Low calorie, decent potassium, high water content.","Frozen peaches are picked riper and are often nutritionally equal or better than fresh.","Organic peaches are seasonally abundant and reasonably priced in summer."],
 hand:["Ripen stem-down on the counter out of direct sun.","Rinse and rub gently under running water; a soft brush damages the skin.","Refrigerate only once fully ripe."]},

{id:"cherries",name:"Cherries",tier:"dirty",rank:7,avg:"4+",
 n:{kcal:63,fiber:2.1,sugar:12.8,vitc:7,k:222,star:"Anthocyanins · tart varieties contain melatonin"},
 red:["Eaten whole and raw with no practical way to reduce surface exposure.","Short intense growing season with concentrated spray schedules.","Higher sugar than most fruit on this list."],
 green:["Anthocyanin content is genuinely high, and tart cherry has real evidence behind it for exercise recovery and sleep.","Good potassium.","Frozen organic cherries cost far less than fresh and lose little."],
 hand:["Rinse just before eating; keep stems on until then, they seal the fruit.","Store cold and dry — cherries decline fast at room temperature.","Pits are a choking hazard for small children."]},

{id:"apples",name:"Apples",tier:"dirty",rank:8,avg:"4+",
 n:{kcal:52,fiber:2.4,sugar:10.4,vitc:4.6,k:107,star:"Pectin — a soluble fiber with cholesterol-binding evidence"},
 red:["Commonly treated with the post-harvest fungicide diphenylamine and stored for months.","Waxed after harvest, which can seal surface residue in place.","Skin-on consumption is standard."],
 green:["One of the few Dirty Dozen items where peeling is a real mitigation — it removes a significant share of surface residue.","Excellent soluble fiber.","Organic apples are among the most widely stocked organic items in any store."],
 hand:["If buying conventional and worried, peel. You lose some fiber and gain a meaningful residue reduction.","Store cold and separate — apples release ethylene and will ripen everything nearby.","Cut apples brown from oxidation, not spoilage; a squeeze of lemon slows it."]},

{id:"blackberries",name:"Blackberries",tier:"dirty",rank:9,avg:"4+",
 n:{kcal:43,fiber:5.3,sugar:4.9,vitc:21,k:162,star:"Fiber 5.3 g — highest of any fruit on the Dirty Dozen"},
 red:["Went onto the Dirty Dozen almost immediately after the USDA began testing them in 2023.","Averaged more than four pesticides per sample.","Imported lots have shown residues of chemicals restricted on other crops."],
 green:["Outstanding fiber-to-sugar ratio — 5.3 g fiber against 4.9 g sugar is nearly unique in fruit.","Very high anthocyanin content.","Frozen organic is cheap year-round and nutritionally intact."],
 hand:["Extremely perishable. Buy for two or three days, not a week.","Never wash before storing — they collapse.","Check the bottom of the clamshell before buying; juice stains mean crushed fruit underneath."]},

{id:"pears",name:"Pears",tier:"dirty",rank:10,avg:"4+",
 n:{kcal:57,fiber:3.1,sugar:9.8,vitc:4.3,k:116,star:"Fiber 3.1 g, mostly in the skin"},
 red:["Thin skin, long controlled-atmosphere storage, repeated post-harvest treatment.","Often stored many months before sale, extending fungicide contact time.","Eaten skin-on."],
 green:["High fiber for a soft fruit.","Well tolerated by people with sensitive digestion.","Peeling is a workable mitigation for conventional fruit, at some fiber cost."],
 hand:["Pears ripen from the inside out and are picked hard on purpose — check ripeness at the neck, not the belly.","Ripen on the counter, then refrigerate.","A pear that's soft at the widest point is already overripe inside."]},

{id:"potatoes",name:"Potatoes",tier:"dirty",rank:11,avg:"2",
 n:{kcal:77,fiber:2.2,sugar:0.8,vitc:19.7,k:425,star:"Potassium 425 mg — more than a banana per 100 g"},
 red:["90% of samples carried chlorpropham, a sprout inhibitor banned in the European Union.","Fewer distinct pesticides than the rest of the list (two on average) but very high detection frequency for that one chemical.","Green skin or sprouts indicate solanine, a genuine natural toxin."],
 green:["Genuinely nutrient-dense — high potassium, real vitamin C, and more protein than most vegetables.","Peeling removes most of the chlorpropham, which sits on the skin.","Organic potatoes are inexpensive relative to other organic swaps."],
 hand:["Store cool, dark and dry — but NOT in the refrigerator. Cold converts starch to sugar, which raises acrylamide formation when you fry or roast them.","Never store with onions; onions accelerate sprouting.","Cut away any green skin or sprouts entirely. If a potato is extensively green, discard it."]},

{id:"blueberries",name:"Blueberries",tier:"dirty",rank:12,avg:"4+",
 n:{kcal:57,fiber:2.4,sugar:10,vitc:9.7,k:77,star:"Anthocyanins — among the highest of any common fruit"},
 red:["Back on the Dirty Dozen this year with traces of several higher-toxicity pesticides.","Waxy bloom on the skin can hold residue and isn't removed by rinsing.","Imported lots have shown residues of chemicals long banned on other crops."],
 green:["The anthocyanin and cognitive-health research on blueberries is among the strongest for any single fruit.","Frozen wild blueberries are typically higher in anthocyanins than fresh cultivated, and much cheaper.","Low glycemic impact despite the sugar figure."],
 hand:["The dusty white bloom is natural and a freshness sign — don't try to wash it off.","Wash immediately before eating only.","Freeze straight from the clamshell; they don't clump."]},

/* ---------- WATCH LIST ---------- */
{id:"greenbeans",name:"Green beans",tier:"watch",rank:null,avg:"—",
 n:{kcal:31,fiber:2.7,sugar:3.3,vitc:12.2,k:211,star:"Vitamin K 43 mcg · folate 33 mcg"},
 red:["EWG flagged green beans specifically for a high overall toxicity score, placing them just outside the Dirty Dozen.","USDA tests from 2021–2022 found acephate — an organophosphate banned for use on this crop since 2011 — still present on samples.","Eaten whole, pod and all."],
 green:["Good fiber and vitamin K for very few calories.","Frozen green beans are picked and processed within hours and hold their nutrition well.","Cheap organic option in the frozen aisle."],
 hand:["Snap test: a fresh bean breaks cleanly with a crack. A bendy bean is old.","Store dry in the crisper; moisture causes rust spots.","Blanch before freezing or they turn to mush."]},

{id:"peppers",name:"Bell & hot peppers",tier:"watch",rank:null,avg:"—",
 n:{kcal:31,fiber:2.1,sugar:4.2,vitc:128,k:211,star:"Vitamin C 128 mg (red bell) — roughly triple an orange"},
 red:["Flagged alongside green beans for high overall pesticide toxicity, just below the Dirty Dozen cut.","Thin waxy skin, eaten raw and whole.","Many are imported from regions with different residue enforcement."],
 green:["Red bell peppers are one of the densest vitamin C sources in the entire produce section.","Very low calorie and high water content.","Capsaicin in hot varieties has real metabolic and analgesic research behind it."],
 hand:["Store whole and unwashed; cut peppers deteriorate within two days.","Red, yellow and orange are the same plant as green, just riper — and substantially higher in vitamin C.","Freeze sliced without blanching; texture softens but flavor holds."]},

/* ---------- CLEAN FIFTEEN ---------- */
{id:"pineapple",name:"Pineapple",tier:"clean",rank:1,avg:"low",
 n:{kcal:50,fiber:1.4,sugar:9.9,vitc:47.8,k:109,star:"Manganese 0.9 mg · bromelain enzyme"},
 red:["High sugar per serving.","Highly acidic — can irritate mouth sores or reflux.","The core is edible but tough; most people waste it."],
 green:["Cleanest item in the entire 2026 guide. Buy conventional without hesitation.","Thick armored rind is the reason — it's a physical barrier, not a farming difference.","Strong vitamin C and manganese."],
 hand:["Ripeness is smell, not color: a ripe pineapple smells sweet at the base.","Store cut pineapple cold and eat within four days.","Bromelain breaks down gelatin and tenderizes meat — useful as a marinade, useless in jello."]},

{id:"sweetcorn",name:"Sweet corn",tier:"clean",rank:2,avg:"low",
 n:{kcal:86,fiber:2.0,sugar:3.2,vitc:6.8,k:270,star:"Lutein and zeaxanthin — carotenoids concentrated in the retina"},
 red:["A small share of US sweet corn is grown from GMO seed. Buy organic if you want to avoid that — it's the only reliable route.","Higher starch and calories than most vegetables here.","Sugars convert to starch within hours of picking."],
 green:["Second cleanest item in the guide — the husk does the work.","Lutein and zeaxanthin content is genuinely good for a common vegetable.","Frozen corn is picked and frozen fast, so it often beats supermarket 'fresh'."],
 hand:["Refrigerate immediately and cook within two days; the sugar-to-starch conversion is fast and irreversible.","Leave the husk on until you cook it.","Grill in the husk — it steams the kernel and prevents drying."]},

{id:"avocado",name:"Avocado",tier:"clean",rank:3,avg:"low",
 n:{kcal:160,fiber:6.7,sugar:0.7,vitc:10,k:485,star:"Fat 14.7 g, mostly monounsaturated · potassium 485 mg"},
 red:["Highest calorie item in the produce section by a wide margin.","The skin carries surface bacteria that a knife drags straight into the flesh.","Avocado *oil* is a separate and serious problem — see the note below."],
 green:["Third cleanest in the guide. Thick leathery skin is a near-perfect barrier.","Outstanding fiber and potassium; more potassium per 100 g than a banana.","Fat content substantially increases carotenoid absorption from anything eaten alongside it."],
 hand:["Wash the skin before cutting. This is the one wash step people skip and it matters — the blade transfers whatever is on the rind into the flesh.","Ripen on the counter; refrigerate once it yields to gentle pressure to hold it two more days.","Check ripeness under the stem nub — green underneath means ready, brown means overripe."]},

{id:"papaya",name:"Papaya",tier:"clean",rank:4,avg:"low",
 n:{kcal:43,fiber:1.7,sugar:7.8,vitc:60.9,k:182,star:"Vitamin C 61 mg · papain enzyme · lycopene"},
 red:["Most Hawaiian papaya is GMO (engineered for ringspot virus resistance). Buy organic to avoid it.","Imported papaya has been linked to multiple Salmonella outbreaks — rind washing is not optional.","Sugar climbs sharply as it ripens."],
 green:["Fourth cleanest in the guide.","Excellent vitamin C and a good lycopene source.","Papain genuinely aids protein digestion."],
 hand:["Scrub the rind under running water before cutting — this is a documented outbreak vector, not a theoretical one.","Refrigerate cut fruit within two hours.","Seeds are edible and peppery, though most people discard them."]},

{id:"onions",name:"Onions",tier:"clean",rank:5,avg:"low",
 n:{kcal:40,fiber:1.7,sugar:4.2,vitc:7.4,k:146,star:"Quercetin — concentrated in the outer layers"},
 red:["Onions have been the source of large multistate Salmonella outbreaks in recent years.","Not a significant nutrient source in typical quantities.","Can trigger reflux and IBS symptoms (high FODMAP)."],
 green:["Fifth cleanest in the guide — papery layers get discarded along with any surface residue.","Quercetin content is real and concentrated in the outermost edible layers, so don't over-peel.","Cheap, keeps for weeks, and improves nearly everything."],
 hand:["Store dry, dark, and ventilated — never in a sealed bag or the fridge.","Never store next to potatoes; each accelerates the other's spoilage.","Refrigerate for 30 minutes before cutting to reduce tearing."]},

{id:"peas",name:"Frozen sweet peas",tier:"clean",rank:null,avg:"low",
 n:{kcal:81,fiber:5.1,sugar:5.7,vitc:40,k:244,star:"Protein 5.4 g · fiber 5.1 g"},
 red:["Higher starch and calories than most vegetables on the clean list.","Some frozen preparations add salt or butter sauce — check the bag.","High FODMAP in larger portions."],
 green:["On the Clean Fifteen — the pod protects the peas until processing.","Unusual protein and fiber content for a vegetable.","Frozen is the recommended form; they're processed within hours of picking."],
 hand:["Cook from frozen. Thawing first makes them mushy.","Keep at a steady freezer temperature; repeated thaw cycles ruin texture.","No washing needed — they're blanched before freezing."]},

{id:"asparagus",name:"Asparagus",tier:"clean",rank:null,avg:"low",
 n:{kcal:20,fiber:2.1,sugar:1.9,vitc:5.6,k:202,star:"Folate 52 mcg · vitamin K 42 mcg"},
 red:["Expensive relative to its nutrient contribution.","Short season; out-of-season imports travel a long way.","Harmless but notorious effect on urine odor."],
 green:["On the Clean Fifteen — a fast growing cycle means a short spray window.","Excellent folate for very few calories.","Contains inulin, a prebiotic fiber."],
 hand:["Store standing upright in an inch of water like cut flowers, loosely covered. It stays crisp days longer.","Snap rather than cut the woody end — it breaks naturally where tenderness begins.","Thin spears are not younger, just a different variety; thickness doesn't indicate age."]},

{id:"cabbage",name:"Cabbage",tier:"clean",rank:null,avg:"low",
 n:{kcal:25,fiber:2.5,sugar:3.2,vitc:36.6,k:170,star:"Vitamin C 37 mg · vitamin K 76 mcg · glucosinolates"},
 red:["Can cause significant bloating and gas.","Very high vitamin K, which matters if you take warfarin — keep intake consistent rather than avoiding it.","Cooking too long produces sulfur compounds and destroys much of the vitamin C."],
 green:["On the Clean Fifteen — you discard the outer leaves that took the spray.","Glucosinolates are the well-studied compounds behind cruciferous vegetable research.","One of the cheapest vegetables per pound and keeps for weeks."],
 hand:["Discard the outer two leaves. That's both the residue mitigation and standard practice.","Store whole and uncut; a cut head loses vitamin C quickly.","Fermenting into sauerkraut adds live cultures and preserves the vitamin C."]},

{id:"cauliflower",name:"Cauliflower",tier:"clean",rank:null,avg:"low",
 n:{kcal:25,fiber:2.0,sugar:1.9,vitc:48.2,k:299,star:"Vitamin C 48 mg · glucosinolates"},
 red:["Dense florets can trap water and grit; rinse thoroughly.","High FODMAP — a common IBS trigger.","Riced and pre-cut versions spoil within days."],
 green:["On the Clean Fifteen — leaves and dense head shield the florets.","Surprisingly high vitamin C, comparable to citrus per 100 g.","Very low carbohydrate, which is why it works as a rice or potato substitute."],
 hand:["Store stem-down so condensation doesn't pool in the florets and cause brown spots.","Brown spots are oxidation, not rot — trim and use.","Roast rather than boil; boiling leaches the vitamin C into the water."]},

{id:"watermelon",name:"Watermelon",tier:"clean",rank:null,avg:"low",
 n:{kcal:30,fiber:0.4,sugar:6.2,vitc:8.1,k:112,star:"Lycopene ~4,500 mcg · citrulline"},
 red:["Almost no fiber — 0.4 g per 100 g is the lowest on this page.","The rind is a documented Salmonella vector when a knife carries surface bacteria into the flesh.","Cut watermelon at room temperature is a bacterial growth medium."],
 green:["On the Clean Fifteen — the rind is a complete barrier.","Higher lycopene than raw tomatoes.","92% water, which makes it genuinely useful for hydration."],
 hand:["Scrub the rind before cutting. Every time. This is the single most-skipped food-safety step in American kitchens.","Refrigerate cut melon within two hours and eat within four days.","A ripe melon has a creamy yellow ground spot and sounds hollow."]},

{id:"mango",name:"Mango",tier:"clean",rank:null,avg:"low",
 n:{kcal:60,fiber:1.6,sugar:13.7,vitc:36.4,k:168,star:"Vitamin C 36 mg · vitamin A 54 mcg RAE"},
 red:["Highest sugar of the Clean Fifteen at 13.7 g per 100 g.","Mango skin contains urushiol — the same compound as poison ivy. People sensitive to poison ivy can react to the peel.","Frequently imported and hot-water treated for fruit fly control."],
 green:["On the Clean Fifteen — thick inedible skin.","Strong vitamin C and vitamin A together.","Frozen mango is picked ripe and is often better than underripe fresh imports."],
 hand:["Wash and peel; don't eat the skin.","Ripen on the counter — a ripe mango yields slightly and smells sweet at the stem.","Refrigerating an unripe mango stops ripening permanently."]},

{id:"banana",name:"Banana",tier:"clean",rank:null,avg:"low",
 n:{kcal:89,fiber:2.6,sugar:12.2,vitc:8.7,k:358,star:"Potassium 358 mg · vitamin B6 0.4 mg"},
 red:["High sugar and calories relative to other fruit here.","Ripeness dramatically changes the glycemic impact — a spotted banana hits much harder than a green one.","Conventional banana farming has real labor and environmental concerns even though residue on the fruit is low."],
 green:["On the Clean Fifteen — thick peel you discard.","Excellent potassium and B6.","Green bananas contain resistant starch, which behaves like fiber and feeds gut bacteria."],
 hand:["Store apart from other produce — bananas are among the strongest ethylene emitters and will ripen everything nearby.","Refrigeration blackens the peel but the fruit inside is fine.","Freeze peeled for smoothies; never freeze in the peel."]},

{id:"carrots",name:"Carrots",tier:"clean",rank:null,avg:"low",
 n:{kcal:41,fiber:2.8,sugar:4.7,vitc:5.9,k:320,star:"Vitamin A 835 mcg RAE — highest of any common vegetable"},
 red:["Root crop, so it sits in whatever is in the soil — though testing still places it on the clean list.","Baby carrots are cut from full carrots and often rinsed in a chlorine solution, which is permitted and rinsed off.","Whole carrots are a choking hazard for young children."],
 green:["On the Clean Fifteen.","The single best vitamin A source in the produce section.","Beta-carotene absorption roughly triples when eaten with fat — pair with dressing, oil, or avocado."],
 hand:["Remove green tops before storing; they pull moisture from the root.","Store in water in a sealed container to keep them crisp for weeks.","White 'blush' on baby carrots is dehydration, not mold."]},

{id:"mushrooms",name:"Mushrooms",tier:"clean",rank:null,avg:"low",
 n:{kcal:22,fiber:1.0,sugar:2.0,vitc:2.1,k:318,star:"Selenium 9 mcg · B vitamins · vitamin D if UV-exposed"},
 red:["Never forage without expert identification — the margin for error is fatal.","Spoil quickly and develop slime that isn't always visible in the package.","Not a fruit or vegetable nutritionally; low in most vitamins."],
 green:["On the Clean Fifteen — grown indoors in controlled substrate.","Set them in direct sunlight for 15–30 minutes before cooking and they generate meaningful vitamin D. This is a real, replicable effect.","Excellent potassium and selenium for 22 calories."],
 hand:["Store in a paper bag, never plastic. Plastic traps moisture and they turn slimy within days.","Wipe or briefly rinse — the old advice that they absorb water like sponges is overstated, but don't soak them.","Cook thoroughly; raw mushrooms are poorly digested."]},

{id:"kiwi",name:"Kiwi",tier:"clean",rank:null,avg:"low",
 n:{kcal:61,fiber:3.0,sugar:9.0,vitc:92.7,k:312,star:"Vitamin C 93 mg — more than an orange"},
 red:["Contains actinidin, which can cause mouth tingling and is a genuine allergen for some people.","Higher sugar than the vegetables on this list.","The fuzzy skin is edible but unpleasant to most."],
 green:["On the Clean Fifteen.","More vitamin C than an orange, plus 3 g of fiber and strong potassium.","Two kiwi before bed has modest but real sleep-quality evidence behind it."],
 hand:["Ripen on the counter with a banana nearby to speed it up.","Ripe kiwi yields to gentle thumb pressure; hard kiwi is unpleasantly acidic.","Actinidin prevents dairy from setting — don't add raw kiwi to yogurt in advance."]},

/* ---------- MID / UNRANKED IN THIS BUILD ---------- */
{id:"tomatoes",name:"Tomatoes",tier:"mid",rank:null,avg:"—",
 n:{kcal:18,fiber:1.2,sugar:2.6,vitc:13.7,k:237,star:"Lycopene ~2,570 mcg"},
 red:["Not on the Clean Fifteen — a thin edible skin and long spray season put it in the middle range.","Cherry tomatoes were among the crops the USDA newly sampled for the 2026 data.","Acidic enough to aggravate reflux."],
 green:["Lycopene becomes substantially more bioavailable when cooked with fat — canned and cooked tomatoes beat raw on this measure.","Very low calorie, good potassium.","Easy and cheap to grow, which sidesteps the question entirely."],
 hand:["Never refrigerate a whole tomato. Cold below about 55°F destroys the aroma compounds permanently and turns the flesh mealy.","Store stem-side down on the counter, out of direct sun.","Refrigerate only after cutting, and bring back to room temperature before eating."]},

{id:"celery",name:"Celery",tier:"mid",rank:null,avg:"—",
 n:{kcal:16,fiber:1.6,sugar:1.3,vitc:3.1,k:260,star:"Naturally high in nitrates and sodium"},
 red:["Historically a high-residue crop; grooved stalks trap residue where rinsing doesn't reach.","'Celery juice' health claims are not supported by evidence.","Naturally high in sodium relative to other vegetables."],
 green:["Very low calorie with good potassium.","'Celery powder' in cured meats is just a nitrate source — the same chemistry as added nitrites, despite the cleaner label.","Cheap and long-keeping."],
 hand:["Rinse between the ribs, not just over the outside — the grooves are the problem.","Wrap in foil rather than plastic; it stays crisp for weeks.","Limp celery revives in ice water for an hour."]},

{id:"cucumbers",name:"Cucumbers",tier:"mid",rank:null,avg:"—",
 n:{kcal:15,fiber:0.5,sugar:1.7,vitc:2.8,k:147,star:"95% water"},
 red:["Newly sampled by the USDA for the 2026 data and not on the Clean Fifteen.","Conventional cucumbers are usually waxed, which seals surface residue in place.","Almost no meaningful nutrient density."],
 green:["Lowest calorie item on this page.","Peeling removes the wax and most surface residue at little nutritional cost.","English cucumbers are sold in plastic film instead of wax."],
 hand:["Store at cool room temperature, not deep in the fridge — cucumbers suffer chilling injury below about 50°F.","Peel conventional cucumbers if you're not buying organic.","Keep away from tomatoes and bananas; ethylene turns them yellow fast."]},

{id:"lettuce",name:"Lettuce",tier:"mid",rank:null,avg:"—",
 n:{kcal:17,fiber:2.1,sugar:1.2,vitc:4,k:247,star:"Vitamin A 436 mcg RAE (romaine) · vitamin K 102 mcg"},
 red:["Newly sampled for the 2026 data. Leafy greens generally sit high in the guide.","Romaine has been at the center of repeated multistate E. coli outbreaks.","Iceberg is nutritionally close to water."],
 green:["Romaine and darker leaf varieties carry real vitamin A and K.","Very low calorie.","Grows fast at home in a window box."],
 hand:["Bagged pre-washed lettuce should not be re-washed at home — you add contamination risk rather than removing it.","Whole heads: separate leaves, wash individually, spin bone dry.","Store with a dry paper towel to absorb condensation."]},

{id:"oranges",name:"Oranges",tier:"mid",rank:null,avg:"—",
 n:{kcal:47,fiber:2.4,sugar:9.4,vitc:53.2,k:181,star:"Vitamin C 53 mg · hesperidin"},
 red:["Newly sampled for the 2026 data.","Juice strips the fiber and concentrates the sugar — a glass is several oranges with none of the fill.","Citrus can interfere with some medications (grapefruit most severely)."],
 green:["Thick peel is a strong barrier, which is why citrus generally tests well.","Excellent vitamin C plus real fiber if you eat the fruit rather than drink it.","The white pith holds most of the hesperidin — don't obsessively remove it."],
 hand:["Store at cool room temperature for a week, or refrigerate for a month.","Wash the peel before zesting — zest is the one time you eat the outside.","Roll firmly on the counter before juicing to break the vesicles."]},

{id:"broccoli",name:"Broccoli",tier:"mid",rank:null,avg:"—",
 n:{kcal:34,fiber:2.6,sugar:1.7,vitc:89.2,k:316,star:"Vitamin C 89 mg · sulforaphane precursors"},
 red:["Dense florets trap both residue and grit.","High FODMAP; a common bloating trigger.","Very high vitamin K — relevant if you take warfarin."],
 green:["Sulforaphane is one of the most studied compounds in nutritional science.","Nearly as much vitamin C as an orange, plus fiber and potassium.","Steaming briefly preserves far more sulforaphane than boiling."],
 hand:["Soak florets head-down in cold water for a few minutes to release trapped grit, then rinse.","Steam 3–4 minutes. Boiling leaches vitamin C and destroys the sulforaphane pathway.","Yellowing florets mean it's past prime but still safe."]},

{id:"sweetpotato",name:"Sweet potatoes",tier:"mid",rank:null,avg:"—",
 n:{kcal:86,fiber:3.0,sugar:4.2,vitc:2.4,k:337,star:"Vitamin A 709 mcg RAE — a full day's requirement in one medium potato"},
 red:["Higher carbohydrate and calorie than most vegetables here.","Root crop with soil contact.","'Yam' on US labels almost always means sweet potato; true yams are a different species."],
 green:["Exceptional vitamin A, comparable to carrots.","Beta-carotene absorption rises sharply with a little fat.","Skin holds most of the fiber — scrub and eat it."],
 hand:["Store cool and dark but NOT refrigerated — cold causes a hard core that never softens when cooked.","Roasting develops far more sweetness than boiling because of enzymatic starch conversion.","Keep away from onions."]},

{id:"raspberries",name:"Raspberries",tier:"mid",rank:null,avg:"—",
 n:{kcal:52,fiber:6.5,sugar:4.4,vitc:26.2,k:151,star:"Fiber 6.5 g — the highest of any common fruit"},
 red:["Extremely fragile; mold spreads through a container within a day.","Hollow structure traps water and residue.","Blackberries, their close relative, are on the Dirty Dozen — treat raspberries with similar caution."],
 green:["Highest fiber of any common fruit at 6.5 g per 100 g, against only 4.4 g sugar.","High anthocyanins and ellagic acid.","Frozen organic is far cheaper and nutritionally intact."],
 hand:["Buy for two days maximum. Check the underside of the container for juice stains.","Never wash before storing.","Spread on a tray to freeze before bagging."]},

{id:"cantaloupe",name:"Cantaloupe",tier:"mid",rank:null,avg:"—",
 n:{kcal:34,fiber:0.9,sugar:7.9,vitc:36.7,k:267,star:"Vitamin A 169 mcg RAE · vitamin C 37 mg"},
 red:["The netted rind is the highest-risk produce surface in the store — its texture harbors bacteria and it has caused deadly Listeria and Salmonella outbreaks.","Very low fiber.","Cut melon left out is one of the fastest bacterial growth media in a kitchen."],
 green:["Strong vitamin A and C together for 34 calories.","Good potassium.","High water content."],
 hand:["Scrub the rind with a clean brush under running water before cutting. This is not optional — the netting is the documented outbreak vector.","Refrigerate cut melon within two hours and eat within three days.","A ripe cantaloupe smells sweet at the stem end and gives slightly."]},

{id:"grapefruit",name:"Grapefruit",tier:"mid",rank:null,avg:"—",
 n:{kcal:42,fiber:1.6,sugar:6.9,vitc:31.2,k:135,star:"Lycopene in pink and red varieties"},
 red:["Interacts dangerously with a long list of medications including statins, some blood pressure drugs and immunosuppressants. Check with a pharmacist before making it a habit.","Acidic enough to erode enamel with frequent consumption.","Bitterness leads many people to add sugar, defeating the point."],
 green:["Thick peel is a strong barrier.","Good vitamin C and lycopene in the pink varieties.","Low sugar for citrus."],
 hand:["The drug interaction is real and can be serious — this is the one item on this page where a pharmacy conversation is warranted.","Store at room temperature up to a week or refrigerated for several.","Heaviness for its size indicates juiciness."]},

{id:"zucchini",name:"Summer squash & zucchini",tier:"mid",rank:null,avg:"—",
 n:{kcal:17,fiber:1.0,sugar:2.5,vitc:17.9,k:261,star:"Vitamin C 18 mg for 17 calories"},
 red:["A small share of US summer squash is grown from GMO seed. Buy organic to avoid it.","Thin edible skin with no barrier.","Very high water content means it dilutes and waters down dishes if not salted first."],
 green:["Very low calorie with decent vitamin C and potassium.","Skin holds most of the nutrients and is entirely edible.","Grows prolifically and cheaply in home gardens."],
 hand:["Store dry in the crisper; moisture causes soft spots fast.","Salt and drain sliced zucchini for 20 minutes before cooking to avoid a watery result.","Smaller squash have better texture; oversized ones turn seedy and bland."]},

{id:"eggplant",name:"Eggplant",tier:"mid",rank:null,avg:"—",
 n:{kcal:25,fiber:3.0,sugar:3.5,vitc:2.2,k:229,star:"Nasunin — an anthocyanin concentrated in the purple skin"},
 red:["Absorbs cooking oil dramatically — a low-calorie vegetable that routinely arrives as a high-calorie dish.","Nightshade family; a small number of people report sensitivity.","Bitter when overmature."],
 green:["Good fiber for very few calories.","Nasunin in the skin is a well-characterized antioxidant — don't peel it.","Thicker skin than most mid-tier items."],
 hand:["Store at cool room temperature, not the fridge — eggplant suffers chilling injury.","Salt sliced eggplant for 30 minutes to draw out moisture and reduce oil absorption.","Choose firm, glossy, and heavy for its size; dull skin means old."]},

{id:"plums",name:"Plums",tier:"mid",rank:null,avg:"—",
 n:{kcal:46,fiber:1.4,sugar:9.9,vitc:9.5,k:157,star:"Anthocyanins in the skin · sorbitol"},
 red:["Roughly 90% of plum samples carried fludioxonil, the PFAS-class fungicide that was the most frequently detected pesticide across all produce in 2026.","Thin edible skin.","Sorbitol content has a laxative effect in quantity — the reason prunes work."],
 green:["Good anthocyanin content concentrated in the skin.","Low calorie for a stone fruit.","Dried plums have strong evidence for bone density."],
 hand:["Ripen on the counter, then refrigerate.","Wash right before eating.","The dusty bloom on the skin is natural and indicates freshness."]},

{id:"honeydew",name:"Honeydew",tier:"mid",rank:null,avg:"—",
 n:{kcal:36,fiber:0.8,sugar:8.1,vitc:18,k:228,star:"Potassium 228 mg · 90% water"},
 red:["Same rind-to-flesh contamination pathway as cantaloupe and watermelon.","Very low fiber.","Notoriously hard to judge for ripeness, so a high share get thrown out."],
 green:["Good vitamin C and potassium.","Smooth rind is easier to scrub effectively than cantaloupe's netting.","High water content."],
 hand:["Scrub the rind before cutting.","Ripe honeydew feels slightly waxy or tacky, not slick — that's the reliable test.","Refrigerate cut melon within two hours."]},

{id:"tomatillos",name:"Tomatillos",tier:"mid",rank:null,avg:"—",
 n:{kcal:32,fiber:1.9,sugar:3.9,vitc:11.7,k:268,star:"Withanolides · niacin"},
 red:["Newly sampled by the USDA for the 2026 data.","The sticky residue under the husk is natural but traps whatever it contacts.","Unripe raw tomatillos are high in solanine-family compounds; cook them."],
 green:["Papery husk gets discarded, taking surface exposure with it.","Good potassium and fiber for 32 calories.","Roasting deepens the flavor considerably."],
 hand:["Remove the husk and wash off the sticky film thoroughly — it's the whole point of washing them.","Store husk-on in a paper bag in the fridge for weeks.","Firm and filling the husk means ripe; loose and rattling means old."]}
];

const PLU_RULES = [
  {code:"4 digits (e.g. 4011)", label:"Conventionally grown", tone:"neutral",
   note:"The standard code. Says nothing about pesticides beyond the fact that conventional growing rules applied."},
  {code:"5 digits starting with 9 (e.g. 94011)", label:"Certified organic", tone:"good",
   note:"The 9 prefix is the organic indicator. This is the fastest way to verify organic on loose produce with no packaging to read."},
  {code:"5 digits starting with 8 (e.g. 84011)", label:"Was intended for GMO — never adopted", tone:"neutral",
   note:"Widely repeated online as the 'GMO code.' It was reserved but the industry never used it in practice, so its absence tells you nothing. The reliable route to avoiding GMO produce is buying organic."}
];
