// Modules
import { logEvent, getAnalytics } from 'firebase/analytics';

// Firebase
import { firebaseApp } from '../credentials';

export default function useAnalytics () {

  const analytics = (typeof window !== 'undefined') 
    ? getAnalytics(firebaseApp) 
    : null;

  const downloadCv = () => {
    if (analytics) {
      logEvent(analytics, 'download_cv')
      console.log('Download CV');
    }
  };
  
  const openLinkedin = () => {
    if (analytics) logEvent(analytics, 'open_linkedin');
  }

  const openGithub = () => {
    if (analytics) logEvent(analytics, 'open_github');
  }

  const openWhatsapp = () => {
    if (analytics) logEvent(analytics, 'open_instagram');
  }

  const openEmail = () => {
    if (analytics) logEvent(analytics, 'open_email');
  }

  return {
    downloadCv,
    openLinkedin,
    openGithub,
    openWhatsapp,
    openEmail
  }

}