# Holochain Organization Work (HOW)

This repo contains and embodies the standards process for the documentation and evolution of the Holochain Framework and Ecosystem.

## What is a HOW

A Holochain Organizational Work standard (HOW) is a design document providing for a technical or social/process standard or information to the Holochain community.  A HOW may describe a new feature for Holochain, its processes, or environment, it may describe a standard used by Holochain applications in the Ecosystem, or it may describe technical or social processes used by the community.  

## HOW Types

HOWs can be of different types as described in the `HOW` file hierarchy in this repo:

```
HOW/
├─ info/             // General guidelines or information
├─ social/
│  ├─ process/       // Changes to HOW processes or other organizational/ecosystem processes
│  │  ├─ how/        // This standard
├─ technical/
│  ├─ core/          // Changes to core Holochain protocols
│  ├─ application/   // Ecosystem and Application standards and conventions
```

## Submitting a HOW

Anyone can propose a HOW for inclusion in this body of standards.  For precise description of the process please see the [how HOW](/HOW/social/process/how/how-v1.md) itself. But these are the rough steps: 

### 1. Ideation
- Discuss your idea in the Holochain community forums
- Get early feedback from core developers
- Draft your proposal following the HOW template for where in the tree you it should go

### 2. Draft Submission
- Fork the HOW repository
- Add your proposed HOW to the tree in your fork.
- Submit a Pull Request using the `Draft Submission` template.

### 3. Review Process
- Participate in the review process as team members and the community comment on and discuss your proposal
- Address any concerns raised.

###  Statuses

As a HOW goes through the process it will have one the following statuses

- **DRAFT**: The initial status of a new HOW
- **REVIEW**: Accepted for peer review by a steward
- **LAST CALL**: Final review period (14 days)
- **ALIVE**: Approved and adopted
- **REJECTED**: Not accepted
- **WITHDRAWN**: Removed by the author(s)
- **DEFERRED**: Postponed for future consideration
- **OBSOLETE**: Replaced by an updated version that is LIVE

## HOW Format

HOWs are written in Markdown format, and have header preamble and a number of sections. The exact format of each how depends on where it is in the HOW tree.  You can see required sections and header elements for each part of the tree the `_requirements.md` documents. In general a HOW will look something like this:

```
---
HOW: <path in HOW tree>
Source: <path to process used to create this HOW>
Status: <initial status from process>
Created: <YYYY-MM-DD>
Version: <version-type(semantic/index)/version-number>
---

## Title

The title of the standard being defined

## Author(s)

list of authors' names and optionally, email addresses

## Abstract

A short (~200 word) description of the technical/social/informational issue being addressed.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

## Motivation

Clearly explain why this standard is being proposed. If the standard is a new version of an existing standard, or makes one obsolete explain why that is inadequate to address the problem that this HOW solves. Include specific use cases and describe why this HOW is valuable to the Holochain ecosystem.

## Rationale

Provide a rationale for the proposed standard. Explain how the proposed standard will fulfill the motivation and solve the problem described in the Abstract.
```