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
| gh-pages | Handles deployment and workflow automation | - Github Actions workflow (' .github/workflows/')<br>- Static assets required for deployment | You don't edit docs here. This branch is updated automatically when the workflow runs. |
| pageBuilder | contains the actual landgin page content | - Markdown files for XFSC docs<br>- `docusaurus.config.js` for site setup<br><br>- Images used on the site| Use this branch to **add, edit, or update documentation**. After pushing changes, the workflow builds files in `gh-pages` and deploys automatically. |

The branch gh-pages hosts the **landing page content** and reference all XFSC related components

## 3. XFSC FOSS Components
This section highlights the main XFSC components/ Framework and links to their repositories:
- **ICAM & Trust over IP** -> [https://github.com/eclipse-xfsc/aas](https://github.com/eclipse-xfsc/aas)
- **organization Credentional Manager (OCM)** -> []




##License
This project is licensed under Apache 2.0 License.
