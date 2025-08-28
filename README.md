# xfsc-website

This repository contains an overview of components, resources and source code needed to build the *XFSC Landing Page*.

It serves as a central hub for contributors, developer, and community members to explore XFSC components and contribution guidelines.

## Table of Contents
- [About the Landing Page](#About-the-Landing-Page)
- [Repository Branch Structure](#repository-branch-structure)
- [XFSC Components](#xfsc-components)
- 
- [How to Contribute](#how-to-contribute)
- [Community & Support](#community-support)
- [Useful Links](#useful-links)
- [License](#license)

## 1. About the Landing Page
The XFSC website serve as an entry point for the contributors and users of the XFSC Eclipse project. It is designed to provide clear and structured information for anyone who wants to learn about XFSC, its components and gets involved.

For a detailed explanation of XFSC and its components, visit the official website: [https://eclipse-xfsc.github.io/landingpage](https://eclipse-xfsc.github.io/landingpage)

## 2. Repository Branch Structure
| Branch Name | Purpose | Contains | When to Use |
|-------------|---------|----------|-------------|
| gh-pages | Handles deployment and workflow automation | - Github Actions workflow (` .github/workflows/`)<br>- Static assets required for deployment | You don't edit docs here. This branch is updated automatically when the workflow runs. |
| pageBuilder | contains the actual landgin page content | - Markdown files for Landing page website<br>- `docusaurus.config.js` for site setup<br><br>- Images used on the site| Use this branch to **add, edit, or update documentation**. After pushing changes, the workflow builds files in `gh-pages` and deploys automatically. |

## 3. XFSC Components
This section highlights the main XFSC components/ Framework and links to their repositories:
### **ICAM & Trust over IP** 
 The **Identity, Credential, and Access Management (ICAM)** components empower federated ecosystems to **authenticate** and **authorize** users and systems securely.  
This enables **self-sovereign identity management** with credential validation and trust services.
| **Service** | **Repository Links** |
|------------|----------------------|
| **Authentication / Authorization Service (AAS)** |  [Github Repo](https://github.com/eclipse-xfsc/aas)
| **Organisation Credential Manager (OCM)** | [Github Repo](https://github.com/eclipse-xfsc/org.eclipse.xfsc) *(See sub-repositories below)*
| **Personal Credential Manager (PCM)** | [Github Repo](https://github.com/eclipse-xfsc/org.eclipse.xfsc) *(See sub-repositories below)*
| **Trust Services API (TSA)** | [Github Repo](https://github.com/eclipse-xfsc/org.eclipse.xfsc) *(See sub-repositories below)*
| **Notarisation Service (NOT)** | [Github Repo](https://github.com/eclipse-xfsc/notarization-service) 
| **Trust Management Infrastructure (TRAIN)** | [Github Repo](https://github.com/eclipse-xfsc/org.eclipse.xfsc) *(See sub-repositories below)*

---

### **Organisation Credential Manager (OCM) – Sub-Repositories**
| **Sub-Repository** | **Purpose** | **Link** |
|---------------------|------------|----------|
| **aries-integration-tests** | Integration tests for Organizational Credential Manager on behave basis (Hyperledger/Credo) | [GitHub](https://github.com/eclipse-xfsc/aries-integration-tests) |
| **aries-ssi-agent** | A wrapper around the Credo library (Credo), formerly known as Aries Framework Javascript, an implementation of a Hyperledger Indy Agent in TypeScript | [GitHub] (https://github.com/eclipse-xfsc/aries-ssi-agent) |

---

### **Trust Service API (TSA)**
| **Sub-Repository** | **Purpose** | **Link** |
|---------------------|------------|----------|
| **crypto-provider-service** | provides REST APIs for creating Verifiable Credentials (VC) and Verifiable Presentations (VP) in the W3C credential format. It also provides more generic endpoints for signing arbitrary data, for adding cryptographic proofs to existing VC/VP and for fetching public keys necessary for signature verification. | [GitHub](https://github.com/eclipse-xfsc/crypto-provider-service) |
| **custom-policy-agent** | The policy service provides REST API to evaluate/execute OPA policies written in the Rego language. | [GitHub](https://github.com/eclipse-xfsc/custom-policy-agent) |
| **redis-cache-service** | [The policy service provides REST API to evaluate/execute OPA policies written in the Rego language. | [GitHub](https://github.com/eclipse-xfsc/redis-cache-service) |
##License
This project is licensed under Apache 2.0 License.
