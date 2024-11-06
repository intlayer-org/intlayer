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
import { H2 } from '../Headers';
import { DictionaryDetailsForm } from './DictionaryDetails/DictionaryDetailsForm';
import { dictionaryFieldEditorContent } from './dictionaryFieldEditor.content';
import { EditorView } from './EditorView/EditorView';
import { KeyPathBreadcrumb } from './KeyPathBreadcrumb';
import { NavigationViewNode } from './NavigationView/NavigationViewNode';
import { SaveForm } from './SaveForm/SaveForm';

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
  const { returnToDictionaryList, titleContent, titleInformation } =
    useDictionary(dictionaryFieldEditorContent);

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

      <Container
        className="flex size-full justify-center gap-10 p-6"
        roundedSize="xl"
      >
        <H2>{titleInformation}</H2>

        <DictionaryDetailsForm dictionary={dictionary} />
      </Container>

      <Container
        className="flex size-full justify-center gap-10 p-6"
        roundedSize="xl"
      >
        <H2>{titleContent}</H2>

        <KeyPathBreadcrumb
          dictionaryKey={key}
          keyPath={focusedKeyPath ?? []}
          onClickKeyPath={setFocusedContentKeyPath}
        />
        <div className="flex gap-2 max-md:flex-col">
          <Container
            border
            background={false}
            className="top-6 flex h-full flex-col items-start gap-0.5 overflow-auto p-2 md:sticky md:max-w-[50%]"
            roundedSize="xl"
          >
            <NavigationViewNode
              keyPath={[]}
              section={section}
              dictionaryKey={key}
            />
          </Container>
          <div className="top-6 flex h-full flex-1 flex-col gap-6 md:sticky">
            {(focusedKeyPath?.length ?? 0) > 0 && (
              <Container
                border
                background={false}
                className="h-full flex-1 overflow-hidden"
                roundedSize="xl"
              >
                <EditorView dictionary={dictionary} dictionaryKey={key} />
              </Container>
            )}
            <SaveForm dictionary={dictionary} />
          </div>
        </div>
      </Container>
    </div>
  );
};
