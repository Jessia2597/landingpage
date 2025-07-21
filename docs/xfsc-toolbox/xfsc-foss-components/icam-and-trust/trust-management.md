---
sidebar_position: 6
title: Trust Management Infrastructure (TRAIN)
---

We are introducing a new component into the XFSC Toolbox called “Trust Management Infrastructure” (TRAIN). TRAIN supports with establishing and verifying the trust basis (root of trust) for participants in the Gaia-X distributed ecosystem and the credentials issued by those entities. Thus, TRAIN plays a pivotal role in building trust within the Gaia-X ecosystem, providing a flexible and interoperable infrastructure for entities to establish and manage trust relationships. 

This is achieved through the introduction of trust lists combined with anchoring of pointers in the DNS. Gaia-X Federations and other entities are supported in the sovereign publication and administration of trust lists for their specific trust frameworks. Verifying entities are supported in their sovereign trust decisions. To achieve this, the following functionalities will be developed: 

- Trust Framework Configuration 
- Trust List Management 
- Zone Manager Handler 
- Trusted Content Resolver (Extended Universal Resolver) + Libraries 
- DNS Zone Manager 

Please note that the libraries are intentional for different languages such as GO, Java, Python and JavaScript. It’s also intentional to create the libraries as helpers for using the extended universal resolver, by adding content resolver steps, validation routines for VC and other assistive functionalities. 

<div class="mtp-3">
    <a href="https://github.com/eclipse-xfsc/org.eclipse.xfsc" target="_blank" class="primaryBtn">Repository</a>
</div>