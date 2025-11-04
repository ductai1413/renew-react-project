import { FormProvider, useForm } from 'react-hook-form';
import {
  Button,
  ComponentGroup,
  FileDropzone,
  FileInput,
  Label,
  PageMetadata,
} from '@/common-components';
import TextInPut from '@/common-components/forms/input/TextInput';
import PageBreadcrumb from '@/common-components/PageBreadcrumb';

const FormElements: React.FC = () => {
  const methods = useForm();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div>
      <PageMetadata title="Form Elements" description="Form Elements page" />
      <PageBreadcrumb title="Form Elements" />

      <FormProvider {...methods}>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <ComponentGroup title="Default Inputs">
              <Label>Input</Label>
              <TextInPut name="demo" defaultValue="demo value" />
            </ComponentGroup>
            <ComponentGroup title="File Input">
              <Label>File Input</Label>
              <FileInput onChange={handleFileChange} />
            </ComponentGroup>
          </div>
          <div className="space-y-6">
            <ComponentGroup title="Button">
              <Label>Input</Label>
              <TextInPut name="demo" defaultValue="demo value" />

              <Label>Button</Label>
              <Button size="sm" type="button">
                Basic Button
              </Button>
            </ComponentGroup>
            <ComponentGroup title="Dropzone">
              <Label>Button</Label>
              <FileDropzone />
            </ComponentGroup>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default FormElements;
