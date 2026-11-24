import type { QuizQuestion } from '../types/trial';

export const TRIAL_QUESTIONS_POOL: QuizQuestion[] = [
  // --- Category 1: General Knowledge (5 questions) ---
  {
    id: 'gen-1',
    category: 'general-knowledge',
    categoryLabel: 'General Knowledge',
    question: 'According to classical scholarship, why is The Odyssey traditionally divided into exactly twenty-four books (rhapsodies)?',
    homericCitation: 'Alexandrian Canon',
    options: [
      'Homer composed the epic in twenty-four distinct days of public recitation.',
      'Librarians at Alexandria divided the epic to match the twenty-four letters of the Ionic Greek alphabet.',
      'The twenty-four books correspond to the twenty-four years of Odysseus’s total absence from Ithaca.',
      'Aristotle divided the text into twenty-four acts to satisfy classical tragic poetics.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Hellenistic scholars at the Great Library of Alexandria (traditionally Zenodotus of Ephesus and Aristarchus of Samothrace) divided both the Iliad and the Odyssey into 24 rhapsodies corresponding to the 24 letters of the Ionic alphabet (Alpha through Omega).',
    scholarlyContext:
      'Homer’s oral performance was not originally divided into written chapters; the division was standardized in the 3rd century BCE for papyrus scroll organization.',
  },
  {
    id: 'gen-2',
    category: 'general-knowledge',
    categoryLabel: 'General Knowledge',
    question: 'In what poetic meter was The Odyssey originally composed and recited by ancient bards (aoidoi)?',
    homericCitation: 'Epic Verse Tradition',
    options: [
      'Iambic Pentameter',
      'Elegiac Couplet',
      'Dactylic Hexameter',
      'Trochaic Tetrameter',
    ],
    correctOptionIndex: 2,
    explanation:
      'The Odyssey, like the Iliad, was composed in dactylic hexameter ("heroic meter"), consisting of six metrical feet per line featuring dactyls (one long syllable followed by two short) and spondees (two long syllables).',
    scholarlyContext:
      'Dactylic hexameter provided the formulaic rhythm that allowed oral poets to improvise and remember thousands of lines with formulaic epithets.',
  },
  {
    id: 'gen-3',
    category: 'general-knowledge',
    categoryLabel: 'General Knowledge',
    question: 'How many days of dramatic action unfold in the chronological present of The Odyssey’s narrative?',
    homericCitation: 'Narrative Chronology',
    options: [
      'Exactly twenty years',
      'Ten years and six months',
      'Approximately forty-one days',
      'A single calendar year',
    ],
    correctOptionIndex: 2,
    explanation:
      'While the epic recounts ten years of wanderings and twenty years of absence, the actual dramatic present of the poem spans only approximately forty-one days, from Athena’s petition on Olympus in Book I to the peace covenants in Book XXIV.',
    scholarlyContext:
      'The ten years of wanderings prior to Calypso are recounted retrospectively by Odysseus himself over two evenings in Books IX–XII at the Phaeacian court.',
  },
  {
    id: 'gen-4',
    category: 'general-knowledge',
    categoryLabel: 'General Knowledge',
    question: 'Who are the two professional bards (aoidoi) depicted within the poem whose singing moves listeners to tears?',
    homericCitation: 'Books I & VIII',
    options: [
      'Orpheus and Linus',
      'Phemios in Ithaca and Demodocus in Phaeacia',
      'Tiresias in Thebes and Halitherses in Ithaca',
      'Maron of Thrace and Melanthius of Ithaca',
    ],
    correctOptionIndex: 1,
    explanation:
      'Phemios is the resident singer in Odysseus’s hall in Ithaca (spared by Odysseus in Book XXII), while blind Demodocus is the revered court bard of King Alcinous in Phaeacia whose Trojan War songs cause Odysseus to weep into his purple mantle.',
    scholarlyContext:
      'Ancient commentators frequently saw Demodocus, the blind singer endowed with divine voice by the Muse, as Homer’s subtle self-portrait.',
  },
  {
    id: 'gen-5',
    category: 'general-knowledge',
    categoryLabel: 'General Knowledge',
    question: 'What is the title given by scholars to the first four books of The Odyssey (Books I–IV)?',
    homericCitation: 'Books I–IV',
    options: [
      'The Apologue',
      'The Telemachy (Telemacheia)',
      'The Nekuia',
      'The Mnēstērophonia',
    ],
    correctOptionIndex: 1,
    explanation:
      'Books I through IV are universally designated "The Telemachy" because they focus entirely on Prince Telemachus’s search for news of his father, establishing the crisis on Ithaca before Odysseus himself is introduced in Book V.',
    scholarlyContext:
      'By deferring Odysseus’s physical introduction until Book V, Homer builds immense anticipation and establishes what Odysseus has to lose at home.',
  },

  // --- Category 2: Characters & Relationships (5 questions) ---
  {
    id: 'char-1',
    category: 'characters-relationships',
    categoryLabel: 'Characters & Relationships',
    question: 'By what subtle physical mark does the old nurse Eurycleia discover the true identity of the disguised Odysseus in Book XIX?',
    homericCitation: 'Book XIX.390–475',
    options: [
      'A golden signet ring bearing an engraved dolphin',
      'A scar above his knee inflicted by a white-tusked boar on Mount Parnassus',
      'A distinctive birthmark resembling an olive leaf on his shoulder',
      'A tattoo of Athena’s owl on his forearm',
    ],
    correctOptionIndex: 1,
    explanation:
      'While washing the beggar’s feet, Eurycleia feels the distinctive scar above his knee, received during a youthful hunting expedition with his grandfather Autolycus on Mount Parnassus. Recognizing her master, she drops his foot into the bronze basin.',
    scholarlyContext:
      'Erich Auerbach’s seminal literary essay "Odysseus’ Scar" (in Mimesis) uses this scene to contrast Homeric narrative illumination with biblical syntax.',
  },
  {
    id: 'char-2',
    category: 'characters-relationships',
    categoryLabel: 'Characters & Relationships',
    question: 'How did Penelope delay choosing a suitor for over three years before being betrayed by her maids?',
    homericCitation: 'Book II.93–110',
    options: [
      'She claimed she was fasting in mourning until a shooting star appeared.',
      'She declared she must first weave a funeral shroud for elderly Lord Laertes, unweaving it each night by torchlight.',
      'She demanded that each suitor journey to Egypt and bring back thirty golden tripods.',
      'She pretended to be struck blind by Apollo until Odysseus’s bow was polished.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Penelope announced she would choose a suitor once she completed a burial shroud for Odysseus’s aged father Laertes. She wove the fine fabric at the great loom by day and unraveled her stitches each night by torchlight for three full years.',
    scholarlyContext:
      'Penelope’s shroud stratagem is her signature act of mētis (cunning), mirroring Odysseus’s own deceptive storytelling and delaying tactics.',
  },
  {
    id: 'char-3',
    category: 'characters-relationships',
    categoryLabel: 'Characters & Relationships',
    question: 'What is the background and noble lineage of Eumaeus, Odysseus’s loyal master swineherd?',
    homericCitation: 'Book XV.403–484',
    options: [
      'He was an Athenian general exiled for refusing to slaughter Persian prisoners.',
      'He was born a royal prince of the island of Syria, kidnapped in infancy by a Phoenician nursemaid and sold into slavery.',
      'He was Odysseus’s illegitimate younger brother born to a captive Trojan concubine.',
      'He was a Spartan wrestler who fled his homeland after accidentally killing King Tyndareus’s nephew.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Eumaeus recounts to Odysseus that his father Ctesius was king of the prosperous island of Syria. His treacherous Phoenician nursemaid stole him as a toddler and traded him to Phoenician merchants, who sold him to Odysseus’s father Laertes.',
    scholarlyContext:
      'Homer honors Eumaeus by addressing him directly in the second person ("And you, O swineherd Eumaeus..."), proving that innate nobility of soul (aretē) transcends slave status.',
  },
  {
    id: 'char-4',
    category: 'characters-relationships',
    categoryLabel: 'Characters & Relationships',
    question: 'Which suitor is the most arrogant and cruel, hurling a footstool at Odysseus and plotting to murder Telemachus at sea?',
    homericCitation: 'Books IV, XVII, XXII',
    options: [
      'Amphinomus',
      'Eurymachus',
      'Antinous, son of Eupeithes',
      'Melanthius',
    ],
    correctOptionIndex: 2,
    explanation:
      'Antinous is the ruthless ringleader of the suitors. He organizes the armed ambush at Asteris to slaughter Telemachus, hurls a footstool that strikes Odysseus’s shoulder blade, and is appropriately the first man killed in Book XXII, shot through the throat mid-sip.',
    scholarlyContext:
      'Antinous embodies unadulterated hybris (fatal arrogance). His counterpart Amphinomus, who displays occasional moderation, is still condemned because he refuses to leave the corrupt company.',
  },
  {
    id: 'char-5',
    category: 'characters-relationships',
    categoryLabel: 'Characters & Relationships',
    question: 'How does Penelope conclusively test Odysseus’s identity in Book XXIII before accepting him as her husband?',
    homericCitation: 'Book XXIII.173–206',
    options: [
      'She asks him to recite the secret names of the twelve maidservants who betrayed the palace.',
      'She commands Eurycleia to move their bridal bed out of the bedchamber, knowing only Odysseus knows it was built around a living olive tree.',
      'She challenges him to shoot an arrow through the eye of a bronze needle at sixty paces.',
      'She demands he display the golden brooch depicting a hound pinning a dappled fawn.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Penelope commands the nurse to move the master bed outside. Odysseus flares in anger, protesting that no mortal could move it because he carved the bedpost out of the living trunk of an ancient olive tree rooted into the foundation rock. This secret sign validates his identity.',
    scholarlyContext:
      'Penelope’s trick is the ultimate test of mētis: she traps the master of traps with his own architectural secret, proving they are absolute intellectual equals (homophrosynē).',
  },

  // --- Category 3: Journey & Encounters (5 questions) ---
  {
    id: 'journ-1',
    category: 'journey-encounters',
    categoryLabel: 'Journey & Encounters',
    question: 'What false name does Odysseus give to the Cyclops Polyphemus in Book IX to confound his neighbors?',
    homericCitation: 'Book IX.364–370',
    options: [
      'Mentes',
      'Mentor',
      'Outis ("Nobody" or "No one")',
      'Aithon of Crete',
    ],
    correctOptionIndex: 2,
    explanation:
      'Odysseus tells the giant: "Outis (Nobody) is my name. My mother and father call me Nobody, and all my companions as well." When blinded, Polyphemus screams to his kin: "Nobody is killing me by fraud or by force!" so they ignore his cries.',
    scholarlyContext:
      'The wordplay relies on a double pun: in ancient Greek, mē tis ("no one") sounds identical to mētis ("cunning intelligence").',
  },
  {
    id: 'journ-2',
    category: 'journey-encounters',
    categoryLabel: 'Journey & Encounters',
    question: 'What divine plant with a black root and milk-white flower does Hermes give Odysseus to nullify Circe’s sorcery?',
    homericCitation: 'Book X.302–306',
    options: [
      'Asphodel',
      'Moly (μῶλυ)',
      'Nepenthe',
      'Hemlock',
    ],
    correctOptionIndex: 1,
    explanation:
      'Hermes plucks the magical herb moly from the earth, warning Odysseus that it is perilous for mortal men to dig, though the gods have power over all things. Drinking Circe’s potion with moly protects Odysseus from turning into swine.',
    scholarlyContext:
      'Moly symbolizes the necessity of divine illumination: mortal intellect alone cannot triumph over chthonic sorcery without divine grace.',
  },
  {
    id: 'journ-3',
    category: 'journey-encounters',
    categoryLabel: 'Journey & Encounters',
    question: 'Why did King Aeolus refuse to assist Odysseus a second time after the bag of winds was untied?',
    homericCitation: 'Book X.67–75',
    options: [
      'His bronze-walled island had drifted beyond the Pillars of Heracles.',
      'He concluded Odysseus must be cursed and utterly detested by the deathless gods.',
      'Odysseus had broken the ox-hide bag with an iron spear.',
      'Poseidon threatened to submerge Aeolia beneath a tidal wave.',
    ],
    correctOptionIndex: 1,
    explanation:
      'When the blown-back ship reappears at Aeolia, the king drives Odysseus from his hall: "Begone from our island with speed! It is not lawful for me to succor or send on his way a man who is hated by the blessed gods!"',
    scholarlyContext:
      'In archaic morality, persistent misfortune was viewed not as random bad luck, but as active proof of divine curse or cosmic pollution (miasma).',
  },
  {
    id: 'journ-4',
    category: 'journey-encounters',
    categoryLabel: 'Journey & Encounters',
    question: 'What fatal sacrilege did Odysseus’s crew commit on the island of Thrinacia while Odysseus was asleep?',
    homericCitation: 'Book XII.339–396',
    options: [
      'They set fire to the sacred cypress grove of Persephone.',
      'Persuaded by Eurylochus, they slaughtered and roasted the immortal cattle of Helios Hyperion.',
      'They stole the golden tripods from the altar of Zeus Xenios.',
      'They drank the sacred wine of Maron until they went mad and fought each other.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Trapped for a month by unyielding south gales and starving, Eurylochus convinces the crew to slaughter Helios’s sacred herd. When they sail, Helios petitions Zeus, who blasts the ship with a lightning bolt, drowning every man except Odysseus.',
    scholarlyContext:
      'The slaughter of the Cattle of the Sun is explicitly highlighted in the opening lines of the epic (Book I.7–9) as the prime example of mortal atasthalia (reckless folly).',
  },
  {
    id: 'journ-5',
    category: 'journey-encounters',
    categoryLabel: 'Journey & Encounters',
    question: 'How long did Odysseus remain detained on the isolated paradise island of Ogygia by the nymph Calypso?',
    homericCitation: 'Book VII.259',
    options: [
      'One year',
      'Three years',
      'Seven years',
      'Ten years',
    ],
    correctOptionIndex: 2,
    explanation:
      'Odysseus spent seven full years on Ogygia as Calypso’s consort before Zeus dispatched Hermes in the eighth year to command his release. Odysseus spent his days weeping on the headland, longing for Ithaca.',
    scholarlyContext:
      'The number seven signifies an extended, mythic epoch of isolation. Calypso’s name derives from kalyptein ("to conceal"), making Ogygia a place where Odysseus’s identity was buried from the world.',
  },

  // --- Category 4: Greek Mythology (5 questions) ---
  {
    id: 'myth-1',
    category: 'greek-mythology',
    categoryLabel: 'Greek Mythology',
    question: 'Under which epithet is Zeus specifically invoked as the divine avenger and protector of strangers, guests, and suppliants?',
    homericCitation: 'Books IX, XIV, XVII',
    options: [
      'Zeus Olympios',
      'Zeus Xenios',
      'Zeus Terpikeraunos',
      'Zeus Horkios',
    ],
    correctOptionIndex: 1,
    explanation:
      'Zeus Xenios is the patron of the sacred guest-host relationship (xenia). Any violation of hospitality—whether by a host (like Polyphemus) or by a guest (like the suitors)—directly insults Zeus Xenios and warrants divine vengeance.',
    scholarlyContext:
      'Xenia was the foundational social mechanism of archaic Greek international relations; Zeus Xenios ensured that traveling Greeks were protected outside their home cities.',
  },
  {
    id: 'myth-2',
    category: 'greek-mythology',
    categoryLabel: 'Greek Mythology',
    question: 'What memorable proclamation regarding death does the shade of Achilles deliver to Odysseus in the Underworld (Book XI)?',
    homericCitation: 'Book XI.488–491',
    options: [
      'He boasts that his glorious name (kleos) shines brighter than all the stars in heaven.',
      'He says he would rather work the soil as the hired serf of a landless peasant than rule over all the departed dead.',
      'He commands Odysseus to burn his golden armor upon the shores of the river Oceanus.',
      'He warns Odysseus that all women are inherently treacherous and cannot be trusted.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Achilles rebukes Odysseus’s attempt to console him with his eternal fame: "Speak not comfortably to me of death, glorious Odysseus! I would rather live upon the earth as the hireling of another, with a landless man of little substance, than be king over all the dead who have perished."',
    scholarlyContext:
      'This is one of the most radical philosophical pivots in ancient Greek literature: Achilles, the supreme hero of the Iliad who chose an early death for eternal glory, repudiates the martial code in favor of physical mortal life.',
  },
  {
    id: 'myth-3',
    category: 'greek-mythology',
    categoryLabel: 'Greek Mythology',
    question: 'What shape-shifting Old Man of the Sea did King Menelaus wrestle on the sands of Pharos in Egypt to discover the fate of Odysseus?',
    homericCitation: 'Book IV.384–460',
    options: [
      'Nereus',
      'Glaucus',
      'Proteus',
      'Phorcys',
    ],
    correctOptionIndex: 2,
    explanation:
      'Menelaus ambushes Proteus, shepherd of the seal herds, disguised beneath seal skins. Despite Proteus transforming into a bearded lion, a serpent, a leopard, a boar, running water, and a towering tree, Menelaus grips him tight until the god yields and reveals that Odysseus is alive on Calypso’s isle.',
    scholarlyContext:
      'The word "protean" derives from Proteus’s ability to constantly shift forms—a mythic mirror to Odysseus’s own shapeshifting rhetorical personality.',
  },
  {
    id: 'myth-4',
    category: 'greek-mythology',
    categoryLabel: 'Greek Mythology',
    question: 'Which sea-goddess takes pity on Odysseus during Poseidon’s tempest in Book V, offering him her immortal veil (kredemnon) for protection?',
    homericCitation: 'Book V.333–353',
    options: [
      'Thetis',
      'Amphitrite',
      'Ino (Leucothea, the White Goddess)',
      'Galatea',
    ],
    correctOptionIndex: 2,
    explanation:
      'Ino of the slim ankles, once a mortal and now a sea-nymph called Leucothea, rises from the waves like a shearwater. She commands Odysseus to strip off his heavy clothes, abandon his shattered raft, tie her immortal veil beneath his chest, and swim toward the Phaeacian coast.',
    scholarlyContext:
      'The stripping of Odysseus’s garments and reliance on Leucothea’s veil symbolizes a ritual rebirth: he must shed all physical possessions and enter the waters naked to emerge as a new man on Scheria.',
  },
  {
    id: 'myth-5',
    category: 'greek-mythology',
    categoryLabel: 'Greek Mythology',
    question: 'Why does Poseidon harbor such relentless, bitter hatred against Odysseus throughout the epic?',
    homericCitation: 'Book I.68–75',
    options: [
      'Odysseus plundered Poseidon’s coastal sanctuary at Troy without pouring libations.',
      'Odysseus blinded Poseidon’s monstrous son, the Cyclops Polyphemus.',
      'Poseidon favored the suitors of Ithaca because Antinous’s family were his hereditary priests.',
      'Odysseus refused to sacrifice twelve black stallions before crossing the Aegean Sea.',
    ],
    correctOptionIndex: 1,
    explanation:
      'As Zeus explains in Book I, Poseidon bears unending grudge because Odysseus blinded the single eye of Polyphemus, greatest among the Cyclopes, whom the nymph Thoösa bore to Poseidon. Poseidon vows not to kill Odysseus, but to prolong his wanderings in agony.',
    scholarlyContext:
      'Poseidon represents the unyielding, amoral elemental wrath of nature that cannot be reasoned with by human intellect—only endured until fate is accomplished.',
  },

  // --- Category 5: Literary Themes & Symbolism (5 questions) ---
  {
    id: 'theme-1',
    category: 'themes-symbolism',
    categoryLabel: 'Themes & Symbolism',
    question: 'What is the profound meaning of the Greek term nostos, from which our modern word "nostalgia" is derived?',
    homericCitation: 'The Core Theme',
    options: [
      'The glory won through dying heroically in combat',
      'The perilous journey home, survival, and the reclamation of identity and household',
      'The deceptive speech used by bards to entertain kings',
      'The fatal madness sent by the gods to punish mortal arrogance',
    ],
    correctOptionIndex: 1,
    explanation:
      'Nostos signifies the journey home, homecoming, and survival. Combined with algos ("pain/grief"), it forms "nostalgia"—the aching sorrow for home. In the Odyssey, nostos is the moral counterweight to kleos (martial glory).',
    scholarlyContext:
      'While the Iliad is an epic of kleos achieved through battlefield death, the Odyssey defines kleos through successful nostos—returning to reclaim the household and living to tell the tale.',
  },
  {
    id: 'theme-2',
    category: 'themes-symbolism',
    categoryLabel: 'Themes & Symbolism',
    question: 'What does the bridal bed built around the living olive tree symbolize in the poetic architecture of The Odyssey?',
    homericCitation: 'Book XXIII.181–204',
    options: [
      'The inevitable decay of all mortal institutions over twenty years',
      'The secret military treaty signed between Ithaca and the island of Sparta',
      'The rooted stability, enduring fidelity, and living foundation of Odysseus and Penelope’s marriage and realm',
      'The dominance of Athena’s olive over Poseidon’s salt spring',
    ],
    correctOptionIndex: 2,
    explanation:
      'The olive bed is literally rooted into the living rock of Ithaca. It cannot be moved without destroying the palace foundation, symbolizing that Odysseus and Penelope’s marriage, oikos, and political kingdom are organic, immovable, and anchored in nature and fidelity.',
    scholarlyContext:
      'The olive tree is sacred to Athena, symbolizing that wisdom, peace, and domestic order are the true anchors of human civilization.',
  },
  {
    id: 'theme-3',
    category: 'themes-symbolism',
    categoryLabel: 'Themes & Symbolism',
    question: 'To what extraordinary artist does Homer compare Odysseus when the king strings the great horn bow in Book XXI?',
    homericCitation: 'Book XXI.404–411',
    options: [
      'A master blacksmith forging an axe blade in icy water',
      'A skilled bard stretching a new sheep-gut string effortlessly around a lyre’s peg',
      'A bronze sculptor carving a monument to Pallas Athena',
      'A seasoned helmsman steering a ship through boiling shoals',
    ],
    correctOptionIndex: 1,
    explanation:
      'Homer writes: "Even as a musician skilled on the lyre and in song easily stretches a string around a new peg, tying the twisted sheep-gut at either end, so without effort did Odysseus string the great bow." When he plucks it, the string sings sweetly like a swallow.',
    scholarlyContext:
      'This famous epic simile fuses the warrior with the poet: the weapon of retributive slaughter becomes an instrument of divine music and cosmic harmony.',
  },
  {
    id: 'theme-4',
    category: 'themes-symbolism',
    categoryLabel: 'Themes & Symbolism',
    question: 'In Homeric moral philosophy, what is the meaning of atasthalia (ἀτασθαλία), cited by Zeus in Book I as the root of human suffering?',
    homericCitation: 'Book I.7 & Book I.32–34',
    options: [
      'The arbitrary whim of the three Fates (Moirai)',
      'Blind, reckless moral folly and willful hubris that brings self-inflicted ruin',
      'The sacred obligation to pour libations to subterranean deities',
      'The inescapable curse inherited from an ancestor’s blood-guilt',
    ],
    correctOptionIndex: 1,
    explanation:
      'Atasthalia refers to willful, reckless arrogance and moral blindness. Zeus proclaims in Book I that mortals falsely accuse the gods of sending grief, when in fact humans bring sorrows upon themselves beyond what fate ordains through their own atasthalia (like Aegisthus and the suitors).',
    scholarlyContext:
      'This concept marks a pivotal ethical evolution in archaic Greece, holding human beings morally accountable for their own destruction rather than blaming divine caprice.',
  },
  {
    id: 'theme-5',
    category: 'themes-symbolism',
    categoryLabel: 'Themes & Symbolism',
    question: 'What final enigmatic journey does the prophet Tiresias reveal that Odysseus must undertake after restoring peace on Ithaca?',
    homericCitation: 'Book XI.119–137',
    options: [
      'He must sail back to Troy and build a bronze monument to the slaughtered Achaeans.',
      'He must carry a well-balanced oar so far inland that a traveler mistakes it for a winnowing fan, and there sacrifice to Poseidon.',
      'He must descend into the crater of Mount Etna to retrieve Vulcan’s golden hammer.',
      'He must travel to the Nile Delta and spend his final years in an Egyptian temple.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Tiresias prophesies that after slaying the suitors, Odysseus must take an oar on his shoulder and march inland until he reaches a land of men who know nothing of the sea or salted meat. When a passerby mistakes his oar for a winnowing fan, he must plant it in the earth and sacrifice a ram, bull, and boar to Poseidon, earning a gentle death in old age.',
    scholarlyContext:
      'The planted oar represents the final reconciliation between Odysseus (the sailor) and Poseidon (the sea): carrying sea-culture to agrarian inland country transforms the instrument of maritime peril into a tool of harvest and peace.',
  },
];
