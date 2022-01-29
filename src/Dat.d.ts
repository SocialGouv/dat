declare module "Dat";

export interface Root {
  Acteurs: Acteurs;
  Fonctionnalites: Fonctionnalites;
  Contraintes: Contraintes;
  Exigences: Exigences;
  SchemaArchitecture: SchemaArchitecture;
  ServeursComposants: ServeursComposants;
  MatriceFlux: MatriceFlux;
  UrlCertificats: UrlCertificats;
  Sauvegarde: Sauvegarde;
  Supervision: Supervision[];
  Documentations: Documentation[];
  Lifecycle: Lifecycle[];
}

export interface Acteurs {
  NomProjet: string[];
  ContexteProjet: string[];
  ObjectifsProjet: string[];
  EnjeuxProjet: string[];
  PlanningProjet: PlanningProjet[];
  ActeursProjet: ActeursProjet[];
  ActeursMetier: ActeursMetier[];
}

export interface PlanningProjet {
  Version: string;
  Date: string;
  Description: string;
}

export interface ActeursProjet {
  Rôle: string;
  Nom: string;
  Entite: string;
}

export interface ActeursMetier {
  "Profils Utilisateurs": string;
  MCAS: any;
  RIE: string;
  EXT: string;
  PUB: string;
}

export interface Fonctionnalites {
  FonctionnalitesApplicatif: FonctionnalitesApplicatif[];
  ReferentielsDonnees: ReferentielsDonnee[];
  SensibiliteHaut: SensibiliteHaut[];
  SensibiliteMoyen: SensibiliteMoyen[];
  SensibiliteBas: SensibiliteBa[];
  ServicesConnexes: ServicesConnex[];
}

export interface FonctionnalitesApplicatif {
  Fonctionnalités: string;
  MCAS: boolean;
  RIE: any;
  EXT: any;
  PUB: any;
}

export interface ReferentielsDonnee {
  "Référentiel de données": string;
  "Mode d'échange": string;
  MCAS: boolean;
  RIE: string;
  EXT: string;
  PUB: string;
}

export interface SensibiliteHaut {
  "Très sensible": string;
  "": string;
}

export interface SensibiliteMoyen {
  Sensible: string;
  "": string;
}

export interface SensibiliteBa {
  Public: string;
  "": string;
}

export interface ServicesConnex {
  "Service utilisé": string;
  "Mode d'échange": string;
  MCAS: any;
  RIE: string;
  EXT: any;
  PUB: string;
}

export interface Contraintes {
  ContraintesLegales: ContraintesLegale[];
  ContraintesMetier: ContraintesMetier[];
  NormesRegles: NormesRegle[];
  DependancesSI: DependancesSi[];
  DependancesP2T: DependancesP2T[];
  VolumetrieDonnees: VolumetrieDonnee[];
  VolumetrieFichiers: VolumetrieFichier[];
  ReductionVolumetrie: ReductionVolumetrie[];
}

export interface ContraintesLegale {
  "": string;
}

export interface ContraintesMetier {
  "": string;
}

export interface NormesRegle {
  Sigle: string;
  Description: string;
}

export interface DependancesSi {
  NomSI: string;
  Fournisseur: boolean;
  Consommateur: boolean;
}

export interface DependancesP2T {
  Composant: string;
  Description: string;
}

export interface VolumetrieDonnee {
  Information: string;
  Valeur: string;
}

export interface VolumetrieFichier {
  Information: string;
  Valeur: string;
}

export interface ReductionVolumetrie {
  Information: string;
  Valeur: boolean;
}

export interface Exigences {
  DICT: Dict[];
  EBIOSAIPD: Ebiosaipd[];
  PeriodeService: PeriodeService[];
  PeriodeServiceCharge: PeriodeServiceCharge[];
  GartantieService: GartantieService[];
  GarantieServiceImpact: GarantieServiceImpact[];
  Performance: Performance[];
  Exploitabilité: Exploitabilit[];
  ExploitabiliteImpact: ExploitabiliteImpact[];
}

export interface Dict {
  NEROS: string;
  Objectifs: string;
}

