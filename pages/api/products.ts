import {NextApiRequest, NextApiResponse} from 'next'
import { ProductModel } from '../../models/product.model';
import dbConnect from '../../lib/mongo';

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  const { method , query} = req
  const {page, term} = query as {page : string, term : string | undefined}

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
          const products = await ProductModel
          .aggregate(aggregateSub(term))
          .sort({"sub" : -1})
          .skip(
            page === '0' ? 0 : parseInt(page.toString()) * 50
          ).limit(
            page === '0' ? 50 : parseInt(page.toString()) * 50
          )

          return res.status(200).json({ success: true, data: products, length : products.length })
      } catch (error) {
        return res.status(400).json({ success: false , message: 'Bad request.'})
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
};


const aggregateSub = (term?: string ) => [

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