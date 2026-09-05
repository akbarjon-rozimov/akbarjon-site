---
title: Building the first chromosome-level genome for a critically endangered sturgeon
description: Notes from assembling and annotating the Amu Darya false shovelnose sturgeon genome, and why reference quality matters for conservation.
date: 2026-09-02
tags: [genomics]
draft: true
---

This is a starter post — it's set to `draft: true`, so it will not appear on the
live site until you set that to `false`. Replace this text with your own writing.

## Why a chromosome-level reference matters

A fragmented assembly can still answer some questions, but for population and
conservation genomics — detecting inbreeding, mapping runs of homozygosity,
resolving structural variation — a chromosome-level reference changes what is
possible.

## The rough workflow

- Long reads for contiguity, plus Hi-C for scaffolding into chromosomes.
- Assembly, then annotation of gene models and repeats.
- QC: contiguity metrics, gene-completeness scores, and comparison to relatives.

Write about the decisions you made, the tools you used (GATK, the assembly and
scaffolding pipeline, GetOrganelle for the mitogenome), and what surprised you.
