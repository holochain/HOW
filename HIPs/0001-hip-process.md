---
HIP: 1
Title: Process for New HIPs
Author: mattyg <matt@buildyourweb.app>, Claude 3.5 Sonnet
Status: Draft
Type: Process
Created: 2024-11-23
---

## Abstract

This HIP describes the process for proposing and ratifying Holochain Improvement Proposals (HIPs). HIPs are the primary mechanism for proposing new features, collecting community input on an issue, and documenting decisions affecting Holochain. This document standardizes the HIP process, format, and workflow.

## Motivation

As Holochain evolves, we need a standardized process for proposing and documenting protocol changes, feature additions, and process improvements. A well-defined HIP process helps:
- Maintain transparency in decision-making
- Ensure proper technical documentation
- Foster community participation
- Track the history of protocol changes
- Enable structured discussions about significant changes

## Specification

### HIP Types

HIPs are classified into four types:
1. **Core** - Changes to core Holochain protocols
2. **Application** - Application standards and conventions
3. **Informational** - General guidelines or information
4. **Process** - Changes to HIP processes or other organizational processes

### HIP Workflow

1. **Draft Stage**
   - Author(s) create a new HIP following the template
   - Submit as a pull request to the HIP repository
   - Receive initial feedback from editors

2. **Review Stage**
   - Community discussion period (minimum 14 days)
   - Authors address feedback
   - Technical review for Core HIPs

3. **Final Stage**
   - Acceptance voting by core developers
   - Implementation (if applicable)
   - Status updated to "Final"

### HIP Format

HIPs must include:
- Header with metadata (HIP number, title, author, etc.)
- Abstract (~200 words)
- Motivation
- Specification
- Technical details
- Backwards compatibility analysis
- Security considerations
- Optional reference implementation

### Technical Details

#### HIP Header Fields
```yaml
HIP: <number>
Title: <title>
Author: <author list>
Status: <Draft | Review | Final | Withdrawn>
Type: <Core | Application | Informational | Process>
Created: <date>
Requires: <HIP numbers> (optional)
Replaces: <HIP numbers> (optional)