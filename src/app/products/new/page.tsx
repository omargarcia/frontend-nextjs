import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductForm } from "./product-form"
import { getProduct } from "../products.api"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

interface Props {
  params: {
    id: string
  }
}
async function ProductsNewPage({ params }: any) {

  const { id } = await params
  const product = await getProduct(id);

  return (
    <div className="h-5/6 mt-5 mx-auto max-w-[590px]">
      <Card>
        <CardHeader >
          <div className='flex justify-between'>
            <CardTitle>{id ? 'Update Product' : 'Create Product'}</CardTitle>

            <Link href="/" className={buttonVariants()}> <span className="font-black">&#x2190;</span></Link>
          </div>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductsNewPage