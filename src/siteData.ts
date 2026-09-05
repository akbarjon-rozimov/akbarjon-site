// ============================================================
//  EDIT THIS FILE to customize your site.
//  Everything here flows into the pages automatically.
// ============================================================

export const site = {
  name: 'Akbarjon Rozimov',
  role: 'PhD Candidate · Evolutionary & Conservation Genomics',
  tagline:
    'Evolutionary biologist and ichthyologist working on the genomics and conservation of Central Asian freshwater fishes.',
  email: 'akbarjonruzimov@gmail.com',
  phone: '+86 182 1019 3552',            // shown with an icon in the hero
  phoneAlt: '+998 94 114 9809',          // second number (UZ / WhatsApp); leave '' to hide
  affiliation: 'Fish Evolution and Genomics Group, Institute of Zoology, Chinese Academy of Sciences',
  location: 'Beijing, P.R. China',
  cvFile: '/Akbarjon_Rozimov_CV.pdf', // put the PDF in the public/ folder; leave '' to hide the button

  // Social / academic links. Delete any you do not use.
  links: {
    googleScholar: 'https://scholar.google.com/citations?user=T7GWCsOCysUC&hl=en',
    github: 'https://github.com/akbarjon-rozimov',
    orcid: 'https://orcid.org/0000-0001-5628-1524',
    researchGate: 'https://www.researchgate.net/profile/Akbarjon-Rozimov',
    linkedin: 'https://www.linkedin.com/in/akbarjon-rozimov-6597b2207',
    twitter: '', // leave empty to hide
  },
};

export const about = `
I am an evolutionary biologist and ichthyologist specializing in the genomics and
conservation of Central Asian freshwater fishes. My PhD research at the Institute of
Zoology, Chinese Academy of Sciences delivers the first chromosome-level genomic
resources and conservation assessment for the critically endangered Amu Darya false
shovelnose sturgeons (Pseudoscaphirhynchus kaufmanni and P. hermanni), integrating
population genomics, demographic inference, and conservation genomics with field-based
biodiversity survey. I am a member of the IUCN SSC Sturgeon Specialist Group and a peer
reviewer for several journals.
`;

export const education = [
  {
    degree: 'PhD in Evolutionary Genomics',
    institution: 'Institute of Zoology, Chinese Academy of Sciences — Beijing, China',
    period: 'Sep 2023 – present',
    note: 'Thesis: Evolutionary and Conservation Genomics of the Amu Darya False Shovelnose Sturgeons. Supervisors: Prof. Baocheng Guo and Dr. Xinxin Li.',
  },
  {
    degree: 'MSc in Ichthyology and Hydrobiology',
    institution: 'National University of Uzbekistan (Mirzo Ulugbek) — Tashkent',
    period: 'Sep 2021 – Jun 2023',
    note: 'Thesis: The ichthyofauna of the Chirchik River — species diversity, conservation and practical importance.',
  },
  {
    degree: 'BSc in Biology',
    institution: 'Urgench State University — Khorezm, Uzbekistan',
    period: 'Sep 2017 – Jun 2021',
    note: 'Undergraduate research: Diversity and conservation of freshwater fishes in the lower Amu Darya River.',
  },
];

export const experience = [
  {
    title: 'Curator of the Zoological Collection',
    org: 'Institute of Zoology, Academy of Sciences of Uzbekistan — Tashkent',
    period: 'Jan 2022 – Aug 2023',
    note: 'Managed inventory, curation, and digitization of the national ichthyological collection; conducted data analysis supporting taxonomic and conservation research.',
  },
  {
    title: 'IUCN SSC Sturgeon Specialist Group — Member',
    org: 'International Union for Conservation of Nature',
    period: '2021 – present',
    note: 'Contributing to sturgeon conservation assessment and Red List work in Central Asia.',
  },
];

// Technical skills, grouped. Edit freely.
export const skills = [
  {
    group: 'Genomics',
    items: ['Mitochondrial & chromosome-level genome assembly', 'Annotation', 'SNP calling & genotyping'],
  },
  {
    group: 'Population genomics',
    items: ['PCA, ADMIXTURE, phylogenomics', 'f3- and D-statistics', 'Gene flow analysis'],
  },
  {
    group: 'Demographic & conservation',
    items: ['Ne trajectories, divergence time', 'Inbreeding, genetic load', 'IUCN & regional Red List assessment'],
  },
  {
    group: 'Software & tools',
    items: ['GATK · PLINK · VCFtools · BCFtools', 'ADMIXTURE · Dsuite · fastsimcoal2 · PSMC', 'TreeMix · SLiM · SMC++ · Stairway Plot 2', 'Bash · R · Python · HPC workflows'],
  },
];

// Fieldwork & research campaigns.
export const fieldwork = [
  {
    title: 'Lost Syr Darya Sturgeon survey',
    period: '2025',
    note: 'Trammel-net and eDNA surveys across the Syr Darya basin in Uzbekistan, Kazakhstan and Kyrgyzstan; with Tennessee Aquarium and Re:wild.',
  },
  {
    title: 'Sturgeon & cyprinid sampling for de novo genome assembly',
    period: '2024',
    note: 'Pseudoscaphirhynchus kaufmanni, Acipenser gueldenstaedtii, Schizothorax eurystomus, Gymnodiptychus dybowskii.',
  },
  {
    title: 'Hydro4U fish sampling',
    period: '2022 – 2023',
    note: 'Kyrgyzstan and Uzbekistan, with TIIAME.',
  },
  {
    title: 'Chirchik, Zeravshan, Surkhandarya & lower Amu Darya river surveys',
    period: '2019 – 2023',
    note: 'Partly self-funded inventories underpinning three publications.',
  },
];

// Conference presentations.
export const presentations = [
  {
    title: 'Multidimensional crisis: geographic range contraction, phenotypic degradation, genomic erosion, and cultural exploitation of the critically endangered Amu Darya shovelnose sturgeons',
    venue: '10th International Symposium on Sturgeon — Yichang, China',
    period: 'Oct 2025',
    kind: 'Oral presentation',
  },
  {
    title: 'Sturgeon survival and conservation challenges in the Amu Darya',
    venue: '30th Anniversary Meeting, IUCN Sturgeon Specialist Group — Bordeaux, France',
    period: 'Sep 2024',
    kind: 'Invited online presentation',
  },
];

// Awards & scholarships.
export const awards = [
  {
    title: 'ANSO Scholarship for Young Talents',
    org: 'UCAS — No. 2023ANP0152',
    period: '2023',
  },
  {
    title: 'Presidential Scholarship',
    org: 'National University of Uzbekistan — No. 4/1',
    period: '2022 / 2023',
  },
];
