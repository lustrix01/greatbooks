import type {
  LiteraryThemeDetail,
  HomericSymbolDetail,
  CriticalEssayDetail,
} from '../types/odyssey';

export const LITERARY_THEMES_DATA: LiteraryThemeDetail[] = [
  {
    id: 'perseverance',
    title: 'Perseverance & Endurance',
    greekTerm: 'τλημοσύνη / καρτερία',
    transliteration: 'Tlēmosynē',
    definition: 'The capacity to endure suffering, restrain immediate impulse, and outlast physical and mental trauma.',
    explanation:
      'Where Achilles in the Iliad responds to insult with incandescent, suicidal fury, Odysseus’s defining virtue is tlēmosynē—the stubborn fortitude to absorb humiliation, physical agony, and grief without breaking. Perseverance in Homer is not passive submission; it is a strategic calculation that survival requires governing one’s own heart until the hour of action arrives.',
    connectionToEvents: [
      'Clinging for nine days to the keel and mast across stormy seas after Zeus strikes the ship at Thrinacia (Book XII).',
      'Hanging like a bat from the wild fig tree over the boiling vortex of Charybdis for hours waiting for his timbers to resurface (Book XII).',
      'Suffering footstools and insults hurled by Antinous and Melanthius without drawing his sword, commanding his raging heart: "Endure, my heart; you have endured worse than this" (Book XVII & XX).',
      'Enduring seven years of weeping on Ogygia’s shore without succumbing to spiritual despair (Book V).',
    ],
    relevantCharacters: ['Odysseus', 'Penelope', 'Eumaeus', 'Telemachus'],
    bookReferences: 'Book V.215–224; Book XII.426–446; Book XX.17–24',
    whyItMatters:
      'It establishes the Odyssean moral revolution: true heroism lies not in battlefield death, but in the psychological endurance required to preserve home, family, and civilization across decades of adversity.',
    explicitEventVsInterpretation: {
      explicitText:
        'The epic explicitly shows Odysseus striking his chest and ordering his heart to be still when he witnesses his maids consorting with the suitors (Book XX.17).',
      scholarlyInterpretation:
        'Scholars interpret this inner dialogue as the earliest emergence in Western literature of a divided psychological consciousness, where rational will subjugates passionate emotion (thymos).',
    },
    quote: {
      greek: 'τέτλαθι δή, κραδίη: καὶ κύντερον ἄλλο ποτ᾽ ἔτλης, ἤματι τῷ ὅτε μοι μένος ἄσχετος ἤσθιε Κύκλωψ ἰφθίμους ἑτάρους...',
      english: 'Endure, my heart; you have endured worse than this, on the day the savage Cyclops devoured my strong comrades, yet you held out until cunning led you from the cave!',
      citation: 'Book XX.18–20',
      speaker: 'Odysseus',
    },
  },
  {
    id: 'loyalty',
    title: 'Loyalty & Mutual Fidelity',
    greekTerm: 'πίστις / ὁμοφροσύνη',
    transliteration: 'Homophrosynē',
    definition: 'The reciprocal fidelity and unified mindset between husband and wife, master and servant, father and son.',
    explanation:
      'The Odyssey tests the loyalty of every social bond in archaic Greek society. Homer contrasts the treacherous infidelity of Clytemnestra (who murders her returning husband Agamemnon in the bath) with the unwavering, twenty-year constancy of Penelope. Loyalty extends across class boundaries: the noble swineherd Eumaeus and the cowherd Philoetius preserve the king’s wealth, while aristocratic suitors and treasonous maids betray the household.',
    connectionToEvents: [
      'Penelope unweaving Laertes’ burial shroud by torchlight for over three years to avoid betrothal to the suitors (Book II & XIX).',
      'The aged dog Argos recognizing Odysseus’s voice after twenty years of neglect upon a dung heap, wagging his ears, and dying in peace (Book XVII).',
      'Eumaeus the swineherd sleeping outside in a freezing storm to guard Odysseus’s breeding sows while welcoming the ragged stranger (Book XIV).',
      'The nurse Eurycleia weeping with joy and keeping Odysseus’s identity secret after recognizing the boar scar on his knee (Book XIX).',
    ],
    relevantCharacters: ['Penelope', 'Eumaeus', 'Eurycleia', 'Argos', 'Philoetius', 'Telemachus'],
    bookReferences: 'Book II.93–110; Book XVII.290–327; Book XIX.467–502; Book XXIII.205–240',
    whyItMatters:
      'Loyalty is the social glue that preserves the oikos (household). The epic proves that the kingdom can only be restored because a core nucleus of mortals remained faithful to Odysseus’s memory against immense pressure.',
    explicitEventVsInterpretation: {
      explicitText:
        'The poem explicitly narrates that the hound Argos waited twenty years until seeing his master again before succumbing to death (Book XVII.326).',
      scholarlyInterpretation:
        'Critics view Argos as an allegory for the wounded state of Ithaca itself: starved, abandoned on a refuse heap by the suitors, but loyal to the rightful king unto death.',
    },
    quote: {
      greek: 'οὐ μὲν γὰρ τοῦ γε κρεῖσσον καὶ ἄρειον, ἢ ὅθ᾽ ὁμοφρονέοντε νοήμασιν οἶκον ἔχητον ἀνὴρ ἠδὲ γυνή...',
      english: 'For nothing is greater or better than this: when a man and wife keep house together of one mind and heart, a great grief to their foes and joy to their friends.',
      citation: 'Book VI.182–184',
      speaker: 'Odysseus to Nausicaa',
    },
  },
  {
    id: 'cunning',
    title: 'Intelligence & Cunning',
    greekTerm: 'μῆτις / πολύτροπος',
    transliteration: 'Mētis',
    definition: 'Resourcefulness, narrative deception, forethought, and tactical craft over physical violence.',
    explanation:
      'Mētis is the signature intellectual virtue of Odysseus (polymētis). It encompasses deceptive speech, disguise, narrative invention, and the ability to bend words to achieve survival. In Homeric morality, cunning is not cowardice; it is the divine gift of Athena that allows a mortal man to overcome monsters possessing ten times his physical strength.',
    connectionToEvents: [
      'The stratagem of the Trojan Horse that plundered Ilium when ten years of spear-fighting failed (Books IV & VIII).',
      'The "Nobody" (Outis) pun in Polyphemus’s cave, turning language itself into an optical and psychological blindfold (Book IX).',
      'Odysseus’s elaborate fabricated autobiographies ("Cretan Tales") invented spontaneously to Athena, Eumaeus, and Penelope (Books XIII, XIV, XIX).',
      'The secret test of the immovable olive-tree bed, where Penelope’s cunning matches and traps Odysseus’s own mind (Book XXIII).',
    ],
    relevantCharacters: ['Odysseus', 'Athena', 'Penelope', 'Polyphemus'],
    bookReferences: 'Book IX.364–414; Book XIII.291–310; Book XIX.165–248; Book XXIII.173–204',
    whyItMatters:
      'Mētis distinguishes the Odyssey from all prior heroic epics. The poem asserts that the human mind is the most formidable weapon in the cosmos, capable of triumphing over giants, gods, and mortal armies.',
    explicitEventVsInterpretation: {
      explicitText:
        'Odysseus explicitly uses the false name Outis, leading the neighboring giants to ignore Polyphemus’s screams because "Nobody is killing me" (Book IX.408).',
      scholarlyInterpretation:
        'Linguists note the profound Homeric pun: in ancient Greek, mē tis ("no one") sounds identical to mētis ("cunning"). When Polyphemus cries "Outis is killing me," he is unknowingly declaring that Odysseus’s mētis is his undoing.',
    },
    quote: {
      greek: 'κερδαλέος κ᾽ εἴη καὶ ἐπίκλοπος ὅς σε παρέλθοι ἐν πάντεσσι δόλοισι, καὶ εἰ θεὸς ἀντιάσειε...',
      english: 'Cunning must he be and knavish who would outwit you in all manner of wiles, even if it were a god who met you!',
      citation: 'Book XIII.291–292',
      speaker: 'Athena to Odysseus',
    },
  },
  {
    id: 'pride',
    title: 'Pride & Its Consequences',
    greekTerm: 'ὕβρις & νέμεσις',
    transliteration: 'Hybris & Nemesis',
    definition: 'Overweening arrogance that violates cosmic boundaries, inevitably provoking retributive divine justice.',
    explanation:
      'Hybris is the mortal illusion that one is exempt from divine law, vulnerability, or ethical boundaries. The epic illustrates that pride inevitably breeds blind recklessness (atasthalia), which summons inescapable retribution (nemesis). The suitors believe they can plunder the palace with impunity because Odysseus is dead; Odysseus himself falls into hybris when he boasts to the blinded Cyclops.',
    connectionToEvents: [
      'Odysseus shouting his true name, patronymic, and city to Polyphemus from the departing ship, allowing the giant to curse him to Poseidon (Book IX).',
      'The suitors devouring Odysseus’s herds, abusing the disguised king with footstools, and laughing hysterically in doomed madness (Books XVII & XX).',
      'Antinous boasting that no suitor will fail the bow contest, only to be slain mid-sip by an arrow through the throat (Book XXI & XXII).',
      'Odysseus’s crew slaughtering the sacred cattle of Helios Hyperion despite explicit divine warnings (Book XII).',
    ],
    relevantCharacters: ['Antinous', 'Polyphemus', 'Odysseus', 'Eurylochus', 'The Suitors'],
    bookReferences: 'Book IX.500–536; Book XII.339–396; Book XVII.445–490; Book XXII.1–20',
    whyItMatters:
      'Pride is the moral hinge of the entire plot: Odysseus’s single boast to Polyphemus causes the loss of his entire fleet and ten years of exile; the suitors’ arrogant defiance of xenia guarantees their total slaughter in Book XXII.',
    explicitEventVsInterpretation: {
      explicitText:
        'Odysseus’s crew explicitly beg him not to taunt the giant: "Rash man! Why would you provoke this savage?" But Odysseus shouts his name anyway (Book IX.494).',
      scholarlyInterpretation:
        'Classicists emphasize that Odysseus’s boast is driven by the archaic hunger for kleos (fame): what good is an extraordinary deed if no one knows who performed it? Homer shows that the traditional appetite for public glory can be catastrophic.',
    },
    quote: {
      greek: 'Κύκλωψ, αἴ κέν τίς σε καταθνητῶν ἀνθρώπων ὀφθαλμοῦ εἴρηται ἀεικελίην ἀλαωτύν, φάσθαι Ὀδυσσῆα πτολιπόρθιον ἐξαλαῶσαι...',
      english: 'Cyclops, if any mortal man asks you of the blinding of your eye, tell him that Odysseus, sacker of cities, blinded you—Laertes’ son, whose home is in Ithaca!',
      citation: 'Book IX.502–505',
      speaker: 'Odysseus',
    },
  },
  {
    id: 'temptation',
    title: 'Temptation & Seductions of Stasis',
    greekTerm: 'γοητεία / ἡδονή',
    transliteration: 'The Temptations of Oblivion',
    definition: 'The alluring invitations to abandon active mortal struggle in exchange for narcotic bliss, eternal youth, or effortless luxury.',
    explanation:
      'The obstacles that Odysseus faces are not merely military or physical monsters; they are profound existential temptations to surrender his humanity. Circe offers magical luxury and animal passivity; Calypso offers godlike immortality and eternal youth; the Lotus-Eaters offer sweet amnesia; the Sirens offer complete omniscient knowledge. Each temptation threatens nostos by offering an escape from the burden of mortal human identity.',
    connectionToEvents: [
      'The Lotus blossom extinguishing all desire for home and action among the scouting party (Book IX).',
      'Circe’s palace of singing looms, drugged wine, and the transformation of men into swine content in their sties (Book X).',
      'Calypso’s flowering island of Ogygia, where Odysseus is offered agelessness but weeps daily on the headland gazing at the sea (Book V).',
      'The Sirens’ song offering total knowledge of the Trojan War, tempting Odysseus to dwell in past memory rather than future duty (Book XII).',
    ],
    relevantCharacters: ['Calypso', 'Circe', 'The Sirens', 'The Lotus-Eaters', 'Odysseus'],
    bookReferences: 'Book V.130–224; Book IX.90–104; Book X.230–260; Book XII.184–200',
    whyItMatters:
      'By showing Odysseus reject immortality on Ogygia and comfort on Aeaea, Homer makes the supreme humanist argument of classical antiquity: mortal life with its aging, grief, and love is superior to flawless divine detachment.',
    explicitEventVsInterpretation: {
      explicitText:
        'Calypso explicitly tells Hermes that she loved Odysseus and promised to make him immortal and ageless for all his days (Book V.135–136).',
      scholarlyInterpretation:
        'Philosophers note that Ogygia is an idyllic paradise, yet for Odysseus it is a prison. Immortality without purpose, marriage, and historical legacy is metaphysical death for a Greek hero.',
    },
    quote: {
      greek: 'οἶδα καὶ αὐτὸς πάντα μάλ᾽, οὕνεκα σεῖο περίφρων Πηνελόπεια εἶδος ἀκιδνοτέρη μέγεθός τ᾽ εἰσάντα ἰδέσθαι: ἡ μὲν γὰρ θνητή, σὺ δ᾽ ἀθάνατος καὶ ἀγήρως...',
      english: 'Well I know that wise Penelope is lesser than you in stature and in face to look upon; for she is mortal, while you are immortal and ageless. Yet even so I wish and long every day to return home.',
      citation: 'Book V.215–220',
      speaker: 'Odysseus to Calypso',
    },
  },
  {
    id: 'homecoming',
    title: 'Homecoming & Identity',
    greekTerm: 'νόστος & ἀναγνώρισις',
    transliteration: 'Nostos & Anagnōrisis',
    definition: 'The reclamation of self, household (oikos), and political sovereignty through progressive acts of recognition.',
    explanation:
      'Nostos (the root of modern "nostalgia") is not simply geographical travel; it is an ontological reclamation of identity. For ten years Odysseus is Nobody (Outis), an anonymous beggar, or an unburied wanderer. His return to Ithaca requires a sequence of staged recognitions (anagnōrisis): by his son Telemachus, his dog Argos, his nurse Eurycleia, his loyal swineherd Eumaeus, his wife Penelope, and finally his grieving father Laertes.',
    connectionToEvents: [
      'Odysseus waking in the mist of Ithaca, unable to recognize his native soil until Athena disperses the fog (Book XIII).',
      'The recognition by the nurse Eurycleia while washing his feet, feeling the distinctive scar inflicted by a white-tusked boar on Mount Parnassus in his youth (Book XIX).',
      'The test of the bridal bed built around the living stump of an ancient olive tree, known only to Odysseus and Penelope (Book XXIII).',
      'The final recognition in the upland orchard: Odysseus proving his kinship to elderly Laertes by naming the fruit trees given to him as a boy (Book XXIV).',
    ],
    relevantCharacters: ['Odysseus', 'Penelope', 'Laertes', 'Eurycleia', 'Telemachus', 'Argos'],
    bookReferences: 'Book XIII.187–249; Book XIX.467–502; Book XXIII.181–206; Book XXIV.330–348',
    whyItMatters:
      'Homecoming in the Odyssey is a restoration of cosmic, political, and domestic balance. Odysseus does not truly arrive home when his feet touch Ithacan sand; he arrives home when his identity is validated by those who love him.',
    explicitEventVsInterpretation: {
      explicitText:
        'Penelope explicitly commands Eurycleia to move the bridal bed out of the chamber, prompting Odysseus to cry out that no mortal man could move it because it is rooted in a living tree (Book XXIII.177–204).',
      scholarlyInterpretation:
        'Literary critics identify the olive-tree bed as the profoundest architectural symbol of the epic: true marriage and true civilization are anchored in living earth, immovable, and shared between equals.',
    },
    quote: {
      greek: 'ἀνδρῶν δ᾽ οὔ κέν τις ζωὸς βροτός, οὐδὲ μάλ᾽ ἡβῶν, ῥεῖα μετοχλίσσειεν, ἐπεὶ μέγα σῆμα τέτυκται ἐν λέχει ἀσκητῷ: τὸ δ᾽ ἐγὼ κάμον οὐδέ τις ἄλλος...',
      english: 'There is no mortal man alive, even in his youth, who could easily pry it up, for a great secret mark is wrought into the bed; I built it myself and no one else!',
      citation: 'Book XXIII.187–189',
      speaker: 'Odysseus',
    },
  },
];

