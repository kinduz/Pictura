import { ErrorInputMessage, LinkStyled } from '@shared/styles';
import { FC } from 'react';
import {
  Control, Controller, FieldValues, Path, PathValue,
} from 'react-hook-form';
import { InputBlockStyled } from '../Input/ui/Input.styled';
import { CheckboxStyled } from './Checkbox.styled';

interface InputProps<TFieldValues extends FieldValues>{
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
    label: string;
    isRequired?: boolean;
    type?: string;
    defaultValue?: boolean;
  }

export const Checkbox = <TFieldValues extends FieldValues>({
  control,
  name,
  isRequired = false,
  defaultValue = false,
  type,
  label,
}: InputProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      // @ts-ignore
      defaultValue={defaultValue}
      render={({ field, fieldState: { error: fieldError } }) => {
        return (
          <InputBlockStyled>
            <CheckboxStyled defaultChecked={defaultValue} required={isRequired} {...field}>
              {type === 'accessPolicy' ? (
                <span>
                  Регистрируясь, вы принимаете
                  {' '}
                  <LinkStyled to="/policy">пользовательское соглашение</LinkStyled>
                </span>
              ) : label}
            </CheckboxStyled>
            {fieldError && (
              <ErrorInputMessage>{fieldError.message}</ErrorInputMessage>
            )}
          </InputBlockStyled>
        );
      }}
    />
  );
};
