import { PictService } from '@shared/api';
import { useDebounce } from '@shared/helpers';
import { ErrorInputMessage, InputBlockStyled } from '@shared/styles';
import {
  Select as AntdSelect, Flex, SelectProps, Spin,
} from 'antd';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  Control, Controller, FieldValues, Path, PathValue,
} from 'react-hook-form';
import { Loading } from '../Loading';

interface InputProps<TFieldValues extends FieldValues> extends SelectProps {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label: string;
    placeholder: string;
    type?: 'pictTags';
    defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
  }

export const Select = <TFieldValues extends FieldValues>({
  control,
  name,
  options,
  mode = 'multiple',
  type = 'pictTags',
  placeholder,
  defaultValue,
  label,
}: InputProps<TFieldValues>) => {
  const [reqOptions, setReqOptions] = useState<typeof options>(options || []);
  const [page, setPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const pageSize = 30;

  const getTags = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await PictService.getTags(pageSize, page);
      if (res.status === 200) {
        const transformedOptions = res.data.tags.map((tag) => ({
          key: tag.id,
          value: tag.value,
        }));
        setReqOptions((prevOptions) => [...(prevOptions || []), ...transformedOptions]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [loading, page, pageSize]);

  const searchTags = useCallback(async () => {
    try {
      const res = await PictService.getSearchTags(debouncedSearchTerm);
      if (res.status === 200) {
        const transformedOptions = res.data.tags.map((tag) => ({
          key: tag.id,
          value: tag.value,
        }));
        setReqOptions((prevOptions) => [...(prevOptions || []), ...transformedOptions]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchTerm]);

  const handleSearch = useCallback((value: string) => {
    setIsSearch(true);
    setPage(1);
    setReqOptions([]);
    setSearchTerm(value);
  }, []);

  const scroll = (e: any) => {
    e.persist();

    const { target } = e;
    const scrollThreshold = 5;

    if ((target.scrollHeight - target.scrollTop - target.offsetHeight) < scrollThreshold) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (!options && type === 'pictTags' && !isSearch) {
      getTags();
    }
  }, [page, options, isSearch]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchTags();
    } else {
      setIsSearch(false);
    }
  }, [debouncedSearchTerm]);

  const memoizedOptions = useMemo(() => {
    return reqOptions?.map((option) => (
      <AntdSelect.Option value={option.value} key={option.key}>{option.value}</AntdSelect.Option>
    ));
  }, [reqOptions]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error: fieldError } }) => {
        return (
          <InputBlockStyled>
            <span>{label}</span>
            <AntdSelect
              {...field}
              autoClearSearchValue={false}
              labelInValue
              notFoundContent={<Flex justify="center" style={{ padding: 32 }}><Spin /></Flex>}
              showSearch
              onPopupScroll={scroll}
              style={{ width: '100%' }}
              size="large"
              onSearch={handleSearch}
              placeholder={placeholder}
              mode={mode}
            >
              {memoizedOptions}
            </AntdSelect>
            {fieldError && (
              <ErrorInputMessage>{fieldError.message}</ErrorInputMessage>
            )}
          </InputBlockStyled>
        );
      }}
    />
  );
};