export const HOMERIC_SYMBOLS_DATA: HomericSymbolDetail[] = [
  {
    id: 'the-sea',
    name: 'The Sea',
    greekName: 'ὁ πόντος / ἡ ἅλς',
    symbolicMeaning: 'The chaotic, unmasterable abyss of mortal life, existential vulnerability, and divine fury.',
    physicalManifestation: 'The open, wine-dark Mediterranean waters (oinops pontos), sudden gales, and catastrophic shipwrecks.',
    narrativeFunction:
      'The sea acts as the great liminal threshold separating the historic war of Troy from the domestic peace of Ithaca. It is the playground of Poseidon’s fury, where mortal armies, wealth, and status count for nothing.',
    connectionToEvents:
      'Poseidon shattering Odysseus’s raft in Book V; Zeus drowning the entire crew with lightning in Book XII; Odysseus clinging to waterlogged timbers alone.',
    relevantCharacters: ['Poseidon', 'Odysseus', 'Leucothea', 'Zeus'],
    bookReferences: 'Book V.282–387; Book IX.82–84; Book XII.403–425',
    whyItMatters:
      'The sea represents everything in human life that cannot be reasoned with or controlled. Survival on the sea requires not conquering the waves, but enduring their fury through humility and discipline.',
    explicitEventVsInterpretation: {
      explicitText:
        'Homer frequently repeats formulaic epithets for the sea: "unharvested" (atrygetos), "wine-dark" (oinops), and "wide-pathed" (eureia keleutha).',
      scholarlyInterpretation:
        'The phrase "unharvested sea" (halos atrygetoio) emphasizes its hostility to human survival: unlike the fertile earth of Ithaca, the sea yields no wheat or grape, only toil, isolation, and drowning.',
    },
    quote: {
      greek: 'ὡς δ᾽ ὅτ᾽ ἂν ἀσπάσιος βίοτος φανήῃ τεκέεσσι πατρός... ὣς Ὀδυσεῖ ἀσπαστὸν ἐείσατο γαῖα καὶ ὕλη...',
      english: 'As welcome as the sight of a father’s life to his children when he has lain sick, so welcome to Odysseus was the sight of land and trees after the sea.',
      citation: 'Book V.394–398',
    },
  },
  {
    id: 'ithaca',
    name: 'Ithaca',
    greekName: 'Ἰθάκη',
    symbolicMeaning: 'The sacred oikos (household), human limitation, mortal belonging, and rooted reality.',
    physicalManifestation: 'A rocky, barren Ionian island unsuitable for horses, rich in goats, olive groves, and rain.',
    narrativeFunction:
      'The ultimate destination (telos) of the poem. Ithaca is intentionally described not as a wealthy utopia like Phaeacia or an opulent paradise like Ogygia, but as a rugged, flinty rock that breeds hard men.',
    connectionToEvents:
      'Odysseus choosing rocky Ithaca over immortal youth with Calypso; weeping upon waking in its morning mist; proving his love by returning to its stones.',
    relevantCharacters: ['Odysseus', 'Penelope', 'Laertes', 'Telemachus', 'Athena'],
    bookReferences: 'Book IV.605–608; Book IX.21–28; Book XIII.242–249',
    whyItMatters:
      'Ithaca proves that home is not defined by luxury or ease, but by duty, love, and ancestral soil. Menelaus offers horses to Telemachus, but the prince declines because Ithaca has no meadows—only rugged cliffs that shape moral fortitude.',
    explicitEventVsInterpretation: {
      explicitText:
        'Odysseus explicitly declares in Book IX: "Rugged it is, but a good nurse of youth; and for my part I can look upon no sweeter sight than a man’s own land."',
      scholarlyInterpretation:
        'Critics emphasize the contrast between Phaeacia’s magical, conflict-free ease and Ithaca’s rugged severity: true human virtue requires friction, labor, and moral choice, which only Ithaca can provide.',
    },
    quote: {
      greek: 'τρηχεῖ᾽, ἀλλ᾽ ἀγαθὴ κουροτρόφος: οὔ τοι ἐγώ γε ἧς γαίης δύναμαι γλυκερώτερον ἄλλο ἰδέσθαι.',
      english: 'Rugged it is, but a good nurse of youth; and for my part I can look upon no other thing sweeter than a man’s own land.',
      citation: 'Book IX.27–28',
    },
  },
  {
    id: 'the-journey',
    name: 'The Journey',
    greekName: 'ἡ πλάνη / ἡ ὁδός',
    symbolicMeaning: 'The universal human pilgrimage through suffering, maturation, and the search for meaning.',
    physicalManifestation: 'Ten years of erratic wanderings across real and mythic Mediterranean geographies.',
    narrativeFunction:
      'The journey serves as the crucible that strips Odysseus of his Iliadic arrogance and army, teaching him that wisdom (sophia) is earned through vulnerability, restraint, and experience.',
    connectionToEvents:
      'The progression from the pillaging soldier at Ismarus to the patient beggar in his own palace; the descent into the Underworld to understand the limits of mortality.',
    relevantCharacters: ['Odysseus', 'Athena', 'Tiresias', 'The Crew'],
    bookReferences: 'Book I.1–5; Book XI.100–137; Book XXIII.248–284',
    whyItMatters:
      'The Odyssey transforms travel into philosophy. The word "odyssey" has entered every modern language because Homer made Odysseus’s wanderings the universal metaphor for human life itself.',
    explicitEventVsInterpretation: {
      explicitText:
        'The epic’s proem states that Odysseus "saw the towns of many men and learned their minds, and weathered many bitter sorrows at sea" (Book I.3).',
      scholarlyInterpretation:
        'Scholars emphasize that the journey does not end with Ithaca: Tiresias prophesies in Book XI that Odysseus must undertake a final inland journey carrying an oar, symbolizing that human life is an ongoing spiritual quest.',
    },
    quote: {
      greek: 'πολλῶν δ᾽ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω, πολλὰ δ᾽ ὅ γ᾽ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν...',
      english: 'He saw the cities of many men and learned their minds, and suffered many sorrows in his heart upon the sea, striving to win his life and the homecoming of his comrades.',
      citation: 'Book I.3–5',
    },
  },
  {
    id: 'odysseus-bow',
    name: 'Odysseus’s Bow',
    greekName: 'τὸ τόξον τοῦ Ὀδυσσέως',
    symbolicMeaning: 'Legitimate royal authority, physical mastery, divine sanction, and retributive justice.',
    physicalManifestation: 'A massive composite recurve horn bow gifted to young Odysseus by the tragic hero Iphitus.',
    narrativeFunction:
      'The bow acts as the physical and moral filter of Ithaca. Only the true king possesses the strength, technique, and divine favor required to string it, instantly separating the rightful monarch from the parasitic pretenders.',
    connectionToEvents:
      'Penelope retrieving the bow from the treasure vault weeping; the suitors warming it with tallow and straining in vain; Odysseus stringing it with the effortless grace of a musician tuning a lyre.',
    relevantCharacters: ['Odysseus', 'Penelope', 'Telemachus', 'Antinous', 'Eurymachus'],
    bookReferences: 'Book XXI.1–434; Book XXII.1–10',
    whyItMatters:
      'The bow unites the warrior and the poet. When Odysseus strings it, Homer compares him to a bard tuning the sheep-gut string of a lyre. Retribution becomes a work of art, executing cosmic justice in the great hall.',
    explicitEventVsInterpretation: {
      explicitText:
        'The text explicitly describes the bow vibrating when plucked: "The string sang sweetly under his touch, like the voice of a swallow" (Book XXI.411).',
      scholarlyInterpretation:
        'Classicists celebrate this simile as the supreme self-referential moment of the poem: Odysseus the archer and Homer the bard are one, tuning their instruments to restore harmony.',
    },
    quote: {
      greek: 'ὡς ἄρ᾽ ἄτερ σπουδῆς τάνυσεν μέγα τόξον Ὀδυσσεύς... δεξιτερῇ δ᾽ ἄρα χειρὶ λαβὼν πειρήσατο νευρῆς: ἡ δ᾽ ὑπὸ καλὸν ἄεισε, χελιδόνι εἰκέλη ἄντην.',
      english: 'So without effort did Odysseus string the great bow. And he held it in his right hand, and tried the string, that sang sweetly under his touch like the voice of a swallow.',
      citation: 'Book XXI.409–411',
    },
  },
  {
    id: 'sirens-song',
    name: 'The Sirens’ Song',
    greekName: 'ἡ τῶν Σειρήνων ὀπή',
    symbolicMeaning: 'The fatal seduction of omniscient knowledge, total recall of trauma, and the paralysis of living art.',
    physicalManifestation: 'An enchanting supernatural vocal hymn sung in dactylic hexameter across a calm sea from a meadow of bones.',
    narrativeFunction:
      'The Sirens offer Odysseus the ultimate temptation for a hero: an exhaustive poetic account of his own glory at Troy. Listening without wax tests whether a mortal can experience sublime art without losing the will to live.',
    connectionToEvents:
      'Odysseus ordering his oarsmen to seal their ears with beeswax while lashing himself firmly to the ship’s mast in Book XII.',
    relevantCharacters: ['The Sirens', 'Odysseus', 'Circe', 'Perimedes', 'Eurylochus'],
    bookReferences: 'Book XII.39–54; Book XII.184–200',
    whyItMatters:
      'The song represents the danger of poetry itself. If art merely traps us in the slaughter of the past, it leads to rotting bones; Odysseus survives because his social contract with his men binds him to the living world.',
    explicitEventVsInterpretation: {
      explicitText:
        'The Sirens sing in exact Homeric meter: "For we know all things that happened on fruitful earth" (Book XII.191).',
      scholarlyInterpretation:
        'Adorno and Horkheimer famously interpreted Odysseus bound to the mast as the birth of bourgeois aesthetics: the captain enjoys the beauty of art from a position of enforced safety, while the working crew row mechanically with plugged ears.',
    },
    quote: {
      greek: 'δεῦρ᾽ ἄγ᾽ ἰών, πολύαιν᾽ Ὀδυσεῦ, μέγα κῦδος Ἀχαιῶν, νῆα κατάστησον, ἵνα νωιτέρην ὄπ᾽ ἀκούσῃς...',
      english: 'Come hither, as you fare, renowned Odysseus, great glory of the Achaeans! Draw near your ship that you may hear our voice!',
      citation: 'Book XII.184–185',
    },
  },
];

