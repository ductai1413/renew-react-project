import React from 'react';
import PageContent from '@/modules/page-layouts/PageContent';
import { Button, PageMetadata } from '@/common-components';
import PageBreadcrumb from '@/common-components/PageBreadcrumb';
import { useAppDispatch, useAppSelector } from '@/states/hook';
import { decrement, increment } from '@/states/reducers/CounterSlice';

const Counter = () => {
  const count = useAppSelector(state => state.CouterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <Button onClick={() => dispatch(increment())} className="mr-2">
        +
      </Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <PageMetadata title="Dashboard" description="Dashboard page" />
      <PageBreadcrumb title="Dashboard" />

      <PageContent>
        <Counter />
      </PageContent>
    </div>
  );
};
export default Dashboard;
