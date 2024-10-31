'use client';

import { Dictionary } from '@intlayer/core';
import { ArrowLeft } from 'lucide-react';
import { type FC } from 'react';
import { useDictionary } from 'react-intlayer';
import { Button } from '../Button';
import { Container } from '../Container';
import {
  useEditedContentStore,
  useEditionPanelStore,
} from '../DictionaryEditor';
import { DictionaryDetailsForm } from './DictionaryDetailsForm';
import { dictionaryFieldEditorContent } from './dictionaryFieldEditor.content';
import { EditorView } from './EditorView/EditorView';
import { KeyPathBreadcrumb } from './KeyPathBreadcrumb';
import { NavigationViewNode } from './NavigationView/NavigationViewNode';

type DictionaryFieldEditorProps = {
  dictionary: Dictionary;
  onClickDictionaryList?: () => void;
};

export const DictionaryFieldEditor: FC<DictionaryFieldEditorProps> = ({
  dictionary,
  onClickDictionaryList,
}) => {
  const { content: dictionaryContent, key } = dictionary;
  const editedContent = useEditedContentStore((s) => s.editedContent);
  const { returnToDictionaryList } = useDictionary(
    dictionaryFieldEditorContent
  );

  const { focusedContent, setFocusedContentKeyPath, setFocusedContent } =
    useEditionPanelStore((s) => ({
      focusedContent: s.focusedContent,
      setFocusedContentKeyPath: s.setFocusedContentKeyPath,
      setFocusedContent: s.setFocusedContent,
    }));

  const focusedKeyPath = focusedContent?.keyPath;

  const section = editedContent[key]?.content ?? dictionaryContent;

  return (
    <div className="flex size-full flex-1 flex-col gap-10">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => {
            setFocusedContent(null);
            onClickDictionaryList?.();
          }}
          variant="hoverable"
          size="icon-md"
          color="text"
          id="return-to-dictionary-list"
          Icon={ArrowLeft}
          label={returnToDictionaryList.label.value}
        />
        <label
          className="cursor-pointer text-xs hover:underline"
          htmlFor="return-to-dictionary-list"
        >
          {returnToDictionaryList.text}
        </label>
      </div>

      <DictionaryDetailsForm dictionary={dictionary} />

      <KeyPathBreadcrumb
        dictionaryKey={key}
        keyPath={focusedKeyPath ?? []}
        onClickKeyPath={setFocusedContentKeyPath}
      />
      <div className="flex gap-2 max-md:flex-col">
        <Container className="border-text dark:border-text-dark flex h-full flex-col overflow-auto rounded-xl border-[1.5px] md:max-w-[50%]">
          <div className="flex flex-1 items-start gap-0.5 overflow-x-auto p-2">
            <NavigationViewNode
              keyPath={[]}
              section={section}
              dictionaryKey={key}
            />
          </div>
        </Container>
        {focusedKeyPath && (
          <Container className="border-text dark:border-text-dark sticky top-6 flex h-full flex-1 flex-col overflow-hidden rounded-xl border-[1.5px]">
            <EditorView dictionary={dictionary} dictionaryKey={key} />
          </Container>
        )}
      </div>
    </div>
  );
};
