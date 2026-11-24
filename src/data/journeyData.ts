import type { JourneyLocation } from '../types/odyssey';

export const JOURNEY_LOCATIONS: JourneyLocation[] = [
  {
    id: 'troy',
    step: 1,
    romanNumeral: 'I',
    name: 'Troy',
    greekName: 'Ἴλιον / Τροία',
    traditionalGeography: 'Hisarlik, northwest Anatolia (modern Turkey), overlooking the Dardanelles / Hellespont',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book IX, Lines 39–43; recalled throughout Books I–IV',
    whatHappened:
      'Following ten grueling years of siege, the proud citadel of Priam falls to the stratagem of the Trojan Horse, conceived by the cunning of Odysseus. The Achaean fleet plunders the temples and wealth of Ilium, divides the spoils, and prepares for departure. Odysseus sets sail with twelve black ships manned by seasoned Ithacan veterans, hopeful of an immediate voyage home to his wife Penelope and infant son Telemachus.',
    charactersInvolved: ['Odysseus', 'Agamemnon', 'Menelaus', 'Ithacan crew'],
    mainChallenge:
      'The spiritual exhaustion of ten years of brutal war, the intoxication of total military victory, and the hubris born of plundering a sacred city.',
    literarySignificance:
      'Troy marks the boundary between the Iliadic heroic world of martial violence (bie) and the Odyssean world of endurance (metis). It is the departure point from collective history into the solitary mythic labyrinth of the wine-dark sea.',
    famousPassage: {
      greek: 'Ἰλιόθεν με φέρων ἄνεμος Κικόνεσσι πέλασσεν, Ἰσμάρῳ...',
      english: 'From Ilium the wind took me and drove me to the Cicones, to Ismarus...',
      citation: 'Book IX.39–40',
    },
    coordinates: { x: 825, y: 195 },
  },
  {
    id: 'ismarus',
    step: 2,
    romanNumeral: 'II',
    name: 'Ismarus',
    greekName: 'Ἴσμαρος (Κίκονες)',
    traditionalGeography: 'Coast of Thrace near modern Maroneia, northern Aegean Sea',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book IX, Lines 39–61',
    whatHappened:
      'Odysseus and his fleet stage a surprise coastal raid on the Cicones, allies of Troy. They sack the town, divide wives and cattle, and spare only Maron, holy priest of Apollo, who in gratitude gifts Odysseus twelve jars of unwatered, divine sweet wine. Odysseus orders immediate departure, but his mutinous crew refuses, feasting on slaughtered sheep and drinking by the shore. Surviving Cicones summon inland cavalry reinforcements, ambushing the drunken Greeks at dawn.',
    charactersInvolved: ['Odysseus', 'Maron (Priest of Apollo)', 'Ciconian Warriors', 'Ithacan Sailors'],
    mainChallenge:
      'Crew insubordination, gluttony, and the failure of discipline on the threshold of freedom.',
    literarySignificance:
      'Demonstrates the fatal flaw of Odysseus’s companions: lack of restraint and disregard for their commander’s foresight. The gift of Maron’s potent wine becomes the vital instrument that will later save Odysseus’s life in the cave of the Cyclops.',
    famousPassage: {
      greek: 'ἔνθ᾽ ἦ τοι μὲν ἐγὼ διερῷ ποδὶ φευγέμεν ἄνωγον, οἱ δὲ μέγα νήπιοι οὐκ ἐπίθοντο...',
      english: 'Then indeed I urged that we should flee with nimble foot, but they, great fools, would not obey...',
      citation: 'Book IX.43–44',
    },
    coordinates: { x: 770, y: 155 },
  },
  {
    id: 'lotus-eaters',
    step: 3,
    romanNumeral: 'III',
    name: 'Land of the Lotus-Eaters',
    greekName: 'Λωτοφάγοι',
    traditionalGeography: 'Traditionally identified with the island of Djerba, Gulf of Gabes (modern Tunisia)',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book IX, Lines 82–104',
    whatHappened:
      'Caught in relentless gales off Cape Malea and driven south across the open sea for nine days, the ships make landfall on the peaceful coast of the Lotus-Eaters. Odysseus sends scouts to investigate the inhabitants, who offer them the honey-sweet blossom of the lotus. Eating the flower induces instantaneous euphoria, erasing all memory of Ithaca, lineage, and the desire to return home. Odysseus personally drags the weeping crewmen back to the benches and lashes them under the rowing thwarts.',
    charactersInvolved: ['Odysseus', 'Ithacan Scouts', 'The Lotus-Eaters'],
    mainChallenge:
      'The seductive peril of peaceful amnesia: surrendering heroic memory (mnemosyne) and the purpose of homecoming (nostos) for narcotic bliss.',
    literarySignificance:
      'The Lotus-Eaters represent the first psychological trial of the wanderings. In Homeric thought, to forget one’s home is spiritual death; Odysseus’s heroism is grounded in active, painful remembrance.',
    famousPassage: {
      greek: 'τῶν δ᾽ ὅς τις λωτοῖο φάγοι μελιηδέα καρπόν, οὐκέτ᾽ ἀπαγγεῖλαι πάλιν ἤθελεν οὐδὲ νέεσθαι...',
      english: 'Now whosoever of them ate of the honey-sweet fruit of the lotus had no longer any wish to bring back word or to return...',
      citation: 'Book IX.94–95',
    },
    coordinates: { x: 280, y: 520 },
  },
  {
    id: 'cyclopes',
    step: 4,
    romanNumeral: 'IV',
    name: 'Island of the Cyclopes',
    greekName: 'Κύκλωπες (Πολύφημος)',
    traditionalGeography: 'Traditionally placed along the western volcanic coast of Sicily (near Mount Etna) or the Bay of Naples',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book IX, Lines 105–566',
    whatHappened:
      'Lured by curiosity and the expectation of guest-gifts, Odysseus enters the cavern of Polyphemus, a pastoral giant son of Poseidon. Trapping the Greeks with a massive stone, the monster scoffs at Zeus and devours six men raw. Odysseus conceals his identity under the alias Outis (“Nobody”), intoxicates the giant with Maron’s wine, and drives a heated olive-wood stake into his single eye. The Greeks escape beneath the bellies of Polyphemus’s rams. Sailing away, Odysseus hubristically shouts his real name, prompting Polyphemus’s curse.',
    charactersInvolved: ['Odysseus', 'Polyphemus', 'Poseidon (invoked in curse)'],
    mainChallenge:
      'Raw savagery beyond civil law (themistes) and the violation of sacred hospitality (xenia), complicated by Odysseus’s own pride (hubris).',
    literarySignificance:
      'The defining trial of metis (cunning) versus bie (brute strength). The pun on Outis (“Nobody”) and me tis (“cunning / no one”) establishes Odysseus’s intellectual supremacy, while his fatal boast inaugurates Poseidon’s relentless vendetta.',
    famousPassage: {
      greek: 'Οὖτις ἐμοί γ᾽ ὄνομα: Οὖτιν δέ με κικλήσκουσι μήτηρ ἠδὲ πατὴρ ἠδ᾽ ἄλλοι πάντες ἑταῖροι.',
      english: 'Nobody is my name; Nobody they call me—my mother and my father, and all my comrades as well.',
      citation: 'Book IX.366–367',
    },
    coordinates: { x: 330, y: 375 },
  },
  {
    id: 'aeolia',
    step: 5,
    romanNumeral: 'V',
    name: 'Aeolia',
    greekName: 'Αἰολία νῆσος',
    traditionalGeography: 'The volcanic Aeolian (Lipari) Archipelago north of Sicily (modern Stromboli / Lipari)',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book X, Lines 1–79',
    whatHappened:
      'Odysseus reaches the bronze-walled floating island of King Aeolus, steward of the winds. Aeolus welcomes him warmly for a month and seals all adverse, turbulent gales inside an ox-hide bag, releasing only the gentle West Wind (Zephyrus) to speed them toward Ithaca. Ten days later, within sight of their homeland’s watchfires, Odysseus falls asleep from exhaustion. His suspicious crew, imagining the bag conceals gold and silver, untie the knots. The tempestuous winds burst forth, blowing the fleet all the way back to Aeolia, where the king casts them out as cursed by the gods.',
    charactersInvolved: ['Odysseus', 'King Aeolus Hippotades', 'Ithacan crew'],
    mainChallenge:
      'Mistrust, paranoia, and catastrophic negligence on the very threshold of salvation.',
    literarySignificance:
      'Highlights the tragedy of the near-miss and the collapse of leadership through physical exhaustion. The refusal of Aeolus to grant a second blessing underscores that the gods do not shelter those whom cosmic justice has marked.',
    famousPassage: {
      greek: 'ἔνθα δὲ πάντων ἄνεμων κατέδει κελεύθους ἐν ἀσκῷ ἀσκῷ βοὸς ἐννεώροιο...',
      english: 'Therein he bound the ways of all the winds in a sack of the hide of an ox of nine seasons...',
      citation: 'Book X.19–20',
    },
    coordinates: { x: 380, y: 340 },
  },
  {
    id: 'laestrygonians',
    step: 6,
    romanNumeral: 'VI',
    name: 'Land of the Laestrygonians',
    greekName: 'Τηλέπυλος Λαιστρυγονίη',
    traditionalGeography: 'Frequently associated with the fjord-like harbor of Bonifacio in southern Corsica or northern Sardinia',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book X, Lines 80–132',
    whatHappened:
      'The fleet arrives at Telepylos, an enclosed harbor flanked by sheer precipices where day and night touch. Eleven ships anchor within the mirror-calm basin; Odysseus cautiously tethers his solitary vessel to an exterior rock outside the heads. King Antiphates and his cannibal giants ambush the scouts and shower the boxed-in harbor with house-sized boulders, splintering eleven ships and spearing the drowning warriors like fish for unholy banquets. Odysseus severs his hawser with his sword, fleeing alone into the open sea.',
    charactersInvolved: ['Odysseus', 'King Antiphates', 'Laestrygonian Giants'],
    mainChallenge:
      'Catastrophic tactical ambush in an enclosed natural marine trap; absolute annihilation of the fleet.',
    literarySignificance:
      'The most devastating physical loss of the voyage: eleven of twelve ships and hundreds of veteran warriors are obliterated in minutes. From this moment onward, Odysseus sails with only one ship and forty companions.',
    famousPassage: {
      greek: 'ἰχθῦς δ᾽ ὣς πείροντες ἀτερπέα δαῖτα φέροντο.',
      english: 'And spearing them like fish they bore them home, a grim feast.',
      citation: 'Book X.124',
    },
    coordinates: { x: 270, y: 220 },
  },
  {
    id: 'aeaea',
    step: 7,
    romanNumeral: 'VII',
    name: 'Aeaea',
    greekName: 'Αἰαία (Κίρκη)',
    traditionalGeography: 'Promontorio Circeo (Mount Circeo) on the Tyrrhenian coast of Lazio, Italy',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book X, Lines 133–574; Book XII, Lines 1–142',
    whatHappened:
      'Landing on the densely wooded isle of the sorceress Circe, daughter of Helios, Odysseus sends Eurylochus and twenty-two men to explore her polished-stone palace. Circe drugs their wine with herb potions and strikes them with her wand, transforming them into swine while retaining human minds. Hermes appears to Odysseus on the path, providing the holy black-rooted moly herb to nullify her sorcery. Odysseus subdues Circe with drawn blade, compelling her by sacred oath to restore his crew. They remain in luxury for a full year before Circe instructs them to seek the prophecy of Tiresias in the Underworld.',
    charactersInvolved: ['Odysseus', 'Circe', 'Hermes', 'Eurylochus', 'Elpenor'],
    mainChallenge:
      'Sensual enchantment, erotic captivity, and the metaphysical degradation of the human soul into animal form.',
    literarySignificance:
      'Circe evolves from a lethal monster into a divine guide and patroness. The holy moly herb illustrates that mortal intellect alone is insufficient without divine grace when confronting chthonic sorcery.',
    famousPassage: {
      greek: 'ὣς ἄρ᾽ ἔφη, καὶ ὄπασσε κύκηθρον: ἔδωκε δέ, κἀγὼ ἔπιον...',
      english: 'So she spoke, and gave me the potion, and I drank it off, but it bewitched me not...',
      citation: 'Book X.316–317',
    },
    coordinates: { x: 350, y: 240 },
  },
  {
    id: 'underworld',
    step: 8,
    romanNumeral: 'VIII',
    name: 'The Underworld',
    greekName: 'Νέκυια / ᾍδης',
    traditionalGeography: 'The western edge of the inhabited earth beyond the river Oceanus, near Cimmerian shores or Lake Avernus',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book XI (The Entire Nekuia)',
    whatHappened:
      'Odysseus sails across Oceanus to the fog-shrouded grove of Persephone. Digging a trench, he performs libations of honey, milk, wine, and slaughters black sheep to draw forth the gibbering shades of the dead. Blind Theban prophet Tiresias drinks the blood and reveals the perilous path ahead, warning against touching Helios’s cattle and prophesying Odysseus’s eventual peaceful death in old age. Odysseus attempts thrice in tears to embrace the ghost of his mother Anticleia, converses with fallen comrades Agamemnon and Achilles, and witnesses mythic heroes.',
    charactersInvolved: ['Odysseus', 'Tiresias', 'Anticleia', 'Achilles', 'Agamemnon', 'Ajax', 'Elpenor'],
    mainChallenge:
      'Confronting mortality, the vanity of martial glory, and the inescapable truth of ancestral grief.',
    literarySignificance:
      'The emotional and philosophical core of the epic. Achilles delivers the poem’s starkest declaration: he would rather be a destitute day-laborer serving a landless serf on earth than king over all the departed shades, subverting the Iliadic heroic code.',
    famousPassage: {
      greek: 'βουλοίμην κ᾽ ἐπάρουρος ἐὼν θητευέμεν ἄλλῳ... ἢ πᾶσιν νεκύεσσι καταφθιμένοισιν ἀνάσσειν.',
      english: 'I would rather work the soil as the serf of another, a poor man of little substance, than be lord over all the dead that have perished.',
      citation: 'Book XI.489–491',
    },
    coordinates: { x: 95, y: 160 },
  },
  {
    id: 'sirens',
    step: 9,
    romanNumeral: 'IX',
    name: 'Island of the Sirens',
    greekName: 'Σειρῆνες',
    traditionalGeography: 'The Li Galli archipelago (Sirenuse) off Positano and the Amalfi Coast, Italy',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book XII, Lines 165–200',
    whatHappened:
      'Forewarned by Circe, Odysseus approaches the bone-strewn meadow of the Sirens, whose honeyed voices bewitch all passing mariners. He softens beeswax and kneads it into the ears of every oarsman, ordering his men to lash his wrists and ankles securely to the upright mast and tighten the bonds if he begs release. As the ship glides past, the Sirens sing an enchanting melody promising omniscient knowledge of everything suffered on the plains of Troy. Odysseus thrashes in ecstasy, commanding his men to cut the ropes, but Perimedes and Eurylochus bind him tighter until the music fades.',
    charactersInvolved: ['Odysseus', 'The Sirens', 'Eurylochus', 'Perimedes'],
    mainChallenge:
      'The irresistible allure of complete narrative and cosmic knowledge, leading to shipwreck and death upon decomposing bones.',
    literarySignificance:
      'The Sirens tempt Odysseus through art and memory—specifically the promise to sing his own kleos back to him. Survival is achieved through self-imposed limitation and trust in his subordinates’ discipline.',
    famousPassage: {
      greek: 'δεῦρ᾽ ἄγ᾽ ἰών, πολύαιν᾽ Ὀδυσεῦ, μέγα κῦδος Ἀχαιῶν, νῆα κατάστησον, ἵνα νωιτέρην ὄπ᾽ ἀκούσῃς.',
      english: 'Come hither, as thou farest, renowned Odysseus, great glory of the Achaeans; stay thy ship that thou mayest listen to the voice of us twain.',
      citation: 'Book XII.184–185',
    },
    coordinates: { x: 395, y: 275 },
  },
  {
    id: 'scylla-charybdis',
    step: 10,
    romanNumeral: 'X',
    name: 'Scylla and Charybdis',
    greekName: 'Σκύλλα καὶ Χάρυβδις',
    traditionalGeography: 'The Strait of Messina, separating northeastern Sicily from the Calabrian toe of Italy',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book XII, Lines 201–259',
    whatHappened:
      'Navigating a treacherous strait barely an arrow-shot wide, Odysseus must steer between Charybdis—a voracious whirlpool that swallows the black sea thrice daily and belches it forth in scalding spray—and Scylla, a six-headed monster lurking in a jagged cliff cave. Following Circe’s advice, Odysseus chooses to steer close to Scylla’s crag, knowing it is better to lose six men than lose the entire ship and crew to the whirlpool. As Odysseus watches the boiling eddies of Charybdis, Scylla’s six serpentine necks dart down, plucking six of his bravest oarsmen from the deck, shrieking his name in agony as they are devoured.',
    charactersInvolved: ['Odysseus', 'Scylla', 'Charybdis', 'Six Ithacan Oarsmen'],
    mainChallenge:
      'The agonizing tragedy of inevitable sacrifice: choosing between total ruin or the deliberate, guaranteed surrender of beloved comrades.',
    literarySignificance:
      'The darkest moment of Odysseus’s command. Homer compares the dying men to writhing fish snatched by an angler’s rod; Odysseus calls this the most pitiful sight his eyes ever beheld in all his wanderings on the sea.',
    famousPassage: {
      greek: 'οἴκτιστον δὴ κεῖνο ἐμοῖς ἴδον ὀφθαλμοῖσι πάντων, ὅσσ᾽ ἐμόγησα πόρους ἁλὸς ἐξερεείνων.',
      english: 'Most pitiful by far was that thing my eyes beheld of all that I suffered while searching out the paths of the sea.',
      citation: 'Book XII.258–259',
    },
    coordinates: { x: 420, y: 360 },
  },
  {
    id: 'thrinacia',
    step: 11,
    romanNumeral: 'XI',
    name: 'Thrinacia',
    greekName: 'Θρινακία (Βόες Ἡλίου)',
    traditionalGeography: 'Eastern coast of Sicily (traditionally known as Trinacria for its three promontories)',
    narrativeMode: 'Retrospective Apologue (Books IX–XII)',
    bookReferences: 'Book XII, Lines 260–425',
    whatHappened:
      'The survivors arrive at the island where the immortal herds of Helios Hyperion pasture. Odysseus demands they sail past, but exhausted Eurylochus pleads for a night’s rest. Odysseus makes the crew swear a solemn oath not to touch the sacred cattle. Contrary south winds trap them for a month, exhausting their provisions until they are starving on fish and wildfowl. While Odysseus sleeps inland in desperate prayer, Eurylochus persuades the crew to slaughter the fairest cows. The hides crawl and the roasted meat moans upon the spits. When they put to sea, Zeus strikes their vessel with a blinding lightning bolt; all crew members drown in the black surf.',
    charactersInvolved: ['Odysseus', 'Helios Hyperion', 'Zeus', 'Eurylochus', 'Ithacan crew'],
    mainChallenge:
      'Starvation, cosmic sacrilege against the sun god, and the fatal weakness of mortal appetite.',
    literarySignificance:
      'Fulfills the proem of the epic: the companions perish through their own recklessness (*atasthalia*). Odysseus alone survives because he refrained from cosmic violation, clinging for nine days to the lashed mast and keel.',
    famousPassage: {
      greek: 'αὐτῶν γὰρ σφετέρῃσιν ἀτασθαλίῃσιν ὄλοντο, νήπιοι, οἳ κατὰ βοῦς Ὑπερίονος Ἠελίοιο ἤσθιον...',
      english: 'For by their own reckless folly they perished, fools, who devoured the cattle of Helios Hyperion...',
      citation: 'Book I.7–9',
    },
    coordinates: { x: 435, y: 405 },
  },
  {
    id: 'ogygia',
    step: 12,
    romanNumeral: 'XII',
    name: 'Ogygia',
    greekName: 'Ὠγυγία (Καλυψώ)',
    traditionalGeography: 'The mythical center / navel of the western Mediterranean (often associated with Gozo or isolated islet)',
    narrativeMode: 'Epic Present Narrative (Book V) & Retrospective Summary',
    bookReferences: 'Book I, Lines 48–59; Book V, Lines 1–281',
    whatHappened:
      'Drifting for nine agonizing days on broken timbers across the wine-dark deep, Odysseus washes ashore alone on the paradise island of Ogygia, home of the nymph Calypso. Detaining him for seven years in her cedar-scented cavern, Calypso offers him eternal youth and godlike immortality if he remains as her consort. Odysseus spends his days weeping on the rocky headland, staring out over the barren sea with longing for Ithaca. At Athena’s urging, Zeus sends Hermes with an absolute decree. Calypso relents, aiding Odysseus in felling twenty trees to construct a seaworthy sailing raft.',
    charactersInvolved: ['Odysseus', 'Calypso', 'Hermes', 'Athena', 'Poseidon'],
    mainChallenge:
      'Existential stagnation, timeless isolation, and the temptation to abandon human mortality and identity.',
    literarySignificance:
      'Odysseus’s explicit refusal of immortality in Book V represents the supreme humanist statement of Greek antiquity: human life, with its sorrow, aging, and mortality, possesses an intensity and beauty that timeless divinity can never know.',
    famousPassage: {
      greek: 'οἶδα καὶ αὐτὸς πάντα μάλ᾽, οὕνεκα σεῖο περίφρων Πηνελόπεια εἶδος ἀκιδνοτέρη μέγεθός τ᾽ εἰσάντα ἰδέσθαι...',
      english: 'Well I know that wise Penelope is meaner to look upon than thou in stature and in face... yet even so I wish and long every day to go home.',
      citation: 'Book V.215–220',
    },
    coordinates: { x: 370, y: 460 },
  },
  {
    id: 'scheria',
    step: 13,
    romanNumeral: 'XIII',
    name: 'Scheria',
    greekName: 'Σχερίη / Φαίακες',
    traditionalGeography: 'Corcyra (modern Corfu), in the Ionian Sea off the coast of Epirus',
    narrativeMode: 'Epic Present Narrative (Books V–XIII)',
    bookReferences: 'Books VI, VII, VIII, and XIII, Lines 1–187',
    whatHappened:
      'On the eighteenth day of his raft voyage from Ogygia, Poseidon spots Odysseus and smashes his timber craft in a monstrous storm. Saved by the sea-nymph Leucothea’s immortal veil, Odysseus swims for two days, washing ashore battered and naked on the Phaeacian coast. Discovered by princess Nausicaa at the washing pools, he enters the palace of King Alcinous and Queen Arete. Honored as a sacred guest, Odysseus weeps at blind bard Demodocus’s songs of Troy, reveals his true name, and recounts his entire ten-year wanderings. The hospitable Phaeacians load him with bronze and gold, conveying him asleep to Ithaca on their wondrous self-steering ship.',
    charactersInvolved: ['Odysseus', 'Nausicaa', 'King Alcinous', 'Queen Arete', 'Demodocus', 'Poseidon'],
    mainChallenge:
      'The transition from mythic wilderness back to civilized human society; the temptation to marry Nausicaa and remain in utopian comfort.',
    literarySignificance:
      'The Phaeacians represent the golden bridge between the supernatural world of monsters and the mortal reality of Ithaca. Their generous hospitality (*xenia*) costs them dearly: Poseidon petrifies their returning ship into stone in sight of their harbor.',
    famousPassage: {
      greek: 'εἴμ᾽ Ὀδυσεὺς Λαερτιάδης, ὃς πᾶσι δόλοισιν ἀνθρώποισι μέλω, καί μευ κλέος οὐρανὸν ἵκει.',
      english: 'I am Odysseus, son of Laertes, who am known among men for all manner of wiles, and my fame reaches unto heaven.',
      citation: 'Book IX.19–20',
    },
    coordinates: { x: 545, y: 300 },
  },
  {
    id: 'ithaca',
    step: 14,
    romanNumeral: 'XIV',
    name: 'Ithaca',
    greekName: 'Ἰθάκη',
    traditionalGeography: 'The rugged island of Ithaca (Ithaki), in the Ionian archipelago of western Greece',
    narrativeMode: 'Epic Present Narrative (Books XIII–XXIV)',
    bookReferences: 'Books XIII through XXIV (The Entire Second Half of the Epic)',
    whatHappened:
      'Odysseus is laid asleep upon his native shore beneath an olive tree by the Phaeacian crew. Waking disoriented in Athena’s protective mist, the goddess reveals his homeland and transforms him into an aged, ragged beggar. Moving first to the hut of loyal swineherd Eumaeus, Odysseus reunites in secret with his son Telemachus. Entering his own palace disguised, he endures insults and footstools from the 108 suitors, tests the loyalty of his household, strings the ancestral bow of Eurytus, and slaughters the suitors in the hall. He proves his identity to Penelope through the secret of their olive-tree bed and ratifies perpetual peace with his father Laertes.',
    charactersInvolved: ['Odysseus', 'Penelope', 'Telemachus', 'Athena', 'Eumaeus', 'Antinous', 'Laertes'],
    mainChallenge:
      'The dangerous reclamation of home, household (*oikos*), and royal authority against 108 armed suitors, preserving self-control under insult.',
    literarySignificance:
      'The completion of *nostos* and the restoration of natural and divine order. The living olive-tree bed, rooted deep into the foundation rock of the palace, serves as the central architectural metaphor for an enduring marriage, home, and human kingdom.',
    famousPassage: {
      greek: 'τρηχεῖ᾽, ἀλλ᾽ ἀγαθὴ κουροτρόφος: οὔ τοι ἐγώ γε ἧς γαίης δύναμαι γλυκερώτερον ἄλλο ἰδέσθαι.',
      english: 'Rugged it is, but a good nurse of youth; and for my part I can look upon no other thing sweeter than a man’s own land.',
      citation: 'Book IX.27–28',
    },
    coordinates: { x: 575, y: 365 },
  },
];
