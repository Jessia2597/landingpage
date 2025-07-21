---
sidebar_position: 1
title: Authentication/Authorisation (AAS)
---

In this tender the lot “Authentication/ Authorization” is being awarded. The purpose of the service functions to be implemented is to enable Gaia-X participants to authenticate users and systems in a trustworthy and decentralized self-sovereign manner without the need for a central source of authority as well as to assure authorization of access and data usage based on such identity data and decentrally managed credentials.

The Gaia-X concept of Authentication and Authorization is based on the SSI Standards W3C VerifiableCredentials and decentralized key management (DPKI) defined by the W3C DID Core Specification and extended with DIF Specifications for DID-based message exchange (DIDComm) supported by most OpenSource Agents like Hyperledger Aries (eg. ACA-Py) for proof request and presentation.

At the core of this enablement stays integration and assurance of compatibility to the existing and well-established authentication protocols such as OpenID Connect and authorization frameworks like OAuth2 or enabling X.509-based mutual TLS authentication. Thus, the service function shall offer components which bridge between SSI-based authentication and the established OpenID Connect specification for authentication and request of claims including related proofs. In the same manner a bridge function shall be offered to authenticate system-to-system interactions utilizing OAuth2 authorization framework, with dynamic client registration and establishing trustworthy mutual TLS-authentication link backed by SSI-based self-sovereign and decentralized authentication and authorization.

The overall scope of the service functions enables – by application of supporting SSI shell components, such as SSI OIDC Provider and SSI IAT Provider – to employ any OAuth2/OIDC standards-based local IAM solution for decentralized authentication and authorization within Gaia-X ecosystem. The components integrate with the other elements of the Identity & Trust Work Package, e.g., “Trust Services API” and “Personal Credential Manager” (these services are being awarded in separate tenders) in order to fulfill their full scope of function.

<div class="mt-5">
<a href="https://github.com/eclipse-xfsc/org.eclipse.xfsc" target="_blank" class="primaryBtn">Repository</a>
</div>
