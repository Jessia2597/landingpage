---
sidebar_position: 5
title: Data Contract Services (DCS)
---

“Data Contract Service” enables data transactions in a secure, trusted, and auditable way within the Gaia-X ecosystem. It offers interfaces for the negotiation of data contracts detailing the agreed terms (Data Asset Usage Policy) for planned data exchange. The service is not meant to handle the transaction of data (that is described in the negotiated data contracts). 

From a functional perspective, the Data Contract Service provides a formal data transaction initiation handshake between the data provider and the data consumer. Basically, the service allows sending offers and counteroffers resulting in agreement or rejection. The contract is packaged in a human and a machine-readable format based on ODRL. 

The Data Contract Service provides endpoints for initiating the handshake and retrieving the contract for later reference. It provides log tokens to Data Provider and Data Consumer (except when logging is forbidden) to authorize metadata logging at the Logging Service (the Logging Service is being awarded in a separate tender). 

<div class="mtp-3">
    <a href="https://gitlab.eclipse.org/eclipse/xfsc/dct" target="_blank" class="primaryBtn">Repository</a>
</div>