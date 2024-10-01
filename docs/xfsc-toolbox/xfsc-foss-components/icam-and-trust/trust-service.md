---
sidebar_position: 4
title: Trust Services API (TSA)
---

The “Trust Services API” ensures a consistent level of trust between all components and participants in Gaia-X can be established. The Trust Services are the central technical implementation of cryptographical functions to enforce policies in the SSI context for the usage of the decentral and self-sovereign provided capabilities. 

The Trust Services are the core library that composes and orchestrates the basic cryptographical functions and act as the Policy Decision and Administration Point. The intention is to centralize the base functionality and offering consistent interfaces used by the other GXFS components to establish the required trust within the decentralized ecosystem. Further features to enable the other SSI based Identity and Trust Components are as follows: 

- Verification by applying standards like LD Proof Chains/Sets, BBS+, 
- Establishing policy driven trust 
- Providing the required trust anchors
- Ensuring trust-chains between multiple participants

Furthermore, the Trust Services include necessary tools (e.g., Command Line Scripts, library functions, API interfaces, etc.) to operate and maintain the created software components in an enterprise environment. The policy driven approach will utilize the GitOps administration principles to manage the policies. 

### TSA Extension

The aim of the Trust Services API Extension is to ensure a consistent level of trust between Gaia-X participants and components. The Trust Services API can be used by all other XFSC components. The creation and validation of digital signatures plays a particularly important role here. The product scope includes signing and verifying of necessary data, enabling policy driven trust, ensuring trust-chains between participants and validating eIDAS compliant signatures. 

The scope also includes necessary tools (e.g., Command Line Scripts) to operate and maintain the created software components in an enterprise environment with focus on high-availability, security and monitoring and logging based on common standards.

The main updates/extensions are:

- Extended policy management
- Component is made more “manageable” for deployment 
- Signature services are designed for eIDAS compliant signatures and verifications 
- TSA gets integration interface via cloud events and web hooks 
- Configurability is extended 
- JSON schema validation is added 

<div class="mtp-3">
    <a href="https://gitlab.eclipse.org/eclipse/xfsc/tsa" target="_blank" class="primaryBtn">Repository</a>
</div>