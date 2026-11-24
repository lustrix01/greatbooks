import type { BookSynopsis, CharacterProfile, VoyageWaypoint, HomericTheme } from '../types/odyssey';

export const EPIC_METADATA = {
  title: "The Odyssey",
  greekTitle: "Ὀδύσσεια",
  author: "Homer",
  greekAuthor: "Ὅμηρος",
  compositionPeriod: "Circa late 8th or early 7th century BCE",
  verseForm: "Dactylic Hexameter",
  totalBooks: 24,
  proem: {
    greek: "Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον, ὃς μάλα πολλὰ\nπλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσε·\nπολλῶν δ᾽ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω,\nπολλὰ δ᾽ ὅ γ᾽ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν,\nἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων.",
    english: "Sing in me, Muse, and through me tell the story of that man skilled in all ways of contending, the wanderer, harried for years on end, after he plundered the stronghold on the proud height of Troy. He saw the towns and learned the minds of many distant men, and weathered many bitter nights and days in his deep heart at sea, while he fought only to save his life, to bring his shipmates home.",
    citation: "Book I, Lines 1–5"
  }
};

export const HOMERIC_THEMES: HomericTheme[] = [
  {
    id: "nostos",
    greekTerm: "νόστος",
    transliteration: "Nostos",
    englishDefinition: "The perilous journey home, survival, and reclamation of identity",
    academicOverview: "Nostos is not merely physical travel, but a spiritual and political reclamation. Odysseus's journey home represents the recovery of self, household (oikos), and kingdom after the chaotic dispersion of the Trojan War.",
    keyPassages: ["Book I.1–10", "Book V.150–220", "Book XIII.187–249"]
  },
  {
    id: "xenia",
    greekTerm: "ξενία",
    transliteration: "Xenia",
    englishDefinition: "The sacred guest-host relationship overseen by Zeus Xenios",
    academicOverview: "The foundational moral code of archaic Greece. The epic contrasts exemplary hosts (Nestor, Menelaus, the Phaeacians, the swineherd Eumaeus) with transgressive hosts (Polyphemus, the Sirens) and corrupt guests (the Suitors).",
    keyPassages: ["Book III.34–74", "Book IX.256–306", "Book XIV.45–110"]
  },
  {
    id: "metis",
    greekTerm: "μῆτις",
    transliteration: "Metis",
    englishDefinition: "Cunning intelligence, resourcefulness, disguise, and strategic forethought",
    academicOverview: "Contrasted with the raw martial fury (bie) of Achilles in the Iliad, metis is the defining virtue of Odysseus (polymetis). It encompasses deceptive speech, disguise, narrative invention, and intellectual endurance.",
    keyPassages: ["Book IX.364–414", "Book XIII.291–310", "Book XIX.165–203"]
  },
  {
    id: "kleos",
    greekTerm: "κλέος",
    transliteration: "Kleos",
    englishDefinition: "Renown, eternal fame transmitted through heroic song and memory",
    academicOverview: "While the Iliad presents kleos won through youthful death on the battlefield, the Odyssey redefines kleos as survival, enduring hardship, returning home to restore the oikos, and controlling one's own living tale.",
    keyPassages: ["Book VIII.487–520", "Book XI.478–503", "Book XXIV.190–202"]
  }
];

