import React from 'react'
import PageHeader from '../_components/PageHeader'
import { Button } from '../../../components/ui/button'
import { Table,TableHeader,TableRow,TableHead,TableBody } from '../../../components/ui/table'
import Link from 'next/link'

function Productspage() {
    return (
        <>
            <div className='flex justify-between items-center gap-4'>
                <PageHeader>Products</PageHeader>
                <Button>
                    <Link href="/admin/products/new">Add Product</Link>
                </Button>
            </div>
            <ProductsTable />
           
        </>
    )
}

export default Productspage

const ProductsTable = () => {
    return(
    <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                
            </TableBody>
        </Table>

    </>
    )

}
