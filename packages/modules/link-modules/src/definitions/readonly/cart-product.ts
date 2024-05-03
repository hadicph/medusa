import { Modules } from "@medusajs/modules-sdk"
import { ModuleJoinerConfig } from "@medusajs/types"

export const CartProduct: ModuleJoinerConfig = {
  isLink: true,
  isReadOnlyLink: true,
  extends: [
    {
      serviceName: Modules.CART,
      relationship: {
        serviceName: Modules.PRODUCT,
        primaryKey: "id",
        foreignKey: "product_id",
        alias: "product",
      },
    },
    {
      serviceName: Modules.CART,
      relationship: {
        serviceName: Modules.PRODUCT,
        primaryKey: "id",
        foreignKey: "variant_id",
        alias: "variant",
        args: {
          methodSuffix: "Variants",
        },
      },
    },
    {
      serviceName: Modules.PRODUCT,
      relationship: {
        serviceName: Modules.CART,
        primaryKey: "variant_id",
        foreignKey: "id",
        alias: "carts",
        isList: true,
        args: {
          methodSuffix: "Variants",
        },
      },
    },
  ],
}
