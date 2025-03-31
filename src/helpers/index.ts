import { cartSchemaValidation } from "@/lib/validation"
import { z } from "zod"
import { UseFormReturn } from "react-hook-form"

const handleQuantity = (type: "increment" | "decrement", form: UseFormReturn<z.infer<typeof cartSchemaValidation>>) => {
    if (type === "increment") {
        form.setValue("quantity", form.getValues("quantity") + 1)
    } else {
        form.setValue("quantity", form.getValues("quantity") - 1)
        if (form.getValues("quantity") < 1) {
            form.setValue("quantity", 1)
        }
    }
}

export { handleQuantity }