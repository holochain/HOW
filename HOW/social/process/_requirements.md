---
HOW: <path in HOW tree>
Source: <path to process used to create this HOW>
Created: <YYYY-MM-DD>
Version: <version-type(semantic/index)/version-number>
Status: <DRAFT|REVIEW|ABANDONED|SUPERSEDED|DEFERRED|ACCEPTED>
---
## Title
The title of the standard, process, or pattern being defined

## Author(s)

list of authors' names and optionally, email or other contact addresses

## Abstract

A short (~200 word) description of the technical/social/informational issue being addressed.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

## Motivation

Clearly explain why this standard is being proposed. If the standard is a new version of an existing standard, or makes one SUPERSEDED explain why that is inadequate to address the problem that this HOW solves. Include specific use cases and describe why this HOW is valuable to the Holochain ecosystem.

## Rationale

Provide a rationale for the proposed standard. Explain how the proposed standard will fulfill the motivation and solve the problem described in the Abstract.

## Process Specification

The process specification MUST describe the workflow of the process, including the stages, steps and statuses the process goes through, and transition events that trigger status and stage changes.

## Process Template Section: REVIEW

After a standard is drafted, when it moves into the `REVIEW` status the following section must be added:

### Steward

Person or Working Group who is stewarding this HOW and is responsible for moving it through the workflow as specified by the process.

## Process Template Section: ABANDONED, SUPERSEDED, DEFERRED

When a standard is not accepted or is abandoned or superseded the following section must be added:

### <status> Reason

The reason this standard was not accepted, abandoned or was superseded.  In the case of Rejection, the content of this section MUST included the reason for the rejection. In the case of superseding, the content of this section MUST include which HOW, or HOW version makes this HOW obsolete.

## Process Template Section: ACCEPTED

When a standard is set to status ACCEPTED, all previous versions of the same standard must be set to status SUPERSEDED.

When a standard set to status ACCEPTED this section must be added:

### Effective

Effective From: <date> 

This section MAY include any caveats, intentions for future deprecation of this standard.
