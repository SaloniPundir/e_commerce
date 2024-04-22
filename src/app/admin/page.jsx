import React from 'react'
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '../../components/ui/card'
import db from '../../db/db'
import { formatNumber, formatCurrency } from '../../lib/formatters'

async function getSalesData(){
    var amount = 0
    var numberOfSales = 0
    const data = await db.order.aggregate({
    _sum:{pricePaidInCents:true},
    _count:true
    })

    return(
        amount= (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales= data._count
     )
}

async function getUserData(){
    var averageValuePerUser=0
    const userCount = await db.user.count()
    const orderData = await db.order.aggregate({
        _sum : {pricePaidInCents:true}
    })

    return(
        userCount,
        averageValuePerUser= userCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / userCount / 100
    )
}

async function getProductData(){
   const [activeCount, inactiveCount] = await Promise.all([ 
    db.product.count({where: { isAvailableForPurchase: true}}),
    db.product.count({where: { isAvailableForPurchase: false}})
])
return(
    {activeCount,inactiveCount}
)
}

async function AdminDashboard() {
    const salesData = await getSalesData()
    const userData = await getUserData()
    const productData = await getProductData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <Card>
                <CardHeader>
                    <CardTitle>Sales</CardTitle>
                    <CardDescription>{`${formatNumber(salesData.numberOfSales)} Orders`}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{formatCurrency(salesData.amount)}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Customers</CardTitle>
                    <CardDescription>{`${formatCurrency(userData.averageValuePerUser)} Average value `}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{formatNumber(userData.userCount)}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Active Products</CardTitle>
                    <CardDescription>{`${formatNumber(productData.inactiveCount)} Inactive`}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{formatNumber(productData.activeCount)}</p>
                </CardContent>
            </Card>
        </div>
    )
}


export default AdminDashboard
