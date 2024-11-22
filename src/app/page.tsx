

import { getProducts } from './products/products.api'
import { ProductCard } from '@/components/product-card';


export const dynamic = 'force-dynamic';

export default async function HomePage() {

  const products = await getProducts();

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-5'>
      {
        products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))
      }
    </div>
  )
}