export const CRITICAL_ESSAYS_DATA: CriticalEssayDetail[] = [
  {
    id: 'odysseus-character',
    title: 'The Polytropic Hero',
    greekRubric: 'Ἄνδρα πολύτροπον',
    subtitle: 'A Critical Character Analysis of Odysseus: From Sacker of Cities to Patient King',
    abstract:
      'An analysis of how Odysseus subverts traditional Bronze Age martial heroism through cognitive flexibility, narrative invention, and the deliberate acceptance of mortal vulnerability.',
    sections: [
      {
        subheading: '1. The Evolution from Bie to Metis',
        text: 'In the Iliad, heroic value is measured by bie—the raw, fatal martial force wielded by Achilles and Ajax. But the sacking of Troy proves that brute force alone reached an impasse after ten years; it was Odysseus’s metis (the wooden horse) that broke the citadel. Throughout his wanderings, Odysseus discovers that physical violence against monsters like Polyphemus or Scylla leads only to death. Heroism becomes cognitive: the ability to read situations, govern one’s own tongue, and calculate outcomes across time.',
      },
      {
        subheading: '2. The Polytropic Identity & Narrative Self-Invention',
        text: 'The opening word of the epic names Odysseus not by his patronymic, but as polytropos—the "man of many turns" or "man of many ways." Odysseus is an actor, storyteller, and chameleon. In the second half of the poem, he willingly strips away his royal majesty to dwell in the rags of an old beggar in his own palace. By accepting degradation, he tests the moral caliber of every servant and suitor. His identity is not fixed in armor; it is fluid, preserved in his living memory.',
      },
      {
        subheading: '3. The Humanist Rejection of Immortality',
        text: 'The climax of Odysseus’s character development occurs on Ogygia in Book V. When Calypso offers him agelessness and divine immortality, Odysseus explicitly chooses mortality, aging, and Penelope. He understands that love, courage, and virtue derive their urgency precisely from human finitude. In rejecting the status of a god, Odysseus becomes the foundational figure of Western humanism.',
      },
    ],
    connectionToEvents: 'The contrast between the Iliadic warrior at Ismarus and the beggar King in Book XXI.',
    relevantCharacters: ['Odysseus', 'Achilles', 'Calypso', 'Penelope', 'Athena'],
    bookReferences: 'Book I.1–5; Book V.215–224; Book XIII.291–310; Book XIX.165–203',
    whyItMatters:
      'It redefines the very definition of a heroic life: greatness is not how dramatically one dies on the battlefield, but how purposefully one endures to rebuild the household and govern in justice.',
    quote: {
      greek: 'Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσε...',
      english: 'Tell me, Muse, of the man of many turns, who wandered far and wide after he plundered the holy citadel of Troy.',
      citation: 'Book I.1–2',
    },
  },
  {
    id: 'xenia-law',
    title: 'The Sacred Law of Hospitality (Xenia)',
    greekRubric: 'Ξενία & Ζεὺς Ξένιος',
    subtitle: 'The Moral and Cosmic Foundation of Archaic Greek Civilization',
    abstract:
      'An investigation into the reciprocal sacred covenant between guest and host overseen by Zeus Xenios, functioning as the moral litmus test of the entire Homeric epic.',
    sections: [
      {
        subheading: '1. Xenia as the Core of Ancient Ethics',
        text: 'In an archaic Mediterranean world without international law, passports, or police, a traveler outside his polis was completely defenseless. The institution of xenia (guest-friendship) was the bedrock of civilization. Overseen by Zeus Xenios, it dictated that a host must welcome any stranger, bathe him, feed him, and offer wine before ever asking his name or business. Only after the stranger’s hunger was satisfied could inquiry be made.',
      },
      {
        subheading: '2. The Spectrum of Hosts in the Odyssey',
        text: 'The epic systematically contrasts exemplary hosts with monstrous anti-hosts. King Nestor of Pylos and King Menelaus of Sparta model aristocratic xenia: they slaughter cattle, pour libations, and bestow lavish gifts. Conversely, Polyphemus inverts xenia by asking the Greeks’ names immediately and devouring his guests; the Sirens invite sailors to their shore only to slaughter them upon bones; and Circe drugs her guests’ wine to turn them into swine.',
      },
      {
        subheading: '3. The Suitors as Corrupted Guests',
        text: 'The moral crisis on Ithaca is a systemic violation of xenia from the side of the guests. The suitors do not wait for invitation; they occupy Odysseus’s hall by force, slaughtering his livestock, abusing his servants, and attempting to murder his son. Their destruction in Book XXII is not senseless slaughter; under archaic moral law, it is the direct execution of Zeus Xenios’s justice upon guests who violated the sacred threshold.',
      },
    ],
    connectionToEvents: 'Nestor’s hospitality in Book III; Polyphemus devouring guests in Book IX; the slaughter of the suitors in Book XXII.',
    relevantCharacters: ['Zeus Xenios', 'Nestor', 'Menelaus', 'Eumaeus', 'Polyphemus', 'The Suitors'],
    bookReferences: 'Book III.34–74; Book IX.256–280; Book XIV.45–60; Book XXII.35–44',
    whyItMatters:
      'Xenia is the moral organizing principle of the poem. Every character’s moral worth and eventual fate is determined strictly by how they treat the stranger and the host.',
    quote: {
      greek: 'ξεῖνοι, τίνες ἐστέ; πόθεν πλεῖθ᾽ ὑγρὰ κέλευθα; ἤ τι κατὰ πρῆξιν ἦ μαψιδίως ἀλάλησθε...',
      english: 'Strangers, who are you? Whence do you sail over the watery paths? Is it on some business, or wander you at random like pirates over the sea?',
      citation: 'Book IX.252–254',
    },
  },
  {
    id: 'gods-and-mortals',
    title: 'The Relationship Between Gods and Mortals',
    greekRubric: 'Θεοί & Βροτοί',
    subtitle: 'Theodicy, Fate, and Mortal Moral Responsibility on Mount Olympus',
    abstract:
      'A study of the shift from Iliadic divine caprice to Odyssean moral theodicy, examining how human suffering is rooted in mortal choices rather than arbitrary celestial malice.',
    sections: [
      {
        subheading: '1. The Zeus Speech in Book I: The Theodicy Proclamation',
        text: 'The Odyssey opens with an astonishing theological declaration. In Book I, Zeus addresses the Olympians and complains that mortals constantly blame the gods for their misery, when in truth humans bring suffering upon themselves through their own blind recklessness (atasthalia). He cites Aegisthus, who was warned by Hermes not to murder Agamemnon or court Clytemnestra, yet chose to do so anyway, sealing his own destruction.',
      },
      {
        subheading: '2. Divine Justice vs. Elemental Fury',
        text: 'The epic balances two opposing divine forces. Poseidon represents archaic, amoral elemental wrath: he hounds Odysseus not because Odysseus is evil, but because Odysseus blinded his son Polyphemus. Athena, in contrast, represents moral and intellectual alignment: she champions Odysseus because his mind mirrors her own wisdom. Over the course of the poem, Athena and Zeus’s moral justice gradually triumphs over Poseidon’s chaotic fury.',
      },
      {
        subheading: '3. Divine Guidance and Human Agency',
        text: 'Homer never allows divine intervention to cancel human responsibility. When Athena transforms Odysseus or deflects suitors’ spears, Odysseus and Telemachus must still string the bow, hold the threshold, and fight with their own arms. The gods inspire, prophesy, and open doors; mortals must cross them through courage, skill, and endurance.',
      },
    ],
    connectionToEvents: 'Zeus’s opening monologue on Olympus in Book I; Athena mentoring Telemachus in Books II–III; the ending of blood feud in Book XXIV.',
    relevantCharacters: ['Zeus', 'Athena', 'Poseidon', 'Odysseus', 'Telemachus'],
    bookReferences: 'Book I.28–47; Book XIII.291–310; Book XXIV.528–548',
    whyItMatters:
      'It represents a milestone in Western moral philosophy: human beings are declared responsible agents of their own destiny, subject to fate but free to choose wisdom over destructive pride.',
    quote: {
      greek: 'ὢ πόποι, οἷον δή νυ θεοὺς βροτοὶ αἰτιόωνται. ἐξ ἡμέων γάρ φασι κάκ᾽ ἔμμεναι: οἱ δὲ καὶ αὐτοὶ σφῇσιν ἀτασθαλίῃσιν ὑπὲρ μόρον ἄλγε᾽ ἔχουσιν...',
      english: 'Look you now, how mortals blame the gods! For they say that evils come from us, when they themselves through their own blind folly have sorrows beyond that which is ordained.',
      citation: 'Book I.32–34',
    },
  },
  {
    id: 'lessons-reflections',
    title: 'Lessons & Reflections from the Epic',
    greekRubric: 'Μαθήματα & Φιλοσοφία',
    subtitle: 'Great Books Seminar Inquiries: What Homer Teaches About the Human Condition',
    abstract:
      'Enduring philosophical inquiries for contemporary readers: the nature of civilization, the costs of vengeance, the ethics of leadership, and the eternal search for home.',
    sections: [
      {
        subheading: '1. The Fragility of Civilization',
        text: 'The Odyssey illustrates how quickly human civilization can decay into barbarism. When the rightful king is absent for twenty years, Ithaca’s council dissolves, the palace becomes a den of parasitic violence, and the laws of hospitality collapse. Civilization is not an automatic inheritance; it is an active, daily moral discipline maintained through justice, memory, and sacred reverence.',
      },
      {
        subheading: '2. The Cost and Limits of Retribution',
        text: 'The slaughter of the suitors in Book XXII is terrifying in its totality. Homer does not depict it as an unalloyed triumph; the floor runs thick with blood, the traitorous maids are executed, and Ithaca stands on the brink of an endless, catastrophic blood-feud with the suitors’ families. In Book XXIV, human justice reaches its limit: only divine intervention from Athena and Zeus can command the weapons to fall and establish peace.',
      },
      {
        subheading: '3. Nostos in the Modern World',
        text: 'Why does the Odyssey remain the central secular scripture of the Western canon? Because every human being experiences wanderings, loss, and the desire to find their way home. Odysseus teaches us that homecoming is not a geographical arrival, but an ethical reclamation: finding out who we are, holding fast to those who love us, and building an enduring bed upon living rock.',
      },
    ],
    connectionToEvents: 'The slaughter in the great hall in Book XXII and the reconciliation with Laertes in Book XXIV.',
    relevantCharacters: ['Odysseus', 'Penelope', 'Laertes', 'Athena', 'The Suitors'],
    bookReferences: 'Book XXII.1–500; Book XXIV.480–548',
    whyItMatters:
      'It elevates the epic beyond a Bronze Age adventure tale into an enduring meditation on how human beings navigate grief, rebuild shattered homes, and discover peace in a turbulent cosmos.',
    quote: {
      greek: 'ἴσχεσθε πτολέμοιο, πιφαυσκόμενοι κατὰ θυμόν, Ἰθακήσιοι, ὥς κεν ἀναιμωτί γε διακρινθῆτε τάχιστα.',
      english: 'Hold back, men of Ithaca, from bitter war, that you may part quickly without blood!',
      citation: 'Book XXIV.531–532',
    },
  },
];
