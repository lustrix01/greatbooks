import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionRubric, FleuronDivider } from '../components/common/Ornament';

interface BookSectionOverview {
  range: string;
  title: string;
  greekTitle: string;
  summary: string;
  keyHighlights: string[];
}

const BOOK_DIVISIONS: BookSectionOverview[] = [
  {
    range: 'Books 1–4',
    title: 'The Search for Odysseus',
    greekTitle: 'Τηλεμάχεια (The Telemachy)',
    summary:
      'The epic opens not with Odysseus, but with his son Telemachus in an Ithaca besieged by more than one hundred insolent suitors consuming his father’s estate. Inspired by Athena in the guise of Mentes and Mentor, the prince convenes the first council in twenty years, confronts the suitors, and sails by night to Pylos and Sparta to seek tidings of his absent father from King Nestor and King Menelaus.',
    keyHighlights: [
      'Athena petitions Zeus on Olympus while Poseidon feasts in Ethiopia.',
      'Antinous reveals Penelope’s stratagem of weaving and unweaving Lord Laertes’ shroud.',
      'King Nestor demonstrates sacred hospitality (xenia) on the shores of Pylos.',
      'Helen and Menelaus recount Odysseus disguised as a beggar inside Troy and the ambush of Proteus.',
    ],
  },
  {
    range: 'Books 5–8',
    title: 'Odysseus Leaves Calypso and Reaches the Phaeacians',
    greekTitle: 'Ὀδυσσέως σχεδία καὶ ἄφιξις εἰς Φαίακας',
    summary:
      'The narrative shifts to the island of Ogygia, where Odysseus has wept for seven years as the captive consort of the nymph Calypso. Hermes delivers Zeus’s decree commanding his release; Odysseus rejects immortality, builds a timber raft with master craftsmanship, and sets sail. Shattered by Poseidon’s tempest, he is saved by Ino’s veil, washes ashore on Scheria, is discovered by Princess Nausicaa, and is welcomed into the utopian hall of King Alcinous and Queen Arete.',
    keyHighlights: [
      'Odysseus chooses mortal aging, grief, and Ithaca over Calypso’s offer of eternal youth.',
      'Poseidon spots Odysseus from the Solymi mountains and crushes his raft with a monstrous storm.',
      'Nausicaa provides clothes and advice, demonstrating youthful modesty and royal decorum.',
      'Blind bard Demodocus sings of Troy, moving Odysseus to weep into his purple cloak and reveal his identity.',
    ],
  },
  {
    range: 'Books 9–12',
    title: 'Odysseus Recounts His Adventures',
    greekTitle: 'Ἀπόλογοι (The Apologue at the Court of Alcinous)',
    summary:
      'The great retrospective centerpiece of the epic. Over two consecutive nights before the Phaeacian court, Odysseus narrates his ten-year wanderings following the fall of Troy: the raid on Ismarus, the sweet amnesia of the Lotus-Eaters, the blinding of Polyphemus, the disaster of the wind-bag at Aeolia, the massacre by the Laestrygonians, one year on Aeaea with Circe, the descent into the Underworld (Nekuia), the Sirens, Scylla and Charybdis, and the fatal slaughter of Helios’s cattle.',
    keyHighlights: [
      'The "Nobody" (Outis) pun and the fiery blinding of the Cyclops Polyphemus.',
      'Hermes bestows the sacred moly herb to nullify Circe’s swine sorcery.',
      'The libation of blood at Oceanus: prophecies of Tiresias and Achilles’ meditation on death.',
      'Lashing himself to the mast to hear the Sirens; losing six men to Scylla’s crag.',
      'Zeus strikes the ship with lightning after the cattle of Helios are eaten, leaving Odysseus sole survivor.',
    ],
  },
  {
    range: 'Books 13–16',
    title: 'Return to Ithaca and Reunion with Telemachus',
    greekTitle: 'Ἄφιξις εἰς Ἰθάκην καὶ ἀναγνωρισμός',
    summary:
      'The Phaeacians convey Odysseus fast asleep to Ithaca, leaving him beside the cave of the Nymphs with treasures of bronze and gold. Athena shrouds the island in mist; when Odysseus wakes disoriented, goddess and mortal match wits in mutual delight. Athena transforms him into an aged, ragged beggar and directs him to the forest hut of loyal swineherd Eumaeus. Telemachus evades the suitors’ strait ambush, arrives at the hut, and father and son weep in joyful recognition.',
    keyHighlights: [
      'Poseidon petrifies the returning Phaeacian ship into stone outside Scheria harbor.',
      'Athena and Odysseus plan the destruction of the suitors in intimate dialogue.',
      'Eumaeus demonstrates unconditional hospitality to the beggar, sharing his roasted pork and fleece bed.',
      'Athena restores Odysseus to his youthful stature, prompting father and son to weep like eagles.',
    ],
  },
  {
    range: 'Books 17–20',
    title: 'Odysseus Enters His Palace in Disguise',
    greekTitle: 'Ὀδυσσέως εἴσοδος εἰς τὰ βασίλεια',
    summary:
      'Odysseus approaches his palace disguised as a vagabond. At the threshold, his abandoned hunting dog Argos recognizes his master’s voice, wags his tail, and dies in peace. Odysseus begs scraps among the suitors, testing their disposition; Antinous strikes him with a footstool. Odysseus downs the rival town beggar Irus with a single blow. At night, he and Telemachus remove all weapons from the hall; Penelope interviews the beggar by the hearth; and Eurycleia discovers his scar.',
    keyHighlights: [
      'The faithful hound Argos dies on the dung heap after twenty years of waiting.',
      'Antinous hurls a heavy footstool, striking Odysseus’s shoulder blade without breaking his resolve.',
      'Odysseus recounts the intricate "Cretan Tales" to Penelope and describes her husband’s golden brooch.',
      'Eurycleia discovers the boar-hunt scar on his knee and is silenced by Odysseus’s hand.',
      'Athena strikes the suitors with apocalyptic hysterical laughter while the hall drips with blood portents.',
    ],
  },
  {
    range: 'Books 21–24',
    title: 'The Bow Contest and Restoration of Order',
    greekTitle: 'Τόξου θέσις, μνηστηροφονία, καὶ σπονδαί',
    summary:
      'Penelope retrieves the ancestral bow of Iphitus, proposing marriage to whoever strings it and shoots through twelve aligned axe sockets. All suitors fail; the beggar takes the weapon and strings it effortlessly like a bard tuning a lyre, firing cleanly through the axes. Shedding his rags, Odysseus slays Antinous and Eurymachus, purging the palace with Telemachus and the loyal herdsmen. He proves his identity to Penelope with the olive-tree bed and ratifies perpetual peace with his father Laertes.',
    keyHighlights: [
      'The beggar handles the bow while the suitors mock, stringing the horn with effortless grace.',
      'Antinous is shot through the throat mid-sip from his golden wine chalice.',
      'The battle of the great hall: Athena shakes the aegis, routing the suitors like stung cattle.',
      'Penelope’s test of the immovable olive-tree bed, achieving mutual reconciliation (homophrosynē).',
      'The second Nekuia in Hades and Athena’s intervention halting the blood-feud between Ithacan families.',
    ],
  },
];