export interface Ebiosaipd {
  Document: string;
  Lien: string;
}

export interface PeriodeService {
  Période: string;
  Début: string;
  Fin: string;
  NBC: string;
  NBS: string;
}

export interface PeriodeServiceCharge {
  Description: string;
  "": string;
}

export interface GartantieService {
  Application: string;
  Produit: string;
  Standard: string;
}

export interface GarantieServiceImpact {
  Impact: string;
  Description: string;
}

export interface Performance {
  "Temps de Reponse": string;
  Standard: string;
  Charge: string;
}

export interface Exploitabilit {
  Batch: string;
  Plage: string;
  Fréquence: string;
  "Impact Métier": string;
  "Impact Charge": string;
}

export interface ExploitabiliteImpact {
  Impact: string;
  Description: string;
}

export interface SchemaArchitecture {
  ArchiActeurProcessus: string;
  ArchiFonctionnel: string;
  ArchiApplicative: string;
  ArchiTechnique: string;
}

export interface ServeursComposants {
  Serveur1: Serveur1;
  Serveur2: Serveur2;
}

export interface Serveur1 {
  RessourcesServeur1: RessourcesServeur1[];
  Serveur1Composants: Serveur1Composant[];
}

export interface RessourcesServeur1 {
  Nom: string;
  Type: string;
  Rôle: string;
  CPU: string;
  RAM: string;
  "Taille image": string;
  "HDD Data": string;
}

export interface Serveur1Composant {
  Catégorie: string;
  Composant: string;
  Version: string;
  Rôle: string;
}

export interface Serveur2 {
  RessourcesServeur2: RessourcesServeur2[];
  Serveur2Composants: Serveur2Composant[];
}

export interface RessourcesServeur2 {
  Nom: string;
  Type: string;
  Rôle: string;
  CPU: string;
  RAM: string;
  "Taille image": string;
  "HDD Data": string;
}

export interface Serveur2Composant {
  Catégorie: string;
  Composant: string;
  Version: string;
  Rôle: string;
}

export interface MatriceFlux {
  MatriceFluxProduit: MatriceFluxProduit[];
  MatriceFluxPlateforme: MatriceFluxPlateforme[];
}

export interface MatriceFluxProduit {
  "N° flux": string;
  Source: string;
  Destination: string;
  Port?: string;
  Protocole: string;
  Commentaire: string;
  PortFlux?: string;
}

export interface MatriceFluxPlateforme {
  "N° flux": string;
  Source: string;
  Destination: string;
  Port: string;
  Protocole: string;
  Commentaire: string;
}

export interface UrlCertificats {
  PRODURL1: Produrl1;
  PRODURL2: Produrl2;
}

export interface Produrl1 {
  PRODURL1DATA: Produrl1Data[];
  PRODURL1Setting: Produrl1Setting[];
}

export interface Produrl1Data {
  URL: string;
  "Nom alternatif": string;
  "Equipement portant l'URL": string;
}

export interface Produrl1Setting {
  Usage: string;
  SSL: string;
  "Type certificat": string;
  VIP: string;
  "LB | RP": string;
  "Terminaison SSL": string;
}

export interface Produrl2 {
  PRODURL2DATA: Produrl2Data[];
  PRODURL2Setting: Produrl2Setting[];
}

export interface Produrl2Data {
  URL: string;
  "Nom alternatif": string;
  "Equipement portant l'URL": string;
}

export interface Produrl2Setting {
  Usage: string;
  SSL: string;
  "Type certificat": string;
  VIP: string;
  "LB | RP": string;
  "Terminaison SSL": string;
}

export interface Sauvegarde {
  SauvegardePRODQuotidienne: SauvegardeProdquotidienne[];
}

export interface SauvegardeProdquotidienne {
  Volume: string;
  Type: string;
  Rétention: string;
}

export interface Supervision {
  "Nom du serveur": string;
  Spécifique: string;
}

export interface Documentation {
  Typologie: string;
  Emplacement: string;
}

export interface Lifecycle {
  Date: string;
  Entité: string;
  Observation: string;
}
