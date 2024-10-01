import Link from "@docusaurus/Link";
import JoinCommunity from "../JoinCommunity";
import XfscServices from "../XfscService";
import styles from "./styles.module.scss";

const HomepageFeatures = () => {
  return (
    <section>
      <div className={styles.homeContainer}>
        <div className={styles.homeTextcontainer}>
          <h1>Welcome to the Eclipse XFSC Developer Hub!</h1>
          <p>
            Dive into our open-source playground where you’ll find everything
            you need to get started with Eclipse XFSC. Discover how XFSC’s
            integration with the Eclipse Foundation empowers innovation, and get
            the scoop on contributing, collaborating, and releasing software
            within our ecosystem.
          </p>

          <p>
            Got questions or eager to connect with fellow developers? Check out
            the <Link to="/community">Community</Link> page. It’s your portal to
            engaging with our project, tapping into our collective knowledge,
            and exploring opportunities to shape the future of technology
            together.
          </p>

          <p>
            Jump into the Eclipse XFSC community and let’s build the next
            generation of tech!
          </p>
        </div>

        <div className={styles.disclaimerSection}>
          <h2>Disclaimer</h2>

          <div className={styles.gridBox}>
            <div>
              <h3>Foreword</h3>

              <p>
                This website acts as a summary of elements deemed useful for the
                day-to-day activity and maintenance of the project for your
                convenience. It does not replace the Eclipse Project Handbook,
                which is the ultimate reference document.
              </p>
            </div>

            <div>
              <h3>Objective</h3>

              <p>
                The purpose of this website is to delineate the procedures for
                establishing new project repositories on a per-lot.
                Additionally, it will offer guidance on the process of becoming
                a contributor, onboarding procedures, and distinguishing between
                various contribution roles.
              </p>
            </div>
          </div>

          <Link
            to="https://projects.eclipse.org/projects/technology.xfsc"
            target="_blank"
            className="primaryBtn"
          >
            About XFSC
          </Link>
        </div>
      </div>
      <JoinCommunity />

      <XfscServices />
    </section>
  );
};

export default HomepageFeatures;
