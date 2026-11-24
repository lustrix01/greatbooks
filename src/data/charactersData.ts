import type { CharacterProfile } from '../types/odyssey';

export const CHARACTERS_DATA: CharacterProfile[] = [
  {
    id: 'odysseus',
    name: 'Odysseus',
    greekName: 'Ὀδυσσεύς',
    epithet: 'Polytropos (Man of Many Turns) · Polymētis (Master of Stratagems) · Tlēmōn (Enduring)',
    category: 'mortal',
    categoryLabel: 'Mortal of Ithaca',
    background:
      'Son of Laertes and Anticleia, ruler of rugged Ithaca, husband of Penelope, and father of Telemachus. Celebrated as the architect of the Trojan Horse that ended the ten-year siege of Troy. Before departing for the Trojan expedition, he left his newborn son in the cradle, embarking on a twenty-year absence that would test the limits of mortal endurance.',
    roleInEpic:
      'The central epic protagonist and traveler. Odysseus embodies the shift from the raw, fatal martial rage (bie) of Achilles to intellectual resilience (metis). He survives monsters, storms, and the wrath of Poseidon, choosing mortality and his rocky home over the ageless divinity offered by Calypso.',
    relationshipToOdysseus:
      'Self · King of Ithaca, husband to Penelope, father to Telemachus, favored mortal of Athena, hated foe of Poseidon.',
    importantAppearances: [
      'Book V: Weeping on Ogygia’s shore, rejecting immortality, and building his escape raft.',
      'Book IX: The Apologue to the Phaeacians: blinding Polyphemus under the name Nobody.',
      'Book XI: The Nekuia in the Underworld: consulting Tiresias and embracing his mother’s shade.',
      'Book XIII: Awakening in mist on Ithaca’s shore; meeting Athena in disguise.',
      'Book XXI: Stringing the great bow of Eurytus like a bard tuning a lyre.',
      'Book XXIII: The reunion with Penelope and the revelation of the olive-tree bed.',
    ],
    literarySignificance:
      'Odysseus is the foundational archetype of the cognitive hero in Western literature. His heroic stature derives not from dying young in glory, but from surviving through speech, disguise, narrative invention, and self-command (*tlēmosynē*). His longing for Ithaca (*nostos*) asserts that human meaning is inseparable from mortal limitation, family, and home.',
    relatedCharacterIds: ['penelope', 'telemachus', 'athena', 'poseidon', 'eumaeus', 'calypso'],
    quote: {
      greek: 'τέτλαθι δή, κραδίη: καὶ κύντερον ἄλλο ποτ᾽ ἔτλης...',
      english: 'Endure, my heart; you have endured worse than this on the day the Cyclops devoured my strong comrades.',
      citation: 'Book XX.18',
    },
  },
  {
    id: 'penelope',
    name: 'Penelope',
    greekName: 'Πηνελόπεια',
    epithet: 'Periphrōn (Circumspect, Wise) · Echēphrōn (Prudent, Discreet)',
    category: 'mortal',
    categoryLabel: 'Mortal of Ithaca',
    background:
      'Daughter of Icarius of Sparta and the naiad Periboea; cousin of Helen of Troy and Clytemnestra. Queen of Ithaca and wife of Odysseus. For two decades, she raises Telemachus alone and manages the royal estate in the face of widespread rumors of her husband’s demise at sea.',
    roleInEpic:
      'The moral and domestic fortress of Ithaca. Besieged for over three years by more than one hundred predatory suitors consuming her stores, Penelope defends the royal household (oikos) through psychological delays, emotional endurance, and intellectual stratagems equal to those of Odysseus himself.',
    relationshipToOdysseus:
      'Faithful wife, co-ruler of Ithaca, and intellectual equal (homophrosynē—shared mind).',
    importantAppearances: [
      'Book I: Descending to the great hall in tears at Phemios’s bitter song of the Achaean returns.',
      'Book II: Antinous recounts the stratagem of Laertes’ burial shroud woven by day and unraveled by torchlight.',
      'Book XVIII: Dazzling the suitors with goddess-like majesty and eliciting lavish courtship gifts without committing her hand.',
      'Book XIX: Her intimate nocturnal interview with the disguised Odysseus; dream of the twenty geese.',
      'Book XXI: Announcing the contest of the twelve iron axes and the unbending bow.',
      'Book XXIII: Testing Odysseus through the secret sign of the immovable olive-tree bridal bed.',
    ],
    literarySignificance:
      'Penelope shatters the misogynistic paradigms voiced by Agamemnon in the Underworld. Rather than being passive or deceitful like Clytemnestra, her cunning (metis) is noble, watchful, and defensive. The mutual recognition of Odysseus and Penelope represents the union of two identical minds (*homophrosynē*), celebrating reciprocal fidelity as the highest civic virtue.',
    relatedCharacterIds: ['odysseus', 'telemachus', 'antinous', 'athena', 'eumaeus'],
    quote: {
      greek: 'μή μοι νῦν χολώσῃς, Ὀδυσεῦ... θεοὶ δ᾽ ὤπαζον ὀϊζύν, οἳ νῶϊν ἀγάσαντο παρ᾽ ἀλλήλοισι μένοντε ἥβης ταρπῆναι...',
      english: 'Be not angry with me, Odysseus... The gods gave us sorrow, who begrudged that we two should abide together and enjoy our youth.',
      citation: 'Book XXIII.209–212',
    },
  },
  {
    id: 'telemachus',
    name: 'Telemachus',
    greekName: 'Τηλέμαχος',
    epithet: 'Pepnymenos (Prudent, Clear-Headed) · Theoeidēs (Godlike in Stature)',
    category: 'mortal',
    categoryLabel: 'Mortal of Ithaca',
    background:
      'Only son of Odysseus and Penelope, born immediately before his father’s departure for the Trojan War. Reared in a palace besieged by the insolent suitors, he reaches manhood without a father’s guidance, feeling powerless to stop the destruction of his ancestral inheritance.',
    roleInEpic:
      'The protagonist of the opening four books (the Telemachy). With Athena’s encouragement, Telemachus embarks on a voyage to Pylos and Sparta, transforming from an anxious, passive youth into a courageous prince capable of sharing rule and fighting side-by-side with Odysseus in the banquet hall.',
    relationshipToOdysseus:
      'Son and heir; fellow avenger and restorer of the Ithacan royal house.',
    importantAppearances: [
      'Book I: Daydreaming of his father while watching the insolent suitors; visited by Athena disguised as Mentes.',
      'Book II: Summoning the first Ithacan assembly in twenty years and defying the suitors.',
      'Book III–IV: Journeying by chariot to King Nestor of Pylos and King Menelaus of Sparta to seek news of his father.',
      'Book XVI: Reunion with Odysseus in Eumaeus’s hut; plotting the destruction of the suitors.',
      'Book XXI: Nearly stringing his father’s great bow on the fourth attempt, stopping at a subtle nod from Odysseus.',
      'Book XXII: Arming his father and slaying suitors in the battle of the great hall.',
    ],
    literarySignificance:
      'Telemachus’s maturation illustrates the epic concept of paideia—the moral education and initiation of a young man into heroic responsibility. His journey mirrors Odysseus’s nostos: both father and son must reclaim their rightful identity and place within the oikos.',
    relatedCharacterIds: ['odysseus', 'penelope', 'athena', 'eumaeus', 'antinous'],
    quote: {
      greek: 'μήτηρ μέν τ᾽ ἐμέ φησι τοῦ ἔμμεναι, αὐτὰρ ἐγώ γε οὐκ οἶδ᾽: οὐ γάρ πώ τις ἑὸν γόνον αὐτὸς ἀνέγνω.',
      english: 'My mother says indeed that I am his son; for my part I do not know. Nobody really knows his own father.',
      citation: 'Book I.215–216',
    },
  },
  {
    id: 'athena',
    name: 'Athena (Pallas)',
    greekName: 'Παλλὰς Ἀθήνη',
    epithet: 'Glaukōpis (Owl-Eyed, Flashing-Eyed) · Alalkomēneis (Guardian, Champion)',
    category: 'deity',
    categoryLabel: 'Olympian Deity',
    background:
      'Daughter of Zeus, sprung fully armed from her father’s head after he swallowed Metis (Wisdom). Virgin goddess of tactical warfare, strategic intelligence, wisdom, and handicraft. Divine protectress of heroes who rely on skill and mind rather than sheer force.',
    roleInEpic:
      'The divine patroness and protector of Odysseus and his family. She initiates the action of the poem on Mount Olympus while Poseidon is absent, guides Telemachus across Greece, shields Odysseus in shipwrecks, conceals him in disguise upon Ithaca, and intervenes to enforce lasting peace in Book XXIV.',
    relationshipToOdysseus:
      'Divine sponsor and kindred spirit. Their relationship is grounded in mutual delight in wit, rhetoric, and strategic cunning.',
    importantAppearances: [
      'Book I: Petitioning Zeus on Olympus to permit Odysseus’s release from Ogygia; appearing to Telemachus as Mentes.',
      'Book II: Guiding Telemachus in the guise of Mentor and preparing his ship.',
      'Book VI: Directing Nausicaa to the river mouth to discover the stranded Odysseus.',
      'Book XIII: Revealing the foggy landscape of Ithaca to Odysseus; matching wits and transforming him into an old beggar.',
      'Book XXII: Shaking the terrible aegis over the suitors during the slaughter in the hall.',
      'Book XXIV: Halting the civil blood-feud between the suitors’ kin and establishing perpetual covenants of peace.',
    ],
    literarySignificance:
      'Athena represents divine providence aligned with human intelligence. Unlike other gods who act through arbitrary fury, Athena honors and amplifies human agency. Her famous dialogue with Odysseus in Book XIII presents the highest degree of intimacy between mortal and Olympian in archaic Greek literature.',
    relatedCharacterIds: ['odysseus', 'telemachus', 'zeus', 'poseidon', 'penelope'],
    quote: {
      greek: 'αἰεί τοι τοιοῦτον ἐνὶ στήθεσσι νόημα: τῷ σε καὶ οὐ δύναμαι προλιπεῖν δύστηνον ἐόντα, οὕνεκ᾽ ἐπητής ἐσσι καὶ ἀγχίνοος καὶ ἐχέφρων.',
      english: 'Always you have such a mind in your breast; therefore I cannot abandon you in your distress, because you are courteous, quick-witted, and steadfast.',
      citation: 'Book XIII.330–332',
    },
  },
  {
    id: 'poseidon',
    name: 'Poseidon',
    greekName: 'Ποσειδῶν',
    epithet: 'Ennosigaios (Earth-Shaker) · Kyanochaitēs (Dark-Haired) · Pelagios (Of the Deep)',
    category: 'deity',
    categoryLabel: 'Olympian Deity',
    background:
      'Son of Cronus and Rhea, brother of Zeus and Hades. Lord of the seas, earthquakes, tidal surges, and horses. He holds dominion over the marine abyss and wields the bronze trident that shatters ships and fractures mountains.',
    roleInEpic:
      'The primary divine antagonist of Odysseus. Enraged by the blinding of his monstrous son Polyphemus, Poseidon vows that Odysseus will either never see his homeland or return late, alone, in ruin, and upon a foreign ship to find misery in his house.',
    relationshipToOdysseus:
      'Relentless divine adversary whose elemental wrath detains Odysseus for a decade upon the sea.',
    importantAppearances: [
      'Book I: Feasting in Ethiopia while Athena persuades Zeus to allow Odysseus’s homecoming.',
      'Book V: Returning from Ethiopia and sighting Odysseus sailing on his raft from Ogygia; raising a catastrophic tempest that shatters the craft.',
      'Book IX: Invoked by Polyphemus in prayer after the blinding to lay an enduring curse on Odysseus.',
      'Book XIII: Petrifying the Phaeacian ship into stone outside Scheria as punishment for giving Odysseus convoy.',
    ],
    literarySignificance:
      'Poseidon represents the wild, unforgiving elemental forces of nature that resist human order and intellect. While Athena embodies civilization and the mind, Poseidon represents the raw, chaotic fury of the wine-dark sea that cannot be persuaded, only endured.',
    relatedCharacterIds: ['odysseus', 'polyphemus', 'athena', 'zeus'],
    quote: {
      greek: 'ὢ πόποι, ἦ μάλα δὴ μετεβούλευσαν θεοὶ ἄλλως ἀμφ᾽ Ὀδυσῆϊ, ἐμεῖο μετ᾽ Αἰθιόπεσσιν ἐόντος...',
      english: 'Ah, surely the gods have changed their counsel concerning Odysseus while I was among the Ethiopians; now he is near the land of the Phaeacians!',
      citation: 'Book V.286–288',
    },
  },
  {
    id: 'zeus',
    name: 'Zeus',
    greekName: 'Ζεύς',
    epithet: 'Terpikeraunos (Delighting in Thunder) · Xenios (Protector of Strangers) · Hupsizugos (High-Throned)',
    category: 'deity',
    categoryLabel: 'Olympian Deity',
    background:
      'Son of Cronus and Rhea; supreme ruler of Mount Olympus and sovereign over gods and men. Upholder of cosmic order, fate (moira), royal authority, and the sacred laws of hospitality (xenia).',
    roleInEpic:
      'The ultimate arbiter of divine justice. Zeus oversees the council of the gods in Book I, sending Hermes to release Odysseus from Ogygia. He sends portents of thunder and flying eagles to validate mortal prophecies, strikes Odysseus’s ship with lightning when his crew slaughters the Sun God’s cattle, and commands the cessation of blood-feud in Book XXIV.',
    relationshipToOdysseus:
      'Cosmic judge who enforces Odysseus’s fated return while punishing his crew’s sacrilege.',
    importantAppearances: [
      'Book I: Reflecting on the folly of mortals blaming the gods for sorrows their own recklessness creates (citing Aegisthus); sanctioning Athena’s mission.',
      'Book V: Dispatching Hermes to Ogygia with the absolute order demanding Odysseus’s release.',
      'Book XII: Striking Odysseus’s ship with a thunderbolt at the demand of Helios after the cattle are eaten.',
      'Book XX: Sending a thunderclap from clear blue skies to confirm Odysseus’s approaching vengeance.',
      'Book XXIV: Ordering Athena to establish lasting covenants of peace on Ithaca, ending generational blood vengeance.',
    ],
    literarySignificance:
      'In the Odyssey, Zeus presides over a more moralized cosmic order than in the Iliad. In his opening speech in Book I, he establishes the foundational moral thesis of the poem: humans bring destruction upon themselves through their own reckless hubris (*atasthalia*), while divine justice ultimately balances the scales.',
    relatedCharacterIds: ['athena', 'poseidon', 'odysseus', 'hermes'],
    quote: {
      greek: 'ὢ πόποι, οἷον δή νυ θεοὺς βροτοὶ αἰτιόωνται. ἐξ ἡμέων γάρ φασι κάκ᾽ ἔμμεναι: οἱ δὲ καὶ αὐτοὶ σφῇσιν ἀτασθαλίῃσιν ὑπὲρ μόρον ἄλγε᾽ ἔχουσιν...',
      english: 'Look you now, how mortals blame the gods! For they say that evils come from us, when they themselves through their own blind folly have sorrows beyond that which is ordained.',
      citation: 'Book I.32–34',
    },
  },
  {
    id: 'circe',
    name: 'Circe',
    greekName: 'Κίρκη',
    epithet: 'Polypharmakos (Dread Mistress of Potent Herbs) · Auidēessa (Possessing Human Voice)',
    category: 'mythical-being',
    categoryLabel: 'Mythical Sorceress & Goddess',
    background:
      'Daughter of the Titan sun-god Helios and the ocean nymph Perse; sister of King Aeëtes of Colchis (keeper of the Golden Fleece) and Queen Pasiphaë of Crete. She dwells in secluded magical majesty on the island of Aeaea.',
    roleInEpic:
      'The formidable sorceress who turns Odysseus’s men into swine using drugged honey-wine. After Odysseus overcomes her magic using the holy moly plant, she becomes his indispensable host, lover, and prophetic counselor, directing him to the Underworld and mapping out the perils of the Sirens, Scylla, and Charybdis.',
    relationshipToOdysseus:
      'Dangerous adversary turned lover, host, and essential guide through the realm of monsters.',
    importantAppearances: [
      'Book X: Drugging the Ithacan scouts with Pramnian wine and striking them into swine; subdued by Odysseus’s sword and swearing a great oath.',
      'Book X: Hosting Odysseus for a full year; directing him to travel across Oceanus to summon Tiresias.',
      'Book XII: Greeting Odysseus upon his return from Hades; providing detailed navigational warnings about the Sirens, the Wandering Rocks, Scylla, Charybdis, and Helios’s cattle.',
    ],
    literarySignificance:
      'Circe represents the archetypal enchantress and the perils of sensual oblivion. Her palace, where wolves and lions fawn like gentle hounds, shows civilization turned inside out. Her transformation from predator to benefactor illustrates how metis can tame archaic nature and enlist it in the service of nostos.',
    relatedCharacterIds: ['odysseus', 'tiresias', 'calypso', 'hermes'],
    quote: {
      greek: 'τίς δέ, γύναι, ταύτην μοι ὁδὸν κυβερνήσει; εἰς Ἄϊδος δ᾽ οὔ πώ τις ἀφίκετο νηῒ μελαίνῃ.',
      english: 'Ah Circe, who will guide us on this journey? For never yet did any man reach Hades on a black ship.',
      citation: 'Book X.501–502',
    },
  },
  {
    id: 'calypso',
    name: 'Calypso',
    greekName: 'Καλυψώ',
    epithet: 'Diō Nymphē (Luminous Nymph) · Dolossa (The Concealer) · Potnia (Revered Goddess)',
    category: 'mythical-being',
    categoryLabel: 'Mythical Nymph & Goddess',
    background:
      'Daughter of the Titan Atlas (who upholds the pillars of heaven and earth). Her name derives from the Greek verb kalyptein, meaning "to conceal" or "to hide." She dwells in absolute isolation on the paradise island of Ogygia, described as the navel of the western sea.',
    roleInEpic:
      'The beautiful nymph who detains Odysseus on Ogygia for seven years following his shipwreck at Thrinacia. She offers him agelessness, eternal youth, and divine status if he will forget Ithaca and live as her immortal consort, yielding bitterly to Zeus’s decree when Hermes arrives with orders for his departure.',
    relationshipToOdysseus:
      'Lover and captor whose love represents the seductive temptation to abandon mortal purpose.',
    importantAppearances: [
      'Book I: Described by Athena as detaining the weeping Odysseus in her cedar-scented caves.',
      'Book V: Welcoming Hermes into her flowering paradise cavern; raging against the double standard of male gods jealous of mortal consorts; assisting Odysseus in felling twenty trees to construct his raft.',
      'Book V: Offering Odysseus immortality on the eve of his departure, which he diplomatically declines.',
    ],
    literarySignificance:
      'Calypso represents the existential danger of paradise. Her island is flawless, fragrant, and eternal, but it is outside human history and suffering. In choosing Penelope and his rocky island over Calypso and immortality, Odysseus chooses mortality, time, and love over eternal stasis.',
    relatedCharacterIds: ['odysseus', 'zeus', 'athena', 'circe', 'penelope'],
    quote: {
      greek: 'σχέτλιοί ἐστε, θεοί, ζηλήμονες ἔξοχον ἄλλων, οἵ τε θεαῖς ἀγάασθε παρ᾽ ἀνδράσιν εὐνάζεσθαι...',
      english: 'Cruel are you, gods, and jealous beyond all others, who grudge that goddesses should mate openly with mortal men!',
      citation: 'Book V.118–120',
    },
  },
  {
    id: 'polyphemus',
    name: 'Polyphemus',
    greekName: 'Πολύφημος',
    epithet: 'Kuklōps (Round-Eyed Giant) · Krataios (Mighty) · Son of Poseidon',
    category: 'mythical-being',
    categoryLabel: 'Mythical Monster & Giant',
    background:
      'Son of Poseidon and the sea-nymph Thoösa. Chief of the pastoral Cyclopes, a race of one-eyed giants living in isolated mountain caves without agriculture, maritime travel, laws, or civic assemblies.',
    roleInEpic:
      'The monstrous shepherd who traps Odysseus and twelve crewmen in his cave. Rejecting Zeus’s laws of hospitality, he devours six men raw before Odysseus intoxicates him with wine and blinds his solitary eye with a heated olive-wood stake. Polyphemus’s prayer to his father Poseidon curses Odysseus’s journey for ten years.',
    relationshipToOdysseus:
      'Mortal enemy whose blinding provokes the enduring cosmic wrath of Poseidon.',
    importantAppearances: [
      'Book IX: Rolling a colossal boulder across the entrance to his cave; questioning the strangers; devouring two men immediately.',
      'Book IX: The Nobody (Outis) ruse; drinking Maron’s wine; falling into a stupor; the blinding with the burning stake.',
      'Book IX: Calling to his neighboring Cyclopes that "Nobody is killing me by fraud or by force!"; checking the bellies of the sheep as the Greeks escape.',
      'Book IX: Hurling mountain-tops into the sea at Odysseus’s ship; praying to Poseidon for Odysseus’s ruin.',
    ],
    literarySignificance:
      'Polyphemus is the embodiment of anti-civilization. He respects neither the gods nor the sacred guest-host covenant (xenia). The linguistic wordplay between Outis ("Nobody") and metis ("cunning") serves as the centerpiece of Homeric wit, proving that intellect triumphs over brute force.',
    relatedCharacterIds: ['odysseus', 'poseidon'],
    quote: {
      greek: 'ὦ φίλοι, Οὖτίς με κτείνει δόλῳ οὐδὲ βίηφιν.',
      english: 'O friends, Nobody is killing me by fraud or by force!',
      citation: 'Book IX.408',
    },
  },
  {
    id: 'tiresias',
    name: 'Tiresias',
    greekName: 'Τειρεσίας',
    epithet: 'Mantis Alaos (Blind Prophet) · Thēbaios (Of Thebes) · Sceptre-Bearing Shade',
    category: 'shade',
    categoryLabel: 'Prophet of the Underworld',
    background:
      'The legendary blind seer of Thebes who lived through seven generations. Persephone granted him the unique gift of retaining his full intellect and prophetic consciousness even after death in the Kingdom of Hades, where other shades wander as mindless phantoms.',
    roleInEpic:
      'The prophetic guide in the Underworld. When summoned by Odysseus’s blood sacrifice in Book XI, Tiresias drinks the dark blood and reveals the divine cause of Odysseus’s wanderings, warns him of the Cattle of the Sun, details the massacre awaiting him on Ithaca, and outlines his final inland voyage to appease Poseidon.',
    relationshipToOdysseus:
      'Underworld seer and prophetic guide whose vision charts the remainder of Odysseus’s life and death.',
    importantAppearances: [
      'Book X: Circe instructs Odysseus that he must sail to the edge of Oceanus to consult the soul of blind Tiresias.',
      'Book XI: Approaching the sacrificial pit with his golden scepter; drinking the black ram’s blood; revealing the wrath of Poseidon and the trial of Thrinacia.',
      'Book XI: Prophesying that Odysseus will die a gentle death far from the sea in prosperous old age.',
    ],
    literarySignificance:
      'Tiresias links the underworld of ancestral memory with future reality. His prophecy expands the scope of the epic beyond the restoration of Ithaca: Odysseus must later carry an oar so far inland that a traveler mistakes it for a winnowing fan, planting it in the soil to reconcile finally with Poseidon.',
    relatedCharacterIds: ['odysseus', 'circe', 'poseidon'],
    quote: {
      greek: 'νόστον δίζηαι μελιηδέα, φαίδιμ᾽ Ὀδυσσεῦ: τὸν δέ τοι ἀργαλέον θήσει θεός...',
      english: 'You seek a sweet homecoming, glorious Odysseus, but a god will make it bitter for you; for I think you will not escape the Earth-Shaker...',
      citation: 'Book XI.100–102',
    },
  },
  {
    id: 'eumaeus',
    name: 'Eumaeus',
    greekName: 'Εὔμαιος',
    epithet: 'Diorchos (Master Swineherd) · Okhamos Andrōn (Noble Prince of Herdsmen) · Pistos (Faithful)',
    category: 'mortal',
    categoryLabel: 'Mortal of Ithaca',
    background:
      'Born a royal prince on the prosperous island of Syria, son of King Ctesius. Kidnapped in infancy by his treacherous Phoenician nursemaid and sold into slavery to Odysseus’s father Laertes, he was raised alongside Odysseus’s younger sister Ctimene with noble affection.',
    roleInEpic:
      'Odysseus’s loyal master swineherd. Despite extreme poverty caused by the suitors’ daily feasts, he preserves Odysseus’s herds, offering unconditional hospitality (xenia) to the disguised king. He serves as Odysseus’s surrogate brother, Telemachus’s surrogate father, and an essential ally in reclaiming the palace.',
    relationshipToOdysseus:
      'Lifelong loyal servant, surrogate brother, and steadfast combat comrade in the great hall.',
    importantAppearances: [
      'Book XIV: Welcoming the ragged beggar into his rustic forest hut, slaughtering two piglets, and offering his own warm fleece bed.',
      'Book XV: Greeting Telemachus like a father welcoming home an only son from a distant land.',
      'Book XVI: Witnessing the emotional reunion of father and son; delivering secret messages to Penelope.',
      'Book XXI: Weeping over Odysseus’s great bow; locking the outer gates of the courtyard to trap the suitors.',
      'Book XXII: Standing armed with spear and shield alongside Odysseus, Telemachus, and Philoetius against the 108 suitors.',
    ],
    literarySignificance:
      'Eumaeus represents Homer’s most radical social egalitarian statement. Homer addresses him directly in the second person ("And you, O swineherd Eumaeus..."), an honor bestowed on no other character in the epic. True nobility (*aretē*) is proven to reside not in aristocratic birth or wealth, but in fidelity, kindness, and moral integrity.',
    relatedCharacterIds: ['odysseus', 'telemachus', 'penelope', 'antinous'],
    quote: {
      greek: 'ξεῖν᾽, οὔ μοι θέμις ἔστ᾽, οὐδ᾽ εἰ κακίων σέθεν ἔλθοι, ξεῖνον ἀτιμῆσαι: πρὸς γὰρ Διός εἰσιν ἅπαντες ξεῖνοί τε πτωχοί τε...',
      english: 'Stranger, it were not right for me, even if a worse man than you came, to slight a stranger; for from Zeus are all strangers and beggars, and a little gift is precious.',
      citation: 'Book XIV.56–58',
    },
  },
  {
    id: 'antinous',
    name: 'Antinous',
    greekName: 'Ἀντίνοος',
    epithet: 'Hēgētōr (Leader of the Suitors) · Hybristēs (Insolent, Violent) · Son of Eupeithes',
    category: 'mortal',
    categoryLabel: 'Mortal of Ithaca',
    background:
      'Son of Eupeithes, an Ithacan aristocrat whom Odysseus once saved from a bloodthirsty mob. Antinous is the wealthiest, most charismatic, and most ruthless leader of the 108 young suitors vying for Penelope’s hand and the throne of Ithaca.',
    roleInEpic:
      'The chief human antagonist in Ithaca. Arrogant and devoid of shame, he plots the assassination of young Telemachus at sea, abuses the disguised Odysseus, hurls a footstool at his shoulder, and organizes the brutal boxing match between Odysseus and the vagabond Irus. Appropriately, he is the first suitor to fall in the hall, shot through the throat mid-sip from a golden wine chalice.',
    relationshipToOdysseus:
      'Primary mortal antagonist, corrupt usurper of the royal hall, and leader of the predatory suitors.',
    importantAppearances: [
      'Book II: Blaming Penelope before the Ithacan assembly for the deception of the burial shroud.',
      'Book IV: Organizing the twelve-man ship ambush at Asteris strait to murder Telemachus on his return from Sparta.',
      'Book XVII: Cursing the disguised Odysseus and hurling a footstool that strikes his right shoulder blade.',
      'Book XVIII: Instigating the boxing match between Odysseus and Irus for sausage; mocking the old beggar.',
      'Book XXI: Taunting Telemachus; attempting and failing to bend the horn bow; suggesting they postpone the trial.',
      'Book XXII: Slain first by Odysseus’s arrow piercing his throat while raising a two-handled golden wine cup.',
    ],
    literarySignificance:
      'Antinous embodies hybris—the fatal moral arrogance that violates divine and human law. He perverts every principle of xenia, consuming another man’s inheritance and plotting murder within his host’s house. His sudden death mid-feast illustrates the inevitability of divine retribution (*nemesis*).',
    relatedCharacterIds: ['odysseus', 'penelope', 'telemachus', 'eumaeus'],
    quote: {
      greek: 'οὐκ ἀποβήσεαι ὦδε, κακὸν τέλος ἔμμεναι ὀρφνῇ; ἀλλ᾽ αὕτως ἀλάλησαι, ἐπεὶ δαιτὸς κεκόρησαι...',
      english: 'Will you not begone, wretched vagabond, and be content that you feast at your ease among princes and lack nothing?',
      citation: 'Book XVII.446–447',
    },
  },
];
