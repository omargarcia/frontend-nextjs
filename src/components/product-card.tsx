
"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button'
import { deleteProduct } from '@/app/products/products.api';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
export function ProductCard({ product }: any) {

  const router = useRouter();


  async function handleRemoveProduct(id: any) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card >
      <CardHeader>
        <CardTitle className='flex justify-between' onClick={() => { router.push(`/products/${product.id}`) }}><span className='hover:underline underline-offset-2 cursor-pointer'>{product.name}</span>
          <span className='text-sm font-bold text-gray-500'>${product.price}</span>
        </CardTitle>
      </CardHeader>
      <Image className='min-h-80' src={product.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'} alt="" />
      <CardContent>
        <p className='mt-5'>{product.description}</p>

      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button className='mt-5' onClick={(e) => {
          e.stopPropagation()
          router.push(`/products/${product.id}/edit`)
        }}>Edit</Button>

        <Dialog >
          <DialogTrigger asChild>
            <Button className='mt-5' variant={'destructive'} onClick={(e) => {
              e.stopPropagation()
            }}>Delete</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogDescription>
                It will be completely deleted and cannot be recovered.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button className='mt-5' variant={'destructive'} onClick={(e) => {
                  e.stopPropagation()
                  handleRemoveProduct(product.id)
                }}>Delete</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
