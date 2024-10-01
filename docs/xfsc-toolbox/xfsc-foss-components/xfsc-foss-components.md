---
title: XFSC FOSS Components
---

### ICAM & Trust over IP (Identity, Credential and Access Management)

These services empower federated ecosystems, like federations, to authenticate and authorise users and systems in a decentralised, self-sovereign manner, ensuring trust without depending on a central authority. These services utilise credential validation and technology functionalities to maintain a consistent level of trust among all participants in the federation.

- **Authentication/Authorisation Service (AAS)**
- **Organisation Credential Manager (OCM)**
- **Personal Credential Manager (PCM)**
- **Trust Services API (TSA)**
- **Notarisation Service (NOT)**
- **Trust Management Infrastructure (TRAIN)**

### Decenralised Catalogue and Contracting Service (CCS)

The Decentralised Catalogue and Contracting Service act as an inventory, allowing participants to discover, understand, and use available data in an ecosystem. The Federated Catalogue serves as a repository for a Federation, enabling participants to find each other's information and services through Self-Descriptions. The toolbox provides code for groups to create their own Catalogue and includes services for contract negotiations and tracking data transactions, giving participants control over their data usage within the group.

- **Federated Catalogue (CAT)**
- **Self-Description Wizard (SD-Wizard)**
- **Data Contract Services (DCS)**
- **Data Exchange Logging Service (DELS)**

### Orchestration & Monitoring

Orchestration and Monitoring services are vital for managing complex ecosystems, ensuring seamless and compliant operations. The distinction lies in their focus and functionality: ORCE (Orchestration Engine) is tailored for orchestrating tasks, particularly emphasizing complex application networking, while ORC (Orchestration) is specifically designed for managing the life cycle of infrastructure services, including deployment, updates, and deletion based on actions from consumers or providers. Additionally, the Continuous Automated Monitoring (CAM) service ensures transparency through automated compliance monitoring, providing insights into service adherence to Federation rules.

- **Orchestration Engine (ORCE)**
- **Service Mesh Orchestrator, (ORC)**
- **Continuous Automated Monitoring (CAM)**

### Portal (POR)

The Portal within XFSC toolbox serves as an integration layer, highlighting Federation Services and providing user-friendly access to onboarding, accreditation, service discovery, orchestration, and delivery. It includes key features such as searching, exploring, and displaying content from the Federated Catalogue. Users can register and onboard new Participants, accessing onboarding details, with the Federation approving registrations and issuing verified credentials. Furthermore, Participants can orchestrate and provision services through the portal.

#### The initialset of services includes: 

<div class="text-center">![Doc img](/img/Services_Overview.png)</div>

export const Box = ({ name, img, href }) => (
<a class="box-container" href={href}>
<img src={img} />

<h3>{name}</h3>
</a>
);

<div class="img-container">
  <Box
    name="Identity, Credential & Access Management"
    img="/img/service_1.png"
    href="/xfsc-toolbox/xfsc-foss-components/icam-and-trust"
  />
  <Box
    name="Decenralised Catalogue and Contracting Service"
    img="/img/service_2.png"
    href="/xfsc-toolbox/xfsc-foss-components/decentralized-catalogue"
  />
  <Box
    name="Orchestration & Monitoring"
    img="/img/service_3.png"
    href="/xfsc-toolbox/xfsc-foss-components/orchestration-monitoring"
  />
  <Box name="Portal" img="/img/service_4.png" href="/xfsc-toolbox/xfsc-foss-components/portal" />
</div>
