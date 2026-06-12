// To add a new insight card, append a new object to this array.
// Each insight has:
//   - title:    headline of the insight
//   - location: badge label (city / district)
//   - content:  article body (plain text or simple HTML)
//   - then:     { date, image, url } — historical snapshot (left image)
//   - now:      { date, image, url } — current snapshot (right image)
//   - references: [{ label, url }] — supporting news / map links
// If `image` is empty (""), a placeholder is rendered in its place.

const INSIGHTS = [
    {
        title: "Deluge at the Border: Sahibi River Basin Swallows Farmlands Whole",
        location: "Gurgaon",
        content:
            "Recent geospatial data paints a grim picture at the Delhi-Haryana border, where massive inundation has completely rewritten the landscape along the Sahibi river since 2020. Satellite tracking reveals a staggering vegetation loss of -1.067, directly corresponding to an alarming surface water spike of 0.897 that has submerged vast tracts of former agricultural land. What were once distinctly patterned green fields just five years ago are now entirely drowned beneath a murky, stagnant expanse. This severe ecological disruption raises immediate concerns about blocked drainage channels, altered natural basins, and the escalating flood risks threatening the border's fragile ecosystem.",
        then: {
            date: "31st Aug, 2022",
            image: "./outputs/gurgaon/sahibi_river/2020.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=5y&opacity=0.30&historical=timeline&speed=1200&lat=28.50535&lng=76.93170&zoom=16.00&historicalDate=2022-08-31",
        },
        now: {
            date: "21st Sep, 2022",
            image: "./outputs/gurgaon/sahibi_river/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=5y&opacity=0.30&historical=timeline&speed=1200&lat=28.50535&lng=76.93170&zoom=16.00&historicalDate=2022-09-21",
        },
        references: [
            { label: "India Today", url: "https://www.indiatoday.in/india/story/gurugram-gurgaon-urban-floods-waterlogging-sahibi-river-lost-aravalli-hills-delhi-haryana-hydrology-natural-drainage-2781896-2025-09-08" },
            { label: "Indian Express", url: "https://indianexpress.com/article/explained/why-even-moderate-rainfall-leads-to-flooding-in-gurgaon-10131520/" },
        ],
    },
    {
        title: "Vanishing Oasis: Yamuna's Retreat Leaves Okhla Bird Sanctuary Parched",
        location: "Gautam Buddha Nagar",
        content:
            "Once renowned as a vital haven for over 300 bird species, the Okhla Bird Sanctuary in Gautam Buddha Nagar is facing a severe ecological crisis as its primary water source rapidly vanishes. Geospatial analysis comparing 2015 to 2025 reveals a drastic water retreat across the Yamuna riverbed, marked by a massive negative water delta of -1.137. Where a sprawling lake once stood, satellite imagery now exposes a combination of encroaching urban development (0.688) and expanding tracts of bare, exposed soil (0.645). This devastating ten-year drying trend not only tarnishes the sanctuary's former charm but threatens to permanently destroy a crucial ecological wetland beneath the pressure of regional concrete sprawl.",
        then: {
            date: "10th Aug, 2017",
            image: "./outputs/gautam_buddha_nagar/okhla_bird_sanctuary/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=28.55676&lng=77.32302&zoom=15.00&historicalDate=2017-08-10",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gautam_buddha_nagar/okhla_bird_sanctuary/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.55&historical=timeline&speed=1200&lat=28.55676&lng=77.32302&zoom=15.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "New Indian Express", url: "https://www.newindianexpress.com/states/delhi/2025/Jun/06/from-feathered-paradise-to-forgotten-dump-okhla-sanctuary-loses-charm" },
        ],
    },
    {
        title: "Engineered Ecology: Noida's 'Wetland Park' Masks Severe Natural Water Retreat",
        location: "Gautam Buddha Nagar",
        content:
            "Recent geospatial tracking of Noida's City Park between 2015 and 2025 reveals a startling ecological paradox behind the much-touted 'Waste to Wealth' wetland project. While aerial imagery showcases new manicured ponds and intricate walking paths, the site has actually suffered a massive natural surface water deficit of -1.076. This severe water retreat is directly tied to the heavy recreational landscaping of the area, which is marked by an urban expansion surge of 0.717. Ultimately, beneath the eco-friendly branding, aggressive concretization has paved over a raw natural basin to create a purely cosmetic, highly engineered recreational space.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/gautam_buddha_nagar/noida_city_park/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.35&historical=base&speed=1200&lat=28.59664&lng=77.35729&zoom=17.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gautam_buddha_nagar/noida_city_park/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.35&historical=base&speed=1200&lat=28.59664&lng=77.35729&zoom=17.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Google Maps", url: "https://maps.app.goo.gl/7TQGL4jjF5YmvLJMA" },
        ],
    },
    {
        title: "Flight Path Over Farmland: Jewar's Mega-Airport Eradicates Agrarian Green Belt",
        location: "Gautam Buddha Nagar",
        content:
            "Recent satellite imagery from 2015 to 2025 captures the sheer, unapologetic scale of infrastructural terraforming at the Noida International Airport site in Jewar. What was once an uninterrupted stretch of fertile agricultural land has been completely paved over, marked by a significant vegetation drop of -0.426. In its place, massive runways and terminal complexes have aggressively taken root, driving a sharp urban expansion spike of 0.287 and leaving vast tracts of bare, stripped soil (0.277) in their wake. While this aviation mega-project promises unprecedented economic capacity for the region, the geospatial data bluntly illustrates the absolute, irreversible sacrifice of the local agrarian ecosystem required to get it off the ground.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/gautam_buddha_nagar/noida_international_airport/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.25&historical=base&speed=1200&lat=28.17355&lng=77.61789&zoom=15.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gautam_buddha_nagar/noida_international_airport/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.55&historical=base&speed=1200&lat=28.17355&lng=77.61789&zoom=15.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Google Maps", url: "https://maps.app.goo.gl/HgYnoMjBkXQBpgHj9" },
        ],
    },
    {
        title: "Solar Sprawl: Maruti's ‘Green' Expansion Paves Over Manesar's Natural Cover",
        location: "Gurgaon",
        content:
            "Recent satellite tracking of IMT Manesar between 2020 and 2025 exposes the harsh ecological trade-off behind Maruti Suzuki's sprawling plant and sports complex development. While the installation of massive new solar arrays paints a picture of sustainable modernization, geospatial data reveals this infrastructure boom has driven a severe vegetation plunge of -0.943. The aggressive land grab for these panel installations and expanded facilities has triggered an urban surge of 0.474, systematically stripping away the area's remaining scrublands. Ultimately, the corporate push for renewable power and expanded operational capacity has been achieved by permanently suffocating the local, living ecosystem beneath glass, metal, and concrete.",
        then: {
            date: "8th Jan, 2020",
            image: "./outputs/gurgaon/imt_manesar/2020.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.45&historical=timeline&speed=1200&lat=28.36679&lng=76.89807&zoom=16.00&historicalDate=2020-01-08",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gurgaon/imt_manesar/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.45&historical=timeline&speed=1200&lat=28.36679&lng=76.89807&zoom=16.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Google Maps", url: "https://maps.app.goo.gl/5bKL5rnrKbe5iajK8" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maruti_Suzuki#:~:text=In%20November%202021%20Maruti%20Suzuki%20announce%20to%20set%20up%20of%20a%20big%20plant%20in%20IMT%20Kharkhoda%20in%20Sonipat%20district%20across%20900%20acres%20with%20an%20investment%20of%20%E2%82%B918%2C000%20crores.%5B42%5D" },
        ],
    },
    {
        title: "Supply Chain Chokehold: Mega-Warehouse Bulldozes Pataudi's Farmland",
        location: "Gurgaon",
        content:
            "Recent geospatial imagery from 2020 to 2025 lays bare the ruthless bulldozing of Gurugram's rural outskirts, where massive logistics warehouses have entirely swallowed once-lush agricultural plots in Ransika. Satellite tracking of this brutal industrial sprawl reveals a catastrophic vegetation plunge of -0.979 as gigantic commercial sheds aggressively pave over former orchards and crop fields. This unyielding terraforming has triggered a stark urban expansion spike of 0.415, replacing fertile, living soil with dead concrete and exposed dirt. Ultimately, this unapologetic land grab prioritizes corporate supply chains over environmental survival, permanently suffocating the local ecosystem to feed a relentless appetite for storage infrastructure.",
        then: {
            date: "8th Jan, 2020",
            image: "./outputs/gurgaon/bluedart_warehouse/2020.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.30&historical=base&speed=1200&lat=28.31117&lng=76.74496&zoom=18.00&historicalDate=2020-01-08",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gurgaon/bluedart_warehouse/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.55&historical=base&speed=1200&lat=28.31117&lng=76.74496&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Google Maps", url: "https://maps.app.goo.gl/xyGfAwA3weNfWXVx6" },
        ],
    },
    {
        title: "Commercial Sprawl: Gurugram's Retail Expansion Scrapes Away Green Cover",
        location: "Gurgaon",
        content:
            "Recent satellite imagery between 2020 and 2025 highlights the stark environmental cost of commercial development along Gurugram's Sheetla Mata Road. Geospatial data confirms that the construction of new commercial compounds — including the site housing the Orientbell Tiles Boutique — has driven a severe vegetation loss of -0.845 across the immediate area. This retail and warehousing expansion has directly replaced dense, natural scrubland with concrete infrastructure, triggering an urban spike of 0.145 and stripping the topsoil bare (0.203). While serving as a hub for local home development, the satellite feed exposes how rapidly these commercial clusters are erasing Gurugram's peripheral green patches.",
        then: {
            date: "8th Jan, 2020",
            image: "./outputs/gurgaon/sheetla_mata_road/2020.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.30&historical=timeline&speed=1200&lat=28.48704&lng=77.04336&zoom=17.00&historicalDate=2020-01-08",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gurgaon/sheetla_mata_road/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.50&historical=timeline&speed=1200&lat=28.48704&lng=77.04336&zoom=17.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Google Maps", url: "https://maps.app.goo.gl/6JQzv74cSkdZjhoy6" },
        ],
    },
    {
        title: "Concrete Harvest: 'Olive Greens' Construction Bulldozes Gurugram's Natural Belt",
        location: "Gurgaon",
        content:
            "Recent satellite tracking from 2020 to 2025 exposes the ironic ecological reality behind Gurugram's new 'Olive Greens' housing complex. What was once a sprawling, uninterrupted tract of raw agricultural land has been completely stripped, resulting in a severe vegetation loss of -0.601. The aggressive site clearance and ongoing construction have paved over the earth, driving an urban expansion surge of 0.148 and artificially trapping surface water (0.523) in disrupted drainage paths. Beneath the promise of a luxury residential hub, the geospatial data clearly illustrates the total, systematic eradication of the sector's authentic green cover to make way for high-end concrete.",
        then: {
            date: "8th Jan, 2020",
            image: "./outputs/gurgaon/olive_green/2020.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.15&historical=timeline&speed=1200&lat=28.47140&lng=76.99055&zoom=18.00&historicalDate=2020-01-08",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gurgaon/olive_green/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gurgaon/?basemap=osm&metric=vegetation_delta&unit=cells&period=5y&opacity=0.60&historical=timeline&speed=1200&lat=28.47140&lng=76.99055&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Google Maps", url: "https://maps.app.goo.gl/8g8UtovAPHeUdySk9" },
        ],
    },
    {
        title: "Toxic Terrain: Noida's Green Lung Butchered for a Massive Trash Mountain",
        location: "Gautam Buddha Nagar",
        content:
            "Geospatial tracking from 2015 to 2025 exposes a brutal environmental degradation in Mubarikpur, where a dense natural forest has been unapologetically transformed into a colossal civic dumping ground. Satellite data records a devastating vegetation wipeout of -0.640, as the lush canopy was systematically bulldozed and replaced by a rapidly expanding wasteland (Urban: 0.533). This gross mismanagement has deeply scarred the landscape, driving a massive spike in bare, contaminated soil (0.532) and triggering a sharp rise in the local pollution proxy (0.212). Instead of preserving vital green buffers, authorities have essentially choked a living ecosystem to death under thousands of tons of mounting garbage.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/gautam_buddha_nagar/noida_dumping_ground/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=28.48053&lng=77.45639&zoom=17.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gautam_buddha_nagar/noida_dumping_ground/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.55&historical=timeline&speed=1200&lat=28.48053&lng=77.45639&zoom=17.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/ghaziabad/noida-begins-temporary-dumping-of-waste-in-mubarakpur-village/articleshow/64770413.cms" },
        ],
    },
    {
        title: "Concrete Over Conservation: Urban Sprawl Chokes Dhanauri Wetlands Dry",
        location: "Gautam Buddha Nagar",
        content:
            "In a devastating ecological blow, recent satellite tracking from 2015 to 2025 reveals that the once-teeming Dhanauri Wetlands are rapidly collapsing under the weight of unregulated regional development. Geospatial data exposes a massive water retreat (-1.119 delta), reducing the sprawling bird sanctuary to fragmented, muddy puddles. This severe drying is directly fueled by aggressive, unchecked urban encroachment in the vicinity, which has recorded a sharp expansion surge of 0.592. As concrete relentlessly paves over natural drainage basins and exposed soil expands (0.389), this crucial natural heritage site is being systematically eradicated.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/gautam_buddha_nagar/dhanauri_wetlands/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=base&speed=1200&lat=28.33872&lng=77.62137&zoom=17.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/gautam_buddha_nagar/dhanauri_wetlands/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/gautam_buddha_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.45&historical=base&speed=1200&lat=28.33872&lng=77.62137&zoom=17.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "The Print", url: "https://theprint.in/ground-reports/jewar-airport-has-fuelled-a-fight-for-dhanauri-wetlands-up-now-has-to-balance-3-priorities/1816393/" },
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/noida/sarus-habitat-dhanauri-a-step-closer-to-being-notified-a-wetland/articleshow/92049188.cms" },
        ],
    },
    // ---- New insights ----
    {
        title: "Bellandur's Missing Water: Not a Drought, But a Deep Clean",
        location: "Bengaluru",
        content:
            "Satellite imagery spanning a decade reveals a chilling transformation at Bellandur Lake — once Bengaluru's largest and most pristine water body, it is now almost entirely smothered under a thick mat of water hyacinth and toxic sludge, with its open water surface shrinking dramatically between 2015 and 2025. Every day, nearly 260 million litres of untreated sewage — roughly 40–50% of the city's total output — pours into the lake, creating nutrient-rich conditions in which invasive water hyacinth thrives and native aquatic life collapses. Despite a government promise that the lake's rejuvenation would be completed by December 2024, the Bangalore Development Authority was forced to halt desilting work in May 2024 due to a complete exhaustion of funds, leaving the project unfinished and the NGT's court orders in limbo. A damning CPCB report filed with the NGT in April 2025 confirmed that over 90% of water bodies in Karnataka — most of them in Bengaluru — are in a state of neglect and fail to meet the pollution board's prescribed water quality standards. On the ground today, residents describe a foul-smelling, fenced-off lake bed where grass and hyacinth have replaced open water — a far cry from the thriving ecosystem visible in satellite images just ten years ago, and a stark warning of what unchecked urban growth can do to a city's natural lifeline.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/bengaluru/bellandur_lake/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=12.93479&lng=77.66817&zoom=16.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/bengaluru/bellandur_lake/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=12.93479&lng=77.66817&zoom=16.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Reddit Discussion", url: "https://www.reddit.com/r/bangalore/comments/1qpyqmg/whats_happening_to_bellandur_lake/" },
            { label: "YouTube Report", url: "https://youtu.be/Y4bW1QerzOE" },
            { label: "Asian Scientist", url: "https://www.asianscientist.com/2023/09/in-the-lab/why-does-this-indian-lake-foam-so-much/" },
            { label: "Earth5R", url: "https://earth5r.org/bellandur-lake-urban-restoration/" },
        ],
    },
    {
        title: "Multi-Crore Revival Fills TG Halli, But Bengaluru Gets Not a Drop",
        location: "Bengaluru",
        content:
            "Satellite imagery reveals a dramatic transformation at the Thippagondanahalli (TG Halli) Reservoir on the Arkavathi River, which is currently brimming with surface water after years of resembling a dry, barren basin. This visible surge is the direct result of recent favorable monsoons and an over Rs 230 crore rejuvenation project by the BWSSB that installed brand-new purification and pumping infrastructure. Yet, in a harsh twist of bureaucratic irony, actual water supply from TG Halli to the city has been completely halted. With the highly anticipated Yettinahole project link delayed and authorities now pivoting entirely to the Cauvery 5th Stage for city supply, this newly filled reservoir currently stands as a massive white elephant, holding water that remains utterly elusive to the taxpayers who funded its revival.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/bengaluru/arkavathi_river/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=12.97681&lng=77.34495&zoom=15.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/bengaluru/arkavathi_river/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=12.97681&lng=77.34495&zoom=15.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "New Indian Express", url: "https://www.newindianexpress.com/cities/bengaluru/2026/Apr/22/bengaluru-gets-cauvery-water-rs-230-crore-spent-on-thippagondanahalli-to-go-waste" },
            { label: "Bangalore Mirror", url: "https://bangaloremirror.indiatimes.com/bangalore/others/thippagondanahalli-halli-fully-revived-but-water-remains-elusive/articleshow/120415761.cms" },
        ],
    },
    {
        title: "City's Treated Sewage Is Now Nelamangala's Lifeline",
        location: "Bengaluru",
        content:
            "Satellite data confirms a massive shift at Nelamangala's Sondekoppa Lake, which has visibly transformed from a barren depression into a brimming waterbody. This sudden surge isn't a natural monsoon miracle, but the direct result of the state government's recently commissioned Vrishabhavathi Lift Irrigation Project. Authorities are now aggressively pumping over 240 MLD of secondary-treated wastewater from Bengaluru city to forcibly fill 70 parched lakes across the drought-prone Nelamangala and Tumakuru belts. While experts remain highly skeptical about the long-term ecological impact and potential heavy metal contamination from the treated sewage, the undeniable reality on the ground is that the region's decades-dry aquifers are finally beginning to recharge.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/bengaluru/sondekoppa_lake/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=13.01772&lng=77.38748&zoom=17.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/bengaluru/sondekoppa_lake/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=base&speed=1200&lat=13.01772&lng=77.38748&zoom=17.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Bangalore Mirror", url: "https://bangaloremirror.indiatimes.com/bangalore/civic/flowing-life-revitalising-bengalurus-thirsty-lakes/articleshow/103894854.cms" },
            { label: "New Indian Express", url: "https://www.newindianexpress.com/cities/bengaluru/2025/May/09/treated-water-to-flow-into-nelamangala-lakes" },
        ],
    },
    {
        title: "Adyar's Missing Water Is Actually Chennai's Biggest Green Victory",
        location: "Chennai",
        content:
            "Satellite data indicating a massive \"retreat\" of surface water at the Adyar Estuary isn't a sign of drying aquifers, but the spectacular result of a decade-long ecological overhaul. Driven by the Chennai Rivers Restoration Trust (CRRT), millions of tonnes of toxic sludge were dredged from the riverbed and engineered into elevated habitat islands. These newly formed mudflats were then aggressively seeded with over 57,000 mangrove saplings and native coastal vegetation. What algorithms flag as a severe \"water deficit\" is actually a deliberate, multi-crore engineering feat that has successfully converted a once-dead, sewage-choked waterway into a thriving, flood-buffering mangrove forest.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/chennai/adyar_river/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/chennai/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=timeline&speed=1200&lat=13.01385&lng=80.26315&zoom=16.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/chennai/adyar_river/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/chennai/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.15&historical=base&speed=1200&lat=13.01385&lng=80.26315&zoom=16.00&historicalDate=2025-12-18",
        },
        references: [],
    },
    {
        title: "Concrete Replaces Canopy in Anna Nagar's Rs 560-Crore Govt Revamp",
        location: "Chennai",
        content:
            "Satellite imagery reveals a stark ecological trade-off at Anna Nagar's Customs and GST Quarters, where dense, decades-old urban canopy has been wiped out to make way for the new \"Nandavanam\" Central Revenue complex. To construct 10 modern high-rise towers for tax officials — a massive Rs 560 crore redevelopment project — authorities entirely bulldozed the lush green cover that once defined the old low-density residential campus. What spatial algorithms flag as a severe plunge in the vegetation index is the undeniable, harsh reality of Chennai's vertical expansion. Modern infrastructure and centralized housing for bureaucrats has arrived, but it has come at the direct and permanent expense of one of the neighborhood's most vital green lungs.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/chennai/anicham/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/chennai/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=13.08889&lng=80.20582&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/chennai/anicham/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/chennai/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=13.08889&lng=80.20582&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "PIB India", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1884616" },
            { label: "Chennai Customs", url: "https://chennaicustoms.gov.in/wp-content/uploads/2023/05/Circular-regarding-allotment-of-quarters-at-C-R-Quarters-Anna-Nagar.pdf" },
        ],
    },
    {
        title: "Mountain of Trash Turns into Urban Forest at Kodungaiyur",
        location: "Chennai",
        content:
            "Satellite data revealing a dramatic, sprawling green canopy at the railway land near Captain Cotton Canal isn't just random weed growth — it's the exact site of Chennai's notorious Kodungaiyur dump yard undergoing a massive Rs 648-crore biomining and reclamation project. For decades, this 250-acre tract was a toxic, smoldering mountain of legacy waste that severely plagued North Chennai's air and groundwater. Driven by the Greater Chennai Corporation, heavy machinery has finally cleared millions of tonnes of garbage to actively pave the way for a lush, engineered urban forest and eco-park. What spatial algorithms flag as a sudden surge in the vegetation index is actually a historic environmental victory, transforming a hazardous wasteland into a vital green lung for the city.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/chennai/railway_land/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/chennai/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=13.12504&lng=80.26990&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/chennai/railway_land/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/chennai/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=13.12504&lng=80.26990&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "DT Next", url: "https://www.dtnext.in/news/chennai/chennai-corporation-raises-rs-20559-crore-through-green-municipal-bond-for-kodungaiyur-bio-mining" },
        ],
    },
    {
        title: "Massive Artificial Lake Appears in Kanpur as Rs 21,780-Crore Power Project Goes Live",
        location: "Kanpur Nagar",
        content:
            "Satellite imagery over Aswarmau reveals a massive new waterbody where dry farmland stood just a decade ago. This sudden inundation is not a flood, but the deliberate filling of the sprawling 46-lakh cubic meter raw water reservoir for the newly commissioned Ghatampur Thermal Power Project (NUPPL). Fed by a 44-kilometer pipeline drawing from the West Allahabad Branch Canal, this colossal twin-basin acts as the essential cooling lifeline for the Rs 21,780-crore, 1,980 MW supercritical thermal plant. As Unit-1 finally goes live to meet Uttar Pradesh's soaring electricity demands, spatial algorithms are flagging the site as a massive \"water gain\" — a stark, undeniable visualization of how national mega-infrastructure permanently redraws the local ecological map.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kanpur_nagar/nuppl_lake/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=25.97461&lng=80.17256&zoom=16.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kanpur_nagar/nuppl_lake/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=25.97461&lng=80.17256&zoom=16.00&historicalDate=2025-12-18",
        },
        references: [],
    },
    {
        title: "Panki's Dormant Wasteland Floods to Power Kanpur's New 660-MW Mega Plant",
        location: "Kanpur Nagar",
        content:
            "Satellite data revealing a massive new waterbody over the industrial belts of Panki isn't a flood or a sudden wetland regeneration — it's the deliberate reactivation of the site's legacy fly ash pond. Following the retirement of the older units in 2018, this massive basin sat largely dry and barren. However, with the newly commissioned 660 MW supercritical Panki Thermal Power Station finally going live, millions of liters of water are once again being pumped in to drive the massive ash handling and recovery systems. What spatial algorithms flag as a drastic \"water gain\" is simply the undeniable, ground-level footprint of Uttar Pradesh firing up one of its oldest power hubs for a modern era.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kanpur_nagar/panki_fly_ash/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=26.47114&lng=80.23154&zoom=17.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kanpur_nagar/panki_fly_ash/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=26.47114&lng=80.23154&zoom=17.00&historicalDate=2025-12-18",
        },
        references: [],
    },
    {
        title: "Concrete Replaces Crops for Kanpur's Rs 21,780-Crore Mega Power Plant",
        location: "Kanpur Nagar",
        content:
            "Satellite imagery reveals a stark ecological trade-off at Aswarmau in Kanpur Nagar, where nearly 1,000 hectares of lush agricultural land has been entirely wiped out by heavy industry. What spatial algorithms flag as a severe plunge in the vegetation index is the sprawling, concrete footprint of the newly commissioned Ghatampur Thermal Power Project (NUPPL). To secure Uttar Pradesh's energy future with this massive 1,980 MW supercritical coal plant, authorities had to permanently bulldoze the region's established farming canopy to make way for massive boiler units and cooling towers. This dramatic green deficit serves as the undeniable, ground-level cost of rapid national infrastructure expansion.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kanpur_nagar/nuppl_power_plant/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=25.97254&lng=80.19043&zoom=16.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kanpur_nagar/nuppl_power_plant/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=25.97254&lng=80.19043&zoom=16.00&historicalDate=2025-12-18",
        },
        references: [],
    },
    {
        title: "Concrete Replaces Canopy for Panki's New 660-MW Mega Power Plant",
        location: "Kanpur Nagar",
        content:
            "The dramatic disappearance of open green space at the Panki Power House site is the sprawling concrete footprint of Uttar Pradesh's new 660 MW supercritical thermal plant. Built directly over the vacant premises of the defunct 1970s-era station, this multi-crore UPRVUNL mega-project has permanently replaced acres of campus vegetation with a colossal cooling tower, massive boiler units, and heavy switchyards. What algorithms register as a drastic ecological deficit is the undeniable, ground-level trade-off required to secure Kanpur's modernized energy future.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kanpur_nagar/panki_power_point/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=26.47406&lng=80.23985&zoom=17.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kanpur_nagar/panki_power_point/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kanpur_nagar/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=26.47406&lng=80.23985&zoom=17.00&historicalDate=2025-12-18",
        },
        references: [],
    },
    {
        title: "Tapi's Mangroves Erased for Illegal Multi-Crore Shrimp Farms",
        location: "Surat",
        content:
            "Satellite imagery over Kidiabet reveals a massive ecological crime where the Tapi River’s natural estuary and mangroves have been systematically wiped out to create a vast grid of rectangular aquaculture ponds. What spatial algorithms flag as a drastic shift in coastal vegetation and water patterns is actually the sprawling footprint of an illegal commercial shrimp farming syndicate. Driven by high export profits, encroachers have seized hundreds of hectares of vulnerable government floodplains, directly blocking natural tidal flows and increasing local flood risks. Following intense environmental petitions, the National Green Tribunal and Surat's district administration have finally initiated a massive crackdown, booking operators under the strict Gujarat Land Grabbing Act to demolish these unauthorized farms and reclaim the coastline.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/surat/shrimp_farms/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/surat/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=21.12207&lng=72.69486&zoom=15.76&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/surat/shrimp_farms/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/surat/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=21.12207&lng=72.69486&zoom=15.76&historicalDate=2025-12-18",
        },
        references: [
            { label: "Indian Express", url: "https://indianexpress.com/article/india/surat-collector-directs-farm-owners-to-demolish-illegal-shrimp-ponds-7129435/" },
            { label: "SeafoodSource", url: "https://www.seafoodsource.com/news/environment-sustainability/district-in-india-s-gujarat-mulls-crackdown-on-illegal-shrimp-farms" },
        ],
    },
    {
        title: "Rs 440-Crore Cultural Conch Wipes Out Alipore's Green Canopy",
        location: "Kolkata",
        content:
            "Satellite imagery over Alipore reveals a dramatic ecological trade-off, where a lush, dense urban canopy has been entirely bulldozed to construct the new Dhono Dhanyo Auditorium. Built at a massive cost of Rs 440 crore by the state government, this 4.5-acre architectural marvel was designed in the shape of a divine conch to serve as Kolkata's premier cultural hub. While the facility boasts a 2,000-seater main hall and modern civic amenities, its sprawling concrete and zinc footprint comes at a direct, permanent cost to the neighborhood's environment. What spatial algorithms register as a severe plunge in the vegetation index is simply the undeniable, ground-level reality of prioritizing massive civic mega-projects over the city's vital green lungs.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kolkata/dhono_dhanyo/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=22.53011&lng=88.33981&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kolkata/dhono_dhanyo/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=22.53011&lng=88.33981&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Telegraph India", url: "https://www.telegraphindia.com/my-kolkata/news/west-bengal-chief-minister-mamata-banerjee-inaugurates-rs-440-crore-dhono-dhanyo-auditorium-in-kolkatas-alipore/cid/1929619" },
        ],
    },
    {
        title: "Kolkata's Iconic Maidan Carved Up for New Underground Metro",
        location: "Kolkata",
        content:
            "Satellite imagery over Kolkata's historic Maidan reveals a massive rectangular excavation right outside the Victoria Memorial, permanently replacing what was once a lush, symmetric green garden. What spatial algorithms flag as a severe plunge in vegetation is the controversial ground-zero for the new underground Victoria Memorial Metro Station on the Joka-Esplanade (Purple) Line. To execute this multi-crore transit project, Rail Vikas Nigam Limited (RVNL) had to bulldoze and dig up a massive chunk of the city's vital \"green lung,\" sparking intense legal battles—reaching all the way to the Supreme Court—over the proposed felling and transplantation of hundreds of heritage trees. This dramatic satellite contrast captures the harsh reality of rapid urban development: securing Kolkata's modern transit network has come at a highly visible and deeply contested ecological cost to its most famous open space.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kolkata/victoria_metro/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=22.54786&lng=88.34341&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kolkata/victoria_metro/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=22.54786&lng=88.34341&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/kolkata/victoria-metro-station-construction-28-trees-to-be-felled-fate-of-917-trees-uncertain/articleshow/110189894.cms" },
            { label: "The Statesman", url: "https://www.thestatesman.com/bengal/sc-halts-tree-felling-for-metro-work-near-victoria-memorial-1503343053.html" },
        ],
    },
    {
        title: "Salt Lake's Green Buffer Erased for Kolkata's Rs 280-Crore Metro Depot",
        location: "Kolkata",
        content:
            "Satellite imagery reveals a stark ecological sacrifice right on the fringes of Salt Lake's beloved Central Park, where acres of dense urban canopy have been completely bulldozed into bare earth and concrete. What spatial algorithms flag as a severe plunge in vegetation is the sprawling footprint of the newly constructed Central Park Metro Depot. Built at an estimated cost of Rs 280 crore to serve as the operational nerve center for Kolkata's East-West (Green Line) Metro, this massive expanse of maintenance sheds and stabling tracks has permanently replaced a vital neighborhood green lung. It is the undeniable, ground-level trade-off of rapid urbanization: securing modern, high-speed transit for millions has come at a heavy, highly visible cost to the city's environment.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kolkata/salt_lake_metro/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=urban_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=22.58486&lng=88.41472&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kolkata/salt_lake_metro/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=urban_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=22.58486&lng=88.41472&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/kolkata/kmrc-plans-expansion-of-e-w-metro-depot-may-lay-6-new-tracks/articleshow/109359617.cms" },
            { label: "Railway Technology", url: "https://www.railway-technology.com/projects/kolkatametro/" },
        ],
    },
    {
        title: "Wetlands Erased to Expand Kestopur's Mega Sewage Plant",
        location: "Kolkata",
        content:
            "Satellite imagery over Prafulla Kanan reveals a stark ecological trade-off right next to the existing Bagjola Sewage Treatment Plant, where acres of adjoining green marshland have been entirely filled in with earth. This massive loss of natural buffer isn't for private real estate, but the necessary groundwork for a heavily delayed, multi-crore civic expansion mandated by the National Green Tribunal. To stop untreated daily effluent from choking the adjacent Kestopur and Bagjola canals, the state government is building massive new 33-MLD and 41-MLD treatment units directly over the former wetlands within the STP premises. While this mega-project is a desperate, highly necessary step to revive Kolkata's heavily polluted waterways, securing the city's modern sanitation has come at a direct and permanent cost to one of the neighborhood's vital green lungs.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/kolkata/kestopur_stp/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=22.60511&lng=88.41956&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/kolkata/kestopur_stp/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/kolkata/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=22.60511&lng=88.41956&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/kolkata/state-to-set-up-three-new-sewage-treatment-plants-along-city-canals/articleshow/112092336.cms" },
            { label: "Green Tribunal Report", url: "https://www.greentribunal.gov.in/sites/default/files/news_updates/Affidavit%20filed%20by%20UD%20&%20Municipal%20affairs,%20Govt.%20of%20WB%20-%20Tribunal%20On%20its%20Own%20Motion%20Vs.%20State%20of%20West%20Bengal%20&%20Ors.%20%20in%20OA%2014%20of%202017%20(EZ).pdf" },
        ],
    },
    {
        title: "Concrete Replaces Old Lagoons for Ghatkopar's 337-MLD Mega Sewage Plant",
        location: "Mumbai",
        content:
            "Satellite imagery over the Ghatkopar wastewater zone reveals a drastic spatial transformation where sprawling, algae-covered aerated lagoons and surrounding coastal buffers have been entirely drained and bulldozed. What spatial algorithms flag as a severe plunge in the vegetation index is actually the massive concrete footprint of the Brihanmumbai Municipal Corporation's (BMC) new 337-MLD Ghatkopar Waste Water Treatment Facility. Being constructed as a crucial part of the Rs 17,000-crore Mumbai Sewage Disposal Project (MSDP) Stage II, this modern tertiary treatment plant is designed to treat sewage before discharge and will soon supply millions of liters of recycled non-potable water to nearby BPCL and HPCL oil refineries. While this mega-project is a highly necessary step to revive Mumbai's coastal health and reduce marine pollution, securing the city's sanitation future has come at the direct and visible cost of replacing its existing landscape with heavy concrete infrastructure.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/mumbai/ghatkopar_stp/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/mumbai/?basemap=osm&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=19.07986&lng=72.93420&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/mumbai/ghatkopar_stp/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/mumbai/?basemap=osm&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=19.07986&lng=72.93420&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/mumbai/bmc-plans-pipeline-to-supply-treated-waste-water-to-hpcl-bpcl/articleshow/122843760.cms" },
        ],
    },
    {
        title: "87 Acres of Mumbai's Mangroves Erased for Rs 5,688-Crore Sewage Plant",
        location: "Mumbai",
        content:
            "Satellite imagery over Malad Creek reveals a devastating ecological cost to Mumbai’s infrastructure modernization: the complete obliteration of 35 hectares (87 acres) of protected mangrove forest. What spatial algorithms flag as a severe plunge in the coastal vegetation index is the sprawling construction site of the Brihanmumbai Municipal Corporation's new Malad Waste Water Treatment Facility, contracted to NCC Limited. Built under the Mumbai Sewage Disposal Project Stage II, this Rs 5,688-crore mega-plant is urgently required to treat the millions of liters of raw sewage currently choking the creek every day. However, securing the city's sanitation future has required a highly controversial, court-approved sacrifice of one of its most vital natural flood buffers, permanently exchanging a massive green lung for heavy concrete infrastructure.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/mumbai/malad_stp/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/mumbai/?basemap=osm&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=19.17843&lng=72.82468&zoom=16.92&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/mumbai/malad_stp/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/mumbai/?basemap=osm&metric=water_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=19.17843&lng=72.82468&zoom=16.92&historicalDate=2025-12-18",
        },
        references: [
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/mumbai/87-acres-of-mangroves-to-be-cut-for-sewage-plant/articleshow/58937315.cms" },
            { label: "MCGM Order", url: "https://www.mcgm.gov.in/irj/go/km/docs/documents/MCGM%20Department%20List/Mumbai%20Sewerage%20Disposal%20Project/Docs/35.00%20Ha%20Land%20Diversion%20order.pdf" },
        ],
    },
    {
        title: "Mumbai's Protected Mangroves Devoured by Illegal Slum Sprawl",
        location: "Mumbai",
        content:
            "Satellite imagery over Daravali Village in Malad reveals a devastating, unchecked ecological crime: the systematic clearing of dense, protected coastal mangroves to make way for massive, unauthorized slum encroachments. What the spatial algorithms flag as a severe \"urban expansion replacing vegetation\" is actually the illegal occupation of highly sensitive Coastal Regulation Zone (CRZ) areas. Despite repeated complaints to the National Green Tribunal (NGT) and ongoing efforts by the state's Mangrove Cell to fence off vulnerable coastlines, these vital natural flood barriers are continuously being bulldozed to expand makeshift settlements. This dramatic satellite contrast exposes the harsh, ground-level reality of Mumbai's losing battle to protect its remaining green buffers against rampant, illegal urbanization.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/mumbai/daravali_slums/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/mumbai/?basemap=osm&metric=urban_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=19.16107&lng=72.80662&zoom=17.37&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/mumbai/daravali_slums/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/mumbai/?basemap=osm&metric=urban_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=19.16107&lng=72.80662&zoom=17.37&historicalDate=2025-12-18",
        },
        references: [
            { label: "Green Tribunal Report", url: "https://www.greentribunal.gov.in/sites/default/files/all_documents/Report%20in%20OA%20No.%20586%20of%202019.pdf" },
        ],
    },
    {
        title: "Concrete for a Cause: How Delhi Airport's Massive Taxiway is Saving the Air",
        location: "Delhi",
        content:
            "While satellite imagery clearly registers a heavy loss of vegetation across the Indira Gandhi International (IGI) Airport, this spatial reality masks one of India's most significant environmental infrastructure upgrades. The sprawling, 2.1-kilometer concrete structure bisecting the airfield is the Eastern Cross Taxiway (ECT)—the first elevated dual taxiway in the country. Before this Rs-crore mega-project was commissioned, an aircraft landing on the outer runways had to taxi for roughly 9 kilometers to reach Terminal 1. By physically bridging the Northern and Southern airfields, the ECT slashes that taxiing distance down to just 2 kilometers. This dramatic reduction in tarmac time means less jet fuel burned while idling, translating to an estimated reduction of 55,000 tonnes of CO2 emissions annually. To put that into perspective, the carbon savings generated by this single expanse of concrete is equivalent to the environmental work of planting roughly 1.5 million trees. While the immediate visual impact is a loss of scrubland, the ECT is a critical pillar in DIAL's aggressive roadmap to transform IGI into a \"Net Zero Carbon Emission Airport\" by the end of the decade.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/delhi/igi_airport_ect/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/delhi/?basemap=osm&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=28.54746&lng=77.11272&zoom=16.66&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/delhi/igi_airport_ect/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/delhi/?basemap=osm&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=28.54746&lng=77.11272&zoom=16.66&historicalDate=2025-12-18",
        },
        references: [
            { label: "Economic Times", url: "https://travel.economictimes.indiatimes.com/news/aviation/domestic/indias-first-elevated-dual-taxiways-to-become-operational-soon-at-delhi-airport/101573731" },
            { label: "GMR Group", url: "https://www.gmrgems.com/blogs/eastern-cross-taxiways" },
        ],
    },
    {
        title: "Paving Fields to Clear the Air: The Unexpected Environmental Math of UER-II",
        location: "Delhi",
        content:
            "While satellite imagery paints a stark picture of lush agricultural fields being permanently erased by concrete, the sprawling Urban Extension Road II (UER-II) is actually engineered to be a massive environmental relief valve for Delhi. Conceived as the capital’s third ring road, this 75-kilometer, access-controlled expressway is specifically designed to intercept heavy commercial trucks and non-destined traffic, completely diverting them away from the city's highly congested and polluted inner core. By drastically cutting travel times—such as reducing the commute from the Singhu border to the IGI Airport from over two hours down to just 40 minutes—the highway prevents thousands of tonnes of vehicular emissions from idling engines every single day. Furthermore, the greenest aspect of this \"greenfield\" highway is buried directly beneath its surface. In a major push for ecological waste management, the National Highways Authority of India (NHAI) actively utilized 2 million tonnes of processed plastic garbage sourced directly from the infamous Ghazipur landfill to construct the roadbed. While securing Delhi's transit future required the undeniable sacrifice of western farmland, the UER-II trades that local acreage for a wider, systemic victory: simultaneously cleaning up the city's toxic trash mountains while allowing its suffocating urban center to finally breathe.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/delhi/uer_ii/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/delhi/?basemap=osm&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=28.56479&lng=77.02035&zoom=16.92&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/delhi/uer_ii/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/delhi/?basemap=osm&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=28.56479&lng=77.02035&zoom=16.92&historicalDate=2025-12-18",
        },
        references: [
            { label: "DPCC Report", url: "https://www.dpcc.delhigovt.nic.in/uploads/eia/18e4b24d6daf4d344841fcb2bd4bf949.pdf" },
            { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Urban_Extension_Road-II" },
        ],
    },
    {
        title: "A Platinum-Rated Trade-Off: The Green Mechanics Behind India's New Parliament",
        location: "Delhi",
        content:
            "While satellite imagery clearly shows a loss of vegetation to accommodate India's New Parliament Building, the structure's operational design attempts to offset this physical footprint. The new 64,500-square-meter triangular complex is officially a Platinum-rated green building, holding a GRIHA 5-star certification. The facility is engineered to cut power consumption by over 50% compared to conventional systems, relying on extensive LED migration, daylight integration, and motion occupancy sensors. Beyond electricity, the infrastructure is built to manage its own environmental impact. It features comprehensive rainwater harvesting and utilizes dedicated sewage treatment plants to treat and recycle wastewater. Even during the heavy construction phase, the site employed mist sprayers, smog towers, and noise barriers to actively suppress localized air and sound pollution. The visual loss of the previous green buffer is undeniable. However, the long-term metrics of this modern, divyang-friendly facility demonstrate a calculated, mathematical shift toward sustainable and energy-efficient civic infrastructure.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/delhi/new_parliament/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/delhi/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=28.61705&lng=77.21040&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/delhi/new_parliament/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/delhi/?basemap=esri_imagery&metric=vegetation_delta&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=28.61705&lng=77.21040&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "Economic Times", url: "https://economictimes.indiatimes.com/news/india/energy-efficiency-focus-in-new-parliament-building-lighting-will-save-power-by-over-50/articleshow/103758264.cms?from=mdr" },
            { label: "Times of India", url: "https://timesofindia.indiatimes.com/india/new-parliament-building-has-inbuilt-processes-to-make-it-energy-efficient/photostory/100547090.cms" },
        ],
    },
    {
        title: "From Scrubland to Cricketing Crown Jewel: The Rise of BCCI's Mega Centre of Excellence",
        location: "Bengaluru",
        content:
            "Moving away from its cramped legacy setup, the newly inaugurated BCCI Centre of Excellence in North Bengaluru has officially transformed 40 acres of rural scrubland into the ultimate high-tech sanctuary for Indian cricket. The massive complex boasts three world-class grounds with custom red and black soil pitches alongside a cutting-edge subsurface drainage system designed to eliminate rain delays entirely. Housing a massive 16,000-square-foot sports science and medicine block, this elite facility is engineered to serve as the national nursery for next-gen athletes and world-class rehabilitation. By trading barren acreage for state-of-the-art sports infrastructure, India has firmly solidified its global dominance in the game's modern, data-driven era.",
        then: {
            date: "21st Jan, 2015",
            image: "./outputs/bengaluru/bcci_coe/2015.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=vegetation_delta&renderMode=variation&unit=cells&period=10y&opacity=0.00&historical=timeline&speed=1200&lat=13.16463&lng=77.71164&zoom=18.00&historicalDate=2015-01-21",
        },
        now: {
            date: "18th Dec, 2025",
            image: "./outputs/bengaluru/bcci_coe/2025.png",
            url: "https://pythonicvarun.github.io/olmoearth-change-insights/outputs/bengaluru/?basemap=esri_imagery&metric=vegetation_delta&renderMode=variation&unit=cells&period=10y&opacity=0.00&historical=base&speed=1200&lat=13.16463&lng=77.71164&zoom=18.00&historicalDate=2025-12-18",
        },
        references: [
            { label: "India Today", url: "https://www.indiatoday.in/sports/cricket/story/bcci-inaugurates-nca-excellence-in-cricket-in-bengaluru-2608259-2024-09-29" },
        ],
    },
];

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[c]);
}

