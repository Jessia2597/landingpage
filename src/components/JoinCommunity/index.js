import React from "react";
import IconDeveloper from "@site/static/img/xfsc_developer_icon.png";
import IconCommunity from "@site/static/img/xfcs_community_icon.png";
import IconAboutXfsc from "@site/static/img/xfsc_opensource.png";
import IconService from "@site/static/img/xfsc_services.png";
import styles from "./styles.module.scss";
import Link from "@docusaurus/Link";

const CommunityList = [
  {
    id: 1,
    title: "Developer Guide",
    icon: IconDeveloper,
    link: "/developer-guide",
  },
  {
    id: 2,
    title: "XFSC Community",
    icon: IconCommunity,
    link: "/community",
  },
  {
    id: 3,
    title: "About XFSC",
    icon: IconAboutXfsc,
    link: "/about",
  },
  {
    id: 4,
    title: "XFSC Toolbox",
    icon: IconService,
    link: "/xfsc-toolbox",
  },
];

const JoinCommunity = () => {
  return (
    <div className={styles.communityContainer}>
      <div className={styles.textSection}>
        <h2>JOIN THE COMMUNITY.</h2>
      </div>

      <div className={styles.communityListContainer}>
        <ul>
          {CommunityList.map((list) => {
            return (
              <li key={list.id}>
                <Link to={list.link}>
                  <img src={list.icon} />
                  <h4>{list.title}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default JoinCommunity;
