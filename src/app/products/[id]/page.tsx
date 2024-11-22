import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

// interface Props {
//     params: {
//         id: string
//     }
// }

export default async function ProductDetailPage({ params }: any) {
    const product = await getProduct(params.id);

    console.log(product)
    return (
        <div className="h-5/6 mt-5 mx-auto max-w-[590px]">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        Product Detail: {product.id}
                        <Link className={buttonVariants()} href="/"><span className="font-black">&#x2190;</span></Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Image className="w-full  object-cover" src={product.image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'} alt="" />
                </CardContent>
            </Card>
        </div>
    )
}