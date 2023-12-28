import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { useState } from "react";
import { AllItem } from "@site/src/data";

interface Children {
  title: string;
  icon: React.FC;
  url: string;
}

interface FeatureList {
  title: string;
  smallTitle: string;
  url: string;
  icon: React.FC;
  children?: Children[];
}
function Feature(props: FeatureList) {
  const { title, smallTitle, url, icon: Icon } = props;

  const handleOpen = (url: string) => {
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <div className={clsx("col col--4 pointer")} onClick={() => handleOpen(url)}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{smallTitle}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [featureList] = useState<FeatureList[]>(AllItem);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props: FeatureList, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}