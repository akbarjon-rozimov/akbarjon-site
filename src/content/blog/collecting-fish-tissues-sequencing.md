---
title: "A 7-stage protocol for fish tissue collection in genome & transcriptome sequencing"
description: "A field-tested, time-critical workflow for sampling and preserving fish tissues for high-quality DNA and RNA sequencing — from low-impact capture to the −80 °C cold chain."
date: 2026-09-06
tags: [fieldwork, genomics]
draft: false
---

High-quality sequencing starts long before the lab — it starts at the riverbank.
For genome and especially transcriptome work, the single biggest determinant of
data quality is how fast and how cold you handle tissue after capture. Endogenous
ribonucleases degrade cellular RNA within minutes at ambient temperature, so the
whole procedure is a race against time and a discipline of preparation.

Below is the full seven-stage protocol I use in the field for collecting fish
tissues for sequencing. It's written for freshwater fishes, but the principles
transfer to most vertebrates.

## Stage 1 — Capture & transport

- **Target collection.** Capture wild specimens using low-impact methods (seine
  netting, electrofishing, or angling) to minimize mechanical injury and physical
  stress.
- **Aerated live transport.** Transport live specimens in clean containers filled
  with native river or lake water, kept continuously oxygenated with a
  battery-powered air pump or a diffuse oxygen cylinder. Minimizing pre-mortem
  physiological stress prevents shock-induced transcriptomic changes and tissue
  hypoxia.

## Stage 2 — Equipment preparation

- **Sanitization & sterilization.** Wipe down surfaces and sanitize dissection
  tools (surgical scissors, fine forceps, scalpels) with 70% ethanol, followed by
  an RNase decontamination solution such as RNase AWAY.
- **Consumables & cryo-gear.** Pre-stage sterile screw-cap microcentrifuge tubes
  (1.5–2.0 mL cryovials), a wet-ice box, a liquid-nitrogen (LN₂) benchtop dewar,
  and molecular-grade 100% ethanol.

## Stage 3 — Documentation & sampling

- **Systematic labeling.** Prepare water-resistant, solvent-proof cryo-labels
  pre-printed with standardized metadata codes (e.g. `Pkau-M1` for
  *Pseudoscaphirhynchus kaufmanni*, muscle, specimen 1).
- **Voucher photography.** Lay the fresh specimen flat on a clean board with a
  metric ruler and its printed label. Photograph the lateral body profile, fins,
  and diagnostic taxonomic traits *before* any incision.

## Stage 4 — Tissue extraction (time-critical: <10–15 min)

- **Rapid multi-tissue dissection.** Systematically excise target tissues in a
  fixed order — muscle, skin, heart, liver, brain, spleen — into their
  corresponding labeled cryovials.
- **Mitigating RNA degradation.** Complete the entire harvest within 10–15 minutes
  post-euthanasia. RNases degrade RNA rapidly at ambient temperature, so speed is
  essential for high-quality transcriptomic data. Clean or flame tools between
  tissue types to eliminate cross-contamination.

## Stage 5 — Immediate freezing

- **Flash freezing.** Plunge filled, tightly sealed cryovials directly into the
  LN₂ dewar at −196 °C. Flash-freezing instantly arrests enzymatic activity,
  preserving high-molecular-weight (HMW) DNA and RNA.

## Stage 6 — Ethanol preservation (voucher / backup)

- **DNA & morphological backup.** Place remaining body tissue, whole fin clips, or
  entire voucher specimens into 100% molecular-grade ethanol at a 10:1
  ethanol-to-tissue volume ratio, stored at room temperature or 4 °C. This
  preserves DNA for genomic verification and archives morphology for taxonomy.

## Stage 7 — Storage & transport

- **Dry-ice cold chain.** Transfer cryovials from liquid nitrogen into an insulated
  container of dry ice for intermediate transport to the primary laboratory.
- **Ultra-low freezing.** Move samples immediately into a −80 °C freezer for
  long-term storage, and maintain an unbroken cold chain on dry ice during final
  express shipment to the sequencing facility.

Here's the whole protocol at a glance:

![From river to sequence: a seven-stage infographic showing fish tissue preparation for genome sequencing, from live capture through rapid tissue extraction and flash-freezing to −80 °C storage and shipment](/blog/tissue-infographic.jpg)

## Why the cold chain is non-negotiable

Every stage above exists to protect the molecules you're paying to sequence. Warm
tissue means active enzymes: RNases shred RNA and DNA fragments over time.
Flash-freezing in liquid nitrogen halts that chemistry almost instantly, and the
−80 °C freezer keeps it halted. A single gap in the cold chain — a tube left out,
a dewar run dry — can quietly ruin a sample you travelled hundreds of kilometres to
collect.

The ethanol voucher is both insurance and reference: it preserves DNA robustly
without a freezer and keeps a physical specimen tied to the genomic data, which
matters enormously for taxonomy and for anyone who later needs to know exactly what
was sequenced.

Get the preparation and the cold chain right, and everything downstream —
extraction, library prep, assembly — starts from the best possible material.