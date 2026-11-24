import type { MythicalEncounter } from '../types/odyssey';

export const MYTHICAL_ENCOUNTERS_DATA: MythicalEncounter[] = [
  {
    id: 'lotus-eaters',
    name: 'The Lotus-Eaters',
    greekName: 'Λωτοφάγοι',
    classification: 'Peaceful Indigenous People & Narcotic Society',
    category: 'people-tribe',
    categoryLabel: 'Mythic People & Tribes',
    description:
      'A gentle, hospitable coastal population dwelling along the tranquil shores of North Africa. They harbor no violent malice nor weapons of war, subsisting entirely upon the sweet, honeyed flower of the native lotus plant, which induces an immediate, blissful state of tranquil amnesia.',
    location: 'Traditionally identified with the island of Meninx / Djerba, Gulf of Gabes (modern Tunisia)',
    encounterWithOdysseus:
      'Driven southward for nine days by savage gales past Cape Malea, Odysseus’s ships make landfall to replenish water. Odysseus sends two seasoned scouts and a herald to discover what manner of men inhabit the soil. The Lotus-Eaters greet them with genuine goodwill and share their sweet flowering harvest. Upon eating, the scouts lose all longing for Ithaca, forgetting their wives, children, and homeland, weeping only at the prospect of ever leaving the sunny shore.',
    howOdysseusResponded:
      'Recognizing the insidious spiritual threat of narcotic contentment, Odysseus refuses to send more men or partake himself. He marches inland, seizes the three weeping scouts by force, hauls them struggling down to the beach, and lashes them beneath the rowing benches. Ordering all remaining men to embark without delay lest anyone taste the lotus and lose their nostos, they beat the gray surf with their oars and escape.',
    literarySignificance:
      'The Lotus-Eaters present the epic’s first great existential peril: the surrender of human memory (mnemosyne) and heroic struggle for passive, drug-induced peace. Homer establishes that the true horror of the lotus is not death, but the death of purpose. For a Greek hero, a life devoid of memory, lineage, and homecoming is equivalent to non-existence.',
    bookReferences: 'Book IX, Lines 82–104',
    quote: {
      greek: 'τῶν δ᾽ ὅς τις λωτοῖο φάγοι μελιηδέα καρπόν, οὐκέτ᾽ ἀπαγγεῖλαι πάλιν ἤθελεν οὐδὲ νέεσθαι...',
      english: 'Whosoever of them ate the honey-sweet fruit of the lotus had no longer any wish to bring back word or to return, but desired there to abide among the Lotus-eaters.',
      citation: 'Book IX.94–96',
    },
    attributes: {
      perilType: 'Amnesia & Loss of Will (Nostos Evaporated)',
      crewLosses: 'Zero casualties; three scouts rescued by force',
      virtueTested: 'Executive Command & Willpower over Pleasure',
    },
  },
  {
    id: 'polyphemus',
    name: 'Polyphemus',
    greekName: 'Πολύφημος',
    classification: 'Cyclopean Giant & Pastoral Anti-Host',
    category: 'mythic-being',
    categoryLabel: 'Monstrous Beings & Giants',
    description:
      'A solitary one-eyed giant of colossal stature, son of Poseidon and the sea-nymph Thoösa. He lives as a pastoral shepherd in a high cavern, milking goats and pressing cheeses, completely disconnected from agriculture, shipping, assemblies, or divine law (themistes).',
    location: 'Traditionally placed along the western volcanic coast of Sicily (near Mount Etna) or the Campanian coast',
    encounterWithOdysseus:
      'Drawn by curiosity and the heroic expectation of guest-gifts (xenia), Odysseus enters the giant’s cave with twelve companions. Returning with his flocks, Polyphemus blocks the cavern mouth with an immovable stone weighing tons. Scoffing at Zeus Xenios (Protector of Strangers), the giant dashes two Greeks against the floor like puppies, tearing them limb from limb and devouring them raw. Over two days, he consumes four more men.',
    howOdysseusResponded:
      'Restraining his martial instinct to stab the giant in the liver (which would trap them forever behind the unmovable boulder), Odysseus conceals his identity under the linguistic pun Outis (“Nobody”). He intoxicates Polyphemus with three bowls of Maron’s potent, unwatered wine. When the giant collapses into a drunken stupor, Odysseus and four men heat a sharpened olive-wood stake in the embers and ram it into his single eye, twisting it like a shipwright’s drill. They escape clinging to the woolly bellies of his giant rams. As his ship reaches safe water, Odysseus hubristically shouts his real name, prompting the curse that prolongs his wandering.',
    literarySignificance:
      'The foundational confrontation between raw physical brutality (bie) and intellectual resourcefulness (metis). The linguistic double-meaning between Outis (“Nobody”) and me tis (“cunning”) proves that the weapon of the new heroic age is the mind, speech, and self-restraint.',
    bookReferences: 'Book IX, Lines 105–566',
    quote: {
      greek: 'Κύκλωψ, εἰ δή τίς σε καταθνητῶν ἀνθρώπων ὀφθαλμοῦ εἴρηται ἀεικελίην ἀλαωτύν, φάσθαι Ὀδυσσῆα πτολιπόρθιον ἐξαλαῶσαι...',
      english: 'Cyclops, if any mortal man asks you of the unsightly blinding of your eye, tell him that Odysseus, sacker of cities, blinded you, Laertes’ son, whose home is in Ithaca!',
      citation: 'Book IX.502–505',
    },
    attributes: {
      perilType: 'Anthropophagy & Violation of Sacred Hospitality',
      crewLosses: 'Six seasoned Ithacan companions devoured',
      virtueTested: 'Metis (Cunning), Strategic Timing & Self-Restraint',
    },
  },
  {
    id: 'laestrygonians',
    name: 'The Laestrygonians',
    greekName: 'Λαιστρυγόνες',
    classification: 'Cannibalistic Giant Race & Perilous Hostile Society',
    category: 'people-tribe',
    categoryLabel: 'Mythic People & Tribes',
    description:
      'A ferocious race of gigantic, man-eating beings inhabiting the city of Telepylos, where the paths of night and day are so close that a sleepless herdsman could earn double wages. Ruled by King Antiphates, they possess a semblance of human municipal order—a citadel, town fountain, and royal palace—masking absolute savagery.',
    location: 'Traditionally identified with the fjord-like harbor of Bonifacio in southern Corsica or northern Sardinia',
    encounterWithOdysseus:
      'The twelve Ithacan ships sail into a marvelous harbor encircled by sheer, unbroken precipices with a narrow entrance between two promontories. Eleven captains anchor their ships close together within the mirror-flat basin. Odysseus alone cautiously tethers his vessel to a rock outside the harbor mouth. Scouts sent inland meet Antiphates’ daughter at the Artacia fountain; she leads them to the palace, where the queen, gigantic as a mountain crag, summons King Antiphates. The king instantly seizes one scout to butcher him for supper.',
    howOdysseusResponded:
      'Antiphates raises a bloodcurdling cry throughout the city. Thousands of gigantic Laestrygonians rush to the cliff edges, pelting the enclosed harbor with house-sized boulders. Eleven ships are smashed to splinters; the giants spear the drowning warriors from the waters like fish to carry them off for grim feasts. Seeing the catastrophic marine trap, Odysseus draws his sharp sword from his thigh, hacks through the stern-hawser of his outside ship, and urges his oarsmen to pull for their lives, barely escaping as the sole surviving vessel.',
    literarySignificance:
      'The greatest military catastrophe of the epic. In a matter of minutes, eleven ships and hundreds of veteran warriors are obliterated without a battle. It shatters the collective heroic community: Odysseus is reduced from the admiral of an Ithacan fleet to the captain of a lone, vulnerable ship.',
    bookReferences: 'Book X, Lines 80–132',
    quote: {
      greek: 'οἱ δ᾽ ἀπὸ πετράων ἀνδραχθέσι χερμαδίοισιν βάλλον... ἰχθῦς δ᾽ ὣς πείροντες ἀτερπέα δαῖτα φέροντο.',
      english: 'And they from the rocks hurled boulders big as a man could lift... and spearing them like fish they bore them home, a grim feast.',
      citation: 'Book X.121–124',
    },
    attributes: {
      perilType: 'Catastrophic Natural Marine Trap & Cannibalism',
      crewLosses: 'Eleven ships shattered; hundreds of men slain',
      virtueTested: 'Tactical Caution & Decisive Crisis Evacuation',
    },
  },
  {
    id: 'sirens',
    name: 'The Sirens',
    greekName: 'Σειρῆνες',
    classification: 'Mythic Bird-Maidens & Seductive Bards of Death',
    category: 'mythic-being',
    categoryLabel: 'Monstrous Beings & Giants',
    description:
      'Two (or three in later tradition) divine winged bird-maidens dwelling on an island meadow strewn with the rotting bones and shriveled hides of mariners. They possess miraculous, supernatural singing voices that carry across the glass-calm sea, promising omniscient cosmic knowledge to all who listen.',
    location: 'The Sirenuse Archipelago (identified with the Li Galli islands off Positano and the Amalfi Coast, Italy)',
    encounterWithOdysseus:
      'Warned by Circe of their lethal song, Odysseus approaches their isle under a dead calm. The Sirens sing a magnificent dactylic hexameter hymn directly addressing Odysseus by his heroic titles (*Poluaine Odusseu*), promising that whoever hears their voice leaves wiser and delighted, possessing knowledge of everything the Greeks and Trojans suffered in broad Troy.',
    howOdysseusResponded:
      'Odysseus executes Circe’s precise instructions: he softens a round wheel of beeswax in the hot sun and kneads it firmly into the ears of every crewman. Desiring desperately to hear the divine song himself, he orders his men to bind his hands and feet to the stout mast with ship’s cables, swearing an oath to bind him tighter if he pleads to be released. When the song enchants his soul, Odysseus thrashes and nods frantic commands to untie him; his loyal men, Perimedes and Eurylochus, rise, bind him with additional ropes, and row steadfastly until the song fades into the distance.',
    literarySignificance:
      'The Sirens represent the dangerous allure of artistic and historical omniscience. They sing not of physical lust, but of poetry, memory, and glory (kleos). To succumb to them is to dwell eternally in past trauma rather than creating a living future. Odysseus experiences the forbidden art through voluntary physical restraint and collaborative social contract.',
    bookReferences: 'Book XII, Lines 39–54, 153–200',
    quote: {
      greek: 'ἴδμεν γάρ τοι πάνθ᾽ ὅσ᾽ ἐνὶ Τροίῃ εὐρείῃ Ἀργεῖοι Τρῶές τε θεῶν ἰότητι μόγησαν: ἴδμεν δ᾽, ὅσσα γένηται ἐπὶ χθονὶ πουλυβοτείρῃ.',
      english: 'For we know all things that in broad Troy the Argives and Trojans endured by the will of the gods; yea, we know all things that come to pass upon the fruitful earth.',
      citation: 'Book XII.189–191',
    },
    attributes: {
      perilType: 'Irresistible Cognitive Temptation & Seductive Song',
      crewLosses: 'Zero casualties due to wax seals and mast bonds',
      virtueTested: 'Cognitive Discipline, Curiosity & Prudence',
    },
  },
  {
    id: 'scylla',
    name: 'Scylla',
    greekName: 'Σκύλλα',
    classification: 'Six-Headed Marine Crag-Monster',
    category: 'sea-monster',
    categoryLabel: 'Sea Monsters & Vortexes',
    description:
      'A hideous, immortal marine horror dwelling in a cave halfway up a sheer, cloud-piercing cliff of polished basalt. She has twelve dangling, malformed feet and six enormously long, flexible serpentine necks, each crowned by a terrifying head bristling with three dense rows of razor-sharp fangs. She yelps like a newborn puppy while reaching down into the waves to snatch dolphins, sea-dogs, and sailors from passing ships.',
    location: 'The rocky European cliffs of the Strait of Messina (modern Scilla, Calabria, Italy)',
    encounterWithOdysseus:
      'Navigating the narrow strait where an arrow could scarcely fly from cliff to cliff, Odysseus must pass beneath Scylla’s crag. As he stares anxiously at the boiling whirlpool of Charybdis on the opposite shore, Scylla suddenly darts her six serpentine necks down to the deck. She plucks six of Odysseus’s bravest oarsmen directly from the benches, lifting them screaming high into the air, calling Odysseus’s name for the last time as she devours them at her cavern mouth.',
    howOdysseusResponded:
      'Adhering strictly to Circe’s heartbreaking counsel that Scylla is immortal and cannot be slain by force (bie), Odysseus conceals the monster’s existence from his crew so they will not drop their oars in panic and huddle in the hold. Though he momentarily arms himself with two spears on the foredeck in defiance of Circe’s advice, he realizes no human weapon can touch her. He urges his men to row with all their strength, enduring the agony of watching his comrades devoured before his eyes.',
    literarySignificance:
      'The supreme tragedy of leadership under impossible constraints. Homer compares Scylla devouring the men to an angler on a jutting rock casting bait into the sea and whipping writhing fish onto the shore. Odysseus describes watching his loyal men calling his name while being torn apart as the most pitiful sight his eyes ever beheld in all his wanderings.',
    bookReferences: 'Book XII, Lines 73–126, 222–259',
    quote: {
      greek: 'αὐτοῦ δ᾽ εἰνὶ θύρῃσι κατήσθιε κεκλήγοντας, χεῖρας ἐμοὶ ὀρέγοντας ἐν αἰνῇ δηϊοτῆτι...',
      english: 'And there at the mouth of her cave she devoured them, screaming aloud and stretching forth their hands to me in their awful death-struggle.',
      citation: 'Book XII.256–257',
    },
    attributes: {
      perilType: 'Inevitable Predatory Sacrifice & Inescapable Loss',
      crewLosses: 'Six valiant oarsmen seized and consumed',
      virtueTested: 'Calculated Tragic Leadership & Fortitude under Grief',
    },
  },
  {
    id: 'charybdis',
    name: 'Charybdis',
    greekName: 'Χάρυβδις',
    classification: 'Devouring Chthonic Sea-Vortex / Whirlpool',
    category: 'sea-monster',
    categoryLabel: 'Sea Monsters & Vortexes',
    description:
      'A monstrous, primeval chthonic marine abyss lurking beneath a low, mist-wrapped rocky headland crowned by a colossal wild fig tree. Thrice a day she sucks down the black sea with horrifying suction, revealing the dark ocean bed boiling with sand and slime, and thrice a day she vomits the churning water back into the sky like a cauldron over a roaring fire, showering spray over the cliff tops.',
    location: 'The Sicilian whirlpool currents of the Strait of Messina (near modern Punta Faro, Sicily)',
    encounterWithOdysseus:
      'Odysseus encounters Charybdis twice: first while threading the strait with his ship (choosing to stay closer to Scylla’s crag rather than risk total annihilation in the vortex); and second, as a solitary survivor clinging to the wreckage of his ship’s keel and mast after Zeus destroys his vessel with lightning.',
    howOdysseusResponded:
      'In the first passage, Odysseus steers wide of Charybdis, accepting the loss of six men to Scylla rather than losing all men and the ship. In his second encounter as a castaway drifting alone on broken timbers, the southern gale sweeps him directly back into Charybdis’s jaws. Just as the whirlpool sucks his timbers into the black abyss, Odysseus leaps upward with acrobatic agility, grabbing the roots and low branches of the wild fig tree. He hangs suspended like a bat over the boiling abyss for hours until Charybdis vomits the timbers back up in the late afternoon. Dropping down onto the floating spar, he rows frantic strokes with his hands and drifts away to safety.',
    literarySignificance:
      'Charybdis represents total, undifferentiated cosmic annihilation—the complete dissolution of vessel, body, and identity into the boiling dark. Odysseus’s survival by hanging from the wild fig tree embodies pure biological and mental refusal to perish.',
    bookReferences: 'Book XII, Lines 101–110, 234–244, 426–446',
    quote: {
      greek: 'τρὶς μὲν γάρ τ᾽ ἀνίησιν ἐπ᾽ ἤματι, τρὶς δ᾽ ἀναροιβδεῖ δεινόν: μὴ σύ γε κεῖθι τύχοις, ὅτε ῥοιβδήσειεν...',
      english: 'Thrice a day she spurts it forth, and thrice she sucks it down in terrible wise. Never mayest thou be there when she sucks it down, for not even the Earth-shaker could save thee from ruin!',
      citation: 'Book XII.105–107',
    },
    attributes: {
      perilType: 'Total Marine Annihilation & Boiling Chthonic Abyss',
      crewLosses: 'Entire ship avoided on first pass; swallows wreckage on second',
      virtueTested: 'Acrobatic Tenacity, Physical Endurance & Patience',
    },
  },
];
