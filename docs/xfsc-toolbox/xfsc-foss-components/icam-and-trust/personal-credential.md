---
sidebar_position: 3
title: Personal Credential Manager (PCM)
---

In this tender the lot “Personal Credential Manager” is being awarded. The purpose of the service functions to be implemented is to enable Gaia-X users to manage their credentials themselves. Therefore, the user requires secure storage (user wallet) and presentation capabilities in the authentication and authorization processes.

The Personal Credential Manager (PCM) as a Gaia-X component supports the decentralized architecture and is used by a natural person. The respective person utilizes the PCM in the respective form factor to store Verifiable Credentials issued to him as well as to prove the statements necessary to obtain a service. 

The PCM enables users (holders) to interact technically with the SSI-based ecosystem in a privacy-preserving way. PCM acts then as a user representative, securely holding the acquired distributed identities and identity attributes, and provides the technical means to selectively disclose the attributes for authentication and service consumption. By that, the PCM provides the personal wallet for the user. 

### PCM Extension

The purpose of the PCM is to provide all necessary components for the self-sovereign administration of the digital identity of a principal in the Gaia-X context on a mobile device. The PCM enables a natural person to act as a principal of an organization within the SSI-based Gaia-X ecosystem in a privacy-preserving, trustful and secure way. The extension comprises the following main functionalities:

- AIP 2.0 Support 
- Reception and management of updated W3C verifiable credentials 
- Presenting W3C and AIP 2.0 Verifiable Presentations to other parties in a proved manner
- Secure storage and management of respective secrets 
- Remote Management of the PCM Cloud Solution 
- Support of the PCM Cloud functionality 
- Enhancements in QR Code Support Reading and Presentation 
- Furthermore, the scope includes the provision of the developed software in a usable format for end users including the respective distribution channels (e.g., App Stores). 

<div class="mtp-3">
    <a href="https://gitlab.eclipse.org/eclipse/xfsc/pcm" target="_blank" class="primaryBtn">Repository</a>
</div>

### PCM Cloud

We are also introducing a PCM that can be interacted with by computer browser, thus giving you an alternative to the existing PCM App. The purpose of the PCM Cloud is the same as the existing PCM App – to provide all necessary components for the self-sovereign administration of the digital identity of a principal in the Gaia-X context. The PCM Cloud enables a natural person to act as a principal of an organization within the SSI-based Gaia-X ecosystem in a privacy-preserving, trustful and secure way from a computer browser. This comprises the following main functionalities:

- Remote Management of a Cloud Wallet or multiple Wallets which are connected to the PCM Cloud 
- Reception and management of verifiable credentials from other parties (e.g., a principal credential from a Gaia-X participant) by using the web frontend 
- Presenting Verifiable Presentations to other parties in an automated or manual manner by using plugins 
- Secure storage and management of respective secrets
- Consent Management 
- Policy Based Decisions about Issuing/Presentations
- Plugin System which extends the Holder Capabilities

The PCM Cloud is designed as a cloud-based component offering a user-friendly web interface for managing OCM, OCM W-Stack, and TSA. It serves as an integration layer, facilitating various Holder use cases. The PCM Cloud orchestrates these use cases through plugins, such as the “ID Card Proof Plugin,” enabling functions like automatic ID card verification.

<div class="mtp-3">
    <a href="https://gitlab.eclipse.org/eclipse/xfsc/personal-credential-manager-cloud" target="_blank" class="primaryBtn">Repository</a>
</div>
