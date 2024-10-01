---
sidebar_position: 2
title: Organisation Credential Manager (OCM)
---

 Organisation Credential Manager (OCM) : The purpose of the service functions to be implemented is to establish trust between the different participants within the Gaia-X decentralized ecosystem. The OCM comprises all trust related functions required to manage and offer GAIA-X Self-Descriptions in the W3C Verifiable Credential format. To achieve this goal, components are required which on the one hand allow the management of assets and participants for the creation of signatures for various properties, attributes, and documents and on the other hand enable the verification of external documents. This includes 

- The creation of verifiable credentials with a corresponding digital signature on the basis of an identity, 
- The issuing of verifiable presentations on the basis of existing and already received verifiable credentials, 
- The requesting of verifiable credentials from third parties for e.g., the attestation of own attributes, 
- As well as the validation of incoming connection requests and proof requests. 

The format used for communication is based on the RFCs described in the Hyperledger Indy context and the standards of W3C and DIF in order to guarantee a uniform process flow and exchange formats. Therefore, the OCM enables a participant to interact with the SSI-based ecosystem in a trustworthy and secure manner. 

The OCM utilizes other components like GXFS Trust Services and offer many of the functions required from the GXFS Notarization API component. 

#### OCM Extension

The purpose of this extension is to provide changes to the OCM components to enhance the OCM in its functionality and adopt the latest Gaia-X requirements (e.g. Support of did:web method and VC with JsonWebKey2020 https://docs.gaia-x.eu/technical-committee/identity-credential-access-management/22.10/credential_format/), enabling secure interactions within the Self-Sovereign Identity (SSI)-based ecosystem. The Organization Credential Manager Extension 1 (OCM.E1) enhances the participant’s interaction with the SSI-based ecosystem in a trustful and secure environment. This comprises the utilization of the participants digital identity for different functionalities: 

- Extended management of secure and trustable connections with other parties (Connections in this context are private, secured, and persistent channels between entities)

  - Blocking of Connections
  - Handling of blocked connections

- Refreshing and Revocation of verifiable credentials from attesting parties (e.g., Gaia-X Membership credential from a verified notary)

- Utilization of AIP v2.0 alongside AIP v1.0 by updating the AFJ Framework 

- Provision of verifiable Public Profile (service endpoints within OCM DID Document)
  - Configuration of Private Custom Endpoints (with DID-Auth/OIDC)
  - Configuration of Endpoint Mappings to internal/external functionality

<div class="mtp-3">
    <a href="https://gitlab.eclipse.org/eclipse/xfsc/ocm" target="_blank" class="primaryBtn">Repository</a>
</div>

### OCM W-Stack

The purpose of the OCM W-Stack is to provide all necessary components for the extension of the administration of the digital identity of a participant in the Gaia-X context. The OCM W-Stack enhances the participant’s interaction with the SSI-based ecosystem in a trustful and secure fashion. This comprises the utilization of the participants digital identity for different functionalities:

- Implementation of Full W3C DID/VC/VP Support for Credential Exchange and Trust 
- Implementation of OpenID Standards
  - OpenID4VC/VP
  - SIOP
  - VC Issuance ProtocolExtension
- Establishment of secure and trustable connections with other parties
- Request and reception of verifiable credentials from attesting parties (e.g., Gaia-X Membership credential from a verified notary) in JSON-LD Format
- Attestation of attributes to principals in the form of verifiable credentials (e.g., employees, technical assets)
- Validation of received verifiable presentations from other parties (e.g., validation of Gaia-X membership of other participants)
- Maintenance of the verifiable Public Profile
- Scalable VC/VP Storage
- Graph Indexing for Linking VC/VP

Same as the OCM the OCM W-Stack prioritize W3C compatibility, but technologically the OCM W-Stack will be a non-Indy implementation to become independent of Hyperledger Indy and maximize interoperability.

<div class="mtp-3">
    <a href="https://gitlab.eclipse.org/eclipse/xfsc/organisational-credential-manager-w-stack" target="_blank" class="primaryBtn">Repository</a>
</div>
