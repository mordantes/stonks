import {NextApiRequest, NextApiResponse} from 'next'
import { ProductModel } from '../../models/product.model';
import dbConnect from '../../lib/mongo';

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
          const categories = await ProductModel
			.aggregate(aggregateCat)
			.sort({"totalChanges" : -1})
		 const productsByCount = await ProductModel
		 	.aggregate(aggregateProduct)
			 .sort({ "prices" : -1 })
			 .limit(10)
      const productsByValue = await ProductModel
		 	.aggregate(aggregateProduct)
			 .sort({ "sub" : -1 })
			 .limit(10)
          return res.status(200).json({ success: true, data: {categories, productsByCount, productsByValue}})
      } catch (error) {
        return res.status(400).json({ success: false , message: 'Bad request.'})
      }
    default:
      res.status(400).json({ success: false })
      break
  }
};


const aggregateCat =  [
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
		$subtract:[
               {$first: "$maxPrice.price"},
               {$first: "$minPrice.price"},
		]  
  }
}
},
	{
		$project: {
			prices: {
				  $size: "$prices"
			},
      startPrice: "$startPrice",
      endPrice: "$endPrice",
      category: "$category",
      sub: "$sub",
      _id : "$_id"
		}	
	},{
		$group:{
		 	_id:"$category" ,
			totalValueChanges : {
				$sum : "$sub"
			},
			totalCountChanges: {
				$sum: "$prices"
			},
			totalStartValue: {
			  $sum: "$startPrice"
			},
			totalEndValue: {
			  $sum: "$endPrice"
			},
	    totalProducts: {
	      $sum: 1
	    }
		}
	}
]


const aggregateProduct = [
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
		$subtract:[
               {$first: "$maxPrice.price"},
               {$first: "$minPrice.price"},
		]  
  }
}
},
	{
		$project:{
			prices: {
				$size: "$prices"
			},
			goodName: "$goodName",
			sub:"$sub"
			
		}
	}
]
