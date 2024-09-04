import {
  Control, Controller, FieldValues, Path, PathValue,
} from 'react-hook-form';
import { Input as AntdInput } from 'antd';
import { InputBlockStyled } from './Input.styled';
import { ErrorInputMessage } from '../../../styles';

interface InputProps<TFieldValues extends FieldValues>{
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  type: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  defaultValue?: PathValue<TFieldValues, Path<TFieldValues>>;
}

export const Input = <TFieldValues extends FieldValues>({
  control,
  name,
  type,
  placeholder,
  isRequired = false,
  defaultValue,
  label,
}: InputProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error: fieldError } }) => {
        return (
          <InputBlockStyled>
            <span>{label}</span>
            {type === 'password' ? (
              <AntdInput.Password
                {...field}
                required={isRequired}
                variant="outlined"
                placeholder={placeholder}
                size="large"
              />
            )
              : (
                <AntdInput
                  {...field}
                  required={isRequired}
                  variant="outlined"
                  placeholder={placeholder}
                  size="large"
                />
              )}
            {fieldError && (
              <ErrorInputMessage>{fieldError.message}</ErrorInputMessage>
            )}
          </InputBlockStyled>
        );
      }}
    />
  );
};
