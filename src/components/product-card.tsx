
"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button'
import { deleteProduct } from '@/app/products/products.api';
import { useRouter } from 'next/navigation';
export function ProductCard({product}:any) {

const router = useRouter();

async function handleRemoveProduct(id:any){
    await deleteProduct(id);
    router.refresh();
}

  return (
    <Card onClick={()=>{ router.push(`/products/${product.id}`)}}>
          <CardHeader>
            <CardTitle className='flex justify-between'>{product.name}
              <span className='text-sm font-bold text-gray-500'>${product.price}</span>
            </CardTitle>
          </CardHeader>
          <img className='min-h-80' src={product.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'} alt="" />
          <CardContent>
            <p className='mt-5'>{product.description}</p>
            
          </CardContent>
          <CardFooter className='flex justify-between'>
          <Button className='mt-5' onClick={(e)=>{
            e.stopPropagation()
            router.push(`/products/${product.id}/edit`)
          }}>Edit</Button>
          <Button className='mt-5' variant={'destructive'} onClick={(e)=> 
            {
              e.stopPropagation()
              handleRemoveProduct(product.id)}}>Delete</Button>
          </CardFooter>
        </Card>
  )
}
