import { Product } from "@casa-yolotl/shared/src/client";

export type ProductAvailabilityStatusType =
  | "available"
  | "limited"
  | "last_piece"
  | "sold_out"
  | "made_to_order";

export function getProductAvailability(product: Product): ProductAvailabilityStatusType {
  // If explicitly defined in the model, respect it
  if (product.availabilityStatus) return product.availabilityStatus;
  
  // Otherwise derive from stock
  if (product.stock <= 0) return "sold_out";
  if (product.stock === 1) return "last_piece";
  if (product.stock <= 3) return "limited";
  
  return "available";
}