export const BOOKS_SUMMARY: BookSynopsis[] = [
  {
    number: 1,
    romanNumeral: "I",
    title: "Athena Inspires the Prince",
    greekTitle: "Ἀθηνᾶς παραίνεσις πρὸς Τηλέμαχον",
    tetralogy: "The Telemachy",
    summary: "Ten years after the fall of Troy, Odysseus is held captive on Ogygia by Calypso. At Olympus, Athena petitions Zeus for his release while Poseidon feasts among the Ethiopians. Athena descends to Ithaca disguised as Mentes, urging the despondent Telemachus to summon an assembly and sail to Pylos and Sparta for news of his father.",
    keyEvents: [
      "Council of the gods on Olympus while Poseidon is absent",
      "Athena arrives in Ithaca disguised as Mentes",
      "Telemachus observes the insolence of Penelope's suitors",
      "Phemios sings of the bitter returns of the Achaeans"
    ],
    prominentCharacters: ["Athena", "Telemachus", "Penelope", "Antinous", "Eurymachus"],
    significantThemes: ["Xenia", "Nostos", "Divine Intervention"],
    famousLines: {
      greek: "Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον...",
      english: "Tell me, Muse, of the man of many turns...",
      citation: "1.1"
    }
  },
  {
    number: 2,
    romanNumeral: "II",
    title: "Telemachus Sets Sail",
    greekTitle: "Τηλεμάχου ἐκκλησία",
    tetralogy: "The Telemachy",
    summary: "Telemachus convenes the first Ithaca council since Odysseus's departure twenty years prior. Antinous blames Penelope for her ruse with Laertes' shroud. Halitherses interprets an omen of two fighting eagles. Aided secretly by Athena in the guise of Mentor, Telemachus provisions a ship with old nurse Eurycleia and embarks into the night.",
    keyEvents: [
      "Telemachus speaks before the Ithacan assembly",
      "Antinous recounts the deception of Penelope's shroud",
      "Omen of the two eagles sent by Zeus",
      "Athena as Mentor gathers a crew and ship"
    ],
    prominentCharacters: ["Telemachus", "Antinous", "Halitherses", "Eurycleia", "Mentor (Athena)"],
    significantThemes: ["Maturation", "Omens", "Corrupted Assembly"]
  },
  {
    number: 3,
    romanNumeral: "III",
    title: "King Nestor and the Ways of Pylos",
    greekTitle: "Τὰ ἐν Πύλῳ",
    tetralogy: "The Telemachy",
    summary: "Telemachus and Athena arrive at Pylos during a grand sacrifice of black bulls to Poseidon. The venerable King Nestor provides exemplary hospitality before asking their identities. Nestor recalls the Trojan War, Agamemnon's murder, and sends his son Pisistratus to accompany Telemachus by chariot toward Sparta.",
    keyEvents: [
      "Sacrifice on the shores of Pylos",
      "Nestor's model demonstration of sacred xenia",
      "Tale of Agamemnon, Clytemnestra, and Aegisthus",
      "Athena transforms into a vulture, revealing her divine nature"
    ],
    prominentCharacters: ["Telemachus", "Nestor", "Pisistratus", "Athena"],
    significantThemes: ["Xenia", "Piety", "Heroic Memory"]
  },
  {
    number: 4,
    romanNumeral: "IV",
    title: "The King and Queen of Sparta",
    greekTitle: "Τὰ ἐν Λακεδαίμονι",
    tetralogy: "The Telemachy",
    summary: "Telemachus reaches Sparta during a royal double-wedding. Menelaus and Helen welcome the youths. Helen slips nepenthe into the wine to dispel grief, and both recall Odysseus at Troy. Menelaus recounts wrestling the shape-shifting Old Man of the Sea (Proteus) in Egypt, learning that Odysseus is alive but weeping on Calypso's isle.",
    keyEvents: [
      "Opulent hospitality in the gilded hall of Menelaus",
      "Helen dispenses nepenthe and recalls Odysseus disguised as a beggar",
      "Menelaus narrates the ambush of Proteus in the seal skins",
      "Suitors in Ithaca plot an ambush at Asteris to murder Telemachus"
    ],
    prominentCharacters: ["Menelaus", "Helen", "Telemachus", "Pisistratus", "Proteus"],
    significantThemes: ["Memory and Grief", "Heroic Legends", "Perilous Ambush"]
  },
  {
    number: 5,
    romanNumeral: "V",
    title: "From the Isle of Calypso to the Sea",
    greekTitle: "Καλυψοῦς σχεδία",
    tetralogy: "The Phaeacian Haven",
    summary: "Hermes flies to Ogygia to deliver Zeus's command to Calypso. Odysseus is introduced weeping on the barren shore, longing for his native soil despite offer of immortality. He fells twenty trees to craft a sturdy raft. Poseidon sights him on the eighteenth day and stirs a monstrous tempest; saved by Leucothea's magical veil, Odysseus washes ashore on Scheria.",
    keyEvents: [
      "Hermes visits the enchanted cedar cave of Calypso",
      "Odysseus chooses mortality and home over eternal youth",
      "Odysseus constructs his raft with master craftsmanship",
      "Poseidon's wrath smashes the raft; Ino provides her immortal veil"
    ],
    prominentCharacters: ["Odysseus", "Calypso", "Hermes", "Poseidon", "Leucothea (Ino)"],
    significantThemes: ["Mortality vs Immortality", "Sea Peril", "Endurance"]
  },
  {
    number: 6,
    romanNumeral: "VI",
    title: "Nausicaa and the River Shore",
    greekTitle: "Ναυσικάας ἄφιξις",
    tetralogy: "The Phaeacian Haven",
    summary: "Athena prompts princess Nausicaa to wash linens at the river mouth. While playing ball with her maidens, their cries wake the salt-crusted Odysseus. He approaches with consummate rhetorical tact, supplicating her without touching her knees. Nausicaa clothes him and instructs him how to enter the city and appeal to Queen Arete.",
    keyEvents: [
      "Nausicaa travels to the washing cisterns with the mules",
      "Odysseus emerges naked like a mountain lion",
      "Masterclass of rhetorical diplomacy by Odysseus",
      "Instructions to reach the palace of King Alcinous"
    ],
    prominentCharacters: ["Odysseus", "Nausicaa", "Athena"],
    significantThemes: ["Modesty", "Supplication", "Civilization"]
  },
  {
    number: 7,
    romanNumeral: "VII",
    title: "The Palace of King Alcinous",
    greekTitle: "Ἀλκινόου εἴσοδος",
    tetralogy: "The Phaeacian Haven",
    summary: "Shrouded in a protective mist by Athena, Odysseus navigates the prosperous Phaeacian city. He marvels at Alcinous's utopian palace and evergreen orchards. Entering the hall, he drops at Queen Arete's knees at the hearth. The royal couple promises him safe passage on their wondrous self-steering ships.",
    keyEvents: [
      "Mist-shrouded walk through the city",
      "Description of the magical Phaeacian orchard and gold dogs",
      "Supplication before Arete at the central hearth",
      "Alcinous pledges a convoy homeward without demanding his name"
    ],
    prominentCharacters: ["Odysseus", "Alcinous", "Arete", "Athena"],
    significantThemes: ["Utopian Governance", "Sacred Hearth", "Anonymity"]
  },
  {
    number: 8,
    romanNumeral: "VIII",
    title: "The Songs of Demodocus and the Games",
    greekTitle: "Φαιάκων ἀγώνες",
    tetralogy: "The Phaeacian Haven",
    summary: "The Phaeacians host athletic games. Goaded by Euryalus, Odysseus hurls a discus far beyond the rest. Blind bard Demodocus sings three tales: the feud of Odysseus and Achilles, the risqué love of Ares and Aphrodite, and the Trojan Horse. Odysseus weeps openly, prompting Alcinous to ask his true name and history.",
    keyEvents: [
      "Demodocus's song of the Trojan War makes Odysseus weep",
      "Athletic challenges and the insult of Euryalus",
      "Odysseus hurls the heaviest discus with ease",
      "Alcinous's direct inquiry: 'Who are you, stranger?'"
    ],
    prominentCharacters: ["Odysseus", "Alcinous", "Demodocus", "Euryalus", "Broadsea"],
    significantThemes: ["Bardic Art", "Athletic Kleos", "Emotional Revelation"]
  },
  {
    number: 9,
    romanNumeral: "IX",
    title: "The Tale Begins: The Cicones, Lotus-Eaters, and Polyphemus",
    greekTitle: "Κυκλώπεια",
    tetralogy: "The Wanderings (Apologue)",
    summary: "Odysseus reveals his identity ('I am Odysseus, son of Laertes, known to the world for every kind of craft'). He recounts the raid on Ismarus, the tranquilizing Lotus-Eaters, and arrival in the cave of the monstrous Cyclops Polyphemus. Blinding the giant with an olive-wood stake and declaring himself 'Nobody' (Outis), Odysseus escapes under rams, but hubristically shouts his true name upon leaving, cursing his voyage.",
    keyEvents: [
      "Raid of the Cicones and crew indiscipline",
      "The Lotus-Eaters and the danger of forgetting home",
      "Entering the Cyclops' cave and Polyphemus devouring six men",
      "The 'Nobody' ruse, wine drugged sleep, and eye-blinding",
      "Escape beneath the bellies of rams",
      "Odysseus's boastful shout and Polyphemus's prayer to Poseidon"
    ],
    prominentCharacters: ["Odysseus", "Polyphemus", "Poseidon"],
    significantThemes: ["Metis vs Bie", "Violation of Xenia", "Hubris and Identity"],
    famousLines: {
      greek: "Οὖτιν ἐγὼ λέγω: Οὖτις δέ μέ φασι κικλήσκειν...",
      english: "Nobody is my name. My mother and father call me Nobody...",
      citation: "9.366"
    }
  },
  {
    number: 10,
    romanNumeral: "X",
    title: "The Bag of Winds and the Sorceress Circe",
    greekTitle: "Τὰ περὶ Αἰόλου καὶ Κίρκης",
    tetralogy: "The Wanderings (Apologue)",
    summary: "Aeolus gives Odysseus a leather sack binding all adverse winds. Within sight of Ithaca, suspicious sailors open the bag, blowing them back to Aeolia where the king casts them off. At Telepylos, the cannibalistic Laestrygonians destroy eleven of twelve ships. Odysseus arrives at Aeaea; Circe drugs his scouts into swine, but Hermes equips Odysseus with the holy herb moly, compelling Circe to restore them.",
    keyEvents: [
      "Aeolus's gift and the catastrophe of the opened wind-bag",
      "Slaughter of the fleet at the cliffed harbor of the Laestrygonians",
      "Eurylochus's reconnaissance on Aeaea",
      "Hermes bestows the black-rooted moly flower",
      "Circe's oath and Odysseus's one-year stay",
      "Accidental death of young Elpenor from the roof"
    ],
    prominentCharacters: ["Odysseus", "Aeolus", "Circe", "Hermes", "Eurylochus", "Elpenor"],
    significantThemes: ["Crew Insubordination", "Sorcery and Metamorphosis", "Erotic Allure"]
  },
  {
    number: 11,
    romanNumeral: "XI",
    title: "The Kingdom of the Dead: The Nekuia",
    greekTitle: "Νέκυια",
    tetralogy: "The Wanderings (Apologue)",
    summary: "Odysseus travels to Oceanus at the world's edge and performs sacrificial libations. The shade of unburied Elpenor begs for funeral rites. Blind seer Tiresias warns of Helios's cattle and predicts peaceful old age after a inland journey. Odysseus converses with his mother Anticleia, a catalog of mythic women, Agamemnon, Achilles (who proclaims he would rather be a serf on earth than king of the dead), and Ajax.",
    keyEvents: [
      "Blood libation at the entrance to Hades",
      "Elpenor's ghost asks for burial on Circe's island",
      "Tiresias's prophecy regarding the Cattle of the Sun and the oar in inland country",
      "Meeting Anticleia and the thrice-attempted embrace",
      "Agamemnon's warning against trusting women",
      "Achilles' famous meditation on death and kleos"
    ],
    prominentCharacters: ["Odysseus", "Tiresias", "Anticleia", "Agamemnon", "Achilles", "Ajax"],
    significantThemes: ["Mortality", "Ancestral Memory", "Subversion of Martial Kleos"]
  },
  {
    number: 12,
    romanNumeral: "XII",
    title: "The Sirens, Scylla, Charybdis, and the Sun God's Cattle",
    greekTitle: "Σειρῆνες, Σκύλλα, Χάρυβδις, Βόες Ἡλίου",
    tetralogy: "The Wanderings (Apologue)",
    summary: "Returning to Aeaea, they bury Elpenor. Circe outlines impending perils: the bone-strewn meadow of the Sirens, the six-headed crag-monster Scylla, and the whirlpool Charybdis. Odysseus listens bound to the mast. At Thrinacia, trapped by contrary winds, starving crewmen slaughter the sacred cattle of Helios while Odysseus sleeps. Zeus strikes their ship with a thunderbolt; Odysseus alone drifts on the keel to Calypso's isle.",
    keyEvents: [
      "Passage past the Sirens with bees-waxed ears and mast ropes",
      "Choosing Scylla over Charybdis; six men seized from the deck",
      "The landing on Thrinacia and oath regarding the Cattle",
      "Eurylochus persuades the crew to slaughter the immortal herds",
      "Wrath of Helios and Zeus's destructive lightning gale",
      "Odysseus clinging nine days to the wreckage until reaching Ogygia"
    ],
    prominentCharacters: ["Odysseus", "Circe", "Sirens", "Scylla", "Eurylochus", "Helios", "Zeus"],
    significantThemes: ["Temptation and Knowledge", "Sacrilege", "Destiny and Solitude"]
  },
  {
    number: 13,
    romanNumeral: "XIII",
    title: "Return to the Rugged Shores of Ithaca",
    greekTitle: "Ὀδυσσέως ἀπόπλους καὶ ἄφιξις εἰς Ἰθάκην",
    tetralogy: "The Return in Disguise",
    summary: "The Phaeacians convey Odysseus fast asleep to Ithaca, leaving him beside the cave of the Nymphs with treasures. Poseidon turns their returning ship to stone outside Scheria. Waking in a dense mist, Odysseus fails to recognize his homeland until Athena reveals herself. In a famous dialogue of mutual cunning, they plan the destruction of the suitors; Athena disguises him as a wizened beggar.",
    keyEvents: [
      "The Phaeacians deposit sleeping Odysseus on Ithaca's shore",
      "Poseidon petrifies the Phaeacian ship into harbor rock",
      "Odysseus wakes disoriented in Athena's fog",
      "Athena and Odysseus match wits in mutual recognition",
      "Transformation into an old, ragged beggar"
    ],
    prominentCharacters: ["Odysseus", "Athena", "Alcinous", "Poseidon"],
    significantThemes: ["Disguise", "Divine Partnership", "Homecoming Realized"]
  },
  {
    number: 14,
    romanNumeral: "XIV",
    title: "In the Hut of Eumaeus the Loyal Swineherd",
    greekTitle: "Ὀδυσσέως πρὸς Εὔμαιον ὁμιλία",
    tetralogy: "The Return in Disguise",
    summary: "Odysseus seeks out the humble forest steading of Eumaeus, his loyal swineherd. Though impoverished by the suitors' feasts, Eumaeus welcomes the beggar with rustic generosity and slaughtered piglets. Odysseus invents an elaborate lying tale of being a Cretan veteran who heard rumors of Odysseus's imminent return. Eumaeus provides him a warm cloak for the cold night.",
    keyEvents: [
      "Eumaeus fends off his vicious watchdogs to welcome the stranger",
      "Humble, genuine xenia contrasted with aristocratic corruption",
      "The First Cretan Tale: Odysseus's false autobiographical saga",
      "The test of the cloak on a frostbitten night"
    ],
    prominentCharacters: ["Odysseus (as beggar)", "Eumaeus"],
    significantThemes: ["Humble Fidelity", "Deceptive Storytelling", "Moral Worth"]
  },
  {
    number: 15,
    romanNumeral: "XV",
    title: "Telemachus Evades the Suitors and Lands",
    greekTitle: "Τηλεμάχου ἐπάνοδος",
    tetralogy: "The Return in Disguise",
    summary: "Athena prompts Telemachus to hasten home from Sparta, warning of the suitors' strait ambush and advising him to go first to Eumaeus. Leaving with gifts from Menelaus and Helen, he takes aboard Theoclymenus, an exiled prophet fleeing Argos for blood-guilt. In the hut, Eumaeus recounts how he was stolen in childhood by Phoenician traders. Telemachus slips past the ambush and reaches Ithaca.",
    keyEvents: [
      "Telemachus parts from Sparta; eagle omen interpreted by Helen",
      "Prophet Theoclymenus seeks sanctuary on Telemachus's ship",
      "Eumaeus narrates his royal origins on the isle of Syria",
      "Telemachus safely reaches the Ithacan coast and walks toward the swineherd"
    ],
    prominentCharacters: ["Telemachus", "Athena", "Theoclymenus", "Eumaeus", "Odysseus"],
    significantThemes: ["Providential Timing", "Exile and Sanctuary", "Parallel Journeys"]
  },
  {
    number: 16,
    romanNumeral: "XVI",
    title: "Father and Son Reunited",
    greekTitle: "Τηλεμάχου ἀναγνωρισμὸς Ὀδυσσέως",
    tetralogy: "The Return in Disguise",
    summary: "Telemachus arrives at the swineherd's hut, showing reverence to the aged guest. When Eumaeus leaves to inform Penelope of her son's return, Athena restores Odysseus to his youthful stature. Father and son weep in each other's arms like eagles whose chicks were snatched. Together they calculate the suitors' numbers (118 men) and forge their battle strategy.",
    keyEvents: [
      "Telemachus greets Eumaeus like a surrogate father",
      "Athena commands Odysseus to reveal his truth",
      "The emotional reunion and weeping of father and son",
      "Calculating the suitors and Athena's assurance of divine aid",
      "Penelope rebukes Antinous for plotting Telemachus's murder"
    ],
    prominentCharacters: ["Odysseus", "Telemachus", "Athena", "Eumaeus", "Penelope", "Eurymachus"],
    significantThemes: ["Anagnorisis (Recognition)", "Filial Loyalty", "Strategic Alliance"]
  },
  {
    number: 17,
    romanNumeral: "XVII",
    title: "The Beggar Enters the Great Hall",
    greekTitle: "Τηλεμάχου ἐπάνοδος εἰς Ἰθάκην",
    tetralogy: "The Gathering Storm",
    summary: "Telemachus returns to the palace. Odysseus and Eumaeus make their way toward town, verbally and physically assaulted along the road by the goatherd Melanthius. Outside the gates, Odysseus's old hound Argos recognizes his master's voice after twenty years, wags his tail, and dies. Odysseus begs scrap from the suitors; Antinous curses him and strikes him with a stool.",
    keyEvents: [
      "The insolence of Melanthius by the town fountain",
      "The heart-rending recognition and death of the loyal dog Argos",
      "Odysseus begs among the suitors, testing their disposition",
      "Antinous hurls a footstool, fracturing the laws of hospitality",
      "Penelope summons the beggar for a private nocturnal audience"
    ],
    prominentCharacters: ["Odysseus", "Telemachus", "Eumaeus", "Melanthius", "Argos", "Antinous", "Penelope"],
    significantThemes: ["Unflinching Loyalty (Argos)", "Hostile Hospitality", "Endurance Under Insult"]
  },
  {
    number: 18,
    romanNumeral: "XVIII",
    title: "The Beggar's Brawl and the Suitors' Mockery",
    greekTitle: "Ὀδυσσέως καὶ Ἴρου πυγμή",
    tetralogy: "The Gathering Storm",
    summary: "The town vagabond Arnaeus (nicknamed Irus) attempts to drive Odysseus from the threshold. The suitors gleefully arrange a boxing match for sausage. Odysseus strips, revealing massive thighs and shoulders; he downs Irus with a single blow to the neck. Odysseus warns the moderate suitor Amphinomus to flee before vengeance strikes, but Athena has bound him to die.",
    keyEvents: [
      "Irus picks a fight with the mysterious new beggar",
      "The boxing match witnessed by the roaring suitors",
      "Odysseus holds back his strength, felling Irus with one strike",
      "Odysseus's grave moral warning to Amphinomus",
      "Penelope dazzles the suitors and extracts lavish gifts"
    ],
    prominentCharacters: ["Odysseus", "Irus", "Antinous", "Amphinomus", "Penelope", "Melantho"],
    significantThemes: ["The Inevitability of Fate", "Moral Agency", "The Seduction of Gifts"]
  },
  {
    number: 19,
    romanNumeral: "XIX",
    title: "The Scar and the Queen's Interview",
    greekTitle: "Ὀδυσσέως καὶ Πηνελόπης ὁμιλία",
    tetralogy: "The Gathering Storm",
    summary: "Telemachus and Odysseus secretly remove all weapons from the banquet hall. Penelope interviews the beggar by the fire. He fabricates his Cretan lineage and describes Odysseus's purple mantle and golden brooch in uncanny detail, bringing her to tears. While washing his feet, nurse Eurycleia discovers the distinctive scar above his knee from an old boar hunt on Mount Parnassus. Odysseus silences her throat to preserve secrecy. Penelope reveals her dream of the twenty geese and declares the trial of the axes.",
    keyEvents: [
      "Stowing away the suitors' spears and helmets",
      "Intimate nocturnal dialogue between husband and wife in disguise",
      "The vivid description of the hunting brooch",
      "The foot-washing and Eurycleia's sudden discovery of the scar",
      "Penelope's dream of the geese and the eagle",
      "Announcement of the archery contest with Odysseus's great bow"
    ],
    prominentCharacters: ["Odysseus", "Penelope", "Eurycleia", "Telemachus"],
    significantThemes: ["Disguise and Unconscious Knowledge", "The Symbolic Scar", "Prophetic Dreams"]
  },
  {
    number: 20,
    romanNumeral: "XX",
    title: "Portents and the Madness of the Feasters",
    greekTitle: "Τὰ πρὸ τῆς μνηστηροφονίας",
    tetralogy: "The Gathering Storm",
    summary: "Odysseus lies sleepless on the porch, raging inwardly at the treasonous maidservants before Athena reassures him. Morning brings omens: a thunderclap from a cloudless sky and a grinding woman's prayer for the suitors' demise. Philoetius the cowherd declares his steadfast loyalty to Odysseus's memory. During the feast, Athena strikes the suitors with supernatural hysterical laughter; their food drips blood as prophet Theoclymenus envisions the hall shrouded in death.",
    keyEvents: [
      "Odysseus master of his own heart ('Endure, my heart; you have endured worse')",
      "Zeus sends thunder from clear skies",
      "Philoetius the loyal herdsman joins the alliance",
      "Ctessipus hurls a bull's hoof at Odysseus's head",
      "The horrifying apocalyptic vision of Theoclymenus"
    ],
    prominentCharacters: ["Odysseus", "Athena", "Philoetius", "Eumaeus", "Ctessipus", "Theoclymenus"],
    significantThemes: ["Self-Mastery", "Supernatural Portents", "Approaching Retribution"]
  },
  {
    number: 21,
    romanNumeral: "XXI",
    title: "The Trial of the Great Bow",
    greekTitle: "Τόξου θέσις",
    tetralogy: "The Vengeance & Peace",
    summary: "Penelope retrieves the unstrung bow of Iphitus from the treasure vault. She promises marriage to whoever strings the bow and shoots an arrow cleanly through twelve aligned axe-heads. Telemachus nearly strings it on his fourth attempt, but halts at Odysseus's subtle nod. All suitors fail with heated tallow. While the suitors scoff, the beggar handles the weapon, strings it with the effortless grace of a bard tuning a lyre, and fires through every socket.",
    keyEvents: [
      "Penelope weeps over the ancestral bow of Iphitus",
      "Telemachus plants the axes and attempts the stringing",
      "The suitors' humiliation as none can bend the horn",
      "Odysseus reveals himself privately to Eumaeus and Philoetius",
      "The beggar takes the bow, strums the bowstring like a swallow's song",
      "The clean shot through the twelve iron axes"
    ],
    prominentCharacters: ["Odysseus", "Penelope", "Telemachus", "Antinous", "Eurymachus", "Eumaeus", "Philoetius"],
    significantThemes: ["The True King's Measure", "Bardic Imagery", "The Climax Commences"],
    famousLines: {
      greek: "ὣς ἄρ᾽ ἄτερ σπουδῆς τάνυσεν μέγα τόξον Ὀδυσσεύς...",
      english: "So with effortless ease Odysseus strung the great bow...",
      citation: "21.409"
    }
  },
  {
    number: 22,
    romanNumeral: "XXII",
    title: "The Slaughter in the Great Hall",
    greekTitle: "Μνηστηροφονία",
    tetralogy: "The Vengeance & Peace",
    summary: "Shedding his rags, Odysseus leaps to the stone threshold and shoots Antinous through the throat as he raises a golden wine chalice. Odysseus proclaims his identity. Eurymachus's plea for mercy is rejected. Telemachus arms his father and the two herdsmen. Melanthius steals arms from the storeroom but is bound suspended from the rafters. Athena appears in the form of a swallow, shielding the four defenders. All 108 suitors are slain. The traitorous maids and Melanthius are executed; the hall is purged with sulphur.",
    keyEvents: [
      "Antinous slain mid-sip with an arrow through the throat",
      "The revelation of Odysseus and rejection of ransom",
      "Telemachus arms his father and guards the doorway",
      "Melanthius caught and strung up in the armory",
      "Athena shakes the aegis; the suitors scatter like cattle stung by gadflies",
      "Spared lives of Phemios the singer and Medon the herald",
      "Cleansing of the hall with fire and brimstone"
    ],
    prominentCharacters: ["Odysseus", "Telemachus", "Antinous", "Eurymachus", "Eumaeus", "Philoetius", "Athena", "Melanthius"],
    significantThemes: ["Divine Retribution", "Restoration of Order", "Purity and Contamination"]
  },
  {
    number: 23,
    romanNumeral: "XXIII",
    title: "The Olive-Tree Bed and the Secret Sign",
    greekTitle: "Ὀδυσσέως ὑπὸ Πηνελόπης ἀναγνωρισμός",
    tetralogy: "The Vengeance & Peace",
    summary: "Eurycleia awakens Penelope with news of Odysseus's return and the suitors' deaths. Penelope remains guarded, sitting across from her bloodied husband in disbelief. She tests him by commanding Eurycleia to move their bridal bed outside the bedchamber. Enraged, Odysseus protests that the bed is immovable, built around the living trunk of an ancient olive tree rooted deep in the foundation. Recognizing the secret sign known only to them, Penelope weeping rushes to embrace him. Athena holds back Dawn to lengthen their night of reunion.",
    keyEvents: [
      "Penelope's steadfast skepticism and silence before Odysseus",
      "The test of the immovable olive-tree bed",
      "Odysseus reveals the architectural secret of their love",
      "Penelope's embrace and mutual reconciliation",
      "Odysseus and Penelope recount their twenty-year journeys",
      "Athena commands Dawn to delay her golden chariot"
    ],
    prominentCharacters: ["Odysseus", "Penelope", "Eurycleia", "Telemachus", "Athena"],
    significantThemes: ["The Olive Bed as Living Axis", "True Intellectual Equals", "Reconciliation"]
  },
  {
    number: 24,
    romanNumeral: "XXIV",
    title: "The Orchard of Laertes and the Eternal Peace",
    greekTitle: "Σπονδαί",
    tetralogy: "The Vengeance & Peace",
    summary: "Hermes guides the gibbering souls of the suitors to Hades, where Achilles and Agamemnon marvel at Penelope's unyielding chastity. Odysseus travels to the uplands to find his grieving father Laertes working the orchard. After a final gentle test of identity, Odysseus proves his kinship by his scar and naming the fruit trees given to him as a boy. The families of the dead suitors march on the farm for blood; Laertes fells Eupeithes with a spear throw. Athena intervenes in thunderous majesty, commanding both sides to lay down their arms and swearing lasting covenants of peace.",
    keyEvents: [
      "Second Nekuia: the suitors' shades descend to the underworld",
      "Odysseus finds elderly Laertes in his patched leather gloves",
      "The recognition of the trees: thirteen pears, ten apples, forty figs",
      "The armed approach of Eupeithes and the suitors' kin",
      "Athena commands the cessation of blood-feud and ratifies perpetual peace"
    ],
    prominentCharacters: ["Odysseus", "Laertes", "Telemachus", "Athena", "Hermes", "Agamemnon", "Eupeithes"],
    significantThemes: ["Generational Renewal", "The Ending of Blood Feud", "Lasting Harmony"]
  }
];

