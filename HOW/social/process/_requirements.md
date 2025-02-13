---
Status: <DRAFT|REVIEW|ABANDONED|SUPERSEDED|DEFERRED|ACCEPTED>
---
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
