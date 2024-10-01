import React from "react";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";

const AboutComp = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className="container">
        <h2 className="page-title">About XFSC </h2>

        <div className={styles.bodyContainer}>
          <p>
            XFSC- (Cross Federation Services Components), a Free and Open-Source
            project, is purpose-built for federated ecosystems known as
            Federations, founded on the principles of Self Sovereign Identities
            and decentralization. The project's provides fundamental elements of
            trust, interoperability, and sovereignty across diverse Federations.
          </p>

          <p>
            Initially established by the German government as GXFS (Gaia-X
            Federation Services), the project involves defining and implementing
            specifications and code through collaboration with contracted
            parties and community oversight. These services, grounded in
            existing standards and open technologies, play a crucial role as
            minimum technical components necessary for the operational
            enablement of Federations.
          </p>

          <p>
            GXFS has undergone a transition to the governance of the Eclipse
            Foundation, where the community actively engages in the
            collaborative development and continuous improvement of open-source
            services, now operating under the name XFSC as a community project.
          </p>

          <p>
            You can find the main website for GXFS, along with all activities,
            publications, updates, documentation, and key project information,
            here :{" "}
            <Link to="https://www.gxfs.eu/" target="_blank">
              https://www.gxfs.eu/
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