export const CHARACTERS_DIRECTORY: CharacterProfile[] = [
  {
    id: "odysseus",
    name: "Odysseus",
    greekName: "Ὀδυσσεύς",
    epithet: "Polytropos (Man of Many Turns), Polymetis (Master of Cunning)",
    category: "mortal-ithaca",
    role: "King of Ithaca, Hero of the Trojan War",
    description: "The intellectual counterweight to Achilles' brute force. Defined by psychological endurance, versatile storytelling, and relentless longing for his rocky homeland. His heroic stature is measured not by how fast he dies, but how stubbornly he survives.",
    prominentBooks: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    associatedTheme: "Metis & Nostos"
  },
  {
    id: "penelope",
    name: "Penelope",
    greekName: "Πηνελόπεια",
    epithet: "Periphron (Circumspect, Wise, Mindful)",
    category: "mortal-ithaca",
    role: "Queen of Ithaca, Odysseus's Faithful Consort",
    description: "The intellectual equal and mirror of Odysseus. For twenty years she holds the Ithacan oikos together against more than a hundred voracious suitors through psychological stratagems—chiefly the weaving and unweaving of Laertes' shroud and the rigorous test of the olive-tree bed.",
    prominentBooks: [1, 2, 4, 17, 18, 19, 21, 23],
    associatedTheme: "Metis & Homophrosyne (Shared Mind)"
  },
  {
    id: "telemachus",
    name: "Telemachus",
    greekName: "Τηλέμαχος",
    epithet: "Pepnymenos (Prudent, Clear-Minded)",
    category: "mortal-ithaca",
    role: "Prince of Ithaca, Son of Odysseus and Penelope",
    description: "Born just as his father departed for Troy, Telemachus matures over the course of the poem from a passive, despairing youth dominated by the suitors into a courageous, authoritative prince capable of defending the realm alongside his father.",
    prominentBooks: [1, 2, 3, 4, 15, 16, 17, 20, 21, 22, 24],
    associatedTheme: "Maturation & Filial Kleos"
  },
  {
    id: "athena",
    name: "Athena (Pallas)",
    greekName: "Παλλὰς Ἀθήνη",
    epithet: "Glaukopis (Flashing-Eyed, Owl-Eyed)",
    category: "deity",
    role: "Goddess of Wisdom, Tactical Warfare, and Handicraft",
    description: "The divine sponsor of the Ithacan royal house. She loves Odysseus for his sharp intellect and cunning tongue, appearing in diverse mortal disguises (Mentes, Mentor, young girls, heralds) to guide both father and son toward restitution.",
    prominentBooks: [1, 2, 3, 5, 6, 7, 8, 13, 15, 16, 20, 22, 23, 24],
    associatedTheme: "Divine Counsel & Strategic Wisdom"
  },
  {
    id: "poseidon",
    name: "Poseidon",
    greekName: "Ποσειδῶν",
    epithet: "Ennosigaios (Earth-Shaker), Kyanochaites (Dark-Haired)",
    category: "deity",
    role: "God of the Sea, Earthquakes, and Horses",
    description: "The primary divine antagonist of the epic. Enraged by Odysseus's blinding of his monstrous son Polyphemus, Poseidon relentlessly hounds the hero across the seas with storms and shipwreck until divine destiny commands his restitution.",
    prominentBooks: [1, 5, 9, 13],
    associatedTheme: "Elemental Wrath & Inflexible Pride"
  },
  {
    id: "circe",
    name: "Circe",
    greekName: "Κίρκη",
    epithet: "Polypharmakos (Dread Goddess of Potent Herbs)",
    category: "deity",
    role: "Sorceress of Aeaea, Daughter of Helios",
    description: "A divine sorceress who transforms trespassing men into predatory animals or swine. Subdued by Odysseus through Hermes' magical moly, she shifts into an indispensable counselor and host, showing him how to navigate the Underworld, Sirens, and Scylla.",
    prominentBooks: [10, 11, 12],
    associatedTheme: "Transformation & Sacred Geographies"
  },
  {
    id: "calypso",
    name: "Calypso",
    greekName: "Καλυψώ",
    epithet: "Diō nymphē (Luminous Nymph, The Concealer)",
    category: "deity",
    role: "Nymph of Ogygia, Daughter of Atlas",
    description: "Her name derives from kalyptein ('to conceal'). She keeps Odysseus detained on her paradise island of Ogygia for seven years, offering him ageless immortality, but yields with bitter grace to Zeus's decree when Hermes delivers it.",
    prominentBooks: [1, 5],
    associatedTheme: "Concealment & The Temptation of Immortality"
  },
  {
    id: "polyphemus",
    name: "Polyphemus",
    greekName: "Πολύφημος",
    epithet: "Kuklops (One-Eyed Giant), Son of Poseidon",
    category: "encounter-monster",
    role: "Cyclopean Shepherd and Monster",
    description: "The embodiment of anti-civilization. He honors neither the Olympians nor the sacred laws of xenia, trapping Odysseus's crew and consuming six of them raw before Odysseus drugs and blinds his solitary eye.",
    prominentBooks: [9],
    associatedTheme: "Violation of Xenia & Barbarian Lawlessness"
  },
  {
    id: "eumaeus",
    name: "Eumaeus",
    greekName: "Εὔμαιος",
    epithet: "Diorchos (Master Swineherd, Noble Herdsman)",
    category: "mortal-ithaca",
    role: "Loyal Swineherd of Ithaca",
    description: "Born a prince of Syria before being sold into slavery by his nurse, Eumaeus exemplifies pure, aristocratic nobility of spirit. He preserves Odysseus's flocks faithfully and offers unconditional shelter to the disguised king.",
    prominentBooks: [14, 15, 16, 17, 21, 22],
    associatedTheme: "Unconditional Xenia & True Nobility"
  },
  {
    id: "antinous",
    name: "Antinous",
    greekName: "Ἀντίνοος",
    epithet: "Leader and Most Insolent of the Suitors",
    category: "mortal-ithaca",
    role: "Chief Suitor from Ithaca",
    description: "Arrogant, violent, and devoid of shame, Antinous plots the sea assassination of Telemachus, hurls a footstool at the disguised Odysseus, and provokes the boxing match with Irus. He is appropriately the first suitor to fall in the hall.",
    prominentBooks: [1, 2, 4, 17, 18, 20, 21, 22],
    associatedTheme: "Hybris (Arrogance) & Retributive Justice"
  }
];

