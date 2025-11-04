import Input from '@/common-components/forms/input/Input';
import { Controller, useFormContext } from 'react-hook-form';

const TextInPut: React.FC<{
  name: string;
  defaultValue: string;
}> = ({ name, defaultValue, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: 'This Field is required' }}
      render={({ field, fieldState: { error } }) => (
        <Input type="text" {...field} error={!!error} {...props} helperText={error?.message} />
      )}
    />
  );
};

export default TextInPut;