function renderSnapshot(snapshot, side) {
    const hasImage = snapshot.image && snapshot.image.length > 0;
    const imageHtml = hasImage
        ? `<img src="${escapeHtml(snapshot.image)}" alt="${escapeHtml(side)} — ${escapeHtml(snapshot.date)}" loading="lazy" />`
        : `<div class="snapshot-placeholder"><span>Image coming soon</span></div>`;
    return `
        <a class="snapshot" href="${escapeHtml(snapshot.url)}" target="_blank" rel="noopener" title="Open ${escapeHtml(snapshot.date)}">
            <div class="snapshot-frame">
                ${imageHtml}
                <span class="snapshot-side">${escapeHtml(side)}</span>
            </div>
            <span class="snapshot-date">${escapeHtml(snapshot.date)}</span>
        </a>
    `;
}

function renderInsight(insight, index) {
    const refs = (insight.references || [])
        .map(
            (r) =>
                `<a class="action-link secondary" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${escapeHtml(r.label)}</a>`,
        )
        .join("");
    const refsRow = refs ? `<div class="action-row">${refs}</div>` : "";
    return `
        <article class="analysis-card">
            <div class="snapshot-pair">
                ${renderSnapshot(insight.then, "Then")}
                ${renderSnapshot(insight.now, "Now")}
            </div>
            <div class="card-top">
                <div>
                    <div class="card-eyebrow">Insight ${index + 1}</div>
                    <h2 class="analysis-title">${escapeHtml(insight.title)}</h2>
                </div>
                <div class="card-badge">${escapeHtml(insight.location)}</div>
            </div>
            <div class="insight-content">${escapeHtml(insight.content)}</div>
            ${refsRow}
        </article>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("insights-list");
    if (!list) return;
    list.innerHTML = INSIGHTS.map(renderInsight).join("");
});