export const VOYAGE_WAYPOINTS: VoyageWaypoint[] = [
  {
    id: "troy",
    step: 1,
    name: "The Departure from Troy (Ilium)",
    ancientGreekName: "Ἴλιον",
    mythicalSignificance: "The ruined citadel of Priam sacked by the Achaean host through the stratagem of the wooden horse.",
    supposedLocation: "Hisarlik, northwest Anatolia (modern Turkey)",
    bookNumbers: "Book IX",
    narrativeSummary: "Odysseus leads twelve ships laden with gold and Ithacan veterans from the burning shores of Troy, eager to reclaim his home.",
    perilEncountered: "The spiritual exhaustion of ten years of brutal warfare.",
    fateOfCrew: "All twelve ships intact; morale high."
  },
  {
    id: "cicones",
    step: 2,
    name: "Ismarus: Land of the Cicones",
    ancientGreekName: "Ἴσμαρος",
    mythicalSignificance: "Thracian allies of Troy. A demonstration of the fatal flaw of Odysseus's crew: undisciplined greed.",
    supposedLocation: "Thracian coast near Maroneia, northern Greece",
    bookNumbers: "Book IX",
    narrativeSummary: "Odysseus sacks the coastal town, sparing only Maron, priest of Apollo, who bestows jars of sweet, unwatered wine. The crew refuses to set sail, feasting and drinking on the beach until Ciconian reinforcements overwhelm them.",
    perilEncountered: "Insubordination and violent ambush by coastal cavalry.",
    fateOfCrew: "Six men from each of the twelve ships slain (72 warriors lost)."
  },
  {
    id: "lotus-eaters",
    step: 3,
    name: "The Land of the Lotus-Eaters",
    ancientGreekName: "Λωτοφάγοι",
    mythicalSignificance: "The sweet danger of amnesia: forgetting one's home and lineage.",
    supposedLocation: "Traditional identification with the island of Djerba (modern Tunisia)",
    bookNumbers: "Book IX",
    narrativeSummary: "Driven nine days south by relentless gales past Cape Malea, the ships land among peaceful inhabitants who feed scouts the sweet flower of the lotus, draining all longing for home.",
    perilEncountered: "The loss of nostos through tranquil, narcotic contentment.",
    fateOfCrew: "Odysseus hauls weeping scouts by force to the rowing benches and ties them under seats."
  },
  {
    id: "cyclops",
    step: 4,
    name: "The Island of the Cyclopes",
    ancientGreekName: "Κύκλωπες",
    mythicalSignificance: "Encounter with raw barbarism beyond laws, agriculture, and assembly.",
    supposedLocation: "Historically associated with western Sicily or the Bay of Naples",
    bookNumbers: "Book IX",
    narrativeSummary: "Lured by curiosity and the expectation of guest-gifts, Odysseus enters the cavern of Polyphemus. The giant traps them with a boulder and eats six men. Odysseus intoxicates him with Maron's wine, blinds him with a burning stake, and escapes beneath the rams.",
    perilEncountered: "Anthropophagy and mockery of the gods.",
    fateOfCrew: "Six men devoured; Poseidon is invoked to curse the remainder of the voyage."
  },
  {
    id: "aeolia",
    step: 5,
    name: "The Floating Island of Aeolia",
    ancientGreekName: "Αἰολία νῆσος",
    mythicalSignificance: "The bronze-walled citadel of the keeper of the winds, Aeolus Hippotades.",
    supposedLocation: "The Aeolian (Lipari) Islands north of Sicily",
    bookNumbers: "Book X",
    narrativeSummary: "King Aeolus provides a month of generous hospitality and binds adverse gales in an ox-hide sack. Ten days later, within sight of Ithaca's watchfires, the exhausted Odysseus falls asleep; suspicious crewmen open the sack expecting treasure, releasing a gale that blows them back to Aeolia, where they are cast out as cursed by the gods.",
    perilEncountered: "Paranoia, mutual mistrust, and cruel misfortune on the threshold of home.",
    fateOfCrew: "Fleet survives, but despair consumes the men as they are forced to row against heavy seas."
  },
  {
    id: "laestrygonians",
    step: 6,
    name: "Telepylos of the Laestrygonians",
    ancientGreekName: "Τηλέπυλος Λαιστρυγονίη",
    mythicalSignificance: "The fjords of giant cannibals, where night and day border closely.",
    supposedLocation: "Often associated with Bonifacio in southern Corsica or northern Sardinia",
    bookNumbers: "Book X",
    narrativeSummary: "Eleven ships anchor tightly inside a sheer, cliff-bound harbor. Odysseus cautiously tethers his vessel outside on the open sea. King Antiphates attacks the scouting party; giant warriors pelt the harbor with rocks, spearing drowning Ithacans like fish for their cannibal feasts.",
    perilEncountered: "Catastrophic massacre in an enclosed marine trap.",
    fateOfCrew: "Eleven ships shattered; hundreds of men slaughtered. Only Odysseus's solitary ship and crew survive."
  },
  {
    id: "circe-aeaea",
    step: 7,
    name: "Aeaea: The Isle of Circe",
    ancientGreekName: "Αἰαία",
    mythicalSignificance: "The mystical island of the rising sun and feminine magical sovereignty.",
    supposedLocation: "Promontorio Circeo, Mount Circeo on the Tyrrhenian coast of Italy",
    bookNumbers: "Book X & XII",
    narrativeSummary: "Circe transforms half the remaining men into swine using drugged barley and wine. Shielded by the holy moly herb given by Hermes, Odysseus masterfully tames the goddess with drawn blade. They remain one year in luxury before Circe directs them to the Underworld.",
    perilEncountered: "Erotic bewitchment, loss of heroic agency, and metaphysical decay.",
    fateOfCrew: "Restored to human form; young Elpenor dies falling from the palace roof on departure."
  },
  {
    id: "nekuia",
    step: 8,
    name: "The Kingdom of the Dead (Nekuia)",
    ancientGreekName: "Νέκυια / ᾍδης",
    mythicalSignificance: "The mist-wrapped borders of Oceanus and the realm of Persephone and Hades.",
    supposedLocation: "The western edge of the known earth, near Lake Avernus or Cimmerian shores",
    bookNumbers: "Book XI",
    narrativeSummary: "Odysseus pours libations of honey, milk, sweet wine, and black ram blood to summon the ghosts. Tiresias reveals the destiny of Ithaca and warns against Helios's cattle. Odysseus meets his mother Anticleia, fallen Trojan comrades, and a legendary procession of heroines.",
    perilEncountered: "The terrifying confrontation with mortality, vanity of glory, and ancestral shade.",
    fateOfCrew: "Odysseus emerges with vital prophecies for surviving the return."
  },
  {
    id: "sirens",
    step: 9,
    name: "The Meadow of the Sirens",
    ancientGreekName: "Σειρῆνες",
    mythicalSignificance: "The seductive song of universal knowledge and all the suffering at Troy.",
    supposedLocation: "The Li Galli archipelago off the Amalfi Coast / Sirenuse",
    bookNumbers: "Book XII",
    narrativeSummary: "Odysseus plugs the ears of his men with softened beeswax and orders himself bound firmly to the ship's mast. When the Sirens sing, offering omniscient knowledge, Odysseus strains frantically to break his bonds, but his loyal crew row onward.",
    perilEncountered: "Irresistible cognitive temptation and spiritual decay upon rotting bones.",
    fateOfCrew: "All survive through disciplined obedience and physical restraint."
  },
  {
    id: "scylla-charybdis",
    step: 10,
    name: "The Strait of Scylla and Charybdis",
    ancientGreekName: "Σκύλλα καὶ Χάρυβδις",
    mythicalSignificance: "The archetypal tragedy of tragic choice between two agonizing perils.",
    supposedLocation: "Strait of Messina between Sicily and the toe of Italy",
    bookNumbers: "Book XII",
    narrativeSummary: "Steering away from the ravenous whirlpool Charybdis, which sucks down and vomits the black sea thrice daily, Odysseus draws close to the crag of Scylla. The six-headed monster darts down, plucking six of his bravest oarsmen from the deck before their master's eyes.",
    perilEncountered: "Inescapable sacrifice; watching loyal comrades devoured while crying his name.",
    fateOfCrew: "Six seasoned oarsmen lost forever."
  },
  {
    id: "thrinacia",
    step: 11,
    name: "Thrinacia: The Island of the Sun God",
    ancientGreekName: "Θρινακία",
    mythicalSignificance: "The pasture of the immortal herds of Helios Hyperion.",
    supposedLocation: "Eastern Sicily (historically named Trinacria for its three capes)",
    bookNumbers: "Book XII",
    narrativeSummary: "Trapped for a month by unyielding south gales, provisions run dry. While Odysseus sleeps in despair, Eurylochus convinces the crew to slaughter Helios's sacred cattle. When they set sail, Zeus hurls a shattering lightning bolt, pulverizing the ship.",
    perilEncountered: "Sacrilege against the cosmos; inexorable divine retaliation.",
    fateOfCrew: "Every single crew member drowns in the wine-dark waves. Odysseus alone survives, clinging to the keel."
  },
  {
    id: "ogygia",
    step: 12,
    name: "Ogygia: The Navel of the Sea",
    ancientGreekName: "Ὠγυγία",
    mythicalSignificance: "The isolated paradise cave of the nymph Calypso, secluded from mortal time.",
    supposedLocation: "Mythical center of the western Mediterranean (Gozo or western islet)",
    bookNumbers: "Book V",
    narrativeSummary: "Odysseus drifts nine days on broken timbers until washing ashore on Ogygia. He spends seven agonizing years in exile, weeping on the headland while refusing Calypso's gift of eternal youth in favor of mortal reunion.",
    perilEncountered: "Stagnation, timelessness, and the existential loss of purposeful action.",
    fateOfCrew: "Odysseus is utterly alone; his fleet is no more."
  },
  {
    id: "scheria",
    step: 13,
    name: "Scheria: The Realm of the Phaeacians",
    ancientGreekName: "Σχερίη / Φαίακες",
    mythicalSignificance: "The magical bridge between mythic fantasy and real human society.",
    supposedLocation: "Corcyra (modern Corfu), Ionian Sea",
    bookNumbers: "Book VI–VIII, XIII",
    narrativeSummary: "Rescued by Princess Nausicaa after Poseidon shatters his raft, Odysseus is honored by King Alcinous and Queen Arete. Here he weeps at the bard's songs and narrates his wanderings, earning convoy back to Ithaca on magical Phaeacian ships.",
    perilEncountered: "The temptation to settle in a conflict-free utopia.",
    fateOfCrew: "Phaeacian crew delivers the sleeping hero home to Ithaca."
  },
  {
    id: "ithaca",
    step: 14,
    name: "Ithaca: The Rock Reclaimed",
    ancientGreekName: "Ἰθάκη",
    mythicalSignificance: "The rugged home, center of the oikos, and site of final reckoning.",
    supposedLocation: "Ithaca (Ithaki), Ionian Islands, Greece",
    bookNumbers: "Book XIII–XXIV",
    narrativeSummary: "Odysseus awakens under the olive trees of Ithaca. Transformed into an aged beggar by Athena, he unites with Telemachus, tests his household, slays the 108 suitors, proves his identity to Penelope with the olive bed, and establishes enduring peace with his father Laertes.",
    perilEncountered: "108 armed suitors occupying the great hall.",
    fateOfCrew: "The wandering king reclaims his throne, wife, son, and ancestral soil."
  }
];
