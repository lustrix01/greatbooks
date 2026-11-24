import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { GreekShipIllustration } from '../components/illustrations/GreekShipIllustration';
import { FleuronDivider, SectionRubric } from '../components/common/Ornament';
import { EPIC_METADATA, HOMERIC_THEMES } from '../data/odysseyData';
import { Compass, BookOpen, ArrowRight } from 'lucide-react';

const SELECTED_CHARACTERS = [
  {
    name: 'Odysseus',
    greek: 'Ὀδυσσεύς',
    epithet: 'Polytropos · Man of many turns',
    role: 'King of Ithaca & epic protagonist',
    dossier:
      'The intellectual survivor of the Trojan War. Where Achilles chose incandescent glory through youthful death on the battlefield, Odysseus chooses survival, endurance, and the reclamation of his home. His defining virtue is polymētis—the strategic intelligence to outlast monsters, gods, and his own despair.',
    famousQuote: '\u201cEndure, my heart; you have endured worse than this.\u201d',
    quoteCitation: 'Book XX.18',
  },
  {
    name: 'Penelope',
    greek: 'Πηνελόπεια',
    epithet: 'Periphron · Circumspect & constant',
    role: "Queen of Ithaca & Odysseus\u2019s consort",
    dossier:
      'The psychological mirror and intellectual equal of Odysseus. For two decades, she preserves the Ithacan household against more than one hundred voracious suitors through patient stratagems\u2014chiefly the weaving and unweaving of Laertes\u2019 burial shroud by torchlight and the secret test of the olive-tree bed.',
    famousQuote:
      '\u201cDo not be angry with me now, Odysseus, who in all else were ever the wisest of men.\u201d',
    quoteCitation: 'Book XXIII.209',
  },
  {
    name: 'Telemachus',
    greek: 'Τηλέμαχος',
    epithet: 'Pepnymenos · Prudent & clear-minded',
    role: 'Prince of Ithaca',
    dossier:
      'Born on the eve of his father\u2019s departure for Ilium, Telemachus matures over the opening four books (the Telemachy) from a helpless, brooding youth overshadowed by the suitors into an authoritative prince capable of sailing into the Peloponnese and standing beside his father in the great hall.',
    famousQuote:
      '\u201cMother, my heart knows now what was done before; I am no longer a child.\u201d',
    quoteCitation: 'Book XVIII.228',
  },
  {
    name: 'Athena (Pallas)',
    greek: 'Παλλὰς Ἀθήνη',
    epithet: 'Glaukopis · Owl-eyed & wise',
    role: 'Goddess of wisdom & tactical craft',
    dossier:
      'The divine patroness of the Ithacan royal line. Athena treasures Odysseus precisely for his agile mind, eloquent tongue, and self-restraint. Appearing across the epic in mortal guises\u2014as Mentes, Mentor, and young maidens\u2014she inspires human agency rather than substituting for it.',
    famousQuote: '\u201cAlways you are the same: deliberate, keen-witted, and steadfast.\u201d',
    quoteCitation: 'Book XIII.332',
  },
];

const MYTHICAL_ENCOUNTERS_PREVIEW = [
  {
    id: 'cyclops',
    name: 'Polyphemus & the cave of the Cyclopes',
    greek: 'Κύκλωψ Πολύφημος',
    location: 'Traditional: Western coast of Sicily',
    bookRef: 'Book IX',
    summary:
      'Trapped within the cavern of the man-eating son of Poseidon, Odysseus conceals his identity under the name Outis (\u201cNobody\u201d). Intoxicating the giant with unwatered Thracian wine, the Greeks blind his solitary eye with an olive-wood stake and escape clinging to the woolly bellies of his rams.',
    homericPeril:
      'The lawlessness of anti-civilization without laws, assemblies, or sacred hospitality (xenia).',
    fateNote:
      'Six men consumed; Odysseus invites Poseidon\u2019s ten-year wrath by shouting his true name upon departure.',
  },
  {
    id: 'circe',
    name: 'Circe on the enchanted isle of Aeaea',
    greek: 'Κίρκη ἡ Πολυφάρμακος',
    location: 'Traditional: Promontorio Circeo, Italy',
    bookRef: 'Books X & XII',
    summary:
      'The dread daughter of Helios drugs Odysseus\u2019s scouts with enchanted barley wine, transforming them into swine. Protected by the divine herb moly provided by Hermes, Odysseus masterfully tames the sorceress, turning her from a predatory hazard into an indispensable counselor for the Underworld.',
    homericPeril: 'Sensual amnesia and the degradation of human reason into beastly passivity.',
    fateNote:
      'Scouts restored to youthful stature; one year spent before departing for the Realm of the Dead.',
  },
  {
    id: 'sirens',
    name: 'The song of the Sirens in the bone meadow',
    greek: 'Σειρῆνες',
    location: 'Traditional: Sirenuse Archipelago (Li Galli)',
    bookRef: 'Book XII',
    summary:
      'Circe warns Odysseus of the winged maidens whose honeyed voices promise absolute knowledge of everything suffered on the plains of Troy. Odysseus seals his oarsmen\u2019s ears with softened beeswax and orders himself bound fast to the mast, desperate to hear the forbidden song without being lured to shipwreck upon their rotting meadow.',
    homericPeril:
      'The fatal seduction of omniscient narrative knowledge leading to spiritual decay and death.',
    fateNote:
      'All crew members survive through strict discipline and voluntary physical restraint.',
  },
  {
    id: 'scylla-charybdis',
    name: 'The strait of Scylla and Charybdis',
    greek: 'Σκύλλα καὶ Χάρυβδις',
    location: 'Traditional: The Strait of Messina',
    bookRef: 'Book XII',
    summary:
      'Faced with the harrowing dilemma between total destruction in Charybdis\u2019s thrice-daily whirlpool or the unavoidable loss of six men to Scylla\u2019s crag, Odysseus chooses the lesser horror. He steers beneath the cliff, watching helplessly as six of his bravest comrades are plucked from the deck while shrieking his name.',
    homericPeril:
      'The tragedy of unyielding heroic leadership: facing an agony where no victory is possible.',
    fateNote:
      'Six seasoned oarsmen lost forever; the solitary remaining ship presses onward toward Thrinacia.',
  },
];

