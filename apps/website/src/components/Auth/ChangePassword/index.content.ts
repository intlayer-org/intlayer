import { type DeclarationContent, t } from 'intlayer';

const changePasswordContent: DeclarationContent = {
  id: 'change-password-form',
  title: t({
    en: 'Change your password',
    fr: 'Changez votre mot de passe',
    es: 'Cambia tu contraseña',
  }),
  description: t({
    en: 'Change your password to access your account.',
    fr: 'Changez votre mot de passe pour accéder à votre compte.',
    es: 'Cambia tu contraseña para acceder a tu cuenta.',
  }),
  currentPasswordInput: {
    label: t({
      en: 'Current password',
      fr: 'Mot de passe actuel',
      es: 'Contraseña actual',
    }),
    placeholder: t({
      en: 'Enter actual password',
      fr: 'Entrez votre mot de passe actuel',
      es: 'Ingresa tu contraseña actual',
    }),
  },
  newPasswordInput: {
    label: t({
      en: 'New password',
      fr: 'Nouveau mot de passe',
      es: 'Nueva contraseña',
    }),
    placeholder: t({
      en: 'Enter new password',
      fr: 'Entrez votre nouveau mot de passe',
      es: 'Ingresa tu nueva contraseña',
    }),
  },
  confirmPasswordInput: {
    label: t({
      en: 'Confirm new password',
      fr: 'Confirmez le nouveau mot de passe',
      es: 'Confirma tu nueva contraseña',
    }),
    placeholder: t({
      en: 'Confirm new password',
      fr: 'Confirmez votre nouveau mot de passe',
      es: 'Confirma tu nueva contraseña',
    }),
  },
  forgotPasswordLink: {
    ariaLabel: t({
      en: 'Click to reset your password',
      fr: 'Cliquez pour réinitialiser votre mot de passe',
      es: 'Haz clic para restablecer tu contraseña',
    }),
    text: t({
      en: 'Forgot password?',
      fr: 'Mot de passe oublié ?',
      es: '¿Olvidaste tu contraseña?',
    }),
  },
  changePasswordButton: {
    text: t({
      en: 'Change password',
      fr: 'Changer le mot de passe',
      es: 'Cambiar la contraseña',
    }),
    ariaLabel: t({
      en: 'Click to change password',
      fr: 'Cliquez pour changer le mot de passe',
      es: 'Haz clic para cambiar la contraseña',
    }),
  },
  backToHomeButton: {
    text: t({
      en: 'Back to home page',
      fr: 'Retour à la page d’accueil',
      es: 'Volver a la página de inicio',
    }),
    ariaLabel: t({
      en: 'Click to go back to the home page',
      fr: 'Cliquez pour revenir à la page d’accueil',
      es: 'Haz clic para volver a la página de inicio',
    }),
  },
};

export default changePasswordContent;
