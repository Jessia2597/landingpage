---
sidebar_position: 5
title: Notarisation Service (NOT)
---

In this tender the lot “Notarization API” is being awarded. The purpose of the service functions to be implemented is to attest given master data and transform it to W3C compliant digital Verifiable Credential representation. These made tamper-proof digital claims about certain attributes are central to gain the desired trust in any provided self-descriptions of assets and participants in the distributed GAIA-X ecosystem. Examples of verification and digital attestation are: 

- Transform classic certificates of any 3rd party certifier to digital verifiable credential formats with desired signatures 
- GAIA-X participants and associated master data (e.g., address, name, tax identification number etc.)
- Ownership of the given organization DID – relates it to the real verified organization
- Business owner (e.g., by eID) to bridge SSI with eIDAS regulations 
- Organizations acting as trust anchor. E.g., Governments, Gaia-X AISBL, etc. 

This service must include interfaces (APIs) to integrate the notarization component smoothly in existing software for Non-IT operator usage (e.g., lawyers, notaries, governments, certifiers …). 

The scope also includes necessary tools (e.g., Command Line Scripts, API’s, etc.) to operate and maintain the created software components in an enterprise environment with focus on high-availability, security and monitoring and logging based on common standards. 

The Notarization API utilizes other components like GXFS Organizational Credential Manager or Trust Services with its offered basic decentralized functionalities to gain an interoperable trust ecosystem. 

### NOT Extension

The scope is to extend the existing component “Notarization API”, with the following new features:

- Protocol agnostic issuances depending on the incoming DID and format definitions 
- New issuance and verification protocols 
- Business validation flow for the notary 
- Documentation for using NOT as the compliance service for memberships 
- Dynamic schema configuration 
- Enrollment of organization to certain trustlists 
- Trust verification with the TRAIN module before the issuance process 
- Automatic Notarization Verification 

The product extension will also include interfaces (API’s) to integrate the notarization component smoothly in external software for Non-IT operator usage (e.g., lawyers, notaries, governments, certifiers …).

<div class="mtp-3">
    <a href="https://github.com/eclipse-xfsc/org.eclipse.xfsc" target="_blank" class="primaryBtn">Repository</a>
</div>