interface AcademicReference {
  citation: string;
  author: string;
  year: string;
  title: string;
  publisher: string;
  annotation: string;
}

const ACADEMIC_REFERENCES: AcademicReference[] = [
  {
    author: 'Parry, Milman',
    year: '1971',
    title: 'The Making of Homeric Verse: The Collected Papers of Milman Parry',
    publisher: 'Edited by Adam Parry. Oxford University Press',
    citation: 'Parry, M. (1971). The Making of Homeric Verse. Oxford: Clarendon Press.',
    annotation:
      'The foundational text of the Oral Formulaic Theory. Parry proved through metric analysis that Homeric epithets and repeated verses were mnemonic tools developed over centuries of illiterate oral bardic performance.',
  },
  {
    author: 'Lord, Albert B.',
    year: '1960',
    title: 'The Singer of Tales',
    publisher: 'Harvard University Press (Harvard Studies in Comparative Literature, 24)',
    citation: 'Lord, A. B. (1960). The Singer of Tales. Cambridge, MA: Harvard University Press.',
    annotation:
      'Building on Milman Parry’s fieldwork in the Balkans, Lord documented how traditional South Slavic guslars improvised monumental epics using themes and formulas, establishing the empirical model for the composition of the Homeric poems.',
  },
  {
    author: 'Lattimore, Richmond',
    year: '1967',
    title: 'The Odyssey of Homer: A Translation with Introduction and Notes',
    publisher: 'Harper & Row, Publishers',
    citation: 'Lattimore, R. (Trans.). (1967). The Odyssey of Homer. New York: Harper & Row.',
    annotation:
      'Esteemed by classicists for its rigorous commitment to line-for-line accuracy and reproduction of the speed, plainness, and syntax of Homer’s dactylic hexameter.',
  },
  {
    author: 'Fagles, Robert',
    year: '1996',
    title: 'The Odyssey',
    publisher: 'Introduction and notes by Bernard Knox. Penguin Classics',
    citation: 'Fagles, R. (Trans.). (1996). The Odyssey. New York: Penguin Books.',
    annotation:
      'Celebrated for its dramatic energy, rhythmic flexibility, and accessibility, accompanied by Bernard Knox’s landmark 60-page introductory essay on the poem’s historical and thematic architecture.',
  },
  {
    author: 'Wilson, Emily',
    year: '2017',
    title: 'The Odyssey: A New Translation',
    publisher: 'W. W. Norton & Company',
    citation: 'Wilson, E. (Trans.). (2017). The Odyssey. New York: W. W. Norton & Company.',
    annotation:
      'The first complete English translation of the epic by a woman. Composed in strict iambic pentameter matching the exact line count of the Greek text, it is renowned for stripping away Victorian archaisms and highlighting the complexity of class, gender, and slavery in Ithaca.',
  },
  {
    author: 'Finley, M. I.',
    year: '1954',
    title: 'The World of Odysseus',
    publisher: 'The Viking Press (Rev. ed. 1977, Penguin Books)',
    citation: 'Finley, M. I. (1977). The World of Odysseus (Rev. ed.). London: Penguin Books.',
    annotation:
      'The definitive historical-sociological study of the institutions, gift-exchange economy, household structures (oikoi), and moral conventions depicted in Homeric epic.',
  },
  {
    author: 'Stanford, W. B.',
    year: '1954',
    title: 'The Ulysses Theme: A Study in the Adaptability of a Traditional Hero',
    publisher: 'Basil Blackwell (2nd ed. 1963, University of Michigan Press)',
    citation: 'Stanford, W. B. (1963). The Ulysses Theme. Ann Arbor: University of Michigan Press.',
    annotation:
      'The seminal literary monograph tracking the psychological complexity of Odysseus from Homer through Sophocles, Virgil, Dante, Tennyson, and James Joyce.',
  },
  {
    author: 'Murray, A. T. & Dimock, George E.',
    year: '1919 / 1995',
    title: 'Homer: The Odyssey (Vols. I & II, Loeb Classical Library 104 & 105)',
    publisher: 'Harvard University Press',
    citation: 'Murray, A. T., & Dimock, G. E. (Eds. & Trans.). (1995). Homer: Odyssey. Cambridge, MA: Harvard University Press.',
    annotation:
      'The standard dual-language edition for university scholars, featuring the established Greek text on facing pages with literal prose translation and critical apparatus.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <PageContainer folioTitle="About the Epic · Prolegomena & Academic Companion">
      {/* Editorial Masthead Header */}
      <section className="text-center max-w-3xl mx-auto pb-10 border-b border-parchment-border">
        <p className="font-display text-xs text-terracotta tracking-widest mb-3">
          Prolegomena ad Odysseam
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary mb-3">
          About Homer’s Odyssey
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-antique-gold mb-3">
          An academic study of its oral composition, historical context, poetic architecture, and reception.
        </p>
        <p className="font-body text-sm text-ink-secondary leading-relaxed max-w-2xl mx-auto">
          A critical guide to the foundational narrative of Western literature. Explore the Homeric Question, the social world of early Archaic Greece, the 24 books divided into six canonical movements, and verified classical scholarship.
        </p>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto py-12 space-y-16">
        {/* ======================================================== */}
        {/* 1. INTRODUCTION TO THE EPIC                              */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <SectionRubric roman="I" label="Introduction to the Epic" />
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
            The Monument of Survival and Homecoming
          </h2>
          <div className="border border-parchment-border bg-parchment-surface p-6 sm:p-8 space-y-4 font-body text-base text-ink-secondary leading-relaxed drop-cap">
            <p>
              Homer’s <em>Odyssey</em> stands alongside the <em>Iliad</em> as one of the twin pillars of European literary culture. While the <em>Iliad</em> is an epic of tragic martial slaughter—the tragedy of Achilles who chooses an early, incandescent death on the battlefield—the <em>Odyssey</em> is the supreme epic of survival. It chronicles the ten-year return of Odysseus, King of Ithaca, after the fall of Troy, charting his struggle across a magical, tempestuous Mediterranean to reclaim his wife Penelope, his son Telemachus, and his ancestral kingdom.
            </p>
            <p>
              Composed in dactylic hexameter and encompassing 12,110 lines of verse, the poem weaves domestic realism with supernatural folklore. It explores what it costs a human being to outlast war and exile, confronting monsters, sorceresses, and divine fury not through brute force (<em>biē</em>), but through cunning intelligence (<em>mētis</em>), self-restraint, and the unyielding will to return home (<em>nostos</em>).
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. HOMER & THE HOMERIC TRADITION (THE HOMERIC QUESTION) */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <SectionRubric roman="II" label="Authorship & The Homeric Tradition" />
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
            Homer and the Problem of Authorship
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4 font-body text-base text-ink-secondary leading-relaxed">
              <p>
                In classical antiquity, the Greeks revered "Homer" as a historical, blind poet born on the island of Chios or in the Ionian city of Smyrna, attributing to him the <em>Iliad</em>, the <em>Odyssey</em>, and the Homeric Hymns. However, modern scholarship recognizes that the name Homer represents the culmination of a centuries-old oral tradition rather than a modern solitary author working in seclusion with pen and paper.
              </p>
              <p>
                From the late 18th century onward, debate over the composition of the poems coalesced into the famous <strong>Homeric Question</strong>. Scholars divided into two major camps: the <em>Analysts</em> (led by Friedrich August Wolf in his 1795 <em>Prolegomena ad Homerum</em>), who argued that the epic was a patchwork compilation of diverse, pre-existing shorter ballads stitched together by late editors; and the <em>Unitarians</em>, who maintained that the unified dramatic structure, intricate symmetries, and psychological depth of the poem could only be the product of a single monumental poetic genius.
              </p>
              <p>
                Today, contemporary scholarship largely synthesizes these views: while the linguistic formulas and narrative episodes developed over generations of oral performance, a master poet (conventionally named Homer), working in Ionia in the late 8th or early 7th century BCE, crystallized the traditional material into the monumental, architecturally unified masterwork we possess today.
              </p>
            </div>

            {/* Scholastic Aside Box */}
            <aside className="md:col-span-4 border border-parchment-border bg-parchment-aged/40 p-5 space-y-3 text-xs font-serif">
              <h3 className="font-display text-xs text-ink-muted tracking-wider border-b border-parchment-border pb-1.5">
                The Alexandrian Division
              </h3>
              <p className="text-ink-secondary leading-relaxed">
                The division of the epic into exactly 24 books was not executed by Homer, but standardized in the 3rd century BCE by the librarians of Alexandria—chiefly Zenodotus of Ephesus and Aristarchus of Samothrace—matching the 24 letters of the Ionic Greek alphabet (Α through Ω).
              </p>
              <div className="hairline-rule my-2" />
              <p className="text-ink-secondary leading-relaxed">
                The language of the epic is a synthetic literary dialect (Homeric Greek) that was never spoken on the street: a composite of Ionic, Aeolic, and archaic Mycenaean grammatical elements designed specifically to fit the dactylic hexameter meter.
              </p>
            </aside>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. ANCIENT GREEK ORAL STORYTELLING                       */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <SectionRubric roman="III" label="Oral Poetry & Performance" />
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
            The Singer of Tales: Oral Formulaic Composition
          </h2>

          <div className="border border-parchment-border bg-parchment-surface p-6 sm:p-8 space-y-5 font-body text-base text-ink-secondary leading-relaxed">
            <p>
              The definitive breakthrough in understanding Homer occurred in the 1930s through the revolutionary fieldwork of American classicists <strong>Milman Parry</strong> and <strong>Albert Lord</strong>. By studying living, non-literate epic singers (guslars) in Bosnia and the Balkans who could recite thousands of lines of poetry from memory without written scripts, Parry and Lord demonstrated that Homeric verse is an oral-formulaic medium.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs sm:text-sm font-serif">
              <div className="border border-parchment-border bg-parchment-base/40 p-4 space-y-1.5">
                <span className="font-medium text-terracotta block font-display text-xs tracking-wider">
                  Formulaic Epithets & Mnemonic Architecture
                </span>
                <p className="text-ink-secondary leading-relaxed">
                  Repeated phrases such as <em>"rosy-fingered Dawn"</em> (rhododaktylos Ēōs), <em>"wine-dark sea"</em> (oinops pontos), and <em>"owl-eyed Athena"</em> (glaukōpis Athēnē) are not mere ornamental decorations; they are metrical building blocks chosen to fill specific positions in the hexameter line, enabling the bard (<em>aoidos</em>) to compose and adapt poetry spontaneously before a live audience.
                </p>
              </div>

              <div className="border border-parchment-border bg-parchment-base/40 p-4 space-y-1.5">
                <span className="font-medium text-antique-gold block font-display text-xs tracking-wider">
                  The Bard as Social Historian
                </span>
                <p className="text-ink-secondary leading-relaxed">
                  Inside the epic itself, Homer depicts the vital social function of the singer. When Phemios sings in Ithaca (Book I) or Demodocus sings in Phaeacia (Book VIII), listeners gather in solemn reverence. The bard was believed to be inspired directly by the Muse, functioning as the living archive of a culture’s genealogy, military history, and moral wisdom.
                </p>
              </div>
            </div>

            <p className="pt-2">
              Oral performance was later institutionalized across the Greek world by professional reciters called <strong>rhapsodes</strong> (literally "stitchers of songs"), who performed the complete Homeric epics in relayed relays during the Panathenaic games in Athens under the patronage of the Peisistratid dynasty in the 6th century BCE.
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. HISTORICAL & CULTURAL BACKGROUND                      */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <SectionRubric roman="IV" label="Historical & Material Context" />
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
            Between Bronze and Iron: The World of the Poem
          </h2>

          <div className="border border-parchment-border bg-parchment-surface p-6 sm:p-8 space-y-4 font-body text-base text-ink-secondary leading-relaxed">
            <p>
              As historian <strong>M. I. Finley</strong> demonstrated in <em>The World of Odysseus</em> (1954), the historical background of the epic is a chronological hybrid. The narrative is set in the heroic twilight of the <strong>Late Bronze Age Mycenaean civilization</strong> (c. 1250–1180 BCE), remembered as an era of gold-rich palaces, bronze swords, and massive stone citadels. However, the poem was recorded in the <strong>Early Archaic period</strong> (c. 750–700 BCE), reflecting the emergence of iron tools, maritime colonization, and individual civic institutions.
            </p>
            <p>
              The core social and economic unit of Homer’s world is the <strong>oikos</strong>—the patriarchal household comprising the royal family, estate land, livestock, free servants, and slaves. In the absence of state police, standing armies, or written constitutions, political stability depended entirely on reciprocal bonds: the fidelity of retainers, gift-exchange alliances between monarchs, and the sacred laws of hospitality (<em>xenia</em>) overseen by Zeus Xenios.
            </p>
            <p>
              The wanderings of Odysseus reflect the maritime awakening of 8th-century Greeks as they launched ships across the Ionian and Tyrrhenian seas to plant colonies in southern Italy and Sicily (Magna Graecia). The terrors of the voyage—sheer fjords with giant cannibals, deadly straits with treacherous currents, and isolated paradise islands—embody the anxieties and wonder of archaic mariners venturing beyond the charted borders of the Aegean.
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. STRUCTURE OF THE EPIC                                 */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <SectionRubric roman="V" label="Narrative Architecture" />
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
            Symmetry and Narrative Architecture
          </h2>

          <div className="border border-parchment-border bg-parchment-surface p-6 sm:p-8 space-y-4 font-body text-base text-ink-secondary leading-relaxed">
            <p>
              The structural architecture of the <em>Odyssey</em> is remarkably sophisticated, employing narrative techniques that anticipate modern fiction by millennia:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm font-serif text-ink-secondary divide-y divide-parchment-border/60">
              <li className="pt-2 first:pt-0">
                <strong className="text-ink-primary font-medium block">In Media Res (In the Middle of Things):</strong>
                The epic begins not at the fall of Troy, but ten years later, in the twentieth year of Odysseus’s absence. The backstory of his adventures is framed as an internal monologue delivered by Odysseus himself in Books IX–XII.
              </li>
              <li className="pt-2">
                <strong className="text-ink-primary font-medium block">Parallel Father-Son Quests:</strong>
                Telemachus sails outward from Ithaca into the Peloponnese searching for his father’s identity, while Odysseus sails inward from the mythic margins toward Ithaca. Their trajectories intersect symmetrically in Book XVI in Eumaeus’s hut.
              </li>
              <li className="pt-2">
                <strong className="text-ink-primary font-medium block">The Bifurcated Structure:</strong>
                The poem splits cleanly into two twelve-book halves: Books I–XII take place on the sea and in foreign palaces across the Mediterranean; Books XIII–XXIV unfold entirely on the rugged soil of Ithaca, transitioning from wanderings to domestic restoration.
              </li>
            </ul>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. EXPLANATION OF ITS 24 BOOKS (THE SIX MOVEMENTS)       */}
        {/* ======================================================== */}
        <section className="space-y-6">
          <div className="space-y-2">
            <SectionRubric roman="VI" label="The Twenty-Four Books Explained" />
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
              The Six Canonical Movements of the Epic
            </h2>
            <p className="font-body text-sm text-ink-muted">
              Organized into six coherent narrative movements tracing the journey from despair to perpetual peace.
            </p>
          </div>

          <div className="space-y-6">
            {BOOK_DIVISIONS.map((group) => (
              <div
                key={group.range}
                className="border border-parchment-border bg-parchment-surface p-6 sm:p-7 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-parchment-border pb-3 gap-1">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display text-xs text-terracotta tracking-wider font-semibold">
                      {group.range}
                    </span>
                    <span className="text-parchment-darkborder">&bull;</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink-primary">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-serif italic text-xs text-ink-muted greek-script">
                    {group.greekTitle}
                  </span>
                </div>

                <p className="font-body text-sm text-ink-secondary leading-relaxed">
                  {group.summary}
                </p>

                <div className="pt-2 border-t border-parchment-border/60">
                  <span className="font-display text-[11px] text-ink-muted tracking-wider block mb-1.5">
                    Canonical Narrative Milestones:
                  </span>
                  <ul className="space-y-1 font-body text-xs text-ink-secondary">
                    {group.keyHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-antique-gold font-serif text-xs select-none mt-0.5">
                          &bull;
                        </span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 7. LITERARY & HISTORICAL INFLUENCE                       */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <SectionRubric roman="VII" label="Reception & Classical Legacy" />
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
            The Living Echo: Literary and Historical Influence
          </h2>

          <div className="border border-parchment-border bg-parchment-surface p-6 sm:p-8 space-y-4 font-body text-base text-ink-secondary leading-relaxed">
            <p>
              No work in world literature has exercised a more pervasive influence across three millennia than Homer’s <em>Odyssey</em>. In classical Rome, <strong>Virgil</strong> modeled the first half of the <em>Aeneid</em> directly on the Odyssean sea wanderings of Aeneas escaping the ruins of Troy to found Rome. In the Middle Ages, <strong>Dante Alighieri</strong> placed Ulysses in the eighth circle of his <em>Inferno</em> (Canto XXVI), reinventing him as the tragic embodiment of reckless intellectual overreaching who sails past the Pillars of Heracles in pursuit of forbidden knowledge.
            </p>
            <p>
              In the 20th century, <strong>James Joyce</strong> transformed the entire architecture of Homer’s epic into the supreme masterpiece of modernist fiction, <em>Ulysses</em> (1922), transposing Odysseus’s ten-year wanderings onto eighteen hours in the life of Dublin advertising canvasser Leopold Bloom. Caribbean poet <strong>Derek Walcott</strong> won the Nobel Prize in Literature following his epic <em>Omeros</em> (1990), weaving Homeric fishermen across the island of St. Lucia. Contemporary feminist reimaginings, such as <strong>Margaret Atwood’s</strong> <em>The Penelopiad</em> (2005) and <strong>Madeline Miller’s</strong> <em>Circe</em> (2018), continue to testify to the inexhaustible adaptability of Homer’s mythic cosmos.
            </p>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 8. ACADEMIC REFERENCES & VERIFIED SOURCES                */}
        {/* ======================================================== */}
        <section className="space-y-4">
          <SectionRubric roman="VIII" label="Academic Bibliography & Sources" />
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink-primary">
            Scholarly Citations & Authoritative References
          </h2>
          <p className="font-body text-sm text-ink-muted">
            The historical, linguistic, and textual analyses throughout this edition are grounded in peer-reviewed classical scholarship.
          </p>

          <div className="border border-parchment-border bg-parchment-surface divide-y divide-parchment-border/70">
            {ACADEMIC_REFERENCES.map((ref, idx) => (
              <div key={idx} className="p-5 space-y-1.5 text-xs sm:text-sm font-serif">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-medium text-ink-primary text-sm sm:text-base">
                    {ref.author} ({ref.year})
                  </span>
                  <span className="font-display text-[10px] text-terracotta tracking-wider">
                    Classical Bibliography
                  </span>
                </div>

                <p className="italic text-ink-secondary">
                  {ref.title}. {ref.publisher}.
                </p>

                <p className="font-body text-xs text-ink-muted leading-relaxed pt-1">
                  <strong className="font-serif font-medium text-ink-secondary">Scholarly Contribution: </strong>
                  {ref.annotation}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <FleuronDivider />
    </PageContainer>
  );
};
