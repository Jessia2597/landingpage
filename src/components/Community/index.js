import React from "react";
import styles from "./styles.module.scss";

const CommunityComp = () => {
  return (
    <div className={styles.commuintyContainer}>
      <div className="container">
        <h2 className="page-title">Join the Eclipse XFSC Community! </h2>

        <div className={styles.commuintyBody}>
          <p>
            Become part of an innovative open-source project shaping the future
            of technology. Collaborate with experts, grow your skills, and make
            a real impact. Let's build the future together!
          </p>

          <h3 className="sub-header">Communication rules</h3>

          <p>
            A pre-requisite for joining the Eclipse XFSC communication channels
            is an{" "}
            <a
              href="https://accounts.eclipse.org/user/register?destination=user"
              target="_blank"
            >
              Eclipse Foundation Account.
            </a>
          </p>

          <p>
            In addition, we encourage you to sign the{" "}
            <a href="https://www.eclipse.org/legal/eca/" target="_blank">
              Eclipse Contribution Agreement (ECA)
            </a>{" "}
            to contribute to our Eclipse XFSC project. For example, report and
            fix bugs or implement enhancements according to the Eclipse XFSC
            roadmap. <a href="/developer-guide">See our contributing guide.</a>
          </p>

          <ul>
            <li>
              - For initial contact, please use our XFSC mailing list:{" "}
              <a
                href="https://projects.eclipse.org/projects/technology.xfsc/contact"
                target="_blank"
              >
                XFSC Mailing List
              </a>{" "}
              This is the best way to reach out to our community or connect with
              a specific product team you’d like to contribute to.
            </li>
            <li>
              - For quick, informal discussions, questions, or sharing small
              pieces of information, join our Eclipse Matrix Space:{" "}
              <a
                href="https://matrix.to/#/!flmTthUebPfZFnEyxM:matrix.org?via=vereign.com&via=matrix.org&via=dataport.modular.im"
                target="_blank"
              >
                XFSC General Chat Room / Matrix
              </a>
            </li>
            <li>
              - For general inquiries, please contact us at{" "}
              <a href="mailto:info@gxfs.de" target="_blank">
                info@gxfs.de
              </a>{" "}
              or reach out to the project lead, Lauresha Memeti, at{" "}
              <a href="mailto:lauresha.memeti@eco.de." target="_blank">
                lauresha.memeti@eco.de.
              </a>
            </li>
          </ul>

          <h3 className="sub-header">Open meetings</h3>

          <p>
            Community Matrix channel:{" "}
            <a
              href="https://app.element.io/#/room/!flmTthUebPfZFnEyxM:matrix.org"
              target="_blank"
            >
              the XFSC Developers' Community Chat{" "}
            </a>
          </p>

          <p>
            Catalogue WG call:{" "}
            <a
              href="https://gitlab.eclipse.org/eclipse/xfsc/cat/fc-service/-/wikis/XFSC-Catalogue-Developers'-Community-Call-Meetings"
              target="_blank"
            >
              https://gitlab.eclipse.org/eclipse/xfsc/cat/fc-service/-/wikis/XFSC-Catalogue-Developers'-Community-Call-Meetings
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityComp;
