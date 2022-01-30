import React, { useMemo, CSSProperties, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mermaid from "mermaid";

import "./index.css";

import { Block, Table } from "./blocks";

mermaid.initialize({
  startOnLoad: true,
});

const Mermaid = ({ chart }) => {
  const [initial] = useState(chart);
  //let node;
  //   useEf    fect(() => {
  //     console.log("useEffect", chart);

  //     // mermaid.init(node);
  //     // mermaid.parse(chart);
  //     // mermaid.contentLoaded();
  //     // //   mermaid.contentLoaded();
  //     // mermaid.initialize({});
  //     // mermaid.contentLoaded();
  //   }, [chart]);
  //   const init = (e) => {
  //     console.log("node", e);

  //     if (e) {
  //       node = e;
  //       //  mermaid.init(e);
  //       // mermaid.parse(chart);

  //       //mermaid.contentLoaded();
  //     }
  //   };
  return <div className="mermaid">{chart}</div>;
};

const Acteurs = ({ Acteurs }) => (
  <Block
    style={{
      backgroundColor: "rgb(95, 74, 121)",
      ...styleBigBlock,
    }}
    title="Projet - acteurs"
  >
    <Block title="Nom du produit">{Acteurs.NomProjet}</Block>
    <Block title="Contexte  du projet">
      <ul>
        {Acteurs.ContexteProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </Block>
    <Block title="Objectifs du produit">
      <ul>
        {Acteurs.ObjectifsProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </Block>
    <Block title="Enjeux du produit">
      <ul>
        {Acteurs.EnjeuxProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </Block>
    <Block title="Planning produit">
      <Table title="Planning" data={Acteurs.PlanningProjet} />
    </Block>
    <Block title="Acteurs du Produit">
      <Table title="Acteurs" data={Acteurs.ActeursProjet} />
    </Block>
    <Block title="Acteurs métiers du Produit">
      <Table title="Acteurs" data={Acteurs.ActeursMetier} />
    </Block>
  </Block>
);

const Fonctionnalites = ({ Fonctionnalites }) => (
  <Block
    style={{
      backgroundColor: "rgb(119, 145, 65)",
      ...styleBigBlock,
    }}
    title="Fonctionnalites - Données"
  >
    <Table
      title="Fonctionnalites"
      data={Fonctionnalites.FonctionnalitesApplicatif}
    />

    <Table title="Fonctionnalites" data={Fonctionnalites.ReferentielsDonnees} />

    <Block title="Sensibilité des données dans le SI">
      <Table title="Fonctionnalites" data={Fonctionnalites.SensibiliteHaut} />
      <Table title="Fonctionnalites" data={Fonctionnalites.SensibiliteMoyen} />
      <Table title="Fonctionnalites" data={Fonctionnalites.SensibiliteBas} />
    </Block>
    <Table title="ServicesConnexes" data={Fonctionnalites.ServicesConnexes} />
  </Block>
);

const Contraintes = ({ Contraintes }) => (
  <Block
    style={{
      backgroundColor: "rgb(225, 108, 34)",
      ...styleBigBlock,
    }}
    title="Contraintes - Volumétrie"
  >
    <Block title="Contraintes légales">
      <ul>
        {Contraintes.ContraintesLegales.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </Block>
    <Block title="Contraintes métiers">
      <ul>
        {Contraintes.ContraintesMetier.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </Block>
    <Block title="Normes & règles à respecter">
      <Table title="Acteurs" data={Contraintes.NormesRegles} />
    </Block>
    <Block title="Dépendances avec d'autres SI">
      <Table title="Acteurs" data={Contraintes.DependancesSI} />
    </Block>
    <Block title="Dépendances avec le poste de travail">
      <Table title="Acteurs" data={Contraintes.DependancesP2T} />
    </Block>
    <Block title="Volumétrie données du SI">
      <Table title="Acteurs" data={Contraintes.VolumetrieDonnees} />
    </Block>
    <Block title="Volumétrie fichiers du SI">
      <Table title="Acteurs" data={Contraintes.VolumetrieFichiers} />
    </Block>
    <Block title="Réduction volumétrie données & fichiers du SI">
      <Table title="Acteurs" data={Contraintes.ReductionVolumetrie} />
    </Block>
  </Block>
);

const Exigences = ({ Exigences }) => (
  <Block
    style={{
      backgroundColor: "rgb(146, 55, 54)",
      ...styleBigBlock,
    }}
    title="Exigences non fonctionnelles"
  >
    <Block title="Exigences de sécurité">
      <Table title="DICT" data={Exigences.DICT} />
      <Table title="EBIOS-AIPD" data={Exigences.EBIOSAIPD} />
    </Block>

    <Block title="Période de service">
      <Table title="Periode Service" data={Exigences.PeriodeService} />
      <Table
        title="Periode Service Charge"
        data={Exigences.PeriodeServiceCharge}
      />
    </Block>

    <Block title="Garantie de service">
      <Table title="Garantie de service" data={Exigences.GartantieService} />
      <Table
        title="Garantie de service Impact"
        data={Exigences.GarantieServiceImpact}
      />
    </Block>

    <Block title="Performance">
      <Table title="Performance" data={Exigences.Performance} />
    </Block>

    <Block title="Exploitabilité">
      <Table title="Exploitabilité" data={Exigences.Exploitabilité} />
      <Table
        title="Exploitabilité Impacts"
        data={Exigences.ExploitabiliteImpact}
      />
    </Block>
  </Block>
);

const styleBigBlock = {
  color: "white",
  fontWeight: "bold",
  fontSize: "1.4em",
};

const SchemaArchitecture = ({ SchemaArchitecture }) => (
  <Block
    style={{
      backgroundColor: "rgb(74, 68, 43)",
      ...styleBigBlock,
    }}
    title="Schémas d'architecture"
  >
    <Block title="Architecture Acteurs & Processus">
      <Mermaid chart={SchemaArchitecture.ArchiActeurProcessus} />
    </Block>
    <Block title="Architecture fonctionnelle">
      <Mermaid chart={SchemaArchitecture.ArchiFonctionnel} />
    </Block>

    <Block title="Architecture applicative">
      <Mermaid chart={SchemaArchitecture.ArchiApplicative} />
    </Block>

    <Block title="Architecture technique">
      <Mermaid chart={SchemaArchitecture.ArchiTechnique} />
    </Block>
  </Block>
);

const ServeursComposants = ({ ServeursComposants }) => (
  <Block
    style={{ backgroundColor: "rgb(74, 68, 43)", ...styleBigBlock }}
    title="Serveurs & Composants applicatifs"
  >
    <Block title="Serveur 1">
      <Table
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur1.RessourcesServeur1}
      />
      <Table
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur1.Serveur1Composants}
      />
    </Block>
    <Block title="Serveur 2">
      <Table
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur2.RessourcesServeur2}
      />
      <Table
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur2.Serveur2Composants}
      />
    </Block>
  </Block>
);

const MatricesFlux = ({ MatriceFlux }) => (
  <Block
    style={{ backgroundColor: "rgb(74, 68, 43)", ...styleBigBlock }}
    title="Matrices des flux applicatifs & système"
  >
    <Block title="Matrices de flux applicative">
      <Table
        title="Matrice de flux produit"
        data={MatriceFlux.MatriceFluxProduit}
      />
    </Block>
    <Block title="Matrices de flux plateforme">
      <Table
        title="Matrice de flux plateforme"
        data={MatriceFlux.MatriceFluxPlateforme}
      />
    </Block>
  </Block>
);

const UrlCertificats = ({ UrlCertificats }) => (
  <Block
    style={{ backgroundColor: "rgb(74, 68, 43)", ...styleBigBlock }}
    title="URLs & Certificats"
  >
    <Block title="PRODUCTION">
      <Block title="URL 1">
        <Table
          title="URL de Production"
          data={UrlCertificats.PRODURL1.PRODURL1DATA}
        />
        <Table
          title="URL de Production"
          data={UrlCertificats.PRODURL1.PRODURL1Setting}
        />
      </Block>
      <Block title="URL 2">
        <Table
          title="URL de Production"
          data={UrlCertificats.PRODURL2.PRODURL2DATA}
        />
        <Table
          title="URL de Production"
          data={UrlCertificats.PRODURL2.PRODURL2Setting}
        />
      </Block>
    </Block>
  </Block>
);

const Sauvegarde = ({ Sauvegarde }) => (
  <Block
    style={{ backgroundColor: "rgb(74, 68, 43)", ...styleBigBlock }}
    title="Sauvegarde"
  >
    <Block title="Sauvegarde PRODUCTION  quotidienne">
      <Table
        title="Schéma acteurs & processus"
        data={Sauvegarde.SauvegardePRODQuotidienne}
      />
    </Block>
  </Block>
);

const Documentations = ({ Documentations }) => (
  <Block
    style={{ backgroundColor: "rgb(74, 68, 43)", ...styleBigBlock }}
    title="Documentations"
  >
    <Table title="Schéma acteurs & processus" data={Documentations} />
  </Block>
);

const Lifecycle = ({ Lifecycle }) => (
  <Block
    style={{ backgroundColor: "rgb(74, 68, 43)", ...styleBigBlock }}
    title="Cycle de vie"
  >
    <Table title="Observation MOE" data={Lifecycle} />
  </Block>
);

// type DatParams = {
//   DAT: Root;
// };
export const Dat = ({ DAT }) => {
  return (
    <div className="App">
      <SchemaArchitecture {...DAT} />

      <Acteurs {...DAT} />
      <Fonctionnalites {...DAT} />
      <Contraintes {...DAT} />
      <Exigences {...DAT} />

      <ServeursComposants {...DAT} />
      <MatricesFlux {...DAT} />
      <UrlCertificats {...DAT} />

      <Sauvegarde {...DAT} />

      <Documentations {...DAT} />
      <Lifecycle {...DAT} />
    </div>
  );
};
