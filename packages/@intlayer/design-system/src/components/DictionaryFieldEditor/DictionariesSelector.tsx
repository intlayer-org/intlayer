'use client';

import type { FC } from 'react';
import { useDictionary } from 'react-intlayer';
import { useGetAllDictionaries } from '../../hooks';
import { useEditionPanelStore } from '../DictionaryEditor';
import { Loader } from '../Loader';
import { dictionariesSelectorContent } from './dictionariesSelector.content';
import { DictionaryFieldEditor } from './DictionaryFieldEditor';

type DictionariesSelectorProps = {
  onClickDictionaryList: () => void;
};

export const DictionariesSelector: FC<DictionariesSelectorProps> = ({
  onClickDictionaryList,
}) => {
  const { all, isLoading } = useGetAllDictionaries();
  const { focusedContent } = useEditionPanelStore((s) => ({
    focusedContent: s.focusedContent,
  }));
  const { noDictionaryMessage, dictionaryNotFoundMessage } = useDictionary(
    dictionariesSelectorContent
  );

  if (isLoading) return <Loader />;

  if (!focusedContent?.dictionaryId) return noDictionaryMessage;

  const dictionary = all?.[focusedContent?.dictionaryId];

  if (!dictionary) return dictionaryNotFoundMessage;

  return (
    <DictionaryFieldEditor
      dictionary={dictionary}
      onClickDictionaryList={onClickDictionaryList}
    />
  );
};
