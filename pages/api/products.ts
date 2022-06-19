import {NextApiRequest, NextApiResponse} from 'next'
import { ProductModel } from '../../models/product.model';
import dbConnect from '../../lib/mongo';

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  const { method , query} = req
  const {page, term, field, sort} = query as {page : string, term : string | undefined, field: string, sort : "ASC" | "DESC"}

  await dbConnect()

  const sortField = field === 'price' ?  sort === 'DESC' ?  'minPrice' : 'maxPrice' : field


  switch (method) {
    case 'GET':
      try {
          const total = await ProductModel.countDocuments()
          const products = await ProductModel
          .aggregate(aggregateSub(term))
          .sort({[sortField as string] : (sort === 'ASC' ? 1 : -1)})
          .skip(
            page === '0' ? 0 : parseInt(page.toString()) * 50
          ).limit(50)
          return res.status(200).json({ success: true, data: products, length : products.length, error: undefined, total  })
      } catch (error: any) {
        return res.status(500).json({ success: false , error: error.toString(), data: undefined, length: undefined})
      }
      break
    default:
      res.status(500).json({ success: false })
      break
  }
};


const aggregateSub = (term?: string,) => [

  {
    $project:  {
  _id: "$_id",
  goodName :"$goodName",
  offer:"$offer",
  actual:"$actual",
  shopName :"$shopName",
  link:"$link",
  category:"$category",
  prices: "$prices",
  maxPrice: {
     $filter: {
       input: "$prices",
       as: "item",
       cond: { $eq: [ "$$item.date", {$max:"$prices.date"} ] }
    }
  },
  minPrice: {
     $filter: {
       input: "$prices",
       as: "item",
       cond: { $eq: [ "$$item.date", {$min:"$prices.date"} ] }
    }
  },
  
 }
},
{
  $project:{
  _id: "$_id",
  goodName :"$goodName",
  offer:"$offer",
  actual:"$actual",
  shopName :"$shopName",
  link:"$link",
  category:"$category",
  prices: "$prices",
  minPrice: {$first: "$minPrice.price"},
  maxPrice: {$first: "$maxPrice.price"},
  sub: {
    $multiply:[
      {
        $divide:[
          {
             $subtract:[
               {$first: "$maxPrice.price"},
               {$first: "$minPrice.price"},
            ]
          },
          {$first: "$minPrice.price"}
        ]
      }
      ,100
    ]
  }
}
},
  term == undefined ? {
      $match: {
          _id : {$exists: true}
        } 
      
  } : {
         $match: ProductModel.where({"goodName": {'$regex': new RegExp(term), $options:'i'}  }).cast(ProductModel) 
  },

]