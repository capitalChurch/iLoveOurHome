export type Language = 'pt' | 'en';

export interface LanguageResource {
  titleBrowser: string;
  menu:{
    home: string;
    getInvolved: string;
    tent: string;
    howMuchIsMissing: string;
    offer: string;
    contact: string;
  };

  iLoveMyHome:{
    title: string;
    instagram: string;
    facebook: string;
    twitter: string;
  };

  video: {
    title: string;
    link: string;
  };

  loveOffer: {
    title: string;
    text: string;
    getInvolved: string;
  };

  tentHistory: {
    title: string;
    text: string;
  };

  howMuchIsMissing: {
    title: string;
    hourGoal: string;
    text: string;
  };

  offer: {
    button: string;
    text: string;
  };

  contactUs: {
    title: string;
    phoneNumber: string;
    email: string;
  };

  footer: {
    churchName: string;
  }
}
