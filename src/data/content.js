// ============================================================================
// DERMOLYXA™ — SINGLE SOURCE OF TRUTH
// Every word, label, image and link on the site lives here.
// Components never hardcode copy — they map over this file.
// ============================================================================

export const brand = {
  name: 'DERMOLYXA',
  trademark: '™',
  tagline: 'Skin • Hair • Aesthetic',
  subTagline: 'Advanced Regenerative & Aesthetic Science',
  established: 'Est. 2014',
  city: 'Dubai • London • Mumbai',
  imageryNote: 'Illustrative imagery',
}

export const nav = {
  links: [
    { id: 'hero', label: 'Home' },
    { id: 'divisions', label: 'Divisions' },
    { id: 'clinic', label: 'Clinic' },
    { id: 'process', label: 'Process' },
    { id: 'skin', label: 'Skin' },
    { id: 'results', label: 'Results' },
    { id: 'institute', label: 'Institute' },
    { id: 'products', label: 'Products' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ],
  cta: { label: 'Book Consultation', href: '#contact' },
}

export const loading = {
  wordmark: 'DERMOLYXA',
  sub: 'Advanced Regenerative & Aesthetic Science',
  kicker: 'Calibrating the science of beauty',
}

export const hero = {
  eyebrow: 'Advanced Regenerative & Aesthetic Science',
  // Split so we can shimmer individual words ("Science", "Excellence")
  headline: [
    { text: 'Where', shimmer: false },
    { text: 'Science', shimmer: true },
    { text: 'Meets', shimmer: false },
    { text: 'Aesthetic', shimmer: false },
    { text: 'Excellence.', shimmer: true },
  ],
  sub: 'A unified house of regenerative medicine, precision trichology and aesthetic artistry — engineered for skin, hair and the science of confidence.',
  ctas: [
    { label: 'Explore Clinic', target: 'clinic', variant: 'solid' },
    { label: 'Explore Institute', target: 'institute', variant: 'ghost' },
    { label: 'Explore Products', target: 'products', variant: 'ghost' },
  ],
  corePrompt: 'Touch the core to activate',
  corePromptActive: 'Core activated',
  whatsapp: {
    label: 'Chat with a specialist',
    number: '971500000000',
    message: 'Hello DERMOLYXA™, I would like to book a consultation.',
  },
  scrollHint: 'Scroll to discover',
  // The three interactive core modes cycled by clicking the 3D core
  modes: [
    {
      id: 'skin',
      code: '01',
      name: 'Skin',
      title: 'Dermal Regeneration',
      color: '#F5D77A',
      accent: '#D4AF37',
      geometry: 'icosahedron',
      caption:
        'Fractional energy, bio-identical growth factors and medical-grade peels resurface and rebuild from the basal layer upward.',
      metrics: [
        { value: '92%', label: 'Texture improvement' },
        { value: '3–5', label: 'Sessions median' },
        { value: '0', label: 'Downtime protocols' },
      ],
    },
    {
      id: 'hair',
      code: '02',
      name: 'Hair',
      title: 'Follicular Architecture',
      color: '#F4EFE6',
      accent: '#D4AF37',
      geometry: 'torusKnot',
      caption:
        'Robotic DHI implantation, exosome priming and follicle-level analytics restore density with a natural, undetectable hairline.',
      metrics: [
        { value: '4,200', label: 'Avg. grafts / session' },
        { value: '96%', label: 'Graft survival' },
        { value: 'Natural', label: 'Hairline design' },
      ],
    },
    {
      id: 'science',
      code: '03',
      name: 'Science',
      title: 'Regenerative Biology',
      color: '#9A7B1E',
      accent: '#F5D77A',
      geometry: 'octahedron',
      caption:
        'Our Lab-in-the-Clinic model sequences PRP, exosomes and peptide scaffolds — turning biology itself into the treatment.',
      metrics: [
        { value: '18', label: 'Active protocols' },
        { value: 'ISO', label: 'Class-clean lab' },
        { value: 'PhD', label: 'Science board' },
      ],
    },
  ],
}

export const divisions = {
  eyebrow: 'The House of Dermolyxa',
  title: 'A connected ecosystem for education, care and future solutions.',
  intro:
    'DERMOLYXA™ operates as one integrated regenerative house — an institute, a clinic and a product laboratory engineered to feed one another.',
  marquee: [
    'Skin Science',
    'Hair Science',
    'Aesthetic Science',
    'Education',
    'Clinical Care',
  ],
  counters: [
    { value: 12, suffix: '', label: 'Proposed Programs' },
    { value: 3, suffix: '', label: 'Divisions' },
    { value: 1, suffix: '', label: 'Unified Identity' },
  ],
  items: [
    {
      id: 'institute',
      index: '01',
      name: 'DERMOLYXA INSTITUTE™',
      subtitle: 'Education & Research',
      icon: 'institute',
      description:
        'Fellowship training, cadaveric workshops and a research arm translating regenerative biology into reproducible clinical outcomes.',
      points: ['Fellowship programmes', 'Hands-on workshops', 'Clinical research'],
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      href: '#institute',
    },
    {
      id: 'clinic',
      index: '02',
      name: 'DERMOLYXA CLINIC™',
      subtitle: 'Precision Aesthetics',
      icon: 'clinic',
      description:
        'Consultant-led dermatology, trichology and aesthetic surgery delivered in a theatre-grade facility with regenerative protocols.',
      points: ['Dermatology & trichology', 'Hair transplant surgery', 'Regenerative aesthetics'],
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      href: '#clinic',
    },
    {
      id: 'products',
      index: '03',
      name: 'DERMOLYXA PRODUCTS™',
      subtitle: 'Regenerative Formulations',
      icon: 'products',
      badge: 'Coming Soon',
      description:
        'A clinical skincare line built on actives we use in-clinic — growth factor serums, peptides and barrier-repair protocols.',
      points: ['Growth factor serums', 'Peptide complexes', 'Barrier repair'],
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
      href: '#products',
    },
  ],
}

export const clinicServices = {
  eyebrow: 'The Clinic',
  title: 'Consultant-Designed Procedures',
  intro:
    'Every protocol is prescribed, not sold. Diagnostics first, a bespoke plan second, measurable outcomes always.',
  services: [
    {
      id: 'acne',
      title: 'Medical Acne & Scarring',
      description:
        'Fractional CO₂, subcision and microneedling RF to remodel acne scars and reset sebaceous activity.',
      duration: '45–75 min',
      sessions: '3–6 sessions',
    },
    {
      id: 'pigmentation',
      title: 'Pigmentation & Melasma',
      description:
        'Layered phototherapy with tranexamic and cysteamine protocols, calibrated to Fitzpatrick type.',
      duration: '30–60 min',
      sessions: '4–8 sessions',
    },
    {
      id: 'antiaging',
      title: 'Anti-Ageing & Bio-Repair',
      description:
        'Polynucleotides, exosomes and HIFU to restore dermal density and structural collagen.',
      duration: '45–90 min',
      sessions: '2–4 sessions',
    },
    {
      id: 'laser',
      title: 'Laser & Energy',
      description:
        'Nd:YAG, fractional and vascular lasers for tone, texture, vessels and hair reduction.',
      duration: '20–60 min',
      sessions: 'Varies',
    },
    {
      id: 'injectables',
      title: 'Injectables & Contouring',
      description:
        'Micro-droplet botulinum, hyaluronic artistry and collagen biostimulators for natural definition.',
      duration: '30–60 min',
      sessions: 'Maintenance',
    },
    {
      id: 'hair',
      title: 'Trichology & Restoration',
      description:
        'Follicle mapping, PRP/exosome therapy and surgical DHI restoration under one roof.',
      duration: '60–120 min',
      sessions: 'Protocol-led',
    },
  ],
  note: 'Illustrative imagery — outcomes vary by individual and are assessed in consultation.',
  image:
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1400&q=80',
}

export const hairTransplant = {
  eyebrow: 'Hair Restoration',
  title: 'The Dermolyxa Hairline Method',
  intro:
    'A surgical-grade journey from analytics to artistry — engineered so the result is undetectable, permanent and biologically primed.',
  disclaimer: 'Illustrative imagery; results vary. Not medical advice.',

  // 1 — 3D interactive scalp model & hotspots
  scalp: {
    kicker: 'Interactive Anatomy',
    heading: 'Explore the Scalp',
    intro:
      'Rotate the model and select a glowing marker to understand how each zone is planned before a single graft is placed.',
    hint: 'Drag to rotate · Select a marker',
    hotspots: [
      {
        id: 'donor',
        name: 'Donor Area',
        code: 'A',
        position: [0.62, 0.06, -0.62],
        title: 'Donor Area',
        description:
          'The occipital and temporal safe zone — graded for density, miniaturisation and follicle calibre to define total graft yield.',
        metrics: [
          { value: '70–100', label: 'FU / cm²' },
          { value: 'Safe', label: 'Zone grading' },
        ],
      },
      {
        id: 'hairline',
        name: 'Hairline Design',
        code: 'B',
        position: [0, 0.72, 0.66],
        title: 'Hairline Design',
        description:
          'A bespoke frontier drawn to facial proportions — micro-irregularity, recessed temples and a soft single-hair transition line.',
        metrics: [
          { value: 'Single', label: 'Hair transition' },
          { value: 'Natural', label: 'Irregularity' },
        ],
      },
      {
        id: 'recipient',
        name: 'Recipient Area',
        code: 'C',
        position: [0.16, 0.52, 0.4],
        title: 'Recipient Area',
        description:
          'The planned implantation field — angle, depth and direction mapped so growth follows the native whorl and density gradient.',
        metrics: [
          { value: '35°', label: 'Implant angle' },
          { value: '1 by 1', label: 'DHI placement' },
        ],
      },
    ],
  },

  // 2 — horizontal scroll-driven timeline
  timeline: {
    kicker: 'The Journey',
    heading: 'Seven Stages to a New Hairline',
    intro: 'Scroll to move through the full protocol, from first consultation to matured result.',
    steps: [
      {
        id: 'consultation',
        icon: 'consult',
        step: '01',
        title: 'Consultation',
        duration: 'Day 0',
        description:
          'A consultant-led assessment of goals, medical history and expectations — with honest, photographic documentation.',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80',
      },
      {
        id: 'analysis',
        icon: 'analysis',
        step: '02',
        title: 'Scalp Analysis',
        duration: 'Day 0',
        description:
          'Trichoscopy and digital density mapping quantify donor capacity, miniaturisation and the recipient field.',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1100&q=80',
      },
      {
        id: 'design',
        icon: 'design',
        step: '03',
        title: 'Hairline Design',
        duration: 'Day 0',
        description:
          'The new hairline is drawn and agreed on your face — forehead proportions, temples and density grading finalised.',
        image:
          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1100&q=80',
      },
      {
        id: 'extraction',
        icon: 'extraction',
        step: '04',
        title: 'Extraction — FUE / DHI',
        duration: 'Hours 1–4',
        description:
          'Individual follicular units are harvested under local anaesthesia using robotic-assisted FUE or direct DHI punches.',
        image:
          'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1100&q=80',
      },
      {
        id: 'implantation',
        icon: 'implant',
        step: '05',
        title: 'Implantation',
        duration: 'Hours 4–8',
        description:
          'Choi-implanter DHI places each graft at the precise angle, depth and direction for single-session density.',
        image:
          'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1100&q=80',
      },
      {
        id: 'recovery',
        icon: 'recovery',
        step: '06',
        title: 'Recovery',
        duration: 'Week 1–2',
        description:
          'Micro-crusts settle by day ten; exosome priming, LLLT and gentle aftercare protect the newly placed grafts.',
        image:
          'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1100&q=80',
      },
      {
        id: 'growth',
        icon: 'growth',
        step: '07',
        title: 'Growth Results',
        duration: '3 / 6 / 12 months',
        description:
          'Shedding gives way to new growth at three months, visible density by six, and the matured result at twelve.',
        image:
          'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1100&q=80',
      },
    ],
  },

  // 3 — hair regeneration flip cards
  regeneration: {
    kicker: 'Hair Regeneration',
    heading: 'Non-Surgical Regenerative Therapy',
    intro:
      'Biological therapies that thicken existing follicles and protect the surgical result — alone or alongside transplant.',
    cards: [
      {
        id: 'prp',
        icon: 'prp',
        title: 'PRP Therapy',
        subtitle: 'Platelet-Rich Plasma',
        front:
          'Concentrated growth factors from your own blood, delivered into the scalp to awaken dormant follicles.',
        back: 'Monthly × 3, then quarterly maintenance. No downtime; optimal for early thinning and post-transplant priming.',
        meta: '45 min · Minimal downtime',
      },
      {
        id: 'mesotherapy',
        icon: 'meso',
        title: 'Mesotherapy',
        subtitle: 'Vital Cocktail',
        front:
          'Micro-injections of vitamins, minerals and amino acids nourish the follicle micro-environment.',
        back: 'A course of 4–6 sessions strengthens the follicle and improves scalp condition before surgery.',
        meta: '30 min · No downtime',
      },
      {
        id: 'gf',
        icon: 'gf',
        title: 'Growth Factor Therapy',
        subtitle: 'Recombinant & Exosome',
        front:
          'Bio-identical growth factor and exosome concentrates signal follicular regeneration at cell level.',
        back: 'Administered microneedling-assisted. Ideal for diffuse thinning and enhancing graft survival.',
        meta: '60 min · Minimal downtime',
      },
    ],
  },

  // 4 — before / after slider
  beforeAfter: {
    kicker: 'Documented Results',
    heading: 'Before & After',
    intro: 'Drag the gold handle to reveal the transformation.',
    beforeLabel: 'Before',
    afterLabel: 'After',
    before:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1300&q=80',
    after:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1300&q=80',
    case: 'Frontal density restoration — 3,800-graft DHI',
  },

  // 5 — 3D follicle growth timeline
  growth: {
    kicker: 'Growth Timeline',
    heading: 'From Root to Result',
    intro: 'The follicular lifecycle after implantation, animated across twelve months.',
    phases: [
      {
        id: 'root',
        month: 'Month 0',
        title: 'Engraftment',
        description: 'Placed grafts anchor into the recipient site and revascularise.',
        progress: 0.12,
      },
      {
        id: 'shock',
        month: 'Month 1',
        title: 'Shock Shedding',
        description: 'Transplanted shafts shed as the follicle resets into anagen.',
        progress: 0.24,
      },
      {
        id: 'sprout',
        month: 'Month 3',
        title: 'First Growth',
        description: 'New fine hair emerges from the root along the designed line.',
        progress: 0.45,
      },
      {
        id: 'thicken',
        month: 'Month 6',
        title: 'Thickening',
        description: 'Density and calibre increase; the hairline reads as natural.',
        progress: 0.7,
      },
      {
        id: 'mature',
        month: 'Month 12',
        title: 'Matured Result',
        description: 'Full maturation — the permanent, undetectable hairline.',
        progress: 1,
      },
    ],
  },

  stats: [
    { value: '4,200', label: 'Avg. grafts' },
    { value: '96%', label: 'Graft survival' },
    { value: '1 day', label: 'Single session' },
    { value: '12 mo', label: 'Growth tracking' },
  ],
  cta: { label: 'Request a hair assessment', target: 'contact' },
}

export const skinCare = {
  eyebrow: 'Skin • Aesthetic',
  title: 'Regenerative Skin & Aesthetic Care',
  intro:
    'A layered approach that treats the barrier, the dermis and the biology — the same actives we deploy in clinic, prescribed with precision.',
  imageryNote: 'Illustrative imagery',

  services: {
    kicker: 'Treatments',
    heading: 'A Bento of Clinical Aesthetics',
    intro:
      'Select a discipline to see the protocol detail. Every plan begins with diagnostics, not a menu.',
    modalDetailsLabel: 'What it involves',
    modalCta: 'Enquire about this',
    modalCtaTarget: 'contact',
    items: [
      {
        id: 'acne',
        title: 'Acne & Scars',
        icon: 'acne',
        tag: 'Resurfacing',
        featured: true,
        span: 'lg:col-span-2 lg:row-span-2',
        description:
          'Remodel depressed and tethered acne scars while resetting sebaceous activity for clearer skin.',
        details: [
          'Fractional CO₂ and microneedling RF',
          'Subcision for tethered scarring',
          'Sebum-regulating maintenance plan',
        ],
        duration: '45–75 min',
        sessions: '3–6 sessions',
        image:
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'pigmentation',
        title: 'Pigmentation & Melasma',
        icon: 'pigment',
        tag: 'Corrective',
        span: 'lg:col-span-2',
        description:
          'Layered phototherapy with tranexamic and cysteamine protocols, calibrated to Fitzpatrick type.',
        details: [
          'Multi-spectral pigment mapping',
          'Low-fluence laser toning',
          'Topical cysteamine & tranexamic course',
        ],
        duration: '30–60 min',
        sessions: '4–8 sessions',
        image:
          'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'antiaging',
        title: 'Anti-Ageing & Bio-Repair',
        icon: 'antiage',
        tag: 'Regenerative',
        span: 'lg:col-span-2',
        description:
          'Polynucleotides, exosomes and HIFU to restore dermal density and structural collagen.',
        details: [
          'Polynucleotide bio-stimulation',
          'Exosome & growth-factor infusion',
          'HIFU and collagen biostimulators',
        ],
        duration: '45–90 min',
        sessions: '2–4 sessions',
        image:
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'hydrafacial',
        title: 'HydraFacial',
        icon: 'hydra',
        tag: 'Glow',
        span: 'lg:col-span-1',
        description:
          'Vortex cleansing, painless extraction and antioxidant infusion for immediate luminosity.',
        details: ['Deep cleanse & extract', 'Peptide antioxidant infusion', 'Zero downtime'],
        duration: '30–45 min',
        sessions: 'Monthly',
        image:
          'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'laser',
        title: 'Laser & Energy',
        icon: 'laser',
        tag: 'Precision',
        span: 'lg:col-span-1',
        description:
          'Nd:YAG, fractional and vascular lasers for tone, texture, vessels and hair reduction.',
        details: ['Vascular & pigment lasers', 'Fractional resurfacing', 'Hair reduction'],
        duration: '20–60 min',
        sessions: 'Varies',
        image:
          'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'peels',
        title: 'Chemical Peels',
        icon: 'peel',
        tag: 'Renewal',
        span: 'lg:col-span-1',
        description:
          'Medical-grade peels from superficial glow to deep resurfacing, matched to skin tolerance.',
        details: ['AHA / BHA / TCA layering', 'Depth-titrated protocols', 'Post-peel barrier care'],
        duration: '20–45 min',
        sessions: '3–5 sessions',
        image:
          'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'regenerative',
        title: 'Regenerative Aesthetics',
        icon: 'regen',
        tag: 'Biology',
        span: 'lg:col-span-1',
        description:
          'PRP, exosome and polynucleotide science that turns the skin’s own biology into the treatment.',
        details: ['PRP & exosome therapy', 'Polynucleotide scaffolding', 'Lab-in-the-clinic protocols'],
        duration: '45–60 min',
        sessions: 'Protocol-led',
        image:
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },

  layers: {
    kicker: 'Anatomy',
    heading: 'The Skin, Layer by Layer',
    intro:
      'Every treatment targets a depth. Explore the cross-section to see what acts where — and why depth defines outcome.',
    hint: 'Hover a layer',
    targetedLabel: 'Treatments targeting this layer',
    items: [
      {
        id: 'epidermis',
        name: 'Epidermis',
        depth: '0.05–0.1 mm',
        color: '#F5D77A',
        description:
          'The surface barrier — tone, texture and pigment live here. Resurfacing and infusion act at this depth.',
        treatments: ['HydraFacial', 'Chemical Peels', 'Laser Toning', 'Microneedling (surface)'],
      },
      {
        id: 'dermis',
        name: 'Dermis',
        depth: '0.1–2 mm',
        color: '#D4AF37',
        description:
          'Collagen, elastin and the vasculature — the structural engine of firmness and repair.',
        treatments: ['Microneedling RF', 'Polynucleotides', 'Exosomes', 'Fractional CO₂'],
      },
      {
        id: 'hypodermis',
        name: 'Hypodermis',
        depth: '2–4 mm',
        color: '#9A7B1E',
        description:
          'The subcutaneous layer — volume, contour and deep scaffolding beneath the skin.',
        treatments: ['HIFU', 'Collagen Biostimulators', 'Contour & Volume', 'Deep Lifting'],
      },
    ],
  },

  quiz: {
    kicker: 'Concern Finder',
    heading: 'Find Your Treatment',
    intro: 'Three questions. One suggested protocol. No obligation — just clarity.',
    restart: 'Start over',
    resultLabel: 'Suggested protocol',
    enquireLabel: 'Enquire about this',
    enquireTarget: 'contact',
    questions: [
      {
        id: 'q1',
        question: 'What is your primary concern?',
        options: [
          { label: 'Acne & scarring', treat: 'acne' },
          { label: 'Pigmentation / melasma', treat: 'pigmentation' },
          { label: 'Fine lines & firmness', treat: 'antiaging' },
          { label: 'Dullness & dehydration', treat: 'hydrafacial' },
        ],
      },
      {
        id: 'q2',
        question: 'How would you describe your skin?',
        options: [
          { label: 'Oily & congested', treat: 'acne' },
          { label: 'Uneven in tone', treat: 'pigmentation' },
          { label: 'Losing firmness', treat: 'antiaging' },
          { label: 'Sensitive & reactive', treat: 'regenerative' },
        ],
      },
      {
        id: 'q3',
        question: 'What downtime can you accept?',
        options: [
          { label: 'None at all', treat: 'hydrafacial' },
          { label: 'A little redness', treat: 'peels' },
          { label: 'A few days to heal', treat: 'laser' },
          { label: 'Whatever it takes', treat: 'regenerative' },
        ],
      },
    ],
    results: {
      acne: {
        title: 'Acne & Scar Revision',
        icon: 'acne',
        description:
          'A resurfacing protocol to remodel scarring and reduce active breakouts.',
        protocol: 'Fractional CO₂ + subcision + sebum control',
      },
      pigmentation: {
        title: 'Pigment Correction',
        icon: 'pigment',
        description:
          'Layered light and topical therapy to even tone and stabilise melanin.',
        protocol: 'Low-fluence laser + cysteamine protocol',
      },
      antiaging: {
        title: 'Anti-Ageing & Firming',
        icon: 'antiage',
        description:
          'Bio-repair to restore dermal density, firmness and structural support.',
        protocol: 'Polynucleotides + HIFU + exosomes',
      },
      hydrafacial: {
        title: 'Glow & Hydration',
        icon: 'hydra',
        description:
          'A zero-downtime treatment for immediate luminosity and hydration.',
        protocol: 'HydraFacial + antioxidant infusion',
      },
      laser: {
        title: 'Laser & Energy Plan',
        icon: 'laser',
        description:
          'Precision energy to address tone, texture and vascularity.',
        protocol: 'Fractional + vascular laser series',
      },
      peels: {
        title: 'Peel Renewal',
        icon: 'peel',
        description:
          'Titrated chemical resurfacing matched to your tolerance.',
        protocol: 'Medical peel series + barrier repair',
      },
      regenerative: {
        title: 'Regenerative Aesthetics',
        icon: 'regen',
        description:
          'Biological therapy that uses your own biology to repair and rebuild.',
        protocol: 'PRP / exosome + polynucleotide protocol',
      },
    },
  },

  pillars: [
    {
      id: 'diagnose',
      title: 'Diagnose',
      description:
        'Multi-spectral skin analysis quantifies hydration, pigment, vascularity and elasticity before anything is prescribed.',
    },
    {
      id: 'repair',
      title: 'Repair',
      description:
        'Barrier-first correction using ceramide, prebiotic and growth-factor actives to calm reactive skin.',
    },
    {
      id: 'regenerate',
      title: 'Regenerate',
      description:
        'Clinical retinoids, peptides and exosome serums to rebuild collagen and dermal density over time.',
    },
    {
      id: 'protect',
      title: 'Protect',
      description:
        'Broad-spectrum mineral photoprotection and antioxidant layering to preserve every gain we make.',
    },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
  ],
}

export const beforeAfter = {
  eyebrow: 'Results',
  title: 'Measurable Transformations',
  intro:
    'Drag the handle to reveal documented outcomes across skin, hair and regenerative protocols.',
  comparator: {
    beforeLabel: 'Before',
    afterLabel: 'After',
    before:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
  },
  cases: [
    { id: 'case-1', title: 'Acne Scarring', area: 'Cheeks', detail: '6 × fractional CO₂', tone: 'Regenerative' },
    { id: 'case-2', title: 'Androgenetic Hair Loss', area: 'Frontal', detail: '3,800-graft DHI', tone: 'Restorative' },
    { id: 'case-3', title: 'Melasma', area: 'Malar', detail: '8 × layered phototherapy', tone: 'Corrective' },
  ],
  disclaimer:
    'Representative illustrative imagery. Individual results vary and are discussed transparently during consultation.',
}

export const institute = {
  eyebrow: 'The Institute',
  title: 'Where Practitioners Become Masters',
  intro:
    'DERMOLYXA™ Institute trains dermatologists and surgeons in regenerative and aesthetic technique through structured, hands-on education — from single-technique certificates to full fellowships.',
  tabsLabel: 'Programmes',
  tabBlurbLabel: 'Overview',
  courseCountLabel: 'Courses',
  enquireLabel: 'Enquire',
  enquireTarget: 'contact',
  // Five programme families, each surfaced as a tab with its own animated course cards
  tabs: [
    {
      id: 'certificate',
      label: 'Certificate Courses',
      blurb:
        'Focused, accredited short courses that certify a single technique or protocol for immediate clinical use.',
      courses: [
        {
          id: 'cert-prp',
          title: 'Certificate in PRP & Regenerative Basics',
          duration: '2 days',
          level: 'Certificate',
          description:
            'The foundation of regenerative practice — patient selection, safe preparation and reproducible delivery.',
          outcomes: ['PRP isolation & activation', 'Scalp & facial indication mapping', 'Complication management'],
        },
        {
          id: 'cert-peels',
          title: 'Certificate in Medical Peels',
          duration: '1 day',
          level: 'Certificate',
          description:
            'Depth-titrated chemical resurfacing from superficial glow to medium-depth renewal, matched to Fitzpatrick type.',
          outcomes: ['AHA / BHA / TCA layering', 'Patient priming & aftercare', 'Adverse event protocols'],
        },
        {
          id: 'cert-led',
          title: 'Certificate in Energy & Light Devices',
          duration: '2 days',
          level: 'Certificate',
          description:
            'Safe parameter selection across laser and light platforms for tone, texture and hair reduction.',
          outcomes: ['Device physics & safety', 'Fluence selection by skin type', 'Treatment planning'],
        },
      ],
    },
    {
      id: 'diploma',
      label: 'Diploma Programs',
      blurb:
        'Multi-module diplomas that build a complete, independently deliverable clinical service over several weeks.',
      courses: [
        {
          id: 'dip-aesthetic',
          title: 'Diploma in Aesthetic Medicine',
          duration: '6 months',
          level: 'Diploma',
          description:
            'A structured pathway across injectables, energy devices and regenerative aesthetics with supervised casework.',
          outcomes: ['Consultation & consent', 'Injectables foundation', 'Portfolio of treated cases'],
        },
        {
          id: 'dip-trichology',
          title: 'Diploma in Clinical Trichology',
          duration: '4 months',
          level: 'Diploma',
          description:
            'Diagnose and manage hair and scalp disorders medically, with an introduction to restoration planning.',
          outcomes: ['Trichoscopy interpretation', 'Medical management plans', 'Restoration referral criteria'],
        },
        {
          id: 'dip-cosmetic',
          title: 'Diploma in Cosmetic Dermatology',
          duration: '5 months',
          level: 'Diploma',
          description:
            'A specialty diploma covering acne, pigment, barrier science and anti-ageing across all skin tones.',
          outcomes: ['Multi-spectral analysis', 'Layered prescription protocols', 'Outcome tracking'],
        },
      ],
    },
    {
      id: 'advanced',
      label: 'Advanced Programs',
      blurb:
        'For experienced clinicians — advanced technique, complication mastery and combination protocol design.',
      courses: [
        {
          id: 'adv-inject',
          title: 'Advanced Injectables & Contouring',
          duration: '3 days',
          level: 'Advanced',
          description:
            'Micro-droplet artistry, full-face assessment and reversal technique for natural, structural results.',
          outcomes: ['Full-face assessment', 'Micro-droplet technique', 'Hyalase & reversal protocols'],
        },
        {
          id: 'adv-dhi',
          title: 'Advanced DHI & Hairline Design',
          duration: '2 days',
          level: 'Hands-on',
          description:
            'Live-patient harvesting and implantation with bespoke hairline design and 1:2 faculty ratio.',
          outcomes: ['Choi-implanter DHI', 'Hairline proportional design', 'Dense-packing strategy'],
        },
        {
          id: 'adv-regen',
          title: 'Advanced Regenerative Sequencing',
          duration: '3 days',
          level: 'Advanced',
          description:
            'Exosome and polynucleotide sequencing — dosimetry, safety and reproducible outcome tracking.',
          outcomes: ['Growth factor science', 'Dosimetry & storage', 'Combination stacking'],
        },
      ],
    },
    {
      id: 'fellowship',
      label: 'Fellowship',
      blurb:
        'A full-year, logbook-certified fellowship that embeds you in clinic, theatre and research.',
      courses: [
        {
          id: 'fell-clinical',
          title: 'Aesthetic & Regenerative Fellowship',
          duration: '12 months',
          level: 'Accredited',
          description:
            'A full-year clinical fellowship across regenerative skin, injectables and surgical trichology.',
          outcomes: ['Logbook certification', 'Supervised theatre time', 'Research dissertation'],
        },
        {
          id: 'fell-surgical',
          title: 'Surgical Trichology Fellowship',
          duration: '9 months',
          level: 'Accredited',
          description:
            'Focused fellowship in hair restoration surgery with progressive patient responsibility.',
          outcomes: ['500+ graft logbook', 'Hairline design mastery', 'Long-term follow-up audit'],
        },
      ],
    },
    {
      id: 'workshops',
      label: 'Workshops & Masterclasses',
      blurb:
        'Intensive, single-day sessions on model and cadaveric heads — designed for focused, hands-on repetition.',
      courses: [
        {
          id: 'work-cadaver',
          title: 'Cadaveric Filler Masterclass',
          duration: '1 day',
          level: 'Masterclass',
          description:
            'Anatomy-led filler training on cadaveric heads with sonographic danger-zone mapping.',
          outcomes: ['Vascular danger zones', 'Cannula vs needle', 'Emergency drills'],
        },
        {
          id: 'work-hands',
          title: 'Live Model Hands-On Workshop',
          duration: '1 day',
          level: 'Hands-on',
          description:
            'Treat real patients under direct supervision across toxin, filler and skin-booster protocols.',
          outcomes: ['Guided live treatment', '1:2 faculty ratio', 'Feedback & debrief'],
        },
        {
          id: 'work-business',
          title: 'Clinic Business & Ethics Masterclass',
          duration: '1 day',
          level: 'Masterclass',
          description:
            'Build a compliant, profitable practice — pricing, governance, consent and marketing ethics.',
          outcomes: ['Regulatory compliance', 'Pricing & packaging', 'Consent & record-keeping'],
        },
      ],
    },
  ],
  faculty: {
    kicker: 'Faculty',
    heading: 'Taught by Practising Specialists',
    intro:
      'Every module is delivered by clinicians who still treat patients — technique is taught from current practice, not theory alone.',
    prevLabel: 'Previous faculty',
    nextLabel: 'Next faculty',
    members: [
      {
        id: 'f1',
        name: 'Dr. Aarav Mehta',
        role: 'Course Director',
        credentials: 'Regenerative Dermatology',
        portrait: 'https://i.pravatar.cc/400?img=12',
      },
      {
        id: 'f2',
        name: 'Dr. Sana Kapoor',
        role: 'Lead Faculty',
        credentials: 'Aesthetic Injectables',
        portrait: 'https://i.pravatar.cc/400?img=45',
      },
      {
        id: 'f3',
        name: 'Dr. Rehan Ali',
        role: 'Surgical Lead',
        credentials: 'Trichology & DHI',
        portrait: 'https://i.pravatar.cc/400?img=33',
      },
      {
        id: 'f4',
        name: 'Dr. Nina Fernandes',
        role: 'Faculty',
        credentials: 'Regenerative Biology',
        portrait: 'https://i.pravatar.cc/400?img=47',
      },
      {
        id: 'f5',
        name: 'Dr. Vikram Sethi',
        role: 'Faculty',
        credentials: 'Laser & Energy Devices',
        portrait: 'https://i.pravatar.cc/400?img=15',
      },
      {
        id: 'f6',
        name: 'Dr. Leila Haddad',
        role: 'Programme Director',
        credentials: 'Fellowship & Research',
        portrait: 'https://i.pravatar.cc/400?img=32',
      },
    ],
    note: 'Illustrative faculty portraits.',
  },
  points: [
    { value: '2,400+', label: 'Practitioners trained' },
    { value: '34', label: 'Countries represented' },
    { value: '1:2', label: 'Faculty ratio' },
    { value: 'CME', label: 'Accredited hours' },
  ],
  cta: { label: 'Apply to the Institute', target: 'contact' },
  notices: [
    'Training does not by itself confer a medical licence or authorization to practise any regulated healthcare profession.',
    'Approval / affiliation subject to applicable regulatory requirements.',
  ],
  image:
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80',
}

export const products = {
  eyebrow: 'The Products',
  title: 'The Dermolyxa Laboratory Line',
  intro:
    'Clinical actives formulated for daily use between treatments — growth factors, peptides and barrier science in uncomplicated routines.',
  badge: 'Coming Soon',
  teaser: {
    heading: 'The Gold Serum Is Coming',
    sub: 'Our debut release — a recombinant growth-factor concentrate, bottled in the signature gold dropper.',
    body:
      'Formulated with the same actives we deploy in clinic, the first DERMOLYXA™ serum is in final stability testing ahead of launch.',
    serum: {
      name: 'GF · Growth Factor Serum',
      volume: '30 ml',
      note: 'Recombinant + peptide concentrate',
    },
    highlights: [
      {
        id: 'h1',
        title: 'Recombinant Growth Factors',
        description: 'EGF + FGF concentrate to support dermal repair and post-procedure recovery.',
      },
      {
        id: 'h2',
        title: 'Peptide Signal Complex',
        description: 'Matrix peptides that signal collagen synthesis and firm the structural dermis.',
      },
      {
        id: 'h3',
        title: 'Barrier-Safe Base',
        description: 'Fragrance-free, ceramide-supported vehicle for reactive and post-treatment skin.',
      },
    ],
    countdownLabel: 'Estimated launch in',
    countdownTarget: '2026-12-31T00:00:00',
    countdownUnits: ['Days', 'Hours', 'Minutes', 'Seconds'],
    countdownPassed: 'Launching imminently',
  },
  waitlist: {
    kicker: 'Join the waitlist',
    heading: 'Be first to the first drop',
    intro: 'Leave your email and we will write the moment the laboratory line opens.',
    placeholder: 'you@email.com',
    submit: 'Notify me',
    success: 'You’re on the list — we’ll write the moment the laboratory line opens.',
    invalid: 'Please enter a valid email address.',
    note: 'No spam. One message when the line launches.',
  },
  note: 'Cosmetic formulations. Not intended to diagnose, treat or cure disease.',
}

export const testimonials = {
  eyebrow: 'Voices',
  title: 'Trusted by Patients, Practitioners & Peers',
  autoMs: 5200,
  illustrative: 'Illustrative testimonials — representative of typical experiences.',
  items: [
    {
      id: 't1',
      quote:
        'The hairline is genuinely undetectable. Twelve months on and I still catch myself forgetting I ever had a transplant.',
      name: 'Adam R.',
      role: 'DHI transplant — 4,100 grafts',
      rating: 5,
    },
    {
      id: 't2',
      quote:
        'They treated the biology, not just the surface. My melasma has been stable for the first time in six years.',
      name: 'Layla M.',
      role: 'Pigmentation protocol',
      rating: 5,
    },
    {
      id: 't3',
      quote:
        'As a clinician, the Institute masterclass rewired how I plan regenerative cases. Faculty were exceptional.',
      name: 'Dr. Priya N.',
      role: 'Institute Fellow',
      rating: 5,
    },
    {
      id: 't4',
      quote:
        'Consultant-led from start to finish, with honest expectations. That honesty is why I recommend them.',
      name: 'Omar K.',
      role: 'Facial aesthetics',
      rating: 5,
    },
  ],
}

export const faq = {
  eyebrow: 'Questions',
  title: 'Frequently Asked',
  items: [
    {
      q: 'Is DERMOLYXA™ a clinic, an institute, or a product house?',
      a: 'All three, deliberately. The clinic treats patients, the institute trains practitioners, and the product line extends in-clinic actives into daily home care — each informs the others.',
    },
    {
      q: 'How is a treatment plan decided?',
      a: 'Diagnostics always precede prescription. Consultation includes imaging and analysis, after which a bespoke protocol is recommended with realistic timelines and costs.',
    },
    {
      q: 'What results can I realistically expect from a hair transplant?',
      a: 'Most patients see initial growth from month 3–4, with the mature result at 12 months. Graft survival in our audits averages 96%; final density depends on donor quality.',
    },
    {
      q: 'Are your formulations safe for sensitive skin?',
      a: 'Our core line is fragrance-free and dermatologist-tested. Actives are introduced gradually, and barrier and growth-factor products are designed specifically for reactive skin.',
    },
    {
      q: 'Do you train international practitioners?',
      a: 'Yes. The Institute hosts fellows and masterclass cohorts from over 30 countries, with hands-on, live-patient and cadaveric training and CME accreditation.',
    },
    {
      q: 'How do I book a consultation?',
      a: 'Use any “Book Consultation” button on this page or message us on WhatsApp. Our coordinators will confirm clinical assessment details within one working day.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Begin Your Enquiry',
  intro:
    'Share a few details and a DERMOLYXA™ coordinator will respond to your enquiry personally.',
  formKicker: 'Enquiry form',
  fields: [
    {
      id: 'name',
      label: 'Full name',
      type: 'text',
      placeholder: 'Your name',
      required: true,
      error: 'Please enter your name.',
    },
    {
      id: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: '77097 39330',
      required: true,
      error: 'Please enter a valid phone number.',
    },
    {
      id: 'interest',
      label: 'Area of interest',
      type: 'select',
      placeholder: 'Select an area',
      options: ['Skin', 'Hair', 'Aesthetics', 'Institute', 'Products'],
      required: true,
      error: 'Please choose an area of interest.',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell us what you would like to address…',
      required: false,
    },
  ],
  submit: 'Send enquiry',
  success: {
    title: 'Enquiry received',
    message:
      'Thank you — a DERMOLYXA™ coordinator will respond to your enquiry within one working day.',
  },
  sendAnother: 'Send another enquiry',
  channels: [
    { id: 'call-1', label: 'Call', value: '7709739330', href: 'tel:+917709739330', icon: 'phone' },
    { id: 'call-2', label: 'Call', value: '7709729330', href: 'tel:+917709729330', icon: 'phone' },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+91 77097 39330',
      href: 'https://wa.me/917709739330',
      icon: 'whatsapp',
      external: true,
    },
    {
      id: 'email',
      label: 'Email',
      value: 'dermolyxa@gmail.com',
      href: 'mailto:dermolyxa@gmail.com',
      icon: 'mail',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: '@dermolyxa',
      href: 'https://instagram.com/dermolyxa',
      icon: 'instagram',
      external: true,
    },
  ],
  map: {
    kicker: 'Find us',
    heading: 'Dermolyxa — Regenerative & Aesthetic House',
    placeholder: 'Google Map placeholder',
    address: 'Mumbai, India · by appointment',
    note: 'Illustrative location. Replace with a live Google Maps embed at launch.',
  },
  hours: [
    { day: 'Monday – Friday', time: '09:00 – 19:00' },
    { day: 'Saturday', time: '10:00 – 16:00' },
    { day: 'Sunday', time: 'By appointment' },
  ],
}

export const footer = {
  blurb:
    'DERMOLYXA™ is a regenerative and aesthetic house unifying clinic, institute and laboratory science across skin, hair and aesthetics.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Hair Process', href: '#process' },
        { label: 'Skin Science', href: '#skin' },
        { label: 'Aesthetic Care', href: '#aesthetic' },
        { label: 'Results', href: '#results' },
        { label: 'Institute', href: '#institute' },
        { label: 'Products', href: '#products' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Divisions',
      links: [
        { label: 'The Clinic', href: '#clinic' },
        { label: 'The Institute', href: '#institute' },
        { label: 'The Products', href: '#products' },
        { label: 'Book Enquiry', href: '#contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Call 7709739330', href: 'tel:+917709739330' },
        { label: 'Call 7709729330', href: 'tel:+917709729330' },
        { label: 'WhatsApp', href: 'https://wa.me/917709739330' },
        { label: 'dermolyxa@gmail.com', href: 'mailto:dermolyxa@gmail.com' },
        { label: 'Instagram @dermolyxa', href: 'https://instagram.com/dermolyxa' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Refund', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ],
  notices: [
    'Training does not by itself confer a medical licence or authorization to practise any regulated healthcare profession.',
    'Approval / affiliation subject to applicable regulatory requirements.',
  ],
  copyright: '© 2026 DERMOLYXA™. All rights reserved.',
  credit: 'Advanced Regenerative & Aesthetic Science',
}

export const mobileBar = {
  items: [
    { id: 'call', label: 'Call Now', icon: 'phone', action: 'link', href: 'tel:+917709739330' },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: 'whatsapp',
      action: 'link',
      href: 'https://wa.me/917709739330',
      external: true,
    },
    { id: 'enquire', label: 'Enquire', icon: 'chat', action: 'scroll', target: 'contact' },
  ],
}
