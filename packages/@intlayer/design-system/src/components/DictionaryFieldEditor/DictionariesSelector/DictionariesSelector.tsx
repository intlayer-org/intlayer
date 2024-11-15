'use client';

import { useMemo, type FC } from 'react';
// @ts-ignore react-intlayer not build yet
import { useDictionary } from 'react-intlayer';
import { useGetAllDictionaries } from '../../../hooks';
import { useEditionPanelStore } from '../../DictionaryEditor';
import { Loader } from '../../Loader';
import { DictionaryFieldEditor } from '../DictionaryFieldEditor';
import { dictionariesSelectorContent } from './dictionariesSelector.content';

type DictionariesSelectorProps = {
  onClickDictionaryList: () => void;
};

export const DictionariesSelector: FC<DictionariesSelectorProps> = ({
  onClickDictionaryList,
}) => {
  const { online, locale, isLoading } = useGetAllDictionaries();
  const { focusedContent } = useEditionPanelStore((s) => ({
    focusedContent: s.focusedContent,
  }));
  const { noDictionaryMessage, dictionaryNotFoundMessage } = useDictionary(
    dictionariesSelectorContent
  );
  const dictionary = useMemo(
    () =>
      focusedContent?.dictionaryId
        ? (online?.[focusedContent?.dictionaryId] ??
          locale?.[focusedContent?.dictionaryId])
        : null,
    [online, locale, focusedContent?.dictionaryId]
  );

  if (isLoading) return <Loader />;

  if (!focusedContent?.dictionaryId) return noDictionaryMessage;

  if (!dictionary) return dictionaryNotFoundMessage;

  return (
    <DictionaryFieldEditor
      dictionary={dictionary}
      onClickDictionaryList={onClickDictionaryList}
    />
  );
};
