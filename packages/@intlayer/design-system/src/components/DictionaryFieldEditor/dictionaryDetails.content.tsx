import { t, type DeclarationContent } from 'intlayer';

export const dictionaryDetailsContent = {
  key: 'dictionary-details',
  content: {
    titleInput: {
      label: t({
        en: 'Title',
        fr: 'Titre',
        es: 'Título',
      }),
      description: t({
        en: 'The title of your dictionary allows you to easily identify it',
        fr: "Le titre de votre dictionnaire permet de l'identifier facilement",
        es: 'El título de su diccionario le permite identificar fácilmente',
      }),
      placeholder: t({
        en: 'Enter the title of your dictionary',
        fr: 'Entrez le titre de votre dictionnaire',
        es: 'Ingrese el título de su diccionario',
      }),
    },
    keyInput: {
      label: t({
        en: 'Key',
        fr: 'Clé',
        es: 'Clave',
      }),
      description: t({
        en: 'The key of your dictionary is used to identify it in the application',
        fr: "La clé de votre dictionnaire est utilisée pour l'identifier dans l'application",
        es: 'La clave de su diccionario se utiliza para identificarla en la aplicación',
      }),
      placeholder: t({
        en: 'Enter the key of your dictionary',
        fr: 'Entrez la clé de votre dictionnaire',
        es: 'Ingrese la clave de su diccionario',
      }),
    },
    descriptionInput: {
      label: t({
        en: 'Description',
        fr: 'Description',
        es: 'Descripción',
      }),
      placeholder: t({
        en: 'Enter the description of your dictionary',
        fr: 'Entrez la description de votre dictionnaire',
        es: 'Ingrese la descripción de su diccionario',
      }),
      description: t({
        en: 'The description of your dictionary allows you to easily identify it using keywords. It is also used to search for your dictionary, and to assist the AI in understanding your dictionary.',
        fr: "La description de votre dictionnaire permet d'identifier facilement l'utilisateur en utilisant des mots-clés. Elle est également utilisée pour rechercher votre dictionnaire et pour aider l'IA à comprendre votre dictionnaire.",
        es: 'La descripción de su diccionario le permite identificar fácilmente el usuario utilizando palabras clave. También se utiliza para buscar su diccionario y para ayudar a la IA a entender su diccionario.',
      }),
    },
    submitButton: {
      text: t({
        en: 'Save changes',
        fr: 'Enregistrer les modifications',
        es: 'Guardar cambios',
      }),
      label: t({
        en: 'Click to save changes',
        fr: 'Cliquez pour enregistrer les modifications',
        es: 'Haga clic para guardar los cambios',
      }),
    },
    updateOrganizationToasts: {
      updated: {
        title: t({
          en: 'Organization updated',
          fr: 'Organisation mise à jour',
          es: 'Organización actualizada',
        }),
        description: t({
          en: 'Your organization has been updated successfully',
          fr: 'Votre organisation a été mise à jour avec succès',
          es: 'Su organización se ha actualizado con éxito',
        }),
      },
      failed: {
        title: t({
          en: 'Organization update failed',
          fr: "La mise à jour de l'organisation a échoué",
          es: 'La actualización de la organización ha fallado',
        }),
      },
    },
  },
} satisfies DeclarationContent;
