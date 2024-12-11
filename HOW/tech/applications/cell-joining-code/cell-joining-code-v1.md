---
HOW: /tech/applications/cell-joining-code
Source: /social/process/how/how-v1
Status: Draft
Created: 2024-11-23
Version: idx/1
---

## Title

Cell Joining Code

## Authors

@mattyg <matt@buildyourweb.app>, @zippy <eric@holochain.org>, Claude AI 3.5 Sonnet

## Abstract

This HOW proposes a standardized URI format for cell joining codes that enables conductors to join specific networks. The format encapsulates all necessary information for network joining in a single, shareable URI string, excluding the actual DNA.  The format also allows app-specific data to be carried so that UIs can display arbitrary data as needed for good 

## Motivation

Joining a Cell network requires multiple pieces of information to be shared: DNA hash, network seed, membrane proof, and app-specific metadata. Several apps have run into the need to share this information as a single string and implemented their own joining code format.

A standardized joining code format would:
- Simplify the process for inviting someone into a network
- Simplify the implementation of sending and receiving network invitations in apps
- Facilitate services providing "always-on" nodes for a particular Cell
- Support use of linking schemes to enable one-click joining of a network in a particular app
- Encourage app developers to use the joining code pattern for sharing network access in their apps

## Rationale

This specification meets the criteria of the motivation because:
- it uses the standard URI format which makes it amenable to deep-linking
- it uses a specific path in the URI format leaving other paths available under the `hc://` scheme for other uses.
- it includes a well-known pattern for specifying attributes and thus arbitrary application-specific components, as well as optional data elements.

## Technical Specification

The cell joining URI format MUST follow this structure:

```
hc://join/<dna_hash>/<dna_modifiers>?proof=<membrane_proof>&name=<name>&metadata=<metadata>
```

Where:

- The scheme MUST be `hc://`
- The path MUST start with `join/` 
- The `dna_hash` component MUST be included and MUST contain the DNA hash base64 encoded using the URL-safe alphabet (with - and _) specified in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-5) without any added padding.
- The `dna_modifiers` component MUST be included and MUST contain the DNA modifiers base64 encoded using the URL-safe alphabet (with - and _) specified in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-5) without any added padding.
- The `proof` query parameter MAY be included and when present MUST contain the membrane proof value base64 encoded using the URL-safe alphabet (with - and _) specified in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-5) without any added padding.
- The `name` query parameter MAY be included and when present MUST contain a string that will be set as the name of the ClonedCell.
- The `metadata` query parameter MAY be included and when present MUST contain any app-specific metadata base64 encoded using the URL-safe alphabet (with - and _) specified in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648#section-5) without any added padding.

The components MUST be properly URL encoded according to RFC 3986.

The URI format MUST NOT include additional path segments or query parameters beyond those specified.

All components MUST maintain the exact order shown in the format specification.


## Reference Implementation

```rust
use holochain_integrity_types::info::DnaModifiers;
use holo_hash::DnaHash;
use holochain_seraialized_bytes::SerializedBytes;
use std::convert::TryFrom;
use uriparse::URI;


/// Decoded Joining Code
pub struct CellJoiningCode {
  pub dna_hash: DnaHash,
  pub dna_modifiers: DnaModifiers,
  pub membrane_proof: Option<SerializedBytes>,
  pub metadata: Option<SerializedBytes>,
}

// URI parsing implementation
impl TryFrom<&str> for CellJoiningCode {
  type Error = std::io::Error;

  fn try_from(val: &str) -> Result<Self, Error> {
    let uri = URI::try_from(val).unwrap();
    let (scheme, authority, path, query, _) = uri.into_parts();

    if scheme() != "hc" {
      return Err(std::io::Error::new(std::io::ErrorKind::InvalidInput, "Invalid scheme"));
    }

    if path.segments()[0] != "join" {
      return Err(std::io::Error::new(std::io::ErrorKind::InvalidInput, "Invalid action"));
    }

    Self {
      dna_hash: DnaHash::try_from(segments[1])?,
      dna_modifiers: DnaModifiers::try_from(segments[2])?,
      membrane_proof: query.map(|q| SerializedBytes::try_from(q.get("proof"))),
      metadata: query.map(|q| SerializedBytes::try_from(q.get("metadata"))),
    }
  }
}
```

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
