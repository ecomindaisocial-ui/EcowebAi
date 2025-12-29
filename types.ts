export type Language = 'pt' | 'en' | 'es';

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  whatsapp: {
    title: string;
    description: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  inclusion: {
    title: string;
    subtitle: string;
    description: string;
    featureVoice: { title: string; desc: string };
    featureImage: { title: string; desc: string };
    featureAudioResponse: { title: string; desc: string };
  };
  origin: {
    title: string;
    text: string;
  };
  howItWorks: {
    title: string;
    steps: {
      collect: { title: string; desc: string };
      analyze: { title: string; desc: string };
      deliver: { title: string; desc: string };
    };
  };
  awards: {
    title: string;
    febic: string;
    fecitec: string;
    femic: string;
    officialSite: string;
  };
  impact: {
    title: string;
    social: string;
    eco: string;
    economic: string;
  };
  useCases: {
    title: string;
    agri: string;
    edu: string;
    policy: string;
  };
}