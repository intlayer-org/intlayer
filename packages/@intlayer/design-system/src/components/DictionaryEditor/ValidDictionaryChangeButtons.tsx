'use client';

import { Dictionary as DistantDictionary } from '@intlayer/backend';
import type { Dictionary } from '@intlayer/core';
import { ArrowUpFromLine, RotateCcw, Save } from 'lucide-react';
import { useMemo, type FC } from 'react';
import { useDictionary } from 'react-intlayer';
import { usePushDictionaries } from '../../hooks';
import { Form, useForm } from '../Form';
import { useToast } from '../Toaster';
import { useEditedContentStore } from './useEditedContentStore';
import { validDictionaryChangeButtonsContent } from './validDictionaryChangeButtons.content';
import { getValidDictionaryChangeButtonsSchemaSchema } from './validDictionaryChangeButtonsSchema';

type ValidDictionaryChangeButtonsProps = {
  dictionary: Dictionary;
};

export const ValidDictionaryChangeButtons: FC<
  ValidDictionaryChangeButtonsProps
> = ({ dictionary }) => {
  const ValidDictionaryChangeButtonsSchemaSchema =
    getValidDictionaryChangeButtonsSchemaSchema();

  const { resetButton, saveButton, publishButton, updateDictionaryToasts } =
    useDictionary(validDictionaryChangeButtonsContent);

  const { pushDictionaries } = usePushDictionaries();

  const { editedContent, restoreEditedContent } = useEditedContentStore(
    (s) => ({
      editedContent: s.editedContent,
      restoreEditedContent: s.restoreEditedContent,
    })
  );
  const { form, isSubmitting } = useForm(
    ValidDictionaryChangeButtonsSchemaSchema
  );
  const { toast } = useToast();

  const editedDictionary = useMemo(
    () => editedContent[dictionary.key],
    [editedContent, dictionary.key]
  );

  const isEdited = useMemo(
    () =>
      editedDictionary &&
      JSON.stringify(editedDictionary?.content) !==
        JSON.stringify(dictionary?.content),
    [editedDictionary, dictionary]
  );

  const isLocalDictionary = useMemo(
    () => typeof (dictionary as DistantDictionary)?._id === 'undefined',
    [dictionary]
  );

  const onSubmitSuccess = async () => {
    await pushDictionaries([
      {
        ...dictionary,
        ...editedContent[dictionary.key],
      },
    ])
      .then(() => {
        toast({
          title: updateDictionaryToasts.updated.title.value,
          description: updateDictionaryToasts.updated.description,
          variant: 'success',
        });
      })
      .catch((error) => {
        toast({
          title: updateDictionaryToasts.failed.title.value,
          description: error.message,
          variant: 'error',
        });
      });
  };

  return (
    <div className="mb-4">
      <Form
        className="flex w-full flex-row flex-wrap justify-end gap-3"
        {...form}
        schema={ValidDictionaryChangeButtonsSchemaSchema}
        onSubmitSuccess={onSubmitSuccess}
      >
        {isEdited && (
          <Form.Button
            type="button"
            label={resetButton.label.value}
            disabled={!isEdited || isSubmitting}
            className="ml-auto"
            Icon={RotateCcw}
            variant="outline"
            color="text"
            isFullWidth
            isLoading={isSubmitting}
            onClick={() => restoreEditedContent(dictionary.key)}
          >
            {resetButton.text}
          </Form.Button>
        )}
        {isLocalDictionary ? (
          <Form.Button
            type="submit"
            label={publishButton.label.value}
            disabled={!isEdited || isSubmitting}
            Icon={ArrowUpFromLine}
            color="text"
            isFullWidth
            isLoading={isSubmitting}
          >
            {publishButton.text}
          </Form.Button>
        ) : (
          isEdited && (
            <Form.Button
              type="submit"
              label={saveButton.label.value}
              disabled={!isEdited || isSubmitting}
              Icon={Save}
              color="text"
              isFullWidth
              isLoading={isSubmitting}
            >
              {saveButton.text}
            </Form.Button>
          )
        )}
      </Form>
    </div>
  );
};
