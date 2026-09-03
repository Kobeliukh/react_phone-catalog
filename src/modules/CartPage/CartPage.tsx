// import styles from './CartPage.module.scss';

import { PageHeader } from '@/shared/components/PageHeader';
import { PageLayout } from '@/shared/components/PageLayout';
import { Cart } from './components/Cart';
import { BackButton } from '@/shared/components/BackButton';

export const CartPage = () => {
  return (
    <PageLayout
      topNav={<BackButton />}
      header={<PageHeader title="Cart" productsCount={0} />}
    >
      <Cart />
    </PageLayout>
  );
};
