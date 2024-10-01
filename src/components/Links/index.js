import React from "react";
import webIcon from "@site/static/img/globe.png";
import repoIcon from "@site/static/img/folder-open.png";
import mailIcon from "@site/static/img/envelope.png";
import chatIcon from "@site/static/img/comment.png";
import styles from "./styles.module.scss";

const LinksComp = () => {
  return (
    <div className={styles.linksContainer}>
      <div className="container">
        <h2 className="page-title">Project Links</h2>

        <div className={styles.linkBody}>
          <div className={styles.bodyLeftSection}>
            <p>
              Here are all the important links related to the Eclipse Foundation
              and the XFSC project:
            </p>

            <h3 className="sub-header">Eclipse XFSC Project</h3>

            <ul>
              <li>
                Eclipse XFSC Project{" "}
                <a
                  href="https://projects.eclipse.org/projects/technology.xfsc"
                  target="_blank"
                >
                  https://projects.eclipse.org/projects/technology.xfsc
                </a>
              </li>
              <li>
                Eclipse GitLab Repository :{" "}
                <a
                  href="https://gitlab.eclipse.org/eclipse/xfsc"
                  target="_blank"
                >
                  {" "}
                  https://gitlab.eclipse.org/eclipse/xfsc
                </a>
              </li>
              <li>
                XFSC Mailing List:{" "}
                <a
                  href="https://projects.eclipse.org/projects/technology.xfsc/contact"
                  target="_blank"
                >
                  {" "}
                  https://projects.eclipse.org/projects/technology.xfsc/contact
                </a>
              </li>
              <li>
                XFSC General Chat Room / Matrix :
                <a
                  href="https://matrix.to/#/!flmTthUebPfZFnEyxM:matrix.org?via=vereign.com&via=matrix.org&via=dataport.modular.im"
                  target="_blank"
                >
                  {" "}
                  https://matrix.to/#/!flmTthUebPfZFnEyxM:matrix.org?via=vereign.com&via=matrix.org&via=dataport.modular.im
                </a>
              </li>
            </ul>

            <h3 className="sub-header">Eclipse Foundation Documentation</h3>

            <ul>
              <li>
                <a
                  href="https://www.eclipse.org/projects/handbook/"
                  target="_blank"
                >
                  https://www.eclipse.org/projects/handbook/
                </a>
              </li>
              <li>
                <a
                  href="https://www.eclipse.org/projects/dev_process/"
                  target="_blank"
                >
                  https://www.eclipse.org/projects/dev_process/
                </a>
              </li>
              <li>
                <a
                  href="https://www.eclipse.org/org/documents/"
                  target="_blank"
                >
                  https://www.eclipse.org/org/documents/
                </a>
              </li>
              <li>
                <a href="https://www.eclipse.org/legal/" target="_blank">
                  https://www.eclipse.org/legal/
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/eclipse/dash-licenses"
                  target="_blank"
                >
                  https://github.com/eclipse/dash-licenses
                </a>
              </li>
            </ul>

            <h3 className="sub-header">Eclipse Trainigs & Events</h3>

            <ul>
              <li>
                <a
                  href="https://www.eclipse.org/projects/training/"
                  target="_blank"
                >
                  https://www.eclipse.org/projects/training/
                </a>
              </li>
              <li>
                <a
                  href="https://www.eclipse.org/projects/calendar/#office-hours"
                  target="_blank"
                >
                  https://www.eclipse.org/projects/calendar/#office-hours
                </a>
              </li>
              <li>
                <a href="https://www.eclipsecon.org/" target="_blank">
                  https://www.eclipsecon.org/
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.bodyRightSection}>
            <div className={styles.box}>
              <h3>Project Links</h3>

              <ul>
                <li>
                  <a href="https://www.gxfs.eu/" target="_blank">
                    <img src={webIcon} />
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.eclipse.org/eclipse/xfsc"
                    target="_blank"
                  >
                    <img src={repoIcon} />
                    Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://projects.eclipse.org/projects/technology.xfsc/contact"
                    target="_blank"
                  >
                    <img src={mailIcon} />
                    Mailing List
                  </a>
                </li>
                <li>
                  <a
                    href="https://matrix.to/#/!flmTthUebPfZFnEyxM:matrix.org?via=vereign.com&via=matrix.org&via=dataport.modular.im"
                    target="_blank"
                  >
                    <img src={chatIcon} />
                    Chat Room
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksComp;
