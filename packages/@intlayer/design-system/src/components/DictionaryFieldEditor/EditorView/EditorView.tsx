'use client';

import { type KeyPath, type Dictionary } from '@intlayer/core';
import { X } from 'lucide-react';
import { type FC } from 'react';
// @ts-ignore react-intlayer not build yet
import { useDictionary } from 'react-intlayer';
import { EditableFieldInput } from '../..//EditableField';
import {
  camelCaseToSentence,
  sentenceToCamelCase,
} from '../../../utils/camelCase';
import { getDictionaryValueByKeyPath } from '../../../utils/dictionary';
import { Button } from '../../Button';
import {
  useEditedContentStore,
  useEditionPanelStore,
} from '../../DictionaryEditor';
import { Label } from '../../Label';
import { editorViewContent } from '../editorView.content';
import { getIsEditableSection } from '../getIsEditableSection';
import { NodeTypeSelector } from '../NodeTypeSelector';
import { TextEditor } from './TextEditor';

type EditorViewProps = {
  dictionaryKey: string;
  dictionary: Dictionary;
};

export const EditorView: FC<EditorViewProps> = ({
  dictionaryKey,
  dictionary,
}) => {
  const { focusedContent, setFocusedContentKeyPath } = useEditionPanelStore(
    (s) => ({
      setFocusedContentKeyPath: s.setFocusedContentKeyPath,
      focusedContent: s.focusedContent,
    })
  );
  const keyPath = focusedContent?.keyPath ?? [];
  const initialKeyName = keyPath[keyPath.length - 1]?.key ?? '';
  const { titleInput, deleteButton, nodeTypeSelector } =
    useDictionary(editorViewContent);

  const { editedContent, renameEditedContent, addEditedContent } =
    useEditedContentStore((s) => ({
      editedContent: s.editedContent,
      renameEditedContent: s.renameEditedContent,
      addEditedContent: s.addEditedContent,
    }));

  const section = editedContent[dictionaryKey]?.content
    ? getDictionaryValueByKeyPath(editedContent[dictionaryKey].content, keyPath)
    : getDictionaryValueByKeyPath(dictionary.content, keyPath);

  const isEditableSection = getIsEditableSection(section);

  const handleRenameNodeKey = (keyName: string) => {
    const camelCaseSentence = sentenceToCamelCase(keyName);
    renameEditedContent(dictionaryKey, camelCaseSentence, keyPath);
    const prevKeyPath: KeyPath[] = keyPath.slice(0, -1);
    const lastKeyPath: KeyPath = keyPath[keyPath.length - 1];
    const newKeyPath: KeyPath[] = [
      ...prevKeyPath,
      { ...lastKeyPath, key: camelCaseSentence } as KeyPath,
    ];
    setFocusedContentKeyPath(newKeyPath);
  };

  return (
    <>
      {isEditableSection && (
        <TextEditor
          key={keyPath.join('.')}
          keyPath={keyPath}
          section={section}
          dictionaryKey={dictionaryKey}
        />
      )}
      {keyPath.length > 0 ? (
        <form
          className="bg-text text-text-dark dark:bg-text-dark dark:text-text flex w-full flex-col items-start justify-between gap-6 px-4 py-2"
          key={JSON.stringify(focusedContent?.keyPath)}
        >
          <div className="flex w-full flex-wrap items-start justify-between  gap-6">
            {typeof initialKeyName === 'string' && (
              <div className="flex flex-col gap-3">
                <Label>{titleInput.label}</Label>
                <div className="flex flex-wrap items-center gap-4">
                  <EditableFieldInput
                    name="key"
                    aria-label="Key"
                    key={initialKeyName}
                    placeholder={titleInput.placeholder.value}
                    defaultValue={camelCaseToSentence(initialKeyName)}
                    onSave={(value) => handleRenameNodeKey(value)}
                    className="h-8"
                    variant="invisible"
                  />
                  <span className="text-neutral dark:text-neutral-dark text-sm">
                    ({initialKeyName})
                  </span>
                </div>
              </div>
            )}

            <div>
              <Label>{nodeTypeSelector.label}</Label>

              <NodeTypeSelector
                keyPath={keyPath}
                dictionaryKey={dictionaryKey}
                section={section}
              />
            </div>
          </div>
          {keyPath.length > 0 && (
            <Button
              label={deleteButton.label.value}
              variant="outline"
              color="error"
              className="ml-auto"
              Icon={X}
              onClick={() => {
                addEditedContent(dictionaryKey, undefined, keyPath);

                const parentKeyPath: KeyPath[] = keyPath.slice(0, -1);
                setFocusedContentKeyPath(parentKeyPath);
              }}
            >
              {deleteButton.text}
            </Button>
          )}
        </form>
      ) : (
        <span className="h-8"></span>
      )}
    </>
  );
};