export const HomePage: React.FC = () => {
  return (
    <PageContainer folioTitle="The frontispiece · Proem & The Odyssey companion">
      {/* ======================================================== */}
      {/* 1. LARGE EDITORIAL HERO SECTION                          */}
      {/* ======================================================== */}
      <section className="pt-6 pb-12 sm:pb-16 border-b border-parchment-border">
        {/* Subtle Running Rubric */}
        <div className="flex items-center justify-center gap-2 text-xs font-sans text-ink-muted mb-4">
          <span className="text-terracotta font-medium">Homerica</span>
          <span>&bull;</span>
          <span>Great Books study series</span>
          <span>&bull;</span>
          <span>Archaic Greek epic</span>
        </div>

        {/* Large Editorial Title */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-ink-primary tracking-normal leading-none">
            The Odyssey
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-antique-gold font-normal">
            A journey beyond Ithaca.
          </p>
        </div>

        {/* Short Introduction */}
        <div className="max-w-2xl mx-auto mt-6 text-center">
          <p className="font-serif text-base sm:text-lg text-ink-secondary leading-relaxed">
            Ten years after the sacking of Troy, when all other surviving Greek warlords had
            reclaimed their halls or perished in the surf, Odysseus alone remained lost upon the
            wine-dark sea. Harried by the vengeful wrath of Poseidon, detained on enchanted shores,
            and pursued by his own mortal grief, his ten-year struggle to return to his rocky home
            of Ithaca redefined what it means to be a hero.
          </p>
        </div>

        {/* Compelling CTA Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/journey"
            className="group px-6 py-3 border border-terracotta bg-parchment-surface text-terracotta hover:bg-parchment-aged/70 hover:text-ink-primary font-sans font-medium text-sm sm:text-base transition-all flex items-center gap-2.5 shadow-2xs"
          >
            <Compass className="w-4 h-4 text-terracotta group-hover:rotate-45 transition-transform" />
            <span>Explore the journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/books"
            className="px-6 py-3 border border-parchment-darkborder bg-parchment-surface/60 text-ink-secondary hover:text-ink-primary hover:border-antique-gold font-sans font-medium text-sm sm:text-base transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 opacity-75" />
            <span>The twenty-four books</span>
          </Link>
        </div>

        {/* Large Atmospheric Illustration */}
        <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
          <GreekShipIllustration />
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. BRIEF INTRODUCTION TO THE EPIC (THE PROEM & OVERVIEW) */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-parchment-border max-w-5xl mx-auto">
        <SectionRubric roman="I" label="The invocation of the Muse" className="mb-6 justify-center" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-primary font-normal">
            The proem of Homer
          </h2>
          <p className="font-serif text-sm text-ink-muted mt-2">
            The canonical opening lines of the epic poem, invoking the Muse of epic song (Calliope).
          </p>
        </div>

        {/* Parallel Verse Plate: Original Greek & Poetic English */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border border-parchment-border bg-parchment-surface p-6 sm:p-10 shadow-2xs">
          {/* Greek Original */}
          <div className="border-b md:border-b-0 md:border-r border-parchment-border pb-6 md:pb-0 md:pr-8">
            <span className="font-sans text-xs font-medium text-ink-muted block mb-3">
              Original Greek hexameter (1.1&ndash;5)
            </span>
            <p className="font-serif italic text-base sm:text-lg text-ink-secondary leading-relaxed whitespace-pre-line tracking-wide greek-script">
              {EPIC_METADATA.proem.greek}
            </p>
            <span className="block mt-4 text-xs font-serif text-ink-muted italic">
              &mdash; Ὁμήρου Ὀδύσσεια, Ραψῳδία Α
            </span>
          </div>

          {/* English Poetic Translation */}
          <div className="md:pl-4 space-y-4">
            <span className="font-sans text-xs font-medium text-ink-muted block">
              English translation
            </span>
            <p className="font-serif text-base text-ink-primary leading-relaxed drop-cap">
              {EPIC_METADATA.proem.english}
            </p>
            <p className="font-serif italic text-xs text-ink-muted text-right">
              &mdash; {EPIC_METADATA.proem.citation}
            </p>
          </div>
        </div>

        {/* Editorial Narrative Discourse */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-4">
            <h3 className="font-serif text-2xl text-ink-primary font-normal">
              A hero measured by endurance, not slaughter
            </h3>
            <p className="font-serif text-base text-ink-secondary leading-relaxed">
              In Homer&rsquo;s <em>Iliad</em>, heroism is defined by <em>bi&#275;</em>&mdash;the
              terrifying, youthful, and fatal physical force that Achilles unleashes on the plains
              of Troy. But the <em>Odyssey</em> proposes an entirely different heroic ideal:{' '}
              <em>m&#275;tis</em> (cunning intelligence) and <em>tl&#275;mosyn&#275;</em> (the
              power to endure).
            </p>
            <p className="font-serif text-base text-ink-secondary leading-relaxed">
              Odysseus is an aging king who has plundered Troy and seen the towns of distant men.
              His great quest is not conquest, but <em>nostos</em>&mdash;the fragile, fraught, and
              painful journey back to his wife Penelope, his son Telemachus, and his aging father
              Laertes. Across twenty-four books, Homer crafts a world suspended between mythic
              fantasy and the rigorous moral laws of ancient human society.
            </p>
          </div>

          {/* Marginal Scholastic Column */}
          <aside className="md:col-span-4 border border-parchment-border bg-parchment-aged/40 p-5 space-y-3">
            <h4 className="font-sans text-xs font-semibold text-ink-muted border-b border-parchment-border pb-1.5">
              Epic architecture
            </h4>
            <div className="space-y-3 text-xs font-serif text-ink-secondary leading-relaxed">
              <p>
                <strong className="text-ink-primary font-medium block">
                  41 days of dramatic action:
                </strong>
                The poem&rsquo;s narrative present unfolds across only forty-one days; the ten
                prior years of wanderings are recounted retrospectively by Odysseus himself to the
                Phaeacians in Books IX&ndash;XII.
              </p>
              <div className="hairline-rule" />
              <p>
                <strong className="text-ink-primary font-medium block">
                  The three great movements:
                </strong>
                The search of Telemachus (Books I&ndash;IV), the wanderings across the sea (Books
                V&ndash;XII), and the disguised homecoming and revenge in Ithaca (Books
                XIII&ndash;XXIV).
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SELECTED CHARACTER PREVIEWS (EDITORIAL DOSSIER)       */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-parchment-border max-w-5xl mx-auto">
        <SectionRubric roman="II" label="Dramatis personae" className="mb-4" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-primary font-normal">
              Figures of the epic drama
            </h2>
            <p className="font-serif text-sm text-ink-muted mt-1">
              The mortals and immortals whose desires, oaths, and stratagems steer the poem.
            </p>
          </div>
          <Link
            to="/characters"
            className="text-xs font-sans text-terracotta hover:text-ink-primary font-medium flex items-center gap-1 border-b border-terracotta/40 pb-0.5 self-start sm:self-auto"
          >
            <span>Complete character directory</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Editorial Character Dossier */}
        <div className="divide-y divide-parchment-border border-t border-b border-parchment-border">
          {SELECTED_CHARACTERS.map((char, index) => (
            <article key={char.name} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-xs text-antique-gold select-none">
                    0{index + 1}.
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-ink-primary">{char.name}</h3>
                  <span className="font-serif italic text-sm text-ink-muted greek-script">
                    {char.greek}
                  </span>
                </div>
                <p className="font-serif italic text-xs text-terracotta">
                  &ldquo;{char.epithet}&rdquo;
                </p>
                <div className="font-sans text-xs text-ink-muted pt-1">{char.role}</div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 space-y-3">
                <p className="font-serif text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {char.dossier}
                </p>
                <blockquote className="border-l-2 border-antique-gold/60 pl-3 py-1 font-serif italic text-xs text-ink-muted">
                  {char.famousQuote}{' '}
                  <cite className="not-italic text-ink-faint">&mdash; {char.quoteCitation}</cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. PREVIEW OF MYTHICAL ENCOUNTERS (TRAVEL JOURNAL LOG)   */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-parchment-border max-w-5xl mx-auto">
        <SectionRubric roman="III" label="Periplus & mythic geography" className="mb-4" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-primary font-normal">
              Chronicles of the mythical encounters
            </h2>
            <p className="font-serif text-sm text-ink-muted mt-1">
              Excerpts from Odysseus&rsquo;s voyage across uncharted Mediterranean borders and mythic
              realms.
            </p>
          </div>
          <Link
            to="/journey"
            className="text-xs font-sans text-terracotta hover:text-ink-primary font-medium flex items-center gap-1 border-b border-terracotta/40 pb-0.5 self-start sm:self-auto"
          >
            <span>View all 14 waypoints</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Travel Journal Log Layout */}
        <div className="space-y-8">
          {MYTHICAL_ENCOUNTERS_PREVIEW.map((item, idx) => (
            <div
              key={item.id}
              className="border border-parchment-border bg-parchment-surface p-6 sm:p-8 relative"
            >
              {/* Journal Entry Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-parchment-border/70 pb-3 mb-4 gap-2">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-sans text-xs font-semibold text-antique-gold select-none">
                    Log folio 0{idx + 1}
                  </span>
                  <span className="text-parchment-darkborder">&bull;</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink-primary">
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-serif italic text-ink-muted">
                  <span className="greek-script">{item.greek}</span>
                  <span>&bull;</span>
                  <span>{item.bookRef}</span>
                </div>
              </div>

              {/* Narrative Summary */}
              <p className="font-serif text-sm sm:text-base text-ink-secondary leading-relaxed mb-5">
                {item.summary}
              </p>

              {/* Antiquarian Journal Notes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-parchment-border/60 text-xs font-serif">
                <div className="space-y-1">
                  <span className="font-medium text-ink-primary block font-sans text-[11px]">
                    Classical geography:
                  </span>
                  <span className="text-ink-muted leading-relaxed">{item.location}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-medium text-terracotta block font-sans text-[11px]">
                    Homeric peril:
                  </span>
                  <span className="text-ink-secondary leading-relaxed">{item.homericPeril}</span>
                </div>
                <div className="space-y-1">
                  <span className="font-medium text-antique-gold block font-sans text-[11px]">
                    Fate of the company:
                  </span>
                  <span className="text-ink-secondary leading-relaxed">{item.fateNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. LITERARY THEMES SECTION                               */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto">
        <SectionRubric roman="IV" label="Hermeneutics & moral ethos" className="mb-4" />
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-primary font-normal">
            Thematic pillars of Homeric thought
          </h2>
          <p className="font-serif text-sm text-ink-muted mt-2">
            The fundamental philosophical, cultural, and spiritual tensions that give the epic its
            eternal resonance.
          </p>
        </div>

        {/* Thematic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {HOMERIC_THEMES.map((theme) => (
            <div
              key={theme.id}
              className="border-l-2 border-antique-gold/70 pl-6 pr-2 py-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline gap-2.5 mb-1.5">
                  <h3 className="font-serif text-2xl font-medium text-ink-primary">
                    {theme.transliteration}
                  </h3>
                  <span className="font-serif italic text-base text-terracotta greek-script">
                    ({theme.greekTerm})
                  </span>
                </div>
                <div className="font-sans text-xs text-ink-muted mb-3 font-medium">
                  {theme.englishDefinition}
                </div>
                <p className="font-serif text-sm sm:text-base text-ink-secondary leading-relaxed mb-4">
                  {theme.academicOverview}
                </p>
              </div>
              <div className="border-t border-parchment-border/60 pt-2 text-xs font-serif text-ink-muted">
                <span className="font-sans text-[11px] font-medium text-ink-secondary">
                  Pivotal passages:{' '}
                </span>
                {theme.keyPassages.join(', ')}
              </div>
            </div>
          ))}
        </div>

        {/* Seminar Exploration Callout */}
        <div className="mt-14 p-6 sm:p-8 border border-parchment-border bg-parchment-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-serif text-xl font-medium text-ink-primary">
              Academic seminar discussions & essay inquiries
            </h4>
            <p className="font-serif text-sm text-ink-secondary">
              Examine the Homeric Question, oral formulaic poetry, and critical perspectives on
              Penelope&rsquo;s autonomy and divine justice.
            </p>
          </div>
          <Link
            to="/insights"
            className="px-5 py-2.5 border border-terracotta text-terracotta hover:bg-parchment-aged font-sans text-sm font-medium transition-colors shrink-0"
          >
            Read literary insights
          </Link>
        </div>
      </section>

      <FleuronDivider />
    </PageContainer>
  );
};
