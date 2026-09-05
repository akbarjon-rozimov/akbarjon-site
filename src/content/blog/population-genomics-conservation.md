---
title: What population genomics tells us about a species on the brink
description: How PCA, demographic history, and genetic load turn sequence data into conservation decisions for the Amu Darya false shovelnose sturgeons.
date: 2026-09-02
tags: [conservation, genomics]
draft: false
---

Conservation biology has always had to make decisions with incomplete
information. How many individuals are left? Are the remaining populations still
connected, or have they fractured into isolated remnants? Is a species declining
because of something we can reverse, or has it already crossed a threshold that
genetics alone can't undo? For a long time these questions were answered mostly
from counts and field observation. Genomics adds another way to read a
population's past and estimate its odds — directly from its DNA.

This is the lens I use in my PhD work on the Amu Darya false shovelnose sturgeons
(*Pseudoscaphirhynchus kaufmanni* and *P. hermanni*), two of the most
threatened freshwater fishes in Central Asia. Here's a short, non-technical tour
of what population genomics can actually show, and why it matters for
conservation.

## From a genome to a history

A single genome is not just a snapshot of one animal — it's a record of the whole
population's history, written in the pattern of variation across its chromosomes.
The spacing of genetic differences along the genome carries a signal of how large
the population was thousands of generations ago, when it grew, and when it
crashed.

Methods like **PSMC** and **SMC++** read that signal and reconstruct a trajectory
of effective population size through time. For a critically endangered lineage,
seeing a deep, sustained decline in that curve tells a very different story from a
recent, sharp drop — and points toward different interventions.

## Structure: one population or many?

When individuals from different rivers are sequenced, ordination methods like
**PCA** and model-based approaches like **ADMIXTURE** reveal whether they still
form a single interbreeding population or several genetically distinct groups.

This is not an academic distinction. If the last individuals are split into small,
isolated groups that no longer exchange genes, each group carries less diversity
and faces higher extinction risk than the raw total count would suggest. Knowing
the structure changes how you'd prioritize protection — or whether managed gene
flow should even be on the table.

## Genetic load and the cost of being rare

Small, isolated populations accumulate two related problems: **inbreeding**, which
shows up in the genome as long runs of homozygosity, and **genetic load**, the
build-up of harmful variants that natural selection can no longer efficiently
remove. Together they can drag a population down even after the original threat
has been addressed.

Measuring these directly from genomes helps answer a hard question: is this
species still genetically viable, and what would a recovery actually require?

## Why this matters beyond one species

The false shovelnose sturgeons are an extreme case, but the same toolkit applies
across freshwater biodiversity in Central Asia — a region where many species are
declining faster than we can document them. Turning sequence data into clear,
defensible conservation recommendations is, to me, the whole point of doing this
work.

---

*This is the first post on this site. I'll be writing more on genome assembly,
fieldwork across the Syr Darya and Amu Darya basins, and the methods behind these
analyses.*
