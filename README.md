# Holochain Improvement Proposals (HIPs)

## What is a HIP?

A Holochain Improvement Proposal (HIP) is a design document providing information to the Holochain community, or describing a new feature for Holochain, its processes, or environment. The HIP should provide a concise technical specification of the feature and a rationale for the feature.

## HIP Types

HIPs are classified into four categories:

1. **Core**: Describes any change that affects most or all Holochain implementations, such as changes to the network protocol, DNA specification, or any change or addition that affects the interoperability of applications using Holochain.

2. **Application**: Describes standards, protocols, or conventions at the application level to promote interoperability between Holochain applications. This includes shared data schemas, common zome functions, standardized entry types, or cross-DNA communication patterns.

3. **Informational**: Describes a Holochain design issue, or provides general guidelines or information to the Holochain community, but does not propose a new feature.

4. **Process**: Describes a process surrounding Holochain, or proposes a change to a process.

## HIP Workflow

### 1. Ideation Phase
- Discuss your idea in the Holochain community forums
- Get early feedback from core developers
- Draft your proposal following the HIP template

### 2. Draft Submission
- Fork the HIP repository
- Copy the template file
- Fill in the template with your proposal
- Submit a Pull Request

### 3. Review Process
The HIP process follows these statuses:

- **DRAFT**: The initial status of a new HIP
- **REVIEW**: Ready for peer review
- **LAST CALL**: Final review period (14 days)
- **ACCEPTED**: Approved for implementation
- **FINAL**: Implemented and deployed
- **REJECTED**: Not accepted
- **WITHDRAWN**: Removed by the author(s)
- **DEFERRED**: Postponed for future consideration

## HIP Format

HIPs should be written in Markdown format. Each HIP must begin with a header preamble:

```yaml
---
HIP: <HIP number>
Title: <HIP title>
Author: <list of authors' names and optionally, email addresses>
Status: <Draft | Review | Last Call | Accepted | Final | Rejected | Withdrawn | Deferred>
Type: <Standard | Application | Informational | Process>
Created: <date created on>
Requires: <HIP number(s)> (optional)
Replaces: <HIP number(s)> (optional)
---