import React, { useMemo, CSSProperties, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mermaid from "mermaid";

import "./Dat.css";

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

const BlocTexte = ({ title, children }) => (
  <table
    className="pure-table"
    style={{
      padding: 10,
      margin: 5,
      background: "#e6e0eb",
      width: "100%",
      textAlign: "left",
    }}
  >
    <thead>
      <tr>
        <th>{title}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{children}</td>
      </tr>
    </tbody>
  </table>
);

const BlocTitle = ({
  title,
  backgroundColor = "rgb(199, 145, 65)",
  children,
}) => (
  <div
    style={{ border: `1px solid ${backgroundColor}`, margin: 5 }}
    className="pure-u-1 "
  >
    <div
      style={{
        background: backgroundColor,
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white",
      }}
    >
      {title}
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>{children}</div>
  </div>
);

const formatCell = (value) => {
  if (value === true) {
    return "✔";
  } else if (value === false) {
    return "🚫";
  } else {
    return value;
  }
};

const getTdStyle = (key, value): CSSProperties => {
  if (value === true || value === false) {
    return {
      textAlign: "center",
    };
  }
};

const BlocTableau = ({ title, data }) => {
  const keys =
    data && data.length && typeof data[0] === "object"
      ? Object.keys(data[0])
      : [];
  return (
    <table
      className="pure-table pure-table-bordered"
      style={{
        padding: 10,
        margin: 5,
        background: "#e6e0eb",
        width: "100%",
        textAlign: "left",
      }}
    >
      <thead>
        <tr>
          {keys.map((k, i) => (
            <th
              key={k + "" + i}
              style={getTdStyle(k, data.length && data[0][k])}
            >
              {k}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map &&
          data.map((row, i) => (
            <tr key={i}>
              {keys.map((k, j) => (
                <td key={row[k] + "" + j} style={getTdStyle(k, row[k])}>
                  {formatCell(row[k])}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const Acteurs = ({ Acteurs }) => (
  <BlocTitle backgroundColor="rgb(95, 74, 121)" title="Projet - acteurs">
    <BlocTexte title="Nom du produit">{Acteurs.NomProjet}</BlocTexte>
    <BlocTexte title="Contexte  du projet">
      <ul>
        {Acteurs.ContexteProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </BlocTexte>
    <BlocTexte title="Objectifs du produit">
      <ul>
        {Acteurs.ObjectifsProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </BlocTexte>
    <BlocTexte title="Enjeux du produit">
      <ul>
        {Acteurs.EnjeuxProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </BlocTexte>
    <BlocTexte title="Planning produit">
      <BlocTableau title="Planning" data={Acteurs.PlanningProjet} />
    </BlocTexte>
    <BlocTexte title="Acteurs du Produit">
      <BlocTableau title="Acteurs" data={Acteurs.ActeursProjet} />
    </BlocTexte>
    <BlocTexte title="Acteurs métiers du Produit">
      <BlocTableau title="Acteurs" data={Acteurs.ActeursMetier} />
    </BlocTexte>
  </BlocTitle>
);

const Fonctionnalites = ({ Fonctionnalites }) => (
  <BlocTitle
    backgroundColor="rgb(119, 145, 65)"
    title="Fonctionnalites - Données"
  >
    <BlocTableau
      title="Fonctionnalites"
      data={Fonctionnalites.FonctionnalitesApplicatif}
    />

    <BlocTableau
      title="Fonctionnalites"
      data={Fonctionnalites.ReferentielsDonnees}
    />

    <BlocTexte title="Sensibilité des données dans le SI">
      <BlocTableau
        title="Fonctionnalites"
        data={Fonctionnalites.SensibiliteHaut}
      />
      <BlocTableau
        title="Fonctionnalites"
        data={Fonctionnalites.SensibiliteMoyen}
      />
      <BlocTableau
        title="Fonctionnalites"
        data={Fonctionnalites.SensibiliteBas}
      />
    </BlocTexte>
    <BlocTableau
      title="ServicesConnexes"
      data={Fonctionnalites.ServicesConnexes}
    />
  </BlocTitle>
);

const Contraintes = ({ Contraintes }) => (
  <BlocTitle
    backgroundColor="rgb(225, 108, 34)"
    title="Contraintes - Volumétrie"
  >
    <BlocTexte title="Contraintes légales">
      <BlocTableau title="Acteurs" data={Contraintes.ContraintesLegales} />
    </BlocTexte>
    <BlocTexte title="Contraintes métiers">
      <BlocTableau title="Acteurs" data={Contraintes.ContraintesMetier} />
    </BlocTexte>
    <BlocTexte title="Normes & règles à respecter">
      <BlocTableau title="Acteurs" data={Contraintes.NormesRegles} />
    </BlocTexte>
    <BlocTexte title="Dépendances avec d'autres SI">
      <BlocTableau title="Acteurs" data={Contraintes.DependancesSI} />
    </BlocTexte>
    <BlocTexte title="Dépendances avec le poste de travail">
      <BlocTableau title="Acteurs" data={Contraintes.DependancesP2T} />
    </BlocTexte>
    <BlocTexte title="Volumétrie données du SI">
      <BlocTableau title="Acteurs" data={Contraintes.VolumetrieDonnees} />
    </BlocTexte>
    <BlocTexte title="Volumétrie fichiers du SI">
      <BlocTableau title="Acteurs" data={Contraintes.VolumetrieFichiers} />
    </BlocTexte>
    <BlocTexte title="Réduction volumétrie données & fichiers du SI">
      <BlocTableau title="Acteurs" data={Contraintes.ReductionVolumetrie} />
    </BlocTexte>
  </BlocTitle>
);

const Exigences = ({ Exigences }) => (
  <BlocTitle
    backgroundColor="rgb(146, 55, 54)"
    title="Exigences non fonctionnelles"
  >
    <BlocTexte title="Exigences de sécurité">
      <BlocTableau title="DICT" data={Exigences.DICT} />
      <BlocTableau title="EBIOS-AIPD" data={Exigences.EBIOSAIPD} />
    </BlocTexte>

    <BlocTexte title="Période de service">
      <BlocTableau title="Periode Service" data={Exigences.PeriodeService} />
      <BlocTableau
        title="Periode Service Charge"
        data={Exigences.PeriodeServiceCharge}
      />
    </BlocTexte>

    <BlocTexte title="Garantie de service">
      <BlocTableau
        title="Garantie de service"
        data={Exigences.GartantieService}
      />
      <BlocTableau
        title="Garantie de service Impact"
        data={Exigences.GarantieServiceImpact}
      />
    </BlocTexte>

    <BlocTexte title="Performance">
      <BlocTableau title="Performance" data={Exigences.Performance} />
    </BlocTexte>

    <BlocTexte title="Exploitabilité">
      <BlocTableau title="Exploitabilité" data={Exigences.Exploitabilité} />
      <BlocTableau
        title="Exploitabilité Impacts"
        data={Exigences.ExploitabiliteImpact}
      />
    </BlocTexte>
  </BlocTitle>
);

const SchemaArchitecture = ({ SchemaArchitecture }) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Schémas d'architecture">
    <BlocTitle title="Architecture Acteurs & Processus">
      <Mermaid chart={SchemaArchitecture.ArchiActeurProcessus} />
    </BlocTitle>
    <BlocTitle title="Architecture fonctionnelle">
      <Mermaid chart={SchemaArchitecture.ArchiFonctionnel} />
    </BlocTitle>

    <BlocTitle title="Architecture applicative">
      <Mermaid chart={SchemaArchitecture.ArchiApplicative} />
    </BlocTitle>

    <BlocTitle title="Architecture technique">
      <Mermaid chart={SchemaArchitecture.ArchiTechnique} />
    </BlocTitle>
  </BlocTitle>
);

const ServeursComposants = ({ ServeursComposants }) => (
  <BlocTitle
    backgroundColor="rgb(74, 68, 43)"
    title="Serveurs & Composants applicatifs"
  >
    <BlocTexte title="Serveur 1">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur1.RessourcesServeur1}
      />
      <BlocTableau
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur1.Serveur1Composants}
      />
    </BlocTexte>
    <BlocTexte title="Serveur 2">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur2.RessourcesServeur2}
      />
      <BlocTableau
        title="Schéma acteurs & processus"
        data={ServeursComposants.Serveur2.Serveur2Composants}
      />
    </BlocTexte>
  </BlocTitle>
);

const MatricesFlux = ({ MatriceFlux }) => (
  <BlocTitle
    backgroundColor="rgb(74, 68, 43)"
    title="Matrices des flux applicatifs & système"
  >
    <BlocTexte title="Matrices de flux applicative">
      <BlocTableau
        title="Matrice de flux produit"
        data={MatriceFlux.MatriceFluxProduit}
      />
    </BlocTexte>
    <BlocTexte title="Matrices de flux plateforme">
      <BlocTableau
        title="Matrice de flux plateforme"
        data={MatriceFlux.MatriceFluxPlateforme}
      />
    </BlocTexte>
  </BlocTitle>
);

const UrlCertificats = ({ UrlCertificats }) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="URLs & Certificats">
    <BlocTexte title="PRODUCTION">
      <BlocTexte title="URL 1">
        <BlocTableau
          title="URL de Production"
          data={UrlCertificats.PRODURL1.PRODURL1DATA}
        />
        <BlocTableau
          title="URL de Production"
          data={UrlCertificats.PRODURL1.PRODURL1Setting}
        />
      </BlocTexte>
      <BlocTexte title="URL 2">
        <BlocTableau
          title="URL de Production"
          data={UrlCertificats.PRODURL2.PRODURL2DATA}
        />
        <BlocTableau
          title="URL de Production"
          data={UrlCertificats.PRODURL2.PRODURL2Setting}
        />
      </BlocTexte>
    </BlocTexte>
  </BlocTitle>
);

const Sauvegarde = ({ Sauvegarde }) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Sauvegarde">
    <BlocTexte title="Sauvegarde PRODUCTION  quotidienne">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={Sauvegarde.SauvegardePRODQuotidienne}
      />
    </BlocTexte>
  </BlocTitle>
);

const Documentations = ({ Documentations }) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Documentations">
    <BlocTableau title="Schéma acteurs & processus" data={Documentations} />
  </BlocTitle>
);

const Lifecycle = ({ Lifecycle }) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Cycle de vie">
    <BlocTableau title="Observation MOE" data={Lifecycle} />
  </BlocTitle>
);

// type DatParams = {
//   DAT: Root;
// };
export const Dat = ({ DAT }) => {
  return (
    <div className="App">
      <Acteurs {...DAT} />
      <Fonctionnalites {...DAT} />
      <Contraintes {...DAT} />
      <Exigences {...DAT} />

      <SchemaArchitecture {...DAT} />

      <ServeursComposants {...DAT} />
      <MatricesFlux {...DAT} />
      <UrlCertificats {...DAT} />

      <Sauvegarde {...DAT} />

      <Documentations {...DAT} />
      <Lifecycle {...DAT} />
    </div>
  );
};
