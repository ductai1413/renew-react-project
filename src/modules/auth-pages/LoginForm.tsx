import { Link } from 'react-router-dom';
import { EyeCloseIcon, EyeIcon } from '@/assets/Icons';
import { Button, Checkbox, Input, Label } from '@/common-components';
import { useState } from 'react';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <form>
        <div className="space-y-6">
          <div>
            <Label>
              Email <span className="text-error-500">*</span>{' '}
            </Label>
            <Input placeholder="info@gmail.com" required />
          </div>
          <div>
            <Label>
              Password <span className="text-error-500">*</span>{' '}
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
              >
                {showPassword ? (
                  <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                ) : (
                  <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Checkbox checked={isChecked} onChange={setIsChecked} />
              <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                Keep me logged in
              </span>
            </div>
            <Link
              to="/reset-password"
              className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <Button className="w-full" size="sm" type="submit">
              Sign in
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
