import { firebase } from '@react-native-firebase/app';

/**
 * Firebase is auto-initialized by native config.
 * This file exists to:
 * - ensure import consistency
 * - allow future expansion
 */
export const isFirebaseReady = (): boolean => {
  return firebase.apps.length > 0;
};
